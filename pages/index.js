import Image from "next/image";
import data from "../data.json";

export default function Home() {
  const { name, avatar } = data;
  return (
    <div className="flex flex-col items-center">
      <Image
        className="rounded-full"
        src={avatar}
        alt={name}
        width={96}
        height={96}
      />
      <h1 className="font-bold text-2xl">{name}</h1>
    </div>
  );
}
