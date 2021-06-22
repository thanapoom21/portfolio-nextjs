import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import styles from "./footer.module.css";

const navigation = [
  { name: "Github", href: "https://www.github.com", current: false },
  { name: "Twitter", href: "https://www.twitter.com", current: false },
  { name: "Facebook", href: "https://www.facebook.com", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="footer" className={styles.container}>
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
