import Link from "next/link";
import { Disclosure } from "@headlessui/react";

const navigation = [
  { name: "Github", href: "https://www.github.com", current: false },
  { name: "Twitter", href: "https://www.twitter.com", current: false },
  { name: "Facebook", href: "https://www.facebook.com", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="footer" className="max-w-6xl px-4 mx-auto mt-12 mb-24">
      {() => (
        <>
          {navigation.map((item) => (
            <Link href={item.href} key={item.name}>
              <a
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:text-gray-800",
                  "pr-3 py-2"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;