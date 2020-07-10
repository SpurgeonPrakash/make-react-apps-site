import React from 'react'
import { useInView } from 'react-intersection-observer'
import Layout from '../components/layout'
import Courses from '../components/Courses'
import FooterNewsletter from '../components/FooterNewsletter'
import WhoAmI from '../components/WhoAmI/WhoAmI'
import Footer from '../components/footer'
import HomeHero from '../components/HomeHero'
import SEO from '../components/seo'
import FAQ from '../components/FAQ/FAQ'
import WhatWellBuild from '../components/WhatWellBuild/WhatWellBuild'
import LessonList from '../components/LessonList/LessonList'
import FloatingButton from '../components/FloatingButton'

export default function IndexPage() {
  const [topRef, topInView] = useInView()
  const showFloatingButton = !topInView

  return (
    <Layout>
      <SEO title="Make React Apps - Practical React Learning" />

      {/* floating button */}
      <FloatingButton isShowing={showFloatingButton} />

      <div ref={topRef}>
        <HomeHero />
        <Courses />
      </div>

      <WhatWellBuild />
      <LessonList />
      <WhoAmI />
      <FAQ />
      <FooterNewsletter />
      <Footer />
    </Layout>
  )
}
