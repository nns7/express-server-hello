import { FC, useState } from "react";

const nav = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Work",
    href: "#work",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="relative z-10 bg-white ring-1 ring-gray-900 ring-opacity-5 shadow-sm">
      <div className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex items-center justify-between py-4">
          <div className="w-full flex items-center">
            <h1 className="text-4xl font-semibold flex-shrink-0">My Profile</h1>
            <div className="w-full ml-0 flex justify-end lg:justify-start lg:ml-16">
              <button
                type="button"
                className="flex justify-center items-center h-10 w-10 rounded-md lg:hidden hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring-2 focus:ring-gray-200"
                onClick={toggle}
                aria-expanded={`${isOpen ? "true" : "false"}`}
                aria-owns="mainmenu"
              >
                <span className="sr-only">メインメニューを開閉する</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <nav
                id="mainmenu"
                className={`${isOpen ? "" : "hidden"}
                                absolute top-20 right-0 z-20 bg-white rounded-md shadow-lg p-4 lg:block lg:relative lg:top-0 lg:shadow-none lg:p-0`}
                aria-label="メインメニュー"
              >
                <ul className="space-y-2 lg:flex lg:items-center lg:space-x-8 lg:space-y-0">
                  {nav.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 rounded-md text-base font-bold text-gray-900 lg:inline-block hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring-2 focus:ring-gray-200"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
