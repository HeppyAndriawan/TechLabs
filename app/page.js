"use client";
import ShortBTN from "@/components/ShortBTN/ShortBTN";
import WidthBTN from "@/components/WidthBTN/WidthBTN";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  // console.log(session)
  
  const clickHendeler = () => {
    alert("Hey, Ites clicked");
  };
  return (
    <>
      <ShortBTN name="button" onClick={clickHendeler} />
      <WidthBTN name="button" onClick={clickHendeler} />
    </>
  );
}
