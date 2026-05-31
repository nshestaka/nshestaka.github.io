import { motion, type Variants } from 'motion/react'
import { EASE_OUT_QUART } from '../lib/motion'

const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: EASE_OUT_QUART },
  }),
}

function Contact() {
  return (
    <footer id="contact" className="border-t border-line bg-white px-6 pb-20 pt-14 text-center md:px-12 md:pt-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-10%' }}
        className="mx-auto max-w-3xl space-y-8"
      >
        <motion.h2
          variants={fade}
          custom={0}
          className="font-serif text-3xl font-medium text-ink md:text-5xl"
        >
          Does this match what
          <br />
          you’re looking for?
        </motion.h2>
        <motion.p
          variants={fade}
          custom={1}
          className="text-sm font-light text-mute"
        >
          Let’s connect to build exceptional interactions.
        </motion.p>

        <motion.div
          variants={fade}
          custom={2}
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          <a
            href="https://www.linkedin.com/in/natalia-shestaka/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-xs font-medium text-ink transition-all hover:bg-paper-soft"
          >
            <svg className="h-4 w-4 text-[#0a66c2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.015-.51.09-.69.2-.5.65-1 1.41-1 1 0 1.39.75 1.39 1.86v4.5h2.8M6.81 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.42v8.37h2.78z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="mailto:natalia.shestaka@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-xs font-medium text-ink transition-all hover:bg-paper-soft"
          >
            <svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Write an email
          </a>
          <a
            href="https://t.me/natalishestaka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-xs font-medium text-ink transition-all hover:bg-paper-soft"
          >
            <svg className="h-4 w-4 text-sky-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.62.15-.15 2.7-2.46 2.75-2.67.01-.03.01-.13-.05-.18-.06-.05-.14-.03-.2-.02-.08.02-1.35.86-3.82 2.52-.36.25-.69.37-.98.36-.33 0-.96-.18-1.43-.33-.58-.19-1.04-.29-1-.62.02-.17.25-.34.69-.51 2.68-1.17 4.47-1.94 5.37-2.3 2.56-1.03 3.09-1.21 3.44-1.21.08 0 .25.02.36.11.09.07.12.17.13.25l-.02.15z" />
            </svg>
            Telegram
          </a>
          <a
            href="https://wa.me/34600330016"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-xs font-medium text-ink transition-all hover:bg-paper-soft"
          >
            <svg className="h-4 w-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            WhatsApp
          </a>
        </motion.div>

        <motion.p variants={fade} custom={3} className="pt-12 text-xs text-mute-soft">
          © {new Date().getFullYear()} · natalia shestaka.
        </motion.p>
      </motion.div>
    </footer>
  )
}

export default Contact
