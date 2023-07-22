"use client";
import React from "react";
import { Button } from "@/components/ui/button";

export default function WidthBTN(props) {
  return (
    <Button className="w-full mr-[10px] last:mr-[0]" {...props}>
      {props.name}
    </Button>
  );
}
