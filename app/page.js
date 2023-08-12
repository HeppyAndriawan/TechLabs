"use client";
import { useSession } from "next-auth/react";
import NavBar from "@/components/NavBar/NavBar";
import PostList from "@/components/PostList LandingPage/PostListLandingPage";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <>
    <NavBar/>
    <Hero/>
    <PostList/>
    <Footer />    
    </>
  )  
}

