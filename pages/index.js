import Image from "next/image";
import data from "../data.json";

function LinkCard({ href, title, image }) {
  return (
    <a
      href={href}
      className="p-1 border border-gray-300 w-full mb-3 rounded-sm hover:scale-105 transition-all"
    >
      <div className="flex">
        {image && (
          <Image className="" src={image} alt={title} width={40} height={40} />
        )}
        <h2>{title}</h2>
      </div>
    </a>
  );
}

export default function Home() {
  const { name, avatar, links } = data;
  return (
    <div className="flex flex-col items-center  h-screen mt-16 mx-8">
      <Image
        className="rounded-full"
        src={avatar}
        alt={name}
        width={96}
        height={96}
      />
      <h1 className="font-semibold text-2xl mt-4 mb-8">{name}</h1>
      {links.map((link) => (
        <LinkCard key={link.title} {...link} />
      ))}
    </div>
  );
}
