"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./styles/styles.css";

export default function Carousel(props) {
  // Image Components
  const [imageComponents, setImageComponents] = useState(null);
  useEffect(() => {
    if (props.data !== undefined && props.data.length !== 0) {
      const createComponent = props.data.map((file, index) => (
        <div
          key={index}
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

  useEffect(() => {
    const slidesContainer = document.querySelector(".slides-container");
    const slideContainer = slidesContainer.querySelector(".slide");
    if (imageComponents !== null && slideContainer !== null) {
      const slideWidth = slideContainer.clientWidth;
      const prevButton = document.querySelector(".prev");
      const nextButton = document.querySelector(".next");

      nextButton.addEventListener("click", () => {
        slidesContainer.scrollLeft += slideWidth;
      });

      prevButton.addEventListener("click", () => {
        slidesContainer.scrollLeft -= slideWidth;
      });
    }
  }, [imageComponents]);

  return (
    <div
      id="app"
      className="max-w-screen-lg  transition-all duration-500 ease-linear"
    >
      <div className="relative w-full h-fit">
        <div className="slides-container h-72 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
          {imageComponents}
          {/* <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/6263568/pexels-photo-6263568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/6263568/pexels-photo-6263568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/3026364/pexels-photo-3026364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/10343729/pexels-photo-10343729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/13860053/pexels-photo-13860053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/8576739/pexels-photo-8576739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/1743367/pexels-photo-1743367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/5920021/pexels-photo-5920021.jpeg?auto=compress&cs=tinysrgb&w=1600"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/12805075/pexels-photo-12805075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div> */}
        </div>

        <div className="absolute top-0 -left-4 h-full items-center hidden md:flex">
          <button
            type="button"
            role="button"
            className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
            aria-label="prev"
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
      </div>
    </div>
  );
}
