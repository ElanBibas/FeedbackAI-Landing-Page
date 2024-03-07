import Image from "next/image";
import Link from "next/link";

import ConorHeadshot from "@/public/images/Conor_Headshot.png";
import ElanHeadshot from "@/public/images/Elan_Headshot.png";
import ManasHeadshot from "@/public/images/Manas_Headshot.png";

export default function Team() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Meet The Team</h2>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-4 lg:grid-cols-6 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center col-span-2"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Image
                className="rounded-full border-8 border-red-100"
                src={ConorHeadshot}
                width={200}
                height={200}
                alt="Conor Plunkett Headshot"
              />
              <h4 className="h4 mt-2">Conor Plunkett</h4>
              <ul className="text-lg text-gray-400 text-center space-y-1.5">
                <li className="text-red-100">Co-Founder & CEO</li>
                <li>Employee #2 at <a href="https://www.simpleventures.ca/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">SimpleVentures</a> studio, 2 companies launched</li>
                <li>Full-Stack SWE at Coinbase, Wealthsimple</li>
                <li>PM at RBC</li>
                <li>Cansbridge Fellow</li>
              </ul>
              <ul className="flex mt-4 md:order-1 md:mb-0">
                <li>
                  <Link
                    href="https://www.linkedin.com/in/conor-plunkett/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center text-red-100 bg-gray-800 hover:text-gray-100 hover:bg-red-100 rounded-full transition duration-150 ease-in-out"
                    aria-label="Linkedin"
                  >
                    <svg
                      className="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center col-span-2"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Image
                className="rounded-full border-8 border-red-100"
                src={ElanHeadshot}
                width={200}
                height={200}
                alt="Elan Bibas Headshot"
              />
              <h4 className="h4 mt-2">Elan Bibas</h4>
              <ul className="text-lg text-gray-400 text-center space-y-1.5">
                <li className=" text-red-100">Co-Founder & COO</li>
                <li>
                  2 Years as a Data & Analytics Enterprise Consultant at Slalom
                </li>
                <li>IBM Sales Architect</li>
                <li>Former Founder</li>
                <li>Full-Stack SWE at VisaPlace</li>
              </ul>
              <ul className="flex mt-4 md:order-1 md:mb-0">
                <li>
                  <Link
                    href="https://www.linkedin.com/in/elanbibas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center text-red-100 bg-gray-800 hover:text-gray-100 hover:bg-red-100 rounded-full transition duration-150 ease-in-out"
                    aria-label="Linkedin"
                  >
                    <svg
                      className="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center col-span-2 md:col-start-2 lg:col-start-5"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Image
                className="rounded-full border-8 border-red-100"
                src={ManasHeadshot}
                width={200}
                height={200}
                alt="Manas Srinivasaiah Headshot"
              />
              <h4 className="h4 mt-2 text-center">Manas Srinivasaiah</h4>
              <ul className="text-lg text-gray-400 text-center space-y-1.5">
                <li className=" text-red-100">Founding Engineer</li>
                <li>AI & ML Engineer at WaiveTheWait</li>
                <li>Former AI Founder</li>
                <li>Spring Activator VC 22</li>
              </ul>
              <p className="text-lg text-gray-400 text-center"></p>
              <ul className="flex mt-4 md:order-1 md:mb-0">
                <li>
                  <Link
                    href="https://www.linkedin.com/in/manassrini/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center text-red-100 bg-gray-800 hover:text-gray-100 hover:bg-red-100 rounded-full transition duration-150 ease-in-out"
                    aria-label="Linkedin"
                  >
                    <svg
                      className="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
