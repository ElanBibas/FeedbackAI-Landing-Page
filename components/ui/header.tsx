import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Banner from "@/components/ui/banner";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <Banner
        imageUrl="/Crossmint.png"
        text="Cycle has been acquired by Crossmint"
        linkUrl="https://www.crossmint.com/?gad_source=1&gclid=CjwKCAjwjqWzBhAqEiwAQmtgT8NXAG6exvKcbaXMOaXJYfl_8HlBZN6iyk1rkZ2RNTjuL2nPHVXmnhoCoWcQAvD_BwE"
        linkText="Visit Crossmint's Announcement"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mt-14 flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="152"
                height="40"
                viewBox="0 0 152 40"
                fill="none"
              >
                <path
                  d="M37.449 24.2308C35.5613 31.7444 28.7614 37.3077 20.6621 37.3077C11.1033 37.3077 3.35442 29.5588 3.35442 20C3.35442 10.4412 11.1033 2.69231 20.6621 2.69231C28.7614 2.69231 35.5613 8.25557 37.449 15.7692H40.2138C38.2725 6.75549 30.2562 0 20.6621 0C9.61641 0 0.662109 8.95431 0.662109 20C0.662109 31.0457 9.61641 40 20.6621 40C30.2562 40 38.2725 33.2445 40.2138 24.2308H37.449Z"
                  fill="#DB1515"
                />
                <path
                  d="M30.9856 24.2308C29.3191 28.2929 25.3247 31.1538 20.6621 31.1538C14.502 31.1538 9.50826 26.1601 9.50826 20C9.50826 13.8399 14.502 8.84615 20.6621 8.84615C25.3247 8.84615 29.3191 11.7071 30.9856 15.7692H33.85C32.062 10.1915 26.8336 6.15385 20.6621 6.15385C13.0151 6.15385 6.81596 12.353 6.81596 20C6.81596 27.647 13.0151 33.8462 20.6621 33.8462C26.8336 33.8462 32.062 29.8085 33.85 24.2308H30.9856Z"
                  fill="#DB1515"
                />
                <path
                  d="M20.6621 24.2308C18.3255 24.2308 16.4313 22.3366 16.4313 20C16.4313 17.6634 18.3255 15.7692 20.6621 15.7692H26.1425C24.8763 14.1315 22.8924 13.0769 20.6621 13.0769C16.8386 13.0769 13.739 16.1765 13.739 20C13.739 23.8235 16.8386 26.9231 20.6621 26.9231C22.8924 26.9231 24.8763 25.8685 26.1425 24.2308H20.6621Z"
                  fill="#DB1515"
                />
                <path
                  d="M39.1236 13.0769H20.6621V15.7692H39.1236V13.0769Z"
                  fill="#DB1515"
                />
                <path
                  d="M39.1236 24.2308H20.6621V26.9231H39.1236V24.2308Z"
                  fill="#DB1515"
                />
                <path
                  d="M62.3241 26.6366C59.7369 26.6366 57.7573 26.042 56.3853 24.853C55.0133 23.6508 54.3273 21.8738 54.3273 19.5218C54.3273 17.1828 55.0133 15.4123 56.3853 14.2102C57.7573 13.008 59.7369 12.4135 62.3241 12.4266L69.3801 12.4658V14.9746H62.5397C60.841 14.9746 59.5801 15.3339 58.7569 16.0526C57.9337 16.7712 57.5221 17.9276 57.5221 19.5218C57.5221 21.1159 57.9337 22.2788 58.7569 23.0106C59.5801 23.7292 60.841 24.0886 62.5397 24.0886H69.5761V26.6366H62.3241ZM79.0377 26.5386V21.5406L71.6093 12.5246H75.4901L80.6057 18.875L85.7017 12.5246H89.5825L82.1933 21.521V26.5386H79.0377ZM98.1407 26.6366C95.5535 26.6366 93.5739 26.042 92.2019 24.853C90.8299 23.6508 90.1439 21.8738 90.1439 19.5218C90.1439 17.1828 90.8299 15.4123 92.2019 14.2102C93.5739 13.008 95.5535 12.4135 98.1407 12.4266L105.197 12.4658V14.9746H98.3563C96.6576 14.9746 95.3967 15.3339 94.5735 16.0526C93.7503 16.7712 93.3387 17.9276 93.3387 19.5218C93.3387 21.1159 93.7503 22.2788 94.5735 23.0106C95.3967 23.7292 96.6576 24.0886 98.3563 24.0886H105.393V26.6366H98.1407ZM108.798 26.5386V12.5246H111.934V23.9906H122.185V26.5386H108.798ZM125.596 26.5386V12.5246H140.963V15.0726H128.732V18.1694H139.826V20.7174H128.732V23.9906H140.963V26.5386H125.596Z"
                  fill="#DB1515"
                />
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  target="_blank"
                  href="https://getcycle.vercel.app/"
                  rel="noopener noreferrer"
                  className="font-medium text-red-100 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Try Cycle
                </Link>
              </li>
              <li>
                <Link
                  href="#contact-us"
                  className="btn-sm text-white bg-red-100 hover:bg-red-100/75 ml-3"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
