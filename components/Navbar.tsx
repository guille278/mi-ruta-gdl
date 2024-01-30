import Link from "next/link";
import { navLinks } from "@/constants/index";

export default function Navbar() {
  return (
    <header>
      <Link href="/">Navbar</Link>
      <nav>
        <ul>
          {navLinks.map(link => (
            <li key={link.id}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
