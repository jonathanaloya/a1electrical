export const BRANDS = [
  {
    slug: "abb",
    name: "ABB",
    init: "AB",
    cat: "Switchgear Distribution",
    desc: "ABB switches are designed for reliable, safe and long-lasting electrical control in residential, commercial and industrial applications. They offer modern designs, high-quality materials, and a wide range of switch, socket and control solutions — including DBs, contactors, overload relays, MCBs, MCCBs, RCBs, drives, motors, ATS and change-overs — providing excellent performance, easy installation and dependable operation for professional electrical installations.",
    logo: "/images/brands/abb.jpeg",
  },
  {
    slug: "siemens",
    name: "Siemens",
    init: "SI",
    cat: "Switchgear Distribution",
    desc: "Siemens electrical products are designed for high performance, safety, and reliable operation across residential, commercial, and industrial applications. The range includes switches, sockets, circuit breakers, contactors, protection devices, control equipment, and distribution solutions, offering modern design, advanced technology, easy installation, and long-lasting performance for professional electrical systems.",
    logo: "/images/brands/siemens.png",
  },
  {
    slug: "vaf-power",
    name: "VAF Power",
    init: "VP",
    cat: "Wiring Accessories",
    desc: "VAF Power offers a complete range of electrical products including switches, sockets, fans, distribution boards, and home & commercial decorative lighting solutions, combining modern designs, reliable performance, safety features, and quality construction for residential, commercial, and industrial applications. VAF Power also supplies lightning arresters and earthing copper accessories — including earth rods, tapes, clamps and cable lugs — for protection against lightning and electrical surges.",
    logo: "/images/brands/vaf-power.png",
  },
  {
    slug: "philips-signify",
    name: "Philips & Signify",
    init: "PH",
    cat: "Light Fittings & Luminaires",
    desc: "Philips & Signify Lighting provide innovative, energy-efficient lighting solutions for residential, commercial, industrial, architectural, and outdoor applications. The range includes LED lamps, panels, downlights, floodlights, street lighting, decorative luminaires, and smart connected lighting systems.",
    logo: "/images/brands/phillips.jpeg",
  },
  {
    slug: "marshall-tufflex",
    name: "Marshall-Tufflex",
    init: "MT",
    cat: "PVC Trunking & Conduits",
    desc: "Marshall-Tufflex provides high-quality cable management and electrical installation solutions for commercial, industrial, and building projects. The range includes trunking, conduit, cable trays, dado systems, floor systems, and accessories for safe and organised cable routing, offering durable construction, easy installation, professional finish, and reliable long-term performance.",
    logo: "/images/brands/marshall-tufflex.jpeg",
  },
  {
    slug: "orient-electric",
    name: "Orient Electric",
    init: "OE",
    cat: "Ventilation & Fans",
    desc: "Orient Electric offers a wide range of high-quality fans and air-circulation solutions for residential, commercial, and industrial applications. The range includes ceiling fans, wall fans, exhaust fans, pedestal fans, and energy-efficient smart fan solutions, combining modern design, powerful airflow, energy efficiency, quiet operation, and reliable long-lasting performance.",
    logo: "/images/brands/orient_electric.jpg",
  },
  {
    slug: "rr-electric",
    name: "RR Electric",
    init: "RR",
    cat: "Cables & Wires",
    desc: "RR Motor Rewinding Wire offers high-quality enameled copper winding wires designed for motors, transformers, pumps, and other electrical equipment. The wires provide excellent conductivity, thermal resistance, insulation, and reliable performance in demanding applications, and are available in various sizes and insulation grades to ensure efficient motor operation, durability, and long service life.",
    logo: "/images/brands/rr.png",
  },
  {
    slug: "sollatek",
    name: "Sollatek",
    init: "SO",
    cat: "Power Protection",
    desc: "Sollatek Protection provides reliable power protection and voltage regulation solutions for residential, commercial, and industrial applications. The range includes voltage stabilizers, surge protectors, automatic voltage switches, power conditioners, and specialized protection systems, helping protect sensitive electrical and electronic equipment from voltage fluctuations, surges, spikes, and unstable power.",
    logo: "/images/brands/sollatek.jpeg",
  },
  {
    slug: "eaton",
    name: "Eaton",
    init: "EA",
    cat: "Security & Fire Alarms",
    desc: "Eaton Fire Alarm Systems provide reliable fire detection, alarm, and life-safety solutions for residential, commercial, and industrial buildings. The range includes fire alarm panels, detectors, sounders, manual call points, modules, emergency signaling, and system accessories, offering fast detection, dependable performance, easy integration, and enhanced safety for complete fire protection systems.",
    logo: "/images/eaton.jpeg",
  },
  {
    slug: "neelkanth-cables",
    name: "Neelkanth Cables",
    init: "NC",
    cat: "Cables & Wires",
    desc: "Neelkanth Cable offers a complete range of wires and cables for house, commercial and factory wiring. PVC/XLPE insulated, copper and aluminium cables, including single, multicore and flexible types, plus armoured and power cables for safe, reliable and long-lasting electrical installations. Cable glands in brass, nickel-plated brass and other types are supplied for safe cable entry and protection.",
    logo: "/images/brands/neelkanth.png",
  },
  {
    slug: "servo-stabilizers",
    name: "Servo Stabilizers",
    init: "SV",
    cat: "Power Protection",
    desc: "Servo Automatic Voltage Stabilizers protect appliances and electrical equipment against high and low voltage fluctuations, providing stable output voltage with overload and short-circuit protection for reliable operation.",
    logo: null,
  },
];

export const findBrand = (slug) => BRANDS.find((b) => b.slug === slug);

export const PRODUCT_SUB_CATEGORIES = {
  "Cables & Wires": [
    {
      heading: "Cable Solutions",
      content:
        "A1 Electricals provide cable and wiring products sourced from leading electrical product manufacturers for domestic, commercial, industrial and power distribution applications. We offer a full range of electrical wires and cables manufactured to the highest standards by leading British and European manufacturers suitable for use in all applications. Our large stocks ensure we can meet urgent requirements for quick shipment while offering extremely competitive prices.",
    },
    {
      heading: "Product Range",
      content:
        "A1 Electricals can supply a wide range of wires and cables including underground cables and systems, medium and low voltage cables, voice video and data transmission cables, optical fibres and optical and copper cables. We provide a solution for a wide variety of applications such as power grids, underground cabling, telecoms, infrastructure and transport.",
    },
    {
      heading: "Cable Management",
      content:
        "We also stock and supply cable trays and conduits from leading manufacturers, ensuring your cable runs are properly contained and protected. Our team can help you select the right containment solution for your installation, whether it's a domestic property, commercial building or industrial facility.",
    },
  ],
  "Light Fittings & Luminaires": [
    {
      heading: "LED Energy Saving Luminaires",
      content:
        "Our wide range of LED energy saving luminaires offer the best quality at extremely competitive pricing. This comprehensive range includes LED downlights, fire-rated downlights, spotlights, floodlights, industrial high-bay and low-bay luminaires, LED panels of all shapes and sizes, and LED amenity lighting. Our products are suitable for large scale industrial, commercial and residential installations.",
    },
    {
      heading: "Industrial Lighting",
      content:
        "A1 Electricals offer the most comprehensive range of industrial lighting for factories, manufacturing plants, warehouses, cold rooms, ports, stadiums and airports. We can supply HID power luminaires or the most energy efficient LED luminaires dependent on your specific requirements. We also supply modular luminaires, corrosion resistant fittings, floodlights, bulkheads, ceiling fittings and emergency lighting from top manufacturers.",
    },
    {
      heading: "Street and Security Lighting",
      content:
        "Whether you require conventional, LED energy saving or solar street lighting, A1 Electricals can offer luminaires, poles and highmast fittings to meet your every need. A full range of downlights, spotlights and floodlights mean whatever your needs we can supply quickly at the most competitive prices.",
    },
  ],
  "Wiring Accessories": [
    {
      heading: "Sockets",
      content:
        "A1 Electricals offer a comprehensive range of switch sockets for domestic and commercial use. From standard sockets to multi-use sockets we can find the right product for your requirements. We can also supply a range of combination plates which offer a combined functionality of power, audio visual and data connectivity at one single point in the room. Our sockets come in a wide range of finishes from standard white to contemporary polished chrome and also natural finishes like wood.",
    },
    {
      heading: "Switches and Dimmers",
      content:
        "Our comprehensive range enables us to offer a wide choice of standard white accessories, or more decorative accessories including black nickel, stainless steel, polished chrome and polished brass depending on the finish you are looking for. We stock dimmer switches for LED and conventional lamps, cooker and shower connection units, and grid switch plates with modular faceplate systems.",
    },
    {
      heading: "Lighting Controls",
      content:
        "A1 Electricals offer a wide range of lighting control systems suitable for commercial buildings and domestic use. Sensors and dimming switches are available which can help reduce energy costs. Multi-panel grids can help reduce installation costs housing a number of light switches on one panel.",
    },
  ],
  "Cable Trays & Conduits": [
    {
      heading: "Cable Trays and Cable Ladders",
      content:
        "In order to meet all your requirements for internal wiring systems we offer a full range of commercial and industrial cable trays and cable ladders in galvanised steel. These are available in a number of lengths, widths and configurations. Our extensive range offers solutions to all your commercial, industrial and residential wiring problems and can be supplied with suitable wiring accessories, power distribution units and floor outlet boxes. Special products for zone 1 and zone 2 installations available on request.",
    },
    {
      heading: "Conduits",
      content:
        "We offer a range of conduits for your cable management systems in either galvanised steel or PVC and GRP plastic. These are available in a number of lengths, widths and configurations and we can also supply all the wiring accessories you require. Rigid steel conduit provides maximum mechanical protection for containment runs where cables are exposed to potential damage.",
    },
    {
      heading: "Containment Fittings",
      content:
        "Every tray and conduit system we supply comes with a full range of matched fittings including bends, tees, reducers, couplers and support brackets so you can complete a containment run without mixing incompatible components. Hot-dip galvanising provides long-term corrosion resistance in humid climates, while stainless steel is available for the most demanding external or chemical environments.",
    },
  ],
  "Steel Cable Trunking": [
    {
      heading: "Mini Trunking",
      content:
        "50x50mm mini trunking for light data and signal runs, pre-galvanised or painted, with matching lids and accessories for clean, professional finishes. Mini trunking is ideal for domestic and light commercial applications where a discreet, low-profile cable management solution is required.",
    },
    {
      heading: "Standard Trunking",
      content:
        "100x50mm to 150x75mm medium trunking for mixed power and data circuits, with single and multi-compartment options for EMC compliance. Single and multi-compartment options allow power and data cables to be segregated within the same trunking run, an important consideration for EMC compliance and signal integrity in office and industrial environments.",
    },
    {
      heading: "Heavy-Duty Trunking",
      content:
        "300x150mm heavy-duty trunking for large power cable bundles, complete with bends, tees, flat angles, flanged couplers and end caps. All sections are supplied with matching lids, and a full range of accessories is available to complete any run.",
    },
  ],
  "PVC Trunking & Conduits": [
    {
      heading: "PVC Trunking",
      content:
        "Self-extinguishing, flame-retardant PVC trunking from 16mm mini-trunking for telephone and data cables to 100x50mm multi-compartment sections for power circuits. Lightweight, easy to cut and clip, our range makes first-fix installation fast and cost-effective without compromising on cable protection or finished appearance.",
    },
    {
      heading: "Round Conduit",
      content:
        "Round PVC conduit from 20mm to 32mm with junction boxes, bends and couplers, UV-stabilised for external and semi-exposed installations. All PVC products in our range are manufactured from self-extinguishing, flame-retardant compound, so they won't propagate a fire along a cable run.",
    },
    {
      heading: "Cable Management Accessories",
      content:
        "Conduit clips, saddles and white-finish trunking as standard, with other colours available to order for matched interior aesthetics. From 16mm mini-trunking for telephone and data cables to 100x50mm multi-compartment sections for busier runs, we stock the sizes most commonly used in domestic and commercial installations.",
    },
  ],
  "Lighting Control": [
    {
      heading: "Indoor Lighting Controls",
      content:
        "A wide range of lighting controls with wallbox dimmers, occupancy sensors and wireless devices are supplied by A1 Electricals. These are ideal for residential properties or single room commercial buildings. Dimmers let you control the amount of energy used helping you save electricity and extend the life of bulbs. Occupancy and vacancy sensors are one of the easiest ways to save energy in the home office and are easy to install.",
    },
    {
      heading: "Outdoor Lighting Controls",
      content:
        "A1 Electricals supply outdoor lighting control systems that allow remote management of the entire lighting infrastructure. This can offer a number of benefits including a flexible lighting system that can be adapted for special events, energy and CO2 savings and maintenance cost savings. Photocells for daylight-linked switching and time switches for scheduled on/off control of external lighting reduce energy use while maintaining security.",
    },
    {
      heading: "Emergency Lighting",
      content:
        "A wide range of emergency lighting products are available from A1 Electricals. All products offer high power and efficient LED lighting for excellent performance over a wide area. We supply emergency lighting for indoor and outdoor use. High performance exit signs with LED lights are also available for surface or suspended application.",
    },
  ],
  "Lamps, Bulbs & Tubes": [
    {
      heading: "LED Bulbs",
      content:
        "A1 Electricals offer a wide range of LED energy efficient bulbs incorporating standard GLS type domestic lamps, LED candle bulbs and globe bulbs. These include B22, E27 and E14 lampholders in both clear and opal finish. In addition, a full range of GU10 spot and flood lights, all of which offer instant start and flicker free long life. LED lamps now offer a direct replacement for almost every legacy lamp format with lifespans of up to 50,000 hours and energy consumption up to 80% lower than incandescent equivalents.",
    },
    {
      heading: "Fluorescent Tubes",
      content:
        "A1 Electricals offer an excellent range of retro-fit LED tubes – top quality with double ended rotatable power end caps in either T8 or T5 models. Energy saving, long life with superb packaging and real value for money. We also offer a full range of standard fluorescent tubes suitable for all applications. All tubes are available in a variety of colours including daylight, cool white, warm white and white.",
    },
    {
      heading: "HID Lamps",
      content:
        "A1 Electricals are pleased to offer a full range of High Intensity Discharge sodium, metal halide and mercury discharge lamps. These lamps are suitable for use in a wide range of applications like streetlights, floodlights and highbay luminaires. All our lamps are manufactured by leading blue chip brands. Compact fluorescent lamps in all common caps are also available for energy-saving retrofit applications.",
    },
  ],
  "Solar LED Lighting": [
    {
      heading: "Solar LED Street Lights",
      content:
        "In today's rapidly evolving solar market, A1 Electricals are perfectly positioned to provide you with a range of solar lighting products suitable for commercial and residential usage. Solar powered LED lighting is easy to install with no digging up roads, trenching or cables required. Ongoing maintenance is low and the units will produce light within 24 hours of installation. We work with industry-leading providers to ensure the products we supply are reliable and durable and comply with all relevant standards.",
    },
    {
      heading: "Advantages of Solar LED Lighting",
      content:
        "Solar LED street lighting is cost effective, easy to install and not reliant on the local electricity supply. It can be used in a wide range of locations including car parks, bus stops and shelters, ports and harbours, and parks and public areas. With solar LED lighting you will have no problems with electricity supply, no changing bulbs or ballasts and the units start working immediately.",
    },
    {
      heading: "Solar Floodlights",
      content:
        "Solar floodlights for compounds, car parks and building exteriors, sized for security and area lighting where grid power is absent or unreliable. All-in-one solar LED street lights integrate a monocrystalline panel, LiFePO4 battery, LED head and intelligent controller into a single pole-mounted unit, with dusk-to-dawn and motion-boost modes standard.",
    },
  ],
  "Switchgear Distribution": [
    {
      heading: "Switchgear Systems",
      content:
        "Improve reliability, increase efficiency and enhance safety by installing centralised switchgear control systems. Our switchgear products give you centralised control and protection of low and medium voltage power equipment and circuits in industrial, commercial, and utility installations that house generators, motors and transmission lines. We offer a broad portfolio of low and medium voltage electrical equipment that can distribute, monitor and manage power throughout your facility.",
    },
    {
      heading: "Distribution Boards",
      content:
        "A1 Electricals supply a wide range of medium and low voltage power distribution products. These include panel boards, switchboards, transformers and busways. We also supply a range of switches, disconnects and enclosed circuit breakers. From a domestic consumer unit to a 630A industrial distribution board, our switchgear range covers the full spectrum of LV power distribution.",
    },
    {
      heading: "Consumer Units and Enclosures",
      content:
        "Domestic consumer units from 6-way to 24-way, pre-fitted with MCBs and RCDs where required, in metal and polycarbonate enclosures. Single-phase distribution boards for commercial premises and three-phase panelboards for industrial installations, with IP ratings from IP41 for indoor use to IP65 for external and industrial environments.",
    },
  ],
  "Circuit Protection": [
    {
      heading: "Circuit Protection",
      content:
        "In conjunction with our low voltage distribution boards and consumer units we offer a wide range of circuit protection equipment manufactured to IEC60898-1 and IEC60947-2. These can be supplied in a wide range of sizes to suit small one-off installations or large scale commercial buildings. They can be applied in panelboards, switchboards, motor control centres, control panels, combination starters and individual enclosures.",
    },
    {
      heading: "Circuit Breaker Range",
      content:
        "We supply a variety of circuit breakers, from digital units with integrated digital technology to custom built boards. Our product range includes MCCB moulded case circuit breakers, RCBO residual current circuit breakers with overcurrent protection, RCCB residual current circuit breakers, and MCB miniature circuit breakers. Correct discrimination between protective devices ensures the device closest to the fault operates first, critical to a reliable installation.",
    },
    {
      heading: "Fuses and Surge Protection",
      content:
        "HRC fuses and fuse bases, moulded case circuit breakers up to 630A, surge protection devices and isolators for complete circuit protection. Whether you're populating a new distribution board, replacing a tripped or faulty device, or upgrading an older installation to current standards, we hold stock of the most commonly specified protective devices for immediate supply.",
    },
  ],
  "Motor Controls & Starters": [
    {
      heading: "DOL Starters",
      content:
        "Direct-on-line starters up to 15kW with contactors, thermal overload relays and IP54/IP65 enclosures for pump and fan applications. Reliable motor starting and protection is essential in any industrial or commercial plant, whether you're running pumps, fans, compressors or process machinery. Our team can help you select the correct contactor and overload combination for your motor rating and duty cycle.",
    },
    {
      heading: "Star-Delta Starters",
      content:
        "Star-delta starters for motors up to 150kW, providing reduced-current starting for larger industrial loads with proper interlocking arrangements. Contactors and overload relays from ABB and Siemens form the core of our motor control range, with thermal and electronic overload relays providing accurate motor protection across the full load range.",
    },
    {
      heading: "Soft-Start Units",
      content:
        "Soft-start units for smooth motor acceleration, reducing mechanical stress and inrush current on motors driving conveyors, compressors and process machinery. IP54 and IP65 enclosures are available for installations in wet or dusty environments. We supply motor control equipment to industrial plants, water utilities, building services contractors and process engineers across Uganda.",
    },
  ],
  "Power Protection": [
    {
      heading: "Protecting Your Assets",
      content:
        "We offer a comprehensive package of UPS systems and inverters. These are available in both three phase and single phase units and help to offer stable and regulated power supply to expensive IT and electronic equipment. A1 Electricals can supply a full range of reliable power protection solutions to protect against the damaging effects of lightning, utility switching, switching electric motors, and blackouts. All products comply with the latest industry standards.",
    },
    {
      heading: "UPS Systems",
      content:
        "Line-interactive UPS from 600VA to 3kVA for workstations and small servers, and online double-conversion UPS from 1kVA to 20kVA for critical loads. UPS systems provide battery backup during outages, automatic voltage regulators correct sustained over and under-voltage, and surge protection devices clamp transient spikes before they reach your equipment.",
    },
    {
      heading: "Voltage Stabilisers and Surge Protection",
      content:
        "Servo-type automatic voltage regulators for continuous voltage correction and relay-type AVRs for cost-sensitive applications where battery backup isn't required. Type 1 surge protection devices for main distribution boards and Type 2 SPDs for sub-distribution and individual equipment protection. Power quality problems are often invisible until equipment fails or data is lost.",
    },
  ],
  "Lightning Protection": [
    {
      heading: "Air Terminals",
      content:
        "Air terminal rods and early streamer emission ESE terminals engineered to BS EN 62305 for effective lightning strike interception. Uganda sits within one of the world's highest lightning density zones, making effective lightning protection a genuine life-safety requirement rather than an optional extra.",
    },
    {
      heading: "Down Conductors",
      content:
        "Flat tape and round conductor down conductors with test clamps and inspection joints, providing a low-impedance path from the air terminal network to earth. Copper is specified for the most demanding environments and where long service life is critical; aluminium offers a cost-effective alternative for less aggressive conditions.",
    },
    {
      heading: "Earthing Systems",
      content:
        "Copper and aluminium earth rods, inspection pits and equipotential bonding bars, sized according to BS EN 62305 risk-assessment standards. Earth resistance testing is an essential part of both commissioning and ongoing maintenance of a lightning protection system. We stock earth resistance test kits and can advise on testing methodology.",
    },
  ],
  "Security & Fire Alarms": [
    {
      heading: "Comprehensive Product Range",
      content:
        "A1 Electricals provide a wide range of Security and Fire systems sourced from leading electrical product manufacturers for domestic, commercial and industrial applications. Whether you are installing fire detection or security systems our extensive product range will meet your needs. We can also source and supply most advanced equipment needed for specialist projects. Our range includes fire detection, security alarms, fire panels, smoke and heat detectors, alarm bells, electronic sounders, break glass units, emergency lighting, PIRs and CCTV.",
    },
    {
      heading: "Fire Detection Systems",
      content:
        "We can supply complete fire detection systems or individual components to meet your requirements. All are certified to British and International standards giving you peace of mind that properties are properly protected. We can supply smoke and heat detectors designed for operation on conventional systems together with sounder beacons and electronic bells which can be used in a wide range of applications. Fire detection and alarm panels are available in a range of sizes dependent on the premises and the number of zones required.",
    },
    {
      heading: "Security Systems",
      content:
        "Whether you are installing a security system in a new construction or a retro-fit for an existing building our extensive product range will meet your needs. We can supply a wide range of security systems for commercial, industrial and residential premises. Depending on your security requirements we can supply standalone CCTV systems or fully integrated security, access control and fire detection systems.",
    },
  ],
  "Ventilation & Fans": [
    {
      heading: "Axial Fans",
      content:
        "Axial wall fans for bathrooms and kitchens from 100mm to 150mm, with airflow rates from 15 to 500 cubic metres per hour and noise levels from 26dB(A). Good ventilation is essential in Uganda's hot, humid climate, both for occupant comfort and to prevent the moisture damage and mould growth that poor air movement encourages.",
    },
    {
      heading: "Centrifugal and Inline Fans",
      content:
        "Centrifugal fans for longer duct runs where higher pressure is required, specified for airflow, noise and humidity performance in commercial settings. Inline duct fans for commercial ventilation systems with humidistat, timer and pull-cord control options, rated IP24 to IP45 for wet-room applications.",
    },
    {
      heading: "Ventilation Solutions",
      content:
        "We supply ventilation fans to building contractors, M&E installers and facilities managers across Kampala. Whether you need a single replacement fan for a domestic bathroom or a full commercial ventilation package for an office or retail fit-out, our team can help you match the right unit to your duct size, airflow requirement and control preference.",
    },
  ],
  "Generators": [
    {
      heading: "Commercial Generators",
      content:
        "Loss of power to an office or industrial facility can cause considerable disruption and economic loss. A standby generator will supply lights and safety equipment in such an event. An alternate power source may be required in commercial premises by building codes and regulations. We can supply portable generators and emergency battery packs for small facilities through to standby generators and central battery systems for larger scale commercial operations.",
    },
    {
      heading: "Portable Generators",
      content:
        "Where power supply is intermittent we can supply a range of portable generators which are suitable for domestic and light commercial use. These come in a wide range of sizes and are designed to keep lights and appliances powered in the event of a power outage. Load shedding remains a fact of life across much of Uganda, and a reliable generating set is the most practical solution for homes and businesses that cannot afford downtime.",
    },
    {
      heading: "Silent Canopy and Containerised Sets",
      content:
        "Silent canopy diesel generators for residential and commercial use, reducing noise to acceptable levels for populated areas. Containerised generating sets from 100kVA to 500kVA for industrial prime power applications, with automatic transfer switches for seamless changeover from mains to generator supply.",
    },
  ],
  "Bespoke Requirements": [
    {
      heading: "Non-Standard Items",
      content:
        "Not every project fits neatly within a standard product catalogue. When your specification calls for something outside our stocked range, our sourcing team works directly with manufacturers and distributors to find and procure it. We have established relationships with manufacturers across the UK, Europe and the Far East, and experience navigating the import and logistics requirements for electrical equipment entering Uganda.",
    },
    {
      heading: "Custom Assemblies",
      content:
        "Project-specific enclosures, IP-rated housings and bespoke panel assemblies built to particular schedules of requirements. Bespoke orders are consolidated with standard stock items wherever possible, reducing freight costs and simplifying delivery to your site or project store.",
    },
    {
      heading: "Import Coordination",
      content:
        "Import and logistics coordination for overseas manufacturers, with consolidation of bespoke items with standard stock orders for single delivery. Lead times and minimum order quantities vary by product and manufacturer, and we'll give you a realistic timeline and cost before you commit.",
    },
  ],
  "Transformers & Power Distribution": [
    {
      heading: "Distribution Transformers",
      content:
        "Oil-filled distribution transformers from 25kVA to 2500kVA for utility, industrial and commercial step-down applications, alongside dry-type cast-resin transformers for indoor and fire-sensitive installations. Pole-mounted and pad-mounted options are available depending on your site layout and safety requirements.",
    },
    {
      heading: "Transformer Protection",
      content:
        "HRC fuses, drop-out fuses and Buchholz relays protect transformers against overload and internal fault conditions. Correct protection coordination between the transformer and upstream network is essential for both equipment longevity and system stability, and our team can advise on the right protection scheme for your installation.",
    },
    {
      heading: "Power Distribution Equipment",
      content:
        "Power distribution panels, ring main units (RMUs) and associated switchgear complete the supply chain from transformer to final distribution. We also stock transformer oil, bushings and spare parts to support ongoing maintenance of existing installations.",
    },
  ],
  "Industrial Control & Automation": [
    {
      heading: "Drives & Motor Control",
      content:
        "Variable speed drives (VSDs/VFDs) and soft-starters provide precise motor speed control and smooth acceleration, reducing mechanical stress and energy consumption compared to fixed-speed operation. We stock drives suitable for pumps, fans and general industrial motor applications.",
    },
    {
      heading: "PLCs & Process Control",
      content:
        "Programmable logic controllers (PLCs) and HMI touch panels give plant managers precise control and visibility over industrial processes. We supply control relays, timers and industrial push-buttons alongside PLCs for building out complete control panels.",
    },
    {
      heading: "Sensors & Panel Building",
      content:
        "Proximity, level, pressure and temperature sensors feed real-world data back into your control system. We also stock the panel-building components — terminal blocks, DIN rail and wiring ducts — needed to assemble control panels to IP54 or IP65 enclosure ratings.",
    },
  ],
};

export function brandRangeItems(cat) {
  const map = {
    "Switchgear Distribution": [
      "Circuit breakers",
      "Switchgear",
      "Distribution boards",
      "Power protection",
    ],
    "Wiring Accessories": [
      "Switches",
      "Socket outlets",
      "Dimmers",
      "Cover plates",
    ],
    "Light Fittings & Luminaires": [
      "LED luminaires",
      "Downlights",
      "Floodlights",
      "Outdoor lighting",
    ],
    "Lamps, Bulbs & Tubes": [
      "LED lamps",
      "Fluorescent tubes",
      "Specialist lighting",
      "Retrofit bulbs",
    ],
    "PVC Trunking & Conduits": [
      "PVC trunking",
      "Conduit",
      "Cable management",
      "Floor outlet boxes",
    ],
    "Power Protection": [
      "Voltage stabilisers",
      "Surge protection",
      "UPS systems",
      "Power conditioning",
    ],
    "Motor Controls & Starters": [
      "Motor starters",
      "Contactors",
      "Overload relays",
      "Control panels",
    ],
    "Circuit Protection": [
      "Circuit breakers",
      "Switchgear",
      "Industrial electricals",
      "Protection relays",
    ],
  };
  return (
    map[cat] || [
      "Electrical accessories",
      "Related components",
      "Genuine spare parts",
    ]
  );
}

export function getLeadingBrand(cat) {
  const brand = BRANDS.find((b) => b.cat === cat && b.logo) || BRANDS.find((b) => b.cat === cat);
  return brand || null;
}

export function getSubCategories(productName) {
  return PRODUCT_SUB_CATEGORIES[productName] || [];
}
