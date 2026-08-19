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
  symptoms: string[];
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
  isInstallation: boolean;
  isEmergency?: boolean;
}

export const SERVICES: ServiceData[] = [
  {
    slug: "gate-repair",
    title: "Gate Repair",
    metaTitle: "Gate Repair Los Angeles CA — Same-Day Service | Real Gate & Garage Door",
    metaDescription: "Expert gate repair. Same-day service for broken gates, gate motors, hinges, sensors & more. Bonded & insured. Call (818) 915-5715.",
    primaryKeyword: "gate repair near me",
    heroH1: "Gate Repair in Los Angeles — Same-Day Service",
    heroSubtitle: "From broken motors to bent tracks, our certified technicians fix all types of gates fast. Most repairs completed same day.",
    heroImg: "/images/services/gate-repair.jpg",
    isInstallation: false,
    intro: `When your gate stops working, every hour it's down is a security risk. We specialize in gate repair across Los Angeles, with most calls handled same-day — technicians arrive stocked with parts for the most common repairs, working on all gate types and major brands including LiftMaster, Viking, All-O-Matic, DoorKing, and Elite.

You'll get a clear quote before we touch anything — no surprise charges. If a gate is truly beyond repair, we'll say so and quote a fair replacement instead.`,
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
    symptoms: [
      "Gate won't open or close all the way",
      "Gate makes grinding or screeching noises",
      "Remote or keypad stopped responding",
      "Gate is dragging or scraping the ground",
      "Gate reverses or stops mid-cycle",
    ],
    faqs: [
      { q: "How fast can you get here for a gate repair?", a: "For most locations, we can have a technician on-site same day. Emergency calls are handled within 1–2 hours." },
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
    metaTitle: "Automatic Gate Repair Los Angeles CA — Fast & Reliable | Real Gate & Garage Door",
    metaDescription: "Automatic gate not opening? Our technicians fix gate operators, sensors, remotes & circuit boards. Same-day service. Call (818) 915-5715.",
    primaryKeyword: "automatic gate repair near me",
    heroH1: "Automatic Gate Repair in Los Angeles",
    heroSubtitle: "Your automatic gate is supposed to make life easier. When it stops working, we get it running again — usually the same day.",
    heroImg: "/images/services/automatic-gate.jpg",
    isInstallation: false,
    intro: `An automatic gate that won't open leaves you locked out; one that won't close leaves you exposed. We provide automatic gate repair across Los Angeles, with same-day service for most calls — carrying circuit boards, drive gears, limit switches, and sensors on the truck for one-visit repairs.

Whether your gate swings, slides, or folds, runs on AC or solar, we have the tools and experience to fix it right the first time.`,
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
    symptoms: [
      "Gate doesn't respond to the remote or keypad",
      "Gate opens but won't close (or vice versa)",
      "Gate moves slowly or hesitates mid-cycle",
      "Motor hums but the gate doesn't move",
      "Gate stopped working after a power outage",
    ],
    faqs: [
      { q: "Why won't my automatic gate open with the remote?", a: "Common causes include dead batteries in the remote, a bad receiver board in the operator, or a power issue. Our technician will diagnose it in minutes." },
      { q: "My gate opens but won't close — what's wrong?", a: "Usually a sensor issue — a photocell or safety loop is triggered and won't let the gate close. We'll check and clear the obstruction or replace the sensor." },
      { q: "Can you repair automatic gates on weekends?", a: "Yes. We provide service 7 days a week in our service area." },
      { q: "How long does an automatic gate repair take?", a: "Most repairs take 1–2 hours once the technician arrives. Complex motor or board replacements may take up to 3 hours." },
      { q: "What automatic gate brands do you service?", a: "LiftMaster, Viking, FAAC, All-O-Matic, Elite, Linear, DoorKing, Ramset, and many more." },
    ],
    relatedSlugs: ["gate-repair", "gate-opener-repair", "electric-gate-repair"],
  },

  {
    slug: "driveway-gate-repair",
    title: "Driveway Gate Repair",
    metaTitle: "Driveway Gate Repair Los Angeles CA | Real Gate & Garage Door",
    metaDescription: "Driveway gate repair throughout. Swing gates, sliding gates, openers & more. Same-day service available. Bonded & insured. (818) 915-5715.",
    primaryKeyword: "driveway gate repair",
    heroH1: "Driveway Gate Repair in Los Angeles",
    heroSubtitle: "Is your driveway gate dragging, misaligned, or refusing to open? We diagnose and repair all driveway gate issues — fast.",
    heroImg: "/images/services/driveway-gate.jpg",
    isInstallation: false,
    intro: `A broken driveway gate is a daily obstacle and a security gap. We repair driveway gates of every type — sliding, swing, bi-fold, cantilever — across Los Angeles, inspecting the full structure first so we fix the root cause, not just the symptom.

We work with iron, aluminum, wood, and composite gates and can retrofit an old but sound gate with a newer, more reliable operator.`,
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
    symptoms: [
      "Gate drags or scrapes the ground",
      "Swing gate hinges are sagging",
      "Sliding gate wheels or track are damaged",
      "Opener motor won't engage",
      "Gate looks fine but won't stay aligned",
    ],
    faqs: [
      { q: "My driveway gate is scraping the ground — what causes this?", a: "Usually sagging hinges (swing gates) or worn/broken drive wheels (sliding gates). Both are repairable and we see this frequently." },
      { q: "Can you repair old iron driveway gates?", a: "Yes. We repair iron gate frames, hinges, and posts, and can replace or upgrade your gate operator to modernize the system." },
      { q: "How long does a driveway gate repair take?", a: "Most repairs are completed within 1.5–3 hours, depending on the issue." },
      { q: "What areas do you cover?", a: "We cover the entire including Woodland Hills, Calabasas, Encino, Sherman Oaks, Chatsworth, and all surrounding communities." },
    ],
    relatedSlugs: ["gate-repair", "electric-gate-repair", "iron-gate-repair"],
  },

  {
    slug: "electric-gate-repair",
    title: "Electric Gate Repair",
    metaTitle: "Electric Gate Repair Los Angeles CA | Real Gate & Garage Door",
    metaDescription: "Electric gate repair. Motor failure, control board, wiring, sensors — we fix it all same day. Insured technicians. (818) 915-5715.",
    primaryKeyword: "electric gate repair",
    heroH1: "Electric Gate Repair in Los Angeles",
    heroSubtitle: "Electric gate not responding? We diagnose and repair all electric gate systems — motors, wiring, control boards, and sensors.",
    heroImg: "/images/services/gate-repair.jpg",
    isInstallation: false,
    intro: `Electric gate faults can hide anywhere in the chain — power supply, transformer, control board, motor, wiring, or sensors. We use professional diagnostic equipment to pinpoint the fault fast instead of swapping parts at random.

We service all major electric gate brands — LiftMaster, Viking, FAAC, All-O-Matic, Elite, Linear, DoorKing — residential or commercial, single- or three-phase.`,
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
    symptoms: [
      "Gate doesn't respond to remote or keypad",
      "Gate runs in one direction only",
      "Gate stops mid-cycle for no reason",
      "Gate works sometimes, not others",
      "Gate trips the breaker when running",
    ],
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
    metaTitle: "Gate Opener Repair Los Angeles CA — LiftMaster & All Brands | Real Gate & Garage Door",
    metaDescription: "Gate opener repair. LiftMaster, Viking, All-O-Matic, DoorKing & all brands. Same-day service. Fully insured. Call (818) 915-5715.",
    primaryKeyword: "gate opener repair",
    heroH1: "Gate Opener Repair in Los Angeles — All Brands, Same Day",
    heroSubtitle: "Your gate opener is the engine of your system. When it fails, we repair or replace it fast with parts on our truck.",
    heroImg: "/images/services/gate-opener-repair.jpg",
    isInstallation: false,
    intro: `The gate opener is the engine of your system — when it fails, the whole gate fails. We repair and replace gate openers across Los Angeles with same-day service and a full inventory of common parts: circuit boards, drive gears, clutch assemblies, and motors.

Before recommending replacement, we always check whether repair is viable — a board swap is typically far cheaper than a new operator, and we'll tell you honestly which makes sense for your unit.`,
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
    symptoms: [
      "Opener clicks but the gate doesn't move",
      "Opener runs constantly or won't shut off",
      "Gate opens partway then stops",
      "Opener makes grinding or clicking noises",
      "Opener is over 10 years old and failing often",
    ],
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
    metaTitle: "Iron & Wrought Iron Gate Repair Los Angeles CA | Real Gate & Garage Door",
    metaDescription: "Iron and wrought iron gate repair. Rust, welding, hinges, panels — same-day service. Bonded & insured. Call (818) 915-5715.",
    primaryKeyword: "iron gate repair",
    heroH1: "Iron & Wrought Iron Gate Repair in Los Angeles",
    heroSubtitle: "From rust and corrosion to structural damage and broken hinges, we restore iron gates to full function and appearance.",
    heroImg: "/images/services/iron-gate.jpg",
    isInstallation: false,
    intro: `Iron and wrought iron gates are built to last, but rust, impact damage, and worn welds can turn a minor fix into a costly replacement if ignored. We handle rust treatment, structural welding, hinge replacement, and track repair for sliding iron gates across Los Angeles.

Many iron gates here are decades old and worth preserving — a skilled repair is almost always cheaper than a new custom gate, and we'll give you an honest read on which makes sense for yours.`,
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
    symptoms: [
      "Visible rust or corrosion on the frame",
      "Gate sags or drags on one side",
      "Hinges are worn, bent, or squeaking",
      "Welds or joints are cracking",
      "Paint or finish is peeling and metal is exposed",
    ],
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
    metaTitle: "Commercial Gate Repair Los Angeles CA | Real Gate & Garage Door",
    metaDescription: "Commercial gate repair. Parking gates, security gates, high-cycle operators — fast response, fully insured. Call (818) 915-5715.",
    primaryKeyword: "commercial gate repair",
    heroH1: "Commercial Gate Repair in Los Angeles",
    heroSubtitle: "Downtime on a commercial gate costs you money and security. We provide priority same-day service for businesses in our area.",
    heroImg: "/images/services/commercial-gate.jpg",
    isInstallation: false,
    intro: `A broken commercial gate is a security breach and a liability. We provide priority commercial gate repair across Los Angeles — sliding security gates, swing arms, barrier arms, vertical lifts — for delivery traffic and 24/7 operation demands.

We service LiftMaster, Viking, FAAC, All-O-Matic, DoorKing, and Ramset commercial operators, plus access control integration, and offer maintenance contracts for property managers and HOAs.`,
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
    symptoms: [
      "Gate cycles slower than usual under daily traffic",
      "Access control (keypad/card reader) isn't triggering the gate",
      "Gate doesn't fully close, leaving a security gap",
      "Barrier arm won't raise or lower",
      "Frequent breakdowns under heavy daily use",
    ],
    faqs: [
      { q: "Do you service commercial properties after hours?", a: "Yes. We provide 24/7 emergency service for commercial clients. After-hours rates apply for calls between 8 PM and 7 AM." },
      { q: "Can you repair parking lot barrier arms?", a: "Yes. We repair and replace all major parking barrier arm brands including FAAC, BFT, DoorKing, and others." },
      { q: "Do you offer commercial gate maintenance contracts?", a: "Yes. Our maintenance contracts include quarterly service visits, priority emergency response, and parts discounts. Contact us for commercial pricing." },
    ],
    relatedSlugs: ["gate-repair", "electric-gate-repair", "commercial-garage-door"],
  },

  {
    slug: "emergency-gate-repair",
    title: "Emergency Gate Repair",
    metaTitle: "Emergency Gate Repair Los Angeles CA — 24/7 Same Day | Real Gate & Garage Door",
    metaDescription: "Gate stuck open or won't close? 24/7 emergency gate repair. We respond in 1-2 hours. Call (818) 915-5715.",
    primaryKeyword: "emergency gate repair",
    heroH1: "24/7 Emergency Gate Repair in Los Angeles",
    heroSubtitle: "Gate stuck open or won't close? That's a security risk. Call now — we dispatch a technician within 1–2 hours.",
    heroImg: "/images/services/emergency-gate.jpg",
    isInstallation: false,
    isEmergency: true,
    intro: `A gate stuck open is an open invitation. A gate stuck shut can trap a car inside. We provide 24/7 emergency gate repair across Los Angeles, aiming to reach you within 1-2 hours — and you'll reach a live person, not voicemail.

Our emergency trucks stock the most common motors, boards, and sensors, so most emergency calls are resolved in a single visit.`,
    features: [
      { icon: "🚨", title: "24/7 Response", desc: "Emergency line staffed around the clock — you reach a live person, not voicemail." },
      { icon: "⚡", title: "1–2 Hour Arrival", desc: "Emergency technicians dispatched immediately, goal of arriving within 1–2 hours." },
      { icon: "🔧", title: "Parts on Board", desc: "Emergency trucks stocked for same-visit resolution — no 'we'll come back with the part.'" },
    ],
    howItWorks: [
      "Call (818) 915-5715 — our emergency line is answered live, 24/7.",
      "Describe the situation — we'll give you safety instructions and an ETA.",
      "Technician arrives fully equipped for the most common gate emergencies.",
      "Gate secured or fully repaired, with a follow-up visit scheduled if a part needs ordering.",
    ],
    pricingRange: "Standard repair rates + after-hours fee for calls outside 7 AM–8 PM",
    pricingNote: "After-hours fee: $75–$125 applied to calls between 8 PM and 7 AM. You'll be informed before dispatch.",
    symptoms: [
      "Gate stuck open — security risk",
      "Gate stuck closed — car trapped inside or out",
      "Gate came off its track or hinges after an impact",
      "Motor smoking, sparking, or making grinding noises",
      "Gate won't respond to remote, keypad, or manual release",
    ],
    faqs: [
      { q: "Is your 24/7 emergency line actually answered by a person?", a: "Yes. When you call (818) 915-5715 after hours, a live dispatcher answers. No voicemail for emergency calls." },
      { q: "How fast can you reach me in a gate emergency?", a: "Our target for emergency calls is 1–2 hours. In most locations, we achieve this consistently." },
      { q: "My gate is stuck open overnight — is that a real emergency?", a: "Absolutely. A gate stuck open is a serious security risk. Call our emergency line immediately." },
      { q: "Do you charge extra for after-hours emergency calls?", a: "Yes — an after-hours fee of $75–$125 applies for calls outside 7 AM–8 PM. You'll be quoted this before we dispatch." },
    ],
    relatedSlugs: ["gate-repair", "automatic-gate-repair", "gate-opener-repair"],
  },

  {
    slug: "gate-installation",
    title: "Gate Installation",
    metaTitle: "Gate Installation Los Angeles CA | Real Gate & Garage Door",
    metaDescription: "Professional gate installation. Automatic, driveway, iron, and security gates. Free estimates. Bonded & insured. (818) 915-5715.",
    primaryKeyword: "gate installation near me",
    heroH1: "Gate Installation in Los Angeles",
    heroSubtitle: "Ready for a new gate? We'll help you choose the right system and install it to last.",
    heroImg: "/images/services/gate-installation.jpg",
    isInstallation: true,
    intro: `Thinking about a new gate? We install driveway, automatic, iron, and commercial security gates across Los Angeles, starting with a free on-site assessment of your driveway, security goals, and budget.

We handle permit coordination and work with iron, aluminum, wood, and vinyl. If your current gate can be repaired reliably instead, we'll tell you honestly — repair is almost always faster and cheaper.`,
    features: [
      { icon: "📐", title: "Free Site Assessment", desc: "We evaluate your property and recommend the right gate type, material, and operator." },
      { icon: "📋", title: "Permit Handling", desc: "We coordinate permits for new gate installations cities." },
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
    symptoms: [
      "Your gate breaks down every few months",
      "Repairs keep costing more than they're worth",
      "Gate no longer matches your property's security needs",
      "You're renovating the driveway or entrance",
      "No existing gate — starting from scratch",
    ],
    faqs: [
      { q: "How long does gate installation take?", a: "A typical residential automatic gate installation takes 1–2 days depending on the gate type, concrete work required, and operator complexity." },
      { q: "Do I need a permit for a new gate?", a: "Generally yes. Permit requirements vary by city within our service area. We handle the permit process for all our installations." },
      { q: "Can I choose my gate material and style?", a: "Absolutely. We work with iron, aluminum, wood, and vinyl gates. We'll show you samples and help you select the style that fits your property." },
    ],
    relatedSlugs: ["gate-repair", "automatic-gate-repair", "iron-gate-repair"],
  },

  {
    slug: "garage-door-repair",
    title: "Garage Door Repair",
    metaTitle: "Garage Door Repair Los Angeles CA | Real Gate & Garage Door",
    metaDescription: "Expert garage door repair. Springs, openers, cables, panels — same-day service. Bonded & insured. Call (818) 915-5715.",
    primaryKeyword: "garage door repair",
    heroH1: "Garage Door Repair in Los Angeles",
    heroSubtitle: "From broken springs to jammed tracks, our insured technicians fix garage doors fast — usually same day.",
    heroImg: "/images/hero/hero-garage-door.jpg",
    isInstallation: false,
    intro: `A broken garage door is a security risk and a major inconvenience. We repair all garage door brands and opener systems across Los Angeles — springs, cables, panels, tracks — with technicians stocked for same-day fixes.

You'll get an upfront price before we start, and we'll always tell you honestly if repair no longer makes sense versus replacement.`,
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
    symptoms: [
      "Door won't open or close all the way",
      "Loud bang followed by the door not moving",
      "Door is off-track or crooked",
      "Opener runs but the door doesn't move",
      "Door is unusually heavy to lift manually",
    ],
    faqs: [
      { q: "How quickly can you get to me for a garage door repair?", a: "Same-day service is available in our service area. For emergencies, we aim to arrive within 1–2 hours." },
      { q: "Is it safe to operate my garage door if a spring is broken?", a: "No. A garage door with a broken spring is dangerous and can fall unexpectedly. Don't use the door until the spring is replaced." },
      { q: "My garage door is making a loud bang — what happened?", a: "A loud bang usually means a torsion spring snapped. This is one of the most common garage door failures. Call us for same-day spring replacement." },
      { q: "Do you repair all brands of garage doors?", a: "Yes. We repair all major brands including Clopay, Wayne Dalton, Amarr, Overhead Door, and others." },
    ],
    relatedSlugs: ["garage-door-spring-repair", "garage-door-opener-repair", "garage-door-cable-repair"],
  },

  {
    slug: "garage-door-spring-repair",
    title: "Garage Door Spring Repair",
    metaTitle: "Garage Door Spring Repair & Replacement Los Angeles CA | Real Gate & Garage Door",
    metaDescription: "Broken garage door spring? We replace torsion and extension springs same day. Upfront pricing. Fully insured. Call (818) 915-5715.",
    primaryKeyword: "garage door spring replacement",
    heroH1: "Garage Door Spring Repair & Replacement in Los Angeles",
    heroSubtitle: "Broken spring? We carry springs for virtually every garage door on the truck — most replacements done in under 90 minutes.",
    heroImg: "/images/services/garage-door-spring-repair.jpg",
    isInstallation: false,
    intro: `A broken garage door spring is the most common failure we see — and the most dangerous to ignore. We carry torsion and extension springs in a full range of sizes and tension ratings for same-day replacement.

We don't just swap the spring — we balance the door and test it to spec, and recommend replacing both springs on a dual-spring system since the second is usually close behind.`,
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
    symptoms: [
      "Loud bang from the garage followed by a stuck door",
      "Door feels extremely heavy to lift",
      "Door opens a few inches then stops",
      "Visible gap in the coiled spring above the door",
      "Door slams shut instead of closing smoothly",
    ],
    faqs: [
      { q: "How long do garage door springs last?", a: "Standard springs are rated for 10,000 cycles (about 7–10 years of average use). High-cycle springs rated at 30,000 cycles are available and cost modestly more — a worthwhile upgrade." },
      { q: "Can I replace a garage door spring myself?", a: "We strongly advise against it. Torsion springs store massive amounts of energy and can cause serious injury if mishandled. Leave spring replacement to insured technicians." },
      { q: "Why did my spring break?", a: "Springs break due to metal fatigue from repeated cycling. Factors that accelerate wear include lack of lubrication, temperature extremes, and using low-quality springs. High-cycle springs help address this." },
      { q: "Should I replace one spring or both?", a: "If you have a dual-spring torsion system, we recommend replacing both springs at the same time. If one broke, the other is at similar risk. Replacing both now is cheaper than a second service call soon." },
      { q: "How much does garage door spring replacement cost?", a: "Most spring replacements cost $150–$350. You'll receive an exact quote before work starts." },
    ],
    relatedSlugs: ["garage-door-repair", "garage-door-cable-repair", "garage-door-opener-repair"],
  },

  {
    slug: "garage-door-opener-repair",
    title: "Garage Door Opener Repair",
    metaTitle: "Garage Door Opener Repair Los Angeles CA — LiftMaster, Genie & More | Real Gate & Garage Door",
    metaDescription: "Garage door opener repair. LiftMaster, Genie, Chamberlain, Craftsman — all brands. Same-day service. Call (818) 915-5715.",
    primaryKeyword: "garage door opener repair",
    heroH1: "Garage Door Opener Repair in Los Angeles — All Brands",
    heroSubtitle: "Is your garage door opener refusing to work? We diagnose and repair all major brands — LiftMaster, Genie, Chamberlain, Craftsman — same day.",
    heroImg: "/images/services/garage-door-opener-repair.jpg",
    isInstallation: false,
    intro: `A garage door opener that won't respond can trap your car or expose your home. We repair LiftMaster, Genie, Chamberlain, Craftsman, and other major brands across Los Angeles, diagnosing the actual cause before recommending any fix.

For openers too old or unsafe to service, we install new units same-day, including WiFi-enabled smart openers with smartphone control.`,
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
    symptoms: [
      "Remote doesn't respond but wall button works",
      "Opener runs but the door doesn't move",
      "Door reverses before touching the floor",
      "Opener makes noise but nothing happens",
      "Lights on opener blink with no door movement",
    ],
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
    metaTitle: "Garage Door Cable Repair & Replacement Los Angeles CA | Real Gate & Garage Door",
    metaDescription: "Garage door cable snapped? We repair and replace broken cables same day. Bonded & insured. Call (818) 915-5715.",
    primaryKeyword: "garage door cable repair",
    heroH1: "Garage Door Cable Repair in Los Angeles",
    heroSubtitle: "A snapped garage door cable can cause the door to drop suddenly. Don't risk it — call for same-day cable repair.",
    heroImg: "/images/services/garage-door-repair.webp",
    isInstallation: false,
    intro: `A snapped or frayed garage door cable can drop the door suddenly or send it off-track. We provide fast, same-day cable repair across Los Angeles, replacing cables in matched pairs and inspecting the drums they wrap around.

After every cable repair we check the full system — springs, rollers, hinges, and tracks — since a cable failure often signals stress elsewhere.`,
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
    symptoms: [
      "Door hangs crooked on one side",
      "Frayed or visibly snapped cable",
      "Door dropped suddenly when opening or closing",
      "Door came off its track",
      "Loose cable dangling near the bottom roller",
    ],
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
    metaTitle: "Garage Door Panel Repair & Replacement Los Angeles CA | Real Gate & Garage Door",
    metaDescription: "Dented or damaged garage door panel? We repair and replace panels. Matching panels available. (818) 915-5715.",
    primaryKeyword: "garage door panel repair",
    heroH1: "Garage Door Panel Repair & Replacement in Los Angeles",
    heroSubtitle: "Dented or cracked panel making your garage door look bad? We repair and replace panels — matching your door's style and color.",
    heroImg: "/images/services/garage-door-repair.webp",
    isInstallation: false,
    intro: `Dented, cracked, or warped panels affect your door's balance and insulation — usually from a vehicle impact. We repair and replace panels across Los Angeles, matching your door's existing style and color whenever possible.

For discontinued panels, we'll walk you through honest options: a close match, a mixed set, or full door replacement if the mismatch would be too visible.`,
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
    symptoms: [
      "Visible dent from a vehicle or object impact",
      "Cracked or warped section",
      "Gap between panels when the door is closed",
      "Door struggles to open smoothly after impact",
      "Rust or water damage on a lower panel",
    ],
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
    metaTitle: "Emergency Garage Door Repair Los Angeles CA — 24/7 Same Day | Real Gate & Garage Door",
    metaDescription: "24/7 emergency garage door repair. Stuck door, broken spring, snapped cable — we respond in 1-2 hours. (818) 915-5715.",
    primaryKeyword: "emergency garage door repair",
    heroH1: "24/7 Emergency Garage Door Repair in Los Angeles",
    heroSubtitle: "Garage door stuck? Emergency situation? Call now — we dispatch a technician within the hour.",
    heroImg: "/images/hero/hero-emergency.jpg",
    isInstallation: false,
    isEmergency: true,
    intro: `Garage door emergencies don't wait for business hours. We provide 24/7 emergency garage door repair across Los Angeles, aiming to reach you within 1-2 hours — and you'll reach a live person, not voicemail.

Our emergency trucks stock common springs, cables, and opener parts, so most calls are resolved in a single visit.`,
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
    symptoms: [
      "Door stuck open — security risk",
      "Car trapped inside the garage",
      "Door came off track after an impact",
      "Cable or spring snapped without warning",
      "Door won't respond to opener or manual release",
    ],
    faqs: [
      { q: "Is your 24/7 emergency line actually answered by a person?", a: "Yes. When you call (818) 915-5715 after hours, a live dispatcher answers. No voicemail for emergency calls." },
      { q: "How fast can you reach me in an emergency?", a: "Our target for emergency calls is 1–2 hours. In most locations, we achieve this consistently." },
      { q: "My garage door is stuck open at night — is that a real emergency?", a: "Absolutely. A garage door stuck open overnight is a serious security risk. Call our emergency line immediately." },
      { q: "Do you charge extra for after-hours emergency calls?", a: "Yes — an after-hours fee of $75–$125 applies for calls outside 7 AM–8 PM. You'll be quoted this before we dispatch." },
    ],
    relatedSlugs: ["garage-door-repair", "garage-door-spring-repair", "garage-door-cable-repair"],
  },

  {
    slug: "commercial-garage-door",
    title: "Commercial Garage Door Repair",
    metaTitle: "Commercial Garage Door Repair & Installation Los Angeles CA | Real Gate & Garage Door",
    metaDescription: "Commercial garage door repair. Roll-up doors, sectional doors, high-cycle systems — same-day service. (818) 915-5715.",
    primaryKeyword: "commercial garage door repair",
    heroH1: "Commercial Garage Door Repair in Los Angeles",
    heroSubtitle: "Commercial doors work harder. When they fail, downtime costs you money. We prioritize commercial repair calls.",
    heroImg: "/images/services/commercial-garage-door.jpg",
    isInstallation: false,
    intro: `Commercial doors cycle far more than residential ones, and downtime costs you money. We provide priority commercial garage door repair across Los Angeles for sectional, roll-up, fire-rated, and high-speed doors.

Our technicians carry commercial-grade springs and parts — not residential substitutes — and we offer maintenance contracts with scheduled visits and priority emergency response.`,
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
    symptoms: [
      "Door doesn't fully seal, letting in outside air",
      "Slower cycle times under daily delivery traffic",
      "Door won't stay open during loading",
      "Commercial opener straining or overheating",
      "Frequent breakdowns disrupting operations",
    ],
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
    metaTitle: "Garage Door Installation Los Angeles CA | Real Gate & Garage Door",
    metaDescription: "New garage door installation. All brands, all styles, free estimates. Bonded & insured. Call (818) 915-5715.",
    primaryKeyword: "garage door installation",
    heroH1: "Garage Door Installation in Los Angeles",
    heroSubtitle: "Ready for a new garage door? We install all brands and styles — steel, wood, aluminum, glass — with a warranty on every installation.",
    heroImg: "/images/services/garage-door-installation.jpg",
    isInstallation: true,
    intro: `When a garage door is too old or damaged to repair, we install high-quality replacements across Los Angeles — Clopay, Wayne Dalton, Amarr, Overhead Door — in a full range of styles, materials, and price points.

We evaluate your existing opener and reuse it when possible, and every installation comes with a workmanship warranty. If repair is still the better option for your door, we'll tell you honestly.`,
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
    symptoms: [
      "Door is decades old and breaking down often",
      "Repairs keep piling up and no longer make sense",
      "Storm, impact, or fire damage beyond repair",
      "Renovating and want a style or material upgrade",
      "Poor insulation driving up energy costs",
    ],
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
