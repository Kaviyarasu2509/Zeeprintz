// ⚠️ FIXED: was "https://zeeprintz.com" — this was pointing SEO signals
// (canonical, og:url, schema @id) to the WRONG domain. Your real site is .in
export const SITE_URL = "https://zeeprintz.in";

export const BUSINESS = {
  name: "ZeePrintz",
  tagline: "Coimbatore's Premium Print Studio",
  subtagline: "Quality Prints. Fast Delivery. Best Price.",
  address: {
    line1: "2nd Floor, Balaji Complex, 288, 2nd St",
    line2: "Opp. Anbu Mess, Cross Cut Road",
    area: "Gandhipuram",
    city: "Coimbatore",
    state: "Tamil Nadu",
    pincode: "641012",
    full: "2nd Floor, Balaji Complex, 288, 2nd St, Opp. Anbu Mess, Cross Cut Road, Gandhipuram, Coimbatore, Tamil Nadu 641012",
  },
  contact: {
    phone: "7598951141",
    phoneDisplay: "+91 75989 51141",
    email: "zeeprintzcoimbatore@gmail.com",
    whatsapp: "917598951141",
  },
  hours: {
    weekdays: "9:00 AM - 8:00 PM",
    saturday: "9:00 AM - 6:00 PM",
    sunday: "Closed",
  },
  social: {
    instagram: "https://instagram.com/zeeprintz",
    facebook: "https://facebook.com/zeeprintz",
  },
  // TODO: Once you create/verify your Google Business Profile, paste its
  // share link here (Google Business Profile > Ask for reviews > Copy link).
  // This is one of the strongest local-SEO signals you can add.
  googleBusinessLink: "",
  mapEmbed: "https://maps.google.com/maps?q=Gandhipuram,Coimbatore&output=embed",
  googleMapsLink:
    "https://maps.google.com/?q=2nd+Floor+Balaji+Complex+288+2nd+St+Gandhipuram+Coimbatore",
  geo: {
    latitude: "11.0168",
    longitude: "76.9558",
  },
};

export const SERVICE_AREAS = [
  "Gandhipuram",
  "Cross Cut Road",
  "RS Puram",
  "Saibaba Colony",
  "Peelamedu",
  "Singanallur",
  "Town Hall",
  "Ramanathapuram",
  "Ukkadam",
  "Ganapathy",
  "Saravanampatti",
  "Kuniyamuthur",
];

export const SERVICES = [
  {
    id: "visiting-cards",
    icon: "VC",
    title: "Visiting Cards",
    desc: "Premium matte, gloss, UV spot, textured, and soft-touch visiting cards for professionals and businesses.",
    keywords: "visiting card printing coimbatore",
    price: "From Rs.199 / 100 cards",
    popular: true,
  },
  {
    id: "letter-pads",
    icon: "LP",
    title: "Letter Pads",
    desc: "Company and personal letter pad printing with letterhead design, in single or multi-color, for offices and professionals.",
    keywords: "letter pad printing coimbatore",
    price: "Get Quote on WhatsApp",
    popular: false,
  },
  {
    id: "bill-books",
    icon: "BB",
    title: "Bill Books",
    desc: "Custom bill books, cash bill books, and duplicate/triplicate carbonless bill books for shops and businesses.",
    keywords: "bill book printing coimbatore",
    price: "Get Quote on WhatsApp",
    popular: true,
  },
  {
    id: "vouchers",
    icon: "VO",
    title: "Vouchers",
    desc: "Payment vouchers, gift vouchers, and receipt vouchers printed with sequential numbering for businesses.",
    keywords: "voucher printing coimbatore",
    price: "Get Quote on WhatsApp",
    popular: false,
  },
  {
    id: "brochures",
    icon: "BR",
    title: "Brochures",
    desc: "Tri-fold, bi-fold, and multi-page brochure printing for product launches, sales teams, and marketing.",
    keywords: "brochure printing coimbatore",
    price: "From Rs.3 / piece",
    popular: true,
  },
  {
    id: "envelope-covers",
    icon: "EC",
    title: "Envelope Covers",
    desc: "Custom printed envelope covers in standard and business sizes with company branding and address printing.",
    keywords: "envelope printing coimbatore",
    price: "Get Quote on WhatsApp",
    popular: false,
  },
  {
    id: "flyers",
    icon: "FL",
    title: "Flyers & Notices",
    desc: "Single-page flyers and public notice printing for events, promotions, announcements, and campaigns.",
    keywords: "flyer printing coimbatore, notice printing coimbatore",
    price: "Get Quote on WhatsApp",
    popular: false,
  },
  {
    id: "invitations",
    icon: "IN",
    title: "Invitations",
    desc: "Wedding, birthday, and event invitation card printing in Tamil and English with custom design support.",
    keywords: "invitation card printing coimbatore, wedding card printing coimbatore",
    price: "From Rs.8 / card",
    popular: true,
  },
  {
    id: "stickers",
    icon: "SL",
    title: "Stickers",
    desc: "Die-cut stickers, product labels, barcode labels, vinyl stickers, and packaging labels in any shape.",
    keywords: "sticker printing coimbatore",
    price: "From Rs.0.50 / piece",
    popular: true,
  },
  {
    id: "wall-posters",
    icon: "WP",
    title: "Wall Posters",
    desc: "High-resolution wall poster printing in multiple sizes for shops, offices, colleges, and events.",
    keywords: "poster printing coimbatore",
    price: "Get Quote on WhatsApp",
    popular: false,
  },
  {
    id: "id-cards",
    icon: "ID",
    title: "ID Cards",
    desc: "PVC ID cards, staff badges, school ID cards, event passes, and custom lanyards with lamination.",
    keywords: "id card printing coimbatore",
    price: "From Rs.25 / card",
    popular: true,
  },
  {
    id: "calendars",
    icon: "CL",
    title: "Calendars",
    desc: "Wall calendars, table calendars, desk calendars, and branded corporate calendar printing.",
    keywords: "calendar printing coimbatore",
    price: "From Rs.45 / piece",
    popular: false,
  },
  {
    id: "diaries",
    icon: "DR",
    title: "Diaries",
    desc: "Corporate diary printing and custom notebook printing with company branding for year-end gifting.",
    keywords: "diary printing coimbatore",
    price: "Get Quote on WhatsApp",
    popular: false,
  },
  {
    id: "seal-stamp",
    icon: "SS",
    title: "Seal & Stamp",
    desc: "Self-inking rubber stamps, company seals, signature stamps, and date stamps made to order.",
    keywords: "rubber stamp coimbatore, seal making coimbatore",
    price: "Get Quote on WhatsApp",
    popular: false,
  },
  {
    id: "certificate",
    icon: "CT",
    title: "Certificate Printing",
    desc: "Certificate printing for colleges, schools, events, and companies with premium paper and finishing options.",
    keywords: "certificate printing coimbatore",
    price: "Get Quote on WhatsApp",
    popular: false,
  },
  {
    id: "vinyl-flex",
    icon: "VF",
    title: "Vinyl & Flex",
    desc: "Indoor and outdoor flex banners and vinyl printing with vibrant, weather-ready quality for shops and events.",
    keywords: "flex printing coimbatore, vinyl printing coimbatore, banner printing coimbatore",
    price: "From Rs.18 / sqft",
    popular: true,
  },
  {
    id: "sunpack",
    icon: "SP",
    title: "Sunpack Boards",
    desc: "Sunpack board printing for shop name boards, signage, and display boards with durable outdoor finish.",
    keywords: "sunpack board printing coimbatore, sign board coimbatore",
    price: "Get Quote on WhatsApp",
    popular: false,
  },
  {
    id: "typing-translation",
    icon: "TT",
    title: "Typing & Translation",
    desc: "Document typing, DTP, and Tamil-English translation services for certificates, forms, and official documents.",
    keywords: "typing services coimbatore, translation services coimbatore",
    price: "Get Quote on WhatsApp",
    popular: false,
  },
];

export const STATS = [
  { value: "5000+", label: "Happy Customers" },
  { value: "50+", label: "Print Services" },
  { value: "24hr", label: "Turnaround Time" },
  { value: "10+", label: "Years Experience" },
];

export const PROCESS_STEPS = [
  {
    title: "Send Your Design",
    text: "Share print files, logo, content, size, quantity, and deadline through WhatsApp.",
  },
  {
    title: "Get Quick Quote",
    text: "Our team confirms material, finish, delivery time, and the best available price.",
  },
  {
    title: "Approve & Print",
    text: "Once approved, we print with quality checks for color, alignment, cutting, and finish.",
  },
  {
    title: "Pickup or Delivery",
    text: "Collect from Gandhipuram or ask for local delivery inside Coimbatore.",
  },
];

export const FAQS = [
  {
    question: "Which is the best printing shop in Coimbatore for visiting cards?",
    answer:
      "ZeePrintz in Gandhipuram prints premium visiting cards with matte, gloss, textured, UV spot, and soft-touch options. You can order through WhatsApp and get a quick quote.",
  },
  {
    question: "Do you offer same-day printing in Coimbatore?",
    answer:
      "Yes, same-day printing is available for selected urgent orders depending on file readiness, quantity, material availability, and finishing requirements.",
  },
  {
    question: "Can I order flex banners and business prints through WhatsApp?",
    answer:
      "Yes. Send your design, size, quantity, and delivery deadline to ZeePrintz on WhatsApp. The team will confirm the price and print timeline.",
  },
  {
    question: "Where is ZeePrintz located?",
    answer:
      "ZeePrintz is located on Cross Cut Road, Gandhipuram, Coimbatore, near Anbu Mess, at 2nd Floor, Balaji Complex.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner, RS Puram",
    text: "Best visiting card quality in Coimbatore. Fast delivery and affordable pricing. ZeePrintz is my regular print partner.",
    rating: 5,
  },
  {
    name: "Priya Lakshmi",
    role: "Event Planner, Gandhipuram",
    text: "Ordered 500 wedding cards. The design was beautiful, print quality was clean, and delivery was on time.",
    rating: 5,
  },
  {
    name: "Arun Selvam",
    role: "Marketing Manager",
    text: "Flex banner quality is outstanding. Colors are bright and the material holds well for outdoor use.",
    rating: 5,
  },
];