import Link from "next/link";

const links = [
  {
    name: "Home",
    path: "/",
  },
];

export default function Navbar() {
  return (
    <nav className="p-4 border-b border-b-primary fixed top-0 min-w-full">
      <ul className="flex flex-row gap-4 text-2xl justify-center">
        {links.map((link) => (
          <li className="hover:bg-accent" key={"link:" + link.name}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
