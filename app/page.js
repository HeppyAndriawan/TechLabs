"use client";
import { useSession } from "next-auth/react";
import NavBar from "@/components/NavBar/NavBar";

import Link from 'next/link'


function login () {
  return (
    <ul>
      <li>
        <Link href="/my_account">My account</Link>
      </li>
      <li>
        <Link href="/login">Log in</Link>
      </li>
      <li>
        <Link href="/signup">Sign up</Link>
      </li>
    </ul>
  )
}

export default function Home() {
  const { data: session, status } = useSession();
  // console.log(session)

  return <><NavBar/></>;
}
