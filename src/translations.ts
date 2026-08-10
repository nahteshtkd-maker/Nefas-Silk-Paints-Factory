export interface TranslationSet {
  // Navigation
  home: string;
  about: string;
  businesses: string;
  products: string;
  shops: string;
  logistics: string;
  news: string;
  careers: string;
  contact: string;
  getInTouch: string;
  searchPlaceholder: string;
  searchButton: string;
  whatsappSimulated: string;
  callSimulated: string;

  // Hero Section
  heroTitle1: string;
  heroTitle2: string;
  heroTitle3: string;
  heroSubtitle: string;
  exploreBtn: string;
  productsBtn: string;
  contactBtn: string;
  yearsOfExcellence: string;
  foundedText: string;
  employees: string;
  skilledTalent: string;
  logisticsTrucks: string;
  corridorText: string;
  globalPartners: string;
  exportPartnersLabel: string;
  directTradeText: string;

  // About Section
  storytellingTitle: string;
  companyHistory: string;
  ceoMessageTitle: string;
  ceoSubTitle: string;
  ceoSignature: string;
  coreValuesTitle: string;
  coreValuesSub: string;
  valueQuality: string;
  valueQualityDesc: string;
  valueProf: string;
  valueProfDesc: string;
  valueIntegrity: string;
  valueIntegrityDesc: string;
  valueTrust: string;
  valueTrustDesc: string;
  valueCommunity: string;
  valueCommunityDesc: string;
  valueCustomer: string;
  valueCustomerDesc: string;
  valueFlex: string;
  valueFlexDesc: string;

  // Our Businesses
  businessesTitle: string;
  businessesSub: string;
  paintManufacturing: string;
  paintMfgDesc: string;
  coffeeExport: string;
  coffeeExportDesc: string;
  fleetLogistics: string;
  fleetLogisticsDesc: string;
  agroExport: string;
  agroExportDesc: string;
  learnMore: string;

  // Products Page
  productCatalogue: string;
  allCategories: string;
  specificationText: string;
  technicalSheet: string;
  applicationText: string;
  availableColors: string;
  packagingSizes: string;
  relatedProducts: string;
  downloadPdfBtn: string;

  // Shops Page
  showroomNetwork: string;
  findStoresTitle: string;
  findStoresSub: string;
  filterOutlets: string;
  searchStorePlaceholder: string;
  liveCoords: string;
  mapLayerDetails: string;
  callBtn: string;
  directionsBtn: string;
  navigateBtn: string;

  // Logistics Page
  corridorTransitTitle: string;
  fleetDivisionTitle: string;
  fleetDivisionSub: string;
  connectingTrade: string;
  addisDjiboutiHighway: string;
  logisticsPara1: string;
  logisticsPara2: string;
  activeTrailerFleet: string;
  heavyDutyTrucks: string;
  highwayDistance: string;
  liveCorridorTracker: string;
  transitActiveBadge: string;
  hornOfAfricaCorridor: string;
  portGateway: string;
  stationNodeInfo: string;

  // Group Companies Section
  groupCompaniesTitle: string;
  groupCompaniesSub: string;
  beetarIndustries: string;
  beetarDesc: string;
  damiET: string;
  damiETDesc: string;
  anbessaShoe: string;
  anbessaDesc: string;

  // Careers
  careersTitle: string;
  careersSub: string;
  benefitsTitle: string;
  benefitsSub: string;
  recruitmentTimeline: string;
  timelineStep1: string;
  timelineStep1Desc: string;
  timelineStep2: string;
  timelineStep2Desc: string;
  timelineStep3: string;
  timelineStep3Desc: string;
  timelineStep4: string;
  timelineStep4Desc: string;
  applyNow: string;
  applicationFormTitle: string;
  fullName: string;
  emailAddress: string;
  uploadCv: string;
  submitApplication: string;

  // Contact
  contactUs: string;
  getInTouchSubtitle: string;
  sendAMessage: string;
  subject: string;
  messageText: string;
  sendMessageBtn: string;
  headOffice: string;
  businessHours: string;
  monSatHours: string;
  sunClosed: string;

  // Footer
  companyDescription: string;
  quickLinks: string;
  newsletterTitle: string;
  newsletterSub: string;
  subscribeBtn: string;
  allRightsReserved: string;
}

export const translations: Record<"EN" | "AM", TranslationSet> = {
  EN: {
    home: "Home",
    about: "About Us",
    businesses: "Our Businesses",
    products: "Products",
    shops: "Shops",
    logistics: "Logistics",
    news: "News & Media",
    careers: "Careers",
    contact: "Contact",
    getInTouch: "Get in Touch",
    searchPlaceholder: "Search corporate info...",
    searchButton: "Search",
    whatsappSimulated: "WhatsApp chat initiated with Nefas Silk Support!",
    callSimulated: "Initiating telephone call to corporate office at +251 11 442 7701",

    heroTitle1: "Colours That",
    heroTitle2: "Transform",
    heroTitle3: "Your World",
    heroSubtitle: "For nearly six decades, Nefas Silk Paints Factory PLC has been one of Ethiopia's most trusted industrial companies, delivering excellence in paint manufacturing while expanding into coffee exports, agro exports, and logistics.",
    exploreBtn: "Explore Our Businesses",
    productsBtn: "Our Products",
    contactBtn: "Contact Us",
    yearsOfExcellence: "Years of Excellence",
    foundedText: "Established 1967",
    employees: "Employees",
    skilledTalent: "Skilled Ethiopian Talent",
    logisticsTrucks: "Logistics Trucks",
    corridorText: "Addis-Djibouti corridor",
    globalPartners: "Global",
    exportPartnersLabel: "Export Partners",
    directTradeText: "Direct trade connections",

    storytellingTitle: "Heritage of Innovation & Trust",
    companyHistory: "Our Historical Journey",
    ceoMessageTitle: "CEO Message",
    ceoSubTitle: "A Message from our Managing Director",
    ceoSignature: "Tedla Yizengaw",
    coreValuesTitle: "Our Core Values",
    coreValuesSub: "The fundamental pillars of our business operations, quality management, and community impact.",
    valueQuality: "Commitment to Quality",
    valueQualityDesc: "Uncompromising standards in chemical paint formulations, agricultural grading, and shipping integrity.",
    valueProf: "Professionalism",
    valueProfDesc: "Highly qualified experts leading our modern laboratory, manufacturing units, and logistics fleet.",
    valueIntegrity: "Integrity",
    valueIntegrityDesc: "Transparent dealings with coffee smallholders, corporate partners, and international brokers.",
    valueTrust: "Trustworthiness",
    valueTrustDesc: "Nearly 60 years of building genuine, long-term relationships with clients across Ethiopia and the globe.",
    valueCommunity: "Community Responsibility",
    valueCommunityDesc: "Sourcing coffee directly from cooperative farmers and providing sustainable industrial job opportunities.",
    valueCustomer: "Customer Satisfaction",
    valueCustomerDesc: "Providing bespoke industrial formulations and reliable distribution networks nationwide.",
    valueFlex: "Flexibility",
    valueFlexDesc: "Rapid adaptation to shifting global export regulations and innovative logistics demands.",

    businessesTitle: "Our Diversified Business Sectors",
    businessesSub: "Bridging manufacturing, logistics, and agricultural trade to power East African development.",
    paintManufacturing: "Paint Manufacturing",
    paintMfgDesc: "Leading decorative, industrial, and specialized coatings since 1967.",
    coffeeExport: "Coffee Export",
    coffeeExportDesc: "Delivering export-grade Arabica coffee sourced from smallholders to roasters worldwide.",
    fleetLogistics: "Fleet & Logistics",
    fleetLogisticsDesc: "Over 200 branded trucks securing import-export routes along the Djibouti corridor.",
    agroExport: "Agro Products Export",
    agroExportDesc: "High-quality Humera sesame, oilseeds, and pulses processed for international trade.",
    learnMore: "Learn More",

    productCatalogue: "Paint Catalogue & Formulations",
    allCategories: "All Categories",
    specificationText: "Product Specifications",
    technicalSheet: "Technical Data Sheet",
    applicationText: "Application Guide",
    availableColors: "Available Palette",
    packagingSizes: "Packaging Sizes",
    relatedProducts: "Related Coatings",
    downloadPdfBtn: "Download Technical Sheet (PDF)",

    showroomNetwork: "Showroom Network",
    findStoresTitle: "Find Our Paint Stores",
    findStoresSub: "Connect with our color consultants, browse specialty coatings, and access instant mixing facilities across Ethiopia's major trading hubs.",
    filterOutlets: "Filter Outlets",
    searchStorePlaceholder: "Search store by name or address...",
    liveCoords: "Live Coordinates Map",
    mapLayerDetails: "Map Layer Details",
    callBtn: "Call Store",
    directionsBtn: "Directions",
    navigateBtn: "Navigate",

    corridorTransitTitle: "East African Transit Corridor",
    fleetDivisionTitle: "Our Fleet & Logistics Division",
    fleetDivisionSub: "Operating a robust, heavily branded fleet of over 200 heavy transport trucks along the vital import-export corridor linking landlocked Ethiopia to the Port of Djibouti.",
    connectingTrade: "Connecting Global Trade",
    addisDjiboutiHighway: "The Addis to Djibouti Highway",
    logisticsPara1: "Our fleet and transport division is one of our most successful expansions. By maintaining strict control over our logistics corridors, we secure smooth container operations for our premium coffee exports and chemical paint ingredient imports alike.",
    logisticsPara2: "Every single vehicle in our fleet is fully branded, displaying the iconic Nefas Silk Paints Factory logo on the doors and cargo container side walls. This ensures visibility, accountability, and high corporate standards along the 1,000km highway.",
    activeTrailerFleet: "Active Branded Trailer Fleet",
    heavyDutyTrucks: "Heavy Duty Trucks",
    highwayDistance: "Addis-Djibouti Route",
    liveCorridorTracker: "Live Corridor Tracker Map",
    transitActiveBadge: "Transit Active",
    hornOfAfricaCorridor: "Horn of Africa Corridor",
    portGateway: "Port Gulf of Aden",
    stationNodeInfo: "Station Node Info",

    groupCompaniesTitle: "Our Group Companies",
    groupCompaniesSub: "In addition to our core paint manufacturing, agriculture, and logistics businesses, our affiliated group companies drive multi-sector industrial growth.",
    beetarIndustries: "Beetar Industries",
    beetarDesc: "Industrial manufacturing complex specializing in high-grade plastics, chemical packaging materials, and auxiliary industrial products.",
    damiET: "Dami ET Shoe Soles",
    damiETDesc: "State-of-the-art manufacturing plant producing Italian-inspired design polyurethane and rubber shoe soles for major footwear manufacturers.",
    anbessaShoe: "Anbessa Shoe & Tannery",
    anbessaDesc: "One of Africa's oldest and most respected shoe manufacturers and tanneries, established in Addis Ababa. Producing premium leather goods for global markets.",

    careersTitle: "Join Our Dynamic Team",
    careersSub: "Grow your career at one of East Africa's leading diversified groups, dedicated to professional excellence, safety, and sustainable innovation.",
    benefitsTitle: "Why Work With Us",
    benefitsSub: "We cultivate an inclusive culture designed to empower individual career paths and ensure high quality of life.",
    recruitmentTimeline: "Our Recruitment Timeline",
    timelineStep1: "1. Online Submission",
    timelineStep1Desc: "Apply online by submitting your resume and selection credentials through our careers form.",
    timelineStep2: "2. Technical Assessment",
    timelineStep2Desc: "Shortlisted candidates undergo role-specific skills evaluation or cognitive assessments.",
    timelineStep3: "3. Panel Interview",
    timelineStep3Desc: "A collaborative conversation with our department leaders, R&D chemists, or division managers.",
    timelineStep4: "4. Onboarding & Mentoring",
    timelineStep4Desc: "Successful applicants are paired with senior guides for tailored site training.",
    applyNow: "Apply Now",
    applicationFormTitle: "Job Application Form",
    fullName: "Full Name",
    emailAddress: "Email Address",
    uploadCv: "Upload Curriculum Vitae (CV)",
    submitApplication: "Submit Application",

    contactUs: "Contact Us",
    getInTouchSubtitle: "Reach out to our corporate headquarters or specialized business divisions. We look forward to exploring synergies.",
    sendAMessage: "Send a Corporate Message",
    subject: "Subject of Inquiry",
    messageText: "Message Description",
    sendMessageBtn: "Send Message",
    headOffice: "Corporate Head Office",
    businessHours: "Business Operations Hours",
    monSatHours: "Monday - Saturday: 8:00 AM - 6:00 PM",
    sunClosed: "Sunday: Closed",

    companyDescription: "For nearly sixty years, Nefas Silk Paints Factory PLC has pioneered premium paint manufacturing, while diversifying into coffee exports, agro-exports, and nationwide logistics infrastructure.",
    quickLinks: "Quick Corporate Links",
    newsletterTitle: "Corporate Newsletter",
    newsletterSub: "Stay informed of our technological innovations, agricultural trade market reports, and shipping logistics updates.",
    subscribeBtn: "Subscribe",
    allRightsReserved: "All rights reserved. Designed to international industrial standards."
  },
  AM: {
    home: "መነሻ ገጽ",
    about: "ስለ እኛ",
    businesses: "የስራ መስኮቻችን",
    products: "ምርቶች",
    shops: "ሱቆች",
    logistics: "ሎጂስቲክስ",
    news: "ዜና እና ሚዲያ",
    careers: "ስራ ዕድል",
    contact: "እውቂያ",
    getInTouch: "ያግኙን",
    searchPlaceholder: "ድርጅታዊ መረጃ ይፈልጉ...",
    searchButton: "ፈልግ",
    whatsappSimulated: "የዋትስአፕ የደንበኞች ድጋፍ ተጀምሯል!",
    callSimulated: "ወደ ዋናው መስሪያ ቤት የስልክ ጥሪ እየተደረገ ነው: +251 11 442 7701",

    heroTitle1: "ዓለምዎን",
    heroTitle2: "የሚቀይሩ",
    heroTitle3: "ቀለሞች",
    heroSubtitle: "ለስድስት አስርት ዓመታት ያህል ንፋስ ስልክ ቀለሞች ፋብሪካ ኃ.የተ.የግ.ማ በኢትዮጵያ ውስጥ ቀለሞችን በማምረት የታመነ የኢንዱስትሪ መሪ ሆኖ ቆይቷል። አሁን ደግሞ ወደ ቡና ላኪነት፣ ግብርና ምርቶች እና ሎጂስቲክስ በመሰማራት አድጓል።",
    exploreBtn: "የስራ መስኮቻችንን ይጎብኙ",
    productsBtn: "ምርቶቻችን",
    contactBtn: "ያግኙን",
    yearsOfExcellence: "ዓመታት የታመነ አገልግሎት",
    foundedText: "የተመሰረተው በ1959 ዓ.ም",
    employees: "ሰራተኞች",
    skilledTalent: "የሰለጠኑ ኢትዮጵያውያን ባለሙያዎች",
    logisticsTrucks: "የሎጂስቲክስ መኪኖች",
    corridorText: "የአዲስ አበባ - ጅቡቲ መስመር",
    globalPartners: "ዓለም አቀፍ",
    exportPartnersLabel: "የኤክስፖርት አጋሮች",
    directTradeText: "ቀጥተኛ የንግድ ግንኙነቶች",

    storytellingTitle: "የፈጠራ እና የእምነት ታሪክ",
    companyHistory: "ታሪካዊ ጉዟችን",
    ceoMessageTitle: "የዋና ስራ አስኪያጅ መልዕክት",
    ceoSubTitle: "ከማኔጂንግ ዳይሬክተራችን የተላለፈ መልዕክት",
    ceoSignature: "ተድላ ይዘንጋው",
    coreValuesTitle: "ዕሴቶቻችን",
    coreValuesSub: "የስራችን፣ የጥራት ቁጥጥራችን እና ለማህበረሰቡ የምናደርገው አስተዋፅኦ መሰረታዊ ምሰሶዎች።",
    valueQuality: "ለጥራት ያለን ቁርጠኝነት",
    valueQualityDesc: "በኬሚካል ቀለሞች ዝግጅት፣ በግብርና ምርቶች ጥራት ደረጃ እና በትራንስፖርት ደህንነት ላይ የማይደራደር ጥራት።",
    valueProf: "ሙያዊ ብቃት",
    valueProfDesc: "ዘመናዊ ላቦራቶሪያችንን፣ የማምረቻ ክፍሎቻችንን እና የሎጂስቲክስ መኪኖቻችንን የሚመሩ ከፍተኛ ባለሙያዎች።",
    valueIntegrity: "ታማኝነት",
    valueIntegrityDesc: "ከቡና አምራች ገበሬዎች፣ ከድርጅት አጋሮች እና ከዓለም አቀፍ ደላሎች ጋር ግልጽ የሆነ ግብይት ማድረግ።",
    valueTrust: "ተዓማኒነት",
    valueTrustDesc: "በኢትዮጵያ እና በዓለም ዙሪያ ካሉ ደንበኞች ጋር ወደ ስድስት አስርት ዓመታት ገደማ የዘለቀ የእምነት ግንኙነት መገንባት።",
    valueCommunity: "የማህበረሰብ ኃላፊነት",
    valueCommunityDesc: "ቡናን በቀጥታ ከገበሬዎች ህብረት ስራ ማህበራት በመግዛት ዘላቂ የኢንዱስትሪ የስራ ዕድሎችን መፍጠር።",
    valueCustomer: "የደንበኞች እርካታ",
    valueCustomerDesc: "ለደንበኞች የተለየ የኢንዱስትሪ ምርቶችን ማዘጋጀትና አስተማማኝ አቅርቦት በሀገር አቀፍ ደረጃ ማድረስ።",
    valueFlex: "ተለዋዋጭነት",
    valueFlexDesc: "ከዓለም አቀፍ የወጪ ንግድ ደንቦች እና አዳዲስ የሎጂስቲክስ ፍላጎቶች ጋር በፍጥነት መላመድ።",

    businessesTitle: "የተለያዩ የስራ መስኮቻችን",
    businessesSub: "ለአፍሪካ እድገት ማኑፋክቸሪንግን፣ ሎጂስቲክስን እና ግብርናን ማስተሳሰር።",
    paintManufacturing: "የቀለም ማምረት ስራ",
    paintMfgDesc: "ከ1959 ጀምሮ በጌጣጌጥ፣ በኢንዱስትሪ እና በልዩ ቀለሞች ግንባር ቀደም አምራች።",
    coffeeExport: "የቡና ኤክስፖርት",
    coffeeExportDesc: "ከገበሬዎች የተሰበሰበውን ምርጥ የዓረብኛ ቡና ለዓለም አቀፍ ገዢዎች ማቅረብ።",
    fleetLogistics: "ትራንስፖርት እና ሎጂስቲክስ",
    fleetLogisticsDesc: "ከ200 በላይ በድርጅታችን አርማ የተሽሞነሞኑ መኪኖች በጅቡቲ መስመር የኤክስፖርት-ኢምፖርት ስራዎችን ያሳልጣሉ።",
    agroExport: "የግብርና ምርቶች ኤክስፖርት",
    agroExportDesc: "ጥራት ያላቸው የሁመራ ሰሊጥ፣ የቅባት እህሎች እና ጥራጥሬዎች ለዓለም ገበያ ማዘጋጀት።",
    learnMore: "ተጨማሪ ይመልከቱ",

    productCatalogue: "የቀለም ካታሎግ እና ፎርሙላዎች",
    allCategories: "ሁሉም ምድቦች",
    specificationText: "የምርት ዝርዝር መግለጫ",
    technicalSheet: "የቴክኒክ መረጃ ወረቀት",
    applicationText: "የአጠቃቀም መመሪያ",
    availableColors: "ያሉ ቀለሞች ምርጫ",
    packagingSizes: "የማሸጊያ መጠኖች",
    relatedProducts: "ተዛማጅ ምርቶች",
    downloadPdfBtn: "የቴክኒክ መረጃ ፒ.ዲ.ኤፍ (PDF) ያውርዱ",

    showroomNetwork: "የማሳያ ክፍሎች አውታረ መረብ",
    findStoresTitle: "የቀለም ሱቆቻችንን ያግኙ",
    findStoresSub: "ከቀለም አማካሪዎቻችን ጋር ይገናኙ፣ ልዩ ምርቶቻችንን ይመልከቱ እና በዋና ዋና የንግድ ማዕከላት ፈጣን የቀለም ማደባለቅ አገልግሎት ያግኙ።",
    filterOutlets: "ሱቆችን ይምረጡ",
    searchStorePlaceholder: "ሱቆችን በስም ወይም በአድራሻ ይፈልጉ...",
    liveCoords: "ቀጥታ ካርታ",
    mapLayerDetails: "የካርታ ዝርዝር መረጃ",
    callBtn: "ስልክ ይደውሉ",
    directionsBtn: "አቅጣጫ አሳይ",
    navigateBtn: "አቅጣጫ ጀምር",

    corridorTransitTitle: "የምስራቅ አፍሪካ የትራንዚት መስመር",
    fleetDivisionTitle: "የትራንስፖርት እና ሎጂስቲክስ ዘርፍ",
    fleetDivisionSub: "ከ200 በላይ ዘመናዊ እና የንፋስ ስልክ ቀለም አርማ ያለባቸውን ከባድ መኪኖች በመያዝ አዲስ አበባን ከጅቡቲ ወደብ ጋር የሚያገናኘውን ወሳኝ መስመር እናገለግላለን።",
    connectingTrade: "ዓለም አቀፍ ንግድን ማገናኘት",
    addisDjiboutiHighway: "የአዲስ አበባ - ጅቡቲ አውራ ጎዳና",
    logisticsPara1: "የትራንስፖርት ዘርፋችን ትልቁ ስኬታችን ነው። የሎጂስቲክስ መስመሮቻችንን በመቆጣጠር ለቡና ኤክስፖርታችን እና ለቀለም ኬሚካሎች ግብዓት አስተማማኝ አገልግሎት እናረጋግጣለን።",
    logisticsPara2: "ሁሉም መኪኖቻችን በሮችና ተሳቢዎች ላይ የንፋስ ስልክ ቀለሞች ፋብሪካ ታዋቂ አርማ በጉልህ ይታይባቸዋል። ይህ በ1000 ኪሎሜትር አውራ ጎዳና ላይ ታማኝነትንና ጥራትን ያሳያል።",
    activeTrailerFleet: "የሚንቀሳቀሱ በድርጅቱ ስም የተመዘገቡ ተሳቢዎች",
    heavyDutyTrucks: "ከባድ የጭነት መኪኖች",
    highwayDistance: "የአዲስ አበባ - ጅቡቲ መስመር",
    liveCorridorTracker: "ቀጥታ የትራንዚት መከታተያ ካርታ",
    transitActiveBadge: "ትራንዚት ላይ ያለ",
    hornOfAfricaCorridor: "የአፍሪካ ቀንድ የሎጂስቲክስ መስመር",
    portGateway: "የጅቡቲ ወደብ የባህር በር",
    stationNodeInfo: "የጣቢያው መረጃ",

    groupCompaniesTitle: "የእህት ኩባንያዎቻችን",
    groupCompaniesSub: "ከቀለም ማምረት፣ ግብርና ኤክስፖርት እና ሎጂስቲክስ በተጨማሪ ሌሎች እህት ኩባንያዎቻችን የኢንዱስትሪ እድገትን ያፋጥናሉ።",
    beetarIndustries: "ቢታር ኢንዱስትሪዎች",
    beetarDesc: "ከፍተኛ ጥራት ያላቸው ፕላስቲኮችን፣ የቀለም ማሸጊያዎችን እና የኢንዱስትሪ ረዳት እቃዎችን የሚያመርት ትልቅ የኢንዱስትሪ ግቢ።",
    damiET: "ዳሚ ኢቲ ጫማ ሶል",
    damiETDesc: "በጣሊያን ዲዛይን የተነደፉ የጫማ ሶሎችን በማምረት ለትላልቅ የጫማ ፋብሪካዎች የሚያቀርብ ዘመናዊ ፋብሪካ።",
    anbessaShoe: "አንበሳ ጫማ እና ቆዳ ፋብሪካ",
    anbessaDesc: "በአዲስ አበባ የተመሰረተ፣ በአፍሪካ ጥንታዊ እና ታዋቂ ከሆኑ የጫማ እና የቆዳ ማምረቻዎች አንዱ። ምርቶቹን ለዓለም ገበያ ያቀርባል።",

    careersTitle: "ቡድናችንን ይቀላቀሉ",
    careersSub: "በምስራቅ አፍሪካ ቀዳሚ በሆነው እና ለደህንነት፣ ፈጠራና ጥራት ትኩረት በሚሰጠው ድርጅታችን ውስጥ የስራ ህይወትዎን ያሳድጉ።",
    benefitsTitle: "ከእኛ ጋር መስራት ጥቅሞቹ",
    benefitsSub: "ሰራተኞቻችንን ለማብቃት እና የተሟላ ደህንነታቸውን ለማረጋገጥ ምቹ የስራ ሁኔታን ፈጥረናል።",
    recruitmentTimeline: "የቅጥር ሂደት ቅደም ተከተል",
    timelineStep1: "1. ማመልከቻ በኢንተርኔት",
    timelineStep1Desc: "የስራ ማመልከቻ ፎርማችንን በመሙላት የእርስዎን ሲቪ (CV) ያያይዙ።",
    timelineStep2: "2. የክህሎት ፈተና",
    timelineStep2Desc: "ለስራ መደቡ የሚመጥን የቴክኒክ ወይም የዕውቀት መመዘኛ ፈተና ይሰጣል።",
    timelineStep3: "3. ቃለ መጠይቅ",
    timelineStep3Desc: "ከሚመለከታቸው የ R&D ኬሚስቶች፣ ወይም የዘርፍ ኃላፊዎች ጋር የሚደረግ ቃለ መጠይቅ።",
    timelineStep4: "4. ስራ መጀመር እና ስልጠና",
    timelineStep4Desc: "ያለፉ አመልካቾች በከፍተኛ ባለሙያዎች የታገዘ የስራ ላይ ስልጠና ያገኛሉ።",
    applyNow: "አሁን ያመልክቱ",
    applicationFormTitle: "የስራ ማመልከቻ ፎርም",
    fullName: "ሙሉ ስም",
    emailAddress: "የኢሜይል አድራሻ",
    uploadCv: "ሲቪ (CV) ያያይዙ",
    submitApplication: "ማመልከቻ አስገባ",

    contactUs: "ያግኙን",
    getInTouchSubtitle: "ለጥያቄዎችዎ ወይም አብሮ ለመስራት ወደ ዋና መስሪያ ቤታችን ወይም ወደ ስራ ዘርፎቻችን በስልክ ወይም በኢሜይል ያግኙን።",
    sendAMessage: "የድርጅት መልዕክት ይላኩ",
    subject: "የጥያቄው ርዕስ",
    messageText: "የመልዕክቱ ዝርዝር",
    sendMessageBtn: "መልዕክት ላክ",
    headOffice: "የዋናው መስሪያ ቤት አድራሻ",
    businessHours: "የስራ ሰዓታት",
    monSatHours: "ከሰኞ - ቅዳሜ: ከጠዋቱ 2:00 - ከሰዓት 12:00 ሰዓት",
    sunClosed: "እሁድ: ዝግ ነው",

    companyDescription: "ለስድስት አስርት ዓመታት ያህል ንፋስ ስልክ ቀለሞች ፋብሪካ ኃ.የተ.የግ.ማ በኢትዮጵያ ውስጥ የቀለም ኢንዱስትሪን በመምራት፣ ቡና ኤክስፖርት፣ ግብርና እና ሎጂስቲክስ ላይ በመሰማራት በታማኝነት አገልግሏል።",
    quickLinks: "ፈጣን ሊንኮች",
    newsletterTitle: "የድርጅቱ ጋዜጣ",
    newsletterSub: "ስለ አዳዲስ ቴክኖሎጂዎች፣ የግብርና ኤክስፖርት ዋጋዎች እና የትራንስፖርት መረጃዎች ፈጣን መረጃዎችን ያግኙ።",
    subscribeBtn: "ይመዝገቡ",
    allRightsReserved: "መብቱ በህግ የተጠበቀ ነው። በዓለም አቀፍ ደረጃዎች የተነደፈ።"
  }
};
