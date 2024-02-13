export const metadata = {
  title: 'Try Cycle',
  description: 'A better feedback system',
  opengraphimage: "@/public/images/hero-background.jpeg",
} as any;

import Hero from '@/components/hero'
import Features from '@/components/features'
import ContactUs from '@/components/contact-us'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import GetStarted from '@/components/get-started'

export default function Home() {
  return (
    <>
      <Hero />
      <Features/>
      <Zigzag />
      <Testimonials />
      <GetStarted />
      <ContactUs />
    </>
  )
}
