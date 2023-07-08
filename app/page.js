"use client";
import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShortBTN from "@/components/ShortBTN/ShortBTN";
import WidthBTN from "@/components/WidthBTN/WidthBTN";
import Footer from "@/components/Footer/Footer";
import Contact from "@/componentPages/Contact/Contact";
import Impressum from "@/componentPages/Impressum/Impressum";

export default function Home() {
  const clickHendeler = () => {
    alert("Hey, Ites clicked");
  };

      return (
      <>
        <ShortBTN name="button" onClick={clickHendeler} />
        <WidthBTN name="button" onClick={clickHendeler} />
      </>,
      
      <BrowserRouter>
        <Footer/>
        <Routes>
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Impressum" element={<Impressum/>} />
        </Routes>
      </BrowserRouter>,

      );

}