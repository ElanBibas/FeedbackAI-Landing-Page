import Image from 'next/image'

import ConorHeadshot from '@/public/images/Conor_Headshot.png'
import ElanHeadshot from '@/public/images/Elan_Headshot.png'
import ManasHeadshot from '@/public/images/Manas_Headshot.png'

export default function Team() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">About The Team</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-4 lg:grid-cols-6 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center col-span-2" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <Image className="rounded-full" src={ConorHeadshot} width={200} height={200} alt="Conor Plunkett Headshot" />
              <h4 className="h4 my-2">Conor Plunkett</h4>
              <p className="text-lg text-gray-400 text-center">Cycle is better than the status quo one-way feedback; it engages in meaningful conversations. By asking targeted, context-aware questions, we dive deeper into your gaming experience to uncover the insights that matter most. Chat about recent balance changes, upcoming map patches, and plans for future expansions.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center col-span-2" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            <Image className="rounded-full" src={ElanHeadshot} width={200} height={200} alt="Elan Bibas Headshot" />
              <h4 className="h4 my-2">Elan Bibas</h4>
              <p className="text-lg text-gray-400 text-center">Get rewarded to have your voice heard. Sounds like a sweet deal. Cycle partners with game studios to offer in-game rewards to incentivize feedback. Give your feedback for 5 minute chat about the recent patch?  Get 500 V-Bucks, or 1000 Riot Points.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center col-span-2 md:col-start-2 lg:col-start-5" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
            <Image className="rounded-full" src={ManasHeadshot} width={200} height={200} alt="Manas Srinivasaiah Headshot" />
              <h4 className="h4 my-2 text-center">Manas Srinivasaiah</h4>
              <p className="text-lg text-gray-400 text-center">Your feedback doesn't stay stuck in forums to comb through -  it's transformed into  reports for developers to know how recent game changes have influenced players.  We specialize in shrinking the gap between the playerbase and game studios.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
