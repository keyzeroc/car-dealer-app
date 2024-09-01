import Link from "next/link";

const links = [
  {
    name: "Home",
    path: "/",
  },
];

export default function Navbar() {
  return (
    <nav className="p-4 border-b border-b-primary">
      <ul className="flex flex-row gap-4 text-2xl">
        {links.map((link) => (
          <li className="hover:bg-accent" key={"link:" + link.name}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
