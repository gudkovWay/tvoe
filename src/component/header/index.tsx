import Link from 'next/link';

import Icons from '@/component/icons';
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/" className={styles.header__logo}><Icons iconName="logo" /> </Link>
        <ul className={styles.header__menu}>
          <Link href="/search"><Icons iconName="search" /></Link>
          <Link href="/home"><Icons iconName="home" /></Link>
          <Link href="/movie"><Icons iconName="movie" /></Link>
          <Link href="/brightness"><Icons iconName="brightness" /></Link>
          <Link href="/tv"><Icons iconName="tv" /></Link>
          <Link href="/favorites"><Icons iconName="heart" /></Link>
          <Link href="/profile"><Icons iconName="user" /></Link>
          <Link href="/video"><Icons iconName="video" /></Link>
        </ul>
        <Link href="#up"><Icons iconName="arrowUp" /></Link>
      </nav>
    </header>
  )
}

export default Header;
