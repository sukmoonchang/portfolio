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
import failedDeliveryThumbnail from './assets/failed-delivery-recovery-thumbnail.png'
import firstTimeUserHomeWalletImage from './assets/first-time-user-home-wallet.png'
import businessContextImage from './assets/failed-delivery-recovery-business-context.png'
import problemStatementImage from './assets/failed-delivery-recovery-problem-statment.png'
import designPrincipleImage from './assets/failed-delivery-design-principle.png'
import failedDeliveryKeyExperience from './assets/failed-delivery-key-experience.png'
import failedDeliveryOutcome from './assets/failed-delivery-recovery-outcome.png'
import designFlowImage from './assets/failed-delivery-design-flow.png'
import newUserHomeStoreSelectorImage from './assets/New-user-home-1-store-selector.png'
import newUserHomeValuePropositionsImage from './assets/New-user-home-value-propositions.png'
import newUserHomeCartBuilderImage from './assets/New-user-home-cart-builder.png'
import newUserHomeProductExplorationImage from './assets/New-user-home-product-exploration.png'
import newUserHomeSocialProofImage from './assets/New-user-home-social-proof.png'
import newUserHomeRecommendationsImage from './assets/New-user-home-recommendations.png'
import newUserHomeGuidedDiscoveryImage from './assets/New-user-home-guided-discovery.png'


const caseStudies = [
  {
    id: 'loyalty',
    index: '01',
    title: 'Loyalty Ecosystem Transformation',
    subtitle: 'Redesigning rewards, wallet clarity, and expiration logic for a more sustainable loyalty system.',
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

const expertise = [
  ['01', 'Product Strategy', 'Turning customer and market insight into focused product bets, roadmaps, and measurable outcomes.'],
  ['02', 'UX Design', 'Creating coherent, accessible experiences across complex customer journeys and service ecosystems.'],
  ['03', 'Design Leadership', 'Building high-trust teams, raising the quality bar, and connecting craft to company strategy.'],
  ['04', 'Experimentation & Growth', 'Using behavioral insight and rigorous testing to unlock acquisition, conversion, and retention.'],
  ['05', 'Marketplace Experience', 'Designing customer, operator, and fulfillment experiences across complex marketplace systems.'],
  ['06', 'Ecommerce Experience', 'Optimizing discovery, basket building, checkout, fulfillment, loyalty, and post-purchase.'],
]

const experience = [
  {
    years: '2020—2026',
    role: 'Senior Product Design Manager',
    company: 'Weee!',
    bullets: [
      'Led product design across Growth, Loyalty, Marketplace, Checkout, and AI initiatives',
      'Built and scaled a product design team across the US and China',
      'Drove marketplace expansion across 10+ ethnic communities',
      'Led Loyalty Ecosystem Transformation and AI Shopping Assistant initiatives'
    ]
  },
  {
    years: '2015—2019',
    role: 'Product Designer',
    company: 'Smule',
    bullets: [
      'Led end-to-end product design across iOS, Android, and Web, shaping experiences for a global community of music creators.',
    ]
  },
  {
    years: '2012—2015',
    role: 'UX/UI Designer',
    company: 'Fixya',
    bullets: [
      'Designed and maintained UI/UX experiences for web and mobile platforms while establishing visual design systems, brand identity, and marketing assets.',
    ]
  },
  
  {
  years: '2013',
  role: 'Instructor',
  company: 'Olivet University',
  bullets: [
    'Taught Advanced Interface Design and mentored graduate students through portfolio-focused design projects.',
  ]
},
{
  years: '2007—2008',
  role: 'Design Manager',
  company: 'Artirus Design',
  bullets: [
    'Led branding and packaging design projects, guided designers through creative direction and execution, and managed key client work including projects for the Korea Tourism Organization.',
  ]
},
{
  years: '2004—2007',
  role: 'Sr. Graphic Designer',
  company: 'Crown Confectionery',
  bullets: [
    'Led web, branding, packaging, and marketing design projects for the Crown Bakery franchise brand, including the development of brand stories, characters, and sub-brands.',
  ]
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
  const links = [['Work', '#work'], ['About', '#about'], ['Resume', '#resume'], ['Contact', '#contact']]

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

          <a href="mailto:sukmoon.chang@gmail.com" className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.03] dark:bg-white dark:text-ink">
            Let’s talk
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
            <span className="block reveal delay-1">Designing systems</span>
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
		  <span>15+ Years Experience</span>
		  <span>Marketplace · Ecommerce · AI</span>
 		 <span>San Francisco Bay Area</span>
		  <span>Open to New Opportunities</span>
</div>
      </div>
    </header>
  )
}

function Metrics() {
  return (
    <section className="bg-ink py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="mb-16 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-white/50">Selected impact</p>
          <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-.045em] lg:text-6xl">
				Building products that drive customer value and business growth.
          </h2>
        </div>

        <div className="grid divide-y divide-white/15 border-y border-white/15 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
          {[
				['15+', 'Years Experience'],
  				['10+', 'Communities Expanded'],
  				['Global', 'Product Teams'],
 				['Growth', 'Product Expertise']
          ].map(([n,l],i) => (
            <div key={n} className={`py-10 md:px-8 lg:py-14 ${i === 0 ? 'md:pl-0' : ''}`}>
              <div className="text-6xl font-semibold tracking-[-.06em] lg:text-7xl">{n}</div>
              <div className="mt-4 text-sm text-white/55">{l}</div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-white/35">
          Selected results are summarized to protect proprietary business information while accurately reflecting impact.
        </p>
      </div>
    </section>
  )
}

function Work({ navigate }) {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Loyalty', 'Operations']
  const shown = filter === 'All' ? caseStudies : caseStudies.filter(c => c.category === filter)

  return (
    <section id="work" className="py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-black/45 dark:text-white/45">Selected case studies</p>
            <h2 className="display text-6xl font-semibold lg:text-8xl">Work that turns<br/>complexity into clarity.</h2>
          </div>

          <div className="hide-scrollbar flex gap-2 overflow-x-auto">
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)} className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${filter === f ? 'border-ink bg-ink text-white dark:border-white dark:bg-white dark:text-ink' : 'border-black/15 hover:border-black/50 dark:border-white/20'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          {shown.map((item) => (
            <button key={item.id} onClick={() => navigate(`/${item.id}`)} className="case-card group grid w-full overflow-hidden rounded-[1.75rem] border border-black/10 bg-white text-left transition hover:shadow-2xl hover:shadow-black/10 dark:border-white/10 dark:bg-white/[.04] lg:grid-cols-[1.05fr_.95fr]">
              <div className="flex min-h-[390px] flex-col justify-between p-7 lg:min-h-[530px] lg:p-12">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-black/40 dark:text-white/40">{item.index} / {item.year}</span>
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
                {item.id === 'loyalty'
                  ? 'Wallet · Rewards · Checkout · Account'
                  : item.id === 'new-user-homepage'
                    ? 'Homepage · Store Discovery · First Cart · Conversion'
                    : 'Driver App · Pickup · Delivery · Exceptions'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {item.id === 'loyalty'
        ? <LoyaltyCaseStudy item={item}/>
        : item.id === 'new-user-homepage'
          ? <NewUserHomepageCaseStudy item={item}/>
          : <DriverCaseStudy item={item}/>}
 
      <section className="mx-auto max-w-[1200px] px-5 pb-24 lg:px-10">
        <button
          onClick={() => navigate('/')}
          className="mx-auto flex items-center gap-2 rounded-full border border-black/20 px-6 py-3 text-sm font-semibold dark:border-white/20"
        >
          Back to all work <ArrowRight size={16}/>
        </button>
      </section>
    </main>
  )
}

function LoyaltyCaseStudy({ item }) {
  return (
    <div className="mx-auto max-w-[1200px] px-5 py-20 lg:px-10 lg:py-28">
      <CaseIntro />

      <CaseSection
        label="Executive Summary"
        title="Redesigning the loyalty ecosystem into a clearer, more sustainable value system."
        body="We separated earned rewards from cash-equivalent value, redesigned the wallet experience, introduced expiration awareness, and created a scalable foundation for future loyalty programs."
      />

      <BusinessContextSection />

      <ProblemStatementSection />

      <CaseSection
        label="Key Insights"
        title="The wallet needed to become more than a balance tracker."
        body={item.insight}
      />

      <section className="my-24 rounded-[2rem] bg-ink p-8 text-white lg:p-16">
        <p className="text-xs font-bold uppercase tracking-[.16em] text-white/40">Design Vision</p>
        <h2 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-[-.045em] lg:text-6xl">
          Transform loyalty from a passive balance tracker into a transparent, motivating, and scalable ecosystem.
        </h2>
      </section>

     <section className="border-y border-black/15 py-20 dark:border-white/15">

  <p className="mb-16 text-xs font-bold uppercase tracking-[.16em] text-black/40 dark:text-white/40">
    Core Solutions
  </p>

  <div className="space-y-16">

    <div>
      <img
        src={coreSolution1}
        alt="Rewards and Cash Clearly Defined"
        className="w-full rounded-[2rem]"
      />
    </div>

    <div>
      <img
        src={coreSolution2}
        alt="Transparent Wallet"
        className="w-full rounded-[2rem]"
      />
    </div>

    <div>
      <img
        src={coreSolution3}
        alt="Expiration Retention Mechanism"
        className="w-full rounded-[2rem]"
      />
    </div>

    <div>
      <img
        src={coreSolution4}
        alt="Payment Incentives"
        className="w-full rounded-[2rem]"
      />
    </div>

  </div>

</section>
     
     

      <section className="py-24">
        <p className="mb-6 text-xs font-bold uppercase tracking-[.16em] text-black/40 dark:text-white/40">Key Experiences</p>
        <h2 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-[-.045em] lg:text-6xl">
          How the new loyalty ecosystem came to life across the customer journey.
        </h2>

       <div className="mt-14 space-y-10">

  <img
    src={keyExperienceHero}
    alt="Existing loyalty experience"
    className="w-full"
  />

  <div className="rounded-[2rem] overflow-hidden">
    <img src={walletHomeImage} alt="Wallet Home" className="w-full" />
  </div>

  <div className="rounded-[2rem] overflow-hidden">
    <img src={walletDetailsImage} alt="Wallet Details" className="w-full" />
  </div>

  <div className="rounded-[2rem] overflow-hidden">
    <img src={expirationAwarenessImage} alt="Expiration Awareness" className="w-full" />
  </div>

</div>
       
      </section>

      <BusinessImpact />

      <Learning text={item.learning} />
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
                <span className="font-mono text-sm text-black/35 dark:text-white/35">{number}</span>
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
              <span className="font-mono text-sm text-black/35 dark:text-white/35">{number}</span>
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
              <span className="font-mono text-xs text-black/35 dark:text-white/35">0{index + 1}</span>
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


function About() {
  return (
    <section id="about" className="border-y border-black/10 bg-[#e8e4dc] py-24 dark:border-white/10 dark:bg-white/[.04] lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[.14fr_.42fr_1fr] lg:gap-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-black/45 dark:text-white/45">
              How I lead
            </p>
          </div>

          <div className="lg:col-start-3">
            <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-.045em] lg:text-7xl">
              I connect customer truth, product strategy, and team craft.
            </h2>

            <div className="mt-10 grid gap-8 text-lg leading-relaxed text-black/60 dark:text-white/60 md:grid-cols-2">
              <p>
                For more than 15 years, I’ve led teams through ambiguous, high-stakes product challenges. My role is to create clarity: a shared understanding of the customer, the business opportunity, and what excellent execution requires.
              </p>
              <p>
                I build environments where designers operate as strategic partners. We work closely with product, engineering, data, research, marketing, and operations to turn insight into outcomes, not just artifacts.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-black/15 dark:border-white/15">
          {expertise.map(([n,title,desc]) => (
            <div key={n} className="group grid gap-4 border-b border-black/15 py-7 dark:border-white/15 lg:grid-cols-[.15fr_.45fr_1fr] lg:items-center lg:py-9">
              <span className="font-mono text-xs text-black/35 dark:text-white/35">{n}</span>
              <h3 className="text-2xl font-semibold tracking-[-.03em] lg:text-3xl">{title}</h3>
              <p className="max-w-2xl text-black/55 transition group-hover:text-black dark:text-white/50 dark:group-hover:text-white">{desc}</p>
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

        <h2 className="display mb-16 text-6xl font-semibold lg:text-8xl">
          Clarity over <span className="text-cobalt">ceremony.</span>
        </h2>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Frame the right problem', 'Align on the customer behavior, business constraint, and decision we need to influence before exploring solutions.'],
            ['Make strategy tangible', 'Use prototypes, narratives, and clear principles to turn abstract direction into something teams can debate and build.'],
            ['Learn at the speed of risk', 'Match research and experimentation to uncertainty. Test the most consequential assumptions first.'],
            ['Scale the learning', 'Build systems, rituals, and shared language so each launch improves the organization, not just the product.']
          ].map(([t,d],i) => (
            <div key={t} className="rounded-3xl border border-black/10 bg-white p-8 dark:border-white/10 dark:bg-white/[.04]">
              <span className="font-mono text-xs text-black/35 dark:text-white/35">0{i+1}</span>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-.03em]">{t}</h3>
              <p className="mt-4 text-black/55 dark:text-white/50">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Resume() {
  return (
    <section id="resume" className="bg-white py-24 text-ink dark:bg-[#15181f] dark:text-white lg:py-36">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-10">
        <div className="flex flex-col justify-between gap-8 border-b border-black/15 pb-12 dark:border-white/15 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-black/45 dark:text-white/45">Experience</p>
            <h2 className="display text-6xl font-semibold lg:text-8xl">15+ years.<br/>Still curious.</h2>
          </div>
        <a
  href="/SukmoonChang-Principal-Product-Designer-Resume.pdf"
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
            <div key={item.years} className="grid gap-4 py-9 md:grid-cols-[.25fr_.55fr_1fr]">
              <span className="font-mono text-xs text-black/40 dark:text-white/40">{item.years}</span>
              <div>
                <h3 className="font-bold">{item.role}</h3>
                <p className="mt-1 text-sm text-black/45 dark:text-white/45">{item.company}</p>
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

function Testimonials() {
  return (
    <section className="bg-sun py-24 text-ink lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5 text-center lg:px-10">
        <p className="mb-10 text-xs font-bold uppercase tracking-[.18em]">Design leadership</p>
        <blockquote className="text-3xl font-semibold leading-[1.15] tracking-[-.04em] lg:text-6xl">
          “I lead design by creating clarity: for customers, for teams, and for the business decisions behind the product.”
        </blockquote>
        <div className="mt-10 text-sm">
          <b>Sukmoon Chang</b><br/>
          <span className="text-black/50">Senior Product Design Manager</span>
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
    <section id="contact" className="bg-cobalt py-24 text-white lg:py-36">
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
    <footer className="bg-ink px-5 py-8 text-white lg:px-10">
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

  const currentCase = caseStudies.find(item => `/${item.id}` === path)

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
      <Metrics/>
      <Work navigate={navigate}/>
      <About/>
      <Process/>
      <Resume/>
      <Testimonials/>
      <Contact/>
      <Footer navigate={navigate}/>
    </div>
  )
}
