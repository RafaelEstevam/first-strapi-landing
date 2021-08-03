export type ImgProps = {
  name: string
  alternativeText: string
  url: string
}

type SocialLinks = {
  id: string
  profileCardNetworkLinksImg: ImgProps
  profileCardNetworkLinksSelect: string
  profileCardNetworkLinksUrl: string
}

export type AuthorProps = {
  id: string
  authorImg: ImgProps
  authorTitle: string
  authorSubtitle: string
  authorNetwork: SocialLinks[]
  authorContent: string
}

export type AboutProps = {
  sectionAboutTitle: string
  sectionAboutContent: string
  sectionAboutImg: ImgProps
}

export type ButtonProps = {
  buttonLabel: string
  buttonUrl: string
}

export type HeaderProps = {
  headerTitle: string
  headerDescription: string
  headerImg: ImgProps
  button: ButtonProps
}

export type ComponentIcon = {
  id: string
  iconMedia: ImgProps
  iconLabel: string
}

export type TechProps = {
  sectionTechsTitle: string
  sectionComponentIcons: ComponentIcon[]
}

export type ConceptItems = {
  id: string
  conceptItemTitle: string
}

export type ConceptProps = {
  sectionConceptsTitle: string
  conceptItem: ConceptItems[]
}

export type ModuleCards = {
  id: string
  cardTitle: string
  cardDescription: string
  cardContent: string
}

export type ModuleProps = {
  sectionModuleTitle: string
  sectionModuleCards: ModuleCards[]
}

export type ScheduleProps = {
  sectionScheduleTitle: string
  sectionScheduleContent1: string
  sectionScheduleContent2: string
}

export type PricePropsCards = {
  id: string
  conceptItemTitle: string
}

export type PriceProps = {
  priceCardLabel: string
  priceCardTitle: string
  priceCardItems: PricePropsCards[]
  priceCardButton: {
    priceCardButtonLabel: string
    priceCardButtonPrice: string
    priceCardButtonPriceHighlight: string
    priceCardButtonLink: string
  }
}

export type ProfileProps = {
  sectionProfilesTitle: string
  authors: AuthorProps[]
}

export type TestimonialCard = {
  id: string
  testimonialCardImg: ImgProps
  testimonialCardTitle: string
  testimonialCardContent: string
}

export type TestimonialProps = {
  sectionTestimonialTitle: string
  sectionTestimonialsCards: TestimonialCard[]
}

export type FaqItems = {
  id: string
  faqItemTitle: string
  faqItemContent: string
}

export type FaqProps = {
  sectionFaqTitle: string
  sectionFaqItems: FaqItems[]
}

export type LandingPageProps = {
  logo: ImgProps
  landingPageHeader: HeaderProps
  landingPageAbout: AboutProps
  landingPageTechs: TechProps
  landingPageConcepts: ConceptProps
  landingPageModules: ModuleProps
  landingPageSchedule: ScheduleProps
  landingPagePriceCard: PriceProps
  landingPageProfiles: ProfileProps
  landingPageTestimonials: TestimonialProps
  landingPageFaq: FaqProps
}
