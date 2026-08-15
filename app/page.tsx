import Image from "next/image";
import AutoplayVideo from "./autoplay-video";
import PortfolioGrid from "./portfolio-grid";
import VideoRail from "./video-rail";
import { portraits, publicVideos } from "./media-register";

const heroPortrait = portraits.find((portrait) => portrait.id === "hero-fuchsia-close")!;
const aboutPortrait = portraits.find((portrait) => portrait.id === "nursing-context")!;
const editorialPortrait = portraits.find((portrait) => portrait.id === "fuchsia-editorial-full")!;
const featuredWork = publicVideos.find((video) => video.id === "creator-introduction")!;

const productPhotos = [
  {
    src: "/media/photography/victorias-secret-fragrance-flatlay.jpg",
    alt: "Victoria's Secret Love Spell and Candied Berry Wonderland fragrance mists styled with pastel flowers.",
    eyebrow: "Fragrance flat lay",
    title: "Colour, composition and product detail.",
  },
  {
    src: "/media/photography/beauty-essentials-flatlay.jpg",
    alt: "Burt's Bees skincare, nail products and accessories arranged in a soft pastel flat lay.",
    eyebrow: "Beauty flat lay",
    title: "Everyday products, styled with care.",
  },
];

const offerings = [
  ["On-camera video", "Direct, comfortable delivery for product introductions, reviews, testimonials, FAQs, demonstrations and founder-style messages."],
  ["Product demonstrations and tutorials", "Clear footage that shows how the product works, what the customer receives and how it fits into use."],
  ["Voiceover and routine-led stories", "Short-form videos built around a recognisable occasion, habit, problem or part of the day, supported by purposeful B-roll."],
  ["Product detail and sensory video", "Close shots of packaging, texture, application, movement, sound and finish for ads, product pages and social posts."],
  ["Unboxings and first impressions", "The arrival, packaging, setup and first use of the product, filmed with enough detail to answer the customer’s immediate questions."],
  ["Product and lifestyle photography", "Clean product images, in-use photographs and everyday lifestyle scenes for social media, websites, email and retail pages."],
  ["Creative variations", "Alternate hooks, calls to action, openings, lengths and delivery styles for brands testing several versions of an idea."],
  ["Raw footage", "Organised clips for teams that want to control the final edit or build more assets from the original shoot."],
];

const brandFits = [
  ["Beauty and personal care", "Skincare, haircare, body care, fragrance, cosmetics, bath products, grooming tools and beauty devices."],
  ["Health and wellness", "Wellness products, personal care, fitness and recovery, health apps, sleep products and everyday wellbeing."],
  ["Home and household", "Cleaning products, kitchenware, storage, organisation, home fragrance, décor, appliances and smart-home products."],
  ["Food and beverage", "Packaged food, drinks, meal services, kitchen products, recipes, tastings and everyday preparation."],
  ["Work and everyday mobility", "Scrubs, footwear, bags, lunchware, commuter products, productivity tools and products made for people who spend long hours on their feet."],
  ["Technology, apps and services", "Consumer apps, digital services, subscriptions, devices and platforms that need a patient, easy-to-follow walkthrough."],
  ["Family and motherhood", "Household purchases, family routines, gifting, educational products and services used by parents and working families."],
  ["Travel, hospitality, fashion and accessories", "Hotels, local experiences, luggage, travel accessories, booking services, everyday clothing, workwear, footwear, jewellery, eyewear and bags."],
];

const process = [
  ["Send the brief", "Tell me about the product, the audience, the objective, the platform, the deliverables and the deadline. References and mandatory talking points are welcome."],
  ["Agree the creative route", "I will confirm fit, propose the content approach and quote for the agreed scope. The quote will account for production, editing, variations, revisions, turnaround and usage."],
  ["Create", "Once the product and brief are in hand, I will script or prepare the shot plan, film the content and edit the agreed assets."],
  ["Review and deliver", "You will receive a review version, the revisions included in the agreement and organised final files in the formats specified."],
];

const faqs = [
  ["Can you follow a supplied script or brief?", "Yes. I can execute an approved script and shot list, or develop the concept and script from your campaign objective."],
  ["Do you create content for paid advertising?", "Yes. Paid usage is quoted according to the platform, duration and scope of the licence."],
  ["Can you provide raw footage or several versions?", "Yes. Raw clips, alternate hooks, calls to action, lengths and edits can be included in the project scope."],
  ["Do you post the content on your own social accounts?", "UGC production is quoted for delivery to the brand. Posting, creator licensing and account-based ad access can be discussed separately where appropriate."],
  ["Where are you based?", "Ontario, Canada. Product shipping and location requirements can be discussed when you send the brief."],
  ["How do I get a quote?", "Email the product, campaign objective, deliverables, deadline and intended usage to youragilenurse@gmail.com. I will reply with any questions needed to price the work accurately."],
];

const email = "youragilenurse@gmail.com";
const instagram = "https://www.instagram.com/youragilenurse";
const tiktok = "https://www.tiktok.com/@youragilenurse?_r=1&_t=ZS-98oSoTNYOIC";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="site-header" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Monisola Adejo home"><span>MONISOLA ADEJO</span><small>UGC Creator | Nurse | Mom</small></a>
        <nav className="nav-links" aria-label="Page sections">
          <a href="#work">Work</a><a href="#create">What I Create</a><a href="#about">About</a><a href="#process">How It Works</a><a href="#contact">Contact</a>
        </nav>
        <details className="mobile-menu">
          <summary>Menu <span aria-hidden="true">+</span></summary>
          <nav aria-label="Mobile page sections"><a href="#work">Work</a><a href="#create">What I Create</a><a href="#about">About</a><a href="#process">How It Works</a><a href="#contact">Contact</a></nav>
        </details>
        <a className="nav-cta" href={`mailto:${email}?subject=UGC%20brief%20for%20Monisola%20Adejo`}>
          Send a Brief
          <svg className="nav-cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
          </svg>
        </a>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-glow hero-glow-one" aria-hidden="true" /><div className="hero-glow hero-glow-two" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">UGC creator <span>•</span> Ontario, Canada</p>
            <h1 id="hero-title">Give people a clear reason to care about <em>your product.</em></h1>
            <p className="hero-intro">I’m Monisola Adejo, an Ontario-based UGC creator. I create personable short-form video and product photography for brands that want customers to see the product clearly, understand its value and picture it in their own lives.</p>
            <div className="hero-actions"><a className="button button-sun" href="#pitch">Watch My Pitch <span aria-hidden="true">↓</span></a><a className="text-action" href={`mailto:${email}?subject=UGC%20brief%20for%20Monisola%20Adejo`}>Send a Brief <span aria-hidden="true">↗</span></a></div>
            <div className="hero-credentials"><span>Ontario, Canada</span><span>On-camera, voiceover and hands-only content</span><span>Paid and organic creative</span></div>
          </div>
          <figure className="hero-media">
            <div className="hero-image-wrap"><Image src={heroPortrait.src} alt={heroPortrait.alt} width={900} height={1200} priority unoptimized sizes="(max-width: 760px) 90vw, (max-width: 1100px) 43vw, 570px" /></div>
            <figcaption><span>MONISOLA ADEJO</span><span>On camera. On brief. In the details.</span></figcaption>
            <p className="hero-media-note">A capable adult presence for brands that value clarity.</p>
          </figure>
        </section>

        <div className="trust-strip" aria-label="Services"><span>On-camera video</span><b>•</b><span>Product photography</span><b>•</b><span>Paid &amp; organic creative</span><b>•</b><span>Ontario, Canada</span></div>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading"><p className="eyebrow">Start here</p><h2 id="work-title">Meet the creator behind the <em>work.</em></h2><p className="section-lede">My direct-to-camera pitch gives brands a quick sense of my on-camera presence, communication style and approach to a brief.</p></div>
          <article className="featured-work" id="pitch">
            <div className="featured-video" id="featured-video"><AutoplayVideo controls src={featuredWork.src} poster={featuredWork.poster} label="Monisola's creator pitch video" /><span className="film-tag">My pitch</span><span className="silent-tag">Tap for sound</span></div>
            <div className="featured-copy"><p className="eyebrow">Creator introduction</p><h3>Hi, I’m <em>Monisola.</em></h3><p>A direct-to-camera introduction that shows the personable, clear and confident presence I bring to brand content.</p><dl><div><dt>Format</dt><dd>Vertical video</dd></div><div><dt>Run time</dt><dd>28.60 seconds</dd></div><div><dt>Creative focus</dt><dd>On-camera pitch and creator presence</dd></div></dl><a className="inline-link" href="#featured-video">Play my pitch <span aria-hidden="true">↓</span></a></div>
          </article>
          <PortfolioGrid videos={publicVideos.filter((video) => video.id !== featuredWork.id)} />
          <section className="photography-showcase" aria-labelledby="photography-title">
            <div className="photography-heading"><p className="eyebrow">Product photography</p><h3 id="photography-title">Styled product moments with a point of <em>view.</em></h3><p>Thoughtful flat lays with colour, texture and a clear focus on what makes the product feel special.</p></div>
            <div className="photography-grid">{productPhotos.map((photo, index) => <figure className={`product-photo product-photo-${index + 1}`} key={photo.src}><Image src={photo.src} alt={photo.alt} width={1400} height={1800} unoptimized sizes="(max-width: 640px) 100vw, 50vw" /><figcaption><span>{photo.eyebrow}</span><strong>{photo.title}</strong></figcaption></figure>)}</div>
          </section>
        </section>

        <section className="visual-editorial" aria-labelledby="visual-editorial-title">
          <div className="visual-editorial-copy">
            <p className="eyebrow">More to explore</p>
            <h2 id="visual-editorial-title">Every brief gets more than a talking <em>point.</em></h2>
            <p>It gets the texture, the movement, the product moment and the real-life context that makes someone pause.</p>
          </div>
          <VideoRail items={publicVideos.map((video) => ({ id: video.id, src: video.src, poster: video.poster, title: video.title, label: video.creativeFunction, captions: video.id === "makeup-routine" ? "/media/captions/makeup-routine.vtt" : undefined }))} />
        </section>

        <section className="create-section" id="create" aria-labelledby="create-title">
          <div className="create-intro"><p className="eyebrow eyebrow-light">What I create</p><h2 id="create-title">Content made for the way your brand needs to <em>use it.</em></h2><p>You may arrive with a finished script, a rough idea or a product that needs a stronger angle. I can work from your creative direction or develop the concept, hook, script and shot plan with you.</p><a className="button button-light" href={`mailto:${email}?subject=UGC%20deliverables%20enquiry`}>Ask About Deliverables <span aria-hidden="true">↗</span></a></div>
          <div className="offering-grid">{offerings.map(([title, description], index) => <article className="offering" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        </section>

        <section className="brand-fit" aria-labelledby="brand-fit-title"><div className="brand-fit-heading"><p className="eyebrow">Brand fit</p><h2 id="brand-fit-title">A wider range of brands belongs in this <em>portfolio.</em></h2><p>My work suits products and services that benefit from clear explanation, a believable setting and a grounded presence—across household, lifestyle, beauty, wellness and consumer audiences.</p></div><div className="brand-grid">{brandFits.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div><p className="brand-fit-close">Have something else in mind? <a href={`mailto:${email}?subject=UGC%20brief%20for%20Monisola%20Adejo`}>Send the brief.</a> If I am right for the customer and the message, I will tell you how I would approach it.</p></section>

        <section className="about-section" id="about" aria-labelledby="about-title"><div className="about-photo"><Image src={aboutPortrait.src} alt={aboutPortrait.alt} width={740} height={940} unoptimized sizes="(max-width: 760px) 100vw, 45vw" /><p>Clear explanation, real presence, a thoughtful eye.</p></div><div className="about-copy"><p className="eyebrow">About Monisola</p><h2 id="about-title">Hello, I’m <em>Monisola.</em></h2><p>I am a nurse, a mom of 3 boys, a PMP- and Scrum-certified professional, and a creator based in Ontario, Canada. My working life has taught me to listen closely, explain things in plain language and keep track of details when several things are happening at once. Those habits are useful on a shoot and even more useful when a brand needs someone who can read a brief properly.</p><p>I am comfortable speaking on camera, demonstrating a process and taking the viewer through a product without forcing the performance. I pay attention to the questions a customer is likely to have, the details the camera needs to show and the pace at which the message becomes easy to follow.</p><a className="inline-link dark-link" href={tiktok} target="_blank" rel="noreferrer">See Monisola on TikTok <span aria-hidden="true">↗</span></a></div></section>

        <section className="perspective-section" aria-labelledby="perspective-title"><div className="perspective-copy"><p className="eyebrow eyebrow-light">Why this perspective is commercially useful</p><h2 id="perspective-title">Your customer can recognise themselves <em>here.</em></h2><p>Monisola can appear in a campaign as a professional, a mom of 3 boys, a beauty customer, a traveller, a homeowner, a careful shopper or simply someone trying something and giving it a fair assessment. These are familiar positions from which many buying decisions are made.</p><p>Her nursing background supports calm explanation, attention to instructions and confidence with detailed products. Being a mom gives her an immediate understanding of shared routines, household choices and limited time. Her PMP and Scrum training add a practical advantage behind the camera: organised communication, respect for the brief and a sensible response to feedback.</p><p>The result is a creator who can handle a polished beauty close-up, a household demonstration, an app walkthrough, a food preparation sequence or a direct explanation with the same steady presence.</p></div><div className="perspective-photo"><Image src={editorialPortrait.src} alt={editorialPortrait.alt} width={850} height={1100} unoptimized sizes="(max-width: 760px) 88vw, 38vw" /><span>ON CAMERA / ON BRIEF / ON POINT</span></div></section>

        <section className="process-section" id="process" aria-labelledby="process-title"><div className="process-heading"><p className="eyebrow">How it works</p><h2 id="process-title">A clear process from brief to <em>delivery.</em></h2></div><ol className="process-list">{process.map(([title, description], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol><p className="process-note">Need several concepts, raw footage or alternate hooks? Include them in the brief so the production can be planned efficiently.</p></section>

        <section className="rates-section" aria-labelledby="rates-title"><p className="eyebrow eyebrow-light">Rates and usage</p><h2 id="rates-title">Request a quote for the work you actually <em>need.</em></h2><p>Projects are priced according to the deliverables, filming requirements, editing, creative development, turnaround and the way the content will be used. Organic use, paid media, raw footage, extended licensing, creator account access and additional versions should be agreed before production begins.</p><a className="button button-sun" href={`mailto:${email}?subject=UGC%20rate%20request`}>Request Rates <span aria-hidden="true">↗</span></a></section>

        <section className="faq-section" aria-labelledby="faq-title"><div className="faq-heading"><p className="eyebrow">Frequently asked questions</p><h2 id="faq-title">Everything you need to know before you <em>brief.</em></h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title"><p className="eyebrow">Let’s make something clear</p><h2 id="contact-title">Tell me what you need the content to <em>do.</em></h2><p className="contact-intro">Send the product, the customer you need to reach, where the content will run and when you need it. I will respond with my fit for the project, the creative route I recommend and a quote.</p><div className="contact-actions"><a className="contact-link" href={`mailto:${email}?subject=UGC%20brief%20for%20Monisola%20Adejo`}>Send the Brief <span aria-hidden="true">↗</span></a><a className="contact-secondary" href={instagram} target="_blank" rel="noreferrer">Instagram DM <span aria-hidden="true">↗</span></a></div><div className="contact-details"><a href={`mailto:${email}`}>{email}</a><a href={instagram} target="_blank" rel="noreferrer">@youragilenurse</a><a href={tiktok} target="_blank" rel="noreferrer">@youragilenurse</a></div></section>
      </main>
      <footer className="site-footer"><a className="wordmark" href="#top"><span>MONISOLA ADEJO</span><small>UGC Creator | Nurse | Mom</small></a><p>UGC creator based in Ontario, Canada</p><p>© Monisola Adejo</p></footer>
    </>
  );
}
