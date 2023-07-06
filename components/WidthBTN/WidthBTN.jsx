'use client'
import React from "react";
import { Button } from "@/components/ui/button";

export default function WidthBTN(props) {
  return <Button className="w-full" {...props}>{props.name}</Button>;
}
