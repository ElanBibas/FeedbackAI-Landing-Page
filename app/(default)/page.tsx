export const metadata = {
  title: 'Try Cycle',
  description: 'A better feedback system',
  opengraphimage: "@/public/images/hero-background.jpeg",
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
} as any;

import Hero from '@/components/hero'
import Features from '@/components/features'
import ContactUs from '@/components/contact-us'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import GetStarted from '@/components/get-started'
import Team from '@/components/team'

export default function Home() {
  return (
    <>
      <Hero />
      <Features/>
      <Zigzag />
      <Testimonials />
      <GetStarted />
      <ContactUs />
      <Team />
    </>
  )
}
