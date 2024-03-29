import Link from "next/link";
import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Work", href: "/work", current: false },
  { name: "Project", href: "/project", current: false },
  { name: "Photon", href: "/photon", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "Contact", href: "/contact", current: false },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Navbar = () => {
  return (
    <div className="max-w-6xl px-4 mx-auto">
      <Disclosure as="nav" className="my-5">
        {({ open }) => (
          <>
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center">
                {/** This div was on the right displaying a bell icon for notification and the avatar */}
              </div>
              <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a>
                      <Image
                        priority
                        src="/images/logo.svg"
                        className="block lg:block h-8 w-auto"
                        height="50"
                        width="50"
                        alt="logo"
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map(item => (
                      <Link href={item.href} key={item.name}>
                        <a
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-500 hover:text-gray-800",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            <Transition
              show={open}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map(item => (
                    <Link href={item.href} key={item.name}>
                      <a
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-500 hover:text-gray-800",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;
