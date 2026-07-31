// Central content store sourced from the Morgan Bailey Executive Summary & SRS.
export const company = {
  name: "Morgan Bailey Limited",
  short: "Morgan Bailey",
  tagline: "Your sure outsourcing partner",
  founded: "ISO 9001:2000 Certified Outsourcing Company",
  address: "51 Agodogba Avenue, Ikoyi, Lagos",
  phones: ["+234 (1) 461 2118", "+234 806 903 0389"],
  email: "morgan@morgan-baileyng.com",
  hours: [
    { days: "Monday - Friday", time: "08:00 - 18:00" },
    { days: "Saturday - Sunday", time: "Closed" },
  ],
  social: {
    facebook: "https://www.facebook.com/MorganBaileyNG/",
    twitter: "https://twitter.com/MorganBaileyNG/",
    instagram: "https://www.instagram.com/MorganBaileyNG/",
    youtube: "https://www.youtube.com/user/MorganBaileyNG/",
  },
};

export const heroHeadlines = [
  "Our great network of people and services makes us your sure outsourcing partner.",
  "Project management from start to finish - we are in sync with you.",
  "Great at outsourcing, logistics support & project management services.",
];

export const services = [
  {
    id: "project-management",
    code: "01",
    icon: "🧭",
    name: "Project Management",
    image: "/images/services/project-management.jpg",
    summary:
      "Delivering results on time and on budget across all nine project management knowledge areas.",
    description:
      "Our Project Management Service is built from years of experience delivering projects for customers across sectors. We apply Project Management Institute processes and proven tools to take a project from initiation through planning, execution, monitoring, and control.",
    points: [
      "Project Integration Management",
      "Project Scope Management",
      "Project Schedule Management",
      "Project Time Management",
      "Project Cost Management",
      "Project Quality Management",
      "Project Human Resource Management",
      "Project Communication Management",
      "Project Risk Management",
      "Project Procurement Management",
    ],
  },
  {
    id: "human-resource-management",
    code: "02",
    icon: "👥",
    name: "Human Resource Management",
    image: "/images/human resources.jpg",
    summary:
      "People administration, payroll, and workforce development handled end to end.",
    description:
      "We manage the full employee lifecycle for our clients - from deployment to payroll, industrial relations, training, and capacity building - so internal teams can focus on core business.",
    points: [
      "People administration and deployment",
      "Payroll administration and management",
      "Industrial relations management",
      "Workforce training and development",
      "HR consulting",
      "Capacity building",
    ],
  },
  {
    id: "logistics-support",
    code: "03",
    icon: "🚚",
    name: "Logistics Support Services",
    image: "/images/services/logistics-support.jpg",
    summary:
      "Managing the flow of goods, information, and resources from origin to consumption.",
    description:
      "Logistics is the art and science of strategically managing the flow of goods, services, and information. Our logistics support covers a range of interdependent functions - virtually every critical business activity is a component of logistics - with plans that are prepared, implemented, and controlled end to end.",
    points: [
      "Logistics management planning",
      "Forward and reverse flow of goods & services",
      "Point-of-origin to point-of-consumption coordination",
      "Competitive-bid procurement of goods and services",
      "Packaging, transportation and delivery coordination",
    ],
  },
  {
    id: "procurement-management",
    code: "04",
    icon: "🛒",
    name: "Procurement Management Services",
    image: "/images/services/procurement-management.jpg",
    summary:
      "Strategic sourcing and supplier management that reduces cost and risk.",
    description:
      "We run the full procurement cycle on our clients' behalf, from sourcing strategy through supplier evaluation and contract administration.",
    points: [
      "Strategic sourcing",
      "Spend management analysis",
      "Supplier identification",
      "Supplier evaluation",
      "Supplier / vendor management",
      "Negotiation",
      "Contract administration and management",
    ],
  },
  {
    id: "ground-support",
    code: "05",
    icon: "🛫",
    name: "Ground Support Services",
    image: "/images/services/ground-support.jpg",
    summary:
      "Travel, protocol, security and transportation, managed on the ground.",
    description:
      "From itinerary planning to protocol and transportation, our ground support team keeps people and schedules moving safely and on time.",
    points: [
      "Travel, itinerary and appointment management",
      "Visa assistance",
      "Protocol services",
      "Security services",
      "Transportation services",
    ],
  },
  {
    id: "fleet-management",
    code: "06",
    icon: "🚗",
    name: "Fleet Management Services",
    image: "/images/services/fleet-management.jpg",
    summary:
      "Sourcing, maintenance, and tracking across a client's entire vehicle fleet.",
    description:
      "We manage vehicle assets across their full lifecycle - policy, acquisition, maintenance, and disposal - backed by driver management and tracking systems.",
    points: [
      "Policy and implementation",
      "Vehicle sourcing, acquisition and disposal",
      "Maintenance and accident management",
      "Driver management",
      "Vehicle tracking and management",
      "Full maintenance lease solutions",
    ],
  },
  {
    id: "storage-facilities",
    code: "07",
    icon: "🏢",
    name: "Storage Facilities",
    image: "/images/services/storage-facilities.jpg",
    summary: "Secure storage and flexible delivery and pick-up solutions.",
    description:
      "We store and control pledged goods for clients, with delivery, pick-up, and container load/offload solutions built around each client's operation.",
    points: [
      "Storage and control of pledged goods",
      "Various delivery and pick-up solutions",
      "Container load and offload services",
    ],
  },
  {
    id: "distribution-services",
    code: "08",
    icon: "📦",
    name: "Distribution Services",
    image: "/images/services/distribution-services.jpg",
    summary:
      "Fast, efficient supply chain monitoring and delivery for importers and exporters.",
    description:
      "Our distribution service covers supply chain management, with monitoring and delivery built to serve both large importers and small exporters efficiently.",
    points: [
      "Supply chain management",
      "Monitoring and delivery services",
      "Support for large importers and small exporters alike",
    ],
  },
  {
    id: "destination-services",
    code: "09",
    icon: "🌍",
    name: "Destination Services",
    image: "/images/services/destination-services.jpg",
    summary:
      "Helping people relocate and settle, from pre-arrival to departure.",
    description:
      "Our destination service consultants guide relocating staff through every stage of a move - before arrival, while settling in, and through departure.",
    points: [
      "Pre-arrival assessment",
      "Immigration assistance",
      "Area tour & orientation",
      "Home-finding assistance",
      "Furniture rental / purchase",
      "Settling-in services",
      "Departure services",
    ],
  },
];

export const testimonials = [
  {
    name: "Bode",
    quote:
      "Morgan Bailey has the best support service professionals you can ever get. They are always sensitive to our needs and always right on time. They organize, lead and manage the people, materials and processes of all our projects. We are glad to work with them.",
  },
  {
    name: "Simon",
    quote:
      "Morgan Bailey provided us with exceptional service and kept us informed all throughout the project.",
  },
];

export const aboutContent = {
  intro:
    "Morgan Bailey is an outsourcing services provider in Logistics Support Services and Project Management. An ISO 9001:2000 certified outsourcing company, we design, implement and execute functional solutions for both local and international needs. Our professional services are directed at helping clients optimise their business operations.",
  philosophy:
    "Our operating philosophy embodies the principles of partnership. We become an extension of our clients' businesses through relationships of trust that transcend the technicalities of formal contracts, producing shared, mutually generated benefits. Our solutions reflect a detailed understanding of clients' needs, objectives and service-level targets, integrated seamlessly with their operating systems. Constant communication and commitment to improvement lead to long-term partnerships that advance our clients' strategic business objectives.",
  quality:
    "At Morgan Bailey, we take quality seriously. Our strength means quality service, a high service level, and client satisfaction. We have built a repository of expertise by attracting skilled people across project management and logistics support, backed by sophisticated computerised systems and management processes in compliance with world best practice.",
  values: [
    {
      title: "One-stop philosophy",
      body: "A single interface for all outsourced management support needs - reducing waste, increasing service levels, and mitigating risk.",
    },
    {
      title: "Expert-led teams",
      body: "Led by experts in Project Management and Logistics Management with many years of experience across demanding environments.",
    },
    {
      title: "Client-first professionalism",
      body: "From first enquiry to execution, our people are courteous, friendly and helpful - client satisfaction is our top priority.",
    },
  ],
};

export const blogHeroImage = "/images/blog-hero.jpg";

export const blogPosts = [
  {
    id: "team-collaboration-resolutions",
    title: "Three Resolutions for Better Project Team Collaboration",
    excerpt:
      "If your project team is still struggling with collaboration, it may be time for a few practical resolutions.",
    date: "2024",
    body: [
      "If your project team or entire organisation is still having issues with team collaboration and your platform of choice, it's time to make resolutions about how your team collaborates and uses a collaboration platform. These resolutions can give you the extra push to implement the changes needed to make collaboration an integral part of teamwork, project management, and communication.",
      "1. Decentralise the management and administration of the collaboration platform. Centralised management over collaboration platforms can be a pain point - analyse ways your organisation can decentralise platform management and move it out to teams and departments. Train site administrators, create clear policies for decentralised management, and provide feedback channels so administrators across the organisation can learn from one another.",
      "2. Establish and follow an enterprise collaboration plan. Collaboration platforms need a plan to prosper - put together an enterprise collaboration plan with clear elements your organisation can follow.",
      "3. Move one email-based workflow to the collaboration platform. Start with an easy candidate, such as a technical document review. Emailing documents back and forth risks version confusion - tools with built-in workflow features let everyone work from the same version without needing a programmer to set it up.",
    ],
  },
  {
    id: "team-building-tips",
    title: "5 Team Building Tips Every Leader Must Know",
    excerpt:
      "Great teams share goals, clear roles, and the ability to resolve conflict constructively - here's how leaders build them.",
    date: "2024",
    body: [
      "Great teams are the building blocks of any organisation. A great team has shared goals, clear roles, transparent processes for solving problems and making decisions, and the ability to deal with conflict constructively. It's up to the leader to make sure all of these elements are in place.",
      "Emphasise common interests and values. Getting group members to agree on objectives and the need for cooperative effort builds strong identification with the group. Emphasise mutual interests rather than differences, and encourage members to share information and help each other.",
      "Talk about the importance of building trust and collaboration. This is vital when tasks require sharing information, equipment, and resources over long, stressful projects. Without trust and acceptance, success will elude the team - the leader must reinforce the need for cooperation.",
      "Increase incentives for mutual cooperation. Great leaders use incentives based on group performance rather than individual competition - formal bonuses tied to team improvement, or informal spontaneous rewards, both reinforce the value of service to the team.",
      "Create a system to integrate new team members easily. Help new employees assimilate faster, transmit culture and values, and build community through orientation programmes - from a short walkthrough of policies to full immersion in the team's culture.",
      "Brand your teams. Help a new team create a group identity through a name, slogan, logo, or insignia. Team branding creates strong group identification, and ceremonies marking achievements or milestones reinforce it further.",
    ],
  },
];

export const careers = {
  intro:
    "Our people understand our vision and appreciate the value of our clients. Collectively, they form a diversely skilled human resource base dedicated to continuous development. Through empowerment, they participate in shaping our future and are accountable for our corporate objectives.",
  note: "We are a leading logistics support service organisation of international standard. Due to expansion in our business, we often require vacant positions to be filled.",
  applyEmail: "morgan@morgan-baileyng.com",
  openRoles: [
    {
      title: "Logistics Coordinator",
      type: "Full-time / Lagos",
      summary:
        "Coordinate day-to-day logistics operations, from procurement liaison to delivery tracking, for a portfolio of client accounts.",
    },
    {
      title: "Project Management Officer",
      type: "Full-time / Lagos",
      summary:
        "Support project managers across the nine PMI knowledge areas - scope, schedule, cost, quality, risk, and procurement.",
    },
    {
      title: "Fleet & Ground Support Supervisor",
      type: "Full-time / Lagos",
      summary:
        "Oversee vehicle sourcing, maintenance, driver management, and ground transportation for client operations.",
    },
  ],
};
