export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-10 border-t-2 border-magazine-gray/40 pt-6 pb-4 text-magazine-gray">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-2 md:flex-row md:px-6">
        <p className="text-center text-xs tracking-[0.12em] md:text-sm">
          © {currentYear} Erick Dejo. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.16em] md:text-sm">
          <a
            href="https://www.linkedin.com/in/erick-dejo-vicente-b819601b6/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:opacity-70"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/erickdejo/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:opacity-70"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
