import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className="flex flex-col justify-center h-screen max-w-screen-lg px-4 mx-auto md:px-0">
       <div className="mt-8">
          <h2 className="text-4xl font-semibold md:text-6xl">Small projects</h2>
          <ul className="mt-6 text-base md:text-lg">
            <li>
              <a
                href="https://weeknumber.vercel.app"
                target="_blank"
                className="underline transition-all underline-offset-2 hover:underline-offset-4">
                Week Number
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}
