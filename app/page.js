"use client";
import { useSession } from "next-auth/react";
import NavBar from "@/components/NavBar/NavBar";
import PostList from "@/components/PostList LandingPage/PostListLandingPage";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <>
    <NavBar/>
    <PostList/>
    <Footer />    
    </>
  )  
}

