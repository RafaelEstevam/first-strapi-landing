const GET_LANDING_PAGE = /* GraphQL */ `
  fragment image on UploadFile {
    name
    alternativeText
    url
  }

  fragment logo on LandingPage {
    logo {
      ...image
    }
  }

  fragment header on LandingPage {
    landingPageHeader {
      headerTitle
      headerDescription
      headerImg {
        ...image
      }
      button {
        buttonLabel
        buttonUrl
      }
    }
  }

  fragment about on LandingPage {
    landingPageAbout {
      sectionAboutTitle
      sectionAboutContent
      sectionAboutImg {
        ...image
      }
    }
  }

  fragment techs on LandingPage {
    landingPageTechs {
      sectionTechsTitle
      sectionComponentIcons {
        id
        iconMedia {
          ...image
        }
        iconLabel
      }
    }
  }

  fragment concepts on LandingPage {
    landingPageConcepts {
      sectionConceptsTitle
      conceptItem {
        id
        conceptItemTitle
      }
    }
  }

  fragment modules on LandingPage {
    landingPageModules {
      sectionModuleTitle
      sectionModuleCards {
        id
        cardTitle
        cardDescription
        cardContent
      }
    }
  }

  fragment schedule on LandingPage {
    landingPageSchedule {
      sectionScheduleTitle
      sectionScheduleContent1
      sectionScheduleContent2
    }
  }

  fragment price on LandingPage {
    landingPagePriceCard {
      priceCardLabel
      priceCardTitle
      priceCardItems {
        id
        conceptItemTitle
      }
      priceCardButton {
        priceCardButtonLabel
        priceCardButtonPrice
        priceCardButtonPriceHighlight
        priceCardButtonLink
      }
    }
  }

  fragment profiles on LandingPage {
    landingPageProfiles {
      sectionProfilesTitle
      authors {
        id
        authorImg {
          ...image
        }
        authorTitle
        authorSubtitle
        authorNetwork {
          id
          profileCardNetworkLinksImg {
            ...image
          }
          profileCardNetworkLinksSelect
          profileCardNetworkLinksUrl
        }
        authorContent
      }
    }
  }

  fragment testimonials on LandingPage {
    landingPageTestimonials {
      sectionTestimonialTitle
      sectionTestimonialsCards {
        id
        testimonialCardImg {
          ...image
        }
        testimonialCardTitle
        testimonialCardContent
      }
    }
  }

  fragment faq on LandingPage {
    landingPageFaq {
      sectionFaqTitle
      sectionFaqItems {
        id
        faqItemTitle
        faqItemContent
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...about
      ...techs
      ...concepts
      ...modules
      ...schedule
      ...price
      ...profiles
      ...testimonials
      ...faq
    }
  }
`

export default GET_LANDING_PAGE
