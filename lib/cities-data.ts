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
    intro: `Woodland Hills homeowners know the value of a well-maintained property — and a functioning gate or garage door is central to that. Tucked into the western end of the San Fernando Valley with its tree-lined streets, estate-style homes, and hillside properties, Woodland Hills has a strong demand for both automatic gate repair and garage door service. Real Gate & Garage Door has been serving Woodland Hills residents for over a decade.

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
    intro: `Sherman Oaks is one of the San Fernando Valley's most established neighborhoods — a dense mix of mid-century homes, modern renovations, and tree-lined streets that run from the flats up into the hillside communities above Mulholland. Gate and garage door systems here range from simple single-car residential openers to sophisticated iron driveway gates on hillside properties. Real Gate & Garage Door serves all of it.

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
    intro: `Encino is known for its upscale residential neighborhoods, tree-lined streets, and some of the San Fernando Valley's most beautiful estates. Properties here frequently feature custom automatic driveway gates, iron gate systems, and multi-car garages with high-end openers. Real Gate & Garage Door has been the area's go-to repair service for Encino homeowners who demand quality work.

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
    intro: `Calabasas is one of the most gate-dense communities in the San Fernando Valley — from the community entrance gates of The Oaks and Mulholland Estates to the private driveway gates of individual homes. Gate repair is a high priority here, and Real Gate & Garage Door has extensive experience working with Calabasas gated communities, HOAs, and private property owners.

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
    intro: `Tarzana sits between Woodland Hills and Encino in the heart of the San Fernando Valley, featuring a mix of suburban homes, cul-de-sacs, and some hillside properties. It's a community where residents are active and homes are well-maintained. Gate and garage door issues here range from simple opener malfunctions on older ranch homes to full gate system failures on newer residential builds.

Real Gate & Garage Door serves Tarzana with the same same-day service and upfront pricing we provide across the SFV. Our Tarzana customers appreciate that we call ahead, arrive on time, and fix the problem without unnecessary upselling.

We cover all of Tarzana including the areas near Reseda Boulevard, Ventura Boulevard, and the hillside streets above Calvert Street. Same-day service is available throughout Tarzana seven days a week.`,
    whyUs: [
      { title: "Same-Day Service", desc: "We cover Tarzana seven days a week with same-day appointments for most repair calls." },
      { title: "No Upselling", desc: "We fix what's broken and tell you what it costs. We don't invent problems." },
      { title: "Locally Trusted", desc: "Years of service in the SFV — Tarzana residents have come to rely on our team." },
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
    intro: `Chatsworth is a large, spread-out community at the western edge of the San Fernando Valley, known for its equestrian properties, ranch-style homes, large lots, and the iconic rock formations of the Santa Susana Pass. Gate systems here often serve larger properties with long driveways, equestrian access gates, and security gates for ranches and acreage.

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
    intro: `Van Nuys is one of the San Fernando Valley's most populated communities — a mix of residential neighborhoods, small businesses, and apartment complexes that stretch across the central Valley. Gate and garage door service here covers everything from simple residential opener repairs to commercial roll-up door service for the area's many small businesses.

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
    intro: `Reseda is a central San Fernando Valley community with a mix of residential streets, small businesses along Reseda Boulevard, and a growing number of homeowners investing in property improvements including gate and garage door upgrades. Real Gate & Garage Door serves Reseda with the same same-day service and fair pricing we provide across the Valley.

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
    intro: `Northridge is a large, diverse San Fernando Valley community known for its residential neighborhoods, California State University Northridge campus, and commercial corridors along Reseda Boulevard and Nordhoff Street. Home types range from post-WWII ranch homes with simple torsion spring garage doors to newer construction with full automatic gate systems.

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
    intro: `North Hollywood — NoHo — is one of the San Fernando Valley's most vibrant and fast-changing communities, home to the NoHo Arts District, a booming residential market, and a diverse mix of single-family homes, condos, and multi-unit properties. Gate and garage door service here spans from simple opener repairs on bungalows to access control gate systems for apartment complexes.

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
    intro: `Studio City sits at the base of the Hollywood Hills, with winding canyon roads, beautiful hillside homes, and some of the San Fernando Valley's most desirable real estate. Properties here often feature custom iron or aluminum driveway gates, high-end garage door systems, and sophisticated access control setups. Real Gate & Garage Door has served Studio City's demanding homeowners for years.

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
    intro: `Burbank is the eastern gateway to the San Fernando Valley — home to major entertainment studios, thriving businesses, and tight-knit residential neighborhoods that include everything from 1940s bungalows to newer construction near the Verdugo Hills. Gate and garage door service in Burbank runs the gamut from residential garage door spring repairs to commercial roll-up door service for the city's studios and production facilities.

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

Real Gate & Garage Door extends its San Fernando Valley service area to cover Glendale. We're familiar with the common gate and garage door systems in Glendale neighborhoods and can provide same-day service to most Glendale addresses.

Whether you're in Montrose, Adams Hill, Sparr Heights, Verdugo Woodlands, or central Glendale, we're available for same-day gate and garage door repair. Contact us for a free estimate or emergency service.`,
    whyUs: [
      { title: "Glendale Coverage", desc: "We cover all Glendale neighborhoods from downtown to the Verdugo Hills." },
      { title: "All Systems", desc: "All garage door brands, all gate types — Glendale's diverse property landscape is our territory." },
      { title: "Fast & Fair", desc: "Same-day response with upfront pricing — Glendale residents get the same service as our SFV core area." },
    ],
    faq: [
      { q: "Do you serve Glendale even though it's east of the San Fernando Valley?", a: "Yes. We extend our service area to include Glendale and Burbank as part of our greater SFV coverage." },
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
    intro: `Canoga Park is a western San Fernando Valley community adjacent to Woodland Hills and West Hills, featuring residential streets with a strong sense of community, active homeowners, and a number of commercial properties along Sherman Way and Topanga Canyon Boulevard. Gate and garage door repair here is steady — both from homeowners maintaining aging systems and residents upgrading to new automatic gate and smart opener technology.

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
];

export function getCityBySlug(slug: string): CityData | undefined {
  return CITIES.find((c) => c.slug === slug);
}
