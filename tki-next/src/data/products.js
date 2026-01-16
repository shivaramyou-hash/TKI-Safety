const productsData = [
  // --- SPECIALISED VEHICLES, MACHINERY & EQUIPMENT ---
  {
    id: 'fire-fighting',
    title: "Fire Fighting",
    slug: "fire-fighting",
    image: "/images/post-1.jpg",
    category: "Specialised Vehicles",
    description: "Our specialised firefighting vehicles and equipment are designed for rapid response and high performance in the most demanding environments.",
    subItems: [
      "Fire Pumps",
      "Fire Detection and Firefighting and alarm systems in buildings",
      "Standard Firefighting trucks",
      "Specialist Firefighting Trucks",
      "Forest, air crash and Industrial firefighting trucks",
      "stat. extinguishing technology",
      "Mobile systems – mobile foam units, extinguishing medium on trolleys",
      "Respiratory Protective Equipment – SCBA, CABA",
      "Firefighting Hose, Branches"
    ]
  },
  {
    id: 'environmental-protection',
    title: "Environmental Protection",
    slug: "environmental-protection",
    image: "/images/post-2.jpg",
    category: "Specialised Vehicles",
    description: "Advanced solutions for environmental monitoring, spill containment, and waste management to ensure ecological safety.",
    subItems: [
      "Spill Kits",
      "HazMat trucks",
      "Measuring trucks",
      "Oil defence / oil separation",
      "Ro/Ro-Containers",
      "Decontamination Units",
      "Detection Units (Gas detectors, radiation detectors, bomb detectors)",
      "Environmental Monitoring Devices",
      "Spill Containment Equipment"
    ]
  },
  {
    id: 'disaster-management',
    title: "Disaster Management",
    slug: "disaster-management",
    image: "/images/post-3.jpg",
    category: "Specialised Vehicles",
    description: "Comprehensive equipment for emergency response, rescue operations, and infrastructure safety during large-scale disasters.",
    subItems: [
      "Technical Rescue Equipment",
      "Technical Rescue Trucks",
      "Special purpose trucks",
      "Ro/Ro-Containers",
      "Equipment and accessories",
      "Safety Equipment",
      "Coveralls – Gas tight suits",
      "Skid Units"
    ]
  },
  {
    id: 'communication',
    title: "Communication",
    slug: "communication",
    image: "/images/post-4.jpg",
    category: "Specialised Vehicles",
    description: "High-reliability communication systems for mission-critical operations and remote field coordination.",
    subItems: [
      "Handheld portable radio telephone",
      "Skull bone microphone",
      "Mobile Command Units",
      "Ro/Ro-Containers",
      "Telecommunication and radio systems",
      "Camera systems",
      "Thermal Imaging Camera",
      "Telemetry Systems"
    ]
  },
  {
    id: 'aerial-rescue',
    title: "Aerial Rescue",
    slug: "aerial-rescue",
    image: "/images/post-5.jpg",
    category: "Specialised Vehicles",
    description: "Specialized aerial platforms and ladder trucks for vertical rescue operations and high-rise fire control.",
    subItems: [
      "Turntable ladder trucks",
      "Telescopic rescue platforms",
      "Aerial Ladder Platform"
    ]
  },

  // --- POLICE AND MILITARY EQUIPMENT & MACHINERY ---
  {
    id: 'police-tactical',
    title: "Police Tactical",
    slug: "police-tactical",
    image: "/images/post-6.jpg",
    category: "Police & Military",
    description: "Tactical gear and advanced sighting systems for specialized law enforcement and military units.",
    subItems: [
      "Optics and Sights",
      "Weapon Lights",
      "Batons and holders",
      "Handcuffs and keys"
    ]
  },
  {
    id: 'enforcement-monitoring',
    title: "Enforcement and Monitoring",
    slug: "enforcement-monitoring",
    image: "/images/post-1.jpg",
    category: "Police & Military",
    description: "Surveillance and detection technology for effective law enforcement and public security monitoring.",
    subItems: [
      "Alcohol Breathalyser",
      "Speed Detection Camera",
      "Thermal Imaging Camera",
      "Metal Detectors"
    ]
  },

  // --- FIREFIGHTING EQUIPMENT ---
  {
    id: 'detection-system',
    title: "Detection System",
    slug: "detection-system",
    image: "/images/post-2.jpg",
    category: "Firefighting Equipment",
    description: "Sophisticated fire detection and early warning systems ensuring maximum safety and rapid response.",
    subItems: [
      "Fire Detection system",
      "Smoke",
      "Heat",
      "Flame (IR/UV)",
      "Rate of Rise Detectors",
      "Stand Alone detector",
      "Carbon Monoxide Detectors",
      "Beam Detectors"
    ]
  },
  {
    id: 'alarm-system',
    title: "Alarm System",
    slug: "alarm-system",
    image: "/images/post-3.jpg",
    category: "Firefighting Equipment",
    description: "Emergency alarm and evacuation systems designed for clear communication during fire incidents.",
    subItems: [
      "Fire Alarms Panels",
      "Emergency Lighting",
      "Manual Call Point",
      "Addressable Manual Call Point",
      "Sounder",
      "Strobe Light and Sounder",
      "Wireless Addressable Fire Alarm System",
      "Wireless Conventional Fire Alarm System"
    ]
  },
  {
    id: 'fixed-installation',
    title: "Fixed Installation",
    slug: "fixed-installation",
    image: "/images/post-4.jpg",
    category: "Firefighting Equipment",
    description: "Permanent fire suppression and hydrant systems for integrated facility protection.",
    subItems: [
      "Water Suppression System",
      "Fire Hydrants",
      "Dry/Wet Risers",
      "Foam Suppression System",
      "Dry Powder Suppression System",
      "Carbon dioxide Suppression",
      "FM 200",
      "Sprinklers/Drenchers",
      "Hose reel Hose",
      "Vehicle Suppression"
    ]
  },
  {
    id: 'portable-firefighting',
    title: "Portable Firefighting",
    slug: "portable-firefighting",
    image: "/images/post-5.jpg",
    category: "Firefighting Equipment",
    description: "Manual extinguishers and portable pumping equipment for immediate first-response firefighting.",
    subItems: [
      "Portable Fire extinguisher",
      "Water Type – 9L & 11L",
      "Foam Extinguishers – 9L & 11L",
      "Dry Powder Extinguisher – 2Kg, 4Kg, 6Kg, 9 Kg",
      "Wet Chemical Powder – Class K Extinguisher",
      "Carbon Dioxide 2Kg, 5Kg",
      "Water Mist Fire Extinguisher",
      "Fire Blanket",
      "Lay-flat Fire Hoses",
      "Floating Pumps",
      "Portable fire Pump (petrol/diesel/electric)"
    ]
  },
  {
    id: 'signage',
    title: "Signage",
    slug: "signage",
    image: "/images/post-6.jpg",
    category: "Firefighting Equipment",
    description: "Standardized fire safety and emergency exit signage for compliance and clear direction.",
    subItems: [
      "Exit",
      "No Smoking",
      "Assembly Point",
      "Manual Call Point",
      "Fire Notice",
      "Fire Door Keep Shut",
      "Hazardous Material Diamond",
      "Hose Reel Hose",
      "Danger High Voltage",
      "Flammable Liquid/Gas"
    ]
  }
];

export default productsData;
export { productsData };
