"use client";
import { useSession } from "next-auth/react";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const { data: session, status } = useSession();
  // console.log(session)

  return <>{/*  Please place your component after this lines below */}
    <Footer/>
    {/* When navbar and hero Section is there, i have to put a class with "sticky bottom" or so to the footer, so that it is at the end of the page */}
    
  </>;
}
