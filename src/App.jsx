import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, Download,
  Linkedin, Mail, Menu, Moon, Plus, Send, Sun, X
} from 'lucide-react'
import loyaltyWalletImage from './assets/loyalty-wallet.png'
import currentWeeePointImage from './assets/current-WeeePoint.png'
import fiveWaysImage from './assets/5ways-to-earn-points.png'
import loyaltyProblemOneImage from './assets/Loyalty-problem-statement-1.png'
import loyaltyProblemTwoImage from './assets/Loyalty-problem-statement-2.png'
import loyaltyProblemThreeImage from './assets/Loyalty-problem-statement-3.png'
import coreSolution1 from './assets/Loyalty-core-solution-1.png'
import coreSolution2 from './assets/Loyalty-core-solution-2.png'
import coreSolution3 from './assets/Loyalty-core-solution-3.png'
import coreSolution4 from './assets/Loyalty-core-solution-4.png'
import keyExperienceHero from './assets/Loyalty-key-experience-0.png'
import walletHomeImage from './assets/Loyalty-key-experience-1.png'
import walletDetailsImage from './assets/Loyalty-key-experience-2.png'
import expirationAwarenessImage from './assets/Loyalty-key-experience-3.png'
import expirationRemindersImage from './assets/Loyalty-key-experience-4.png'
import loyaltyDiscoveryMechanismsImage from './assets/Loyalty-discovery-mechanisms.png'
import loyaltyNewSystemImage from './assets/Loyalty-new-system.png'
import failedDeliveryThumbnail from './assets/failed-delivery-recovery-thumbnail.png'
import firstTimeUserHomeWalletImage from './assets/first-time-user-home-wallet.png'
import businessContextImage from './assets/failed-delivery-recovery-business-context.png'
import problemStatementImage from './assets/failed-delivery-recovery-problem-statment.png'
import designPrincipleImage from './assets/failed-delivery-design-principle.png'
import failedDeliveryKeyExperience from './assets/failed-delivery-key-experience.png'
import failedDeliveryOutcome from './assets/failed-delivery-recovery-outcome.png'
import designFlowImage from './assets/failed-delivery-design-flow.png'
import newUserHomeStoreSelectorImage from './assets/New-user-home-1-store-selector.png'
import newUserHomeValuePropositionsImage from './assets/New-user-home-value-propositions-final.png'
import newUserHomeCartBuilderImage from './assets/New-user-home-cart-builder.png'
import newUserHomeProductExplorationImage from './assets/New-user-home-product-exploration.png'
import newUserHomeSocialProofImage from './assets/New-user-home-social-proof.png'
import newUserHomeRecommendationsImage from './assets/New-user-home-recommendations.png'
import newUserHomeGuidedDiscoveryImage from './assets/New-user-home-guided-discovery.png'
import newUserHomeStoreSelectorV02Image from './assets/New-user-home-1-store-selector-final.png'
import newUserDirectPathImage from './assets/new-user-direct-path.png'
import newUserIndirectPathImage from './assets/new-user-indirect-path.png'


const caseStudies = [
  {
    id: 'loyalty',
    index: '01',
    title: 'Redesigning Weee!’s Loyalty Ecosystem',
    subtitle: 'Separating earned rewards from cash value to create a clearer wallet and a more scalable loyalty system.',
    category: 'Loyalty',
    year: '2026',
    metric: '2-way',
    metricLabel: 'wallet architecture',
    color: '#EACCFE',
    tags: ['Loyalty strategy', 'Wallet redesign', 'Behavioral nudges'],
    problem: 'Weee! Points combined purchase rewards, share incentives, review rewards, video rewards, and cash-purchased value into one balance. This made the system difficult for customers to understand and difficult for the business to manage sustainably.',
    insight: 'Not all points carry the same meaning. Customers needed to clearly distinguish earned rewards from cash-equivalent value, while the business needed a clearer structure for liability, expiration, and value communication.',
    strategy: 'Create a more transparent loyalty ecosystem by separating earned value from cash value, introducing expiration awareness, and redesigning the wallet around clarity, urgency, and trust.',
    solution: 'We separated earned rewards into WeeeRewards and cash-purchased value into WeeeCash, redesigned the wallet experience, introduced clearer expiration logic, and added behavioral nudges across the shopping journey.',
    learning: 'The best loyalty systems are not built around points. They are built around trust, clarity, and sustainable motivation.'
  },
  {
    id: 'driver',
    index: '02',
    title: 'Failed Delivery Recovery Experience',
    subtitle: 'Helping drivers recover deliveries before they fail.',
    category: 'Operations',
    year: '2025',
    metric: '0→1',
    metricLabel: 'driver workflow',
    color: '#C6DC94',
    tags: ['Driver experience', 'Service design', 'Operational UX'],
    problem: 'When a delivery issue occurred, drivers were expected to determine the next step themselves. Some contacted customers multiple times, verified location accuracy, or waited for instructions, while others reported a failed delivery immediately.on-demand restaurant delivery, drivers needed to make fast decisions across pickup, routing, timing, and order handoff.',
    insight: 'Drivers do not need more information. They need the right information at the right moment, with clear next actions and fewer ambiguous states.',
    strategy: 'Design a task-focused mobile workflow that reduces decision friction, supports real-time coordination, and keeps drivers confident from offer acceptance to delivery completion.',
    solution: 'We created a streamlined driver experience covering offer review, pickup guidance, order status, delivery instructions, and exception handling for time-sensitive restaurant delivery.',
    learning: 'The goal was not to create a better reporting tool. The goal was to create a recovery system that helped drivers succeed before failure occurred.'
  },
  {
    id: 'new-user-homepage',
    index: '03',
    title: 'First Cart Experience for New Shoppers',
    subtitle: 'Helping first-time shoppers find the right store, understand the value, and build their first cart.',
    category: 'Growth',
    year: '2025',
    metric: 'First cart',
    metricLabel: 'new-user journey',
    color: '#DDEBFF',
    tags: ['Homepage optimization', 'Store discovery', 'First-cart growth'],
    problem: 'New visitors were landing in an experience that assumed they already understood Weee!, knew which ethnic store they wanted, and had a clear idea of what to buy.',
    insight: 'New users do not just need products. They need orientation, relevance, and confidence before they can start building their first cart.',
    strategy: 'Turn the homepage from a generic merchandising page into a guided first-shopping experience that helps users choose the right store, understand the value of Weee!, and build shopping momentum.',
    solution: 'We introduced a prominent first-time store selector, marketplace-wide recommendations before store selection, clearer value propositions, stronger new-user perks, cart-building modules, search-based exploration, and social proof from real customer behavior.',
    learning: 'Personalization does not always mean making an immediate assumption. For new visitors, relevance often starts with clear choices, reduced uncertainty, and visible trust signals.'
  },
]

const smallCaseStudies = [
  {
    id: 'delivery-fee-updates',
    index: '04',
    title: 'Delivery fee Updates',
    subtitle: 'Clarifying delivery-fee changes and turning a policy update into a customer-friendly experience.',
    category: 'Ecommerce',
    year: '2025',
    color: '#F4F1E8',
    tags: ['Fee transparency', 'Rewards', 'Customer messaging'],
    thumbnail: '/case-study-entrances/delivery-fee-updates.png',
    detailImage: '/case-study-entrances/Delivery-fee-review.png',
    scope: 'Delivery Fee · Rewards · Customer Messaging',
    overviewTitle: 'Turning a delivery-fee update into a clearer customer experience.',
    overview: 'As delivery economics changed, customers needed to understand what was changing, why it mattered, and how they could still unlock value through the shopping journey.',
    challengeTitle: 'A fee update could easily feel like a loss of value.',
    problem: 'Delivery-fee changes can create confusion and frustration when they are introduced without enough context. The experience needed to explain the update clearly while keeping customers focused on available benefits and next actions.',
    strategyTitle: 'Make the policy understandable, visible, and actionable.',
    strategy: 'I framed the experience around clarity first: explain the change, surface the customer benefit, and connect the update to relevant reward or shopping actions instead of hiding the message inside dense account or checkout surfaces.',
    solution: 'The design introduced customer-friendly messaging, clearer visual hierarchy, and contextual entry points that helped customers understand the update and continue shopping with confidence.',
    outcome: ['Improved visibility of delivery-fee changes', 'Reduced ambiguity around customer benefits', 'Created a clearer pattern for policy-related product communication'],
    learning: 'When a product change affects perceived value, the design challenge is not just communication. It is helping customers understand what changed and what they can still do next.'
  },
  {
    id: 'weee-gift-cards',
    index: '05',
    title: 'Weee! Gift cards',
    subtitle: 'Creating a gift card experience for multilingual customers and culturally relevant gifting moments.',
    category: 'Commerce',
    year: '2025',
    color: '#F4F1E8',
    tags: ['Gift cards', 'Payments', 'Multilingual UX'],
    thumbnail: '/case-study-entrances/weee-gift-cards.png',
    detailImage: '/case-study-entrances/Gift-card-review.png',
    scope: 'Gift Card · Payments · Multilingual Experience',
    overviewTitle: 'Designing a flexible gift card experience for a diverse customer base.',
    overview: 'Weee! serves customers across many cultural communities, so the gift card experience needed to feel simple, trustworthy, and flexible across languages, occasions, and recipient needs.',
    challengeTitle: 'Gift cards needed to feel easy to send, easy to redeem, and safe to manage.',
    problem: 'Customers needed a straightforward way to purchase, send, receive, and redeem gift cards, while the system needed to support multiple languages, delivery options, and clear redemption rules.',
    strategyTitle: 'Build trust through simple flows and clear redemption guidance.',
    strategy: 'The experience focused on reducing uncertainty across purchase, delivery, and redemption. Clear steps, localized content, and visible confirmation states helped customers feel confident throughout the gift card journey.',
    solution: 'The design supported multilingual gift card creation, printable and shareable formats, redemption guidance, resend controls, and scheduling flexibility for future gifting moments.',
    outcome: ['Created a clearer end-to-end gift card flow', 'Supported multilingual customer needs', 'Improved confidence across purchase and redemption moments'],
    learning: 'Gifting experiences work best when the system feels invisible. Customers should feel confident about the gesture, not worried about the mechanics behind it.'
  },
  {
    id: 'anniversary-round-up',
    index: '06',
    title: '10th Anniversary Round-up',
    subtitle: 'Helping customers revisit their shopping history through a personalized anniversary storytelling experience.',
    category: 'Engagement',
    year: '2025',
    color: '#F4F1E8',
    tags: ['Personalization', 'Retention', 'Lifecycle'],
    thumbnail: '/case-study-entrances/10th-anniversary-round-up.png',
    detailImage: '/case-study-entrances/10th-Round-up-review.png',
    scope: 'Lifecycle · Personalization · Customer Engagement',
    overviewTitle: 'Creating a personalized reflection moment for long-time customers.',
    overview: 'For Weee!’s anniversary, the experience celebrated customer history by transforming past shopping behavior into a lightweight, memorable storytelling moment.',
    challengeTitle: 'The experience needed to feel personal without becoming complicated.',
    problem: 'A customer-history experience can quickly become noisy if it shows too much data. The design needed to highlight meaningful moments, feel celebratory, and remain easy to understand across devices.',
    strategyTitle: 'Turn behavioral data into a simple, emotional story.',
    strategy: 'I focused the experience around memorable milestones, recognizable shopping moments, and a guided reveal pattern that made customer data feel human, not analytical.',
    solution: 'The final experience used personalized milestones, first-order memories, frequently purchased items, and celebratory visual storytelling to create a shareable anniversary moment.',
    outcome: ['Created a lightweight personalized engagement experience', 'Strengthened emotional connection with long-time customers', 'Turned customer behavior data into a memorable story'],
    learning: 'Personalization is most powerful when it feels like recognition, not reporting. The best moments help customers see their own story in the product.'
  },
]

const allCaseStudies = [...caseStudies, ...smallCaseStudies]
const resumeUrl = '/Sukmoon-Senior-Product-Designer.pdf'

const expertise = [
  ['01', 'Product Strategy', 'Turning customer and market insight into focused product bets, roadmaps, and measurable outcomes.'],
  ['02', 'Experience Design', 'Creating clear, accessible experiences across complex customer journeys and service ecosystems.'],
  ['03', 'Experimentation & Growth', 'Using behavioral insight and testing to improve acquisition, conversion, and retention.'],
  ['04', 'Design Leadership', 'Setting clear design principles, raising the quality bar, and helping teams make better product decisions.'],
]

const experience = [
  {
    years: '2020—2026',
    role: 'Senior Product Design Manager',
    company: 'Weee!',
    bullets: [
      'Owned end-to-end product design across Growth, Loyalty, Marketplace, Checkout, and AI initiatives.',
      'Managed and mentored product designers while remaining hands-on from strategy through execution.',
      'Turned ambiguous business goals into clear customer journeys, scalable systems, and measurable experiments.',
      'Partnered with product, engineering, data, and operations to launch experiences across 10+ ethnic communities.'
    ]
  },
  {
    years: '2015—2019',
    role: 'Product Designer',
    company: 'Smule',
    bullets: [
      'Led end-to-end product design across iOS, Android, and Web, shaping creation, engagement, and community experiences for a global music creator audience.',
    ]
  },
  {
    years: '2012—2015',
    role: 'UX/UI Designer',
    company: 'Fixya',
    bullets: [
      'Designed web and mobile experiences while establishing UI systems, brand identity, and marketing assets for a consumer support platform.',
    ]
  },
  
  {
    years: '2004—2013',
    role: 'Earlier Design Experience',
    company: 'Artirus Design · Olivet University\nCrown Confectionery',
    bullets: [
      'Led branding and visual design projects, managed designers, and taught advanced interface design.',
    ]
  },
]

const designProjects = [
  {
    title: 'Weee! Brand Identity',
    image: '/design-projects/weee-company-branding-2020.png',
  },
  {
    title: 'Crown Bakery Promotional Poster',
    image: '/design-projects/crown-bakery-design-calendar-competition-poster-2006.png',
  },
  {
    title: 'Korea Scout Association Brand Identity',
    image: '/design-projects/korea-scout-association-brand-identity-2002.png',
  },
  {
    title: 'Crown bakery Brand Identity',
    image: '/design-projects/crown-bakery-brand-identity-2025.png',
  },
  {
    title: 'Seoul Media Art Biennale Identity System',
    image: '/design-projects/seoul-media-art-biennale-brochure-2003.png',
  },
  {
    title: 'Exhibition Booklet Design',
    image: '/design-projects/design-gallery-brochure-2023.png',
  },
]


function Logo() {
  return (
    <div className="flex items-center gap-3 font-bold tracking-[-.03em]">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs text-white dark:bg-white dark:text-ink">SC</span>
      <span className="hidden sm:block">Sukmoon Chang</span>
    </div>
  )
}

function Nav({ dark, setDark, navigate }) {
  const [open, setOpen] = useState(false)
  const links = [['Work', '#work'], ['About', '#about'], ['Experience', '#resume'], ['Contact', '#contact']]

  const scrollToSection = (href, behavior = 'smooth') => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior, block: 'start' })
    }
  }

  const goHomeSection = (href) => {
    setOpen(false)

    if (window.location.pathname !== '/') {
      navigate('/', { scrollTop: false })
      setTimeout(() => scrollToSection(href, 'auto'), 80)
      return
    }

    scrollToSection(href)
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-canvas/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#0d0f14]/80">
      <div className="mx-auto flex h-18 max-w-[1440px] items-center justify-between px-5 lg:px-10">
        <button onClick={() => navigate('/')} className="text-left">
          <Logo />
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <button key={label} onClick={() => goHomeSection(href)} className="text-sm font-medium text-black/60 transition hover:text-black dark:text-white/60 dark:hover:text-white">
              {label}
            </button>
          ))}

          <button onClick={() => setDark(!dark)} aria-label="Toggle theme" className="rounded-full border border-black/10 p-2.5 transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10">
            {dark ? <Sun size={16}/> : <Moon size={16}/>}
          </button>

          <a href={resumeUrl} download target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.03] dark:bg-white dark:text-ink">
            <Download size={16} /> Download résumé
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">
          {open ? <X/> : <Menu/>}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-canvas px-5 py-5 dark:border-white/10 dark:bg-[#0d0f14] md:hidden">
          {links.map(([label, href]) => (
            <button onClick={() => goHomeSection(href)} key={label} className="flex w-full items-center justify-between border-b border-black/10 py-4 text-left text-2xl font-semibold dark:border-white/10">
              {label}<ArrowUpRight size={20}/>
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <header id="home" className="grain relative min-h-[94vh] overflow-hidden pt-18">
      <div className="mx-auto flex min-h-[calc(94vh-72px)] max-w-[1440px] flex-col justify-between px-5 pb-8 pt-14 lg:px-10 lg:pt-20">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] reveal">
          <span className="h-2 w-2 rounded-full bg-[#32b879]"/>
          <span>AVAILABLE TO BUILD PRODUCTS THAT DRIVE BUSINESS IMPACT</span>
        </div>

        <div className="py-16">
          <h1 className="display max-w-[1250px] text-[clamp(4.2rem,11vw,10.5rem)] font-semibold">
            <span className="block reveal delay-1">Designing products</span>
            <span className="block text-cobalt reveal delay-2">that scale trust.</span>
          </h1>

          <div className="mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <p className="max-w-2xl text-xl leading-relaxed text-black/65 reveal delay-3 dark:text-white/65 lg:text-2xl">
              Building products that create customer value and drive business growth.
            </p>

            <button
              onClick={() => {
                const el = document.querySelector('#work')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group flex w-fit items-center gap-3 text-sm font-bold uppercase tracking-[.12em]"
            >
              Selected work
              <span className="grid h-12 w-12 place-items-center rounded-full border border-black/20 transition group-hover:bg-ink group-hover:text-white dark:border-white/30 dark:group-hover:bg-white dark:group-hover:text-ink">
                <ArrowDown size={18}/>
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-10 border-t border-black/15 pt-5 text-sm dark:border-white/15">
		  <span>12+ Years in Product Design</span>
		  <span>Marketplace · Ecommerce · AI</span>
 		 <span>San Francisco Bay Area</span>
</div>
      </div>
    </header>
  )
}

function Work({ navigate }) {
  return (
    <section id="work" className="bg-[#E8E4DB] py-24 dark:bg-[#0d0f14] lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="mb-14 lg:mb-20">
          <div className="min-w-0">
            <p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-black/45 dark:text-white/45">Selected case studies</p>
            <h2 className="display text-6xl font-semibold lg:text-8xl">Work that turns<br/>complexity into clarity.</h2>
          </div>
        </div>

        <div className="space-y-5">
          {caseStudies.map((item) => (
            <button id={`work-${item.id}`} key={item.id} onClick={() => navigate(`/${item.id}`)} className="case-card group grid w-full scroll-mt-24 overflow-hidden rounded-[1.75rem] border border-black/10 bg-white text-left transition hover:shadow-2xl hover:shadow-black/10 dark:border-white/10 dark:bg-white/[.04] lg:grid-cols-[1.05fr_.95fr]">
              <div className="flex min-h-[390px] flex-col justify-between p-7 lg:min-h-[530px] lg:p-12">
                <div className="flex items-start justify-between">
                  <span className="font-sans text-xs text-black/40 dark:text-white/40">{item.index} / {item.year}</span>
                  <span className="case-arrow grid h-11 w-11 place-items-center rounded-full border border-black/15 transition duration-300 dark:border-white/20">
                    <ArrowUpRight size={18}/>
                  </span>
                </div>

                <div>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {item.tags.map(t => (
                      <span key={t} className="rounded-full border border-black/10 px-3 py-1 text-[11px] dark:border-white/15">{t}</span>
                    ))}
                  </div>
                  <h3 className="text-4xl font-semibold tracking-[-.05em] lg:text-6xl">{item.title}</h3>
                  <p className="mt-4 text-lg text-black/50 dark:text-white/50 lg:text-xl">{item.subtitle}</p>
                </div>
              </div>

              <div className="case-visual relative m-3 min-h-[340px] overflow-hidden rounded-[1.25rem] transition duration-500 lg:min-h-0" style={{backgroundColor:item.color}}>
                <CaseVisual type={item.id} />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
            {smallCaseStudies.map((item) => (
              <button
                id={`work-${item.id}`}
                key={item.id}
                onClick={() => navigate(`/${item.id}`)}
                className="case-card group flex min-h-[500px] w-full scroll-mt-24 flex-col overflow-hidden rounded-[1.75rem] border border-black/10 bg-white text-left transition hover:shadow-2xl hover:shadow-black/10 dark:border-white/10 dark:bg-white/[.04] lg:min-h-[560px]"
              >
                <div className="flex items-start justify-between p-7 pb-0 lg:p-10 lg:pb-0">
                  <span className="font-sans text-xs text-black/40 dark:text-white/40">{item.index} / {item.year}</span>
                  <span className="case-arrow grid h-11 w-11 place-items-center rounded-full border border-black/15 transition duration-300 dark:border-white/20">
                    <ArrowUpRight size={18}/>
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-end">
                  <div className="p-7 pt-10 pb-0 lg:p-10 lg:pt-10 lg:pb-0">
                    <h3 className="text-4xl font-semibold leading-[1.05] tracking-[-.05em] lg:text-5xl">{item.title}</h3>
                  </div>

                  <div className="case-visual m-3 mt-8 overflow-hidden rounded-[1.25rem] bg-[#f7f4ec] transition duration-500 dark:bg-white/[.04]">
                    <img
                      src={item.thumbnail}
                      alt={`${item.title} preview`}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
      </div>
    </section>
  )
}

function CaseVisual({ type }) {
  if (type === 'loyalty') {
    return (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <img
          src={loyaltyWalletImage}
          alt="Loyalty wallet experience"
          className="h-full w-full object-cover"
        />
      </div>
    )
  }

  if (type === 'driver') {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <img
        src={failedDeliveryThumbnail}
        alt="Failed Delivery Recovery Experience"
        className="h-full w-full object-cover"
      />
    </div>
  )
}

  if (type === 'new-user-homepage') {
    return (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <img
          src={firstTimeUserHomeWalletImage}
          alt="New User Homepage Optimization"
          className="h-full w-full object-cover"
        />
      </div>
    )
  }

  return null
}

function CasePage({ item, navigate }) {
  return (
    <main className="pt-18">
      {item.id === 'loyalty' ? (
        <LoyaltyHero />
      ) : item.id === 'new-user-homepage' ? (
        <NewUserHomepageHero />
      ) : (
      <section className="px-5 py-16 lg:px-10 lg:py-24" style={{backgroundColor:item.color}}>
        <div className="mx-auto max-w-[1200px] text-ink">
          <div className="mb-16 flex justify-between text-xs font-bold uppercase tracking-[.14em]">
            <span>Case study {item.index}</span>
            <span>{item.category} · {item.year}</span>
          </div>

          <h1 className="display max-w-5xl text-6xl font-semibold lg:text-9xl">
            {item.title}
          </h1>

          <p className="mt-8 max-w-2xl text-xl text-black/60 lg:text-2xl">
            {item.subtitle}
          </p>

          <div className="mt-16 grid gap-4 border-t border-black/20 pt-8 md:grid-cols-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.14em] text-black/40">Role</p>
              <p className="mt-3 text-lg font-semibold">Senior Product Design Manager</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.14em] text-black/40">Team</p>
              <p className="mt-3 text-lg font-semibold">Product · Engineering · Data · Operations</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.14em] text-black/40">Scope</p>
              <p className="mt-3 text-lg font-semibold">
                {item.scope || (item.id === 'loyalty'
                  ? 'Wallet · Rewards · Checkout · Account'
                  : item.id === 'new-user-homepage'
                    ? 'Homepage · Store Discovery · First Cart · Conversion'
                    : 'Driver App · Pickup · Delivery · Exceptions')}
              </p>
            </div>
          </div>
        </div>
      </section>
      )}

      {item.id === 'loyalty'
        ? <LoyaltyCaseStudy item={item}/>
        : item.id === 'new-user-homepage'
          ? <NewUserHomepageCaseStudyV02 />
          : smallCaseStudies.some(project => project.id === item.id)
            ? <SmallCaseStudy item={item}/>
            : <DriverCaseStudy item={item}/>}
 
      <section className={`${item.id === 'loyalty' ? 'max-w-none bg-[#f3f1eb] text-[#111318]' : 'mx-auto max-w-[1200px]'} px-5 pb-24 lg:px-10`}>
        <button
          onClick={() => {
            navigate('/', { scrollTop: false })
            setTimeout(() => {
              const el = document.querySelector(`#work-${item.id}`)
              if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' })
            }, 0)
          }}
          className="mx-auto flex items-center gap-2 rounded-full border border-black/20 px-6 py-3 text-sm font-semibold dark:border-white/20"
        >
          Back to all work <ArrowRight size={16}/>
        </button>
      </section>
    </main>
  )
}

function NewUserHomepageHero() {
  return (
    <section className="relative overflow-hidden bg-[#dceaff] px-5 pb-12 pt-20 text-[#101114] lg:px-10 lg:pb-14 lg:pt-28">
      <div className="relative mx-auto max-w-[1038px]">
        <h1 className="max-w-[960px] text-[clamp(3.7rem,9.2vw,8rem)] font-semibold leading-[.84] tracking-[-.067em]">
          First Cart<br />Experience for<br />New Shoppers
        </h1>
        <p className="mt-8 max-w-[900px] text-lg leading-relaxed text-black/55 lg:text-2xl">
          Helping new shoppers find the right store, understand the value of Weee!, and build their first cart.
        </p>
        <div className="mt-10 grid gap-7 border-t border-black/20 pt-7 text-sm sm:grid-cols-3 lg:grid-cols-[198px_198px_238px] lg:justify-between">
          {[
            ['Role', 'Product Design Lead'],
            ['Team', 'Product · Engineering · Data · Operations'],
            ['Scope', 'Homepage · Store Discovery · First Cart · Conversion'],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-[10px] font-bold uppercase tracking-[.16em] text-black/40">{label}</p>
              <p className="mt-2 font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LoyaltyHero() {
  return (
    <section className="bg-[#e1b8f8] px-5 py-12 text-[#101114] lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1038px]">
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[.18em]">
          <span>Case Study 01</span>
          <span>Loyalty · 2026</span>
        </div>
        <h1 className="mt-16 max-w-[960px] text-[clamp(3.6rem,8.7vw,7.8rem)] font-semibold leading-[.82] tracking-[-.065em]">
          Redesigning<br />Weee!’s Loyalty<br />Ecosystem
        </h1>
        <p className="mt-8 w-full text-lg leading-relaxed text-black/55 lg:text-2xl">
          A strategic redesign that separated earned rewards from cash value, creating a clearer experience for customers and a more manageable loyalty system for the business.
        </p>
        <div className="mt-10 grid gap-7 border-t border-black/20 pt-7 text-sm sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Role', 'Product Design Lead'],
            ['Team', 'Product · Engineering · Data · Operations'],
            ['Scope', 'Wallet · Rewards · Checkout · Account'],
            ['Status', 'Design Complete · In Testing'],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-[10px] font-bold uppercase tracking-[.16em] text-black/40">{label}</p>
              <p className="mt-2 font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LoyaltyCaseStudy({ item }) {
  const impactCards = [
    ['Customer Clarity', 'Customers can understand what they earned, what they purchased, and how each balance can be used.'],
    ['Business Control', 'The business can manage point expiration and outstanding liability without applying reward rules to cash-purchased value.'],
    ['Platform Foundation', 'The new architecture creates a flexible foundation for future rewards, promotions, and customer re-engagement.'],
  ]

  return (
    <div className="bg-[#f3f1eb] text-[#111318] dark:bg-[#f3f1eb] dark:text-[#111318]">
      <div className="mx-auto max-w-[1038px] px-5 lg:px-10">
        <LoyaltyEditorialSection label="Overview">
          <h2 className="loyalty-heading max-w-3xl">A clearer loyalty system for customers and the business.</h2>
          <p className="loyalty-copy mt-7 max-w-3xl">
            I led the redesign of Weee!’s loyalty ecosystem, separating earned rewards from cash-purchased value to improve clarity, simplify expiration management, and create a scalable foundation for future loyalty programs.
          </p>
        </LoyaltyEditorialSection>

        <LoyaltyEditorialSection label="The Original Ask">
          <h2 className="loyalty-heading max-w-3xl">Reduce outstanding liability by introducing expiration for unused points.</h2>
        </LoyaltyEditorialSection>

        <LoyaltyEditorialSection label="What I Discovered">
          <img src={loyaltyDiscoveryMechanismsImage} alt="A single points balance fed by five different earning mechanisms" className="w-full" />
        </LoyaltyEditorialSection>

        <LoyaltyEditorialSection label="Problem">
          <div className="grid gap-5 md:grid-cols-2">
            <InsightCard title="Customer problem">Customers could not understand where their value came from, how it could be used, or when it would expire.</InsightCard>
            <InsightCard title="Business problem">Different value types required different expiration, accounting, and liability rules but were managed as one balance.</InsightCard>
          </div>
        </LoyaltyEditorialSection>

        <LoyaltyEditorialSection label="How I Reframed the Problem">
          <h2 className="loyalty-heading max-w-3xl">The real problem was not how to expire points. It was how to separate two fundamentally different types of value.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <InsightCard title="Original question" arrow>How might we expire unused points?</InsightCard>
            <InsightCard title="Reframed question" accent>How might we separate earned rewards from cash value while keeping the experience simple for customers?</InsightCard>
          </div>
        </LoyaltyEditorialSection>

        <section className="border-b border-black/10 py-20 lg:py-24">
          <p className="loyalty-kicker">The New System</p>
          <h2 className="loyalty-heading mt-10 max-w-4xl">One balance became two clearly defined value systems.</h2>
          <p className="loyalty-copy mt-5 max-w-4xl">We separated earned rewards from cash-purchased value so that each could follow the right expiration, accounting, and usage rules. This created a clearer customer experience and a more manageable foundation for the loyalty program.</p>
          <img src={loyaltyNewSystemImage} alt="Before and after loyalty value-system architecture" className="mt-10 w-full" />
        </section>

        <section className="border-b border-black/10 py-20 lg:py-24">
          <p className="loyalty-kicker">Key Experiences</p>
          <h2 className="loyalty-heading mt-10 max-w-4xl">How the new system works across the customer journey.</h2>
          <p className="loyalty-copy mt-5 max-w-3xl">Connected experiences help customers understand, manage, and use each type of value.</p>
          <ExperienceStateLabel className="mt-10" state="Before">A single balance with limited context.</ExperienceStateLabel>
          <div className="mt-6 aspect-[957/366] w-full overflow-hidden">
            <img src={keyExperienceHero} alt="The previous account and single-balance points experience" className="w-full -translate-y-[15%]" />
          </div>

          <ExperienceStateLabel className="mt-10" state="After">Two distinct balances with clear context and controls.</ExperienceStateLabel>
          <div className="mt-6 space-y-9">
            {[
              [walletHomeImage, 'Wallet Overview', 'A clear view of WeeePoints, WeeeCash, available value, and upcoming expirations.'],
              [walletDetailsImage, 'Earn & Add Value', 'Clear entry points to earn WeeePoints, add WeeeCash, and understand each value type.'],
              [expirationAwarenessImage, 'Checkout & Rewards', 'Surface available value, reward status, and payment benefits at the moment of purchase.'],
            ].map(([src, title, description]) => (
              <img key={title} src={src} alt={`${title}: ${description}`} className="w-full rounded-[1.75rem]" />
            ))}
          </div>
          <ExperienceStateLabel className="mt-14" state="Proposed Direction" />
          <img src={expirationRemindersImage} alt="Expiration reminders through push, email, and the notification center" className="mt-6 w-full rounded-[1.75rem]" />
        </section>

        <section className="py-20 lg:py-24">
          <p className="loyalty-kicker">Strategic Value</p>
          <h2 className="loyalty-heading mt-10 max-w-4xl">Clearer for customers. More control for the business.</h2>
          <p className="loyalty-copy mt-5 max-w-4xl">By separating earned rewards from cash-purchased value, the new system makes balances easier to understand while giving the business more control over expiration and outstanding liability.</p>
          <div className="grid gap-4 md:grid-cols-3">
            {impactCards.map(([title, description]) => (
              <article key={title} className="mt-10 rounded-[1.5rem] bg-white p-7">
                <h3 className="text-lg font-semibold tracking-[-.03em] text-[#bd3bf1]">{title}</h3>
                <p className="mt-3 text-base leading-[1.25] text-black">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-[2rem] bg-[#121317] px-8 py-12 text-white lg:px-16 lg:py-16">
          <p className="text-[11px] font-bold uppercase tracking-[.22em] text-white/45">What I Learned</p>
          <h2 className="mt-10 max-w-[1050px] text-[clamp(2.6rem,5vw,4.4rem)] font-semibold leading-[1.08] tracking-[-.045em]">
            I learned that the most important design decisions can happen before the interface. Separating the two types of value made the system easier for customers to understand and trust.
          </h2>
        </section>
      </div>
    </div>
  )
}

function LoyaltyEditorialSection({ label, children }) {
  return (
    <section className="grid gap-8 border-b border-black/10 py-20 lg:grid-cols-[180px_1fr] lg:py-28">
      <p className="loyalty-kicker">{label}</p>
      <div>{children}</div>
    </section>
  )
}

function InsightCard({ title, accent = false, blue = false, arrow = false, titleBlue = false, children }) {
  return (
    <article className={`relative rounded-[1.35rem] p-7 ${accent ? `${blue ? 'bg-[#2E66B6]' : 'bg-[#ff8080]'} text-white` : 'bg-white text-black'} ${arrow ? 'reframe-arrow' : ''}`}>
      <h3 className={`text-lg font-semibold tracking-[-.03em] ${titleBlue ? 'text-[#2E66B6]' : ''}`}>{title}</h3>
      <p className={`mt-3 text-sm leading-relaxed ${accent ? 'text-white/90' : 'text-black/60'}`}>{children}</p>
    </article>
  )
}

function ExperienceStateLabel({ state, className = '', children }) {
  const isAccent = ['after', 'proposed direction'].includes(state.toLowerCase())
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <span className={`rounded-md px-2 py-2 text-[11px] font-bold uppercase tracking-[.08em] text-white ${isAccent ? 'bg-[#b64cff]' : 'bg-[#91908c]'}`}>{state}</span>
      {children && <span className="text-base text-black/60 lg:text-xl">{children}</span>}
    </div>
  )
}

function BusinessContextSection() {
  return (
    <section className="grid gap-6 border-b border-black/15 py-20 dark:border-white/15 lg:grid-cols-[220px_1fr] lg:py-28">
      <div>
        <p className="text-xs font-bold uppercase tracking-[.18em] text-black/40 dark:text-white/40">
          Business Context
        </p>
      </div>

      <div>
        <h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-.045em] lg:text-6xl">
          Multiple point sources were combined into one balance.
        </h2>

        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-black/60 dark:text-white/55">
          Over time, Weee introduced multiple ways for customers to earn points. These point sources represented different types of value, but they all appeared as a single balance under Weee Points.
        </p>

        <div className="mt-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[.14em] text-black/40 dark:text-white/40">
            Multiple earning mechanisms
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <img
            src={fiveWaysImage}
            alt="5 Ways to Earn Points"
            className="w-full max-w-[1200px]"
          />
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[.14em] text-black/40 dark:text-white/40">
            What customers actually saw
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <img
            src={currentWeeePointImage}
            alt="Current Weee Points Experience"
            className="w-full max-w-[1000px]"
          />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-[#f7f4ec] p-7 dark:bg-white/[.04]">
            <h3 className="text-2xl font-semibold tracking-[-.03em]">
              Customers only saw one number.
            </h3>
            <p className="mt-4 leading-relaxed text-black/55 dark:text-white/50">
              From the customer’s perspective, all points appeared identical, even though they came from different sources and carried different business meanings.
            </p>
          </div>

          <div className="rounded-3xl bg-[#f7f4ec] p-7 dark:bg-white/[.04]">
            <h3 className="text-2xl font-semibold tracking-[-.03em]">
              The system lacked flexibility.
            </h3>
            <p className="mt-4 leading-relaxed text-black/55 dark:text-white/50">
              The single-balance model made it difficult to manage expiration, liability, purchased value, and future loyalty expansion.
            </p>
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-2xl font-semibold leading-relaxed tracking-[-.035em]">
          What appeared simple on the surface had become increasingly complex underneath.
        </p>
      </div>
    </section>
  )
}


function ProblemStatementSection() {
  const problemImages = [
    [loyaltyProblemOneImage, 'Different assets, one balance problem statement'],
    [loyaltyProblemTwoImage, 'Rewards failed to drive repeat purchases problem statement'],
    [loyaltyProblemThreeImage, 'Limited wallet transparency problem statement'],
  ]

  return (
    <section className="grid gap-6 border-b border-black/15 py-20 dark:border-white/15 lg:grid-cols-[220px_1fr] lg:py-28">
      <div>
        <p className="text-xs font-bold uppercase tracking-[.18em] text-black/40 dark:text-white/40">
          Problem Statement
        </p>
      </div>

      <div>
        <h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-.045em] lg:text-6xl">
          A single balance was masking multiple business challenges.
        </h2>

        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-black/60 dark:text-white/55">
          Customers couldn't distinguish value types, rewards failed to drive repeat purchases, and the wallet experience lacked transparency.
        </p>

        <div className="mt-14 space-y-8">
          {problemImages.map(([src, alt]) => (
            <img
              key={alt}
              src={src}
              alt={alt}
              className="w-full rounded-[2rem]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function DriverCaseStudy({ item }) {
  return (
    <div className="mx-auto max-w-[1200px] px-5 py-20 lg:px-10 lg:py-28">
      <CaseSection
        label="Executive Summary"
        title="Transforming failed delivery reporting into a guided recovery experience."
        body="As Weee! scaled its last-mile delivery network, failed deliveries became a growing operational challenge. Drivers frequently encountered unavailable customers, incorrect addresses, restricted access, or difficulties locating destinations. I led the redesign of the failed delivery workflow, helping drivers resolve delivery issues before abandoning an order."
      />

      <section className="grid gap-6 border-b border-black/15 py-16 lg:grid-cols-[220px_1fr]">
  <div>
    <p className="text-xs font-bold uppercase tracking-[.16em] text-black/40">
      Business Context
    </p>
  </div>

  <div>
    <h2 className="max-w-4xl text-3xl font-semibold leading-[1.15] tracking-[-.035em] lg:text-6xl">
      Failed deliveries were more than an operations problem.
    </h2>

    <p className="mt-6 max-w-3xl text-xl leading-relaxed text-black/60">
      Weee!'s delivery ecosystem depends on a seamless connection between
      customers, operations teams, and delivery drivers. As delivery volume
      increased, failed deliveries became one of the most expensive operational
      inefficiencies.
    </p>

    <img
      src={businessContextImage}
      alt="Failed Delivery Business Context"
      className="mt-10 w-full rounded-[24px]"
    />
  </div>
</section>
		
		<section className="grid gap-6 border-b border-black/15 py-16 lg:grid-cols-[220px_1fr]">
  <div>
    <p className="text-xs font-bold uppercase tracking-[.16em] text-black/40">
      Problem Statement
    </p>
  </div>

  <div>
    <h2 className="max-w-4xl text-3xl font-semibold leading-[1.15] tracking-[-.035em] lg:text-6xl">
      Drivers had no clear recovery process.
    </h2>

    <p className="mt-6 max-w-3xl text-xl leading-relaxed text-black/60">
      {item.problem}
    </p>

    <img
      src={problemStatementImage}
      alt="Failed Delivery Problem Statement"
      className="mt-10 w-full rounded-[24px]"
    />
  </div>
</section>

		<section className="grid gap-6 border-b border-black/15 py-16 lg:grid-cols-[220px_1fr]">
  <div>
    <p className="text-xs font-bold uppercase tracking-[.16em] text-black/40">
      RESEARCH & INSIGHTS
    </p>
  </div>

  <div>
    <h2 className="max-w-4xl text-3xl font-semibold leading-[1.15] tracking-[-.035em] lg:text-6xl">
      The issue was not driver behavior. It was the absence of a recovery framework.
    </h2>

    <div className="mt-12 rounded-[40px] bg-[#7CA71C] p-10 lg:p-16">
      <p className="text-xs font-bold uppercase tracking-[.16em] text-white/50">
        KEY INSIGHT
      </p>

      <h3 className="mt-8 text-4xl font-semibold leading-[1.08] tracking-[-.015em] text-white lg:text-5xl">
        Drivers were not intentionally causing delivery failures. They simply lacked confidence and guidance when unexpected situations occurred.
      </h3>
    </div>
  </div>
</section>      
      
		<section className="grid gap-6 border-b border-black/15 py-16 lg:grid-cols-[220px_1fr]">
  <div>
    <p className="text-xs font-bold uppercase tracking-[.16em] text-black/40">
      DESIGN PRINCIPLES
    </p>
  </div>

  <div>
    <h2 className="max-w-4xl text-3xl font-semibold leading-[1.15] tracking-[-.035em] lg:text-6xl">
      Guide drivers toward recovery before escalation.
    </h2>

    <p className="mt-6 max-w-3xl text-xl leading-relaxed text-black/60">
      {item.strategy}
    </p>

    <img
      src={designPrincipleImage}
      alt="Failed Delivery Design Principles"
      className="mt-10 w-full rounded-[24px]"
    />
  </div>
</section>
		
      <section className="py-24">
        <p className="mb-6 text-xs font-bold uppercase tracking-[.16em] text-black/40 dark:text-white/40">Key Experiences</p>
       
       <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-.045em] lg:text-6xl">
          A guided failed delivery recovery flow.
        </h2>
        <p className="mt-6 max-w-4xl text-xl leading-relaxed text-black/60">
  I redesigned the experience around a structured recovery journey that
  verifies the package, identifies the issue, confirms location, guides
  customer contact, recommends next steps, and requires evidence before
  failure submission.
</p>
<div className="mt-12 overflow-hidden rounded-[2rem]">
  <img
    src={failedDeliveryKeyExperience}
    alt="Failed Delivery Recovery Flow"
    className="w-full"
  />
</div>

<div className="mt-12 overflow-hidden rounded-[2rem]">
  <img
    src={designFlowImage}
    alt="Failed Delivery Design Flow"
    className="w-full"
  />
</div>
        
      </section>

<section className="py-24">
  <p className="mb-6 text-xs font-bold uppercase tracking-[.16em] text-black/40 dark:text-white/40">
    OUTCOME
  </p>

  
  <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-.045em] lg:text-6xl">
    Measurable impact across drivers, customers, and operations.
  </h2>

  <p className="mt-6 max-w-4xl text-xl leading-relaxed text-black/60">
    The guided recovery workflow improved consistency, reduced avoidable failed
    deliveries, and created greater visibility into delivery exceptions across
    the network.
  </p>

  <div className="mt-12 overflow-hidden rounded-[2rem]">
    <img
      src={failedDeliveryOutcome}
      alt="Failed Delivery Recovery Outcome"
      className="w-full"
    />
  </div>
</section>

      <Learning text={item.learning}/>
    </div>
  )
}



function NewUserHomepageCaseStudy({ item }) {
  const challenges = [
    ['01', 'The default store experience could create a trust gap', 'When Weee! did not have enough information about a new visitor, the site often showed the Chinese store by default. For non-Chinese shoppers, this made the experience feel less relevant and less personal.'],
    ['02', 'The breadth of ethnic stores was not immediately visible', 'Although Weee! had a rich marketplace of 14+ ethnic grocery stores, new users did not easily recognize that variety or understand that Weee! had products tailored to their cultural shopping needs.'],
    ['03', 'The value proposition was not communicated fast enough', 'The homepage needed to quickly explain ethnic grocery selection, freshness, delivery convenience, trusted community, and special offers before asking users to shop.'],
    ['04', 'New-user perks were not visible enough', 'Special benefits for new shoppers were not always surfaced at the right moment, reducing the impact of marketing efforts designed to improve conversion.'],
    ['05', 'New users needed help starting their first cart', 'Many first-time shoppers arrived without a clear shopping plan. They needed inspiration, social proof, and low-friction entry points to begin adding items.'],
  ]

  const strategicShifts = [
    ['From default assumption to user choice', 'Instead of pushing new organic users into one default ethnic store, the experience encouraged them to choose the store that best matched their needs.'],
    ['From hidden navigation to visible discovery', 'We introduced a temporary store selector module directly below the hero area for first-time users, making store discovery more visible without adding long-term clutter.'],
    ['From browsing products to building confidence', 'The homepage introduced clearer value propositions, new-user perks, social proof, and cart-building modules to help first-time shoppers understand the service and take action.'],
  ]

  const solutions = [
    ['01', 'Store selector for first-time discovery', 'A more prominent store selector helped users quickly understand that Weee! was a marketplace with multiple culturally relevant shopping experiences.'],
    ['02', 'Clearer value propositions & Stronger visibility for new-user perks', 'A new value proposition section communicated selection, freshness, delivery convenience, trusted shopping, and community-driven discovery. New-user benefits were surfaced more clearly within the homepage journey, connecting marketing incentives directly to shopping behavior.'],
    ['03', 'Cart builder for first-time shoppers', 'Modules like Build your first cart, Trending store favorites, New shopper favorites, and Top repurchased items helped reduce decision friction.'],
    ['04', 'Marketplace-wide recommendations before store selection', 'Before a user selected a store, recommendations stayed broad and inclusive instead of defaulting too early to a single ethnic store.'],
    ['05', 'Social proof through real customer data', 'Modules using real shopping behavior and customer reviews helped first-time users feel safer and more confident.'],
    ['06', 'Product exploration based on search intent', 'Related and similar product recommendations turned search into a broader discovery path instead of a single-item lookup.'],
    ['07', 'Turning promotions into guided discovery', 'Instead of showing promotions as a flat product grid, we grouped hot deals, weekly picks, local restaurant deals, and bakery items into themed discovery moments. This helped new users understand the breadth of Weee!’s marketplace while creating more low-friction opportunities to add items to cart.'],
  ]

  const principles = [
    'Make relevance visible immediately',
    'Do not over-personalize without enough data',
    'Help users start, not just browse',
    'Build trust before asking for conversion',
  ]

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-20 lg:px-10 lg:py-28">
      <CaseSection
        label="Overview"
        title="Helping new visitors recognize that Weee! was built for their cultural shopping needs."
        body="Weee! had grown into a multi-ethnic grocery marketplace with more than 14 ethnic grocery stores, including Chinese, Korean, Japanese, Vietnamese, Filipino, Thai, Indian, and more. However, the new-user homepage did not fully reflect that diversity, especially when the system lacked enough data to personalize the first visit."
      />

      <CaseSection
        label="The Challenge"
        title="New users were landing in an experience that assumed too much."
        body="The existing homepage was optimized around returning-user behavior. It assumed that shoppers already understood Weee!, knew which ethnic store they wanted, and had a clear idea of what to buy. But many first-time visitors arrived from organic search, paid marketing, shared links, or product discovery flows with limited context."
      />

      <section className="grid gap-6 border-b border-black/15 py-16 dark:border-white/15 lg:grid-cols-[220px_1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.16em] text-black/40 dark:text-white/40">Problem Areas</p>
        </div>
        <div>
          <h2 className="max-w-4xl text-3xl font-semibold leading-[1.15] tracking-[-.035em] lg:text-6xl">
            Five friction points made the first visit feel less relevant and less actionable.
          </h2>

          <div className="mt-12 space-y-4">
            {challenges.map(([number, title, description]) => (
              <div key={title} className="grid gap-5 rounded-[2rem] border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-white/[.04] md:grid-cols-[80px_1fr]">
                <span className="font-sans text-sm text-black/35 dark:text-white/35">{number}</span>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-.035em]">{title}</h3>
                  <p className="mt-3 max-w-3xl leading-relaxed text-black/60 dark:text-white/55">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 border-b border-black/15 py-16 dark:border-white/15 lg:grid-cols-[220px_1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.16em] text-black/40 dark:text-white/40">Key Insight</p>
        </div>
        <div>
          <div className="rounded-[40px] bg-[#1F59AD] text-white lg:p-16">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-white/40">Insight</p>
            <h2 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-.045em] lg:text-6xl">
              New users do not just need products. They need orientation, relevance, and confidence.
            </h2>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/60">
              For first-time visitors, the homepage needed to answer: Is this store for me? What can I buy here? Why should I trust this service? What should I add to my cart first?
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 border-b border-black/15 py-16 dark:border-white/15 lg:grid-cols-[220px_1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.16em] text-black/40 dark:text-white/40">Design Strategy</p>
        </div>
        <div>
          <h2 className="max-w-4xl text-3xl font-semibold leading-[1.15] tracking-[-.035em] lg:text-6xl">
            Turn a generic merchandising page into a guided first-shopping experience.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {strategicShifts.map(([title, description]) => (
              <div key={title} className="rounded-3xl bg-[#f7f4ec] p-7 dark:bg-white/[.04]">
                <h3 className="text-2xl font-semibold tracking-[-.03em]">{title}</h3>
                <p className="mt-4 leading-relaxed text-black/55 dark:text-white/50">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <p className="mb-6 text-xs font-bold uppercase tracking-[.16em] text-black/40 dark:text-white/40">Solution</p>
        <h2 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-[-.045em] lg:text-6xl">
          A homepage system that made store choice, value, trust, and first-cart creation easier.
        </h2>

        <div className="mt-14 space-y-5">
          {solutions.map(([number, title, description]) => (
            <div key={title} className="grid gap-5 rounded-[2rem] border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-white/[.04] md:grid-cols-[80px_1fr]">
              <span className="font-sans text-sm text-black/35 dark:text-white/35">{number}</span>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-.035em]">{title}</h3>
                <p className="mt-3 max-w-3xl leading-relaxed text-black/60 dark:text-white/55">{description}</p>
                <div className="mt-8 overflow-hidden rounded-2xl bg-[#f7f4ec] dark:bg-white/[.04]">
                  <img
src={
  number === '02'
    ? newUserHomeValuePropositionsImage
    : number === '03'
      ? newUserHomeCartBuilderImage
      : number === '04'
        ? newUserHomeRecommendationsImage
        : number === '05'
          ? newUserHomeSocialProofImage
          : number === '06'
            ? newUserHomeProductExplorationImage
            : number === '07'
              ? newUserHomeGuidedDiscoveryImage
              : newUserHomeStoreSelectorImage
}
                    alt={`${title} visual`}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-black/15 py-20 dark:border-white/15">
        <p className="mb-10 text-xs font-bold uppercase tracking-[.16em] text-black/40 dark:text-white/40">Experience Principles</p>
        <div className="grid gap-4 md:grid-cols-2">
          {principles.map((principle, index) => (
            <div key={principle} className="rounded-3xl border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-white/[.04]">
              <span className="font-sans text-xs text-black/35 dark:text-white/35">0{index + 1}</span>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-.03em]">{principle}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <p className="mb-6 text-xs font-bold uppercase tracking-[.16em] text-black/40 dark:text-white/40">Results</p>
        <h2 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-[-.045em] lg:text-6xl">
          The homepage became a guided entry point for first-time shoppers.
        </h2>
        <p className="mt-6 max-w-4xl text-xl leading-relaxed text-black/60 dark:text-white/55">
          The redesigned experience was designed to improve new-user add-to-cart rate, first-purchase conversion, store discovery, product exploration, engagement with new-user perks, and trust in Weee!’s marketplace experience.
        </p>
        <p className="mt-6 max-w-4xl text-xl leading-relaxed text-black/60 dark:text-white/55">
          The biggest impact was not simply adding more modules to the homepage. It was changing the role of the homepage from a generic storefront into a guided experience that helped users choose the right store, understand the value of Weee!, and start building their first cart with confidence.
        </p>
      </section>

      <Learning text={item.learning}/>
    </div>
  )
}


function NewUserHomepageCaseStudyV02() {
  const dataSignals = [
    ['Brief visits and early exits', 'Many new shoppers briefly explored the default Chinese storefront and then left the site.'],
    ['Very little store switching', 'Even when another store could better match their needs, most new visitors did not switch.'],
    ['A weak first-purchase funnel', 'Product clicks, add-to-cart activity, and purchase conversion were low.'],
  ]
  const experienceChanges = [
    ['01', 'Ask users instead of guessing', 'When we did not have enough information to identify a shopper’s needs, we asked them to choose the store most relevant to them. The selector made Weee!’s range of stores visible and gave each shopper a more personalized starting point.', newUserHomeStoreSelectorV02Image],
    ['02', 'Explain the service and new-shopper benefits early', 'We made Weee!’s marketplace benefits easier to understand before asking visitors to shop—from culturally relevant selection and delivery convenience to trusted service and new-shopper benefits.', newUserHomeValuePropositionsImage],
    ['03', 'Help shoppers build their first cart', 'We introduced a “Build Your First Cart” module that organized products around useful shopping themes.\nInstead of starting with a large, open-ended catalog, shoppers could use these collections as inspiration and begin adding related products to their carts.', newUserHomeCartBuilderImage],
  ]
  const supportingDiscovery = [
    ['04', 'Build confidence with real customer behavior', 'We used real shopping behavior, including trending products, new-shopper favorites, frequently repurchased items, and customer reviews.', 'These signals helped new shoppers understand which products other customers regularly bought and trusted.', newUserHomeSocialProofImage],
    ['05', 'Continue discovery from search intent', 'When we had information about a shopper’s search or landing-page intent, we used it to introduce related and similar products.', 'A shopper who arrived looking for one item could discover a broader selection without having to begin a new search.', newUserHomeProductExplorationImage],
    ['06', 'Turn promotions into shopping ideas', 'Instead of presenting promotions as a flat grid of discounted products, we organized them into clear themes such as weekly picks, local restaurant favorites, bakery items, and special deals.', 'This made promotions easier to understand and gave new shoppers more reasons to continue exploring.', newUserHomeGuidedDiscoveryImage],
  ]

  return (
    <div className="bg-[#f3f1eb] text-[#111318] dark:bg-[#f3f1eb] dark:text-[#111318]">
      <div className="mx-auto max-w-[1038px] px-5 lg:px-10">
        <LoyaltyEditorialSection label="Overview">
          <h2 className="loyalty-heading">Creating a homepage designed around the needs of first-time shoppers.</h2>
          <p className="loyalty-copy mt-7">I led the redesign of Weee!’s new-user homepage. Instead of treating first-time visitors like returning customers, we created an experience that helped them find the right store, understand why Weee! was worth trying, and start building their first cart.</p>
        </LoyaltyEditorialSection>

        <LoyaltyEditorialSection label="Business Context">
          <h2 className="loyalty-heading">Different shoppers arrived with different needs—but the homepage treated them all the same.</h2>
          <p className="loyalty-copy mt-7">Weee! serves more than 14 culturally specific grocery stores. Yet first-time shoppers entered through search, referrals, campaigns, and SEO landing pages—signals that rarely revealed which store was right for them. When their intent was unclear, the homepage defaulted to the Chinese store, forcing shoppers to orient themselves before they could begin shopping.</p>
        </LoyaltyEditorialSection>

        <LoyaltyEditorialSection label="Entry Paths">
          <h2 className="loyalty-heading">How new shoppers reach the homepage</h2>
          <div className="mt-10 space-y-6">
            <img
              src={newUserDirectPathImage}
              alt="Direct paths to the Weee! homepage through brand search, a typed URL, bookmark, or marketing link"
              className="w-full"
            />
            <img
              src={newUserIndirectPathImage}
              alt="Indirect paths to the Weee! homepage through product search, shared links, and campaign landing pages"
              className="w-full"
            />
          </div>
          <p className="mt-10 max-w-4xl text-xl leading-relaxed text-black/60 lg:text-2xl">
            New shoppers arriving through these different paths had different needs, but the homepage had little context to identify them.
          </p>
        </LoyaltyEditorialSection>

        <LoyaltyEditorialSection label="Project Goal">
          <h2 className="loyalty-heading">Help more first-time visitors find relevant products and complete their first purchase.</h2>
          <p className="loyalty-copy mt-7">Make the first visit easier to understand and create a clearer path from arrival to product discovery, first cart, and purchase.</p>
        </LoyaltyEditorialSection>

        <LoyaltyEditorialSection label="What the Data Showed">
          <h2 className="loyalty-heading">Many new visitors left before discovering what Weee! could offer them.</h2>
          <p className="loyalty-copy mt-7">We worked with our data team to review first-time visitor behavior and found three important patterns.</p>
          <div className="mt-10 space-y-3">
            {dataSignals.map(([title, description]) => (
              <article key={title} className="grid overflow-hidden rounded-[1.2rem] bg-white md:grid-cols-[252px_1fr]">
                <h3 className="bg-[#2E66B6] p-6 text-lg font-semibold tracking-[-.03em] text-white">{title}</h3>
                <p className="p-6 text-sm leading-relaxed text-black/60">{description}</p>
              </article>
            ))}
          </div>
        </LoyaltyEditorialSection>

        <LoyaltyEditorialSection label="Problem Discovery">
          <h2 className="loyalty-heading">The problem was not a lack of products. New shoppers were not finding the right starting point.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <InsightCard title="Customer problem">New shoppers did not always know whether Weee! was right for them, which store to explore, or where to begin.</InsightCard>
            <InsightCard title="Business problem">The homepage did not communicate Weee!’s marketplace value or guide new shoppers toward their first purchase.</InsightCard>
          </div>
        </LoyaltyEditorialSection>

        <LoyaltyEditorialSection label="How I Reframed the Problem">
          <h2 className="loyalty-heading">The homepage needed to guide the first shopping experience, not simply display products.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <InsightCard title="Original question" arrow>How might we increase engagement and conversion on the new-user homepage?</InsightCard>
            <InsightCard title="Reframed question" accent blue>How might we help first-time shoppers find the right store, understand why Weee! is worth trying, and confidently start their first cart?</InsightCard>
          </div>
        </LoyaltyEditorialSection>

        <section className="border-b border-black/10 py-20 lg:py-24">
          <p className="loyalty-kicker">Design Direction</p>
          <h2 className="loyalty-heading mt-10">Find the right store. Understand the value. Start shopping.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ['Find the right store', 'Make Weee!’s culturally specific stores visible and help shoppers choose a relevant starting point.'],
              ['Understand the value', 'Clearly explain the service, delivery experience, product selection, and new-shopper benefits.'],
              ['Start the first cart', 'Give shoppers useful ideas and simple ways to begin adding products.'],
            ].map(([title, description]) => <InsightCard key={title} title={title} titleBlue>{description}</InsightCard>)}
          </div>
        </section>

        <section className="border-b border-black/10 py-20 lg:py-24">
          <p className="loyalty-kicker">Core Experience</p>
          <h2 className="loyalty-heading mt-10">Three changes shaped the first visit.</h2>
          <div className="mt-12 space-y-10">
            {experienceChanges.map(([number, title, description, image]) => (
              <article key={number} className="overflow-hidden rounded-[2rem] bg-white px-5 pt-5 lg:px-8 lg:pt-8">
                <div className="grid gap-4 lg:grid-cols-[38px_1fr]">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#F2F0EA] text-sm font-semibold text-[#111318]">{number}</span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-.035em]">{title}</h3>
                    <p className="mt-3 max-w-[850px] whitespace-pre-line text-sm leading-relaxed text-black/60 lg:text-base">{description}</p>
                    <div className="relative mt-7 overflow-hidden rounded-t-[1.25rem] bg-white">
                      <img src={image} alt={`${title} interface`} className="block w-full" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-black/10 py-20 lg:py-24">
          <p className="loyalty-kicker">Supporting Discovery</p>
          <h2 className="loyalty-heading mt-10">Additional modules helped shoppers continue exploring.</h2>
          <div className="mt-12 space-y-6">
            {supportingDiscovery.map(([number, title, description, outcome, image]) => (
              <article key={number} className="overflow-hidden rounded-[1.5rem] bg-white p-5 lg:p-8">
                <div className="grid gap-3 lg:grid-cols-[38px_1fr]">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#F2F0EA] text-sm font-semibold text-[#111318]">{number}</span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-.035em] lg:text-2xl">{title}</h3>
                    <div className="mt-3 max-w-[850px] space-y-2 text-sm leading-relaxed text-black/60 lg:text-base">
                      <p>{description}</p>
                      <p>{outcome}</p>
                    </div>
                    <div className="mt-7 overflow-hidden bg-white">
                      <img src={image} alt={`${title} interface`} className="block w-full" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <p className="loyalty-kicker">Strategic Value</p>
          <h2 className="loyalty-heading mt-10">A clearer path from the first visit to the first cart.</h2>
          <p className="loyalty-copy mt-7">The redesigned homepage made Weee!’s marketplace easier for new shoppers to understand. It provided a more relevant starting point, explained the value of the service earlier, and gave users practical ways to begin shopping.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ['Customer Clarity', 'New shoppers could find the right store, understand Weee!’s value, and know where to begin.'],
              ['Conversion Path', 'Store discovery, service benefits, and product ideas worked together to guide shoppers toward their first cart.'],
              ['Growth Flexibility', 'A modular homepage made it easier to test content for different entry paths and shopper needs.'],
            ].map(([title, description]) => (
              <article key={title} className="rounded-[1.5rem] bg-white p-7">
                <h3 className="text-lg font-semibold tracking-[-.03em] text-[#1f59ad]">{title}</h3>
                <p className="mt-3 text-base leading-[1.35]">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-[2rem] bg-[#121317] px-8 py-12 text-white lg:px-16 lg:py-16">
          <p className="text-[11px] font-bold uppercase tracking-[.22em] text-white/45">What I Learned</p>
          <h2 className="mt-10 text-[clamp(2.5rem,5vw,4.35rem)] font-semibold leading-[1.08] tracking-[-.045em]">When shopper data was limited, giving users a clear choice created a more relevant experience than making an assumption.</h2>
        </section>
      </div>
    </div>
  )
}

function SmallCaseStudy({ item }) {
  if (item.id === 'delivery-fee-updates' || item.id === 'weee-gift-cards' || item.id === 'anniversary-round-up') {
    return (
      <div className="mx-auto max-w-[1200px] px-5 py-20 lg:px-10 lg:py-28">
        <img
          src={item.detailImage}
          alt={`${item.title} review`}
          className="w-full"
        />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-20 lg:px-10 lg:py-28">
      <CaseSection
        label="Overview"
        title={item.overviewTitle}
        body={item.overview}
      />

      <CaseSection
        label="The Challenge"
        title={item.challengeTitle}
        body={item.problem}
      />

      <CaseSection
        label="Design Strategy"
        title={item.strategyTitle}
        body={item.strategy}
      />

      <section className="py-24">
        <p className="mb-6 text-xs font-bold uppercase tracking-[.16em] text-black/40 dark:text-white/40">Key Experience</p>
        <h2 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-[-.045em] lg:text-6xl">
          {item.solution}
        </h2>

        <div className="mt-12 overflow-hidden rounded-[2rem] bg-[#f7f4ec] dark:bg-white/[.04]">
          <img
            src={item.detailImage}
            alt={`${item.title} experience`}
            className="w-full object-cover"
          />
        </div>
      </section>

      <section className="border-y border-black/15 py-20 dark:border-white/15">
        <p className="mb-10 text-xs font-bold uppercase tracking-[.16em] text-black/40 dark:text-white/40">Outcome</p>
        <div className="grid gap-4 md:grid-cols-3">
          {item.outcome.map((point, index) => (
            <div key={point} className="rounded-3xl border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-white/[.04]">
              <span className="font-sans text-xs text-black/35 dark:text-white/35">0{index + 1}</span>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-.03em]">{point}</h3>
            </div>
          ))}
        </div>
      </section>

      <Learning text={item.learning}/>
    </div>
  )
}

function CaseIntro() {
  return (
    <div className="grid gap-6 border-b border-black/15 pb-20 dark:border-white/15 lg:grid-cols-[220px_1fr]">
      <p className="text-xs font-bold uppercase tracking-[.16em] text-black/40 dark:text-white/40">Overview</p>
      <p className="max-w-4xl text-3xl font-semibold leading-[1.2] tracking-[-.035em] lg:text-5xl">
        A strategic redesign that aligned customer clarity, financial sustainability, and long-term platform flexibility.
      </p>
    </div>
  )
}

function CaseSection({ label, title, body }) {
  return (
    <section className="grid gap-6 border-b border-black/15 py-16 dark:border-white/15 lg:grid-cols-[220px_1fr]">
      <div>
        <p className="text-xs font-bold uppercase tracking-[.16em] text-black/40 dark:text-white/40">{label}</p>
      </div>
      <div>
        <h2 className="max-w-3xl text-3xl font-semibold leading-[1.15] tracking-[-.035em] lg:text-5xl">{title}</h2>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-black/60 dark:text-white/55">{body}</p>
      </div>
    </section>
  )
}

function BusinessImpact() {
  const impacts = [
    {
      title: 'Customer Impact',
      points: [
        'Improved understanding of reward structure',
        'Better asset visibility',
        'Increased loyalty program engagement',
        'Clear distinction between Rewards and Cash',
      ],
    },
    {
      title: 'Business Impact',
      points: [
        'Reduced dormant point liability',
        'Increased repurchase opportunities',
        'Higher wallet engagement',
        'Improved reward redemption behavior',
        'More efficient loyalty operations',
      ],
    },
    {
      title: 'Platform Impact',
      points: [
        'Built a scalable loyalty platform',
        'Established a foundation for future programs',
        'Unified fragmented retention experiences',
        'Standardized wallet architecture',
        'Enabled future membership expansion',
      ],
    },
  ]

  return (
    <section className="border-y border-black/15 py-20 dark:border-white/15">
      <p className="mb-10 text-xs font-bold uppercase tracking-[.16em] text-black/40 dark:text-white/40">Business Impact</p>
      <div className="grid gap-4 md:grid-cols-3">
        {impacts.map((impact) => (
    <div key={impact.title} className="rounded-3xl border border-black/10 bg-white p-7">		<h3 className="text-2xl font-semibold tracking-[-.03em] text-[#AD3FF7]">
 		 {impact.title}
		</h3>   
		         <ul className="mt-5 space-y-3 text-sm leading-relaxed text-black lg:text-base">
              {impact.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Learning({ text }) {
  return (
    <section className="my-20 rounded-[2rem] bg-ink p-8 text-white lg:p-14">
      <p className="text-xs font-bold uppercase tracking-[.16em] text-white/40">What I Learned</p>
      <p className="mt-8 max-w-4xl text-3xl font-semibold leading-[1.2] tracking-[-.035em] lg:text-5xl">
        {text}
      </p>
    </section>
  )
}


function VisualDesignWork() {
  return (
    <section className="bg-[#F3F1EB] py-24 text-ink lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <p className="mb-14 text-xs font-bold uppercase tracking-[.2em] text-black/40 lg:mb-16">
          EARLIER VISUAL DESIGN WORK
        </p>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {designProjects.map((project) => (
            <article key={project.title} className="flex flex-col rounded-[1.75rem] bg-white p-4 sm:p-5 lg:p-6">
              <h3 className="flex min-h-[5.25rem] items-start px-1 pt-2 text-2xl font-semibold leading-[1.08] tracking-[-.035em] lg:text-[1.65rem]">
                {project.title}
              </h3>
              <div className="mt-5 overflow-hidden rounded-[1.25rem] bg-black/[.04]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


function About() {
  return (
    <section id="about" className="border-y border-black/10 bg-white py-24 dark:border-white/10 dark:bg-white/[.04] lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[.16fr_.24fr_1fr] lg:gap-8">
          <div>
            <p className="whitespace-nowrap text-xs font-bold uppercase tracking-[.18em] text-black/45 dark:text-white/45">
              HOW I WORK
            </p>
          </div>

          <div className="lg:col-start-3">
            <h2 className="text-4xl font-semibold leading-[1.03] tracking-[-.055em] lg:text-[5.5rem]">
              I turn customer insight into product strategy, clear experiences, and measurable impact.
            </h2>

            <p className="mt-12 max-w-4xl text-xl leading-relaxed text-black/60 dark:text-white/60 lg:text-2xl">
              I work closely with product, engineering, data, research, marketing, and operations to turn customer and market insight into focused decisions, scalable experiences, and measurable outcomes.
            </p>
          </div>
        </div>

        <div className="mt-[4.5rem] border-t border-black/15 dark:border-white/15 lg:mt-[6.5rem]">
          {expertise.map(([n,title,desc]) => (
            <div key={n} className="group grid gap-4 border-b border-black/15 py-7 last:border-b-0 dark:border-white/15 lg:grid-cols-[.15fr_.45fr_1fr] lg:items-center lg:py-9">
              <span className="font-sans text-xs text-black/35 dark:text-white/35">{n}</span>
              <h3 className="text-2xl font-semibold tracking-[-.03em] lg:text-3xl">{title}</h3>
              <p className="w-full text-lg leading-relaxed text-black/55 transition group-hover:text-black dark:text-white/50 dark:group-hover:text-white">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="overflow-hidden py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-black/45 dark:text-white/45">
          Design philosophy
        </p>

        <h2 className="display text-6xl font-semibold lg:text-8xl">
          Clarity over <span className="text-cobalt">ceremony.</span>
        </h2>

        <p className="mt-7 max-w-6xl text-3xl font-medium leading-[1.2] tracking-[-.025em] text-black/55 dark:text-white/55 md:text-4xl lg:text-5xl">
          I frame the right problem, make strategy tangible, and test the riskiest assumptions early. Then I turn what works into reusable systems and shared principles.
        </p>
      </div>
    </section>
  )
}

function Resume() {
  return (
    <section id="resume" className="bg-white py-24 text-ink dark:bg-[#15181f] dark:text-white lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="flex flex-col justify-between gap-8 border-b border-black/15 pb-12 dark:border-white/15 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-black/45 dark:text-white/45">Experience</p>
            <h2 className="display text-6xl font-semibold lg:text-8xl">Proven experience.<br/>Still curious.</h2>
          </div>
        <a
  href={resumeUrl}
  download
  target="_blank"
  rel="noopener noreferrer"
  className="no-print flex w-fit items-center gap-3 rounded-full bg-ink px-6 py-4 text-white"
>
  <Download size={17} />
  Download résumé
</a>
        </div>

        <div className="divide-y divide-black/15 dark:divide-white/15">
          {experience.map(item => (
            <div key={item.years} className="grid gap-4 py-10 md:grid-cols-[.16fr_.32fr_.68fr] lg:gap-10 lg:py-14">
              <span className="font-sans text-xs text-black/40 dark:text-white/40">{item.years}</span>
              <div>
                <h3 className="text-lg font-bold">{item.role}</h3>
                <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-black/45 dark:text-white/45">{item.company}</p>
              </div>
              {item.bullets ? (
                <ul className="space-y-3 text-[18px] leading-relaxed text-black/60 dark:text-white/55">
                  {item.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-[0.72em] block h-1.5 w-1.5 shrink-0 rounded-full bg-black/55 dark:bg-white/55" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="leading-relaxed text-black/60 dark:text-white/55">{item.detail}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)

  const sendMessage = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get('name')}`)
    const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')}\nEmail: ${data.get('email')}`)
    window.location.href = `mailto:sukmoon.chang@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="bg-[#3B392F] py-24 text-white lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="mb-8 text-xs font-bold uppercase tracking-[.18em] text-white/60">Start a conversation</p>
            <h2 className="display text-6xl font-semibold lg:text-[8rem]">Let’s build<br/>what’s next.</h2>
            <p className="mt-10 max-w-xl text-xl leading-relaxed text-white/65">
              I’m interested in ambitious product challenges, leadership opportunities, and teams that care about customers and outcomes in equal measure.
            </p>
            <div className="mt-12 flex flex-wrap gap-3">
              <a href="mailto:sukmoon.chang@gmail.com" className="flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm">
                <Mail size={16}/> Email
              </a>
              <a href="https://www.linkedin.com/in/sukmoonchang/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm">
                <Linkedin size={16}/> LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={sendMessage} className="rounded-[2rem] bg-white p-7 text-ink lg:p-10">
            {sent ? (
              <div className="grid min-h-[420px] place-items-center text-center">
                <div>
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#dff7e9] text-[#167a45]"><Check/></span>
                  <h3 className="mt-6 text-3xl font-semibold tracking-[-.04em]">Thank you.</h3>
                  <p className="mt-2 text-black/50">Your message is ready to send.</p>
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold tracking-[-.03em]">Tell me what you’re working on.</h3>
                <div className="mt-8 space-y-7">
                  <label className="block text-xs font-bold uppercase tracking-[.12em]">
                    Name
                    <input name="name" required className="mt-2 w-full border-b border-black/20 bg-transparent py-3 text-base font-normal outline-none transition focus:border-cobalt" placeholder="Your name"/>
                  </label>
                  <label className="block text-xs font-bold uppercase tracking-[.12em]">
                    Email
                    <input name="email" required type="email" className="mt-2 w-full border-b border-black/20 bg-transparent py-3 text-base font-normal outline-none transition focus:border-cobalt" placeholder="you@company.com"/>
                  </label>
                  <label className="block text-xs font-bold uppercase tracking-[.12em]">
                    Message
                    <textarea name="message" required rows="4" className="mt-2 w-full resize-none border-b border-black/20 bg-transparent py-3 text-base font-normal outline-none transition focus:border-cobalt" placeholder="A little about the opportunity..."/>
                  </label>
                </div>
                <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-ink py-4 text-sm font-semibold text-white transition hover:bg-cobalt">
                  Send message <Send size={16}/>
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer({ navigate }) {
  return (
    <footer className="bg-[#3B392F] px-5 py-8 text-white lg:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-5 border-t border-white/15 pt-8 text-sm text-white/50 md:flex-row">
        <span>© 2026 Sukmoon Chang</span>
        <span>Product design · Leadership · Marketplace · Loyalty</span>
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-white">Back to top <ArrowUpRight size={14}/></button>
      </div>
    </footer>
  )
}

export default function App() {
  const [dark, setDark] = useState(false)
  const [path, setPath] = useState(window.location.pathname)
  const shouldScrollTopRef = useRef(true)

  const instantScrollTop = () => {
    const html = document.documentElement
    const body = document.body

    const prevHtmlBehavior = html.style.scrollBehavior
    const prevBodyBehavior = body.style.scrollBehavior

    html.style.scrollBehavior = 'auto'
    body.style.scrollBehavior = 'auto'

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    html.scrollTop = 0
    body.scrollTop = 0

    requestAnimationFrame(() => {
      html.style.scrollBehavior = prevHtmlBehavior
      body.style.scrollBehavior = prevBodyBehavior
    })
  }

  useLayoutEffect(() => {
    if (shouldScrollTopRef.current) {
      instantScrollTop()
    }

    shouldScrollTopRef.current = true
  }, [path])

  useEffect(() => {
    document.body.classList.toggle('dark', dark)
  }, [dark])

  useEffect(() => {
    window.history.scrollRestoration = 'manual'

    const handlePopState = () => {
      shouldScrollTopRef.current = true
      setPath(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const navigate = (to, options = {}) => {
    const { scrollTop = true } = options

    window.history.pushState({}, '', to)
    shouldScrollTopRef.current = scrollTop
    setPath(to)

    if (scrollTop) {
      requestAnimationFrame(() => instantScrollTop())
    }
  }

  const currentCase = allCaseStudies.find(item => `/${item.id}` === path)

  if (currentCase) {
    return (
      <div className={dark ? 'dark bg-[#0d0f14] text-white' : 'bg-canvas text-ink'}>
        <Nav dark={dark} setDark={setDark} navigate={navigate}/>
        <CasePage item={currentCase} navigate={navigate}/>
        <Footer navigate={navigate}/>
      </div>
    )
  }

  return (
    <div className={dark ? 'dark bg-[#0d0f14] text-white' : 'bg-canvas text-ink'}>
      <Nav dark={dark} setDark={setDark} navigate={navigate}/>
      <Hero/>
      <Work navigate={navigate}/>
      <About/>
      <Process/>
      <Resume/>
      <VisualDesignWork/>
      <Contact/>
      <Footer navigate={navigate}/>
    </div>
  )
}
