// import FindEvents from "./findEvents";
import Image from "next/image";
import TogetherAppLogo from "public/Images/logo.jpeg";
import Link from "next/link";
import LoginForm from "@/components/login-form";

export default function Home() {
  return (
    <div className="flex flex-row">
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-yellow w-3/4">
        <div className="logo mt-40">
        <Image
          src={TogetherAppLogo}
          className="app-logo"
          alt="together-app_logo"
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
