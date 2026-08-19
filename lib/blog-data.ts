export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  publishDate: string;
  readTime: string;
  category: "gate" | "garage-door";
  excerpt: string;
  content: string;
  img?: string;
  updatedAt?: string;
  pricingDisclaimer?: string;
  faq?: { q: string; a: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "electric-gate-not-opening",
    title: "Why Is My Electric Gate Not Opening? 8 Causes & Fixes",
    metaTitle: "Why Is My Electric Gate Not Opening? 8 Causes & Fixes | Real Gate & Garage Door",
    metaDescription: "Electric gate won't open? We cover the 8 most common causes and what to do — from dead remote batteries to failed gate motors. gate experts.",
    primaryKeyword: "electric gate not opening",
    publishDate: "2025-04-15",
    updatedAt: "2025-04-15",
    readTime: "6 min read",
    category: "gate",
    excerpt: "Your electric gate won't open and you don't know why. Here are the 8 most common causes — and what to do about each one.",
    img: "/images/services/gate-motor.webp",
    content: `## Why Won't My Electric Gate Open?

There's nothing more frustrating than pulling up to your driveway and finding your electric gate frozen in place. Start with the three checks below — they take five minutes and fix more gates than you'd think.

### Try These First — Safe to Check Right Now

✅ **Swap the remote battery.** Gate remotes run on small batteries (often 12V A23 or CR2032) that die without warning. Try the wall keypad or entry code — if that works, it's the remote.
✅ **Check your breaker panel.** A tripped breaker cuts power to the operator instantly. Reset it once. If it trips again immediately, stop — that's an electrical fault, not a DIY fix.
✅ **Clear the gate's path.** A trash bin, fallen branch, or debris near the photocell beam can trigger the safety sensors and freeze the gate. Clear it and try again.

### If That Didn't Fix It

If the battery's fine, the breaker's holding, and the path is clear — the cause is almost always one of three things: **a failed control board, a burnt-out motor, or a safety sensor that's misaligned rather than just dirty.** All three need a multimeter and a trained eye to tell apart, not a guess.

### The Reality

A gate operator runs on line voltage, and the gate itself can weigh several hundred pounds — this isn't a project for a Saturday afternoon and a YouTube video. Control boards for most gate operators aren't sitting on a shelf at Home Depot; they're brand-specific, and we carry them on the truck because ordering one yourself means days without a working gate. Wiring a replacement board incorrectly can fry it the moment you power it back on, turning a $250 fix into a $700 one.

---

## Still Stuck?

Real Gate & Garage Door provides same-day electric gate repair in our service area. Text us a photo of your gate operator for a free diagnosis, no obligation — or call **(818) 915-5715** for immediate assistance.`,
  },

  {
    slug: "gate-repair-cost",
    title: "How Much Does Gate Repair Cost in 2026? (Local Pricing Guide)",
    metaTitle: "How Much Does Gate Repair Cost in 2026? | Real Gate & Garage Door",
    metaDescription: "Transparent gate repair pricing for homeowners. Learn what gate motor, sensor, hinge, and chain repairs actually cost in 2026.",
    primaryKeyword: "gate repair cost",
    publishDate: "2025-03-20",
    updatedAt: "2026-08-19",
    readTime: "7 min read",
    category: "gate",
    excerpt: "Gate repair costs range from $80 to $700+ depending on the problem. Here's what each type of repair actually costs in 2026.",
    img: "/images/gallery/gate-4.webp",
    pricingDisclaimer: "These are typical Southern California market ranges based on common job types, not our quotes. Every job is different — call or text us a photo for a free estimate on yours.",
    faq: [
      { q: "What makes gate repair expensive?", a: "The cost of gate repair is driven mainly by which component failed. A sensor or hinge repair is inexpensive because it's mostly labor, while a motor or circuit board replacement costs more because the parts themselves are expensive and often brand-specific." },
      { q: "Should I repair my gate or replace it?", a: "Repair is almost always the better value if the gate structure itself is sound. A new operator or control board installed on a solid gate typically costs a fraction of full replacement, and replacement only makes sense once the structure itself has failed." },
      { q: "How much does a gate motor cost?", a: "A replacement gate motor typically runs $350–$700 for a residential unit including installation, with commercial-grade operators running higher. The exact cost depends on the gate's weight and the operator's duty-cycle rating." },
      { q: "What does an emergency gate repair call typically cost?", a: "After-hours emergency service typically adds $75–$125 to the base repair cost across the industry. That surcharge covers same-day or after-hours dispatch — it isn't a different repair, just faster access to it." },
      { q: "Are gate repair estimates free?", a: "Most companies, including ours, don't charge for a written estimate. A diagnostic or service-call fee — typically $65–$95 industry-wide — usually applies once a technician is dispatched to actually assess the problem, and that fee is commonly credited toward the repair." },
      { q: "How long does gate repair take?", a: "Most single-issue gate repairs — a sensor, hinge, or roller — take 30–90 minutes once the technician is on-site. A full motor or circuit board replacement typically takes 2–3 hours." },
    ],
    content: `## Gate Repair Cost in 2026 Price Guide

Gate repair in Southern California typically costs $80 to $700, depending on what's actually broken. Sensor and hinge repairs sit at the low end of that range; motor and circuit board replacement sit at the high end.

Pricing transparency is one of the things we hear about most from customers who've had bad experiences elsewhere — a quote over the phone, a technician who "finds more problems" on-site, and a bill that's suddenly triple the original estimate. This guide breaks down typical Southern California market ranges by repair type so you know what to expect before anyone shows up.

### Before You Book a Repair — Check These First

✅ **Swap the remote battery.** A dead battery gets mistaken for "the gate is broken" more than anything else — and it costs nothing to rule out.
✅ **Reset the breaker.** If it's tripped, resetting it is free. If it trips again immediately, that's your answer: it's electrical, not mechanical.
✅ **Clear the gate's path.** Debris near a sensor reads as an obstruction. Clearing it can save you the diagnostic fee entirely.

If none of those change anything, the cause is almost always a failed circuit board, a worn drive component, or a sensor that needs realignment — and cost depends on which one it is. Here's what each typically runs.

### Diagnostic / Service Call Fee

Most Southern California gate repair companies charge a service or diagnostic fee to visit your property and assess the problem, typically $65–$95, usually credited toward the repair if you move forward with the work.

### Gate Motor / Operator Repair: $200–$700

The gate motor (operator) is the most expensive component to repair. Cost varies by what's wrong:

| Job Type | Typical Market Range | What Drives the Number |
|-------------|-------------|-------------|
| Circuit board replacement | $250–$500 | Board cost varies significantly by brand; some are proprietary and harder to source |
| Motor replacement (residential) | $350–$700 | Motor size and whether the operator brand is still in production |
| Drive gear replacement | $150–$300 | Gear material and whether the housing has to be opened |
| Limit switch adjustment/replacement | $80–$150 | Usually a quick adjustment; replacement costs more if the switch itself failed |
| Complete operator replacement (installed) | $600–$1,400 | Full unit cost plus labor to remove the old operator and program the new one |

### Gate Sensor Repair: $80–$180

Safety sensor issues — misaligned photocells, failed loop detectors, or bad receivers — are one of the more affordable repairs:

| Job Type | Typical Market Range | What Drives the Number |
|-------------|-------------|-------------|
| Photocell alignment | $60–$100 | Usually a labor-only adjustment, no parts needed |
| Photocell replacement (pair) | $100–$180 | Sensors are typically replaced in matched pairs |
| Remote receiver replacement | $80–$160 | Depends on whether the receiver is integrated into the control board |
| Remote programming | $60–$100 | Labor only; more remotes or a lost master remote adds time |

### Hinge & Structural Repair: $100–$350

Swing gate hinges take enormous strain and eventually wear or break:

| Job Type | Typical Market Range | What Drives the Number |
|-------------|-------------|-------------|
| Single hinge replacement | $80–$200 | Hinge size and whether it's a standard or heavy-duty gate |
| Double hinge replacement | $150–$350 | Two hinges plus realignment of the gate panel |
| Post repair (loose or tilted) | $200–$500 | Whether the post needs re-setting in concrete or full replacement |
| Gate frame welding repair | $200–$500 | Extent of the crack or break and the metal type (steel vs. wrought iron) |

### Chain / Drive System Repair: $150–$400

For sliding gates that run on a chain or rack:

| Job Type | Typical Market Range | What Drives the Number |
|-------------|-------------|-------------|
| Chain replacement | $150–$300 | Chain length and gate weight |
| Rack replacement (per section) | $120–$250 | Number of sections needed and material match |
| Drive wheel replacement | $100–$200 | Wheel material and load rating |
| Track repair/realignment | $100–$250 | Whether the track needs adjustment only or a section replaced |

### Roller & Track Repair: $120–$280

Sliding gate wheels and track wear over time, causing the gate to drag or bind:

| Job Type | Typical Market Range | What Drives the Number |
|-------------|-------------|-------------|
| Wheel/roller replacement | $120–$250 | Roller size and load capacity for the gate's weight |
| Track realignment | $100–$200 | Labor only in most cases |
| Track section replacement | $150–$350 | Length of track needed and surface prep |

---

## What Affects Gate Repair Cost?

**Brand of gate operator:** Parts for premium brands (Viking, FAAC, LiftMaster Elite) cost more than standard residential brands.

**Age of the gate:** Older gates may require custom or hard-to-source parts, adding to cost.

**Complexity of the repair:** A simple sensor alignment takes 30 minutes; a full motor and circuit board replacement takes 2–3 hours.

**Access and travel:** Remote properties may incur a travel surcharge.

**Timing:** After-hours emergency service typically adds $75–$125 to the base repair cost across the industry.

---

## How to Get an Accurate Estimate

The only way to get an accurate gate repair estimate is an on-site diagnostic. Photos and descriptions help, but the exact cause of a gate failure — and therefore the exact cost — can only be determined by examining the system in person. We don't quote a price over the phone, and every job gets a written, on-site estimate before any work begins.

### The Reality

Gate motors run on line voltage and gates themselves weigh hundreds of pounds under spring or motor tension — that combination is why this isn't a weekend DIY project. Circuit boards and drive components for most gate operators are brand-specific; they're not sitting on a shelf at Home Depot, which is why we carry them on the truck. And wiring a new board incorrectly can burn it out the moment you power it on, turning a moderate repair into a much larger one.

---

## Still Deciding?

Text us a photo of your gate and its problem for a free diagnosis, no obligation. Or call Real Gate & Garage Door at **(818) 915-5715** for a same-day appointment in our service area. Every estimate is free and given in writing before we start.`,
  },

  {
    slug: "automatic-gate-installation-cost",
    title: "How Much Does Automatic Gate Installation Cost? (2026 Guide)",
    metaTitle: "Automatic Gate Installation Cost 2026 — Guide | Real Gate & Garage Door",
    metaDescription: "How much does automatic gate installation cost? We break down pricing for swing gates, sliding gates, and operators for homeowners.",
    primaryKeyword: "automatic gate installation cost",
    publishDate: "2025-02-10",
    updatedAt: "2026-08-19",
    readTime: "8 min read",
    category: "gate",
    excerpt: "Automatic gate installation costs $2,000–$8,000 depending on gate type, material, and operator. Here's the full breakdown.",
    img: "/images/gallery/gate-1.webp",
    pricingDisclaimer: "These are typical Southern California market ranges based on common job types, not our quotes. Every job is different — call or text us a photo for a free estimate on yours.",
    faq: [
      { q: "What makes automatic gate installation expensive?", a: "The biggest cost drivers for automatic gate installation are the gate material and the operator grade. Custom ornamental iron with a commercial-grade operator costs several times more than a basic aluminum gate with a standard residential operator, with labor, electrical, and concrete work adding a smaller but consistent amount on top." },
      { q: "Should I repair my existing gate or install a new one?", a: "Repair is almost always cheaper than replacement if the gate structure and posts are still sound. A new operator or motor installed on an existing structurally sound gate typically costs a fraction of a full new installation, so we always check the existing structure before recommending replacement." },
      { q: "How much does a gate operator cost as part of installation?", a: "A residential gate operator typically costs $600–$1,800 installed depending on the brand and duty rating, while commercial-grade operators built for heavier gates or higher daily cycle counts run $1,500–$3,000 or more." },
      { q: "What does emergency or rush installation typically cost?", a: "Automatic gate installation is a scheduled project rather than an emergency service, so most companies don't charge a rush premium the way they would for an emergency repair call. The main driver of timeline is material lead time, not urgency fees." },
      { q: "Are gate installation estimates free?", a: "Most companies, including ours, provide a free written estimate for a new gate installation, since accurate pricing requires seeing the driveway, existing structure, and access to power in person before quoting a system." },
      { q: "How long does automatic gate installation take?", a: "A standard single swing-gate installation typically takes one to two days once materials are on-site, while custom ornamental gates or commercial systems can take longer due to fabrication lead time and additional electrical or concrete work." },
    ],
    content: `## Automatic Gate Installation Cost in 2026

Automatic gate installation in Southern California typically costs $2,000 to $10,000+, depending on gate material, size, and operator type. Most single swing-gate installations with a standard residential operator fall between $2,000 and $5,000; custom iron gates with commercial-grade operators can exceed $10,000.

It's one of the best investments you can make in a home's security and curb appeal, but the price range is wide — this guide breaks down what drives it so you can budget accurately.

### First, Make Sure You Actually Need a New Gate

If your existing gate stopped working and you're pricing a replacement, check these first — a working gate is a lot cheaper than a new one:

✅ **Swap the remote battery.** The most common "dead gate" cause costs nothing to rule out.
✅ **Reset the breaker.** If it trips right back, that's a sign of a real electrical fault — still worth a repair quote before a full replacement.
✅ **Clear the gate's path.** Debris blocking a sensor reads as a stuck gate. Clear it and retest.

If that didn't fix it, the cause is almost always a failed control board, a worn drive component, or a structural issue with the gate itself — and any of those is still cheaper to repair than replace. If the structure and operator are sound, repair first.

### The Four Cost Components

Every automatic gate installation has four cost components:

1. **The gate itself** (material and fabrication)
2. **The gate operator** (the motor and control system)
3. **Installation labor** (including any concrete work, electrical, and programming)
4. **Access control** (keypad, intercom, remote, app integration)

### Gate Material Costs

| Job Type | Typical Market Range (materials only) | What Drives the Number |
|---------------|---------------------------|---------------------------|
| Aluminum tube frame | $500–$2,000 | Gate width and whether it's a stock or custom-cut frame |
| Wrought iron / steel | $1,000–$4,000+ | Metal weight, ornamental detail, and custom fabrication |
| Wood (cedar, redwood) | $800–$3,000 | Wood grade and amount of custom millwork |
| Vinyl / composite | $600–$2,500 | Panel style and gate width |
| Custom ornamental iron | $2,000–$8,000+ | Design complexity, hand-forged detail, and finish |

Iron and custom ornamental gates cost the most but last the longest and add the most curb appeal. Aluminum is a cost-effective, rust-free alternative.

### Gate Operator Costs

Gate operators range from basic residential units to commercial-grade systems:

| Job Type | Typical Market Range (installed) | What Drives the Number |
|---------------|----------------------|----------------------|
| Basic residential swing (LiftMaster, Elite) | $600–$1,200 | Motor size relative to gate weight |
| Mid-range residential swing/slide (Viking, FAAC) | $900–$1,800 | Higher-duty motor and additional programming |
| Commercial-grade operator | $1,500–$3,000+ | Built for heavier gates and higher daily cycle counts |
| Solar-powered system (add-on) | $400–$800 additional | Panel size and battery backup capacity |

### Complete Installed System Cost

Here's what a typical residential automatic gate installation runs all-in:

| Job Type | Typical Market Range (total installed) | What Drives the Number |
|-------------|---------------------|---------------------|
| Single swing gate, aluminum, basic operator | $2,000–$3,500 | Lightest common configuration; minimal structural work |
| Double swing gate, aluminum, standard operator | $3,000–$5,000 | Two gate panels and a second operator or sync kit |
| Single sliding gate, steel, standard operator | $2,500–$4,500 | Track and post work in addition to the gate itself |
| Single swing gate, iron, premium operator | $4,000–$7,000 | Heavier gate requires a higher-duty operator |
| Double swing gate, custom iron, commercial operator | $6,000–$12,000+ | Custom fabrication plus a commercial-grade operator built for daily heavy use |

### Additional Costs to Budget For

| Job Type | Typical Market Range | What Drives the Number |
|-------------|---------------------|---------------------|
| Permit fees | $150–$500 | Varies by city; we handle the application |
| Electrical (new circuit run) | $300–$800 | Distance from the nearest power source |
| Concrete footing / driveway cut | $200–$500 | Whether existing concrete needs to be cut and repoured |
| Access control upgrade (intercom, app integration) | $100–$800 | Video vs. audio-only, and whether smartphone app integration is included |

---

## Is an Automatic Gate Worth the Cost?

For most homeowners, yes. An automatic gate:

- Adds real security by controlling access to your property
- Increases home value (a study by the California Association of Realtors shows gated properties sell faster and at higher prices)
- Eliminates the daily inconvenience of a manual gate
- Can qualify for a home insurance discount in some cases

The key is buying quality. A cheap gate operator installed on a poor-quality gate structure will cost more in repairs within 2–3 years than it saved on the initial purchase.

### The Reality

New installations aren't a weekend project: gate operators run on line voltage, permits are required in most cities, and a gate that weighs hundreds of pounds needs a properly poured footing or it will fail within a year. Parts and access-control hardware for a new system are brand-specific — not something you'll find at a hardware store — and a newly installed operator that's calibrated wrong won't just misbehave, it can burn out the board on its first real cycle, turning a routine install into an expensive callback.

---

## Not Sure If You Need Repair or Replacement?

Text us a photo of your current gate and we'll give you a free, honest read on repair vs. replace — no obligation. Or **call Real Gate & Garage Door at (818) 915-5715** for a free on-site estimate.`,
  },

  {
    slug: "how-long-do-gates-last",
    title: "How Long Do Automatic Gates Last? (And When to Repair vs Replace)",
    metaTitle: "How Long Do Automatic Gates Last? Repair vs Replace Guide | Real Gate & Garage Door",
    metaDescription: "Automatic gates last 10–20+ years with proper maintenance. Learn the signs that your gate needs repair vs. replacement — from gate experts.",
    primaryKeyword: "gate repair vs replace",
    publishDate: "2025-01-15",
    updatedAt: "2025-01-15",
    readTime: "5 min read",
    category: "gate",
    excerpt: "A well-maintained automatic gate can last 15–20+ years. Here's how to tell when repair is the right call and when it's time for a replacement.",
    img: "/images/services/long-iron-gate.webp",
    content: `## How Long Do Automatic Gates Last?

A quality automatic gate system has two distinct lifespans to think about: the gate structure itself and the gate operator (motor and control system).

**Gate structure lifespan:**
- Wrought iron / steel: 20–50+ years with proper maintenance
- Aluminum: 15–30 years
- Wood: 10–20 years (heavily weather-dependent)
- Vinyl/composite: 15–25 years

**Gate operator lifespan:**
- Residential operators (LiftMaster, Elite, Linear): 10–15 years
- Commercial operators (Viking, FAAC): 15–20 years
- Solar-powered systems: 8–12 years (battery replacement every 3–5 years)

These are guidelines — operators that are serviced annually often exceed these numbers, and operators that are neglected may fail in 5–7 years.

---

## Signs Your Gate Needs Repair (Not Replacement)

In most cases, repairing a gate is the right call. Here are the signs that a repair makes sense:

✅ **The structure is solid.** If the gate frame, posts, and panels are intact and not heavily rusted or structurally compromised, the gate is worth repairing.

✅ **The operator is under 10 years old.** A relatively recent operator with a mechanical or electrical fault is usually repairable at lower cost than replacement.

✅ **It's a component failure, not systemic failure.** A bad circuit board, worn drive gear, or broken limit switch is a targeted repair — not a sign the whole system is dying.

✅ **Repair cost is less than 50% of replacement cost.** A general rule: if repair costs less than half of what a new equivalent system would cost, repair is the better financial decision.

---

## Signs Your Gate Needs Replacement (Not Repair)

Sometimes the honest answer is replacement. Here are the warning signs:

❌ **The operator is 15+ years old and has multiple failures.** When an old operator keeps failing in different ways, it's telling you it's at end of life. Continued repairs become a money pit.

❌ **The gate structure has serious rust or damage.** Surface rust is repairable; structural rust that has penetrated through the metal means the gate won't support proper operation even with a new operator.

❌ **Parts are no longer available.** Very old gate operators sometimes reach end-of-life where manufacturer parts are discontinued. At that point, a new operator is the only option.

❌ **The gate style no longer suits the property.** An old chain-link swing gate being replaced by an iron driveway gate — that's an upgrade situation regardless of the old gate's condition.

❌ **Repair cost approaches replacement cost.** If repairing your gate costs $800 and a new system would cost $1,200, the incremental investment for a new gate often makes sense.

---

## How to Make the Gate Last Longer

**Annual maintenance** is the single most important thing you can do. A once-a-year service visit includes:
- Lubrication of all mechanical parts (hinges, chain, rollers)
- Cleaning of photocell sensors
- Inspection of wiring and control connections
- Motor load testing
- Limit switch and travel adjustment
- Battery check (on solar and backup systems)

A $150 annual maintenance visit routinely catches problems before they become $500 emergency repairs.

---

## Not Sure Which Option Is Right for You?

Real Gate & Garage Door will give you an honest assessment. We don't push replacement if repair is the better call, and we don't push repair if the gate or operator is genuinely at end of life.

Call **(818) 915-5715** for a same-day diagnostic in our service area.`,
  },

  {
    slug: "garage-door-spring-repair-cost",
    title: "How Much Does Garage Door Spring Repair Cost in 2026? (Local Guide)",
    metaTitle: "Garage Door Spring Replacement Cost 2026 — | Real Gate & Garage Door",
    metaDescription: "Garage door spring replacement costs $150–$350. Learn what affects the price and how to avoid overpaying. (818) 915-5715.",
    primaryKeyword: "how much does a garage door spring replacement cost",
    publishDate: "2025-04-01",
    updatedAt: "2026-08-19",
    readTime: "6 min read",
    category: "garage-door",
    excerpt: "Garage door spring replacement typically costs $150–$350. Here's exactly what you should expect to pay — and the warning signs of overcharging.",
    img: "/images/services/garage-door-repair.webp",
    content: `## Garage Door Spring Replacement Cost in 2026

Garage door spring replacement is the most common garage door repair we perform — and unfortunately, it's also the service most prone to overcharging by less scrupulous companies. This guide gives you the real numbers so you're informed before you call anyone.

### Typical Spring Replacement Cost

| Spring Type | Typical Total Cost (parts + labor) |
|-------------|-----------------------------------|
| Single torsion spring | $150–$250 |
| Double torsion springs (both replaced) | $220–$350 |
| Single extension spring | $80–$150 |
| Extension springs (pair, both replaced) | $140–$250 |
| High-cycle torsion springs (upgrade) | $250–$400 |

These prices include the spring(s), labor, and door balancing. A diagnostic fee may be added if a site visit is needed before confirming the diagnosis (typically $65–$95, credited toward repair).

### What Affects the Price?

**Number of springs:** Modern garage doors often have two torsion springs on the same horizontal shaft. If one breaks, we strongly recommend replacing both — they're the same age and the other is likely near failure. Replacing both at once is cheaper than two separate service calls.

**Spring size and wire gauge:** Larger, heavier doors require heavier springs. A two-car steel door needs a bigger spring than a small single-car door. Larger springs cost more.

**High-cycle vs. standard springs:** Standard springs are rated for 10,000 cycles (~7–10 years). High-cycle springs rated at 30,000 cycles cost $50–$100 more but outlast three standard springs. For most homeowners, the upgrade is worth it.

**Your door weight and size:** Heavier doors (wood, insulated steel) require larger springs that cost more than springs for light aluminum doors.

---

### Red Flags: Signs You're Being Overcharged

**Quoted price over $500 for a basic spring replacement:** Unless you have a very large door, a commercial door, or multiple springs being replaced, $500+ for a residential spring replacement is excessive.

**"We have to replace the entire spring system":** For most residential doors, individual spring replacement is straightforward. A company insisting you need a full system overhaul for a basic spring break is often upselling.

**No upfront quote before starting work:** Any reputable company will tell you the price before touching your door. If a technician starts work without giving you a clear price, stop them.

**"Your door is unsafe and we have to disable it":** While a broken spring genuinely means the door shouldn't be operated, using safety concerns to pressure you into same-day expensive repairs is a classic high-pressure sales tactic. You have the right to get a second opinion.

---

### Can I Replace a Garage Door Spring Myself?

We get this question often, and our honest answer is: no, please don't.

Torsion springs store enormous potential energy under tension. A spring that fails during DIY replacement can cause severe injury — we've seen broken wrists, lacerations, and worse from amateur spring replacement attempts. This is a job for an insured technician with the right tools.

Extension springs, while less dangerous than torsion springs, also store significant energy and can injure someone if mishandled.

The cost of professional spring replacement is modest compared to the risk of DIY.

---

### What to Expect at a Spring Replacement Visit

At Real Gate & Garage Door, a spring replacement visit looks like this:

1. Technician arrives and confirms the broken spring(s)
2. You receive a clear, upfront price — no work starts without your approval
3. Technician installs new spring(s) using proper winding tools
4. Door is balanced using a tension test — proper balance protects your opener
5. Door is cycled multiple times to confirm smooth, consistent operation
6. Technician checks all hardware: cables, rollers, hinges, and opener connection

Total time: 45–90 minutes for most spring replacements.

Call **(818) 915-5715** for same-day spring replacement in our service area.`,
  },

  {
    slug: "garage-door-wont-close",
    title: "Garage Door Won't Close? 7 Causes & Fixes",
    metaTitle: "Garage Door Won't Close? 7 Causes & Fixes | Real Gate & Garage Door",
    metaDescription: "Garage door won't close all the way? We cover the 7 most common causes and step-by-step fixes. garage door repair experts. Call (818) 915-5715.",
    primaryKeyword: "garage door won't close",
    publishDate: "2025-03-05",
    updatedAt: "2025-03-05",
    readTime: "6 min read",
    category: "garage-door",
    excerpt: "A garage door that won't close is a security risk. Here are the 7 most common causes — and what you can do about each one.",
    img: "/images/gallery/outside-1.webp",
    content: `## Garage Door Won't Close — 7 Common Causes and Fixes

A garage door that refuses to close is more than frustrating — it's a security risk and, in hot weather, an energy efficiency problem. Before you call for service, work through these seven common causes. Several can be fixed in minutes without a technician.

### 1. Safety Sensor Misalignment (Most Common Cause)

Garage door openers built after 1993 are required by law to have photo-eye safety sensors mounted near the floor on each side of the door. These sensors beam an invisible light across the door opening. If something blocks the beam — or if the sensors are misaligned — the door will refuse to close.

**How to check:** Look at both sensor units near the bottom of the door tracks. They typically have LED lights. One sender (usually glowing steadily) and one receiver (usually blinking if misaligned, steady green if aligned).

**Fix:** If the receiver LED is blinking or off, the sensors are misaligned or blocked. Clean both lenses with a soft cloth. Then loosen the sensor mounting screw, adjust the sensor until the LED glows steadily, and retighten.

### 2. Something in the Door's Path

This sounds obvious, but it's easy to miss. A trash bag, kid's toy, or even a leaf pile near the sensor or in the door's path can trigger the safety system.

**Fix:** Clear the door's full travel path. Make sure nothing is on the floor under the door, and check that nothing is leaning against the door or the tracks.

### 3. Damaged, Bent, or Dirty Safety Sensors

If the sensor lenses are dirty, cracked, or spider-webbed, they won't transmit or receive the signal properly. Sensor damage is also common from being hit by a vehicle bumper or lawn equipment.

**Fix:** Clean the lenses. If damaged, replace the sensor pair — they're typically sold and replaced as a matched set. This is a straightforward repair that most technicians can complete in under 30 minutes.

### 4. Down-Limit Switch Needs Adjustment

The down-limit switch tells your opener where "fully closed" is. If this switch is set incorrectly — too far above the floor — the opener will try to close, think it's already down, and stop short. The door reverses or stops without fully closing.

**Fix:** Consult your opener manual for the down-limit adjustment procedure. It's usually a small screw on the side of the opener unit. This is a DIY-possible fix, but if you're not comfortable, a technician can do it in 15 minutes.

### 5. Broken Tension Spring

A broken torsion or extension spring doesn't just prevent the door from opening — it can prevent it from closing properly too. Springs counterbalance the door's weight; without them, the opener struggles or fails entirely.

**Signs:** You heard a loud bang (spring snap), the door looks or feels crooked, or one side of the door moves faster than the other.

**Fix:** Call a technician. Do not operate your door with a broken spring. Spring replacement is a job for a professional.

### 6. Interference from Another Remote

Older 9-switch or 12-switch dip-code remotes and openers can sometimes receive interference from a neighbor's remote on the same frequency. You may see the door start to close and then reverse, or refuse to respond to close commands.

**Fix:** Test without any remotes — use only the wall button. If it closes with the wall button, the issue is likely remote frequency interference. Reprogram or replace the remote, or upgrade to a rolling-code opener (more secure and immune to this problem).

### 7. Opener Travel Adjustment or Mechanical Issue

If none of the above applies, there may be a mechanical issue with the opener itself or the door hardware. A binding track, worn roller, bent section, or failing opener gear can all cause the door to stop before it fully closes.

**Fix:** Inspect the tracks for obvious bends or debris. Try lifting the door manually to check for binding. If there's mechanical resistance, don't force it — call a technician to identify and fix the cause.

---

## When to Call a Professional

If your garage door still won't close after checking the sensors, clearing obstructions, and checking the down-limit, call a professional. Real Gate & Garage Door provides same-day garage door repair in our service area.

**(818) 915-5715** — available 7 days a week.`,
  },

  {
    slug: "noisy-garage-door-fix",
    title: "How to Fix a Noisy Garage Door (Step-by-Step Guide)",
    metaTitle: "How to Fix a Noisy Garage Door — Step by Step | Real Gate & Garage Door",
    metaDescription: "Squeaky, grinding, or banging garage door? Follow our step-by-step guide to identify and fix the noise. garage door experts.",
    primaryKeyword: "how to fix a noisy garage door",
    publishDate: "2025-02-20",
    updatedAt: "2025-02-20",
    readTime: "7 min read",
    category: "garage-door",
    excerpt: "A noisy garage door is usually a maintenance issue, not a breakdown. Here's how to identify the source of the noise and fix it — step by step.",
    img: "/images/services/wood-garage.webp",
    content: `## How to Fix a Noisy Garage Door

A garage door that squeaks, grinds, rattles, or bangs every time it opens or closes is more than annoying — it's often a sign that components are wearing and need attention. The good news is that most noisy garage door issues are maintenance problems you can address yourself. Here's how to diagnose and fix the most common garage door noises.

### Step 1: Identify the Type of Noise

Different noises point to different problems:

| Noise | Likely Cause |
|-------|-------------|
| Squeaking | Dry hinges, rollers, or tracks |
| Grinding | Worn rollers, dry opener drive gear |
| Rattling | Loose hardware (nuts, bolts, chain) |
| Banging | Broken spring, unbalanced door |
| Popping | Old nylon rollers, coil spring noise |
| Vibrating | Loose opener, vibration transfer to ceiling |

### Step 2: Lubricate Everything

This is the first and most impactful step. Garage doors need lubrication on all metal-to-metal contact points. Use a white lithium grease spray or a dedicated garage door lubricant (not WD-40, which is a solvent, not a lubricant, and will dry out quickly).

**What to lubricate:**
- All hinges (spray the pivot point of each hinge)
- All rollers (spray the stem and bearings, not the plastic track)
- Torsion spring (light spray down the length of the coil)
- Top of the track (where the rollers contact)
- Lock mechanism
- Armbar

**What NOT to lubricate:**
- Plastic (nylon) rollers — just replace them if noisy
- The track channel (lubricant here collects debris and causes sticking)
- Pulley wheels (for extension springs)

After lubricating, cycle the door 2–3 times to spread the lubricant and listen for improvement.

### Step 3: Tighten All Hardware

Vibration over thousands of cycles loosens every nut and bolt on a garage door. A loose hinge, track bracket, or opener mounting bolt is a common noise source.

**What to check and tighten:**
- All hinge bolts (use a socket wrench — they should be snug, not over-tightened)
- All track mounting bolts (the vertical and horizontal track brackets)
- Opener mounting bolts (the opener attached to the ceiling)
- All roller stem bolts through the hinge brackets
- Chain or belt tension (consult your opener manual for proper adjustment)

### Step 4: Inspect and Replace Worn Rollers

Metal rollers wear out and develop flat spots that cause grinding. Nylon rollers wear and split, causing squeaking and wobbling. Most garage door rollers should be replaced every 5–7 years.

**How to check:** Spin each roller by hand while the door is open. It should spin freely and silently. A grinding, wobbling, or stiff roller is worn.

**Replacement:** Rollers can be replaced by a DIY-competent homeowner using basic tools. Nylon rollers with sealed steel ball bearings are quieter and longer-lasting than standard nylon — worth the modest cost upgrade.

### Step 5: Check Door Balance

An unbalanced door puts strain on the opener and causes rhythmic noise and vibration. Here's a quick balance test:

1. Disconnect the opener (pull the red emergency release cord)
2. Manually lift the door to waist height and let go
3. The door should stay in place (or drift very slowly)
4. If it drops quickly, the springs need adjustment
5. If it rises, the springs are over-tensioned

**Important:** Do not adjust torsion springs yourself. Call a technician for spring adjustment.

### Step 6: Check the Opener

Opener noise can come from a few sources:

**Chain drive openers** are inherently noisier than belt drive. If you have a chain drive opener and noise is the main concern, consider a belt drive replacement — they're significantly quieter.

**Loose opener hardware:** The opener is mounted to the ceiling with a bracket. If those mounting bolts are loose, the opener vibrates and transmits noise into the ceiling and house structure. Tighten all mounting hardware.

**Worn drive gear:** Inside the opener is a drive gear that wears over time. A grinding sound from the opener unit specifically (not the door) often means the drive gear needs replacement — a technician repair.

### When Lubrication and Tightening Aren't Enough

If you've lubricated everything, replaced the rollers, tightened all hardware, and the door is still noisy — or if you're hearing grinding or banging from the spring area — it's time to call a professional. These symptoms can indicate:

- Broken or failing spring
- Worn cable or drum
- Bent track section
- Failing opener motor

Real Gate & Garage Door provides garage door tune-ups that include full lubrication, hardware inspection, roller assessment, and balance check — starting at $99 in our service area. Call **(818) 915-5715)** to schedule.`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
