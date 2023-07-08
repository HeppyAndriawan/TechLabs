'use client'
import React from "react";
import { Button } from "@/components/ui/button";

export default function ShortBTN(props) {
  return (
    <Button {...props}>
      {props.name}
    </Button>
  );
}
