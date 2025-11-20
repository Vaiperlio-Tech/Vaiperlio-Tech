import Link from "next/link";

export default function Footer() {
  const NEXT_PUBLIC_LINK_INSTAGRAM =
    process.env.NEXT_PUBLIC_LINK_INSTAGRAM || "/";
  const NEXT_PUBLIC_LINK_EMAIL = process.env.NEXT_PUBLIC_LINK_EMAIL || "/";
  const NEXT_PUBLIC_LINK_GITHUB = process.env.NEXT_PUBLIC_LINK_GITHUB || "/";
  return (
    <footer className="bg-setup-base  w-full text-white">
      <div className="mx-auto w-full max-w-7xl">
        <div className="py-6 bg-neutral-secondary-soft flex flex-col md:flex-row w-full items-center justify-between">
          <span className="text-sm text-body text-center">
            © 2026 <Link href={"/"}>Vaiperlio Tech™</Link>. All Rights
            Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-2 rtl:space-x-reverse">
            <Link
              href={NEXT_PUBLIC_LINK_INSTAGRAM}
              className="text-body hover:text-heading"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href={NEXT_PUBLIC_LINK_EMAIL}
              className="text-body hover:text-heading ms-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-regular fa-envelope"></i>
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href={NEXT_PUBLIC_LINK_GITHUB}
              className="text-body hover:text-heading ms-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
              <span className="sr-only">GitHub account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
