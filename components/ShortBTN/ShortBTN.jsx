'use client'
import React from "react";
import { Button } from "@/components/ui/button";

export default function ShortBTN(props) {
  return (
    <Button className="mr-[10px] last:mr-[0]" {...props}>
      {props.name}
    </Button>
  );
}
