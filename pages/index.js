import Image from "next/image";
import TogetherAppLogo from "public/Images/logo.png";
import LoginForm from "@/components/login-form";

export default function Home() {
  return (
    <div className="md:flex min-h-screen flex-row items-center justify-between  ">
      <main className="flex md:min-h-screen items-center p-24 bg-yellow md:w-3/4">
        <div className="logo">
          <Image
            src={TogetherAppLogo}
            className="app-logo "
            alt="together-app_logo"
            width={500}
            height={500}
          />
        </div>

        {/* <button>
          <Link href="/find-events">click to view events</Link>
        </button> */}
      </main>
      <LoginForm className="bg-white w-1/4 min-h-screen" />
    </div>
  );
}
