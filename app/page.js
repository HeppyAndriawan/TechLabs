"use client";
import { useSession } from "next-auth/react";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const { data: session, status } = useSession();
  // console.log(session)

  return <>{/*  Please place your component after this lines below */}
   
  </>;
}
