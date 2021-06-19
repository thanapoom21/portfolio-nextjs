import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <ul className={styles.menu}>
        <li className={styles.list}>
          <Link href="/works">
            <a>Works</a>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
