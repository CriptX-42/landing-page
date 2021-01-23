export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type LogoProps = {
  alternativeText: 'React Avançado'
  url: '/uploads/logo_74e2fdc755.svg'
}
export type HeaderProps = {
  title:string
  description:string
  button: {
    label:string
    url:string
  }
  image: {
    alternativeText:string
    url:string
  }
}
export type SectionAboutProjectProps ={
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionTechPorps = {
  title: string
  techIcons: TechIcon[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProjectProps: SectionAboutProjectProps
  sectionTechPorps: SectionTechPorps
}