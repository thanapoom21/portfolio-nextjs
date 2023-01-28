import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Icon } from "@chakra-ui/react";
import { FaTwitter, FaGithub } from "react-icons/fa";

const navigation = [
  {
    name: "Github",
    href: "https://github.com/thanapoom21",
    current: false,
    icon: FaGithub,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/music_ptjrk",
    current: false,
    icon: FaTwitter,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Footer() {
  return (
    <Disclosure as="footer" className="max-w-6xl px-4 my-4 mx-auto">
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
                <Icon as={item.icon} boxSize={6} /> {item.name}
              </a>
            </Link>
          ))}
        </>
      )}
    </Disclosure>
  );
}
