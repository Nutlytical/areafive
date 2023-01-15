/* This example requires Tailwind CSS v3.0+ */
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Banner from "./banner";

const navigation = [
  { name: "Coffee", href: "#" },
  { name: "Non-Coffee", href: "#" },
  { name: "Bar", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 pb-2 lg:px-8">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-semibold text-gray-900 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                EN
              </a>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                    >
                      EN
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
      <Banner />
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                {/* <img
                  src="data:image/jpeg;base64,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UqOoBurLTZKiE3BINE2zEE9tMjH3g47M5ZnJtck2Fhck2A4DkO6Vj1Pbrodr7OJVBQYPQQNlZnRWLO13cuSEJJCiym4CqGAN7+Cs+RKxdw9eto2VlcKpdajs7rdS7Mi2AJsCxNjYTWxLjOvW+Jp8KCD/AF1j93mLEODayBdBuLH7mYZkdzp4DgIGOXbcvgfuZLPou7dyHM90rnPd5D0gViWznu/SvpLFzYbt591e7ugVfh4CVksbyJQiIgIiICIiAkiREDIlM33fUSBSbl9pSSu5vD9xJ0X6s/4RCUzceI4iY4gejDIc6/zDiOc88y4X2k/mH3mKP0/CIiUIiICIiAiIgJkdDpu3DiB9zMcs/DwEglkOm7d8S8z3yMh7vNfWViBbIe7zHrJKGw3bz7y93fIb2R4n9pWBMiIlCIiAiIgIiICIiAlxbmfIespEC6qp4kf6R/dFl5n9I/ulIkHowwXOmp3j3R/dPPJViDcaGRAREShERAREQEREBLtbTfe2u7vlIkFrDmfIeskqNNTr3D1lIlFyRYDXS/Acbd/dI07/AKSsSCZERKEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//9k="
                  alt="alternatetext"
                ></img> */}
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    Announcing our next round of funding.{" "}
                    <a href="#" className="font-semibold text-indigo-600">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  Area Five Cafe
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                  Our espresso drinks are made by our awesome baristas using low
                  quality coffee beans.
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <a
                    href="#"
                    className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                  >
                    Get started{" "}
                    <span className="text-indigo-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                  <a
                    href="#"
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Live demo{" "}
                    <span className="text-gray-400" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
