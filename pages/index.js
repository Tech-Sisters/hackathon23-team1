// import FindEvents from "./findEvents";
import Image from "next/image";
import TogetherAppLogo from "public/Images/logo.jpeg";
import Link from "next/link";
import LoginForm from "@/components/login-form";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-row items-center justify-between  ">
      <main className="flex min-h-screen items-center p-24 bg-yellow w-3/4">
        <div className="logo">
          <Image
            src={TogetherAppLogo}
            className="app-logo"
            alt="together-app_logo"
          />
        </div>

        <button>
        <Link href="/findEvents">click to view events</Link>
      </button>
      </main>
      <LoginForm className="bg-white w-1/4 min-h-screen"/>
    </div>
  );
}
