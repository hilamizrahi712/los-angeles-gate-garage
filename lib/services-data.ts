export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  heroH1: string;
  heroSubtitle: string;
  heroImg: string;
  intro: string;
  features: { icon: string; title: string; desc: string }[];
  howItWorks: string[];
  pricingRange: string;
  pricingNote: string;
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
  isInstallation: boolean;
  isEmergency?: boolean;
}

export const SERVICES: ServiceData[] = [
  {
    slug: "gate-repair",
    title: "Gate Repair",
    metaTitle: "Gate Repair San Fernando Valley — Same Day | Real Gate & Garage Door",
    metaDescription: "Expert gate repair in San Fernando Valley. Same-day service for broken gates, gate motors, hinges, sensors & more. Licensed & insured. Call (818) 915-5715.",
    primaryKeyword: "gate repair near me",
    heroH1: "Gate Repair in San Fernando Valley — Same-Day Service",
    heroSubtitle: "From broken motors to bent tracks, our certified technicians fix all types of gates fast. Most repairs completed same day.",
    heroImg: "/images/services/gate-repair.jpg",
    isInstallation: false,
    intro: `When your gate stops working, every hour it's down is a security risk and a frustration. At Real Gate & Garage Door, we specialize in gate repair throughout the San Fernando Valley — and we respond fast. Most of our gate repair calls are handled same-day, with technicians arriving fully stocked with the parts needed for the most common repairs.

Gates fail for many reasons: worn motors, broken chains, damaged rollers, misaligned sensors, or corrosion on hinges and tracks. Whatever the cause, our technicians are trained to diagnose quickly and fix it right the first time. We work on all gate types — sliding gates, swing gates, driveway gates, iron gates — and all major brands including LiftMaster, Viking, All-O-Matic, DoorKing, Elite, and more.

We believe in upfront pricing. You'll get a clear quote before we touch anything. No surprise charges, no upsells you don't need. If repair isn't the right call — if your gate is truly beyond fixing — we'll give you an honest assessment and a fair quote for a replacement. But most of the time, a skilled repair is all it takes, and it costs a fraction of a new gate.

Our San Fernando Valley gate repair service covers everything from simple adjustments to complex motor replacements. Residential or commercial, manual or automatic — we fix it.

Sometimes repair isn't enough — if your gate is beyond fixing, we'll give you an honest assessment and a fair quote for a new one.`,
    features: [
      { icon: "⚡", title: "Same-Day Response", desc: "Most gate repairs scheduled and completed the same day you call." },
      { icon: "🔧", title: "All Gate Types", desc: "Sliding, swing, driveway, iron, wood, aluminum — we repair them all." },
      { icon: "🛡️", title: "All Major Brands", desc: "LiftMaster, Viking, All-O-Matic, DoorKing, Elite, Linear, and more." },
    ],
    howItWorks: [
      "Call us or book online — we'll confirm your same-day or next-morning appointment.",
      "Our technician arrives with a fully stocked truck and diagnoses the problem.",
      "You receive a clear, upfront price before any work begins.",
      "We fix your gate and test it thoroughly — you're back to normal in hours, not days.",
    ],
    pricingRange: "$150–$400 for most gate repairs",
    pricingNote: "Motor replacement: $300–$600 | Sensor repair: $80–$150 | Hinge/roller replacement: $100–$250 | Chain/belt repair: $150–$350",
    faqs: [
      { q: "How fast can you get here for a gate repair?", a: "For most San Fernando Valley locations, we can have a technician on-site same day. Emergency calls are handled within 1–2 hours." },
      { q: "My gate is stuck open — is it a security risk?", a: "Yes. A gate stuck open is a serious security vulnerability. Call us immediately for same-day emergency gate repair." },
      { q: "What brands of gate motors do you repair?", a: "We repair all major brands including LiftMaster, Viking, All-O-Matic, DoorKing, Elite, Linear, and Ramset. If your brand isn't listed, call us — we likely service it." },
      { q: "Can you repair a gate the same day?", a: "Yes. The majority of our gate repair calls are completed same-day. We stock the most common parts on our service vehicles." },
      { q: "How much does gate repair cost?", a: "Most gate repairs range from $150 to $400 depending on the problem. You'll receive an exact quote before we start any work." },
    ],
    relatedSlugs: ["automatic-gate-repair", "gate-opener-repair", "electric-gate-repair"],
  },

  {
    slug: "automatic-gate-repair",
    title: "Automatic Gate Repair",
    metaTitle: "Automatic Gate Repair San Fernando Valley — Fast & Reliable | Real Gate & Garage Door",
    metaDescription: "Automatic gate not opening? Our technicians fix gate operators, sensors, remotes & circuit boards. Same-day service in San Fernando Valley. Call (818) 915-5715.",
    primaryKeyword: "automatic gate repair near me",
    heroH1: "Automatic Gate Repair — San Fernando Valley",
    heroSubtitle: "Your automatic gate is supposed to make life easier. When it stops working, we get it running again — usually the same day.",
    heroImg: "/images/services/automatic-gate.jpg",
    isInstallation: false,
    intro: `Automatic gates add security and convenience to any home or business — until they stop working. An automatic gate that won't open leaves you locked out; one that won't close leaves you exposed. Real Gate & Garage Door provides expert automatic gate repair throughout the San Fernando Valley, with same-day service available for most calls.

Automatic gate failures have many causes: faulty gate operators (motors), damaged control boards, bad sensors, worn drive systems (chain, belt, or rack), or dead batteries and bad wiring. Our technicians are trained to work on all major automatic gate systems and diagnose the root cause quickly.

We carry the most common replacement parts on our trucks — gate operator circuit boards, drive gears, limit switches, photocell sensors, remote receivers, and more. This means we can often complete your automatic gate repair in a single visit rather than ordering parts and making a return trip.

Whether your automatic gate swings, slides, or folds, whether it runs on AC or solar power, our team has the tools and experience to fix it properly. We serve all of the San Fernando Valley including Woodland Hills, Encino, Sherman Oaks, Calabasas, and surrounding cities.

Sometimes repair isn't enough — if your gate is beyond fixing, we'll give you an honest assessment and a fair quote for a new one.`,
    features: [
      { icon: "⚙️", title: "Operator Specialists", desc: "We repair all gate operators including LiftMaster, Viking, FAAC, All-O-Matic, and Elite." },
      { icon: "📡", title: "Sensor & Remote Repair", desc: "Fix or replace photocell sensors, loop detectors, keypads, and remote systems." },
      { icon: "🔌", title: "Electrical Diagnostics", desc: "Control board issues, wiring faults, power supply problems — we trace and fix the source." },
    ],
    howItWorks: [
      "Call (818) 915-5715 — describe your gate's symptoms and we schedule a same-day visit.",
      "Our technician runs a full diagnostic on your gate operator and control system.",
      "You receive a clear written estimate before any parts are replaced.",
      "We make the repair, test all functions, and ensure the gate cycles reliably before leaving.",
    ],
    pricingRange: "$200–$600 for most automatic gate repairs",
    pricingNote: "Control board replacement: $250–$500 | Operator motor: $300–$700 | Sensor replacement: $80–$180 | Remote reprogramming: $60–$100",
    faqs: [
      { q: "Why won't my automatic gate open with the remote?", a: "Common causes include dead batteries in the remote, a bad receiver board in the operator, or a power issue. Our technician will diagnose it in minutes." },
      { q: "My gate opens but won't close — what's wrong?", a: "Usually a sensor issue — a photocell or safety loop is triggered and won't let the gate close. We'll check and clear the obstruction or replace the sensor." },
      { q: "Can you repair automatic gates on weekends?", a: "Yes. We provide service 7 days a week throughout the San Fernando Valley." },
      { q: "How long does an automatic gate repair take?", a: "Most repairs take 1–2 hours once the technician arrives. Complex motor or board replacements may take up to 3 hours." },
      { q: "What automatic gate brands do you service?", a: "LiftMaster, Viking, FAAC, All-O-Matic, Elite, Linear, DoorKing, Ramset, and many more." },
    ],
    relatedSlugs: ["gate-repair", "gate-opener-repair", "electric-gate-repair"],
  },

  {
    slug: "driveway-gate-repair",
    title: "Driveway Gate Repair",
    metaTitle: "Driveway Gate Repair San Fernando Valley | Real Gate & Garage Door",
    metaDescription: "Driveway gate repair throughout San Fernando Valley. Swing gates, sliding gates, openers & more. Same-day service available. Licensed & insured. (818) 915-5715.",
    primaryKeyword: "driveway gate repair",
    heroH1: "Driveway Gate Repair — San Fernando Valley",
    heroSubtitle: "Is your driveway gate dragging, misaligned, or refusing to open? We diagnose and repair all driveway gate issues — fast.",
    heroImg: "/images/services/driveway-gate.jpg",
    isInstallation: false,
    intro: `A broken driveway gate is more than an inconvenience — it's a daily obstacle and a security gap. Real Gate & Garage Door repairs driveway gates of all types throughout the San Fernando Valley: sliding, swing, bi-fold, cantilever, and everything in between.

Driveway gates face constant stress from weather, vehicle exhaust, soil movement, and daily cycling. Common driveway gate problems we see include: gates that drag on the ground, swing gates with sagging hinges, sliding gates with broken wheels or warped tracks, opener motors that have burned out, and control boards that fail after years of use.

Our technicians arrive at your property fully equipped. We inspect the gate structure first — checking for underlying damage that could cause a new operator to fail prematurely — then address the root cause rather than just patching the symptom. You'll receive a clear, itemized quote before we start any work.

We repair all major driveway gate brands and work with iron, aluminum, wood, and composite materials. If your driveway gate is old but structurally sound, we can often retrofit it with a new, more reliable operator and extend its life significantly.

Sometimes repair isn't enough — if your gate is beyond fixing, we'll give you an honest assessment and a fair quote for a new one.`,
    features: [
      { icon: "🏡", title: "All Gate Types", desc: "Swing, sliding, cantilever, bi-fold — we repair every driveway gate style." },
      { icon: "🔩", title: "Structure & Mechanics", desc: "We fix the gate itself — hinges, tracks, wheels, posts — not just the opener." },
      { icon: "⚡", title: "Same-Day Service", desc: "Most driveway gate repairs scheduled and completed same-day." },
    ],
    howItWorks: [
      "Call or book online — we schedule a same-day or early next-day appointment.",
      "Technician inspects your entire gate system: structure, hardware, and operator.",
      "You receive a full written estimate before any work starts.",
      "Repair completed, gate tested through multiple cycles, site cleaned up.",
    ],
    pricingRange: "$150–$500 for most driveway gate repairs",
    pricingNote: "Hinge replacement: $100–$250 | Wheel/roller repair: $120–$280 | Track realignment: $100–$200 | Gate operator: $300–$700",
    faqs: [
      { q: "My driveway gate is scraping the ground — what causes this?", a: "Usually sagging hinges (swing gates) or worn/broken drive wheels (sliding gates). Both are repairable and we see this frequently." },
      { q: "Can you repair old iron driveway gates?", a: "Yes. We repair iron gate frames, hinges, and posts, and can replace or upgrade your gate operator to modernize the system." },
      { q: "How long does a driveway gate repair take?", a: "Most repairs are completed within 1.5–3 hours, depending on the issue." },
      { q: "What areas do you cover?", a: "We cover the entire San Fernando Valley including Woodland Hills, Calabasas, Encino, Sherman Oaks, Chatsworth, and all surrounding communities." },
    ],
    relatedSlugs: ["gate-repair", "electric-gate-repair", "iron-gate-repair"],
  },

  {
    slug: "electric-gate-repair",
    title: "Electric Gate Repair",
    metaTitle: "Electric Gate Repair San Fernando Valley | Real Gate & Garage Door",
    metaDescription: "Electric gate repair in San Fernando Valley. Motor failure, control board, wiring, sensors — we fix it all same day. Licensed technicians. (818) 915-5715.",
    primaryKeyword: "electric gate repair",
    heroH1: "Electric Gate Repair — San Fernando Valley",
    heroSubtitle: "Electric gate not responding? We diagnose and repair all electric gate systems — motors, wiring, control boards, and sensors.",
    heroImg: "/images/services/gate-repair.jpg",
    isInstallation: false,
    intro: `Electric gates give your property the ultimate combination of security and convenience. When an electrical fault stops your gate from working, you need a technician who understands both the mechanical and electrical sides of the system. Real Gate & Garage Door provides expert electric gate repair throughout the San Fernando Valley.

Electric gate faults are often harder to diagnose than mechanical ones because the failure can be anywhere in the chain: the power supply, transformer, control board, motor, wiring harness, sensors, or remote system. Our technicians use professional diagnostic equipment to pinpoint the fault quickly rather than swapping parts at random.

Common electric gate problems we repair include: gate that doesn't respond to remote or keypad, gate that runs in one direction only, gate that stops mid-cycle, intermittent operation (works sometimes, not others), gate that moves slowly or makes grinding noises, and gate that triggers the breaker.

We work with all major electric gate operator brands including LiftMaster, Viking, FAAC, All-O-Matic, Elite, Linear, and DoorKing. Whether your gate is residential or commercial, single-phase or three-phase, we have the expertise to repair it correctly.

Sometimes repair isn't enough — if your gate is beyond fixing, we'll give you an honest assessment and a fair quote for a new one.`,
    features: [
      { icon: "🔌", title: "Electrical Diagnostics", desc: "We trace faults to the source — no guesswork, no part-swapping trials." },
      { icon: "🔋", title: "All Power Systems", desc: "Standard 110V/220V, solar-powered, and battery backup systems." },
      { icon: "📟", title: "Control Systems", desc: "Logic boards, keypads, intercoms, loop detectors, and remote receivers." },
    ],
    howItWorks: [
      "Call us and describe the symptoms — we'll give you an initial assessment over the phone.",
      "Technician arrives same day with diagnostic tools and common repair parts.",
      "Full electrical and mechanical diagnostic performed.",
      "Repair completed with upfront pricing — gate tested before we leave.",
    ],
    pricingRange: "$150–$600 for most electric gate repairs",
    pricingNote: "Wiring repair: $100–$200 | Control board: $250–$500 | Motor replacement: $350–$700 | Sensor/receiver: $80–$180",
    faqs: [
      { q: "My electric gate works randomly — sometimes it opens, sometimes it doesn't. What's wrong?", a: "Intermittent faults often point to a loose wire connection, failing control board, or marginal power supply. Our diagnostics will identify the exact cause." },
      { q: "Can you repair solar-powered electric gates?", a: "Yes. We service solar gate systems including panel cleaning, battery replacement, charge controller repair, and operator service." },
      { q: "My gate is stuck open and I can't close it manually — what should I do?", a: "Call us immediately for emergency service. A gate stuck open is a security issue. Most operators have a manual release — we can talk you through it over the phone while en route." },
    ],
    relatedSlugs: ["automatic-gate-repair", "gate-opener-repair", "gate-repair"],
  },

  {
    slug: "gate-opener-repair",
    title: "Gate Opener Repair",
    metaTitle: "Gate Opener Repair San Fernando Valley — LiftMaster & All Brands | Real Gate & Garage Door",
    metaDescription: "Gate opener repair in San Fernando Valley. LiftMaster, Viking, All-O-Matic, DoorKing & all brands. Same-day service. Licensed. Call (818) 915-5715.",
    primaryKeyword: "gate opener repair",
    heroH1: "Gate Opener Repair — All Brands, Same Day",
    heroSubtitle: "Your gate opener is the engine of your system. When it fails, we repair or replace it fast with parts on our truck.",
    heroImg: "/images/services/gate-opener-repair.jpg",
    isInstallation: false,
    intro: `The gate opener — also called a gate operator or gate motor — is the heart of your automatic gate system. When it fails, the whole gate system fails. Real Gate & Garage Door specializes in gate opener repair throughout the San Fernando Valley, with same-day service and a full inventory of common replacement parts.

Gate openers fail for various reasons: motor burnout from overuse or power surges, worn drive gears, failed circuit boards, broken limit switches, or simply the end of their service life after years of reliable operation. Our technicians are trained and certified on all major gate opener brands and models.

We service and repair LiftMaster, Viking, FAAC, All-O-Matic, Elite, Linear, DoorKing, and many more brands. We carry circuit boards, drive gears, clutch assemblies, limit switches, and motor assemblies for the most common models — which means we can often repair your opener in a single visit.

Before recommending replacement, we always explore whether repair is viable. A circuit board replacement is typically $250–$500 — far less than a complete new operator. We give you an honest recommendation based on the age and condition of your opener, not on what makes us the most money.

Sometimes repair isn't enough — if your gate is beyond fixing, we'll give you an honest assessment and a fair quote for a new one.`,
    features: [
      { icon: "🔧", title: "All Major Brands", desc: "LiftMaster, Viking, FAAC, All-O-Matic, Elite, Linear, DoorKing, Ramset." },
      { icon: "📦", title: "Parts on the Truck", desc: "We stock common boards, gears, and motors — one-visit repairs are our standard." },
      { icon: "💰", title: "Honest Assessment", desc: "We recommend repair when it's the right call, replacement when it's not." },
    ],
    howItWorks: [
      "Call or book — mention your gate opener brand if known.",
      "Technician arrives and runs a full diagnostic on the operator unit.",
      "You receive an upfront estimate: repair vs. replace options clearly explained.",
      "Repair or replacement completed same day in most cases.",
    ],
    pricingRange: "$200–$700 for gate opener repair or replacement",
    pricingNote: "Circuit board repair: $250–$500 | Drive gear replacement: $150–$300 | Motor replacement: $350–$700 | Complete operator: $600–$1,400 installed",
    faqs: [
      { q: "How do I know if my gate opener needs repair or replacement?", a: "If the opener is under 10 years old and the motor is intact, repair is usually the right call. Our technician will give you an honest recommendation based on what they find — not on maximizing the sale." },
      { q: "What gate opener brands do you repair?", a: "LiftMaster, Viking, FAAC, All-O-Matic, Elite, Linear, DoorKing, Ramset, and many others. If your brand isn't listed, call us." },
      { q: "Can you upgrade my old gate opener to a smart phone-controlled system?", a: "Yes. We install LiftMaster myQ-compatible operators and other smart gate systems that let you open and close your gate from anywhere." },
      { q: "My gate opener clicks but doesn't move — is it the motor?", a: "Clicking without movement usually indicates a seized motor, broken drive component, or tripped thermal overload. Our tech will pinpoint it fast." },
    ],
    relatedSlugs: ["automatic-gate-repair", "electric-gate-repair", "gate-repair"],
  },

  {
    slug: "iron-gate-repair",
    title: "Iron Gate Repair",
    metaTitle: "Iron & Wrought Iron Gate Repair San Fernando Valley | Real Gate & Garage Door",
    metaDescription: "Iron and wrought iron gate repair in San Fernando Valley. Rust, welding, hinges, panels — same-day service. Licensed & insured. Call (818) 915-5715.",
    primaryKeyword: "iron gate repair",
    heroH1: "Iron & Wrought Iron Gate Repair — San Fernando Valley",
    heroSubtitle: "From rust and corrosion to structural damage and broken hinges, we restore iron gates to full function and appearance.",
    heroImg: "/images/services/iron-gate.jpg",
    isInstallation: false,
    intro: `Iron and wrought iron gates are built to last a lifetime — but they're not immune to the elements. Rust, corrosion, impact damage, sagging hinges, and worn welds are common issues that, left unaddressed, can turn a minor fix into a costly replacement. Real Gate & Garage Door provides expert iron gate repair throughout the San Fernando Valley.

Our technicians are trained in iron gate assessment and repair. We handle rust treatment and spot welding for structural repairs, hinge replacement (including custom fabrication when original parts are discontinued), track and roller repair for sliding iron gates, gate operator upgrades for manual iron gates being converted to automatic, and cosmetic refinishing to restore the gate's appearance.

San Fernando Valley's climate — with its hot summers, occasional heavy rains, and coastal marine air in some neighborhoods — creates ideal conditions for iron corrosion if gates aren't properly maintained. We recommend treating any rust as soon as it appears, before it penetrates the metal's structural layer.

Many iron gates in the SFV are decades old and worth preserving. A skilled repair is almost always cheaper than a new custom iron gate, and a restored original often looks better than a replacement. We'll give you an honest opinion on whether repair or replacement makes more sense for your specific gate.

Sometimes repair isn't enough — if your gate is beyond fixing, we'll give you an honest assessment and a fair quote for a new one.`,
    features: [
      { icon: "🏛️", title: "Structural Repairs", desc: "Welding, rust treatment, post repair, and section replacement for damaged iron gates." },
      { icon: "⚙️", title: "Hardware Replacement", desc: "Hinges, latches, rollers, wheels, and track repairs for all iron gate styles." },
      { icon: "🎨", title: "Finish Restoration", desc: "Rust removal, priming, and paint touch-up to restore your gate's appearance." },
    ],
    howItWorks: [
      "Call us — we schedule a same-day inspection to assess the damage.",
      "Technician evaluates structural integrity, hardware, and surface condition.",
      "You receive a written quote covering all needed repairs.",
      "Repair completed — gate tested for smooth operation before we leave.",
    ],
    pricingRange: "$100–$600 for iron gate repair",
    pricingNote: "Hinge replacement: $100–$250 | Rust repair & treatment: $150–$400 | Welding repair: $200–$500 | Roller/track work: $120–$300",
    faqs: [
      { q: "Can rusted iron gates be repaired, or do they need to be replaced?", a: "Surface and moderate rust is absolutely repairable. We treat the rust, stop its spread, and restore the surface. Only severe structural rust that has compromised the metal's integrity warrants replacement." },
      { q: "My iron gate is sagging on one side — is that fixable?", a: "Yes. Sagging usually means a worn or damaged hinge, a sunken post, or a bent frame component. All of these are repairable without replacing the full gate." },
      { q: "Can you add an automatic opener to my existing manual iron gate?", a: "Absolutely. We assess the gate's structural condition and install a compatible operator. Many older iron gates are retrofitted with LiftMaster or Viking operators." },
    ],
    relatedSlugs: ["gate-repair", "driveway-gate-repair", "gate-installation"],
  },

  {
    slug: "commercial-gate-repair",
    title: "Commercial Gate Repair",
    metaTitle: "Commercial Gate Repair San Fernando Valley | Real Gate & Garage Door",
    metaDescription: "Commercial gate repair in San Fernando Valley. Parking gates, security gates, high-cycle operators — fast response, licensed. Call (818) 915-5715.",
    primaryKeyword: "commercial gate repair",
    heroH1: "Commercial Gate Repair — San Fernando Valley",
    heroSubtitle: "Downtime on a commercial gate costs you money and security. We provide priority same-day service for businesses throughout the SFV.",
    heroImg: "/images/services/commercial-gate.jpg",
    isInstallation: false,
    intro: `A broken commercial gate is more than an inconvenience — it's a security breach, a liability issue, and a disruption to your operations. Real Gate & Garage Door provides priority commercial gate repair throughout the San Fernando Valley, with fast response times and technicians equipped for high-cycle commercial gate systems.

Commercial gates operate far more frequently than residential gates and are subject to heavier use — delivery trucks, employee traffic, and 24/7 operation in many cases. This puts unique demands on the gate operator, drive system, and structural components. Our commercial gate technicians are trained specifically for this environment.

We repair all types of commercial gates: sliding security gates, swing arm gates, barrier arms (parking gates), vertical lift gates, and high-speed roll-up gates. We service all major commercial gate operators including LiftMaster, Viking, FAAC, All-O-Matic, DoorKing, and Ramset, as well as access control systems that integrate with the gate.

For property managers, HOAs, and business owners, we offer maintenance contracts that include scheduled service visits, priority response, and parts discounts. Preventive maintenance dramatically reduces emergency repairs and extends the life of your gate system.

Sometimes repair isn't enough — if your gate is beyond fixing, we'll give you an honest assessment and a fair quote for a new one.`,
    features: [
      { icon: "🏭", title: "Commercial-Grade Repairs", desc: "High-cycle operators, heavy-duty drive systems, and commercial-grade hardware." },
      { icon: "⚡", title: "Priority Response", desc: "Commercial clients receive priority scheduling — we understand every hour counts." },
      { icon: "🔐", title: "Access Control Integration", desc: "We work with card readers, keypads, intercoms, and vehicle loop detectors." },
    ],
    howItWorks: [
      "Call our commercial line — mention it's a commercial property for priority routing.",
      "Technician dispatched with heavy-duty parts for commercial systems.",
      "Full commercial diagnostic: operator, drive, structure, and access control.",
      "Repair completed and gate cycled multiple times to verify commercial-duty reliability.",
    ],
    pricingRange: "$250–$1,000+ for commercial gate repairs",
    pricingNote: "Pricing varies significantly by gate type, operator brand, and complexity. Commercial clients receive a detailed written estimate before work begins.",
    faqs: [
      { q: "Do you service commercial properties after hours?", a: "Yes. We provide 24/7 emergency service for commercial clients. After-hours rates apply for calls between 8 PM and 7 AM." },
      { q: "Can you repair parking lot barrier arms?", a: "Yes. We repair and replace all major parking barrier arm brands including FAAC, BFT, DoorKing, and others." },
      { q: "Do you offer commercial gate maintenance contracts?", a: "Yes. Our maintenance contracts include quarterly service visits, priority emergency response, and parts discounts. Contact us for commercial pricing." },
    ],
    relatedSlugs: ["gate-repair", "electric-gate-repair", "commercial-garage-door"],
  },

  {
    slug: "gate-installation",
    title: "Gate Installation",
    metaTitle: "Gate Installation San Fernando Valley | Real Gate & Garage Door",
    metaDescription: "Professional gate installation in San Fernando Valley. Automatic, driveway, iron, and security gates. Free estimates. Licensed & insured. (818) 915-5715.",
    primaryKeyword: "gate installation near me",
    heroH1: "Gate Installation — San Fernando Valley",
    heroSubtitle: "Ready for a new gate? We'll help you choose the right system and install it to last.",
    heroImg: "/images/services/gate-installation.jpg",
    isInstallation: true,
    intro: `Thinking about adding a new gate or replacing an old one? Real Gate & Garage Door installs driveway gates, automatic gates, iron gates, and commercial security gates throughout the San Fernando Valley. We help you choose the right gate type, material, and operator for your property and budget.

Our installation process starts with a free on-site assessment. We evaluate your driveway width, slope, and surface, discuss your security and aesthetic goals, and recommend options in your price range. We work with iron, aluminum, wood, and vinyl gate materials, and we partner with leading manufacturers for automatic gate operators.

Gate installation in the San Fernando Valley typically requires a permit for new installations. We handle the permit coordination and ensure all work meets California building codes and your HOA requirements where applicable.

Not sure if you need repair or a new gate? If your existing gate can be repaired reliably at a reasonable cost, we'll tell you so — honestly. We don't push installations when repair is the better choice.

Link back: If you're experiencing problems with your current gate, visit our [Gate Repair](/services/gate-repair) page — repair is almost always faster and more affordable.`,
    features: [
      { icon: "📐", title: "Free Site Assessment", desc: "We evaluate your property and recommend the right gate type, material, and operator." },
      { icon: "📋", title: "Permit Handling", desc: "We coordinate permits for new gate installations in San Fernando Valley cities." },
      { icon: "⭐", title: "Quality Installation", desc: "Every installation is backed by a workmanship warranty." },
    ],
    howItWorks: [
      "Contact us for a free on-site consultation and estimate.",
      "We discuss gate types, materials, operators, and access control options.",
      "We handle permits, procurement, and scheduling.",
      "Installation completed by certified technicians, gate tested and programmed.",
    ],
    pricingRange: "$2,000–$8,000 for most gate installations",
    pricingNote: "Automatic swing gate: $2,000–$5,000 | Automatic sliding gate: $2,500–$6,000 | Iron gate with operator: $3,000–$8,000+ | Pricing varies by material, size, and operator brand.",
    faqs: [
      { q: "How long does gate installation take?", a: "A typical residential automatic gate installation takes 1–2 days depending on the gate type, concrete work required, and operator complexity." },
      { q: "Do I need a permit for a new gate in the San Fernando Valley?", a: "Generally yes. Permit requirements vary by city within the SFV. We handle the permit process for all our installations." },
      { q: "Can I choose my gate material and style?", a: "Absolutely. We work with iron, aluminum, wood, and vinyl gates. We'll show you samples and help you select the style that fits your property." },
    ],
    relatedSlugs: ["gate-repair", "automatic-gate-repair", "iron-gate-repair"],
  },

  {
    slug: "garage-door-repair",
    title: "Garage Door Repair",
    metaTitle: "Garage Door Repair San Fernando Valley | Real Gate & Garage Door",
    metaDescription: "Expert garage door repair in San Fernando Valley. Springs, openers, cables, panels — same-day service. Licensed & insured. Call (818) 915-5715.",
    primaryKeyword: "garage door repair",
    heroH1: "Garage Door Repair in San Fernando Valley",
    heroSubtitle: "From broken springs to jammed tracks, our licensed technicians fix garage doors fast — usually same day.",
    heroImg: "/images/hero/hero-garage-door.jpg",
    isInstallation: false,
    intro: `A broken garage door is a major inconvenience and a security risk. Real Gate & Garage Door provides expert garage door repair throughout the San Fernando Valley, with same-day service available for most repairs. Our technicians arrive fully stocked with the parts needed for the most common issues.

Garage doors fail for many reasons: torsion or extension spring breakage (the most common cause), cable snapping, opener motor failure, sensor misalignment, panel damage from impact, track bending, or roller wear. Whatever the cause, our technicians diagnose quickly and give you an upfront price before touching anything.

We repair all garage door brands: Clopay, Wayne Dalton, Amarr, Overhead Door, and others. We service all major opener brands: LiftMaster, Genie, Chamberlain, Craftsman, and more. Whether your door is a single-car or double-car, sectional or one-piece, residential or commercial, we have the experience to fix it right.

Upfront pricing means you'll never be surprised. Our technician will explain what's wrong, what it costs to fix, and what happens if you don't fix it — and then let you decide. Most repairs are completed the same day.

Sometimes repair isn't enough — if your garage door is beyond fixing, we'll give you an honest assessment and a fair quote for a new one.`,
    features: [
      { icon: "⚡", title: "Same-Day Repairs", desc: "Most garage door repairs completed same day with parts from our stocked truck." },
      { icon: "🔧", title: "All Door Types", desc: "Sectional, roll-up, one-piece, single, double — all brands, all styles." },
      { icon: "💰", title: "Upfront Pricing", desc: "You see the price before we start. No surprises, no add-ons." },
    ],
    howItWorks: [
      "Call (818) 915-5715 — we schedule same-day or first-available appointments.",
      "Technician arrives and inspects the full door system.",
      "You receive a clear quote for the repair — you approve before we proceed.",
      "Repair completed, door cycled and balanced, safety check performed.",
    ],
    pricingRange: "$100–$400 for most garage door repairs",
    pricingNote: "Spring replacement: $150–$350 | Cable repair: $100–$200 | Opener repair: $100–$250 | Roller replacement: $80–$180 | Track adjustment: $80–$150",
    faqs: [
      { q: "How quickly can you get to me for a garage door repair?", a: "Same-day service is available throughout the San Fernando Valley. For emergencies, we aim to arrive within 1–2 hours." },
      { q: "Is it safe to operate my garage door if a spring is broken?", a: "No. A garage door with a broken spring is dangerous and can fall unexpectedly. Don't use the door until the spring is replaced." },
      { q: "My garage door is making a loud bang — what happened?", a: "A loud bang usually means a torsion spring snapped. This is one of the most common garage door failures. Call us for same-day spring replacement." },
      { q: "Do you repair all brands of garage doors?", a: "Yes. We repair all major brands including Clopay, Wayne Dalton, Amarr, Overhead Door, and others." },
    ],
    relatedSlugs: ["garage-door-spring-repair", "garage-door-opener-repair", "garage-door-cable-repair"],
  },

  {
    slug: "garage-door-spring-repair",
    title: "Garage Door Spring Repair",
    metaTitle: "Garage Door Spring Repair & Replacement — SFV | Real Gate & Garage Door",
    metaDescription: "Broken garage door spring? We replace torsion and extension springs same day in San Fernando Valley. Upfront pricing. Licensed. Call (818) 915-5715.",
    primaryKeyword: "garage door spring replacement",
    heroH1: "Garage Door Spring Repair & Replacement — San Fernando Valley",
    heroSubtitle: "Broken spring? We carry springs for virtually every garage door on the truck — most replacements done in under 90 minutes.",
    heroImg: "/images/services/garage-door-spring-repair.jpg",
    isInstallation: false,
    intro: `A broken garage door spring is the most common garage door failure we see — and the most dangerous to ignore. When a spring breaks, the garage door becomes extremely heavy and nearly impossible to lift manually. Operating a door with a broken spring risks serious injury and can damage the opener. Call us for same-day spring replacement.

Garage doors use either torsion springs (mounted horizontally above the door) or extension springs (mounted along the side tracks). Torsion springs are more common on modern doors and last longer; extension springs are found on older doors. Our technicians carry both types in a wide range of sizes and tension ratings.

We don't just swap the broken spring — we inspect the entire spring system and balance the door. An improperly balanced door puts strain on the opener motor and can cause it to fail prematurely. We test the door's balance and adjust spring tension to spec before considering the job complete.

When we replace a spring, we always recommend replacing both springs if you have a two-spring torsion system. If one spring broke, the other is likely near the end of its life as well. Replacing both now saves you a second service call in the near future.

Sometimes repair isn't enough — if your garage door is beyond fixing, we'll give you an honest assessment and a fair quote for a new one.`,
    features: [
      { icon: "🌀", title: "Torsion & Extension Springs", desc: "We carry both types in a full range of sizes, tension ratings, and wire gauges." },
      { icon: "⚖️", title: "Door Balancing", desc: "We balance the door after spring replacement — critical for opener longevity." },
      { icon: "🔒", title: "Safety First", desc: "Spring replacement is high-tension work. Never attempt it yourself." },
    ],
    howItWorks: [
      "Call us — describe whether your door is stuck down or just won't stay up.",
      "Technician arrives with a full spring inventory for your door size and weight.",
      "Spring replaced and door balanced to manufacturer specifications.",
      "Opener tested and door cycled multiple times to confirm correct operation.",
    ],
    pricingRange: "$150–$350 for most spring replacements",
    pricingNote: "Single torsion spring: $150–$250 | Double torsion springs: $220–$350 | Extension spring (per spring): $80–$150 | Premium high-cycle springs available at a slight upcharge and last 3× longer.",
    faqs: [
      { q: "How long do garage door springs last?", a: "Standard springs are rated for 10,000 cycles (about 7–10 years of average use). High-cycle springs rated at 30,000 cycles are available and cost modestly more — a worthwhile upgrade." },
      { q: "Can I replace a garage door spring myself?", a: "We strongly advise against it. Torsion springs store massive amounts of energy and can cause serious injury if mishandled. Leave spring replacement to licensed technicians." },
      { q: "Why did my spring break?", a: "Springs break due to metal fatigue from repeated cycling. Factors that accelerate wear include lack of lubrication, temperature extremes, and using low-quality springs. High-cycle springs help address this." },
      { q: "Should I replace one spring or both?", a: "If you have a dual-spring torsion system, we recommend replacing both springs at the same time. If one broke, the other is at similar risk. Replacing both now is cheaper than a second service call soon." },
      { q: "How much does garage door spring replacement cost in San Fernando Valley?", a: "Most spring replacements cost $150–$350. You'll receive an exact quote before work starts." },
    ],
    relatedSlugs: ["garage-door-repair", "garage-door-cable-repair", "garage-door-opener-repair"],
  },

  {
    slug: "garage-door-opener-repair",
    title: "Garage Door Opener Repair",
    metaTitle: "Garage Door Opener Repair — LiftMaster, Genie & More | Real Gate & Garage Door",
    metaDescription: "Garage door opener repair in San Fernando Valley. LiftMaster, Genie, Chamberlain, Craftsman — all brands. Same-day service. Call (818) 915-5715.",
    primaryKeyword: "garage door opener repair",
    heroH1: "Garage Door Opener Repair — All Brands, San Fernando Valley",
    heroSubtitle: "Is your garage door opener refusing to work? We diagnose and repair all major brands — LiftMaster, Genie, Chamberlain, Craftsman — same day.",
    heroImg: "/images/services/garage-door-opener-repair.jpg",
    isInstallation: false,
    intro: `A garage door opener that won't respond is more than inconvenient — it can leave your car trapped or your home exposed. Real Gate & Garage Door repairs all major garage door opener brands throughout the San Fernando Valley, with same-day service and parts stocked on our trucks.

Garage door opener problems range from simple (dead remote batteries, misaligned safety sensors) to complex (circuit board failure, motor burnout, drive gear wear). Our technicians diagnose the root cause before recommending any repair or replacement — because sometimes the fix is a $5 battery, not a $300 motor.

We service and repair LiftMaster, Genie, Chamberlain, Craftsman, Sears, Marantec, and other opener brands. For older openers that are no longer serviceable or have become unsafe (pre-UL 325 compliance), we recommend replacement and can install a new unit same-day in most cases.

If you're upgrading, we install WiFi-enabled smart openers from LiftMaster (myQ technology) that let you control and monitor your garage door from your smartphone — ideal for the tech-savvy San Fernando Valley homeowner who wants complete control.

Sometimes repair isn't enough — if your opener is beyond fixing, we'll give you an honest assessment and a fair quote for a new one.`,
    features: [
      { icon: "📱", title: "Smart Opener Installs", desc: "LiftMaster myQ, Genie Aladdin Connect — smartphone control from anywhere." },
      { icon: "⚙️", title: "All Drive Types", desc: "Chain drive, belt drive, screw drive, and direct drive openers." },
      { icon: "🔧", title: "Parts on the Truck", desc: "Circuit boards, drive gears, sensors, remotes — most repairs done same visit." },
    ],
    howItWorks: [
      "Call and describe the symptoms — we'll narrow down the likely cause before arriving.",
      "Technician runs a full diagnostic: remote, sensors, logic board, motor, and drive.",
      "Upfront repair-vs-replace recommendation with clear pricing for each option.",
      "Repair or replacement completed, remotes programmed, door balanced and tested.",
    ],
    pricingRange: "$100–$350 for most opener repairs",
    pricingNote: "Sensor alignment: $60–$100 | Circuit board: $150–$300 | Motor replacement: $200–$350 | New opener installed: $250–$500 (parts + labor)",
    faqs: [
      { q: "Why does my garage door opener run but the door doesn't move?", a: "Likely a broken spring (most common cause) or a disconnected door-to-opener connection. Our technician will identify which immediately." },
      { q: "My opener works with the wall button but not the remote — why?", a: "The remote signal isn't reaching the opener. Check the remote battery first. If that's fine, it may be the remote itself or the receiver board inside the opener." },
      { q: "How long do garage door openers last?", a: "A quality opener lasts 10–15 years with proper maintenance. We can often extend that with a timely repair." },
      { q: "Can you program a new remote to my existing opener?", a: "Yes. Remote programming typically takes 5–10 minutes and we include it with any opener repair call." },
    ],
    relatedSlugs: ["garage-door-repair", "garage-door-spring-repair", "garage-door-cable-repair"],
  },

  {
    slug: "garage-door-cable-repair",
    title: "Garage Door Cable Repair",
    metaTitle: "Garage Door Cable Repair & Replacement | Real Gate & Garage Door",
    metaDescription: "Garage door cable snapped? We repair and replace broken cables same day in San Fernando Valley. Licensed & insured. Call (818) 915-5715.",
    primaryKeyword: "garage door cable repair",
    heroH1: "Garage Door Cable Repair — San Fernando Valley",
    heroSubtitle: "A snapped garage door cable can cause the door to drop suddenly. Don't risk it — call for same-day cable repair.",
    heroImg: "/images/services/garage-door-repair.jpg",
    isInstallation: false,
    intro: `Garage door cables work in conjunction with the springs to safely control the door as it opens and closes. When a cable snaps or becomes frayed, the door can become dangerous — dropping suddenly, going off-track, or becoming impossible to operate. Real Gate & Garage Door provides fast, same-day garage door cable repair throughout the San Fernando Valley.

Cables snap for several reasons: corrosion from moisture, fraying due to age and repeated bending, or failing suddenly when a spring breaks and the cable is forced to handle the full door weight. When a cable snaps on one side, the door often goes off-track, creating additional damage.

Our technicians carry replacement cables for a wide range of door sizes and weights. We replace cables in matched pairs — if one cable fails, the other is typically at the same stage of wear. We also inspect the cable drums, which the cables wrap around, and replace them if worn.

After cable replacement, we inspect the entire door system: springs, rollers, hinges, and tracks. A cable failure often indicates other components are also under stress. A complete checkup ensures you won't be calling us again in a few weeks for a related problem.

Sometimes repair isn't enough — if your garage door is beyond fixing, we'll give you an honest assessment and a fair quote for a new one.`,
    features: [
      { icon: "🔩", title: "Same-Day Cable Replacement", desc: "Most cable repairs completed same day with parts from our truck." },
      { icon: "🔍", title: "Full System Inspection", desc: "We inspect springs, drums, rollers, and tracks after every cable repair." },
      { icon: "⚖️", title: "Paired Replacement", desc: "We replace both cables at the same time — they wear together." },
    ],
    howItWorks: [
      "Call us — a broken cable often means your door is stuck or off-track. We prioritize these calls.",
      "Technician arrives and assesses cable damage and any secondary issues.",
      "Upfront quote provided — cables and drums replaced as needed.",
      "Door re-aligned on tracks, balanced, and tested for safe operation.",
    ],
    pricingRange: "$100–$250 for most cable repairs",
    pricingNote: "Cable replacement (pair): $100–$200 | Cable + drum replacement: $150–$280 | Off-track realignment included in cable repair when applicable.",
    faqs: [
      { q: "Can I operate my garage door with a broken cable?", a: "No. Operating a door with a broken cable is dangerous. The door can drop suddenly or go further off-track, causing injury or more damage." },
      { q: "Why do garage door cables snap?", a: "Cables weaken over years of use. Rust, fraying from misaligned drums, or the shock of a spring break are the most common causes." },
      { q: "Will you re-align my door if it went off-track when the cable broke?", a: "Yes. Off-track realignment is included in our cable repair service when the cable failure caused the track issue." },
    ],
    relatedSlugs: ["garage-door-repair", "garage-door-spring-repair", "garage-door-panel-repair"],
  },

  {
    slug: "garage-door-panel-repair",
    title: "Garage Door Panel Repair",
    metaTitle: "Garage Door Panel Repair & Replacement | Real Gate & Garage Door",
    metaDescription: "Dented or damaged garage door panel? We repair and replace panels in San Fernando Valley. Matching panels available. (818) 915-5715.",
    primaryKeyword: "garage door panel repair",
    heroH1: "Garage Door Panel Repair & Replacement",
    heroSubtitle: "Dented or cracked panel making your garage door look bad? We repair and replace panels — matching your door's style and color.",
    heroImg: "/images/services/garage-door-repair.jpg",
    isInstallation: false,
    intro: `Dented, cracked, or warped garage door panels are more than an eyesore. Structural panel damage can affect the door's balance, cause gaps that reduce insulation, and put stress on the surrounding sections. Real Gate & Garage Door repairs and replaces garage door panels throughout the San Fernando Valley.

Most panel damage comes from vehicle impacts — backing into the door accidentally is more common than you might think. Minor dents can sometimes be repaired without replacement using dent-pulling techniques. Moderate to severe damage typically requires panel replacement to restore proper alignment and function.

When replacing a panel, matching the existing door is the goal. We work with all major garage door manufacturers — Clopay, Wayne Dalton, Amarr, Overhead Door, Raynor — to source matching panels when available. For older doors where matching panels are discontinued, we'll present you with options including partial or full door replacement.

In addition to panels, we also repair and replace garage door tracks, rollers, hinges, and weatherstripping as part of the panel repair process. A complete repair addresses all components affected by the impact.

Sometimes repair isn't enough — if your garage door is beyond fixing, we'll give you an honest assessment and a fair quote for a new one.`,
    features: [
      { icon: "🪟", title: "Panel Matching", desc: "We source matching panels from all major manufacturers — Clopay, Wayne Dalton, Amarr." },
      { icon: "🔧", title: "Dent Repair", desc: "Minor dents repaired in-place without panel replacement when possible." },
      { icon: "📐", title: "Complete Restoration", desc: "Tracks, rollers, and hinges checked and replaced as needed after panel impact." },
    ],
    howItWorks: [
      "Call or send us a photo — we can often give you an estimate over the phone.",
      "Technician assesses panel damage and checks surrounding structure.",
      "We source a matching panel and schedule installation.",
      "Panel installed, door balanced, all hardware checked.",
    ],
    pricingRange: "$150–$400 per panel",
    pricingNote: "Pricing varies by panel size, material (steel, aluminum, wood), and availability of matching sections from manufacturer.",
    faqs: [
      { q: "Can a dented garage door panel be repaired without replacement?", a: "Small to moderate dents on steel panels can sometimes be repaired with specialized dent tools. Larger impacts, cracks, or warped panels typically need replacement." },
      { q: "What if my door model is discontinued and matching panels aren't available?", a: "We'll present your options honestly: a close-match panel, a mixed set that looks similar, or a full door replacement if the mismatch would be too visible." },
      { q: "Is it better to replace one panel or the whole door?", a: "If the door is under 10 years old and in otherwise good condition, a single panel replacement is almost always the better value." },
    ],
    relatedSlugs: ["garage-door-repair", "garage-door-cable-repair", "garage-door-installation"],
  },

  {
    slug: "emergency-garage-door-repair",
    title: "Emergency Garage Door Repair",
    metaTitle: "Emergency Garage Door Repair — 24/7 Same Day | Real Gate & Garage Door",
    metaDescription: "24/7 emergency garage door repair in San Fernando Valley. Stuck door, broken spring, snapped cable — we respond in 1-2 hours. (818) 915-5715.",
    primaryKeyword: "emergency garage door repair",
    heroH1: "24/7 Emergency Garage Door Repair — San Fernando Valley",
    heroSubtitle: "Garage door stuck? Emergency situation? Call now — we dispatch a technician within the hour.",
    heroImg: "/images/hero/hero-emergency.jpg",
    isInstallation: false,
    isEmergency: true,
    intro: `Garage door emergencies don't follow business hours. A door stuck in the open position at midnight is a security crisis. A door that traps your car inside when you need to leave for work is a real emergency. Real Gate & Garage Door provides 24/7 emergency garage door repair throughout the San Fernando Valley — with a goal of reaching you within 1–2 hours of your call.

Emergency calls are dispatched as priority. When you call our emergency line at (818) 915-5715, you reach a live person — not voicemail. They'll take your information, dispatch the nearest available technician, and give you an accurate ETA.

The most common garage door emergencies we handle: broken torsion springs (door can't open), snapped cables (door dropped or went off-track), door stuck open (security risk — we treat these as urgent), opener failure (door won't respond at all), door off track (bounced off the track after a hit or cable failure), and storm or vehicle damage.

Our emergency trucks are stocked with common springs, cables, and opener parts. Most emergency repairs are resolved in the same visit — we don't leave you with a temporary fix and promise to come back.

After-hours service is available seven days a week, including holidays. Emergency service rates apply for calls outside normal business hours (7 AM – 8 PM), and you'll be told the rate before the technician is dispatched.

Sometimes repair isn't enough — if your garage door is beyond fixing, we'll give you an honest assessment and a fair quote for a new one.`,
    features: [
      { icon: "🚨", title: "24/7 Response", desc: "Emergency line staffed around the clock — you reach a live person, not voicemail." },
      { icon: "⚡", title: "1–2 Hour Arrival", desc: "Emergency technicians dispatched immediately, goal of arriving within 1–2 hours." },
      { icon: "🔧", title: "Parts on Board", desc: "Emergency trucks stocked for same-visit resolution — no 'we'll come back with the part.'" },
    ],
    howItWorks: [
      "Call (818) 915-5715 — our emergency line is answered live, 24/7.",
      "Describe the situation — we'll give you initial safety instructions and an ETA.",
      "Technician arrives fully equipped for the most common emergency repairs.",
      "Problem resolved or door made safe, with a full repair follow-up if needed.",
    ],
    pricingRange: "Standard repair rates + after-hours fee for calls outside 7 AM–8 PM",
    pricingNote: "After-hours fee: $75–$125 applied to calls between 8 PM and 7 AM. You'll be informed before dispatch.",
    faqs: [
      { q: "Is your 24/7 emergency line actually answered by a person?", a: "Yes. When you call (818) 915-5715 after hours, a live dispatcher answers. No voicemail for emergency calls." },
      { q: "How fast can you reach me in an emergency?", a: "Our target for emergency calls is 1–2 hours. In most San Fernando Valley locations, we achieve this consistently." },
      { q: "My garage door is stuck open at night — is that a real emergency?", a: "Absolutely. A garage door stuck open overnight is a serious security risk. Call our emergency line immediately." },
      { q: "Do you charge extra for after-hours emergency calls?", a: "Yes — an after-hours fee of $75–$125 applies for calls outside 7 AM–8 PM. You'll be quoted this before we dispatch." },
    ],
    relatedSlugs: ["garage-door-repair", "garage-door-spring-repair", "garage-door-cable-repair"],
  },

  {
    slug: "commercial-garage-door",
    title: "Commercial Garage Door Repair",
    metaTitle: "Commercial Garage Door Repair & Installation | Real Gate & Garage Door",
    metaDescription: "Commercial garage door repair in San Fernando Valley. Roll-up doors, sectional doors, high-cycle systems — same-day service. (818) 915-5715.",
    primaryKeyword: "commercial garage door repair",
    heroH1: "Commercial Garage Door Repair — San Fernando Valley",
    heroSubtitle: "Commercial doors work harder. When they fail, downtime costs you money. We prioritize commercial repair calls.",
    heroImg: "/images/services/commercial-garage-door.jpg",
    isInstallation: false,
    intro: `Commercial garage doors handle far more daily cycles than residential doors — and when they fail, the impact on your operations can be immediate. Real Gate & Garage Door provides priority commercial garage door repair throughout the San Fernando Valley, with technicians equipped for high-cycle commercial door systems.

We repair all types of commercial garage doors: sectional commercial doors, rolling steel doors (roll-up), fire-rated doors, high-speed doors, and dock leveler systems. We service all major commercial door brands including Wayne Dalton, Clopay, Overhead Door, Cornell, and Cookson.

Commercial springs are heavier gauge and higher cycle than residential springs. Commercial openers are commercial-duty units rated for continuous operation. Our commercial technicians carry the right parts for these systems — not residential parts that will fail quickly under commercial use.

We also offer commercial maintenance programs that include scheduled service visits, priority response times, lubricant and adjustment service, and detailed service reports. Proactive maintenance prevents the emergency breakdowns that cost businesses the most.

For warehouse and industrial facilities, we maintain service agreements that include same-day emergency response and 24/7 availability.

Sometimes repair isn't enough — if your commercial door is beyond fixing, we'll give you an honest assessment and a fair quote for a new one.`,
    features: [
      { icon: "🏢", title: "Commercial-Grade Parts", desc: "Heavy-gauge springs, commercial operators, and industrial hardware — not residential substitutes." },
      { icon: "⚡", title: "Priority Scheduling", desc: "Commercial repair calls are given scheduling priority over residential calls." },
      { icon: "📋", title: "Maintenance Contracts", desc: "Scheduled service programs to prevent emergencies and extend door life." },
    ],
    howItWorks: [
      "Call our commercial line — mention your business type and door description.",
      "Technician dispatched with commercial-grade parts.",
      "Full commercial door diagnostic: springs, cables, operators, tracks, and safety systems.",
      "Repair completed, door tested under full commercial load, service report provided.",
    ],
    pricingRange: "$200–$1,500+ for commercial door repairs",
    pricingNote: "Commercial spring replacement: $300–$600 | Commercial operator repair: $350–$800 | Roll-up door service: $200–$500. Contact us for commercial maintenance contract pricing.",
    faqs: [
      { q: "Do you service roll-up steel doors?", a: "Yes. We service and repair rolling steel doors including spring, barrel, slat, and motor replacement." },
      { q: "Can you service our fire-rated commercial doors?", a: "Yes. We inspect, repair, and certify fire-rated door compliance — an important safety and insurance requirement." },
      { q: "Do you offer 24/7 commercial emergency service?", a: "Yes. Commercial emergency service is available 24/7. After-hours rates apply." },
    ],
    relatedSlugs: ["garage-door-repair", "garage-door-opener-repair", "commercial-gate-repair"],
  },

  {
    slug: "garage-door-installation",
    title: "Garage Door Installation",
    metaTitle: "Garage Door Installation San Fernando Valley | Real Gate & Garage Door",
    metaDescription: "New garage door installation in San Fernando Valley. All brands, all styles, free estimates. Licensed & insured. Call (818) 915-5715.",
    primaryKeyword: "garage door installation",
    heroH1: "Garage Door Installation — San Fernando Valley",
    heroSubtitle: "Ready for a new garage door? We install all brands and styles — steel, wood, aluminum, glass — with a warranty on every installation.",
    heroImg: "/images/services/garage-door-installation.jpg",
    isInstallation: true,
    intro: `Sometimes a garage door can't be repaired — it's too old, too damaged, or simply worn out. When that time comes, Real Gate & Garage Door installs high-quality replacement garage doors throughout the San Fernando Valley. We carry doors from Clopay, Wayne Dalton, Amarr, and Overhead Door — a full range of styles, materials, and price points.

Our installation process starts with a free in-home estimate. We measure your opening, discuss your style preferences (raised panel, carriage house, contemporary), material options (steel, wood, wood-composite, aluminum, glass), and insulation requirements. We'll help you make the best choice for your budget and your home's curb appeal.

We also evaluate your existing opener. If it's in good shape, we'll reuse it with your new door. If it's outdated or incompatible, we'll recommend an upgrade. We install LiftMaster, Genie, and Chamberlain openers and can add smartphone control (myQ, Aladdin Connect) to any new installation.

All installations come with a workmanship warranty and manufacturer warranty on the door and hardware. We dispose of your old door and clean up completely before we leave.

Considering a new door? If your current door can be repaired at a reasonable cost, we'll tell you honestly. Visit our [Garage Door Repair](/services/garage-door-repair) page first — repair is almost always cheaper and faster than replacement.`,
    features: [
      { icon: "🎨", title: "All Styles & Materials", desc: "Steel, wood, aluminum, glass — raised panel, carriage house, contemporary, and more." },
      { icon: "🔧", title: "Opener Included", desc: "We assess and replace or reuse your existing opener as part of every installation." },
      { icon: "⭐", title: "Workmanship Warranty", desc: "Every installation backed by our workmanship warranty." },
    ],
    howItWorks: [
      "Contact us for a free in-home measurement and consultation.",
      "We present options in your price range — door style, material, and opener.",
      "We order, deliver, and schedule your installation (typically 3–7 business days).",
      "Door installed in one day, opener programmed, old door hauled away.",
    ],
    pricingRange: "$800–$2,500 for most residential garage door installations",
    pricingNote: "Basic steel door + install: $800–$1,200 | Insulated steel door + install: $1,000–$1,600 | Wood carriage house + install: $1,500–$2,500 | Opener upgrade (add-on): $250–$500",
    faqs: [
      { q: "How long does garage door installation take?", a: "Most residential garage door installations are completed in 3–5 hours, including removing the old door." },
      { q: "Can you reuse my existing opener with a new door?", a: "In most cases, yes. We evaluate compatibility with your new door's weight and size and advise if an upgrade is needed." },
      { q: "What brands of garage doors do you install?", a: "We install Clopay, Wayne Dalton, Amarr, and Overhead Door — offering a wide range of styles and budgets." },
    ],
    relatedSlugs: ["garage-door-repair", "garage-door-opener-repair", "garage-door-spring-repair"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getGateServices(): ServiceData[] {
  return SERVICES.filter((s) =>
    ["gate-repair", "automatic-gate-repair", "driveway-gate-repair", "electric-gate-repair", "gate-opener-repair", "iron-gate-repair", "commercial-gate-repair", "gate-installation"].includes(s.slug)
  );
}

export function getGarageDoorServices(): ServiceData[] {
  return SERVICES.filter((s) =>
    ["garage-door-repair", "garage-door-spring-repair", "garage-door-opener-repair", "garage-door-cable-repair", "garage-door-panel-repair", "emergency-garage-door-repair", "commercial-garage-door", "garage-door-installation"].includes(s.slug)
  );
}
