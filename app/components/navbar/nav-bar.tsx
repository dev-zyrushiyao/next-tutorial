import Link from "next/link";
import Logo from "./ninja-logo.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="pt-14 px-14 pb-7 ">
      <div className="nav-content border-b text-idle flex flex-row p-3 items-center ">
        <Image
          src={Logo}
          alt="ninja logo"
          width={60}
          quality={100}
          placeholder="blur"
          className="mx-4.75"
        ></Image>
        <h1 className="text-primary font-serif font-bold text-5xl">
          Dojo Help Desk
        </h1>
        <div className=" flex flex-1 justify-end-safe text-3xl gap-6  text-idle">
          <Link href="/" className="link">
            Dashboard
          </Link>
          <Link href="/tickets" className="link">
            Tickets
          </Link>
        </div>
      </div>
    </nav>
  );
}
