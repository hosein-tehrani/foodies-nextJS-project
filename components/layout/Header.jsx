import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.css";
import logo from "@/assets/logo.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={logo} priority alt="a plate with foods" />
        nextlevel food
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
