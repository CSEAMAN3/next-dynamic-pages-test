import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>Header</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/paddle">Paddle</Link>
      </nav>
    </header>
  );
}
