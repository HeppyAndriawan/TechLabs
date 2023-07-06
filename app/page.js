"use client";
import ShortBTN from "@/components/ShortBTN/ShortBTN";
import WidthBTN from "@/components/WidthBTN/WidthBTN";

export default function Home() {
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
