// import FindEvents from "./findEvents";
import Image from "next/image";
import TogetherAppLogo from "public/Images/logo.jpeg";
import Link from "next/link";
import LoginForm from "@/components/login-form";

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

        {/* <button>
        <Link href="/findEvents">click to view events</Link>
      </button> */}
      </main>
      <LoginForm  />
    </div>
  );
}
