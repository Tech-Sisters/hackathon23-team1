// import FindEvents from "./findEvents";
import Image from "next/image";
import TogetherAppLogo from "public/images/logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-row items-center pl-40 bg-yellow">
      <div className="logo-container ">
        <div className="logo">
          <Image
            src={TogetherAppLogo}
            className="app-logo"
            alt="together-app_logo"
            width={500}
            height={500}
          />
        </div>

        <form></form>

        <button>
          <Link href="/findEvents">click to view events</Link>
        </button>
      </div>
    </main>
  );
}
