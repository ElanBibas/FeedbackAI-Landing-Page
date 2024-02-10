import Image from 'next/image'
import HeroBG from '@/public/images/hero-background.png'

export default function Hero() {
  return (
    <section>
      <div className="max-w-full h-screen mx-auto px-4 sm:px-6 relative">

        {/* Illustration behind hero content */}
        <div className="absolute overflow-hidden center-0 -left-0 top-0 mt-0 lg:block pointer-events-none w-full h-screen " aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
            <Image className="object-cover object-bottom w-full mt-20 mx-auto md:max-w-none h-screen opacity-65 mb-4" src={HeroBG} alt=""/>
        </div>

        {/* Hero content */}
        <div className="relative flex flex-col justify-between pt-24 pb-10 md:pt-24 md:pb-16 bg-hero-pattern h-full">

          {/* Section header */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <h1 className="h1 mb-4" data-aos="fade-up">Welcome to Cycle</h1>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">At Cycle, we're not just changing the game; we're redefining the way game studios interact with their most valuable asset - </p>
            <p className="text-xl text-red-100 font-bold" data-aos="fade-up" data-aos-delay="200">us</p>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">the players.</p>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-100 mb-8" data-aos="fade-up" data-aos-delay="200">We overhaul the feedback cycle, and use AI to bridge the gap between gamers and developers. Cycle makes sure valuable feedback doesn't just get heard: it gets understood.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-red-100 hover:bg-red-100/75 w-full mb-4 sm:w-auto sm:mb-0" href="https://getcycle.vercel.app/">Try Demo</a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#contact-us">Get in Touch</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
