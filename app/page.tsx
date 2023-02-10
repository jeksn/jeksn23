import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="h-screen mx-auto">
    <header className="w-full px-4 md:px-0">
      <div className="max-w-screen-lg py-4 mx-auto flex justify-between items-center">
        <a href="/" className="px-4 py-2 text-sm text-black bg-white rounded-sm hover:rounded-xl transition-all ease-in-out duration-700">
          jeksn.me
        </a>
        <a href="https://github.com/jeksn/jeksn23" className="text-sm transition-all ease-in-out hover:-translate-y-[2px]">repo</a>
      </div>
    </header>
    <div className="flex flex-col justify-center px-4 md:px-0 translate-y-[200px]">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="mt-4 text-4xl font-semibold md:text-6xl">
          Front-end&nbsp;
          <a href="https://github.com/jeksn" className="underline underline-offset-4 hover:underline-offset-8 transition-all">developer</a> based in&nbsp;
          <a href="https://en.wikipedia.org/wiki/Stockholm" className="underline underline-offset-4 hover:underline-offset-8 transition-all">Stockholm, 🇸🇪</a>
        </h2>
        <p className="max-w-screen-lg mt-6 text-lg md:text-2xl">
          I'm a design minded developer currently working at&nbsp; 
          <a href="https://wtmg.se" className="underline underline-offset-4 hover:underline-offset-8 transition-all">WTMG.</a><br />
          Don't hesitate to get in touch.
        </p>
        <div className="mt-8">
          <h2 className="text-lg md:text-2xl">Where to find me:</h2>
          <ul className="text-base md:text-lg">
            <li>
              <a
                href="https://twitter.com/jeksn_"
                target="_blank"
                className="underline underline-offset-2 hover:underline-offset-4 transition-all">
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jeksn/"
                target="_blank"
                className="underline underline-offset-2 hover:underline-offset-4 transition-all">
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://oku.club/user/jek5n"
                target="_blank"
                className="underline underline-offset-2 hover:underline-offset-4 transition-all">
                Oku.club
              </a>
            </li>
            <li>
              <a
                href="mailto:johan@jeksn.me"
                target="_blank"
                className="underline underline-offset-2 hover:underline-offset-4 transition-all">
                E-mail me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
  )
}
