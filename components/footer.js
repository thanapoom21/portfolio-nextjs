import Link from "next/link";
import { Disclosure } from "@headlessui/react";

const navigation = [
  { name: "Github", href: "https://github.com/thanapoom21", current: false },
  { name: "Twitter", href: "https://twitter.com/music_ptjrk", current: false },
  // { name: "Instagram", href: "https://www.instagram.com/musictp/", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Footer() {
  return (
    <Disclosure as="footer" className="max-w-6xl px-4 mx-auto mt-12 mb-24">
      {() => (
        <>
          {navigation.map(item => (
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
