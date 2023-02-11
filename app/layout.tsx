import { AnalyticsWrapper } from './components/analytics';
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <main className="mx-auto">
      <header className="fixed w-full px-4 md:px-0">
        <div className="flex items-center justify-between max-w-screen-lg py-4 mx-auto">
          <div>
            <a href="/" className="px-4 py-2 text-sm text-black transition-all duration-700 ease-in-out bg-white rounded-sm hover:rounded-xl">
              jeksn.me
            </a>
            </div>
            <div className="flex gap-8">
              <a 
              href="/small-projects" 
              className="text-sm transition-all ease-in-out hover:-translate-y-[2px]">
                small projects
              </a>
              <a 
              href="https://github.com/jeksn/jeksn23" 
              className="text-sm transition-all ease-in-out hover:-translate-y-[2px]">
                repo
              </a>
          </div>
        </div>
    </header>
        {children}
        <AnalyticsWrapper />
      </main>
      </body>
    </html>
  );
}

