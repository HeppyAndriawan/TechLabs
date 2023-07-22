"use client";
import { useSession } from "next-auth/react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  const { data: session, status } = useSession();
  return (
    <>
    <NavBar/>
    <Footer/>
    </>
  )
  
}