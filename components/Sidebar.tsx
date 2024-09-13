import Link from 'next/link';
import Button from "./Button"

const navigation = [
  { name: "My Projects", href: "/technical" },
  { name: "My Podcast", href: "/personal" },
  { name: "About Me", href: "/about-me" },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-screen text-white flex flex-col p-6 absolute top-0 left-0 h-full w-64 bg-gradient-to-b from-purple-200 via-transparent to-white opacity-80">

      <div className="mb-8">
        {/* Make "Tangyan" clickable */}
        <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Aria's Space</span>
            <img className="h-8 w-auto" src="/programmer.png" alt="" />
          </a>
        <Link href="/">
          <h2 className="text-2xl font-bold mb-4 cursor-pointer hover:text-blue-400">Aria's Space</h2>
        </Link>
      </div>
      <div className="space-y-2 py-6">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-purple-300"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="py-6">
              <p
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-purple-400 hover:bg-purple-300"
              >
                💭 Fancy a chat?
              </p>
              <div className="flex flex-col items-start space-y-2">
          <Button data="Github  " link="https://github.com/ariazmzhang" />
          <Button data="LinkedIn" link="https://www.linkedin.com/in/zhimengzhang/" />
          <Button data="Email   " link="mailto:zmzhangg@gmail.com" />
        </div>
            </div>
    </div>
  );
}
