import { Navbar } from "@/components";
import Image from "next/image";

export const metadata = {
  title: "Rooms | Lodges",
  description: "This is a lodge",
  author: "Qualis Designers",
};

export default function Rooms() {
  return (
    <>
      <Navbar rooms="bg-gray-900" />
      <main
        className="flex min-h-screen flex-col items-center justify-between p-2 row bg-gray-900
      "
      >
        <h1 className="text-4xl font-serif p-5">
          Welcome to Your Perfect Escape
        </h1>
        <p className="text-xl transition-all my-2 p-10">
          Discover a collection of beautifully crafted rooms designed to offer
          you the ultimate comfort and tranquility. Whether you're seeking a
          serene retreat, a cozy haven, or a luxurious sanctuary, our selection
          of bedrooms promises restful sleep and peaceful relaxation. Each room
          is thoughtfully furnished with soothing decor and plush bedding,
          ensuring your stay is nothing short of rejuvenating. Choose your ideal
          space and experience the comfort you deserve.
        </p>
        {/* room list */}
        <div className="max-md:columns-1 max-xl:columns-2 max-2xl:columns-3">
          <div className="p-10">
            <a>
              <img className="rounded-t-lg" src="./lodge2.jpg" alt="" />
            </a>
            <div className="p-5">
              <a>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                  Serenity Suite
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                A tranquil retreat with soft lighting and plush bedding,
                designed for ultimate relaxation and peaceful sleep.
              </p>
              <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                K350 per NIGHT
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
          <div className="p-10">
            <a>
              <img className="rounded-t-lg" src="./lodge1.jpg" alt="" />
            </a>
            <div className="p-5">
              <a>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                  Harmony Haven
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Cozy and calming, featuring earth-toned decor and a comfortable
                bed, perfect for unwinding after a long day.
              </p>
              <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                K450 per NIGHT
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
          <div className="p-10">
            <a>
              <img className="rounded-t-lg" src="./lodge3.jpg" alt="" />
            </a>
            <div className="p-5">
              <a>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                  Dreamscape Den
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                A serene space with soothing colors and a luxurious mattress,
                crafted to enhance restful sleep and rejuvenation.
              </p>
              <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                K400 per NIGHT
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
          
        </div>
      </main>
    </>
  );
}
