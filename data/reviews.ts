export interface Review {
  quote: string;
  name: string;
  /** Move type and route, shown beneath the reviewer name. */
  role: string;
  /** Initials rendered in the avatar block. */
  initials: string;
  /** The single long-form quote rendered in the featured editorial slot. */
  featured?: boolean;
}

export const REVIEWS: Review[] = [
  {
    quote:
      "Zain Movers handled our 5-bedroom villa relocation from Dubai Marina to Arabian Ranches flawlessly. Two large trucks arrived at precisely 8:00 AM, with 8 uniformed professionals who protected every marble surface and handled our grandfather clock and artwork with absolute mastery. We paid only after full sign-off. Outstanding standard.",
    name: "Marcus & Elena Lindqvist",
    role: "Villa Move • Dubai Marina to Arabian Ranches 2",
    initials: "ML",
    featured: true,
  },
  {
    quote:
      "I was worried about hidden charges because that happened to me with another mover before. Zain gave me a clear quote on WhatsApp, and the final bill was exactly the same. The team was careful with my furniture. Very happy.",
    name: "Ahmed R.",
    role: "Villa Move • Dubai Marina to Al Barsha",
    initials: "AR",
  },
  {
    quote:
      "I had to move from Sharjah to Abu Dhabi on short notice. They arranged everything in one day. Packing, loading, transport, and unpacking — all done by evening. Fair price, professional team.",
    name: "Sara M.",
    role: "Home Shifting • Sharjah to Abu Dhabi",
    initials: "SM",
  },
  {
    quote:
      "We used Zain for our office relocation. They moved 40 workstations, the server room, and the pantry over a weekend. Monday morning, everything was set up and working. No issues.",
    name: "Khalid H.",
    role: "Office Move • Business Bay",
    initials: "KH",
  },
  {
    quote:
      "The pay-after-satisfaction thing sounded too good to be true, but they actually did it. The team was polite, fast, and handled our things with care. Would recommend to anyone.",
    name: "Priya S.",
    role: "2BHK Apartment Move • JVC",
    initials: "PS",
  },
  {
    quote:
      "The carpentry team is legitimate. Disassembled a massive custom Italian bedroom set in Business Bay and rebuilt it perfectly in Downtown Dubai without a scratch. Price was exactly what we agreed on WhatsApp.",
    name: "Tariq Al-Mansoor",
    role: "2-Bedroom Move • Business Bay to Downtown Dubai",
    initials: "TA",
  },
  {
    quote:
      "Moving with two young kids is stressful. The crew packed up our 3-bedroom flat in JLT in just 4 hours, labelled every toy and dishware box clearly, and placed beds first so the kids could sleep right away. Extremely polite staff.",
    name: "Sarah Jenkins",
    role: "Apartment Move • JLT Cluster G to Dubai Hills",
    initials: "SJ",
  },
];
