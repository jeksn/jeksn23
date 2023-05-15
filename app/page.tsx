export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 md:px-0">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="mt-4 text-4xl font-semibold md:text-6xl">
          Front-end&nbsp;
          <a
            href="https://github.com/jeksn"
            className="underline transition-all underline-offset-4 hover:underline-offset-8"
          >
            developer
          </a>{" "}
          based in&nbsp;
          <a
            href="https://en.wikipedia.org/wiki/Stockholm"
            className="underline transition-all underline-offset-4 hover:underline-offset-8"
          >
            Stockholm, 🇸🇪
          </a>
        </h2>
        <p className="max-w-screen-lg mt-6 text-lg md:text-2xl">
          I'm a design minded developer currently working at&nbsp;
          <a
            href="https://wtmg.se"
            className="underline transition-all underline-offset-4 hover:underline-offset-8"
          >
            WTMG.
          </a>
          <br />
          Don't hesitate to get in touch.
        </p>
        <div className="mt-8">
          <h2 className="text-lg md:text-2xl">Where to find me:</h2>
          <ul className="text-base md:text-lg">
            <li>
              <a
                href="https://github.com/jeksn"
                target="_blank"
                rel="noreferrer"
                className="underline transition-all underline-offset-2 hover:underline-offset-4"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/jeksn_"
                target="_blank"
                rel="noreferrer"
                className="underline transition-all underline-offset-2 hover:underline-offset-4"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jeksn/"
                target="_blank"
                rel="noreferrer"
                className="underline transition-all underline-offset-2 hover:underline-offset-4"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://read.cv/jeksn"
                target="_blank"
                rel="noreferrer"
                className="underline transition-all underline-offset-2 hover:underline-offset-4"
              >
                Read.cv
              </a>
            </li>
            <li>
              <a
                href="https://oku.club/user/jek5n"
                target="_blank"
                rel="noreferrer"
                className="underline transition-all underline-offset-2 hover:underline-offset-4"
              >
                Oku.club
              </a>
            </li>
            <li>
              <a
                href="mailto:johan@jeksn.me"
                target="_blank"
                rel="noreferrer"
                className="underline transition-all underline-offset-2 hover:underline-offset-4"
              >
                E-mail me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
