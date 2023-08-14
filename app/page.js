"use client";
import { useSession } from "next-auth/react";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
export default function Home() {
  const { data: session, status } = useSession();
  return (
    <NavBar/>
    <Hero/>
    <Footer/>
    </>
  )  

