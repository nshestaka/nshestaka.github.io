import { useSyncExternalStore } from 'react'

/**
 * Minimal history-API router — the site ships no routing dependency, so we
 * expose the current pathname as an external store and a `navigate` helper
 * that pushes state and notifies subscribers. Enough to switch between the
 * scrollytelling home page and the full case-study pages.
 */

const NAVIGATE_EVENT = 'app:navigate'

function subscribe(callback: () => void) {
  window.addEventListener('popstate', callback)
  window.addEventListener(NAVIGATE_EVENT, callback)
  return () => {
    window.removeEventListener('popstate', callback)
    window.removeEventListener(NAVIGATE_EVENT, callback)
  }
}

function getSnapshot() {
  return window.location.pathname
}

export function usePathname() {
  return useSyncExternalStore(subscribe, getSnapshot)
}

export function navigate(to: string) {
  if (to === window.location.pathname + window.location.hash) return
  window.history.pushState(null, '', to)
  window.dispatchEvent(new Event(NAVIGATE_EVENT))
  // Preserve the scroll position when the target carries a hash — the
  // destination page scrolls to that section itself.
  if (!to.includes('#')) window.scrollTo(0, 0)
}

/**
 * Intercept a left-click on an internal link so it routes client-side, while
 * still honouring modifier clicks (open-in-new-tab) and middle-clicks.
 */
export function onInternalLinkClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  to: string,
) {
  if (e.defaultPrevented) return
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
  e.preventDefault()
  navigate(to)
}
