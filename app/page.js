"use client";
import React, { useState } from "react";

export default function Home() {
  const [display, setDisplay] = useState(true);
  const ToggleDisplay = ()=>{
    setDisplay(display=>!display)
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-2">
        {/* hero section */}
        <section className="bg-center bg-no-repeat bg-gray-700 bg-blend-multiply bg-image-hero">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Find Your Perfect Sanctuary
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              Welcome to your serene escape. Relax, unwind, and experience true
              comfort and tranquility.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a
                href="/rooms"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Our Rooms
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* infomation section */}
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <div className="bg-kitchen dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
              <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
                The Lodge Kitchen
              </h1>
              <p
                className={`py-5 rounded-2xl text-lg font-normal text-gray-500 dark:text-white my-5 bg-inherit px-20 ${
    display ? "translate-x-full opacity-0": "translate-x-0:opacity-100"
  } transition-transform ease-in-out duration-1000`}
                id="kitchenInfo"
              >
                <strong className="my-2 text-white block">Signature Dish:</strong>{" "}
                Foil Fish - Fresh fish wrapped in foil with herbs, lemon, and
                local vegetables, grilled to perfection.
                <strong className="my-2 text-white block">Ambiance:</strong> Rustic
                charm with a cozy, inviting atmosphere that complements the
                lodge experience.
                <strong className="my-2 text-white block">Cuisine:</strong> Hearty
                and comforting dishes featuring locally sourced ingredients.
                <strong className="my-2 text-white block">Specialties:</strong>{" "}
                Seasonal dishes, homemade soups, and fresh salads.
                <strong className="my-2 text-white block">Drinks:</strong> A
                selection of local wines, craft beers, and signature cocktails.
                <strong className="my-2 text-white block">Experience:</strong> Enjoy
                a warm, welcoming environment ideal for relaxing meals with
                family and friends.
              </p>
              <a
                onClick={ToggleDisplay}
                className="cursor-pointer inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                {display ?'Read more':'Hide Info'}
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div className="grid md:grid-cols-2 gap-3 bg-transparent">
              <div className="bg-carpark border border-gray-200 rounded-lg p-8 md:p-12">
                
                <h2 className="mb-96 text-gray-900 dark:text-white text-3xl font-extrabold">
                ParkZone: Your Vehicle’s Safe Zone
                </h2>
              </div>
              <div className="bg-bar dark:bg-gray-800 border border-gray-200 rounded-lg p-8 md:p-12">           
                <h2 className="mb-96 text-gray-900 dark:text-white text-3xl font-extrabold">
                The Sipping Room
                </h2>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
