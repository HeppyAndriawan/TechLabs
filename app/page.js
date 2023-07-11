"use client";
import { useSession } from "next-auth/react";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  const { data: session, status } = useSession();
  // console.log(session)

  return <><NavBar/></>;
}
