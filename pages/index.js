// import FindEvents from "./findEvents";
import Image from "next/image";
import TogetherAppLogo from "public/Images/logo.jpeg";
import Link from "next/link";
import LoginForm from "@/components/login-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24 ">
      <div className="logo">
        <Image
          src={TogetherAppLogo}
          className="app-logo"
          alt="together-app_logo"
        />
      </div>

      <LoginForm />

      {/* <button>
        <Link href="/findEvents">click to view events</Link>
      </button> */}
    </main>
  );
}
