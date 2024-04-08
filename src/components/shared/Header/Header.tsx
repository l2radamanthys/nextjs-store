import Link from 'next/link';
import styles from './Header.module.css'


export const Header = () => {
  return (
    <header>
      <ul className={styles.Header__list}>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/store">
            Store
          </Link>
        </li>
      </ul>
    </header>
  )
}