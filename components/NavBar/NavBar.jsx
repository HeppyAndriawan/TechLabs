import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SwitchTo } from "@/tool/Switch/Switch";
import { useSession, signOut } from "next-auth/react";

function Header() {
  return <Link href="/login">Log in</Link>;
}

function Nav() {
  return <Link href="/my_account">My Account</Link>;
}
function Navi() {
  return <Link href="/signup">Sign up</Link>;
}

export default function NavBar() {
  const router = useRouter()
  const { data: session, status } = useSession();

  return (
    <div>
      <nav className="bg-black fixed top-0 w-full z-10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className=" w-1/4 invert cursor-pointer" src="/images/logo192.png" onClick={()=> router.push("/")}/>
              </div>
              <div className="absolute right-0 hidden sm:ml-6 sm:block self-center">
                <div className="space-x-2.5">
                  <SwitchTo condition={status === "authenticated"}>
                    <a
                      href="/my_account"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      My account
                    </a>
                    <a
                      href="/my_account/setting"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Setting
                    </a>
                    <a
                      onClick={()=>signOut()}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                    >
                      Sign Out
                    </a>
                  </SwitchTo>
                  <SwitchTo condition={status === "unauthenticated"}>
                    <a
                      href="login"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Log in
                    </a>
                    <a
                      href="signup"
                      className="bg-white text-black rounded-md px-3 py-2 text-sm font-medium"
                      aria-current="page"
                    >
                      Sign up
                    </a>
                  </SwitchTo>
                </div>
              </div>

              <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  <a
                    href="my_account"
                    className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                    aria-current="page"
                  >
                    My account
                  </a>
                  <a
                    href="login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    Log in
                  </a>
                  <a
                    href="signup"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
