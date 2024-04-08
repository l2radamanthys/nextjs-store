import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <ul>
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