export interface CityData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroH1: string;
  heroSubtitle: string;
  intro: string;
  whyUs: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
  extraKeywords: string[];
}

export const CITIES: CityData[] = [
  {
    slug: "woodland-hills",
    name: "Woodland Hills",
    metaTitle: "Gate & Garage Door Repair Woodland Hills CA | Real Gate & Garage Door",
    metaDescription: "Expert gate and garage door repair in Woodland Hills, CA. Same-day service, upfront pricing, licensed. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Woodland Hills, CA",
    heroSubtitle: "Woodland Hills' trusted local repair specialists — same-day service, upfront pricing, licensed and insured.",
    extraKeywords: ["garage door repair Woodland Hills CA", "gate installation Woodland Hills"],
    intro: `Woodland Hills homeowners know the value of a well-maintained property — and a functioning gate or garage door is central to that. Tucked into the western end of the with its tree-lined streets, estate-style homes, and hillside properties, Woodland Hills has a strong demand for both automatic gate repair and garage door service. Real Gate & Garage Door has been serving Woodland Hills residents for over a decade.

The larger properties in Woodland Hills — particularly near Ventura Boulevard and the hillside communities above it — often feature custom driveway gates and double-car garages. These systems see daily use and require skilled maintenance. Our technicians are familiar with the common brands and systems installed in Woodland Hills neighborhoods and can usually diagnose and repair your door or gate in a single visit.

We cover all of Woodland Hills including the neighborhoods near Calabasas border, Warner Center, the Mulholland corridor, and everything in between. Same-day service is available for most repair calls. Emergency service is available 24/7.`,
    whyUs: [
      { title: "Local Knowledge", desc: "We know the gate and garage door systems common in Woodland Hills neighborhoods and stock the right parts." },
      { title: "Fast Response", desc: "Most Woodland Hills repair calls receive same-day service. Emergency calls get 1–2 hour response." },
      { title: "Upfront Pricing", desc: "No surprises. You see the exact price before we start — guaranteed." },
    ],
    faq: [
      { q: "How quickly can you reach Woodland Hills for a repair?", a: "Same-day service is standard in Woodland Hills. For emergencies, we typically arrive within 1–2 hours." },
      { q: "Do you service gated communities in Woodland Hills?", a: "Yes. We work with HOAs, property managers, and individual homeowners in Woodland Hills gated communities." },
      { q: "What are common garage door issues in Woodland Hills?", a: "Spring breakage from temperature swings, opener failure on older units, and off-track doors from hillside property vibration are the most common issues we see." },
    ],
  },
  {
    slug: "sherman-oaks",
    name: "Sherman Oaks",
    metaTitle: "Gate & Garage Door Repair Sherman Oaks CA | Real Gate & Garage Door",
    metaDescription: "Same-day gate and garage door repair in Sherman Oaks, CA. Licensed technicians, upfront pricing. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Sherman Oaks, CA",
    heroSubtitle: "Serving Sherman Oaks homeowners with honest, same-day gate and garage door repair.",
    extraKeywords: ["garage door repair Sherman Oaks CA", "gate repair Sherman Oaks"],
    intro: `Sherman Oaks is one of the Our local most established neighborhoods — a dense mix of mid-century homes, modern renovations, and tree-lined streets that run from the flats up into the hillside communities above Mulholland. Gate and garage door systems here range from simple single-car residential openers to sophisticated iron driveway gates on hillside properties. Real Gate & Garage Door serves all of it.

Sherman Oaks residents tend to be busy professionals and families who need their home systems to work reliably. When a spring breaks or a gate motor fails, they want fast, honest service — not a runaround. Our Sherman Oaks customers know us for showing up on time, explaining exactly what's wrong before we touch anything, and pricing the work fairly.

We cover all of Sherman Oaks including the neighborhoods near Ventura Blvd, the hills above Mulholland, Van Nuys Blvd, and the Sepulveda area. Same-day service available Monday through Sunday.`,
    whyUs: [
      { title: "On-Time Service", desc: "We call before arriving and show up during the window we give you — not 4 hours later." },
      { title: "All Sherman Oaks Neighborhoods", desc: "Flatlands, hillside, near Ventura Blvd or the 405 — we cover all of Sherman Oaks." },
      { title: "Honest Diagnosis", desc: "We tell you what's wrong and what it costs. No upsells, no invented problems." },
    ],
    faq: [
      { q: "Do you serve the Sherman Oaks hillside area?", a: "Yes. We serve all Sherman Oaks neighborhoods including the hillside homes above Mulholland Drive." },
      { q: "Can you fix my garage door opener same day in Sherman Oaks?", a: "In most cases, yes. We carry the most common opener parts and can complete most opener repairs in a single visit." },
    ],
  },
  {
    slug: "encino",
    name: "Encino",
    metaTitle: "Gate & Garage Door Repair Encino CA | Real Gate & Garage Door",
    metaDescription: "Expert gate and garage door repair in Encino, CA. Automatic gates, spring repair, opener service — same day. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Encino, CA",
    heroSubtitle: "Encino's trusted gate and garage door specialists. Automatic gate repair, spring replacement, and more — same day.",
    extraKeywords: ["garage door repair Encino CA", "automatic gate installation Encino"],
    intro: `Encino is known for its upscale residential neighborhoods, tree-lined streets, and some of the Our local most beautiful estates. Properties here frequently feature custom automatic driveway gates, iron gate systems, and multi-car garages with high-end openers. Real Gate & Garage Door has been the area's go-to repair service for Encino homeowners who demand quality work.

Automatic gate repair is one of our most common service calls in Encino. The custom iron and aluminum gates common on Encino estate properties require skilled technicians who understand gate operators at a deeper level than a basic handyman. Our techs are trained and certified on all major gate operator systems.

Garage door repair in Encino covers everything from simple spring replacements on older ranch homes to complex commercial opener service on larger properties. We're familiar with the common garage door systems in Encino neighborhoods and carry the right parts to complete most repairs same-day.

We serve all of Encino including Encino Hills, the Encino Reservoir area, and neighborhoods along Ventura and Balboa Boulevards.`,
    whyUs: [
      { title: "Estate Property Experience", desc: "We're familiar with the custom gate and garage systems found on Encino's larger properties." },
      { title: "Automatic Gate Specialists", desc: "Encino's iron and aluminum driveway gates are our specialty — all brands, all styles." },
      { title: "Same-Day Response", desc: "Most Encino repair calls scheduled and completed the same day." },
    ],
    faq: [
      { q: "Do you service LiftMaster gate operators in Encino?", a: "Yes. LiftMaster is one of the most common gate operator brands in Encino and we repair and replace them routinely." },
      { q: "How soon can you reach Encino for an emergency gate repair?", a: "For Encino emergency calls, our target response time is 1–2 hours." },
    ],
  },
  {
    slug: "calabasas",
    name: "Calabasas",
    metaTitle: "Gate & Garage Door Repair Calabasas CA | Real Gate & Garage Door",
    metaDescription: "Same-day gate and garage door repair in Calabasas, CA. Gated community specialists, licensed, insured. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Calabasas, CA",
    heroSubtitle: "Serving Calabasas gated communities and private estates with expert gate and garage door repair.",
    extraKeywords: ["garage door repair Calabasas CA", "driveway gate installation Calabasas", "gate repair Calabasas"],
    intro: `Calabasas is one of the most gate-dense communities — from the community entrance gates of The Oaks and Mulholland Estates to the private driveway gates of individual homes. Gate repair is a high priority here, and Real Gate & Garage Door has extensive experience working with Calabasas gated communities, HOAs, and private property owners.

We work with property management companies and HOA maintenance teams throughout Calabasas to keep community gate systems running. We also serve individual homeowners who need their private driveway gate or garage door repaired quickly and correctly.

The gate systems in Calabasas tend to be higher-end — Viking, LiftMaster Elite, and FAAC operators are common. Our technicians are factory-trained on these systems and carry the parts to service them properly.

We cover all of Calabasas including The Oaks at Calabasas, Hidden Hills adjacent properties, Mulholland Estates, The Calabasas Highlands, and all other neighborhoods.`,
    whyUs: [
      { title: "Gated Community Specialists", desc: "We work with Calabasas HOAs and property managers — familiar with community gate requirements." },
      { title: "Premium Operator Service", desc: "Viking, LiftMaster Elite, FAAC — we service the premium brands common in Calabasas." },
      { title: "Discreet & Professional", desc: "We understand the expectations of Calabasas homeowners and provide service accordingly." },
    ],
    faq: [
      { q: "Do you service HOA gates in Calabasas?", a: "Yes. We work with multiple Calabasas HOAs and can coordinate service through your property management company." },
      { q: "Can you repair Viking gate operators in Calabasas?", a: "Absolutely. Viking is a common brand in Calabasas properties and we service it routinely." },
    ],
  },
  {
    slug: "tarzana",
    name: "Tarzana",
    metaTitle: "Gate & Garage Door Repair Tarzana CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Tarzana, CA. Same-day service, licensed technicians, upfront pricing. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Tarzana, CA",
    heroSubtitle: "Tarzana residents trust us for fast, honest gate and garage door repair — same day, every day.",
    extraKeywords: ["garage door repair Tarzana CA", "gate repair Tarzana"],
    intro: `Tarzana sits between Woodland Hills and Encino in the heart of the, featuring a mix of suburban homes, cul-de-sacs, and some hillside properties. It's a community where residents are active and homes are well-maintained. Gate and garage door issues here range from simple opener malfunctions on older ranch homes to full gate system failures on newer residential builds.

Real Gate & Garage Door serves Tarzana with the same same-day service and upfront pricing we provide across our service area. Our Tarzana customers appreciate that we call ahead, arrive on time, and fix the problem without unnecessary upselling.

We cover all of Tarzana including the areas near Reseda Boulevard, Ventura Boulevard, and the hillside streets above Calvert Street. Same-day service is available throughout Tarzana seven days a week.`,
    whyUs: [
      { title: "Same-Day Service", desc: "We cover Tarzana seven days a week with same-day appointments for most repair calls." },
      { title: "No Upselling", desc: "We fix what's broken and tell you what it costs. We don't invent problems." },
      { title: "Locally Trusted", desc: "Years of service in our service area — Tarzana residents have come to rely on our team." },
    ],
    faq: [
      { q: "How fast can you get to Tarzana for a repair?", a: "Same-day service is standard. Emergency calls receive 1–2 hour response in Tarzana." },
      { q: "Do you repair all garage door opener brands in Tarzana?", a: "Yes — LiftMaster, Genie, Chamberlain, Craftsman, and all other major brands." },
    ],
  },
  {
    slug: "chatsworth",
    name: "Chatsworth",
    metaTitle: "Gate & Garage Door Repair Chatsworth CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Chatsworth, CA. Spring repair, opener service, gate motors — same day. (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Chatsworth, CA",
    heroSubtitle: "Chatsworth's local gate and garage door repair experts — fast response, fair prices, licensed.",
    extraKeywords: ["garage door repair Chatsworth CA", "garage door spring repair Chatsworth"],
    intro: `Chatsworth is a large, spread-out community at the western edge of the, known for its equestrian properties, ranch-style homes, large lots, and the iconic rock formations of the Santa Susana Pass. Gate systems here often serve larger properties with long driveways, equestrian access gates, and security gates for ranches and acreage.

Real Gate & Garage Door serves Chatsworth with a deep understanding of the unique gate and garage door requirements of larger properties. Larger driveways mean larger gates, heavier operators, and more complex access control needs. Our commercial-grade service capabilities translate well to the larger residential properties common in Chatsworth.

We cover all of Chatsworth including the area near the 118 Freeway, Box Canyon, Stoney Point, and the equestrian neighborhoods near Devonshire Street. Same-day service available throughout Chatsworth.`,
    whyUs: [
      { title: "Large Property Experience", desc: "We understand the unique gate requirements of Chatsworth's larger lots and equestrian properties." },
      { title: "Heavy-Duty Gates", desc: "Larger, heavier gates require commercial-grade operators — we have them." },
      { title: "Same-Day Coverage", desc: "Same-day service available throughout Chatsworth, including remote areas." },
    ],
    faq: [
      { q: "Do you service equestrian access gates in Chatsworth?", a: "Yes. We work with all types of large property gates including equestrian access gates, sliding ranch gates, and swing arm gates." },
      { q: "How soon can you reach Chatsworth for a repair?", a: "Most Chatsworth calls can be scheduled same-day. Emergency response time is 1–3 hours depending on location." },
    ],
  },
  {
    slug: "van-nuys",
    name: "Van Nuys",
    metaTitle: "Gate & Garage Door Repair Van Nuys CA | Real Gate & Garage Door",
    metaDescription: "Affordable gate and garage door repair in Van Nuys, CA. Same-day service, upfront pricing, all brands. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Van Nuys, CA",
    heroSubtitle: "Van Nuys residents count on us for fast, honest garage door and gate repair — at fair prices.",
    extraKeywords: ["garage door repair Van Nuys CA", "garage door service Van Nuys", "gate repair Van Nuys"],
    intro: `Van Nuys is one of the Our local most populated communities — a mix of residential neighborhoods, small businesses, and apartment complexes that stretch across the central Valley. Gate and garage door service here covers everything from simple residential opener repairs to commercial roll-up door service for the area's many small businesses.

Real Gate & Garage Door has been serving Van Nuys for years. We understand the community and price our services fairly. Whether you need a broken spring replaced on your Sepulveda apartment's parking gate or your personal garage door fixed before work on a Monday morning, we get there fast and fix it right.

We cover all of Van Nuys including neighborhoods near Van Nuys Boulevard, the 405 corridor, Sherman Way, and Vanowen Street. Same-day service seven days a week.`,
    whyUs: [
      { title: "Fair Pricing", desc: "Competitive, transparent pricing for Van Nuys homeowners and businesses." },
      { title: "Residential & Commercial", desc: "From apartment parking gates to single-family garage doors — we serve Van Nuys properties of all types." },
      { title: "Seven-Day Service", desc: "Same-day service available Monday through Sunday throughout Van Nuys." },
    ],
    faq: [
      { q: "Do you service commercial properties in Van Nuys?", a: "Yes. We repair commercial garage doors and gates for Van Nuys businesses, warehouses, and auto shops." },
      { q: "What's your response time in Van Nuys?", a: "Same-day service for most calls. Emergency response within 1–2 hours." },
    ],
  },
  {
    slug: "reseda",
    name: "Reseda",
    metaTitle: "Gate & Garage Door Repair Reseda CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Reseda, CA. Same-day service, all brands, licensed & insured. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Reseda, CA",
    heroSubtitle: "Honest, fast gate and garage door repair in Reseda — same-day service you can count on.",
    extraKeywords: ["garage door repair Reseda CA", "gate installation Reseda"],
    intro: `Reseda is a central community with a mix of residential streets, small businesses along Reseda Boulevard, and a growing number of homeowners investing in property improvements including gate and garage door upgrades. Real Gate & Garage Door serves Reseda with the same same-day service and fair pricing we provide across the Valley.

Whether your garage door spring broke on a Sunday morning or your driveway gate motor died during the week, we respond quickly to Reseda service calls. Our technicians are familiar with the common door and gate systems in Reseda neighborhoods and typically carry the parts needed to complete repairs in a single visit.

We cover all of Reseda including the areas near Victory Boulevard, Vanowen, Reseda Boulevard, and the residential streets throughout the community. Available seven days a week.`,
    whyUs: [
      { title: "Reseda Regulars", desc: "We have many returning customers in Reseda — a sign we do good work at fair prices." },
      { title: "Same-Day Scheduling", desc: "Same-day appointments available throughout Reseda Monday through Sunday." },
      { title: "Parts on the Truck", desc: "We stock common parts for the most common Reseda door and gate systems." },
    ],
    faq: [
      { q: "Can you come to Reseda on weekends?", a: "Yes. We offer same-day weekend service throughout Reseda." },
      { q: "What types of garage doors do you repair in Reseda?", a: "All types — sectional steel, wood, aluminum, one-piece tilt-up, and all opener brands." },
    ],
  },
  {
    slug: "northridge",
    name: "Northridge",
    metaTitle: "Gate & Garage Door Repair Northridge CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Northridge, CA. Same-day service, all brands, licensed. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Northridge, CA",
    heroSubtitle: "Northridge homeowners trust us for fast, reliable gate and garage door repair — any day of the week.",
    extraKeywords: ["garage door repair Northridge CA", "gate installation Northridge"],
    intro: `Northridge is a large, diverse community known for its residential neighborhoods, California State University Northridge campus, and commercial corridors along Reseda Boulevard and Nordhoff Street. Home types range from post-WWII ranch homes with simple torsion spring garage doors to newer construction with full automatic gate systems.

Real Gate & Garage Door serves Northridge homeowners, landlords, and businesses with fast, reliable gate and garage door repair. Our technicians are familiar with the range of systems common in Northridge — from older one-piece tilt-up doors on mid-century homes to modern sectional doors with smart openers on newer builds.

We cover all of Northridge including the CSUN area, neighborhoods near the 118 and 405 interchange, and residential streets throughout the community. Same-day service seven days a week.`,
    whyUs: [
      { title: "All Home Types", desc: "From mid-century ranch homes to modern builds — we service all garage door and gate types in Northridge." },
      { title: "Student & Rental Expertise", desc: "We service rental properties and landlords who need fast, reliable repairs." },
      { title: "Same-Day Seven Days", desc: "Available Monday through Sunday for same-day service throughout Northridge." },
    ],
    faq: [
      { q: "Do you service rental properties in Northridge?", a: "Yes. We work with landlords and property managers throughout Northridge for quick turnaround repairs." },
      { q: "What's your response time to Northridge?", a: "Same-day for standard repairs, 1–2 hours for emergency calls." },
    ],
  },
  {
    slug: "north-hollywood",
    name: "North Hollywood",
    metaTitle: "Gate & Garage Door Repair North Hollywood CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in North Hollywood, CA. Same-day service, all brands. Licensed & insured. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in North Hollywood, CA",
    heroSubtitle: "North Hollywood's trusted repair service for gates, garage doors, openers, and more.",
    extraKeywords: ["garage door repair North Hollywood CA", "gate repair North Hollywood"],
    intro: `North Hollywood — NoHo — is one of the Our local most vibrant and fast-changing communities, home to the NoHo Arts District, a booming residential market, and a diverse mix of single-family homes, condos, and multi-unit properties. Gate and garage door service here spans from simple opener repairs on bungalows to access control gate systems for apartment complexes.

Real Gate & Garage Door has been serving North Hollywood residents for years. The community's density and active renovation market mean we frequently work on older garage systems being upgraded as well as brand-new installations on recently renovated properties.

We cover all of North Hollywood including the NoHo Arts District, neighborhoods near the 170 Freeway, Lankershim Blvd, and Valley Village. Same-day service available seven days a week.`,
    whyUs: [
      { title: "Urban Property Experience", desc: "We understand the unique challenges of North Hollywood's dense residential environment." },
      { title: "Renovation-Ready", desc: "Upgrading an older property? We install modern gate and garage systems on vintage homes." },
      { title: "Same-Day Every Day", desc: "Seven-day service coverage throughout North Hollywood." },
    ],
    faq: [
      { q: "Do you service apartment building gates in North Hollywood?", a: "Yes. We service access control gates, parking garage doors, and security gates for North Hollywood apartment buildings and HOAs." },
      { q: "Can you replace a very old garage door in North Hollywood?", a: "Yes. We install new doors on all home types, including mid-century homes in North Hollywood where original tilt-up doors are often ready for replacement." },
    ],
  },
  {
    slug: "studio-city",
    name: "Studio City",
    metaTitle: "Gate & Garage Door Repair Studio City CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Studio City, CA. Same-day service, licensed, insured. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Studio City, CA",
    heroSubtitle: "Studio City's trusted local repair team for automatic gates, garage door springs, openers, and more.",
    extraKeywords: ["garage door repair Studio City CA", "gate repair Studio City"],
    intro: `Studio City sits at the base of the Hollywood Hills, with winding canyon roads, beautiful hillside homes, and some of the Our local most desirable real estate. Properties here often feature custom iron or aluminum driveway gates, high-end garage door systems, and sophisticated access control setups. Real Gate & Garage Door has served Studio City's demanding homeowners for years.

The hillside properties in Studio City present unique challenges: gates must handle slopes, curved driveways, and hillside soil movement that can affect post stability. Our technicians are experienced in the specific requirements of hillside gate installation and repair.

We cover all of Studio City including the hills above Mulholland, Fryman Road, Coldwater Canyon, Ventura Boulevard, and the flats near Woodbridge.`,
    whyUs: [
      { title: "Hillside Property Specialists", desc: "We understand the specific challenges of Studio City's hillside gates and garage doors." },
      { title: "Premium Systems", desc: "LiftMaster, Viking, custom iron gates — we service the premium systems common in Studio City." },
      { title: "Responsive & Discreet", desc: "We respect the privacy and schedule expectations of Studio City homeowners." },
    ],
    faq: [
      { q: "Do you repair hillside driveway gates in Studio City?", a: "Yes. Hillside gate repair is a specialty. We handle slope compensation, post repair, and special hardware requirements for gates on sloped driveways." },
      { q: "Can you repair an old iron gate in Studio City?", a: "Absolutely. Older iron gates in Studio City are often worth restoring rather than replacing — we do both." },
    ],
  },
  {
    slug: "burbank",
    name: "Burbank",
    metaTitle: "Gate & Garage Door Repair Burbank CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Burbank, CA. Same-day service, emergency available, licensed. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Burbank, CA",
    heroSubtitle: "Burbank homeowners and businesses rely on us for fast, professional gate and garage door repair.",
    extraKeywords: ["garage door repair Burbank CA", "gate repair Burbank", "emergency garage door repair Burbank"],
    intro: `Burbank is the eastern gateway to the — home to major entertainment studios, thriving businesses, and tight-knit residential neighborhoods that include everything from 1940s bungalows to newer construction near the Verdugo Hills. Gate and garage door service in Burbank runs the gamut from residential garage door spring repairs to commercial roll-up door service for the city's studios and production facilities.

Real Gate & Garage Door serves both residential and commercial Burbank clients. We understand the high expectations of Burbank homeowners who maintain their properties with care, and the urgency that commercial clients — where a broken loading bay door means downtime — place on fast repair.

We cover all of Burbank including Downtown Burbank, Magnolia Park, the Rancho area, Chandler Boulevard, and the Media District. Same-day service seven days a week, with 24/7 emergency response.`,
    whyUs: [
      { title: "Residential & Commercial", desc: "We serve Burbank homes and businesses — including studio facilities and commercial properties." },
      { title: "Emergency Ready", desc: "24/7 emergency service for Burbank clients who can't wait until morning." },
      { title: "Same-Day Standard", desc: "Same-day scheduling throughout Burbank, seven days a week." },
    ],
    faq: [
      { q: "Do you service commercial properties in Burbank?", a: "Yes. We repair commercial garage doors and gates for Burbank businesses, studios, and production facilities." },
      { q: "Do you offer 24/7 emergency repair in Burbank?", a: "Yes. Emergency service is available in Burbank around the clock. After-hours rates apply." },
    ],
  },
  {
    slug: "glendale",
    name: "Glendale",
    metaTitle: "Gate & Garage Door Repair Glendale CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Glendale, CA. Same-day service, all brands, licensed & insured. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Glendale, CA",
    heroSubtitle: "Glendale's trusted gate and garage door repair service — fast response, honest pricing, licensed.",
    extraKeywords: ["garage door repair Glendale CA", "garage door installation Glendale CA", "gate repair Glendale"],
    intro: `Glendale is a thriving city east of Burbank and north of Los Angeles, with diverse residential neighborhoods from the flats near Brand Boulevard to the hillside homes in Chevy Chase Canyon and the Verdugo Mountains. Gate and garage door service here covers a wide range of properties and systems — from simple residential garage door repairs to commercial loading dock service.

Real Gate & Garage Door extends its service area to cover Glendale. We're familiar with the common gate and garage door systems in Glendale neighborhoods and can provide same-day service to most Glendale addresses.

Whether you're in Montrose, Adams Hill, Sparr Heights, Verdugo Woodlands, or central Glendale, we're available for same-day gate and garage door repair. Contact us for a free estimate or emergency service.`,
    whyUs: [
      { title: "Glendale Coverage", desc: "We cover all Glendale neighborhoods from downtown to the Verdugo Hills." },
      { title: "All Systems", desc: "All garage door brands, all gate types — Glendale's diverse property landscape is our territory." },
      { title: "Fast & Fair", desc: "Same-day response with upfront pricing — Glendale residents get the same service as our core area." },
    ],
    faq: [
      { q: "Do you serve Glendale even though it's east of the?", a: "Yes. We extend our service area to include Glendale and Burbank as part of our greater coverage." },
      { q: "What types of garage doors do you repair in Glendale?", a: "All types — sectional, roll-up, tilt-up, carriage house. All brands. Residential and commercial." },
    ],
  },
  {
    slug: "canoga-park",
    name: "Canoga Park",
    metaTitle: "Gate & Garage Door Repair Canoga Park CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Canoga Park, CA. Same-day service, licensed, fair pricing. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Canoga Park, CA",
    heroSubtitle: "Canoga Park's local gate and garage door repair team — same-day service, honest pricing.",
    extraKeywords: ["garage door repair Canoga Park CA", "gate repair Canoga Park"],
    intro: `Canoga Park is a western community adjacent to Woodland Hills and West Hills, featuring residential streets with a strong sense of community, active homeowners, and a number of commercial properties along Sherman Way and Topanga Canyon Boulevard. Gate and garage door repair here is steady — both from homeowners maintaining aging systems and residents upgrading to new automatic gate and smart opener technology.

Real Gate & Garage Door serves Canoga Park with quick turnaround times and fair pricing. Our technicians know the area well and typically complete same-day service calls without difficulty.

We cover all of Canoga Park including the neighborhoods near the 101 Freeway, Sherman Way, and Topanga Canyon Boulevard, as well as the residential streets throughout the community. Same-day service available seven days a week.`,
    whyUs: [
      { title: "Community Familiarity", desc: "We've served Canoga Park for years and know the common systems in the neighborhood." },
      { title: "Fair Pricing", desc: "Competitive rates with transparent, upfront quotes before any work starts." },
      { title: "Same-Day Every Day", desc: "Seven-day coverage with same-day appointments throughout Canoga Park." },
    ],
    faq: [
      { q: "Can you repair my driveway gate in Canoga Park same day?", a: "In most cases, yes. We stock common gate repair parts and can complete most driveway gate repairs in a single visit." },
      { q: "What garage door opener brands do you repair in Canoga Park?", a: "All major brands: LiftMaster, Genie, Chamberlain, Craftsman, and others." },
    ],
  },

  // ── Extended LA Cities ──
  {
    slug: "los-angeles",
    name: "Los Angeles",
    metaTitle: "Gate & Garage Door Repair Los Angeles CA | Real Gate & Garage Door",
    metaDescription: "Expert gate and garage door repair in Los Angeles, CA. Same-day service, 24/7 emergency, licensed. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Los Angeles, CA",
    heroSubtitle: "Serving greater Los Angeles with same-day gate and garage door repair — honest pricing, licensed technicians.",
    extraKeywords: ["gate repair Los Angeles CA", "garage door repair Los Angeles", "automatic gate repair LA"],
    intro: `Los Angeles is home to some of the most diverse gate and garage door systems in the country — from mid-century homes in the flats with aging carriage doors to modern hillside estates with sophisticated automatic gate systems. Real Gate & Garage Door serves greater Los Angeles with the same level of care and speed we bring to every Valley call.

Whether your garage door spring snapped in Bel Air, your automatic gate motor stopped responding in Hancock Park, or you need emergency garage door service after an accident in West LA — we cover it all. Our technicians are familiar with the unique systems found across LA's varied neighborhoods and can diagnose most problems in a single visit.

We bring same-day service to residential and commercial customers throughout Los Angeles. Call us any time for a free estimate — we answer live 24/7.`,
    whyUs: [
      { title: "City-Wide Coverage", desc: "We serve all Los Angeles neighborhoods — from the Westside to East LA, Hollywood Hills to South Bay." },
      { title: "All Gate & Door Brands", desc: "Every major manufacturer: LiftMaster, Genie, Viking, DoorKing, Clopay, Wayne Dalton, and more." },
      { title: "24/7 Emergency Service", desc: "Gate or door won't close? We're available around the clock for emergency repairs across Los Angeles." },
    ],
    faq: [
      { q: "How quickly can you reach Los Angeles for a repair?", a: "We serve all of greater Los Angeles with same-day service. For emergencies, response time is typically 1–2 hours depending on your location." },
      { q: "Do you service commercial properties in Los Angeles?", a: "Yes. We handle commercial gate and garage door repairs for businesses, apartment complexes, and commercial facilities throughout LA." },
    ],
  },
  {
    slug: "beverly-hills",
    name: "Beverly Hills",
    metaTitle: "Gate & Garage Door Repair Beverly Hills CA | Real Gate & Garage Door",
    metaDescription: "Premium gate and garage door repair in Beverly Hills, CA. Automatic gates, iron gates, all brands. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Beverly Hills, CA",
    heroSubtitle: "Trusted gate repair specialists serving Beverly Hills estates and residences — same-day, discreet, guaranteed.",
    extraKeywords: ["gate repair Beverly Hills CA", "automatic gate Beverly Hills", "driveway gate Beverly Hills", "garage door repair Beverly Hills"],
    intro: `Beverly Hills properties are defined by their gates — grand iron entry gates, sophisticated automatic systems, and custom driveway installations that require expert service. Real Gate & Garage Door serves Beverly Hills homeowners and property managers with the professionalism and care that this community expects.

From the flats of Beverly Hills to the canyons above Sunset, we work on every type of gate and garage door system. Custom iron gate hinges, LiftMaster and Viking gate operators, intercom and keypad integration, spring replacement on oversized garage doors — we've seen and fixed it all throughout Beverly Hills.

Our technicians arrive in marked vehicles, dress professionally, and work cleanly. Beverly Hills customers receive the same upfront pricing and written warranty as every customer we serve. Same-day service is standard.`,
    whyUs: [
      { title: "Estate Gate Expertise", desc: "We specialize in the high-end iron gates and automatic systems common on Beverly Hills estates." },
      { title: "Discreet Professional Service", desc: "Marked vehicles, professional appearance, quiet efficient work — no disruption to your home." },
      { title: "All Systems Serviced", desc: "From Viking and LiftMaster operators to custom intercom and access control systems." },
    ],
    faq: [
      { q: "Do you repair custom iron entry gates in Beverly Hills?", a: "Yes. Custom iron gate repair — including hinges, posts, welds, and automation systems — is one of our specialties." },
      { q: "Can you service my gate operator same day in Beverly Hills?", a: "Yes. Most Beverly Hills gate operator repairs are completed same day with parts we carry on our trucks." },
    ],
  },
  {
    slug: "west-hollywood",
    name: "West Hollywood",
    metaTitle: "Gate & Garage Door Repair West Hollywood CA | Real Gate & Garage Door",
    metaDescription: "Same-day gate and garage door repair in West Hollywood, CA. Electric gates, openers, emergency service. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in West Hollywood, CA",
    heroSubtitle: "Fast, reliable gate and garage door repair in West Hollywood — same-day service, all brands.",
    extraKeywords: ["gate repair West Hollywood CA", "electric gate West Hollywood", "garage door repair WeHo"],
    intro: `West Hollywood's mix of mid-rise condos, bungalow courts, and hillside homes creates a wide variety of gate and garage door needs — from underground parking structures with commercial-grade doors to street-level electric gates on private residences. Real Gate & Garage Door serves all of it.

Electric gate repair is especially common in WeHo, where space is at a premium and security matters. We service sliding gates, swing gates, and all major gate operators including LiftMaster, All-O-Matic, and Viking. For garage doors, we handle everything from panel replacement and spring repair to complete opener upgrades.

Same-day service is available throughout West Hollywood seven days a week. For emergencies, we're available 24/7.`,
    whyUs: [
      { title: "Urban Property Specialists", desc: "We understand the unique gate and door systems in West Hollywood's dense residential landscape." },
      { title: "Electric Gate Experts", desc: "Sliding gates, swing gates, intercom systems — we fix every type of electric gate in WeHo." },
      { title: "Weekend Service Available", desc: "Same-day service available 7 days a week including weekends." },
    ],
    faq: [
      { q: "Do you repair electric gates in West Hollywood apartment buildings?", a: "Yes. We service electric gates on apartment buildings, condos, and commercial properties throughout West Hollywood." },
      { q: "How fast can you respond to an emergency gate repair in West Hollywood?", a: "For emergencies, we typically arrive within 1–2 hours anywhere in West Hollywood, 24 hours a day." },
    ],
  },
  {
    slug: "santa-monica",
    name: "Santa Monica",
    metaTitle: "Gate & Garage Door Repair Santa Monica CA | Real Gate & Garage Door",
    metaDescription: "Expert gate and garage door repair in Santa Monica, CA. Driveway gates, all openers, same-day service. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Santa Monica, CA",
    heroSubtitle: "Serving Santa Monica with same-day gate repair and garage door service — honest pricing, licensed technicians.",
    extraKeywords: ["gate repair Santa Monica CA", "driveway gate Santa Monica", "garage door repair Santa Monica"],
    intro: `Santa Monica's beachside neighborhoods — from the Palisades to the Sunset Park flats — are home to a wide range of properties with unique gate and garage door needs. Coastal properties deal with the effects of salt air on metal components, creating accelerated wear on gate hardware, spring systems, and opener mechanisms. Real Gate & Garage Door has the expertise to handle it all.

We serve Santa Monica homeowners for everything from simple opener repair to complete driveway gate installation. Our technicians understand the salt-air environment and recommend appropriate materials and maintenance schedules to extend the life of your systems.

Call us for same-day service anywhere in Santa Monica. We service both residential and commercial properties and are available 24/7 for emergencies.`,
    whyUs: [
      { title: "Coastal Property Experience", desc: "We understand the impact of coastal air on gate hardware and use materials suited to the Santa Monica environment." },
      { title: "Comprehensive Service", desc: "Gates, garage doors, openers, springs, cables — everything in a single visit when possible." },
      { title: "Free Estimates", desc: "We diagnose the problem and give you the full price before any work begins." },
    ],
    faq: [
      { q: "Can salt air damage my gate or garage door in Santa Monica?", a: "Yes. Coastal air accelerates rust and corrosion on springs, cables, and hardware. We recommend annual maintenance for Santa Monica properties." },
      { q: "Do you repair garage doors in Santa Monica same day?", a: "Yes. Most Santa Monica garage door repairs are completed same day, including spring replacement and opener repair." },
    ],
  },
  {
    slug: "malibu",
    name: "Malibu",
    metaTitle: "Gate & Garage Door Repair Malibu CA | Real Gate & Garage Door",
    metaDescription: "Estate gate and garage door repair in Malibu, CA. Automatic gates, all brands. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Malibu, CA",
    heroSubtitle: "Premium gate and garage door repair for Malibu estates — reliable, professional, same-day service.",
    extraKeywords: ["gate repair Malibu CA", "estate gate repair Malibu", "automatic gate Malibu"],
    intro: `Malibu's hillside estates, beachfront compounds, and canyon properties are home to some of the most elaborate gate systems in greater Los Angeles. Security gates on large estates, remote-operated driveway gates, and sophisticated access control systems are standard in Malibu. So is the challenge of maintaining metal components in a coastal, high-UV environment. Real Gate & Garage Door specializes in exactly this.

We service all major gate operators used in Malibu — including Viking, LiftMaster, DoorKing, and All-O-Matic — and handle everything from basic swing gate repairs to complex multi-gate access systems. For garage doors, we work on large residential doors, oversized carriage-style doors, and commercial overhead doors.

Our Malibu customers expect fast response and professional service, and that's what we deliver. Same-day appointments are available. Emergency service is available 24/7.`,
    whyUs: [
      { title: "Estate Gate Specialists", desc: "Large-format driveway gates, custom iron gates, multi-gate access systems — we service them all in Malibu." },
      { title: "Coastal Expertise", desc: "We know how coastal conditions affect your gate systems and recommend the right solutions." },
      { title: "24/7 Emergency Response", desc: "Gate stuck open or closed? We respond to emergencies in Malibu day and night." },
    ],
    faq: [
      { q: "How far is Malibu from your service area?", a: "We fully cover Malibu — from PCH to the canyon roads. No additional travel fees for Malibu service calls." },
      { q: "Can you repair Viking gate operators in Malibu?", a: "Yes. Viking is one of the most common gate operators in Malibu estates, and our technicians are trained and experienced with all Viking systems." },
    ],
  },
  {
    slug: "culver-city",
    name: "Culver City",
    metaTitle: "Gate & Garage Door Repair Culver City CA | Real Gate & Garage Door",
    metaDescription: "Same-day gate and garage door repair in Culver City, CA. All brands, licensed technicians. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Culver City, CA",
    heroSubtitle: "Serving Culver City homeowners and businesses with reliable gate and garage door repair — same-day service.",
    extraKeywords: ["gate repair Culver City CA", "garage door repair Culver City"],
    intro: `Culver City has transformed into one of LA's most vibrant neighborhoods, with a mix of residential streets, tech campuses, and commercial properties all requiring reliable gate and garage door service. Real Gate & Garage Door covers all of it — from the residential neighborhoods near Fox Hills to the commercial corridors near Sony Pictures.

We handle the full range of gate and garage door services in Culver City: spring replacement, opener repair, panel replacement, electric gate repair, and driveway gate installation. Our technicians are experienced with both residential and commercial systems, and we stock parts for all major brands.

Same-day service is standard for Culver City repair calls. Call or fill out our form for a free estimate.`,
    whyUs: [
      { title: "Residential & Commercial", desc: "We serve both homeowners and businesses in Culver City with the same level of care and professionalism." },
      { title: "All Major Brands", desc: "LiftMaster, Genie, Chamberlain, Viking, DoorKing — we work on everything." },
      { title: "Same-Day Service", desc: "Most Culver City repair calls are handled same day." },
    ],
    faq: [
      { q: "Do you repair garage doors at commercial properties in Culver City?", a: "Yes. We service commercial garage doors and gates at businesses, warehouses, and commercial facilities throughout Culver City." },
      { q: "Can you fix a broken garage door spring in Culver City today?", a: "In most cases, yes. Spring replacement is one of our most common services and we carry the right springs for most doors." },
    ],
  },
  {
    slug: "pasadena",
    name: "Pasadena",
    metaTitle: "Gate & Garage Door Repair Pasadena CA | Real Gate & Garage Door",
    metaDescription: "Expert gate and garage door repair in Pasadena, CA. Automatic gates, all brands, same-day service. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Pasadena, CA",
    heroSubtitle: "Trusted gate and garage door repair specialists serving Pasadena — same-day service, upfront pricing.",
    extraKeywords: ["gate repair Pasadena CA", "automatic gate repair Pasadena", "garage door repair Pasadena CA"],
    intro: `Pasadena's historic neighborhoods, craftsman bungalows, and estates in San Marino and Arcadia's borders create a diverse demand for gate and garage door services. Many Pasadena homes have vintage carriage-style doors that need careful attention, while the larger properties along Orange Grove and in the Arroyo Seco area often feature sophisticated automatic gate systems.

Real Gate & Garage Door serves all of Pasadena with the expertise to handle both the historic and the modern. We repair and restore carriage-style garage doors, service all major automatic gate operators, and handle everything from simple spring replacement to complete gate installation.

We cover all of Pasadena including San Pasqual, Bungalow Heaven, the Playhouse District, and every neighborhood in between. Same-day service is available most days.`,
    whyUs: [
      { title: "Historic Home Experience", desc: "We've worked on vintage garage door systems throughout Pasadena's historic neighborhoods with care and expertise." },
      { title: "All Pasadena Neighborhoods", desc: "From Old Town to the Arroyo Seco area, we cover all of Pasadena." },
      { title: "Written Warranty", desc: "All repair work is backed by our written warranty — no exceptions." },
    ],
    faq: [
      { q: "Can you repair a carriage-style garage door in Pasadena?", a: "Yes. Carriage doors are common in Pasadena's historic neighborhoods and we have extensive experience servicing and repairing them." },
      { q: "How quickly can you get to Pasadena for a repair?", a: "We offer same-day service to all of Pasadena. For emergency calls, we aim to arrive within 1–2 hours." },
    ],
  },
  {
    slug: "thousand-oaks",
    name: "Thousand Oaks",
    metaTitle: "Gate & Garage Door Repair Thousand Oaks CA | Real Gate & Garage Door",
    metaDescription: "Same-day gate and garage door repair in Thousand Oaks, CA. Licensed, insured, free estimates. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Thousand Oaks, CA",
    heroSubtitle: "Serving Thousand Oaks with professional gate and garage door repair — same-day response, honest pricing.",
    extraKeywords: ["gate repair Thousand Oaks CA", "automatic gate Thousand Oaks", "garage door repair Thousand Oaks"],
    intro: `Thousand Oaks residents value their privacy and security — which is why so many homes in this Conejo Valley community have automatic driveway gates and dependable garage door systems. Real Gate & Garage Door has been a trusted service provider throughout Thousand Oaks for years, handling everything from routine gate maintenance to emergency opener replacement.

The homes in Thousand Oaks range from tract homes near the 101 corridor to large custom estates in the hills above Westlake Village. We service all of them with the same professionalism and speed. Our team is familiar with the gate and garage door systems common throughout Thousand Oaks neighborhoods.

Same-day service is available in Thousand Oaks. We're also available 24/7 for emergencies.`,
    whyUs: [
      { title: "Conejo Valley Coverage", desc: "We serve all of Thousand Oaks including Westlake Village, Newbury Park, and the surrounding area." },
      { title: "Residential Specialists", desc: "Most Thousand Oaks calls are residential — we bring expertise suited to family homes and private estates." },
      { title: "Same-Day Service", desc: "We don't make you wait days. Same-day appointments available most days in Thousand Oaks." },
    ],
    faq: [
      { q: "Do you service Westlake Village near Thousand Oaks?", a: "Yes. We cover Westlake Village and all surrounding communities as part of our Thousand Oaks service area." },
      { q: "What's the most common garage door repair in Thousand Oaks?", a: "Spring replacement is the most common repair we perform in Thousand Oaks — torsion springs typically last 7–10 years and need replacement when they snap." },
    ],
  },
  {
    slug: "simi-valley",
    name: "Simi Valley",
    metaTitle: "Gate & Garage Door Repair Simi Valley CA | Real Gate & Garage Door",
    metaDescription: "Expert gate and garage door repair in Simi Valley, CA. Same-day service, all brands, 24/7 emergency. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Simi Valley, CA",
    heroSubtitle: "Same-day gate and garage door repair for Simi Valley homes and businesses — licensed, honest, reliable.",
    extraKeywords: ["gate repair Simi Valley CA", "garage door repair Simi Valley", "automatic gate Simi Valley"],
    intro: `Simi Valley's family-friendly communities and newer housing developments are home to a high concentration of modern garage door systems — often multiple-car garages with automatic openers that get daily use. When these systems break, Simi Valley homeowners need fast, local service they can trust. That's what Real Gate & Garage Door delivers.

We serve all of Simi Valley for garage door repair, spring replacement, opener service, and gate repair. Our technicians are stocked with parts for all major opener brands and can complete most repairs in a single visit.

Coverage extends throughout Simi Valley including Wood Ranch, Berylwood, Kadota Fig, and all neighborhoods. Same-day and emergency service available.`,
    whyUs: [
      { title: "All Simi Valley Neighborhoods", desc: "From Wood Ranch to the east end — we cover all of Simi Valley." },
      { title: "Parts on Every Truck", desc: "We carry springs, cables, and opener parts for all major brands so we can complete most repairs in one visit." },
      { title: "Family-Oriented Service", desc: "We treat Simi Valley homes like our own — clean, careful, and fully respectful of your property." },
    ],
    faq: [
      { q: "Can you fix my garage door opener in Simi Valley today?", a: "In most cases, yes. We carry parts for LiftMaster, Genie, Chamberlain, and other common brands and can complete opener repairs same day." },
      { q: "Do you offer 24/7 emergency service in Simi Valley?", a: "Yes. If your garage door is stuck open or you have a security concern, call us any time — we have technicians available 24/7." },
    ],
  },
  {
    slug: "silver-lake",
    name: "Silver Lake",
    metaTitle: "Gate & Garage Door Repair Silver Lake CA | Real Gate & Garage Door",
    metaDescription: "Same-day gate and garage door repair in Silver Lake, CA. Electric gates, all brands. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Silver Lake, CA",
    heroSubtitle: "Reliable gate and garage door repair serving Silver Lake — fast, honest, same-day service.",
    extraKeywords: ["gate repair Silver Lake CA", "electric gate Silver Lake", "garage door repair Silver Lake"],
    intro: `Silver Lake's hillside streets, courtyard apartments, and modern homes create a unique mix of gate and garage door needs. From electric driveway gates on steep canyon roads to vintage garage doors on 1950s homes, Real Gate & Garage Door handles it all with skill and speed.

The tight urban layout of Silver Lake means gates and garage doors get heavy use — and when they fail, they often block the only access to a property. We prioritize fast response to Silver Lake calls and offer same-day service for most repairs.

We cover all of Silver Lake including the reservoir area, Rowena, and the hillside communities off Glendale Boulevard.`,
    whyUs: [
      { title: "Urban Hill Property Experience", desc: "We're experienced with the gate and garage systems common on Silver Lake's steep, narrow properties." },
      { title: "Fast Response", desc: "We know a stuck gate or door in Silver Lake can block your only exit — we prioritize fast arrivals." },
      { title: "All Types Serviced", desc: "Electric gates, vintage doors, modern systems — nothing surprises our technicians." },
    ],
    faq: [
      { q: "Do you repair electric gates on steep driveways in Silver Lake?", a: "Yes. Steep driveway gate repair is common in Silver Lake and we have the experience and equipment to handle it." },
      { q: "How fast can you reach Silver Lake for an emergency?", a: "We aim for 1–2 hour response for emergencies in Silver Lake, 24 hours a day." },
    ],
  },
  {
    slug: "los-feliz",
    name: "Los Feliz",
    metaTitle: "Gate & Garage Door Repair Los Feliz CA | Real Gate & Garage Door",
    metaDescription: "Expert gate and garage door repair in Los Feliz, CA. Same-day service, all brands. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Los Feliz, CA",
    heroSubtitle: "Trusted gate and garage door specialists serving Los Feliz — same-day response, upfront pricing.",
    extraKeywords: ["gate repair Los Feliz CA", "electric gate Los Feliz", "garage door repair Los Feliz"],
    intro: `Los Feliz's stunning mix of Spanish Colonial estates, Craftsman homes, and modern renovations demand a gate and garage door service provider who can handle variety. From grand iron entry gates in the hills to compact carriage doors in the flats, Real Gate & Garage Door brings the expertise to service every system correctly.

Los Feliz hillside properties particularly benefit from professional gate maintenance — the steep terrain puts additional stress on gate mechanisms, and coastal breezes add humidity that accelerates metal corrosion. We factor all of this in when diagnosing and repairing Los Feliz gates and doors.

Same-day service available throughout Los Feliz. Emergency service available 24/7.`,
    whyUs: [
      { title: "Historic Home Expertise", desc: "Los Feliz has some of LA's most architecturally significant homes — we work on their systems with appropriate care." },
      { title: "Hillside Specialists", desc: "Hill road access, steep driveways, complex gate systems — we know Los Feliz property challenges." },
      { title: "All Gate & Door Brands", desc: "Every major manufacturer, every system type — one call handles it all." },
    ],
    faq: [
      { q: "Do you repair iron driveway gates in Los Feliz?", a: "Yes. Iron gate repair is a specialty of ours and is especially common in Los Feliz's hillside estate neighborhoods." },
      { q: "Can you service my LiftMaster gate operator in Los Feliz same day?", a: "Yes. LiftMaster is the most common gate operator brand we service and we carry parts for same-day repair." },
    ],
  },
  {
    slug: "eagle-rock",
    name: "Eagle Rock",
    metaTitle: "Gate & Garage Door Repair Eagle Rock CA | Real Gate & Garage Door",
    metaDescription: "Same-day gate and garage door repair in Eagle Rock, CA. All brands, licensed technicians. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Eagle Rock, CA",
    heroSubtitle: "Serving Eagle Rock with reliable gate and garage door repair — same-day, all brands, honest pricing.",
    extraKeywords: ["gate repair Eagle Rock CA", "garage door repair Eagle Rock"],
    intro: `Eagle Rock has grown into one of Northeast LA's most desirable neighborhoods, and its mix of craftsman bungalows, mid-century homes, and newer development brings a wide variety of garage door and gate needs. Real Gate & Garage Door serves all of Eagle Rock with experienced technicians and a commitment to same-day service.

From spring replacement on vintage single-car garages to electric gate installation on newly renovated properties, we handle the full range of residential gate and garage door services in Eagle Rock. We're familiar with the neighborhood's characteristic property types and come prepared for the variety of systems we encounter.

Call us for same-day service in Eagle Rock, seven days a week.`,
    whyUs: [
      { title: "Local Neighborhood Knowledge", desc: "We understand Eagle Rock's diverse housing stock and come prepared for any system we might find." },
      { title: "Same-Day Service", desc: "Seven days a week, including weekends and holidays." },
      { title: "No Upselling", desc: "We repair what's broken and only recommend replacement when repair isn't the right call." },
    ],
    faq: [
      { q: "Do you service garage doors in Eagle Rock on weekends?", a: "Yes. We offer same-day service in Eagle Rock seven days a week, including Saturday and Sunday." },
      { q: "Can you install an automatic gate at my Eagle Rock home?", a: "Yes. We install automatic driveway gates on both residential and commercial properties in Eagle Rock." },
    ],
  },
  {
    slug: "hollywood",
    name: "Hollywood",
    metaTitle: "Gate & Garage Door Repair Hollywood CA | Real Gate & Garage Door",
    metaDescription: "Expert gate and garage door repair in Hollywood, CA. Same-day service, electric gates, all brands. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Hollywood, CA",
    heroSubtitle: "Same-day gate and garage door repair in Hollywood — fast, professional, backed by warranty.",
    extraKeywords: ["garage door repair Hollywood CA", "gate repair Hollywood", "electric gate Hollywood Hills"],
    intro: `Hollywood's diverse landscape — from the flats near Hollywood Boulevard to the estates in the Hollywood Hills — demands a gate and garage door service provider with the versatility to handle everything. Real Gate & Garage Door covers all of Hollywood with same-day repair service for all types of systems.

Hollywood Hills properties especially feature sophisticated electric gate systems, often paired with security cameras and intercoms. We service all major gate operators — LiftMaster, Viking, All-O-Matic, and more — and can integrate with or repair existing security and access control systems. For Hollywood's urban core properties, we handle everything from sliding apartment gates to commercial roll-up doors.

We're available seven days a week for Hollywood repair calls, with 24/7 emergency service always available.`,
    whyUs: [
      { title: "Hollywood Hills Expertise", desc: "We're experienced with the high-end gate systems common in the Hollywood Hills and Beachwood Canyon areas." },
      { title: "Urban & Estate Service", desc: "From apartment building gates in East Hollywood to estate gates in the Hills — we cover all of Hollywood." },
      { title: "24/7 Availability", desc: "Hollywood never sleeps, and neither do we. Emergency gate and door repair available any hour." },
    ],
    faq: [
      { q: "Do you repair gates in the Hollywood Hills?", a: "Yes. The Hollywood Hills is a core service area for us — we're experienced with the gate systems on hillside estate properties." },
      { q: "Can you fix my electric gate same day in Hollywood?", a: "In most cases, yes. Electric gate repair is our specialty and we carry parts for most common systems." },
    ],
  },
  {
    slug: "bel-air",
    name: "Bel Air",
    metaTitle: "Gate & Garage Door Repair Bel Air CA | Real Gate & Garage Door",
    metaDescription: "Premium gate and garage door repair in Bel Air, CA. Estate gates, all brands, discreet service. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Bel Air, CA",
    heroSubtitle: "Expert gate and garage door repair for Bel Air estates — professional, discreet, guaranteed work.",
    extraKeywords: ["gate repair Bel Air CA", "estate gate repair Bel Air", "automatic gate Bel Air"],
    intro: `Bel Air's grand estates and winding canyon roads are home to some of the most elaborate gate systems in Southern California. Grand iron entry gates, long driveway automation systems, and multi-gate access control setups require a service provider who understands high-end residential gate systems and treats every property with appropriate discretion and professionalism.

Real Gate & Garage Door has earned the trust of Bel Air homeowners and property managers through consistent quality, professional conduct, and expertise with the premium gate systems common throughout the neighborhood. We work on Viking, LiftMaster, Doorking, and all other major operators — as well as custom systems installed by specialty contractors.

All work in Bel Air is done with full professionalism. Our technicians arrive on time, work cleanly, and complete every job to the highest standard. Same-day service available.`,
    whyUs: [
      { title: "High-End Gate Experience", desc: "We've serviced the most sophisticated gate systems in Bel Air and throughout the west-side hills." },
      { title: "Discreet & Professional", desc: "Our technicians maintain the standard of professionalism Bel Air homeowners expect." },
      { title: "All Systems Covered", desc: "Viking, LiftMaster, DoorKing, custom access control — we service every major gate system." },
    ],
    faq: [
      { q: "Do you work on large estate gate systems in Bel Air?", a: "Yes. Estate gate systems — including multi-gate access control, phone entry systems, and custom iron gates — are a core specialty of ours." },
      { q: "Can you match the finish on existing ironwork when repairing a Bel Air gate?", a: "We do our best to match existing finishes and will discuss options with you before any visible work is completed." },
    ],
  },
  {
    slug: "alhambra",
    name: "Alhambra",
    metaTitle: "Gate & Garage Door Repair Alhambra CA | Real Gate & Garage Door",
    metaDescription: "Same-day gate and garage door repair in Alhambra, CA. All brands, licensed technicians. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Alhambra, CA",
    heroSubtitle: "Reliable gate and garage door repair in Alhambra — same-day service, all brands, free estimates.",
    extraKeywords: ["gate repair Alhambra CA", "garage door repair Alhambra"],
    intro: `Alhambra's diverse residential neighborhoods and commercial corridors create steady demand for professional gate and garage door service. From the older residential neighborhoods near Valley Boulevard to the commercial strips along Garfield Avenue, Real Gate & Garage Door serves all of Alhambra with experienced technicians and reliable same-day service.

We handle all types of garage door and gate repairs in Alhambra — spring replacement, opener repair, cable replacement, panel repair, electric gate service, and more. Our technicians carry parts for all major brands and can complete most repairs in a single visit.

Same-day service is available in Alhambra. Call us for a free estimate.`,
    whyUs: [
      { title: "Complete Repair Coverage", desc: "Springs, openers, cables, panels, gates — we handle every type of repair in Alhambra." },
      { title: "Same-Day Service", desc: "We don't make Alhambra customers wait. Same-day appointments available most days." },
      { title: "Commercial & Residential", desc: "We serve both homeowners and businesses throughout Alhambra." },
    ],
    faq: [
      { q: "Do you repair commercial garage doors in Alhambra?", a: "Yes. We service commercial roll-up doors, industrial overhead doors, and commercial gate systems in Alhambra." },
      { q: "How soon can you come to Alhambra for a garage door repair?", a: "Same-day service is standard for Alhambra. For emergency calls, we aim to arrive within 1–2 hours." },
    ],
  },

  // ── New Phase 5 Cities ──
  {
    slug: "santa-barbara",
    name: "Santa Barbara",
    metaTitle: "Gate & Garage Door Repair Santa Barbara CA | Real Gate & Garage Door",
    metaDescription: "Expert gate and garage door repair in Santa Barbara, CA. Coastal estates, automatic gates, all brands. Same-day service. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Santa Barbara, CA",
    heroSubtitle: "Trusted gate and garage door specialists serving Santa Barbara — same-day service, professional, guaranteed.",
    extraKeywords: ["gate repair Santa Barbara CA", "automatic gate Santa Barbara", "garage door repair Santa Barbara", "Montecito gate repair"],
    intro: `Santa Barbara's coastal estates, hillside haciendas, and Mission-style homes are home to some of the most elegant gate systems in Southern California. From the grand iron entry gates in Montecito to the private driveways winding up the Santa Ynez foothills, gate repair is a high-priority service throughout the Santa Barbara area. Real Gate & Garage Door brings licensed, expert service directly to Santa Barbara homeowners.

Coastal conditions in Santa Barbara are hard on gate hardware. Salt air from the Pacific accelerates corrosion on springs, hinges, drive components, and control boards — especially on properties close to the waterfront. Our technicians factor this into every diagnosis and recommend materials and maintenance schedules suited to the coastal environment.

We service all major gate operators and garage door systems installed throughout the Santa Barbara area: LiftMaster, Viking, DoorKing, Genie, and more. Same-day service is available for most repair calls. Emergency service is available 24/7.`,
    whyUs: [
      { title: "Coastal Property Expertise", desc: "We understand how salt air affects gate and garage door hardware and choose materials accordingly." },
      { title: "Estate Gate Service", desc: "Custom iron gates, automated entry systems, and high-end operators — we service them all." },
      { title: "Same-Day Response", desc: "We travel to Santa Barbara for same-day repair on most service calls." },
    ],
    faq: [
      { q: "Do you service Montecito gate systems from Santa Barbara?", a: "Yes. We serve all of Santa Barbara and Montecito with the same same-day service and licensed technicians." },
      { q: "How does coastal air affect my gate system in Santa Barbara?", a: "Salt air accelerates corrosion on springs, cables, and hardware. We recommend annual maintenance for Santa Barbara coastal properties to catch wear before it becomes a breakdown." },
    ],
  },
  {
    slug: "ventura",
    name: "Ventura",
    metaTitle: "Gate & Garage Door Repair Ventura CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Ventura, CA. Same-day service, all brands, licensed technicians. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Ventura, CA",
    heroSubtitle: "Serving Ventura with professional gate and garage door repair — fast response, honest pricing, guaranteed work.",
    extraKeywords: ["gate repair Ventura CA", "garage door repair Ventura", "automatic gate Ventura County"],
    intro: `Ventura is a laid-back coastal city with a strong mix of residential neighborhoods — from the historic Midtown bungalows to the hillside homes in the Ondulando area and the newer developments near the 101. Gate and garage door systems here range from simple residential openers to more complex automatic gate installations on hillside properties with long, winding driveways.

Real Gate & Garage Door serves all of Ventura with the same same-day response and upfront pricing we bring to every job. Ventura's coastal climate — similar to Santa Barbara — means salt air is a consideration for gate hardware longevity. Our technicians know to look for early-stage corrosion that indicates a system is heading toward failure.

We cover all of Ventura including the Midtown corridor, downtown, the east end near Oxnard, and the hillside communities above the city. Same-day service is available most days, with 24/7 emergency response always available.`,
    whyUs: [
      { title: "Ventura County Coverage", desc: "We serve all of Ventura including hillside, coastal, and downtown areas." },
      { title: "Coastal Climate Knowledge", desc: "We understand how the ocean environment affects gate and garage door hardware in Ventura." },
      { title: "Upfront Pricing", desc: "You see the price before we start. No surprises on the invoice." },
    ],
    faq: [
      { q: "Do you offer emergency gate repair in Ventura?", a: "Yes. Emergency repair is available 24/7 throughout Ventura. After-hours rates apply." },
      { q: "What garage door opener brands do you repair in Ventura?", a: "All major brands: LiftMaster, Genie, Chamberlain, Craftsman, and more. We carry parts for most systems on our trucks." },
    ],
  },
  {
    slug: "oxnard",
    name: "Oxnard",
    metaTitle: "Gate & Garage Door Repair Oxnard CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Oxnard, CA. Same-day service, all brands, residential and commercial. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Oxnard, CA",
    heroSubtitle: "Reliable gate and garage door repair in Oxnard — same-day service, honest pricing, licensed.",
    extraKeywords: ["gate repair Oxnard CA", "garage door repair Oxnard", "electric gate Oxnard"],
    intro: `Oxnard is Ventura County's largest city, with a diverse mix of residential neighborhoods, industrial areas near the port, and a growing number of gated residential developments. Gate and garage door service here covers the full spectrum — from apartment complex access gates to residential garage door repairs to commercial roll-up door service.

Real Gate & Garage Door serves all of Oxnard including the Westport neighborhood, Oxnard Shores, and the residential communities throughout the city. Our commercial service capabilities are especially relevant for Oxnard's port-area businesses and warehouses where industrial overhead doors and security gates see heavy use.

Same-day service is available in Oxnard. For commercial clients with urgent needs, we prioritize fast response — a broken loading dock door means lost time.`,
    whyUs: [
      { title: "Residential & Commercial", desc: "We serve Oxnard homes, apartment complexes, and commercial facilities with equal expertise." },
      { title: "All Brands Stocked", desc: "We carry parts for all major gate operators and garage door openers for fast same-day completion." },
      { title: "Industrial Door Service", desc: "Commercial roll-up doors, warehouse overhead doors, and security gates — Oxnard's commercial needs are covered." },
    ],
    faq: [
      { q: "Do you repair commercial garage doors in Oxnard?", a: "Yes. We service commercial and industrial overhead doors, roll-up doors, and gate systems throughout Oxnard's commercial districts." },
      { q: "Can you fix my electric gate in Oxnard the same day?", a: "In most cases, yes. Electric gate repair is our specialty and we carry parts for all common operators." },
    ],
  },
  {
    slug: "camarillo",
    name: "Camarillo",
    metaTitle: "Gate & Garage Door Repair Camarillo CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Camarillo, CA. Same-day service, all brands, licensed & insured. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Camarillo, CA",
    heroSubtitle: "Serving Camarillo homeowners with expert gate and garage door repair — fast, honest, guaranteed.",
    extraKeywords: ["gate repair Camarillo CA", "garage door repair Camarillo", "automatic gate Camarillo"],
    intro: `Camarillo's quiet planned communities, newer housing developments, and the Camarillo outlets area make it one of Ventura County's most family-friendly cities. Residential gate and garage door systems here are often newer — many homes in Camarillo's planned neighborhoods have multiple-car garages with automatic openers that see daily heavy use. When these systems need service, homeowners want fast, clean, reliable repair.

Real Gate & Garage Door serves all of Camarillo including the communities near the 101 freeway, the historic Old Town area, and the neighborhoods around Camarillo Airport. We service all major garage door and gate operator brands, and stock the parts most commonly needed in Camarillo's newer housing stock.

Same-day service is available in Camarillo. Most standard repair calls are completed in a single visit.`,
    whyUs: [
      { title: "Newer Home Systems", desc: "We're familiar with the modern gate and garage door systems common in Camarillo's planned communities." },
      { title: "Same-Day Every Day", desc: "Same-day appointments available in Camarillo seven days a week." },
      { title: "Family-Focused Service", desc: "We treat every Camarillo home with the care and respect a family home deserves." },
    ],
    faq: [
      { q: "How quickly can you get to Camarillo for a repair?", a: "Most Camarillo calls receive same-day service. Emergency response is available 24/7." },
      { q: "Do you repair LiftMaster openers in Camarillo?", a: "Yes. LiftMaster is one of the most common brands in Camarillo and we carry parts for same-day repair." },
    ],
  },
  {
    slug: "palmdale",
    name: "Palmdale",
    metaTitle: "Gate & Garage Door Repair Palmdale CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Palmdale, CA. Same-day service, spring repair, all brands. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Palmdale, CA",
    heroSubtitle: "Trusted gate and garage door specialists serving Palmdale — same-day service, all brands, licensed.",
    extraKeywords: ["gate repair Palmdale CA", "garage door repair Palmdale", "garage door spring repair Palmdale", "Antelope Valley gate repair"],
    intro: `Palmdale's high-desert climate is particularly hard on garage door springs and gate hardware. The extreme temperature swings — freezing winters and scorching summers — cause metal components to expand and contract repeatedly, accelerating wear and leading to earlier-than-average spring failures. Palmdale homeowners often find their garage door springs snapping in the coldest months or their gate motor struggling in peak summer heat.

Real Gate & Garage Door understands the Antelope Valley environment and comes prepared for the specific failure modes common in Palmdale. We stock extra springs in the sizes most commonly needed in Palmdale's housing stock, allowing us to complete spring replacements same-day in the vast majority of calls.

We serve all of Palmdale including Quartz Hill, the neighborhoods near the Palmdale Regional Airport, the communities along the 14 freeway, and the residential areas throughout the city. Same-day service available. Emergency service 24/7.`,
    whyUs: [
      { title: "Desert Climate Expertise", desc: "We know how Palmdale's extreme temperature swings accelerate wear — and we stock the parts to fix it fast." },
      { title: "Springs in Stock", desc: "We carry the most common spring sizes for Palmdale homes — same-day spring replacement in most cases." },
      { title: "All of Antelope Valley", desc: "We cover Palmdale, Lancaster, and surrounding Antelope Valley communities." },
    ],
    faq: [
      { q: "Why do garage door springs break more often in Palmdale?", a: "Palmdale's extreme temperature range — from below freezing in winter to over 100°F in summer — causes metal springs to cycle through more thermal stress than coastal areas. This shortens spring life, often to 5–7 years instead of the typical 7–10." },
      { q: "Can you fix my broken spring in Palmdale same day?", a: "Yes. Spring replacement is our most common service and we stock the right springs for most Palmdale homes on our trucks." },
    ],
  },
  {
    slug: "fresno",
    name: "Fresno",
    metaTitle: "Gate & Garage Door Repair Fresno CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Fresno, CA. Same-day service, all brands, licensed technicians. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Fresno, CA",
    heroSubtitle: "Expert gate and garage door repair serving Fresno — fast response, fair pricing, all brands.",
    extraKeywords: ["gate repair Fresno CA", "garage door repair Fresno", "automatic gate Fresno", "electric gate Fresno CA"],
    intro: `Fresno is the Central Valley's largest city, home to a diverse mix of residential neighborhoods, agricultural businesses, and a rapidly growing suburban landscape. Gate and garage door systems here cover every type — from simple residential openers in Fresno's established neighborhoods to automated driveway gates on the larger properties in Clovis and northeast Fresno.

Fresno's hot, dry summers create specific demands on garage door systems: heat can cause opener circuit boards to fail, lubricants to dry out faster, and metal tracks to expand and warp. Real Gate & Garage Door services all of Fresno with technicians who understand the Central Valley climate and come prepared for its most common failures.

We cover all of Fresno including the Tower District, Clovis adjacent neighborhoods, the communities near Fresno State, and the newer developments north of the city. Same-day service is available for most calls.`,
    whyUs: [
      { title: "Central Valley Climate Knowledge", desc: "We know how Fresno's dry heat affects gate and garage door systems differently than coastal cities." },
      { title: "All Fresno Neighborhoods", desc: "From the Tower District to Clovis borders — we cover all of Fresno." },
      { title: "Same-Day Completion", desc: "Most Fresno repair calls are diagnosed and completed in a single visit." },
    ],
    faq: [
      { q: "Do you service automatic gates in Fresno?", a: "Yes. Automatic gate repair and installation is one of our specialties in Fresno and the surrounding Central Valley area." },
      { q: "How does Fresno's heat affect my garage door opener?", a: "Extreme heat can cause circuit boards to overheat and fail, accelerate lubrication breakdown, and cause thermal expansion in tracks. We recommend annual maintenance in Fresno to catch these issues early." },
    ],
  },
  {
    slug: "santa-clarita",
    name: "Santa Clarita",
    metaTitle: "Gate & Garage Door Repair Santa Clarita CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Santa Clarita, CA. Valencia, Newhall, Saugus — same-day service, all brands. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Santa Clarita, CA",
    heroSubtitle: "Serving Santa Clarita with fast, honest gate and garage door repair — same day, seven days a week.",
    extraKeywords: ["gate repair Santa Clarita CA", "garage door repair Valencia CA", "gate repair Newhall", "garage door repair Santa Clarita"],
    intro: `Santa Clarita's master-planned communities — Valencia, Saugus, Stevenson Ranch, and Canyon Country — are home to a high density of modern homes with two and three-car garages and, increasingly, automatic driveway gates. The city's suburban character means systems here are typically newer, well-maintained, and running on modern brands. When they do need service, homeowners want fast, clean, professional repair.

Hot Santa Clarita summers push garage door openers and gate operators harder than in coastal areas. Heat-related circuit board failures and dried lubricants are among the most common service calls we receive from Santa Clarita. We come prepared with parts for the most common openers in the area and complete most repairs in a single visit.

We cover all of Santa Clarita including Valencia, Saugus, Newhall, Stevenson Ranch, Canyon Country, and all surrounding communities. Same-day service available seven days a week.`,
    whyUs: [
      { title: "Master-Planned Community Experience", desc: "We're familiar with the modern systems in Valencia, Stevenson Ranch, and Santa Clarita's newer communities." },
      { title: "Same-Day Seven Days", desc: "Monday through Sunday, same-day service is available throughout Santa Clarita." },
      { title: "All Brands Serviced", desc: "LiftMaster, Genie, Chamberlain, Viking, and all other major brands — we carry the parts." },
    ],
    faq: [
      { q: "Do you serve Valencia and Saugus in Santa Clarita?", a: "Yes. We cover all of Santa Clarita including Valencia, Saugus, Newhall, Canyon Country, and Stevenson Ranch." },
      { q: "My garage door opener died in the Santa Clarita heat — can you fix it?", a: "Yes. Heat-related opener failures are very common in Santa Clarita summers. In most cases we can diagnose and replace the circuit board same day." },
    ],
  },
  {
    slug: "long-beach",
    name: "Long Beach",
    metaTitle: "Gate & Garage Door Repair Long Beach CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Long Beach, CA. Same-day service, commercial and residential, all brands. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Long Beach, CA",
    heroSubtitle: "Long Beach's trusted gate and garage door repair service — fast, reliable, same-day.",
    extraKeywords: ["gate repair Long Beach CA", "garage door repair Long Beach", "electric gate Long Beach", "commercial gate repair Long Beach"],
    intro: `Long Beach is one of LA's largest cities — a diverse urban landscape stretching from the harbor and port to the shoreline neighborhoods of Belmont Shore and Naples, and inland through Bixby Knolls, Los Altos, and Signal Hill. Gate and garage door needs here span a wide range: apartment complex access gates, residential garage door repair, and commercial roll-up door service for the port-adjacent industrial areas.

Real Gate & Garage Door serves all of Long Beach with experienced technicians and a commitment to same-day service. Coastal properties along the Belmont Shore and Naples areas deal with salt air effects on hardware — we factor this into diagnosis and recommend appropriate maintenance. The commercial and industrial corridor near the Port of Long Beach is also a core service area for us.

Same-day service is available throughout Long Beach. For commercial clients, we understand downtime costs and prioritize fast response.`,
    whyUs: [
      { title: "All Long Beach Neighborhoods", desc: "Harbor area, Belmont Shore, Los Altos, Signal Hill, Bixby Knolls — we cover all of Long Beach." },
      { title: "Commercial Port-Area Service", desc: "We service commercial and industrial doors near the Port of Long Beach with urgent response times." },
      { title: "Coastal Hardware Knowledge", desc: "Salt air and marine layer affect coastal hardware — we know what to look for in Long Beach." },
    ],
    faq: [
      { q: "Do you service commercial properties near the Port of Long Beach?", a: "Yes. Commercial overhead doors, roll-up doors, and security gates in the Long Beach port and industrial area are part of our regular service territory." },
      { q: "How quickly can you reach Long Beach for a garage door repair?", a: "Same-day service is standard in Long Beach. Emergency response time is typically 1–2 hours." },
    ],
  },
  {
    slug: "orange",
    name: "Orange",
    metaTitle: "Gate & Garage Door Repair Orange CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Orange, CA. Same-day service, all brands, licensed & insured. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Orange, CA",
    heroSubtitle: "Serving the City of Orange with expert gate and garage door repair — same-day, honest, guaranteed.",
    extraKeywords: ["gate repair Orange CA", "garage door repair Orange County", "automatic gate Orange CA"],
    intro: `The City of Orange is known for its charming historic district centered on The Circle, its classic 1950s and 60s residential neighborhoods, and the newer communities to the east. Gate and garage door service here covers older homes with vintage tilt-up garage doors, mid-century builds with original hardware, and newer developments with modern automatic systems. Real Gate & Garage Door handles all of it.

Orange's residential character means most service calls are for homeowners — people who need their garage door working before they can get to work or their gate secured before they leave for the day. We respond quickly and complete most Orange repairs in a single visit. Our technicians come stocked for the most common failure types in this area.

We cover all of Orange including the historic downtown area, the neighborhoods near Chapman University, and all residential streets throughout the city. Same-day service seven days a week.`,
    whyUs: [
      { title: "Historic & Modern Home Experience", desc: "From vintage tilt-up doors near The Circle to modern systems in newer Orange developments." },
      { title: "Same-Day Service", desc: "We don't make Orange customers wait. Same-day appointments available most days." },
      { title: "Written Warranty", desc: "All repair work in Orange is backed by our written warranty. No exceptions." },
    ],
    faq: [
      { q: "Do you repair old tilt-up garage doors in the historic Orange area?", a: "Yes. Vintage tilt-up one-piece doors are common near Orange's historic district and we have the experience to service, repair, or replace them correctly." },
      { q: "Can you fix my gate in Orange the same day?", a: "In most cases, yes. We cover the City of Orange with same-day service for gate and garage door repairs." },
    ],
  },
  {
    slug: "fullerton",
    name: "Fullerton",
    metaTitle: "Gate & Garage Door Repair Fullerton CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Fullerton, CA. Same-day service, all brands, licensed. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Fullerton, CA",
    heroSubtitle: "Fast, reliable gate and garage door repair in Fullerton — same-day service, upfront pricing.",
    extraKeywords: ["gate repair Fullerton CA", "garage door repair Fullerton", "electric gate Fullerton CA"],
    intro: `Fullerton is a diverse city in North Orange County home to Cal State Fullerton, a vibrant downtown, and established residential neighborhoods that mix older ranch homes with newer developments. Gate and garage door needs here include standard residential repairs, rental property service for properties near CSUF, and commercial work along the city's industrial corridors.

Real Gate & Garage Door serves all of Fullerton with experienced technicians who understand the full range of systems common in North OC. Whether you need a broken spring replaced on a 1960s ranch home or an automatic gate installed on a newer residential property, we handle it with the same upfront pricing and same-day response.

We cover all of Fullerton including the neighborhoods near CSUF, downtown Fullerton, and the communities near the 57 and 91 freeway corridors. Available seven days a week.`,
    whyUs: [
      { title: "Residential & Rental Property Service", desc: "We work with homeowners and landlords in Fullerton for fast, clean, reliable repairs." },
      { title: "All Home Types", desc: "Vintage ranch homes to newer builds — every garage door and gate type covered." },
      { title: "Same-Day Seven Days", desc: "Seven-day availability with same-day scheduling throughout Fullerton." },
    ],
    faq: [
      { q: "Do you work on rental properties in Fullerton near CSUF?", a: "Yes. We service rental properties throughout Fullerton and work with landlords to coordinate access and minimize tenant disruption." },
      { q: "What's the most common garage door repair in Fullerton?", a: "Broken torsion springs are the most common repair in Fullerton. We carry the right spring sizes for most doors and complete the replacement same day." },
    ],
  },
  {
    slug: "anaheim",
    name: "Anaheim",
    metaTitle: "Gate & Garage Door Repair Anaheim CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Anaheim, CA. Same-day service, commercial and residential, all brands. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Anaheim, CA",
    heroSubtitle: "Anaheim's trusted gate and garage door repair team — fast response, honest pricing, all brands.",
    extraKeywords: ["gate repair Anaheim CA", "garage door repair Anaheim", "commercial gate Anaheim", "electric gate Anaheim Hills"],
    intro: `Anaheim is one of Orange County's largest and most diverse cities — home to Disneyland, Angel Stadium, a thriving hotel district, and the residential neighborhoods of Anaheim Hills and the flatlands. Gate and garage door service here spans a wide range: commercial overhead doors for the city's extensive hospitality and industrial base, residential garage door repairs in the flatlands and Hills, and electric gate service for Anaheim Hills' many gated residential properties.

Real Gate & Garage Door covers all of Anaheim including Anaheim Hills, the resort district, and the residential neighborhoods throughout the city. Our commercial service capability is especially relevant for Anaheim's hotels, warehouses, and businesses where a broken door or gate is a business interruption.

Same-day service is the standard for all Anaheim repair calls. Commercial emergency response is available 24/7.`,
    whyUs: [
      { title: "Commercial & Residential Covered", desc: "From hotel loading docks to Anaheim Hills residential gates — we service every type of property." },
      { title: "Anaheim Hills Specialists", desc: "The gated communities and hillside properties of Anaheim Hills are a regular part of our service territory." },
      { title: "24/7 Emergency Service", desc: "Commercial and residential emergency repair available around the clock throughout Anaheim." },
    ],
    faq: [
      { q: "Do you service commercial properties in Anaheim's resort district?", a: "Yes. We service commercial overhead doors, roll-up doors, and security gates for businesses, hotels, and facilities throughout Anaheim." },
      { q: "Do you repair gates in Anaheim Hills gated communities?", a: "Yes. Anaheim Hills is part of our regular service territory and we work with both individual homeowners and HOAs there." },
    ],
  },
  {
    slug: "manhattan-beach",
    name: "Manhattan Beach",
    metaTitle: "Gate & Garage Door Repair Manhattan Beach CA | Real Gate & Garage Door",
    metaDescription: "Premium gate and garage door repair in Manhattan Beach, CA. Coastal estates, all brands, same-day service. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Manhattan Beach, CA",
    heroSubtitle: "Trusted gate and garage door repair for Manhattan Beach homes — professional, discreet, guaranteed.",
    extraKeywords: ["gate repair Manhattan Beach CA", "garage door repair Manhattan Beach", "automatic gate Manhattan Beach", "driveway gate Manhattan Beach"],
    intro: `Manhattan Beach is one of the South Bay's most desirable addresses — a tight-knit beach community where beautifully maintained homes back up to tree-lined streets, steps from the sand. Properties here often feature custom driveway gates, oversized garages with premium door systems, and sophisticated access setups. Manhattan Beach homeowners expect a high standard of service, and Real Gate & Garage Door delivers it.

The coastal environment in Manhattan Beach is among the most demanding for gate and garage door hardware. Daily marine layer, salt air, and the moisture from the Pacific create conditions where steel components corrode faster, rubber seals degrade sooner, and lubricants need more frequent replacement. Our technicians know what to look for and how to address it before a minor issue becomes a breakdown.

Same-day service is available in Manhattan Beach. We work with full professionalism and clean up after ourselves — this is your home and we treat it accordingly.`,
    whyUs: [
      { title: "Coastal Hardware Expertise", desc: "Marine layer and salt air are standard in Manhattan Beach — we use materials rated for coastal conditions." },
      { title: "Premium Property Service", desc: "Professional, discreet service suited to Manhattan Beach homeowners' expectations." },
      { title: "Same-Day Response", desc: "We prioritize fast service for Manhattan Beach — same-day in most cases." },
    ],
    faq: [
      { q: "How often should I service my gate in Manhattan Beach?", a: "Annual maintenance is recommended for coastal properties like Manhattan Beach. Salt air and marine layer significantly accelerate hardware wear." },
      { q: "Do you repair automatic driveway gates near the Manhattan Beach strand?", a: "Yes. Waterfront and strand-adjacent properties are a core part of our service territory in Manhattan Beach." },
    ],
  },
  {
    slug: "redondo-beach",
    name: "Redondo Beach",
    metaTitle: "Gate & Garage Door Repair Redondo Beach CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Redondo Beach, CA. Coastal specialists, same-day service, all brands. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Redondo Beach, CA",
    heroSubtitle: "Serving Redondo Beach with expert gate and garage door repair — same-day, honest, backed by warranty.",
    extraKeywords: ["gate repair Redondo Beach CA", "garage door repair Redondo Beach", "electric gate Redondo Beach"],
    intro: `Redondo Beach's mix of beachside bungalows, multi-unit residences, and the King Harbor waterfront create a varied market for gate and garage door service. From the strand homes with limited space and access to the hillside streets of North Redondo, every property type presents its own challenges. Real Gate & Garage Door is experienced with all of it.

Like other South Bay beach cities, Redondo Beach's coastal environment is demanding on gate and garage door hardware. We bring the right materials and the right expertise for coastal repairs — stainless hardware where appropriate, marine-grade lubricants, and an eye for early corrosion that signals a component approaching failure.

We cover all of Redondo Beach including North Redondo, the Riviera Village, the harbor area, and all residential streets. Same-day service seven days a week, emergency service 24/7.`,
    whyUs: [
      { title: "South Bay Beach Expertise", desc: "We know the coastal conditions in Redondo Beach and bring the right hardware and approach." },
      { title: "All Property Types", desc: "Strand homes, hillside residences, multi-unit buildings — we handle every configuration." },
      { title: "Warranty Backed", desc: "Every repair in Redondo Beach is covered by our written warranty." },
    ],
    faq: [
      { q: "Do you repair garage doors on the Redondo Beach strand?", a: "Yes. We service properties directly on the strand and understand the space and access limitations that come with them." },
      { q: "Can you come to Redondo Beach for an emergency repair?", a: "Yes. Emergency service is available 24/7 throughout Redondo Beach. Call us and we'll dispatch the next available technician." },
    ],
  },
  {
    slug: "torrance",
    name: "Torrance",
    metaTitle: "Gate & Garage Door Repair Torrance CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Torrance, CA. Same-day service, residential and commercial, all brands. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Torrance, CA",
    heroSubtitle: "Torrance's trusted gate and garage door repair team — fast, professional, all brands covered.",
    extraKeywords: ["gate repair Torrance CA", "garage door repair Torrance", "commercial garage door Torrance", "electric gate Torrance"],
    intro: `Torrance is one of the South Bay's largest and most diverse cities, with established residential neighborhoods, an active commercial and industrial district, and a well-known auto dealership corridor along Hawthorne Boulevard. Gate and garage door service here spans residential repairs for homeowners in the Old Torrance and Southwood neighborhoods to commercial overhead door service for the city's manufacturing facilities and car dealers.

Real Gate & Garage Door covers all of Torrance with the service flexibility to handle both residential and commercial accounts. Homeowners in Torrance's residential neighborhoods get the same same-day repair and upfront pricing as any other area. Commercial clients in the industrial and auto corridor get fast response and the commercial-grade equipment needed for larger doors and high-cycle systems.

Same-day service is available throughout Torrance. Commercial emergency response is available 24/7.`,
    whyUs: [
      { title: "Residential & Commercial", desc: "We serve Torrance homes and commercial facilities with equal expertise and professionalism." },
      { title: "Commercial-Grade Equipment", desc: "High-cycle doors and commercial overhead systems are a regular part of our Torrance service." },
      { title: "Same-Day Response", desc: "Most Torrance calls receive same-day service. Emergencies get priority response." },
    ],
    faq: [
      { q: "Do you service commercial garage doors for auto dealerships in Torrance?", a: "Yes. We service commercial overhead doors, service bay doors, and security gates for businesses and auto dealerships along Torrance's commercial corridor." },
      { q: "How quickly can you reach Torrance for a residential garage door repair?", a: "Same-day is standard for Torrance residential calls. Emergency response is typically 1–2 hours." },
    ],
  },
  {
    slug: "irvine",
    name: "Irvine",
    metaTitle: "Gate & Garage Door Repair Irvine CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Irvine, CA. Same-day service, gated community specialists, all brands. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Irvine, CA",
    heroSubtitle: "Serving Irvine's planned communities and tech campuses with expert gate and garage door repair.",
    extraKeywords: ["gate repair Irvine CA", "garage door repair Irvine", "gated community gate repair Irvine", "HOA gate repair Irvine"],
    intro: `Irvine's master-planned communities, corporate campuses, and high-density residential neighborhoods create one of Orange County's most gate-intensive service areas. The Irvine Company's villages — Woodbridge, Turtle Rock, Northwood, Quail Hill, and others — feature community gate systems, private HOA entry controls, and an enormous number of individual residential garage door systems. Real Gate & Garage Door services all of it.

Gated community gate systems in Irvine require technicians who understand HOA requirements, property management workflows, and commercial-grade gate operators. We work with Irvine HOAs, property managers, and individual homeowners to keep systems running correctly. Individual residential garage door repairs are handled with the same fast response and upfront pricing.

We cover all of Irvine including all village communities, the Great Park neighborhoods, UC Irvine area, and the corporate campus district. Same-day service available seven days a week.`,
    whyUs: [
      { title: "Gated Community Specialists", desc: "We understand HOA requirements and work seamlessly with Irvine property managers." },
      { title: "All Village Communities", desc: "Woodbridge, Turtle Rock, Northwood, Quail Hill, Great Park — we cover all of Irvine's villages." },
      { title: "Commercial & Residential", desc: "Corporate campuses and residential communities both receive the same expert service." },
    ],
    faq: [
      { q: "Do you work with HOAs in Irvine's gated communities?", a: "Yes. We coordinate directly with Irvine HOAs and property management companies for community gate service, including emergency response and scheduled maintenance." },
      { q: "How fast can you reach Irvine for a gate repair?", a: "Most Irvine calls receive same-day service. For community gate emergencies, we offer priority response." },
    ],
  },
  {
    slug: "huntington-beach",
    name: "Huntington Beach",
    metaTitle: "Gate & Garage Door Repair Huntington Beach CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Huntington Beach, CA. Coastal specialists, same-day service, all brands. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Huntington Beach, CA",
    heroSubtitle: "Surf City's trusted gate and garage door specialists — same-day service, coastal expertise, guaranteed.",
    extraKeywords: ["gate repair Huntington Beach CA", "garage door repair Huntington Beach", "coastal gate repair HB", "Surf City garage door repair"],
    intro: `Huntington Beach — Surf City USA — blends beach community charm with substantial residential neighborhoods stretching inland to the 405. Properties near the strand deal with the harshest coastal conditions: constant salt air, wind-driven moisture, and heavy sun exposure that all accelerate hardware wear. Inland neighborhoods in areas like Huntington Harbour, Bella Terra, and the communities near Goldenwest face somewhat milder conditions but still benefit from regular maintenance.

Real Gate & Garage Door services all of Huntington Beach with the coastal expertise the environment demands. Salt-tolerant hardware, appropriate lubricants, and an eye for early-stage corrosion are standard in our coastal service approach. Most repairs are completed same-day; annual maintenance prevents the most common coastal failures.

We cover all of Huntington Beach including the downtown strand area, Huntington Harbour, Bolsa Chica, and all residential communities. Same-day and emergency service always available.`,
    whyUs: [
      { title: "Coastal Climate Specialists", desc: "We're experienced with the specific hardware demands of Huntington Beach's ocean-adjacent environment." },
      { title: "Annual Maintenance Programs", desc: "Annual coastal service prevents the salt-air failures most common in Huntington Beach." },
      { title: "All of Surf City Covered", desc: "Strand properties to inland communities — every part of Huntington Beach is our service territory." },
    ],
    faq: [
      { q: "How does beach air affect my garage door in Huntington Beach?", a: "Salt air corrodes springs, cables, and hardware faster than in inland areas. We see springs failing at 4–6 years in Huntington Beach versus 7–10 years inland. Annual maintenance makes a significant difference." },
      { q: "Do you repair gates near the Huntington Beach strand?", a: "Yes. Strand and beachside properties are a regular part of our Huntington Beach service territory." },
    ],
  },
  {
    slug: "newport-beach",
    name: "Newport Beach",
    metaTitle: "Gate & Garage Door Repair Newport Beach CA | Real Gate & Garage Door",
    metaDescription: "Premium gate and garage door repair in Newport Beach, CA. Estate gates, gated communities, all brands. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Newport Beach, CA",
    heroSubtitle: "Expert gate and garage door repair for Newport Beach estates and communities — discreet, professional, guaranteed.",
    extraKeywords: ["gate repair Newport Beach CA", "automatic gate Newport Beach", "estate gate Newport Beach", "garage door repair Newport Beach CA"],
    intro: `Newport Beach is one of Southern California's most affluent coastal communities, home to Newport Harbor, Balboa Island, the Back Bay, and the hilltop estates of Newport Coast. Gate systems here represent some of the most sophisticated residential installations in Orange County: custom iron entry gates with video intercom, DoorKing and Viking operators on estate driveways, and community entrance gates in Bonita Canyon, Harbor Ridge, and Crystal Cove.

Real Gate & Garage Door serves Newport Beach homeowners and property managers with the professionalism and technical depth this community demands. We work on every major gate operator brand — including the premium systems common in Newport — and we treat every property with the discretion and care its owners expect.

The coastal environment in Newport Beach is demanding on gate hardware, particularly near the harbor and bay. We bring the right materials and expertise for salt-air environments and recommend appropriate maintenance intervals to keep your gate system working reliably for years.`,
    whyUs: [
      { title: "High-End Estate Gate Experience", desc: "Custom iron gates, DoorKing, Viking, LiftMaster Elite — we service Newport Beach's premium systems." },
      { title: "Discreet Professional Service", desc: "We treat Newport Beach properties with the professionalism their owners expect." },
      { title: "Gated Community Expertise", desc: "Bonita Canyon, Harbor Ridge, Crystal Cove HOAs — community gate service is our specialty." },
    ],
    faq: [
      { q: "Do you service gated community entry systems in Newport Beach?", a: "Yes. We service HOA community gates, telephone entry systems, and access control systems for Newport Beach's gated communities." },
      { q: "Can you repair a DoorKing gate system in Newport Beach?", a: "Absolutely. DoorKing (DKS) is a common brand in Newport Beach's gated communities and we service the full product line including telephone entry and access control." },
    ],
  },
  {
    slug: "lancaster",
    name: "Lancaster",
    metaTitle: "Gate & Garage Door Repair Lancaster CA | Real Gate & Garage Door",
    metaDescription: "Gate and garage door repair in Lancaster, CA. Desert climate specialists, same-day service, all brands. Call (818) 915-5715.",
    heroH1: "Gate & Garage Door Repair in Lancaster, CA",
    heroSubtitle: "Trusted gate and garage door specialists serving Lancaster — fast response, desert-climate expertise.",
    extraKeywords: ["gate repair Lancaster CA", "garage door repair Lancaster", "Antelope Valley gate repair", "garage door spring repair Lancaster CA"],
    intro: `Lancaster sits at the edge of the Mojave Desert in the Antelope Valley, sharing with Palmdale the extreme climate conditions — scorching summers that push past 110°F, cold winters that drop below freezing, and constant wind — that are harder on gate and garage door systems than almost anywhere in California. Spring breakage from thermal stress, heat-related opener failures, and wind damage to gates are among the most common service calls we receive from Lancaster.

Real Gate & Garage Door serves all of Lancaster with technicians who understand the Antelope Valley's unique environment. We stock heavier-duty springs suited to desert temperature extremes, carry parts for all major opener brands, and can complete most repairs in a single visit. For Lancaster customers, fast service matters — you shouldn't be stuck in the heat waiting.

We cover all of Lancaster including Quartz Hill, the communities near the Air Force Plant 42, the established neighborhoods near Lancaster Boulevard, and the newer residential developments throughout the city. Same-day service available seven days a week.`,
    whyUs: [
      { title: "Desert Climate Specialists", desc: "Antelope Valley heat and cold push systems harder — we stock the right parts for these extremes." },
      { title: "Same-Day In the Desert", desc: "We dispatch same-day throughout Lancaster. We know you can't wait long in the heat." },
      { title: "Heavier-Duty Springs", desc: "We use springs rated for Lancaster's temperature extremes — they last longer in the desert." },
    ],
    faq: [
      { q: "Why do springs break more often in Lancaster and Palmdale?", a: "The Antelope Valley's extreme temperature range — from below freezing in winter to over 100°F in summer — causes torsion springs to cycle through more thermal stress than coastal areas, shortening their lifespan significantly." },
      { q: "Can you fix my gate or garage door in Lancaster the same day?", a: "Yes. Same-day service is available throughout Lancaster and the surrounding Antelope Valley." },
    ],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return CITIES.find((c) => c.slug === slug);
}
