import Link from "next/link";
import Logo from "./ninja-logo.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="pt-14 px-14 pb-7 ">
      <div className="nav-content border-b text-idle flex flex-row p-3 items-center ">
        <Link href={"/"}>
          <div className="flex flex-row items-center">
            <Image
              src={Logo}
              alt="ninja logo"
              width={60}
              placeholder="blur"
              className="mx-4.75"
            />
            <h1 className="text-primary font-serif font-bold text-5xl">
              Dojo Help Desk
            </h1>
          </div>
        </Link>

        <div className=" flex flex-1 justify-end-safe gap-6">
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
