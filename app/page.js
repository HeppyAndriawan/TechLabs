"use client";
import { useSession } from "next-auth/react";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import { SwitchTo } from "@/tool/Switch/Switch";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(status);

  return (
    <>
      {/*  Please place your component after this lines below */}
      <SwitchTo condition={status === "authenticated"}>
        <a></a>
      </SwitchTo>
      <Hero />
    </>
  );
}
