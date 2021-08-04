import React from 'react'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTech from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
// import PricingBox from 'components/PricingBox'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionReviews from 'components/SectionReviews'
import SectionFaq from 'components/SectionFaq'
import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'
import { GetStaticProps } from 'next'

import client from 'graphql/client'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'
import { LandingPageProps } from 'types/api'

const Index = ({
  logo,
  landingPageHeader,
  landingPageAbout,
  landingPageConcepts,
  landingPageFaq,
  landingPageModules,
  // landingPagePriceCard,
  landingPageProfiles,
  landingPageSchedule,
  landingPageTechs,
  landingPageTestimonials
}: LandingPageProps) => (
  <>
    <SectionHero logo={logo} landingPageHeader={landingPageHeader} />
    <SectionAboutProject landingPageAbout={landingPageAbout} />
    <SectionTech landingPageTechs={landingPageTechs} />
    <SectionConcepts landingPageConcepts={landingPageConcepts} />
    <SectionModules landingPageModules={landingPageModules} />
    <SectionAgenda landingPageSchedule={landingPageSchedule} />
    {/* <PricingBox landingPagePriceCard={landingPagePriceCard} /> */}
    <SectionAboutUs landingPageProfiles={landingPageProfiles} />
    <SectionReviews landingPageTestimonials={landingPageTestimonials} />
    <SectionFaq landingPageFaq={landingPageFaq} />
    <Footer />
    <JsonSchema />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)

  return {
    props: {
      ...landingPage
    }
  }
}

export default Index
