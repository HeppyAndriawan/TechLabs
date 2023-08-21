"use client";
import React, { useState, useEffect, Suspense } from "react";
import { SwitchTo } from "@/tool/Switch/Switch";
import Image from "next/image";
import "./styles/styles.css";

export default function Carousel(props) {
  // Image Components
  const [imageComponents, setImageComponents] = useState(null);
  useEffect(() => {
    if (props.data !== undefined && props.data.length !== 0) {
      const createComponent = props.data.map((file, index) => (
        <div
          key={index + `file`}
          className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden"
        >
          <Image
            className="w-full h-full object-cover"
            src={file}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      ));

      setImageComponents(createComponent);
    }
  }, [props.data]);

  // Slide to Rigth
  const slideToRight = () => {
    const slidesContainer = document.querySelector(".slides-container");
    const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
    setTimeout(() => {
      slidesContainer.scrollLeft += slideWidth;
    }, 0);
  };

  // Slide to Left
  const slideToLeft = () => {
    const slidesContainer = document.querySelector(".slides-container");
    const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
    setTimeout(() => {
      slidesContainer.scrollLeft -= slideWidth;
    }, 0);
  };

  return (
    <div
      id="app"
      className="max-w-screen-lg  transition-all duration-500 ease-linear"
    >
      <div className="relative w-full h-fit">
        <div className="slides-container h-72 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
          <Suspense>{imageComponents}</Suspense>
        </div>
        <SwitchTo condition={props.button === true}>
          <div className="absolute top-0 -left-4 h-full items-center hidden md:flex">
            <button
              type="button"
              role="button"
              className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
              aria-label="prev"
              onClick={slideToLeft}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>
          <div className="absolute top-0 -right-4 h-full items-center hidden md:flex">
            <button
              type="button"
              role="button"
              className="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
              aria-label="next"
              onClick={slideToRight}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </SwitchTo>
      </div>
    </div>
  );
}


/**
 * 1. How To Use
 * <Carousel data={data.images} button={false}/>
 */