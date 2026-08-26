import { PRODUCTS } from "./products.js";

export const BRANDS = [
  {
    slug: "abb",
    name: "ABB",
    init: "AB",
    cat: "Switchgear Distribution",
    tagline: "Global Technology Leader in Electrification & Automation",
    catalogueTitle: "ABB Power Distribution, Switchgear & Control Catalogue",
    desc: "ABB is a world-leading electrification leader offering dependable, precision-engineered electrical control solutions for residential, commercial and heavy industrial applications. The A1 Electricals ABB catalogue includes distribution boards, contactors, electronic overload relays, MCBs, MCCBs, ACBs, variable speed drives, motors, change-over switches and ATS assemblies — ensuring maximum safety, proven performance and long service life.",
    logo: "/images/brands/abb.jpeg",
    highlights: [
      "IEC 61439 Certified Low Voltage Systems",
      "High Breaking Capacities (6kA up to 100kA)",
      "Full Range of Contactors, Relays & Soft Starters",
      "Held in Stock at Our Kampala Showroom",
    ],
    rangeItems: [
      "System pro M compact® MCBs & RCDs (1A – 125A)",
      "Formula & Tmax XT Moulded Case Circuit Breakers (up to 630A)",
      "Emax 2 Air Circuit Breakers (ACBs up to 4000A)",
      "AF Series Industrial Contactors & Overload Relays",
      "ACS Variable Speed Drives (VFDs) & Soft Starters",
      "Mistral & ArTu Low Voltage Distribution Enclosures",
    ],
    products: [
      {
        name: "ABB System pro M compact® S200 MCBs",
        model: "S200 Series (1A – 63A)",
        cat: "Miniature Circuit Breakers",
        desc: "High-performance DIN-rail MCBs offering B, C and D trip curves with 6kA/10kA breaking capacity for residential, commercial and industrial LV installations.",
        image: "/images/products/circuit_breaker.jpeg",
        specs: [
          ["Breaking Capacity", "6kA / 10kA"],
          ["Poles", "1P, 2P, 3P, 4P"],
          ["Trip Curves", "B, C, D"],
          ["Standard", "IEC/EN 60898-1"],
        ],
      },
      {
        name: "ABB Formula & Tmax XT Moulded Case Breakers",
        model: "Tmax XT1 – XT5 (up to 630A)",
        cat: "Moulded Case Breakers",
        desc: "Compact MCCBs equipped with thermal-magnetic and electronic trip units providing high breaking capacity up to 70kA and selective grading.",
        image: "/images/mccb.jpeg",
        specs: [
          ["Rated Current", "16A – 630A"],
          ["Breaking Capacity", "36kA – 70kA"],
          ["Trip Unit", "TMD / Ekip Dip"],
          ["Standard", "IEC 60947-2"],
        ],
      },
      {
        name: "ABB AF Series Industrial 3-Pole Contactors",
        model: "AF09 – AF370 (up to 185kW)",
        cat: "Motor Contactors",
        desc: "Electronically controlled wide-band AC/DC operating coils with built-in surge suppression for dependable pump, fan, and compressor motor starting.",
        image: "/images/products/overload_relay.jpg",
        specs: [
          ["Control Voltage", "100V – 250V AC/DC"],
          ["Motor Duty", "AC-3 Rated"],
          ["Surge Protection", "Built-in Varistor"],
          ["Mounting", "DIN Rail / Base Plate"],
        ],
      },
      {
        name: "ABB ACS380 / ACS580 Machinery & Process Drives",
        model: "ACS380 & ACS580 (0.75kW – 250kW)",
        cat: "Variable Speed Drives",
        desc: "Precision variable frequency drives delivering optimal motor speed control, energy optimization, integrated Safe Torque Off (STO), and Modbus.",
        image: "/images/products/automation_drives.jpeg",
        specs: [
          ["Supply Voltage", "3-Phase 380-480V"],
          ["Control Modes", "Vector & Scalar"],
          ["Enclosure", "IP21 / IP55"],
          ["EMC Filter", "Class C2 Integrated"],
        ],
      },
      {
        name: "ABB Mistral65 IP65 Weatherproof Distribution Boards",
        model: "Mistral65 Series (8 – 72 Modules)",
        cat: "Distribution Enclosures",
        desc: "Durable halogen-free thermoplastic consumer units and panelboards engineered for high dust, water, and UV resistance in outdoor or factory settings.",
        image: "/images/products/distribution_board.jpeg",
        specs: [
          ["Ingress Protection", "IP65 / IK09"],
          ["Material", "Halogen-Free Polycarbonate"],
          ["Door", "Transparent Smoked / Opaque"],
          ["Temperature", "-25°C to +60°C"],
        ],
      },
      {
        name: "ABB OT & OTM Manual & Motorized Changeover Switches",
        model: "OT16 – OT1600 (16A – 1600A)",
        cat: "Transfer Switches",
        desc: "Heavy-duty 3P and 4P changeover switches with positive break contacts and high mechanical endurance for mains-generator transfer assemblies.",
        image: "/images/products/Switchgear Systems.jpeg",
        specs: [
          ["Poles", "3-Pole & 4-Pole"],
          ["Operation", "Manual / Automatic (ATS)"],
          ["Isolation", "Positive Break Contact"],
          ["Standard", "IEC 60947-3 / 60947-6-1"],
        ],
      },
    ],
  },
  {
    slug: "siemens",
    name: "Siemens",
    init: "SI",
    cat: "Switchgear Distribution",
    tagline: "Pioneering Infrastructure & Industrial Electrical Technology",
    catalogueTitle: "Siemens Automation, Switchgear & Protection Catalogue",
    desc: "Siemens electrical and automation products deliver high performance, advanced safety, and dependable reliability across modern buildings and industrial installations. The catalogue spans modular circuit breakers, heavy-duty contactors, protection devices, industrial control equipment, PLC automation, and low-voltage distribution systems engineered for optimal energy efficiency and continuous uptime.",
    logo: "/images/brands/siemens.png",
    highlights: [
      "German Precision Engineering Standards",
      "IEC / EN Standards Verified & Utility Approved",
      "Seamless Integration with Building & Factory Systems",
      "Prompt Collection & Uganda-Wide Delivery",
    ],
    rangeItems: [
      "SENTRON 5SY / 5SL MCBs & Residual Current Devices",
      "3VA Moulded Case Circuit Breakers (MCCB up to 630A)",
      "SIRIUS 3RT Contactors & 3RU Thermal Overload Relays",
      "SIMATIC S7 PLCs, HMI Touch Panels & Process Control",
      "Delta Switch & Socket Outlets for Commercial Fitouts",
      "ALPHA Low-Voltage Distribution Boards & Control Enclosures",
    ],
    products: [
      {
        name: "Siemens SENTRON 5SY4 / 5SL6 Miniature Circuit Breakers",
        model: "SENTRON 5SY / 5SL (0.5A – 63A)",
        cat: "Miniature Circuit Breakers",
        desc: "Precision German-engineered DIN rail MCBs with tool-free quick-release slider mechanism and 6kA/10kA breaking capacity.",
        image: "/images/products/circuit_breaker.jpeg",
        specs: [
          ["Breaking Capacity", "6kA / 10kA (IEC/EN 60898-1)"],
          ["Poles", "1P, 2P, 3P, 4P"],
          ["Trip Curves", "B, C, D Curves"],
          ["Standards", "IEC/EN 60898-1 & IEC 60947-2"],
        ],
      },
      {
        name: "Siemens 3VA1 & 3VA2 Moulded Case Circuit Breakers",
        model: "3VA Series (16A – 630A)",
        cat: "Moulded Case Breakers",
        desc: "Modular MCCBs with ETU electronic trip units, selective fault discrimination, and breaking capacities up to 100kA at 415V.",
        image: "/images/mccb.jpeg",
        specs: [
          ["Current Rating", "16A – 630A"],
          ["Breaking Capacity", "36kA – 100kA at 415V"],
          ["Trip Unit", "ETU 3-Series & 5-Series"],
          ["Standard", "IEC 60947-2"],
        ],
      },
      {
        name: "Siemens SIRIUS 3RT20 Industrial Power Contactors",
        model: "SIRIUS 3RT201 – 3RT204",
        cat: "Motor Contactors",
        desc: "Heavy-duty contactors up to 55kW motor power with spring-loaded or screw terminals, integrated varistors, and 30 million mechanical cycles.",
        image: "/images/products/motor_starter.jpeg",
        specs: [
          ["Sizes", "S00, S0, S2, S3 (up to 55kW)"],
          ["Terminals", "Screw & Spring-Loaded"],
          ["Auxiliary", "Built-in 1NO + 1NC Contacts"],
          ["Standards", "IEC/EN 60947-4-1"],
        ],
      },
      {
        name: "Siemens SIMATIC S7-1200 Compact PLC Controllers",
        model: "CPU 1212C / 1214C / 1215C",
        cat: "Industrial Automation",
        desc: "Compact modular programmable logic controllers with integrated PROFINET interface, high-speed counters, and flexible signal board expansions.",
        image: "/images/products/control_cabinet.jpeg",
        specs: [
          ["Interface", "Integrated PROFINET Ethernet"],
          ["I/O Expansion", "Signal Modules & Comm Boards"],
          ["Software", "TIA Portal STEP 7"],
          ["Memory", "Up to 150KB Work Memory"],
        ],
      },
      {
        name: "Siemens Delta Iris & Delta Style Rocker Switches & Sockets",
        model: "Delta Series 13A / 15A Outlets",
        cat: "Wiring Accessories",
        desc: "Architectural switches and switched socket outlets featuring silver-inlay contacts, child-safety shutters, and anti-microbial faceplates.",
        image: "/images/products/wiring_accessories.jpeg",
        specs: [
          ["Finishes", "Titanium White, Aluminium, Anthracite"],
          ["Ratings", "10AX Switches / 13A Shuttered Sockets"],
          ["Contact Material", "Silver Inlay High Conductivity"],
          ["Standards", "BS 1363 / IEC 60669-1"],
        ],
      },
      {
        name: "Siemens ALPHA 160 / ALPHA 630 Distribution Panelboards",
        model: "ALPHA Modular LV System",
        cat: "Distribution Boards",
        desc: "Floor-standing and wall-mounted sheet steel low voltage panelboards tested to IEC 61439-1/2 for main incoming and sub-distribution.",
        image: "/images/products/distribution_board.jpeg",
        specs: [
          ["Busbar Rating", "Rated up to 630A"],
          ["Ingress Protection", "IP43 / IP55 Sheet Steel"],
          ["Mounting", "Surface, Flush & Free-Standing"],
          ["Standard", "IEC 61439-1 & 2 Verified"],
        ],
      },
    ],
  },
  {
    slug: "larsen-toubro",
    aliases: ["lt", "l-and-t", "l&t"],
    name: "Larsen & Toubro",
    init: "LT",
    cat: "Switchgear Distribution",
    tagline: "Heavy-Duty Electrical Switchgear, Starters & Power Distribution",
    catalogueTitle: "Larsen & Toubro Switchgear & Industrial Control Catalogue",
    desc: "Larsen & Toubro (L&T) is renowned worldwide for heavy-duty switchgear, motor control centres, and power distribution equipment engineered for tough tropical environments. Available through A1 Electricals in Kampala, L&T switchgear provides high short-circuit withstand capacity, robust mechanical endurance, and proven reliability for commercial complexes, manufacturing lines, and agricultural processing plants.",
    logo: "/images/brands/larsen-toubro.jpeg",
    highlights: [
      "Heavy-Duty Industrial Grade Construction",
      "Tropicalized Insulation Designed for High Ambient Temperatures",
      "MK1 & MNX Direct-On-Line and Star-Delta Motor Starters",
      "Immediate Availability for Contractors & Factories in Uganda",
    ],
    rangeItems: [
      "Exora Modular MCBs, Isolators & Residual Current Devices",
      "DU100H & DU250H Moulded Case Circuit Breakers",
      "MK1 & MNX Series Direct-On-Line & Star-Delta Starters",
      "Thermal Bi-Metallic Overload Relays with Single-Phasing Protection",
      "Changeover Switches & On-Load Bypass Switches",
      "Heavy-Duty Metal Enclosed Industrial Distribution Boards",
    ],
    products: [
      {
        name: "L&T Exora 10kA Miniature Circuit Breakers & Isolators",
        model: "Exora Series (0.5A – 63A)",
        cat: "Miniature Circuit Breakers",
        desc: "Rugged DIN-rail MCBs with bi-connect dual terminals, true contact position indication flag, and 10kA fault breaking capacity.",
        image: "/images/products/circuit_breaker.jpeg",
        specs: [
          ["Breaking Capacity", "10kA (IEC 60898-1)"],
          ["Bi-Connect", "Cable & Busbar Dual Connection"],
          ["Indicator", "True Red/Green Flag"],
          ["Trip Curves", "B & C Characteristics"],
        ],
      },
      {
        name: "L&T DU100H & DU250H Moulded Case Circuit Breakers",
        model: "DU Series (16A – 250A)",
        cat: "Moulded Case Breakers",
        desc: "Reliable MCCBs with adjustable thermal settings (0.8–1.0x In) and 30kA–50kA breaking capacity for commercial and industrial boards.",
        image: "/images/mccb.jpeg",
        specs: [
          ["Breaking Capacity", "30kA – 50kA at 415V"],
          ["Adjustable Thermal", "0.8 to 1.0 x In Range"],
          ["Magnetic Setting", "Fixed / Adjustable"],
          ["Standards", "IEC 60947-2 / IS 13947-2"],
        ],
      },
      {
        name: "L&T MK1 & MNX Direct-On-Line & Star-Delta Starters",
        model: "MK1 / MNX (up to 75HP)",
        cat: "Motor Starters",
        desc: "Legendary heavy-duty motor starters with wide-band tropicalized operating coils, single phasing prevention, and IP54 metal enclosures.",
        image: "/images/products/motor_starter.jpeg",
        specs: [
          ["Starter Types", "DOL & Automatic Star-Delta"],
          ["Coil Reliability", "Wide Voltage Band Tropicalized Coil"],
          ["Single Phasing", "Built-in SPP Protection"],
          ["Enclosure", "IP54 Deep Drawn Sheet Steel"],
        ],
      },
      {
        name: "L&T RTA & RTC Bi-Metallic Thermal Overload Relays",
        model: "RTA1 / RTA2 / RTC Relays",
        cat: "Motor Protection",
        desc: "Ambient temperature compensated thermal relays (0.15A–120A) with manual/auto reset selector and Class 10A trip characteristics.",
        image: "/images/products/overload_relay.jpg",
        specs: [
          ["Current Range", "0.15A to 120A Selectable"],
          ["Compensation", "-5°C to +55°C Ambient Range"],
          ["Reset Modes", "Manual and Auto Reset Selector"],
          ["Trip Class", "Class 10A Overload Protection"],
        ],
      },
      {
        name: "L&T On-Load Changeover Switches (CO Series)",
        model: "CO Series (63A – 1000A)",
        cat: "Transfer Switches",
        desc: "Four-pole manual transfer changeover switches with heavy de-ionizing arc chutes and positive make-and-break switching.",
        image: "/images/products/Switchgear Systems.jpeg",
        specs: [
          ["Poles", "4-Pole Open & Enclosed Execution"],
          ["Arc Chutes", "Heavy De-ionizing Quenching Chutes"],
          ["Operation", "Manual Centre-Off Toggle"],
          ["Standard", "IEC 60947-3 Compliance"],
        ],
      },
      {
        name: "L&T Tripper Single & Three Phase Consumer Units",
        model: "Tripper SPN & TPN Enclosures",
        cat: "Distribution Boards",
        desc: "Powder-coated sheet steel distribution panelboards with insulated copper pan busbars and dual neutral/earth brass links.",
        image: "/images/products/panelboard.jpeg",
        specs: [
          ["Ways", "4, 6, 8, 12, 16-way TPN"],
          ["Busbars", "Insulated Copper Interlocking Pan"],
          ["Earthing", "Dual Neutral & Earth Brass Links"],
          ["Finish", "Powder-Coated Anti-Corrosion"],
        ],
      },
    ],
  },
  {
    slug: "vaf-power",
    name: "VAF Power",
    init: "VP",
    cat: "Wiring Accessories",
    tagline: "High-Performance Wiring Accessories, Earthing & Lighting",
    catalogueTitle: "VAF Power Wiring Devices, Earthing & Distribution Catalogue",
    desc: "VAF Power offers a complete catalogue of professional electrical products including designer switches, socket outlets, distribution boards, decorative lighting, and complete earthing and surge protection solutions. Built to East African and British Standards, VAF Power combines modern aesthetic styling with heavy-duty copper construction.",
    logo: "/images/brands/vaf-power.png",
    highlights: [
      "BS 1363 / East African Approved Quality",
      "High-Grade Pure Copper Earthing Accessories",
      "Contemporary Architectural Finishes & Cover Plates",
      "Full Range In-Stock at A1 Electricals Kampala",
    ],
    rangeItems: [
      "Modular Rocker Switches & 13A / 15A Socket Outlets",
      "Pure Copper Earth Rods, Tapes, Clamps & Cable Lugs",
      "Early Streamer Lightning Arresters & Surge Suppressors",
      "Single & Three-Phase Flush / Surface Distribution Boards",
      "Commercial & Decorative Architectural LED Fixtures",
      "Weatherproof IP66 Exterior Switches & Isolators",
    ],
    products: [
      {
        name: "VAF Modular Rocker Light Switches & 13A Sockets",
        model: "VAF Elegance Series",
        cat: "Wiring Accessories",
        desc: "Designer modular light switches and safety shuttered socket outlets in pure white and metallic finishes for contemporary architectural interiors.",
        image: "/images/products/wiring_accessories.jpeg",
        specs: [
          ["Faceplates", "Pure White, Brushed Silver, Champagne"],
          ["Socket Shutter", "Child-Safe Interlocking Mechanism"],
          ["Switch Rating", "10AX / 20A Double Pole"],
          ["Standards", "BS 1363 / BS EN 60669-1"],
        ],
      },
      {
        name: "VAF Pure Electrolytic Copper Earth Rods & Clamps",
        model: "5/8\" & 3/4\" Copperbond Rods",
        cat: "Earthing Accessories",
        desc: "High-tensile carbon steel core earth rods molecularly bonded with 99.9% pure electrolytic copper for low-resistance earth grounding.",
        image: "/images/products/ground_testing.jpeg",
        specs: [
          ["Copper Purity", "99.9% Electrolytic Copper Layer"],
          ["Tensile Strength", "600 N/mm² High Carbon Steel Core"],
          ["Lengths", "1.5m, 2.4m, 3.0m Threaded / Coupler"],
          ["Standards", "BS 7430 / BS EN 50164-2"],
        ],
      },
      {
        name: "VAF Early Streamer Emission (ESE) Lightning Arresters",
        model: "VAF StormShield ESE Terminals",
        cat: "Lightning Protection",
        desc: "Stainless steel Early Streamer Emission storm air terminals providing wide-radius structural lightning interception and high surge dissipation.",
        image: "/images/products/lightning_protection.jpeg",
        specs: [
          ["Protection Radius", "Up to 107m (Level IV)"],
          ["Material", "AISI 316L Stainless Steel"],
          ["Test Standard", "NF C 17-102:2011 Verified"],
          ["Surge Current", "Withstands 100kA (10/350µs)"],
        ],
      },
      {
        name: "VAF TPN Flush & Surface Distribution Boards",
        model: "VAF ProPower TPN Series",
        cat: "Distribution Boards",
        desc: "Sheet steel low-voltage panelboards with 250A solid copper busbars and pre-punched entries for MCCB or 4-pole switch-disconnector incomers.",
        image: "/images/products/distribution_board.jpeg",
        specs: [
          ["Busbar Capacity", "Solid Copper Rated to 250A"],
          ["Ways Available", "4, 6, 8, 12, 16-Way Outgoing"],
          ["Enclosure", "1.2mm CRCA Sheet Steel IP41/IP54"],
          ["Incomer", "Pre-punched for 4P Isolator or MCCB"],
        ],
      },
      {
        name: "VAF Weatherproof IP66 Exterior Switches & Outlets",
        model: "VAF AquaGuard Series",
        cat: "Weatherproof Outlets",
        desc: "Heavy-duty UV-stabilised polycarbonate weatherproof switched sockets with padlockable covers for garden, compound, and wash-bay applications.",
        image: "/images/products/weatherproof_outlets.jpeg",
        specs: [
          ["Ingress Protection", "IP66 Water & Dust Tight"],
          ["Impact Resistance", "IK08 Polycarbonate Housing"],
          ["Features", "Padlockable lid with gel seal gasket"],
          ["Configurations", "1-Gang & 2-Gang 13A Outlets"],
        ],
      },
      {
        name: "VAF Commercial Architectural Downlights & LED Panels",
        model: "VAF LuminaLux Series",
        cat: "Commercial Lighting",
        desc: "Anti-glare microprismatic recessed LED downlights and 600x600 ceiling panels delivering uniform illumination with flicker-free drivers.",
        image: "/images/products/led_lighting.jpeg",
        specs: [
          ["Efficiency", "110 lm/W High Output"],
          ["Diffuser", "Microprismatic Anti-Glare UGR<19"],
          ["Colour Temp", "3000K, 4000K, 6500K Selectable"],
          ["Driver", "Isolated Constant Current Flicker-Free"],
        ],
      },
    ],
  },
  {
    slug: "philips-signify",
    aliases: ["philips", "philips-lighting", "signify"],
    name: "Philips & Signify",
    init: "PH",
    cat: "Light Fittings & Luminaires",
    tagline: "World Leader in Energy-Efficient LED & Architectural Lighting",
    catalogueTitle: "Philips & Signify Commercial & Architectural Lighting Catalogue",
    desc: "Philips & Signify Lighting deliver world-class, energy-efficient lighting solutions for commercial buildings, industrial warehouses, architectural spaces, and outdoor infrastructure. Sourced genuinely through A1 Electricals, the catalogue features long-life LED luminaires, slim panels, high-output floodlights, downlights, and smart lighting systems.",
    logo: "/images/brands/phillips.jpeg",
    highlights: [
      "High Luminous Efficacy (up to 140 lm/W)",
      "50,000+ Hour L70 Rated Lifetime",
      "Uniform Beam Distribution & Low Glare (UGR<19)",
      "Official Genuine Warranty & Spares Availability",
    ],
    rangeItems: [
      "CoreLine & SmartBright Highbay Industrial Luminaires",
      "Heavy-Duty LED Floodlights & Area Projectors",
      "Recessed Slim Downlights & 600x600 LED Panel Lights",
      "Waterproof & Dustproof IP65 Linear Battens",
      "Road, Street & Solar-Hybrid Exterior Lighting",
      "Architectural Track Lights, Spotlights & Linear Profiles",
    ],
    products: [
      {
        name: "Philips CoreLine Highbay Gen4 Industrial LED Fixture",
        model: "BY121P / BY122P (100W – 200W)",
        cat: "Industrial High-Bays",
        desc: "High-efficiency 140 lm/W die-cast aluminium LED highbay luminaire with IP65 water protection and IK08 impact resistance for warehouses.",
        image: "/images/products/linear_luminaires.jpeg",
        specs: [
          ["Luminous Output", "14,000 – 28,000 lm (140 lm/W)"],
          ["Housing", "Die-Cast Aluminium Heat Sink"],
          ["Protection", "IP65 Waterproof / IK08 Impact"],
          ["Lifetime", "50,000 Hours L70B50 at 35°C"],
        ],
      },
      {
        name: "Philips SmartBright LED Floodlights (30W – 300W)",
        model: "BVP151 / BVP152 Series",
        cat: "Exterior Floodlights",
        desc: "Rugged outdoor floodlights with optical glass lens, robust 4kV surge protection, and high-efficiency beam output for yards and facades.",
        image: "/images/products/solar_flood_lights.jpeg",
        specs: [
          ["Efficacy", "120 lm/W High Lumen Package"],
          ["Surge Protection", "Built-in 4kV / 6kV SPD"],
          ["Optics", "Symmetrical & Asymmetrical Beams"],
          ["Operating Temp", "-40°C to +50°C Ambient"],
        ],
      },
      {
        name: "Philips Slim Downlights & Clean-Ceiling 600x600 Panels",
        model: "RC048B / DN027B Series",
        cat: "Commercial Panels",
        desc: "Ultra-slim low-glare office LED panels (UGR<19) providing uniform, flicker-free illumination with CRI > 80 natural color rendering.",
        image: "/images/products/luminaire_layouts.jpg",
        specs: [
          ["Glare Rating", "UGR<19 Low Glare Office Grade"],
          ["Thickness", "Ultra-Slim 11mm Profile"],
          ["Colour Rendering", "CRI > 80 Natural Illumination"],
          ["Warranty", "5-Year Philips Signify Warranty"],
        ],
      },
      {
        name: "Philips CoreLine Waterproof IP65 Linear LED Battens",
        model: "WT120C Series (1200mm / 1500mm)",
        cat: "Weatherproof Luminaires",
        desc: "Impact-resistant polycarbonate weatherproof battens with wide 110° beam distribution and integrated through-wiring for parking and workshops.",
        image: "/images/products/weatherproof_battens.jpeg",
        specs: [
          ["Ingress Rating", "IP65 & IK08 High Impact"],
          ["Through Wiring", "Integrated Phase Passthrough"],
          ["Beam Spread", "Wide 110° Light Distribution"],
          ["Mounting", "Ceiling, Wall or Suspended Brackets"],
        ],
      },
      {
        name: "Philips RoadFlair & GreenVision Solar/Grid Street Lights",
        model: "BRP391 / BRP392 Series",
        cat: "Street Lighting",
        desc: "Precision road and highway LED luminaires featuring specialized street optics, corrosion-resistant housings, and NEMA photocell sockets.",
        image: "/images/products/solar_compound.jpeg",
        specs: [
          ["Wattage Range", "50W to 240W High Efficiency"],
          ["Optics", "Specialized Road & Pedestrian Lenses"],
          ["Socket", "NEMA 7-Pin Photocell Ready"],
          ["Housing", "Corrosion-Resistant Die-Cast Aluminium"],
        ],
      },
      {
        name: "Philips MasterConnect & Hue Smart Architectural Spotlights",
        model: "RS140B Track & Recessed Spots",
        cat: "Architectural Lighting",
        desc: "High-CRI 90+ architectural track spotlights with interchangeable beam optics (15°/24°/36°) and DALI-2 dimming for retail and galleries.",
        image: "/images/products/decorative_finishes.jpeg",
        specs: [
          ["CRI Rating", "CRI > 90 High Fidelity Rendering"],
          ["Dimming", "DALI-2 / 1-10V / Wireless Zigbee"],
          ["Beam Angles", "15°, 24°, 36° Interchangeable"],
          ["Finishes", "Matte White & Matte Jet Black"],
        ],
      },
    ],
  },
  {
    slug: "ledvance",
    aliases: ["osram", "ledvance-osram"],
    name: "LEDVANCE",
    init: "LV",
    cat: "Light Fittings & Luminaires",
    tagline: "General Lighting Innovations & Smart Commercial Luminaires",
    catalogueTitle: "LEDVANCE & OSRAM Commercial & Industrial Lighting Catalogue",
    desc: "LEDVANCE, originating from the general lighting division of OSRAM, is a global leader in advanced LED luminaires, smart lighting, and replacement lamps. Sourced through A1 Electricals in Uganda, LEDVANCE luminaires deliver German photometric precision, exceptional energy savings, high CRI color rendering, and robust IP65/IK08 ratings for demanding commercial, warehouse, and outdoor applications.",
    logo: "/images/brands/ledvance.jpeg",
    highlights: [
      "Engineered by OSRAM Heritage Lighting Experts",
      "High Colour Rendering (CRI > 80/90) & Flicker-Free Drivers",
      "Robust Die-Cast Aluminium & Polycarbonate Construction",
      "Energy Savings up to 85% Compared to Legacy Fittings",
    ],
    rangeItems: [
      "High Bay Gen 4 Luminaires (100W – 200W IP65)",
      "Damp Proof IP65 Weatherproof LED Battens",
      "Panel Comfort 600x600 Glare-Free Office Fixtures",
      "Floodlight Performance Area & Facade Projectors",
      "Spotlight & Downlight Architectural Recessed Series",
      "Retrofit OSRAM LED Tubes, PAR Lamps & High-Wattage Bulbs",
    ],
    products: [
      {
        name: "LEDVANCE High Bay Gen 4 IP65 Fixtures (100W – 200W)",
        model: "Performance Gen 4 (150 lm/W)",
        cat: "Industrial High-Bays",
        desc: "Class-leading 150 lm/W industrial LED highbay with narrow and wide beam optical lenses, integrated 4kV surge suppressor, and die-cast housing.",
        image: "/images/products/linear_luminaires.jpeg",
        specs: [
          ["Efficiency", "150 lm/W High Efficacy"],
          ["Optics", "Narrow 70° & Wide 110° Lenses"],
          ["Surge Protection", "Integrated 4kV Surge Suppressor"],
          ["Mounting", "Heavy-Duty Suspension Hook Included"],
        ],
      },
      {
        name: "LEDVANCE Damp Proof IP65 Weatherproof Battens",
        model: "Damp Proof Housing & Tubes",
        cat: "Weatherproof Battens",
        desc: "Vandal-resistant IK08 moisture-proof fittings with stainless steel quick-latches and tool-free 5x2.5mm² through-wiring for tunnels and wash-bays.",
        image: "/images/products/weatherproof_battens.jpeg",
        specs: [
          ["Ingress Rating", "IP65 Dust & Water Jet Proof"],
          ["Impact Strength", "IK08 Vandal Resistant"],
          ["Clips", "Stainless Steel Tool-Free Latches"],
          ["Through-Wiring", "5x2.5mm² Pre-installed Cables"],
        ],
      },
      {
        name: "LEDVANCE Panel Comfort 600x600 Glare-Free Luminaires",
        model: "Panel Comfort UGR<19",
        cat: "Office Panel Lights",
        desc: "Microprismatic PMMA light guide panels engineered for low glare office and educational environments with ENEC certified flicker-free drivers.",
        image: "/images/products/luminaire_layouts.jpg",
        specs: [
          ["UGR Rating", "UGR < 19 Workplace Compliant"],
          ["Light Guide", "Non-Yellowing PMMA Optical Plate"],
          ["Drivers", "ENEC Certified Flicker-Free Driver"],
          ["Lifetime", "60,000 Hours L80/B10 Rating"],
        ],
      },
      {
        name: "LEDVANCE Floodlight Performance Asymmetrical 50W – 200W",
        model: "Performance Asymmetric Flood",
        cat: "Exterior Floodlights",
        desc: "High-output asymmetric beam floodlights designed for sports facilities, compounds, and architectural facade illumination.",
        image: "/images/products/solar_flood_lights.jpeg",
        specs: [
          ["Optics", "55° x 110° Asymmetric Beam Spread"],
          ["Application", "Facades, Sports Grounds, Parking"],
          ["Glass", "Impact-Resistant Thermal Treated"],
          ["Housing", "Matte Dark Grey Powder Coating"],
        ],
      },
      {
        name: "OSRAM SubstiTUBE High Output T8 & T5 LED Tubes",
        model: "SubstiTUBE HO T8 (600mm / 1200mm / 1500mm)",
        cat: "Retrofit Lamps",
        desc: "Shatterproof PET-coated glass retrofit LED tubes delivering up to 68% energy savings over conventional fluorescent tubes with single-pin safety.",
        image: "/images/products/led_lighting.jpeg",
        specs: [
          ["Energy Savings", "Up to 68% vs Fluorescent"],
          ["Safety", "Single-Ended Pin Protection"],
          ["Glass Body", "Shatterproof PET Coated Glass"],
          ["Luminous Flux", "Up to 3,100 Lumens Output"],
        ],
      },
      {
        name: "LEDVANCE Surface Circular & Downlight Slim Series",
        model: "Downlight Slim Selectable CCT",
        cat: "Downlights & Ceiling",
        desc: "Ultra-slim 25mm depth downlights with an on-fixture switch to toggle between 3000K, 4000K, and 6500K color temperatures.",
        image: "/images/products/decorative_finishes.jpeg",
        specs: [
          ["CCT Switch", "3000K / 4000K / 6500K Selectable"],
          ["Profile", "25mm Ultra-Slim Recessed Depth"],
          ["Driver", "Integrated Quick-Box External Driver"],
          ["Emergency", "Compatible with 3h Battery Packs"],
        ],
      },
    ],
  },
  {
    slug: "marshall-tufflex",
    name: "Marshall-Tufflex",
    init: "MT",
    cat: "PVC Trunking & Conduits",
    tagline: "Premium British Cable Management & Containment Systems",
    catalogueTitle: "Marshall-Tufflex Cable Management & Trunking Catalogue",
    desc: "Marshall-Tufflex is the UK's leading manufacturer of cable management and containment systems. Engineered from heavy-duty, self-extinguishing PVC and steel, the range includes perimeter dado trunking, conduit systems, cable trays, flush floor boxes, and complete routing accessories for clean, compliant and future-proof cable installations.",
    logo: "/images/brands/marshall-tufflex.jpeg",
    highlights: [
      "BS 7671 & BS 4678 British Standards Compliant",
      "High Impact Resistant, Flame-Retardant PVC",
      "Fast-Fit Clip-On Lids & Pre-Punched Base Systems",
      "Ideal for Commercial Offices, Hospitals & Schools",
    ],
    rangeItems: [
      "Maxi & Mini Surface PVC Trunking with Snap-On Lids",
      "Heavy Duty Rigid & Flexible PVC Conduits & Couplers",
      "Sterling & Two-Compartment Perimeter Dado Trunking",
      "Raised Access & Screed Flush Floor Outlet Boxes",
      "Galvanised Perforated Cable Trays & Wire Baskets",
      "Moulded Corners, Flat Bends, End Caps & Accessories",
    ],
    products: [
      {
        name: "Marshall-Tufflex Maxi & Mini PVC Surface Trunking",
        model: "MTRS / MMTR Series",
        cat: "PVC Trunking",
        desc: "High-impact, self-extinguishing PVCu surface trunking with positive snap-fit lids for domestic, commercial, and laboratory cable containment.",
        image: "/images/products/pvc-trunking-conduits.png",
        specs: [
          ["Material", "Self-Extinguishing PVCu"],
          ["Sizes", "16x16mm to 150x150mm"],
          ["Lid Fit", "Tamper-Proof Snap-Fit"],
          ["Standards", "BS 4678 & BS 7671 Compliant"],
        ],
      },
      {
        name: "Marshall-Tufflex Sterling Profile Perimeter Dado Trunking",
        model: "Sterling Profile 1 & 2",
        cat: "Dado Trunking",
        desc: "Multi-compartment dado containment system with internal screening dividers for segregating 240V power, CAT6A data, and telecoms in offices.",
        image: "/images/products/containment_fittings.jpeg",
        specs: [
          ["Compartments", "2 or 3 Segregated Channels"],
          ["Data Ready", "Compliant with 50mm Bend Radii"],
          ["Accessories", "Moulded Flat Tees, Bends & End Caps"],
          ["Applications", "Offices, Hospitals & Universities"],
        ],
      },
      {
        name: "Marshall-Tufflex Heavy-Duty Rigid & Flexible PVC Conduits",
        model: "CR Series (20mm & 25mm)",
        cat: "PVC Conduits",
        desc: "UV-stabilized high-impact PVC conduits with pre-formed bell couplers and expansion couplings for surface or concealed building wiring.",
        image: "/images/products/cable-trays-conduits.png",
        specs: [
          ["Classification", "Heavy Gauge (BS EN 61386-21)"],
          ["Cold Bending", "Internal Spring Cold Bendable"],
          ["Fittings", "Couplers, Inspection Bends & Tees"],
          ["Corrosion", "100% Acid, Alkali & Rust Proof"],
        ],
      },
      {
        name: "Marshall-Tufflex Raised Access & Screed Floor Boxes",
        model: "FB3 / FB4 Floor Service Boxes",
        cat: "Floor Outlets",
        desc: "Galvanised steel flush floor outlet boxes with carpet recess lid and modular plates for power, data RJ45, and AV multimedia connections.",
        image: "/images/products/modular_grid.jpeg",
        specs: [
          ["Compartments", "3-Way & 4-Way Configurations"],
          ["Lid Material", "Reinforced Galvanised Steel Lid"],
          ["Adjustability", "75mm to 110mm Screed Depth"],
          ["Load Rating", "Heavy Foot Traffic Tested"],
        ],
      },
      {
        name: "Marshall-Tufflex Perforated Galvanised Cable Trays",
        model: "MT Tray System (50mm – 600mm)",
        cat: "Cable Trays",
        desc: "Pre-galvanised and hot-dip steel perforated cable trays with return flanges for rigid industrial and commercial power cable support.",
        image: "/images/products/steel-cable-tranking.png",
        specs: [
          ["Finishes", "Pre-Galvanised & Hot-Dip Galvanised"],
          ["Flange Heights", "25mm, 50mm, 75mm Heavy Flange"],
          ["Perforations", "Staggered Slots for Rapid Cable Ties"],
          ["Accessories", "90° Bends, Tees, Reducers & Couplers"],
        ],
      },
      {
        name: "Marshall-Tufflex Fast-Fit Moulded Accessories & Boxes",
        model: "MT Fast-Fit Component Range",
        cat: "Containment Accessories",
        desc: "Surface mounting switch boxes, ceiling roses, conduit adaptors, and joint covers manufactured to rigorous British Standards.",
        image: "/images/products/containment_fittings.jpeg",
        specs: [
          ["Components", "Switch Boxes, Couplers, Adaptors"],
          ["Knockouts", "20mm & 25mm Pre-scored Ports"],
          ["Material", "Rigid Flame-Retardant Thermoplastic"],
          ["Certification", "BS 4607 Part 1 Approved"],
        ],
      },
    ],
  },
  {
    slug: "orient-electric",
    aliases: ["orient"],
    name: "Orient Electric",
    init: "OE",
    cat: "Ventilation & Fans",
    tagline: "Next-Gen Air Circulation, Energy-Saving Fans & Domestic Solutions",
    catalogueTitle: "Orient Electric Ventilation, Fans & Electricals Catalogue",
    desc: "Orient Electric delivers trusted air circulation and ventilation equipment engineered for tropical climates. The catalogue features high-efficiency ceiling fans, heavy-duty industrial wall and pedestal fans, exhaust louvers, and smart BLDC inverter motors designed for whisper-quiet operation, maximum airflow delivery, and outstanding energy savings.",
    logo: "/images/brands/orient_electric.jpg",
    highlights: [
      "High Air Delivery (CMM) with Aerodynamic Blades",
      "Energy-Efficient BLDC Motor Inverter Technology",
      "Double Ball-Bearing Construction for Durability",
      "Supplied Complete with Genuine Regulators & Downrods",
    ],
    rangeItems: [
      "High-Speed Commercial & Domestic Ceiling Fans (48\" / 56\")",
      "Industrial Heavy-Duty Wall Mount & Pedestal Fans",
      "High-Capacity Kitchen & Bathroom Exhaust Fans",
      "Inverter Energy-Saver Smart Remote Fans",
      "Commercial Air Curtains & Ventilation Blowers",
      "Solid-State Fan Step Regulators & Accessories",
    ],
    products: [
      {
        name: "Orient High-Speed Commercial Ceiling Fans (48\" / 56\")",
        model: "Summer Pride & Summer Crown",
        cat: "Ceiling Fans",
        desc: "Heavy-duty 100% copper wound ceiling fans with double ball-bearing construction and aerodynamic aluminium blades for maximum air delivery.",
        image: "/images/products/ventilation_fans.png",
        specs: [
          ["Motor", "100% Pure Copper Wound"],
          ["Bearings", "Double Ball-Bearing Silent Running"],
          ["Air Delivery", "230 CMM at 380 RPM"],
          ["Blades", "Corrosion-Resistant Aluminium"],
        ],
      },
      {
        name: "Orient Heavy-Duty Industrial Wall & Pedestal Fans",
        model: "Tornado & Windstorm (18\" – 30\")",
        cat: "Industrial Fans",
        desc: "High-velocity air circulation fans with 90° motorized oscillation and thermal overload protected motors for factories and workshops.",
        image: "/images/products/ventilation_fans.png",
        specs: [
          ["Sizes", "18\", 24\", 30\" Heavy-Duty Fans"],
          ["Oscillation", "90° Motorized Wide Sweep"],
          ["Speed Control", "3-Speed Rotary with Thermal Fuse"],
          ["Guard", "Close-Mesh Finger-Proof Wire Guard"],
        ],
      },
      {
        name: "Orient High-Capacity Louver Exhaust Fans",
        model: "Hill Air & Ventilator Dx",
        cat: "Exhaust Fans",
        desc: "Corrosion-proof ABS plastic exhaust fans with automatic gravity backdraft louvers and dynamically balanced whisper-quiet impellers.",
        image: "/images/products/ventilation_fans.png",
        specs: [
          ["Sizes", "6\", 8\", 9\", 12\" Duct & Wall Models"],
          ["Shutter", "Automatic Gravity Back-Draft Louvers"],
          ["Body", "Rust-Proof High-Impact ABS Housing"],
          ["Sound Level", "Whisper-Quiet Operation"],
        ],
      },
      {
        name: "Orient Smart BLDC Inverter Energy-Saver Ceiling Fans",
        model: "Ecogale / Aeroslim BLDC",
        cat: "Inverter BLDC Fans",
        desc: "Next-gen BLDC inverter ceiling fan consuming only 28W at top speed with intelligent RF remote controller and 3x longer battery backup runtime.",
        image: "/images/products/ventilation_fans.png",
        specs: [
          ["Power Draw", "Only 28W (50% Energy Savings)"],
          ["Control", "Smart RF Remote with Timer Modes"],
          ["Voltage Range", "Operates Smoothly 120V – 280V"],
          ["Backup Runtime", "3x Longer on Solar/Inverter Backup"],
        ],
      },
      {
        name: "Orient Commercial Air Curtains & Ventilation Blowers",
        model: "Orient AirShield (3ft / 4ft / 5ft)",
        cat: "Air Curtains",
        desc: "Twin-shaft high velocity air curtains creating an invisible thermal and dust barrier across retail, hotel, and hospital entrances.",
        image: "/images/products/ventilation_fans.png",
        specs: [
          ["Air Velocity", "15 – 18 m/s Barrier Velocity"],
          ["Motors", "Twin-Shaft Dual Centrifugal Blowers"],
          ["Applications", "Entrances, Cold Storage, Hospitals"],
          ["Control", "Hi/Low Airflow with Magnetic Switch"],
        ],
      },
      {
        name: "Orient Solid-State Step Fan Speed Regulators",
        model: "5-Step Electronic Regulators",
        cat: "Fan Regulators",
        desc: "Capacitor-based hum-free electronic fan speed regulators tested for over 10,000 switching operations with smooth rotary control.",
        image: "/images/products/smart_controls.jpeg",
        specs: [
          ["Step Control", "5-Step Micro-Capacitor Regulation"],
          ["Hum-Free", "Zero Hum or Buzzing Noise on Motor"],
          ["Format", "1-Module & 2-Module Grid Sizing"],
          ["Durability", "10,000 Step Switching Cycles Tested"],
        ],
      },
    ],
  },
  {
    slug: "rr-electric",
    aliases: ["rr-kabel", "rr-global", "rr"],
    name: "RR Electric",
    init: "RR",
    cat: "Cables & Wires",
    tagline: "Specialist Copper Winding Wires & Motor Rewinding Materials",
    catalogueTitle: "RR Electric Motor Rewinding Wire & Magnetics Catalogue",
    desc: "RR Electric produces high-purity enameled copper winding wires designed specifically for rewinding motors, transformers, submersible pumps, and heavy industrial coils. With superior thermal index ratings and dual-coat insulation, RR wires provide reliable electrical conductivity, high breakdown voltage, and extended service life under continuous thermal stress.",
    logo: "/images/brands/rr.png",
    highlights: [
      "99.99% Pure High-Conductivity Electrolytic Copper",
      "Dual-Coated Enamel Insulation (Class H / 200°C Rated)",
      "High Dielectric Breakdown Strength & Flexibility",
      "Supplied in Full Standard Reels from SWG 14 to SWG 40",
    ],
    rangeItems: [
      "Super Enameled Copper Magnet Wire (SWG 14 to SWG 40)",
      "Submersible Pump Motor Winding Wires with Poly Wrap",
      "High-Temperature Insulating Nomex & Kraft Paper",
      "Class H Air-Drying & Baking Motor Insulating Varnishes",
      "Heat-Resistant Fibreglass Sleevings & Binding Tapes",
      "Enameled Aluminium Winding Wires for Distribution Units",
    ],
    products: [
      {
        name: "RR Super Enameled Copper Magnet Wire (SWG 14 – SWG 40)",
        model: "RR Dual-Coat Class H (200°C)",
        cat: "Winding Wires",
        desc: "High-purity 99.99% electrolytic copper winding wire with modified polyester base and polyamideimide overcoat for electric motor and transformer rewinding.",
        image: "/images/products/cables-wires.png",
        specs: [
          ["Copper Purity", "99.99% Electrolytic Pure Copper"],
          ["Enamel Topcoat", "Polyester Base + Polyamideimide"],
          ["Thermal Index", "Class H 200°C High Thermal Withstand"],
          ["Sizes Available", "SWG 14 (2.0mm) to SWG 40 (0.12mm)"],
        ],
      },
      {
        name: "RR Submersible Pump Motor Poly-Winding Wire",
        model: "RR Poly-Wrap Motor Wire",
        cat: "Submersible Wire",
        desc: "Multi-layer biaxially oriented polypropylene (BOPP) insulated copper wire impervious to continuous water submersion in borehole pumps.",
        image: "/images/products/cable_standards.jpeg",
        specs: [
          ["Insulation", "Multi-Layer Biaxially Oriented PP"],
          ["Waterproof", "100% Continuous Water Submersion"],
          ["Dielectric", "Breakdown Voltage over 5kV"],
          ["Applications", "Submersible Borehole & Sump Pumps"],
        ],
      },
      {
        name: "RR Class H Motor Insulating Baking & Air-Drying Varnishes",
        model: "RR-Varn Class H Resin",
        cat: "Insulating Varnishes",
        desc: "High-dielectric strength insulating varnishes providing superior moisture sealing, chemical resistance, and thermal stability for rewound armatures.",
        image: "/images/products/motor_control_panel.jpeg",
        specs: [
          ["Drying Types", "Quick Air-Drying & Oven-Baking"],
          ["Bonding Strength", "High Mechanical Strength at 180°C+"],
          ["Sealing", "Moisture, Chemical & Acid Resistant"],
          ["Packaging", "1L, 5L, 20L Sealed Metal Cans"],
        ],
      },
      {
        name: "RR Nomex & Kraft Insulating Paper Sheets & Slot Liners",
        model: "DuPont Nomex & Pressboard",
        cat: "Slot Insulation",
        desc: "High-temperature Nomex-Mylar-Nomex (NMN) composite paper sheets engineered for high dielectric puncture resistance in stator slots.",
        image: "/images/products/control_cabinet.jpeg",
        specs: [
          ["Materials", "Nomex-Mylar-Nomex (NMN) & Pressboard"],
          ["Thickness", "0.13mm, 0.18mm, 0.25mm, 0.35mm"],
          ["Dielectric Barrier", "High Dielectric Puncture Resistance"],
          ["Usage", "Armature Slot Liners & Phase Barriers"],
        ],
      },
      {
        name: "RR Silicone Coated Fibreglass Sleevings (1kV – 4kV)",
        model: "Silicone Glass Fibre Sleeves",
        cat: "Insulating Sleevings",
        desc: "Flexible, non-fraying Class H thermal insulating glass fibre sleevings for motor lead out wires, terminal joints, and transformer taps.",
        image: "/images/products/cable_termination_glands.jpeg",
        specs: [
          ["Withstand Voltage", "1.5kV to 4.0kV Dielectric Strength"],
          ["Thermal Rating", "Class H (200°C Operating Temperature)"],
          ["Diameters", "1.0mm to 25.0mm Inner Diameter"],
          ["Flexibility", "Non-Fraying Flame-Retardant Sleeve"],
        ],
      },
      {
        name: "RR Enameled Aluminium Winding Wires",
        model: "RR Enameled Aluminium Wire",
        cat: "Aluminium Magnet Wire",
        desc: "Lightweight high-conductivity EC grade aluminium magnet wire offering 50% weight reduction for distribution transformers and welders.",
        image: "/images/products/cables-wires.png",
        specs: [
          ["Conductivity", "High-Purity EC Grade Aluminium"],
          ["Weight Saving", "50% Lighter than Copper Equivalent"],
          ["Thermal Class", "Class F (155°C) & Class H (180°C)"],
          ["Applications", "Distribution Transformers & Welders"],
        ],
      },
    ],
  },
  {
    slug: "sollatek",
    name: "Sollatek",
    init: "SO",
    cat: "Power Protection",
    tagline: "World-Class Voltage Regulation & Automatic Power Protection",
    catalogueTitle: "Sollatek Voltage Regulators & Power Protection Catalogue",
    desc: "Sollatek is the internationally renowned pioneer in power protection and voltage regulation. Engineered specifically to protect delicate appliances, commercial IT networks, and industrial machinery from East Africa's grid voltage spikes, brownouts, and lightning surges, the Sollatek catalogue at A1 Electricals delivers complete peace of mind.",
    logo: "/images/brands/sollatek.jpeg",
    highlights: [
      "Microprocessor-Controlled AVS Voltage Disconnect",
      "Surge & Spike Suppression with Spike Protection",
      "Single & Three-Phase Heavy Duty Protection",
      "Genuine UK Engineering with Comprehensive Warranty",
    ],
    rangeItems: [
      "Automatic Voltage Switchers (AVS13, AVS30, AVS3P)",
      "FridgeGuard, TVGuard & Air Conditioner Surge Protectors",
      "Single-Phase Automatic Voltage Regulators (AVR 1kVA – 10kVA)",
      "Three-Phase Commercial Voltage Stabilizers (up to 100kVA+)",
      "Main Panelboard Lightning & Surge Protection Devices (SPDs)",
      "Solar Charge Inverters & Battery Power Backup Systems",
    ],
    products: [
      {
        name: "Sollatek Automatic Voltage Switchers (AVS13, AVS30, AVS3P)",
        model: "AVS Micro / AVS30 / AVS3P-0",
        cat: "Voltage Switchers",
        desc: "Microprocessor-controlled high/low voltage disconnect units with selectable intelligent startup delay timers to protect AC units, motors, and commercial appliances.",
        image: "/images/products/power-protection.png",
        specs: [
          ["Ratings", "13A Plug-in, 30A Terminal, 3-Phase Contactor"],
          ["Protection", "Under/Over Voltage, Spikes & Surges"],
          ["Startup Delay", "Selectable 10s / 1min / 3min Delay"],
          ["Microprocessor", "Digital Voltage Sensor Circuit"],
        ],
      },
      {
        name: "Sollatek FridgeGuard, TVGuard & Voltshield Protectors",
        model: "Sollatek Consumer Guards",
        cat: "Appliance Protection",
        desc: "Plug-and-play surge and under-voltage protectors engineered to safeguard domestic and office electronic appliances against grid voltage dips.",
        image: "/images/products/smart_controls.jpeg",
        specs: [
          ["Applications", "Fridges, Freezers, LED TVs, Hi-Fi"],
          ["Response Time", "Instantaneous Sub-Nanosecond Clamp"],
          ["Surge Energy", "High Joule Metal Oxide Varistor (MOV)"],
          ["Warranty", "Full Sollatek Official Warranty"],
        ],
      },
      {
        name: "Sollatek Single-Phase Automatic Voltage Regulators (AVR)",
        model: "Sollatek AVR 1kVA – 10kVA",
        cat: "Voltage Regulators",
        desc: "Rapid electronic step-regulation voltage stabilizers providing steady 230V ± 4% output from unstable grid supplies without mechanical wear.",
        image: "/images/products/distribution_transformer.jpeg",
        specs: [
          ["Input Range", "Wide 140V – 280V Grid Input"],
          ["Output Voltage", "Stable 230V ± 4% Regulated AC"],
          ["Efficiency", "High Efficiency Toroidal Auto-Transformer"],
          ["Cooling", "Convection Natural Air Cooled Silent Run"],
        ],
      },
      {
        name: "Sollatek Three-Phase Commercial Voltage Stabilizers",
        model: "Sollatek 3-Phase AVR (up to 100kVA+)",
        cat: "Commercial Stabilizers",
        desc: "Independent 3-phase microprocessor-controlled voltage stabilizers with auto and manual maintenance bypass for commercial facilities and hospitals.",
        image: "/images/products/medium_voltage_switchgear.jpeg",
        specs: [
          ["Phase Control", "Individual Regulation Across Unbalanced Phases"],
          ["Bypass Mechanism", "Integrated Auto & Manual Bypass"],
          ["Digital Metering", "LED Screen for Input/Output V & I"],
          ["Applications", "Hospitals, Telecom, Commercial Blocks"],
        ],
      },
      {
        name: "Sollatek Main Panelboard Type 1+2 Lightning Surge Arresters",
        model: "DSP Series Panel SPDs",
        cat: "Surge Protection Devices",
        desc: "DIN-rail modular main incomer surge protection devices (SPDs) with volt-free remote signaling contact and high discharge capacity.",
        image: "/images/products/lightning_protection.jpeg",
        specs: [
          ["Discharge Current", "Imax up to 50kA / 100kA (8/20µs)"],
          ["Mounting", "DIN Rail Modular Incomer SPD"],
          ["Remote Signaling", "Volt-Free Dry Contact for Telemetry"],
          ["Standards", "IEC 61643-11 & BS EN 62305"],
        ],
      },
      {
        name: "Sollatek Solar Charge Controllers & Pure Sine Wave Inverters",
        model: "Sollatek PowerMaster Inverters",
        cat: "Solar & Inverters",
        desc: "High-efficiency MPPT solar inverters with pure sine wave output (<3% THD) supporting lithium and deep-cycle AGM batteries.",
        image: "/images/products/solar_system.jpeg",
        specs: [
          ["Waveform", "Pure Sine Wave Output (<3% THD)"],
          ["Charge Control", "High-Efficiency MPPT Solar Tracking"],
          ["Battery System", "12V / 24V / 48V Lithium & AGM"],
          ["Display", "Interactive LCD System Status Monitor"],
        ],
      },
    ],
  },
  {
    slug: "eaton",
    name: "Eaton",
    init: "EA",
    cat: "Security & Fire Alarms",
    tagline: "Intelligent Power Management & Life-Safety Fire Systems",
    catalogueTitle: "Eaton Fire Alarms, Life Safety & Protection Catalogue",
    desc: "Eaton life-safety and power management systems protect commercial, residential, and industrial facilities with certified fire detection and power control technology. The Eaton catalogue includes addressable and conventional fire alarm panels, optical smoke detectors, manual call points, sounder beacons, and emergency lighting systems built to rigorous EN 54 safety standards.",
    logo: "/images/brands/eaton.png",
    highlights: [
      "Certified to International EN 54 & BS 5839 Fire Standards",
      "Scalable from Small Retail to Multi-Storey Commercial",
      "Low False Alarm Rates with Intelligent Optical Sensing",
      "Complete Range of Spares, Detectors & Panels in Kampala",
    ],
    rangeItems: [
      "Conventional 2, 4 & 8-Zone Fire Alarm Control Panels",
      "Analogue Addressable Fire Alarm Panels & Repeater Boards",
      "Optical Smoke, Multi-Criteria & Heat Detectors",
      "Manual Break-Glass Call Points & Combined Sounder Beacons",
      "Fire-Resistant Cables, Isolator Bases & Loop Modules",
      "Emergency Exit Signage & Maintained Battery Luminaires",
    ],
    products: [
      {
        name: "Eaton Conventional 2, 4 & 8-Zone Fire Alarm Panels",
        model: "FX2200 / CF3000 Series",
        cat: "Conventional Fire Panels",
        desc: "Certified EN 54-2/4 conventional fire alarm control panels with integral power supply, battery charger, and line monitoring for sounder circuits.",
        image: "/images/products/fire_alarms.png",
        specs: [
          ["Zones", "2, 4, 8 Zone Control Assemblies"],
          ["Sounder Circuits", "Dual Monitored Lines (1.6A Total)"],
          ["Batteries", "Built-in Standby Battery Charger"],
          ["Certification", "EN 54-2 & EN 54-4 Approved"],
        ],
      },
      {
        name: "Eaton Analogue Addressable Fire Alarm Loop Panels",
        model: "CF1000 / DF6000 Loop System",
        cat: "Addressable Fire Panels",
        desc: "Intelligent addressable fire alarm panels supporting up to 200 devices per loop with backlit graphic LCD display and networkability up to 126 panels.",
        image: "/images/products/control_cabinet.jpeg",
        specs: [
          ["Loop Capacity", "1 to 4 Loops (200 Devices/Loop)"],
          ["Networkable", "Up to 126 Panels via RS485"],
          ["Screen", "Backlit Graphic LCD Operator Display"],
          ["Soft Addressing", "Automated Device Address Allocation"],
        ],
      },
      {
        name: "Eaton Optical Smoke & Multi-Criteria Heat Detectors",
        model: "FXN Series (Optical & Thermal)",
        cat: "Fire Detectors",
        desc: "Dual-angle optical chamber smoke and thermal heat detectors with dust accumulation compensation to minimize false alarms.",
        image: "/images/products/industrial_sensors.jpeg",
        specs: [
          ["Chamber", "Precision Optical Scattering Chamber"],
          ["Heat Sensor", "Class A1R Rate-of-Rise & Fixed Thermal"],
          ["Drift Compensation", "Automatic Dust Compensation"],
          ["Base Type", "Standard 2-Wire & Relay Base Options"],
        ],
      },
      {
        name: "Eaton Manual Break-Glass Call Points & Sounders",
        model: "Menvier & Rooperlite Series",
        cat: "Call Points & Sounders",
        desc: "High-visibility red break-glass manual emergency triggers and high-output 106 dB(A) combined sounder beacons with IP65 outdoor variants.",
        image: "/images/products/emergency_backup.jpeg",
        specs: [
          ["Ingress Rating", "IP24D Indoor & IP67 Weatherproof"],
          ["Audible Output", "Up to 106 dB(A) Multi-Tone Sounder"],
          ["Beacon", "High-Intensity Red Xenon / LED Flasher"],
          ["Standard", "EN 54-11 & EN 54-3 Certified"],
        ],
      },
      {
        name: "Eaton Fire-Resistant FP200 Gold Alarm Cables",
        model: "FP200 Gold (1.5mm² – 2.5mm²)",
        cat: "Fire Rated Cables",
        desc: "Certified 30/60-minute fire integrity cables with Insudite fire-resistant insulation and low smoke zero halogen (LSZH) outer sheath.",
        image: "/images/products/cable_standards.jpeg",
        specs: [
          ["Fire Integrity", "30 & 60 Min Fire Survival (BS 5839)"],
          ["Conductor", "Plain Annealed Solid Copper (1.5 – 2.5mm²)"],
          ["Insulation", "Insudite High-Performance Fire Barrier"],
          ["Sheath", "Low Smoke Zero Halogen (LSZH) Red/White"],
        ],
      },
      {
        name: "Eaton Emergency Exit Signage & Maintained Luminaires",
        model: "Briteloop & SafeLite Series",
        cat: "Emergency Lighting",
        desc: "Self-contained maintained LED emergency luminaires providing 3 hours of illumination upon mains power failure with 24m/32m viewing distance.",
        image: "/images/products/linear_luminaires.jpeg",
        specs: [
          ["Battery Autonomy", "3 Hours Maintained Emergency Backup"],
          ["Battery Cells", "High-Temperature Ni-Cd / LiFePO4"],
          ["Viewing Distance", "24m & 32m ISO Exit Sign Legends"],
          ["Compliance", "EN 60598-2-22 & BS 5266 Verified"],
        ],
      },
    ],
  },
  {
    slug: "neelkanth-cables",
    aliases: ["neelkanth"],
    name: "Neelkanth Cables",
    init: "NC",
    cat: "Cables & Wires",
    tagline: "Heavy-Duty Armoured, Power & Building Installation Cables",
    catalogueTitle: "Neelkanth Heavy Duty Power, Armoured & Building Cable Catalogue",
    desc: "Neelkanth Cables produces high-conductivity copper and aluminium power cables manufactured to BS 5467, BS 6004, and UNBS standards. Sourced through A1 Electricals, the catalogue features single-core building wires, flexible multi-core cables, steel wire armoured (SWA) underground feeders, and complete cable gland and lug accessories for secure terminations.",
    logo: "/images/brands/neelkanth.png",
    highlights: [
      "100% Annealed Electrolytic Pure Copper Conductors",
      "UNBS & BS 5467 / BS 6004 Standards Certified",
      "Steel Wire Armoured (SWA) Underground Mechanical Protection",
      "Custom Meterage Cut-to-Length & Bulk Drum Supply",
    ],
    rangeItems: [
      "Single Core Building Wires (1.5mm² – 16mm² Cu/PVC)",
      "Flat Twin & Earth / 3-Core Flexible Cables",
      "Steel Wire Armoured (SWA) Multi-Core Power Cables (up to 300mm²)",
      "Aluminium XLPE Low Voltage Underground Feeder Cables",
      "Heavy Duty Brass Cable Glands (Indoor BW & Outdoor CW IP66)",
      "Tinned Copper Cable Lugs, Ferrules & Heat Shrink Shrouds",
    ],
    products: [
      {
        name: "Neelkanth Single Core PVC Building Wires (1.5mm² – 16mm²)",
        model: "Cu/PVC 450/750V (BS 6004)",
        cat: "Building Wires",
        desc: "High-conductivity pure annealed electrolytic copper conductors with flame-retardant grade TI 1 PVC insulation for conduit wiring.",
        image: "/images/products/cables-wires.png",
        specs: [
          ["Conductor", "100% Pure Annealed Electrolytic Copper"],
          ["Insulation", "Grade TI 1 Flame-Retardant PVC"],
          ["Voltage Rating", "450/750V AC Rated"],
          ["Standards", "UNBS Certified & BS 6004 Compliant"],
        ],
      },
      {
        name: "Neelkanth Flat Twin & Earth 3-Core Domestic Cables",
        model: "6242Y Twin & Earth (1.5mm² – 6mm²)",
        cat: "Domestic Cables",
        desc: "Grey PVC sheathed multi-conductor domestic cables with integrated bare circuit protective conductor (CPC) for domestic circuits.",
        image: "/images/products/cable_standards.jpeg",
        specs: [
          ["Construction", "2 Insulated Cores + Bare CPC Wire"],
          ["Sheath", "Grey Flame-Retardant PVC Compound"],
          ["Voltage Rating", "300/500V Domestic Installation"],
          ["Applications", "Concealed Conduit & Dry Plaster Wiring"],
        ],
      },
      {
        name: "Neelkanth Steel Wire Armoured (SWA) Power Cables",
        model: "BS 5467 XLPE/SWA/PVC 0.6/1kV",
        cat: "Armoured Power Cables",
        desc: "Galvanized steel wire armoured multi-core power cables (up to 300mm²) providing heavy mechanical impact protection for direct burial.",
        image: "/images/wires-and-cables.webp",
        specs: [
          ["Cores & Sizes", "2, 3, 4-Core (4mm² up to 300mm²)"],
          ["Armour Shield", "Galvanized Steel Wire (SWA) Armor"],
          ["Insulation", "Cross-Linked Polyethylene (XLPE 90°C)"],
          ["Installation", "Direct Underground Burial & Trays"],
        ],
      },
      {
        name: "Neelkanth Aluminium XLPE Low Voltage Feeder Cables",
        model: "Al/XLPE/PVC (16mm² – 400mm²)",
        cat: "Aluminium Feeders",
        desc: "High-conductivity EC grade aluminium low voltage feeder cables providing a lightweight, cost-effective solution for long distribution runs.",
        image: "/images/products/cables-wires.png",
        specs: [
          ["Conductor", "EC Grade High-Conductivity Aluminium"],
          ["Cost Saving", "Economical Main Incomer Feeders"],
          ["Insulation", "90°C Operating Temperature XLPE"],
          ["Standards", "IEC 60502-1 & BS 5467 Specifications"],
        ],
      },
      {
        name: "Neelkanth Heavy Duty Flexible Rubber Trailing Cables",
        model: "HO7RN-F Heavy Duty Elastomer",
        cat: "Flexible Cables",
        desc: "Oil, grease, and weather-resistant flexible rubber cables with Class 5 copper conductors for generators, submersible pumps, and cranes.",
        image: "/images/products/cable_termination_glands.jpeg",
        specs: [
          ["Outer Jacket", "Heavy Oil-Resistant Polychloroprene"],
          ["Flexibility", "Class 5 Extra-Fine Copper Strands"],
          ["Applications", "Boreholes, Generators, Cranes"],
          ["Temperature", "-25°C to +85°C Operating Range"],
        ],
      },
      {
        name: "Neelkanth Heavy Duty Brass Cable Glands & Crimp Lugs",
        model: "BW (Indoor) & CW (Outdoor IP66) Glands",
        cat: "Cable Termination",
        desc: "Precision threaded brass cable glands and heavy-duty electrolytic tinned copper crimp lugs with complete earth tags and shrouds.",
        image: "/images/products/cable_termination_glands.jpeg",
        specs: [
          ["Gland Types", "BW Indoor & CW Outdoor IP66"],
          ["Crimp Lugs", "Tinned Electrolytic Copper Lugs"],
          ["Sizes", "Glands 20mm–90mm; Lugs up to 500mm²"],
          ["Accessories", "Earth Tags, PVC Shrouds & Locknuts"],
        ],
      },
    ],
  },
  {
    slug: "servo-stabilizers",
    name: "Servo Stabilizers",
    init: "SV",
    cat: "Power Protection",
    tagline: "High-Precision Motorized Voltage Regulators for Demanding Loads",
    catalogueTitle: "Servo Industrial Automatic Voltage Stabilizers Catalogue",
    desc: "Servo Automatic Voltage Regulators are heavy-duty, motorized voltage stabilizers designed to safeguard industrial machinery, medical equipment, printing presses, and commercial facilities against extreme voltage fluctuations. Featuring fast servo motor response, precision voltage correction (±1%), and robust overload protection, Servo stabilizers deliver steady, reliable power across unpredictable grids.",
    logo: null,
    highlights: [
      "Ultra-Precise Voltage Output Regulation (±1% Accuracy)",
      "High Overload Capacity & Built-in Automatic Bypass",
      "Air-Cooled and Oil-Cooled Industrial Configurations",
      "Phase-Failure, Under/Over Voltage Electronic Interlocks",
    ],
    rangeItems: [
      "Single-Phase Servo Voltage Stabilizers (5kVA – 20kVA)",
      "Three-Phase Air-Cooled Servo Stabilizers (30kVA – 150kVA)",
      "Oil-Cooled Heavy Industrial Servo Stabilizers (200kVA – 1000kVA)",
      "Digital Output Metering & Auto/Manual Bypass Panels",
      "Heavy-Duty Copper Toroidal Variable Autotransformers",
      "Tailored Power Conditioning for Hospitals & Processing Plants",
    ],
    products: [
      {
        name: "Servo Single-Phase Automatic Voltage Stabilizers (5kVA – 20kVA)",
        model: "SVC Series (5kVA, 10kVA, 15kVA, 20kVA)",
        cat: "Single-Phase Stabilizers",
        desc: "Motorized copper toroidal variac voltage stabilizers delivering ultra-precise 230V ± 1% regulated output across severe 130V–270V grid fluctuations.",
        image: "/images/products/distribution_transformer.jpeg",
        specs: [
          ["Input Range", "Wide 130V – 270V Single Phase"],
          ["Output Accuracy", "Ultra-Precise 230V ± 1% Output"],
          ["Motor Drive", "High-Torque AC Servo Motor Drive"],
          ["Display", "Dual Digital Meters for Input/Output V"],
        ],
      },
      {
        name: "Servo Three-Phase Air-Cooled Industrial Stabilizers",
        model: "SBW Series (30kVA to 150kVA)",
        cat: "3-Phase Air-Cooled",
        desc: "Individual phase regulation for unbalanced loads with digital multimeter monitoring, automatic maintenance bypass, and >98% efficiency.",
        image: "/images/products/medium_voltage_switchgear.jpeg",
        specs: [
          ["Input Range", "300V – 470V 3-Phase Grid Support"],
          ["Phase Control", "Individual Regulation for Unbalanced Phases"],
          ["Efficiency", "> 98% Ultra-High Operating Efficiency"],
          ["Protection", "Over/Under Voltage, Phase Loss Interlocks"],
        ],
      },
      {
        name: "Servo Oil-Cooled Heavy Industrial Stabilizers",
        model: "Heavy Industrial SBW-F (up to 1000kVA)",
        cat: "Oil-Cooled Stabilizers",
        desc: "Heavy-duty transformer oil cooled stabilizers built for 24/7 continuous operation in steel mills, manufacturing plants, and hospitals.",
        image: "/images/products/distribution_transformer.jpeg",
        specs: [
          ["Cooling", "ONAN Transformer Oil Immersed Cooling"],
          ["Duty Cycle", "24/7 Continuous Heavy Factory Duty"],
          ["Tank", "Sealed Steel Tank with Oil Level Gauge"],
          ["Applications", "Factories, Mills, Data Centers, Hospitals"],
        ],
      },
      {
        name: "Servo Digital Control & Protection Bypass Panelboards",
        model: "Servo Auto/Manual Bypass Cabinet",
        cat: "Stabilizer Bypass Panels",
        desc: "Sheet steel interlocked maintenance bypass cabinets ensuring continuous uninterrupted factory operation during routine servicing.",
        image: "/images/products/panelboard.jpeg",
        specs: [
          ["Bypass Type", "Mechanical & Electrical Interlocked"],
          ["Switching", "Zero-Break Maintenance Changeover"],
          ["Enclosure", "IP41 / IP54 Sheet Steel Enclosure"],
          ["Metering", "Digital Multifunction Power Analyzer"],
        ],
      },
      {
        name: "Servo Toroidal Pure Copper Variable Autotransformers",
        model: "Heavy Toroidal Variac Core",
        cat: "Variac Assemblies",
        desc: "High-permeability silicon steel CRGO toroidal cores wound with high-conductivity copper and long-life self-lubricating carbon brushes.",
        image: "/images/products/distribution_transformer.jpeg",
        specs: [
          ["Conductor", "High-Grade Electrolytic Copper Toroid"],
          ["Core", "High Permeability Silicon Steel CRGO"],
          ["Carbon Brush", "Self-Lubricating Long Life Brush"],
          ["Waveform", "Pure Sine Wave Zero Distortion"],
        ],
      },
      {
        name: "Servo Medical & Printing Precision Power Conditioners",
        model: "Precision Hospital & Press Stabilizer",
        cat: "Medical Power Conditioning",
        desc: "Ultra-clean power conditioning units with ±0.5% regulation and built-in isolation transformers to protect CT scanners, MRI, and offset printing presses.",
        image: "/images/products/power-protection.png",
        specs: [
          ["Applications", "CT Scanners, MRI, Heidelberg Presses"],
          ["Regulation", "±0.5% Microprocessor Precision"],
          ["Isolation", "Built-in Ultra-Isolation Transformer"],
          ["Surge Suppression", "Class B+C Heavy Lightning SPDs"],
        ],
      },
    ],
  },
];

export const findBrand = (slug) =>
  BRANDS.find(
    (b) =>
      b.slug === slug ||
      (Array.isArray(b.aliases) && b.aliases.includes(slug)) ||
      (b.name && b.name.toLowerCase() === (slug || "").toLowerCase())
  );

export const PRODUCT_SUB_CATEGORIES = {
  "switchgear-protection-equipment": [
    {
      heading: "Switchgear & LV Isolation Equipment",
      image: "/images/products/Switchgear Systems.jpeg",
      content:
        "Safe isolation and coordinated protection sit at the core of every LV power distribution system. Our switchgear and protection range covers isolators, switch-disconnectors, change-over switches and surge protection devices (SPDs) in metal and polycarbonate enclosures, with IP ratings from IP41 for indoor use to IP65 for external and industrial environments — all built to IEC 61439.",
    },
    {
      heading: "Switchgear Enclosures & Busbar Systems",
      image: "/images/products/busbar_systems.jpeg",
      content:
        "We source heavy-duty switchgear and protection equipment from ABB, Siemens and VAF Power — manufacturers whose products are specified by consulting engineers and accepted by utilities across East Africa. Busbar ratings up to 630A and enclosure sizes to accommodate large switching devices and metering equipment mean we can supply for projects of any scale.",
    },
    {
      heading: "Switchgear Selection & System Sizing",
      image: "/images/products/system_sizing.jpeg",
      content:
        "Our team can help you select the right switchgear for your incoming supply, load schedule and installation environment, and advise on busbar sizing, cable entry arrangements and IP rating selection. Stock items are available for immediate collection; larger custom assemblies can be sourced to order.",
    },
  ],
  "circuit-breakers": [
    {
      heading: "Circuit Breakers & Overcurrent Protection",
      image: "/images/products/circuit_breaker.jpeg",
      content:
        "Circuit breakers provide essential overcurrent, short-circuit, and earth leakage protection across all distribution levels. Our stock includes miniature circuit breakers (MCBs) in B, C, and D trip curves for resistive, general commercial, and high-inrush motor loads, alongside single-module RCBOs and residual current devices (RCDs) rated from 30mA for shock protection to 300mA for fire prevention.",
    },
    {
      heading: "MCCB & ACB Fault Discrimination",
      image: "/images/mccb.jpeg",
      content:
        "For higher-capacity main supply lines, we supply Moulded Case Circuit Breakers (MCCBs) up to 630A and Air Circuit Breakers (ACBs) up to 4000A equipped with adjustable electronic trip units. Designed by ABB and Siemens, these breakers offer verified cascading breaking capacities from 6kA to 100kA, ensuring precise fault discrimination and preventing unnecessary upstream trips.",
    },
    {
      heading: "Circuit Breaker Retrofits & Distribution Upgrades",
      image: "/images/products/distribution_upgrades.jpeg",
      content:
        "Whether you are populating a new TPN distribution board, replacing an obsolete trip unit, or upgrading a commercial facility to modern IEC safety standards, we maintain high stock levels for immediate collection in Kampala. Our engineers assist with fault level calculations and trip curve coordination for your specific project.",
    },
  ],
  "contactors-motor-starters": [
    {
      heading: "Motor Starters & Starting Methods",
      image: "/images/products/overload_relay.jpg",
      content:
        "Industrial motors require robust switching devices built to handle the high inrush currents typical of pump, fan, and compressor startup cycles. We supply Direct-On-Line (DOL) starters for small motors up to 15kW, Star-Delta starters to limit starting current spikes on loads up to 150kW, and solid-state soft starters for controlled, jerk-free mechanical acceleration.",
    },
    {
      heading: "Contactors & Overload Relays",
      image: "/images/products/motor_starter.jpeg",
      content:
        "Our contactor range spans AC-1 and AC-3 ratings from 9A up to 630A, sourced from ABB and Siemens. Coupled with thermal and electronic overload relays offering phase-loss detection and adjustable trip classes, our motor control assemblies deliver complete protection against stalled rotors, phase unbalance, and mechanical overload in IP54/IP65 sheet steel enclosures.",
    },
    {
      heading: "Motor Control Panel Sizing & Accessories",
      image: "/images/products/motor_control_panel.jpeg",
      content:
        "Serving manufacturing plants, agricultural processing facilities, water utilities, and HVAC contractors across Uganda, we stock full motor control kits with auxiliary contact blocks, mechanical interlocks, and replacement AC/DC operating coils. Our team can advise on selecting the optimal starting method and protection settings for your motor rating.",
    },
  ],
  "industrial-control-automation": [
    {
      heading: "Automation Drives & Process Optimization",
      image: "/images/products/automation_drives.jpeg",
      content:
        "Automating process lines and machinery optimizes throughput, reduces energy overhead, and enhances operational safety. Our automation portfolio features Variable Speed Drives (VSDs/VFDs) for dynamic motor speed and torque control, Programmable Logic Controllers (PLCs) for process logic, and high-resolution HMI touch panels for real-time machine monitoring and operator control.",
    },
    {
      heading: "Industrial Sensors & Field Devices",
      image: "/images/products/industrial_sensors.jpeg",
      content:
        "We provide precision industrial sensing solutions including inductive proximity switches, photoelectric sensors, ultrasonic level transducers, and digital pressure switches from ABB and Siemens. Designed for harsh tropical industrial environments, these components communicate seamlessly via standard fieldbus protocols to maintain reliable process feedback.",
    },
    {
      heading: "Control Cabinet Hardware & Panel Components",
      image: "/images/products/control_cabinet.jpeg",
      content:
        "Supporting panel builders, maintenance teams, and system integrators throughout East Africa, we stock essential control cabinet accessories including DIN-rail terminal blocks, power supplies, control relays, pushbuttons, and wiring ducts. Our technical team offers selection advice for control architectures and enclosure environmental conditioning.",
    },
  ],
  "electrical-panels-distribution-boards": [
    {
      heading: "Distribution Boards & Panel Enclosures",
      image: "/images/products/distribution_board.jpeg",
      content:
        "Centralized electrical distribution requires structured panel enclosures that guarantee safe current delivery and easy maintenance access. Our range covers compact 6-way to 24-way single-phase domestic consumer units up to heavy-duty three-phase TPN distribution boards and modular floor-standing panelboards rated up to 630A.",
    },
    {
      heading: "Panelboard Busbars & Ingress Ratings",
      image: "/images/products/panelboard.jpeg",
      content:
        "Constructed from electro-galvanized sheet steel or durable flame-retardant polycarbonate, our enclosures feature fully rated solid copper busbars tested to IEC 61439 standards. With ingress ratings from IP41 for clean interior risers to IP65 for outdoor locations, these boards accommodate main isolators, MCCB incomers, and split-load RCD arrangements.",
    },
    {
      heading: "Custom Panel Integration & Pre-Wiring",
      image: "/images/products/custom_panel.jpeg",
      content:
        "We offer pre-assembled and pre-wired distribution boards tailored to your circuit schedules, saving installation time on site. Our Kampala showroom stocks neutral/earth bars, pan assemblies, extension boxes, and metering accessories for rapid delivery and immediate field integration.",
    },
  ],
  "indoor-outdoor-led-lighting": [
    {
      heading: "LED Lighting & Energy Efficiency",
      image: "/images/products/led_lighting.jpeg",
      content:
        "Modern LED lighting delivers superior lumen output while dramatically lowering electricity consumption and maintenance costs. Our interior and exterior luminaire range includes high-efficiency UFO high-bays, glare-free 60x60 LED ceiling panels, architectural downlights, weatherproof floodlights, and street luminaires engineered specifically for tropical operating temperatures.",
    },
    {
      heading: "Lighting Optics & Thermal Management",
      image: "/images/products/lighting_optics.jpg",
      content:
        "Sourced from world-leading lighting manufacturers Philips & Signify and VAF Power, our LED fittings incorporate advanced optical lenses and heavy-duty aluminium heat sinks to prevent thermal degradation. Available in colour temperatures from warm 3000K to daylight 6500K, our products carry up to 5-year warranties for long-term peace of mind.",
    },
    {
      heading: "Luminaire Layouts & Photometric Calculations",
      image: "/images/products/luminaire_layouts.jpg",
      content:
        "We assist commercial property developers, warehouse operators, and municipal contractors across Kampala with lux level calculations and fixture positioning. Our showroom holds stock for full building fit-outs, emergency lighting installations, and retrofit projects replacing inefficient discharge lamps.",
    },
  ],
  "decorative-architectural-lighting": [
    {
      heading: "Architectural Pendants & Feature Luminaires",
      image: "/images/drop_lights.jpeg",
      content:
        "Architectural lighting transforms commercial and residential environments by combining functional illumination with sophisticated interior design. Our decorative portfolio encompasses statement pendant lights, modern chandeliers, sleek wall sconces, LED profile extrusions, and garden landscape luminaires that elevate hotel lobbies, restaurants, and executive residences.",
    },
    {
      heading: "Decorative Finishes & Scene Control",
      image: "/images/products/decorative_finishes.jpeg",
      content:
        "Crafted with premium materials and refined finishes such as brushed brass, matte black, and polished chrome, our architectural luminaires integrate energy-efficient LED engines from Signify and VAF Power. Dimmable options (TRIAC, 1-10V, and DALI) enable precise scene setting and mood control for any spatial concept.",
    },
    {
      heading: "Outdoor Facade & Landscape Illumination",
      image: "/images/a1_lights.jpeg",
      content:
        "We collaborate with architects, interior designers, and electrical contractors to deliver customized feature lighting layouts. From facade wall-washing to underwater pool fixtures, we supply IP65-rated outdoor accent lights built to withstand intense weather while highlighting building architecture.",
    },
  ],
  "industrial-commercial-lighting": [
    {
      heading: "Industrial High-Bays & Linear Luminaires",
      image: "/images/products/linear_luminaires.jpeg",
      content:
        "Demanding commercial facilities, factories, logistics hubs, and workshops require rugged luminaires capable of continuous heavy-duty operation. Our industrial lighting range includes 100W-200W high-bay luminaires for ceiling heights up to 12m, low-bay fittings, and impact-resistant linear LED battens engineered for maximum luminous efficacy (up to 150 lm/W).",
    },
    {
      heading: "Weatherproof Battens & Vapour-Tight Luminaires",
      image: "/images/products/weatherproof_battens.jpeg",
      content:
        "For harsh operating environments exposed to dust, moisture, or chemical vapours, we supply IP65/IP66 weatherproof vapour-tight fittings constructed from UV-stabilized polycarbonate with stainless steel toggles. We also stock fluorescent tube replacements and high-bay HID retrofits for maintaining legacy warehouse lighting systems.",
    },
    {
      heading: "Commercial Emergency Backup & Safety Standards",
      image: "/images/products/emergency_backup.jpeg",
      content:
        "All industrial luminaires comply with international occupational illumination standards to ensure worker safety and productivity. We provide emergency battery backup kits (3-hour rated) that automatically ignite upon mains power failure, keeping critical emergency exit corridors illuminated.",
    },
  ],
  "cables-cable-accessories": [
    {
      heading: "LV Power Cable & Armoured Conductor Range",
      image: "/images/wires-and-cables.webp",
      content:
        "Reliable power transmission relies on high-grade conductors insulated for long-term thermal and mechanical stresses. We stock single-core PVC building wires (1.5mm² to 16mm²), multi-core flexible rubber cables, and Steel Wire Armoured (SWA) XLPE power cables designed for direct underground burial, external cable trays, and main distribution feeders.",
    },
    {
      heading: "Cable Manufacturing Standards & Conductor Quality",
      image: "/images/products/cable_standards.jpeg",
      content:
        "Manufactured to strict BS 6004, BS 5467, and IEC 60502 specifications by certified producers such as Neelkanth Cables, our copper and EC-grade aluminium cables guarantee optimal conductivity and flame retardancy. We support complete cable runs with indoor/outdoor brass glands (CW/BW), IP68 nylon glands, and heavy-duty copper crimp lugs.",
    },
    {
      heading: "Cable Termination Glands & Technical Sizing",
      image: "/images/products/cable_termination_glands.jpeg",
      content:
        "Available on 100m coils or 500m/1000m wooden drums, our cables are ready for immediate dispatch from our Kampala warehouse. Our technical staff provides voltage drop calculations, current-carrying capacity guidance, and correct gland/lug selection for your cable cross-section.",
    },
  ],
  "switches-sockets": [
    {
      heading: "Wall Switches & Switched Socket Outlets",
      image: "/images/products/wiring-accessories.png",
      content:
        "Everyday power points and light control points demand high mechanical durability and low contact resistance. We stock 1-gang to 4-gang 10AX/20A light switches, 13A switched single and double socket outlets with child-safety shutter mechanisms, and 15A round-pin sockets suited for heavy inductive loads.",
    },
    {
      heading: "Weatherproof Outlets & Industrial Connections",
      image: "/images/products/weatherproof_outlets.jpeg",
      content:
        "For outdoor patios, wash bays, and industrial facilities, we supply IP66 weatherproof switched socket outlets with lockable spring-hinged covers that prevent water and dust ingress even with plugs connected. We also offer smart Wi-Fi switches and industrial plug and socket connectors (16A to 63A IP44/IP67).",
    },
    {
      heading: "Commercial Switch Ranges & Smart Controls",
      image: "/images/products/smart_controls.jpeg",
      content:
        "Available in standard white, decorative metallic finishes, and industrial metal-clad variants from VAF Power, ABB, and Siemens. Our Kampala showroom supplies contractors with large-volume quantities for estate developments, educational institutions, and commercial complexes.",
    },
  ],
  "conduits-cable-management": [
    {
      heading: "Cable Trays & Ladder Containment Racks",
      image: "/images/products/steel-cable-tranking.png",
      content:
        "Structured cable containment prevents physical cable damage, ensures fire code compliance, and simplifies future wiring expansion. Our inventory includes perforated steel cable trays (50mm to 900mm wide), heavy-duty cable ladder racks for industrial power feeders, and steel or PVC trunking for surface cable routing.",
    },
    {
      heading: "Steel Conduit & PVC Containment Systems",
      image: "/images/products/pvc-trunking-conduits.png",
      content:
        "Manufactured in hot-dip galvanised steel, 316 stainless steel for aggressive environments, or self-extinguishing flame-retardant PVC compound (BS EN 61386), our containment systems resist UV radiation and mechanical impact. Our dado and skirting trunking systems from Marshall-Tufflex provide segregated compartments for power and data cables.",
    },
    {
      heading: "Containment Fittings & Routing Brackets",
      image: "/images/products/containment_fittings.jpeg",
      content:
        "We supply a full suite of factory-engineered fittings including internal/external bends, tees, risers, reducers, spring nuts, channel cantilevers, and threaded rod hangers. Our team calculates trunking fill ratios and load-bearing capacities to ensure a robust installation.",
    },
  ],
  "earthing-lightning-protection": [
    {
      heading: "Lightning Protection & Air Terminal Networks",
      image: "/images/products/lightning_protection.jpeg",
      content:
        "Located in an area of high atmospheric lightning activity, structures in Uganda require certified lightning protection systems to safely intercept and dissipate high-energy strikes. We supply copper and aluminium air rods, Early Streamer Emission (ESE) strike terminals, flat copper tape down-conductors, and test clamps engineered to BS EN 62305.",
    },
    {
      heading: "Earth Rod Electrodes & Soil Inspection Pits",
      image: "/images/products/soil_inspection_pits.jpeg",
      content:
        "To achieve low resistance-to-earth connections, we provide high-tensile copper-bonded steel earth rods, heavy-duty concrete and plastic inspection pits, earth enhancing compounds (Marconite and bentonite), and exothermically welded or mechanical rod-to-tape clamps.",
    },
    {
      heading: "Equipotential Bonding & Ground Testing",
      image: "/images/products/ground_testing.jpeg",
      content:
        "We stock equipotential earth bonding bars, bi-metallic disconnect joints, and digital ground resistance test kits for installation commissioning. Our engineers assist with risk assessment classifications and earth grid layout calculations for commercial buildings, telecom towers, and substations.",
    },
  ],
  "transformers-power-distribution": [
    {
      heading: "Distribution Transformers & Step-Down Supply",
      image: "/images/products/distribution_transformer.jpeg",
      content:
        "Primary power step-down transformation is essential for connecting industrial, commercial, and agricultural facilities to medium-voltage utility grids (11kV / 33kV). We supply ONAN oil-immersed distribution transformers (25kVA to 2500kVA) for outdoor pole or pad mounting, as well as dry-type cast-resin transformers for indoor basement substations.",
    },
    {
      heading: "Medium Voltage Switchgear & Substation Gear",
      image: "/images/products/medium_voltage_switchgear.jpeg",
      content:
        "Our medium and low voltage distribution portfolio includes Ring Main Units (RMUs), 11kV/33kV drop-out fuse cutouts, HT HRC fuse links, Buchholz protection relays, surge arresters, and automatic tap changers from Siemens and ABB, fully compliant with IEC 60076 standards.",
    },
    {
      heading: "Utility Sizing & Substation Protection",
      image: "/images/products/substation_protection.jpeg",
      content:
        "We assist project engineers with transformer sizing, vector group selection, and short-circuit protection coordination tailored to UEDCL and Umeme utility connection guidelines. Transformer oil, replacement bushings, and neutral grounding equipment are held in stock for immediate field support.",
    },
  ],
  "solar-energy-efficient-solutions": [
    {
      heading: "Solar LED Street Lighting & All-In-One Units",
      image: "/images/products/solar_led.jpeg",
      content:
        "Stand-alone solar illumination provides continuous, zero-cost lighting for locations without reliable mains grid infrastructure. Our all-in-one solar LED street lights (20W to 200W) integrate high-efficiency monocrystalline solar panels, ultra-bright LED modules, intelligent MPPT charge controllers, and long-life LiFePO4 battery packs into a single compact fixture.",
    },
    {
      heading: "Solar Compound Floodlights & Battery Storage",
      image: "/images/products/solar_flood_lights.jpeg",
      content:
        "Featuring deep-cycle LiFePO4 battery technology, our solar street lights and compound floodlights offer superior high-temperature resilience and 3 to 5 nights of autonomous operation during rainy periods. Dusk-to-dawn sensors and microwave motion-boost modes maximize energy conservation while maintaining security.",
    },
    {
      heading: "Solar System Sizing & Energy Retrofit Audits",
      image: "/images/products/solar_compound.jpeg",
      content:
        "We supply residential estates, municipal road projects, commercial parking lots, and rural health centres across Uganda. Our team provides solar resource assessment, mounting pole height/spacing guidance, and energy audit calculations for commercial grid-tied LED retrofit projects.",
    },
  ],
  "Cables & Wires": [
    {
      heading: "Cable Solutions",
      image: "/images/wires-and-cables.webp",
      content:
        "A1 Electricals provide cable and wiring products sourced from leading electrical product manufacturers for domestic, commercial, industrial and power distribution applications. We offer a full range of electrical wires and cables manufactured to the highest standards by leading British and European manufacturers suitable for use in all applications. Our large stocks ensure we can meet urgent requirements for quick shipment while offering extremely competitive prices.",
    },
    {
      heading: "Product Range",
      image: "/images/products/steel-cable-tranking.png",
      content:
        "A1 Electricals can supply a wide range of wires and cables including underground cables and systems, medium and low voltage cables, voice video and data transmission cables, optical fibres and optical and copper cables. We provide a solution for a wide variety of applications such as power grids, underground cabling, telecoms, infrastructure and transport.",
    },
    {
      heading: "Cable Management",
      image: "/images/products/pvc-trunking-conduits.png",
      content:
        "We also stock and supply cable trays and conduits from leading manufacturers, ensuring your cable runs are properly contained and protected. Our team can help you select the right containment solution for your installation, whether it's a domestic property, commercial building or industrial facility.",
    },
  ],
  "Light Fittings & Luminaires": [
    {
      heading: "LED Energy Saving Luminaires",
      image: "/images/a1_lights.jpeg",
      content:
        "Our wide range of LED energy saving luminaires offer the best quality at extremely competitive pricing. This comprehensive range includes LED downlights, fire-rated downlights, spotlights, floodlights, industrial high-bay and low-bay luminaires, LED panels of all shapes and sizes, and LED amenity lighting. Our products are suitable for large scale industrial, commercial and residential installations.",
    },
    {
      heading: "Industrial Lighting",
      image: "/images/products/banner4.jpeg",
      content:
        "A1 Electricals offer the most comprehensive range of industrial lighting for factories, manufacturing plants, warehouses, cold rooms, ports, stadiums and airports. We can supply HID power luminaires or the most energy efficient LED luminaires dependent on your specific requirements. We also supply modular luminaires, corrosion resistant fittings, floodlights, bulkheads, ceiling fittings and emergency lighting from top manufacturers.",
    },
    {
      heading: "Street and Security Lighting",
      image: "/images/products/solar-led-lighting.png",
      content:
        "Whether you require conventional, LED energy saving or solar street lighting, A1 Electricals can offer luminaires, poles and highmast fittings to meet your every need. A full range of downlights, spotlights and floodlights mean whatever your needs we can supply quickly at the most competitive prices.",
    },
  ],
  "Wiring Accessories": [
    {
      heading: "Sockets",
      image: "/images/side.jpeg",
      content:
        "A1 Electricals offer a comprehensive range of switch sockets for domestic and commercial use. From standard sockets to multi-use sockets we can find the right product for your requirements. We can also supply a range of combination plates which offer a combined functionality of power, audio visual and data connectivity at one single point in the room. Our sockets come in a wide range of finishes from standard white to contemporary polished chrome and also natural finishes like wood.",
    },
    {
      heading: "Switches and Dimmers",
      image: "/images/image.png",
      content:
        "Our comprehensive range enables us to offer a wide choice of standard white accessories, or more decorative accessories including black nickel, stainless steel, polished chrome and polished brass depending on the finish you are looking for. We stock dimmer switches for LED and conventional lamps, cooker and shower connection units, and grid switch plates with modular faceplate systems.",
    },
    {
      heading: "Lighting Controls",
      image: "/images/products.jpeg",
      content:
        "A1 Electricals offer a wide range of lighting control systems suitable for commercial buildings and domestic use. Sensors and dimming switches are available which can help reduce energy costs. Multi-panel grids can help reduce installation costs housing a number of light switches on one panel.",
    },
  ],
  "Cable Trays & Conduits": [
    {
      heading: "Cable Trays and Cable Ladders",
      image: "/images/products/steel-cable-tranking.png",
      content:
        "In order to meet all your requirements for internal wiring systems we offer a full range of commercial and industrial cable trays and cable ladders in galvanised steel. These are available in a number of lengths, widths and configurations. Our extensive range offers solutions to all your commercial, industrial and residential wiring problems and can be supplied with suitable wiring accessories, power distribution units and floor outlet boxes. Special products for zone 1 and zone 2 installations available on request.",
    },
    {
      heading: "Conduits",
      image: "/images/products/pvc-trunking-conduits.png",
      content:
        "We offer a range of conduits for your cable management systems in either galvanised steel or PVC and GRP plastic. These are available in a number of lengths, widths and configurations and we can also supply all the wiring accessories you require. Rigid steel conduit provides maximum mechanical protection for containment runs where cables are exposed to potential damage.",
    },
    {
      heading: "Containment Fittings",
      image: "/images/products/cable-trays-conduits.png",
      content:
        "Every tray and conduit system we supply comes with a full range of matched fittings including bends, tees, reducers, couplers and support brackets so you can complete a containment run without mixing incompatible components. Hot-dip galvanising provides long-term corrosion resistance in humid climates, while stainless steel is available for the most demanding external or chemical environments.",
    },
  ],
  "Steel Cable Trunking": [
    {
      heading: "Mini Trunking",
      image: "/images/products/pvc-trunking-conduits.png",
      content:
        "50x50mm mini trunking for light data and signal runs, pre-galvanised or painted, with matching lids and accessories for clean, professional finishes. Mini trunking is ideal for domestic and light commercial applications where a discreet, low-profile cable management solution is required.",
    },
    {
      heading: "Standard Trunking",
      image: "/images/products/steel-cable-tranking.png",
      content:
        "100x50mm to 150x75mm medium trunking for mixed power and data circuits, with single and multi-compartment options for EMC compliance. Single and multi-compartment options allow power and data cables to be segregated within the same trunking run, an important consideration for EMC compliance and signal integrity in office and industrial environments.",
    },
    {
      heading: "Heavy-Duty Trunking",
      image: "/images/products/cable-trays-conduits.png",
      content:
        "300x150mm heavy-duty trunking for large power cable bundles, complete with bends, tees, flat angles, flanged couplers and end caps. All sections are supplied with matching lids, and a full range of accessories is available to complete any run.",
    },
  ],
  "PVC Trunking & Conduits": [
    {
      heading: "PVC Trunking",
      image: "/images/products/pvc-trunking-conduits.png",
      content:
        "Self-extinguishing, flame-retardant PVC trunking from 16mm mini-trunking for telephone and data cables to 100x50mm multi-compartment sections for power circuits. Lightweight, easy to cut and clip, our range makes first-fix installation fast and cost-effective without compromising on cable protection or finished appearance.",
    },
    {
      heading: "Round Conduit",
      image: "/images/products/steel-cable-tranking.png",
      content:
        "Round PVC conduit from 20mm to 32mm with junction boxes, bends and couplers, UV-stabilised for external and semi-exposed installations. All PVC products in our range are manufactured from self-extinguishing, flame-retardant compound, so they won't propagate a fire along a cable run.",
    },
    {
      heading: "Cable Management Accessories",
      image: "/images/products/cable-trays-conduits.png",
      content:
        "Conduit clips, saddles and white-finish trunking as standard, with other colours available to order for matched interior aesthetics. From 16mm mini-trunking for telephone and data cables to 100x50mm multi-compartment sections for busier runs, we stock the sizes most commonly used in domestic and commercial installations.",
    },
  ],
  "Lighting Control": [
    {
      heading: "Indoor Lighting Controls",
      image: "/images/drop_lights.jpeg",
      content:
        "A wide range of lighting controls with wallbox dimmers, occupancy sensors and wireless devices are supplied by A1 Electricals. These are ideal for residential properties or single room commercial buildings. Dimmers let you control the amount of energy used helping you save electricity and extend the life of bulbs. Occupancy and vacancy sensors are one of the easiest ways to save energy in the home office and are easy to install.",
    },
    {
      heading: "Outdoor Lighting Controls",
      image: "/images/drop_lights2.jpeg",
      content:
        "A1 Electricals supply outdoor lighting control systems that allow remote management of the entire lighting infrastructure. This can offer a number of benefits including a flexible lighting system that can be adapted for special events, energy and CO2 savings and maintenance cost savings. Photocells for daylight-linked switching and time switches for scheduled on/off control of external lighting reduce energy use while maintaining security.",
    },
    {
      heading: "Emergency Lighting",
      image: "/images/a1_lights.jpeg",
      content:
        "A wide range of emergency lighting products are available from A1 Electricals. All products offer high power and efficient LED lighting for excellent performance over a wide area. We supply emergency lighting for indoor and outdoor use. High performance exit signs with LED lights are also available for surface or suspended application.",
    },
  ],
  "Lamps, Bulbs & Tubes": [
    {
      heading: "LED Bulbs",
      image: "/images/a1_lights.jpeg",
      content:
        "A1 Electricals offer a wide range of LED energy efficient bulbs incorporating standard GLS type domestic lamps, LED candle bulbs and globe bulbs. These include B22, E27 and E14 lampholders in both clear and opal finish. In addition, a full range of GU10 spot and flood lights, all of which offer instant start and flicker free long life. LED lamps now offer a direct replacement for almost every legacy lamp format with lifespans of up to 50,000 hours and energy consumption up to 80% lower than incandescent equivalents.",
    },
    {
      heading: "Fluorescent Tubes",
      image: "/images/products/light-fittings-luminaires.png",
      content:
        "A1 Electricals offer an excellent range of retro-fit LED tubes – top quality with double ended rotatable power end caps in either T8 or T5 models. Energy saving, long life with superb packaging and real value for money. We also offer a full range of standard fluorescent tubes suitable for all applications. All tubes are available in a variety of colours including daylight, cool white, warm white and white.",
    },
    {
      heading: "HID Lamps",
      image: "/images/drop_lights2.jpeg",
      content:
        "A1 Electricals are pleased to offer a full range of High Intensity Discharge sodium, metal halide and mercury discharge lamps. These lamps are suitable for use in a wide range of applications like streetlights, floodlights and highbay luminaires. All our lamps are manufactured by leading blue chip brands. Compact fluorescent lamps in all common caps are also available for energy-saving retrofit applications.",
    },
  ],
  "Solar LED Lighting": [
    {
      heading: "Solar LED Street Lights",
      image: "/images/products/solar-led-lighting.png",
      content:
        "In today's rapidly evolving solar market, A1 Electricals are perfectly positioned to provide you with a range of solar lighting products suitable for commercial and residential usage. Solar powered LED lighting is easy to install with no digging up roads, trenching or cables required. Ongoing maintenance is low and the units will produce light within 24 hours of installation. We work with industry-leading providers to ensure the products we supply are reliable and durable and comply with all relevant standards.",
    },
    {
      heading: "Advantages of Solar LED Lighting",
      image: "/images/products/light-fittings-luminaires.png",
      content:
        "Solar LED street lighting is cost effective, easy to install and not reliant on the local electricity supply. It can be used in a wide range of locations including car parks, bus stops and shelters, ports and harbours, and parks and public areas. With solar LED lighting you will have no problems with electricity supply, no changing bulbs or ballasts and the units start working immediately.",
    },
    {
      heading: "Solar Floodlights",
      image: "/images/a1_lights.jpeg",
      content:
        "Solar floodlights for compounds, car parks and building exteriors, sized for security and area lighting where grid power is absent or unreliable. All-in-one solar LED street lights integrate a monocrystalline panel, LiFePO4 battery, LED head and intelligent controller into a single pole-mounted unit, with dusk-to-dawn and motion-boost modes standard.",
    },
  ],
  "Switchgear Distribution": [
    {
      heading: "Switchgear Systems",
      image: "/images/products/Switchgear Systems.jpeg",
      content:
        "Improve reliability, increase efficiency and enhance safety by installing centralised switchgear control systems. Our switchgear products give you centralised control and protection of low and medium voltage power equipment and circuits in industrial, commercial, and utility installations that house generators, motors and transmission lines. We offer a broad portfolio of low and medium voltage electrical equipment that can distribute, monitor and manage power throughout your facility.",
    },
    {
      heading: "Distribution Boards",
      image: "/images/products/switchgear-distribution.png",
      content:
        "A1 Electricals supply a wide range of medium and low voltage power distribution products. These include panel boards, switchboards, transformers and busways. We also supply a range of switches, disconnects and enclosed circuit breakers. From a domestic consumer unit to a 630A industrial distribution board, our switchgear range covers the full spectrum of LV power distribution.",
    },
    {
      heading: "Consumer Units and Enclosures",
      image: "/images/mccb.jpeg",
      content:
        "Domestic consumer units from 6-way to 24-way, pre-fitted with MCBs and RCDs where required, in metal and polycarbonate enclosures. Single-phase distribution boards for commercial premises and three-phase panelboards for industrial installations, with IP ratings from IP41 for indoor use to IP65 for external and industrial environments.",
    },
  ],
  "Circuit Protection": [
    {
      heading: "Circuit Protection",
      image: "/images/mccb.jpeg",
      content:
        "In conjunction with our low voltage distribution boards and consumer units we offer a wide range of circuit protection equipment manufactured to IEC60898-1 and IEC60947-2. These can be supplied in a wide range of sizes to suit small one-off installations or large scale commercial buildings. They can be applied in panelboards, switchboards, motor control centres, control panels, combination starters and individual enclosures.",
    },
    {
      heading: "Circuit Breaker Range",
      image: "/images/products/Switchgear Systems.jpeg",
      content:
        "We supply a variety of circuit breakers, from digital units with integrated digital technology to custom built boards. Our product range includes MCCB moulded case circuit breakers, RCBO residual current circuit breakers with overcurrent protection, RCCB residual current circuit breakers, and MCB miniature circuit breakers. Correct discrimination between protective devices ensures the device closest to the fault operates first, critical to a reliable installation.",
    },
    {
      heading: "Fuses and Surge Protection",
      image: "/images/products/power-protection.png",
      content:
        "HRC fuses and fuse bases, moulded case circuit breakers up to 630A, surge protection devices and isolators for complete circuit protection. Whether you're populating a new distribution board, replacing a tripped or faulty device, or upgrading an older installation to current standards, we hold stock of the most commonly specified protective devices for immediate supply.",
    },
  ],
  "Motor Controls & Starters": [
    {
      heading: "DOL Starters",
      image: "/images/products/led-indicators-push-button.webp",
      content:
        "Direct-on-line starters up to 15kW with contactors, thermal overload relays and IP54/IP65 enclosures for pump and fan applications. Reliable motor starting and protection is essential in any industrial or commercial plant, whether you're running pumps, fans, compressors or process machinery. Our team can help you select the correct contactor and overload combination for your motor rating and duty cycle.",
    },
    {
      heading: "Star-Delta Starters",
      image: "/images/products/generators.png",
      content:
        "Star-delta starters for motors up to 150kW, providing reduced-current starting for larger industrial loads with proper interlocking arrangements. Contactors and overload relays from ABB and Siemens form the core of our motor control range, with thermal and electronic overload relays providing accurate motor protection across the full load range.",
    },
    {
      heading: "Soft-Start Units",
      image: "/images/products/power-protection.png",
      content:
        "Soft-start units for smooth motor acceleration, reducing mechanical stress and inrush current on motors driving conveyors, compressors and process machinery. IP54 and IP65 enclosures are available for installations in wet or dusty environments. We supply motor control equipment to industrial plants, water utilities, building services contractors and process engineers across Uganda.",
    },
  ],
  "Power Protection": [
    {
      heading: "Protecting Your Assets",
      image: "/images/products/power-protection.png",
      content:
        "We offer a comprehensive package of UPS systems and inverters. These are available in both three phase and single phase units and help to offer stable and regulated power supply to expensive IT and electronic equipment. A1 Electricals can supply a full range of reliable power protection solutions to protect against the damaging effects of lightning, utility switching, switching electric motors, and blackouts. All products comply with the latest industry standards.",
    },
    {
      heading: "UPS Systems",
      image: "/images/mccb.jpeg",
      content:
        "Line-interactive UPS from 600VA to 3kVA for workstations and small servers, and online double-conversion UPS from 1kVA to 20kVA for critical loads. UPS systems provide battery backup during outages, automatic voltage regulators correct sustained over and under-voltage, and surge protection devices clamp transient spikes before they reach your equipment.",
    },
    {
      heading: "Voltage Stabilisers and Surge Protection",
      image: "/images/products/generators.png",
      content:
        "Servo-type automatic voltage regulators for continuous voltage correction and relay-type AVRs for cost-sensitive applications where battery backup isn't required. Type 1 surge protection devices for main distribution boards and Type 2 SPDs for sub-distribution and individual equipment protection. Power quality problems are often invisible until equipment fails or data is lost.",
    },
  ],
  "Lightning Protection": [
    {
      heading: "Air Terminals",
      image: "/images/products/power-protection.png",
      content:
        "Air terminal rods and early streamer emission ESE terminals engineered to BS EN 62305 for effective lightning strike interception. Uganda sits within one of the world's highest lightning density zones, making effective lightning protection a genuine life-safety requirement rather than an optional extra.",
    },
    {
      heading: "Down Conductors",
      image: "/images/products/cables-wires.png",
      content:
        "Flat tape and round conductor down conductors with test clamps and inspection joints, providing a low-impedance path from the air terminal network to earth. Copper is specified for the most demanding environments and where long service life is critical; aluminium offers a cost-effective alternative for less aggressive conditions.",
    },
    {
      heading: "Earthing Systems",
      image: "/images/products/steel-cable-tranking.png",
      content:
        "Copper and aluminium earth rods, inspection pits and equipotential bonding bars, sized according to BS EN 62305 risk-assessment standards. Earth resistance testing is an essential part of both commissioning and ongoing maintenance of a lightning protection system. We stock earth resistance test kits and can advise on testing methodology.",
    },
  ],
  "Security & Fire Alarms": [
    {
      heading: "Comprehensive Product Range",
      image: "/images/products/fire_alarms.png",
      content:
        "A1 Electricals provide a wide range of Security and Fire systems sourced from leading electrical product manufacturers for domestic, commercial and industrial applications. Whether you are installing fire detection or security systems our extensive product range will meet your needs. We can also source and supply most advanced equipment needed for specialist projects. Our range includes fire detection, security alarms, fire panels, smoke and heat detectors, alarm bells, electronic sounders, break glass units, emergency lighting, PIRs and CCTV.",
    },
    {
      heading: "Fire Detection Systems",
      image: "/images/products/eaton.jpeg",
      content:
        "We can supply complete fire detection systems or individual components to meet your requirements. All are certified to British and International standards giving you peace of mind that properties are properly protected. We can supply smoke and heat detectors designed for operation on conventional systems together with sounder beacons and electronic bells which can be used in a wide range of applications. Fire detection and alarm panels are available in a range of sizes dependent on the premises and the number of zones required.",
    },
    {
      heading: "Security Systems",
      image: "/images/products/led-indicators-push-button.webp",
      content:
        "Whether you are installing a security system in a new construction or a retro-fit for an existing building our extensive product range will meet your needs. We can supply a wide range of security systems for commercial, industrial and residential premises. Depending on your security requirements we can supply standalone CCTV systems or fully integrated security, access control and fire detection systems.",
    },
  ],
  "Ventilation & Fans": [
    {
      heading: "Axial Fans",
      image: "/images/products/ventilation_fans.png",
      content:
        "Axial wall fans for bathrooms and kitchens from 100mm to 150mm, with airflow rates from 15 to 500 cubic metres per hour and noise levels from 26dB(A). Good ventilation is essential in Uganda's hot, humid climate, both for occupant comfort and to prevent the moisture damage and mould growth that poor air movement encourages.",
    },
    {
      heading: "Centrifugal and Inline Fans",
      image: "/images/products/generators.png",
      content:
        "Centrifugal fans for longer duct runs where higher pressure is required, specified for airflow, noise and humidity performance in commercial settings. Inline duct fans for commercial ventilation systems with humidistat, timer and pull-cord control options, rated IP24 to IP45 for wet-room applications.",
    },
    {
      heading: "Ventilation Solutions",
      image: "/images/products/led-indicators-push-button.webp",
      content:
        "We supply ventilation fans to building contractors, M&E installers and facilities managers across Kampala. Whether you need a single replacement fan for a domestic bathroom or a full commercial ventilation package for an office or retail fit-out, our team can help you match the right unit to your duct size, airflow requirement and control preference.",
    },
  ],
  Generators: [
    {
      heading: "Commercial Generators",
      image: "/images/products/generators.png",
      content:
        "Loss of power to an office or industrial facility can cause considerable disruption and economic loss. A standby generator will supply lights and safety equipment in such an event. An alternate power source may be required in commercial premises by building codes and regulations. We can supply portable generators and emergency battery packs for small facilities through to standby generators and central battery systems for larger scale commercial operations.",
    },
    {
      heading: "Portable Generators",
      image: "/images/products/power-protection.png",
      content:
        "Where power supply is intermittent we can supply a range of portable generators which are suitable for domestic and light commercial use. These come in a wide range of sizes and are designed to keep lights and appliances powered in the event of a power outage. Load shedding remains a fact of life across much of Uganda, and a reliable generating set is the most practical solution for homes and businesses that cannot afford downtime.",
    },
    {
      heading: "Silent Canopy and Containerised Sets",
      image: "/images/products/Switchgear Systems.jpeg",
      content:
        "Silent canopy diesel generators for residential and commercial use, reducing noise to acceptable levels for populated areas. Containerised generating sets from 100kVA to 500kVA for industrial prime power applications, with automatic transfer switches for seamless changeover from mains to generator supply.",
    },
  ],
  "Bespoke Requirements": [
    {
      heading: "Non-Standard Items",
      image: "/images/a1-storefront.webp",
      content:
        "Not every project fits neatly within a standard product catalogue. When your specification calls for something outside our stocked range, our sourcing team works directly with manufacturers and distributors to find and procure it. We have established relationships with manufacturers across the UK, Europe and the Far East, and experience navigating the import and logistics requirements for electrical equipment entering Uganda.",
    },
    {
      heading: "Custom Assemblies",
      image: "/images/products.jpeg",
      content:
        "Project-specific enclosures, IP-rated housings and bespoke panel assemblies built to particular schedules of requirements. Bespoke orders are consolidated with standard stock items wherever possible, reducing freight costs and simplifying delivery to your site or project store.",
    },
    {
      heading: "Import Coordination",
      image: "/images/image.png",
      content:
        "Import and logistics coordination for overseas manufacturers, with consolidation of bespoke items with standard stock orders for single delivery. Lead times and minimum order quantities vary by product and manufacturer, and we'll give you a realistic timeline and cost before you commit.",
    },
  ],
  "Transformers & Power Distribution": [
    {
      heading: "Distribution Transformers",
      image: "/images/products/generators.png",
      content:
        "Oil-filled distribution transformers from 25kVA to 2500kVA for utility, industrial and commercial step-down applications, alongside dry-type cast-resin transformers for indoor and fire-sensitive installations. Pole-mounted and pad-mounted options are available depending on your site layout and safety requirements.",
    },
    {
      heading: "Transformer Protection",
      image: "/images/products/Switchgear Systems.jpeg",
      content:
        "HRC fuses, drop-out fuses and Buchholz relays protect transformers against overload and internal fault conditions. Correct protection coordination between the transformer and upstream network is essential for both equipment longevity and system stability, and our team can advise on the right protection scheme for your installation.",
    },
    {
      heading: "Power Distribution Equipment",
      image: "/images/products/switchgear-distribution.png",
      content:
        "Power distribution panels, ring main units (RMUs) and associated switchgear complete the supply chain from transformer to final distribution. We also stock transformer oil, bushings and spare parts to support ongoing maintenance of existing installations.",
    },
  ],
  "Industrial Control & Automation": [
    {
      heading: "Drives & Motor Control",
      image: "/images/products/motor-controls-starters.png",
      content:
        "Variable speed drives (VSDs/VFDs) and soft-starters provide precise motor speed control and smooth acceleration, reducing mechanical stress and energy consumption compared to fixed-speed operation. We stock drives suitable for pumps, fans and general industrial motor applications.",
    },
    {
      heading: "PLCs & Process Control",
      image: "/images/products/fire_alarms.png",
      content:
        "Programmable logic controllers (PLCs) and HMI touch panels give plant managers precise control and visibility over industrial processes. We supply control relays, timers and industrial push-buttons alongside PLCs for building out complete control panels.",
    },
    {
      heading: "Sensors & Panel Building",
      image: "/images/products/Switchgear Systems.jpeg",
      content:
        "Proximity, level, pressure and temperature sensors feed real-world data back into your control system. We also stock the panel-building components — terminal blocks, DIN rail and wiring ducts — needed to assemble control panels to IP54 or IP65 enclosure ratings.",
    },
  ],
};

export function brandRangeItems(catOrBrand) {
  if (catOrBrand && typeof catOrBrand === "object") {
    if (Array.isArray(catOrBrand.rangeItems) && catOrBrand.rangeItems.length > 0) {
      return catOrBrand.rangeItems;
    }
    if (catOrBrand.cat) {
      return brandRangeItems(catOrBrand.cat);
    }
  }

  const brand = BRANDS.find(
    (b) => b.slug === catOrBrand || b.name === catOrBrand
  );
  if (brand && Array.isArray(brand.rangeItems) && brand.rangeItems.length > 0) {
    return brand.rangeItems;
  }

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
    "Cables & Wires": [
      "Building wire",
      "Armoured cable",
      "Flexible cables",
      "Cable glands & lugs",
    ],
    "Security & Fire Alarms": [
      "Fire alarm panels",
      "Smoke & heat detectors",
      "Call points & sounders",
      "Emergency lighting",
    ],
    "Ventilation & Fans": [
      "Ceiling fans",
      "Exhaust fans",
      "Wall & pedestal fans",
      "Air circulation units",
    ],
  };

  return (
    map[catOrBrand] || [
      "Electrical accessories",
      "Related components",
      "Genuine spare parts",
    ]
  );
}

export function slugify(text) {
  return (text || "")
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function findBrandProduct(brandOrSlug, productSlug) {
  const brand =
    typeof brandOrSlug === "string" ? findBrand(brandOrSlug) : brandOrSlug;
  if (!brand || !Array.isArray(brand.products)) return null;
  const target = (productSlug || "").toLowerCase();
  return (
    brand.products.find(
      (p) =>
        (p.slug && p.slug.toLowerCase() === target) ||
        slugify(p.name) === target ||
        slugify(p.model || "") === target ||
        slugify(`${p.name}-${p.model || ""}`) === target
    ) || null
  );
}

export function getBrandProducts(brandOrSlug) {
  if (!brandOrSlug) return [];
  const brand =
    typeof brandOrSlug === "string" ? findBrand(brandOrSlug) : brandOrSlug;
  if (!brand) return [];

  if (Array.isArray(brand.products) && brand.products.length > 0) {
    return brand.products.map((p) => ({
      ...p,
      slug: p.slug || slugify(`${p.name}-${p.model || ""}`),
    }));
  }

  return [];
}

export function getLeadingBrand(cat) {
  const brand =
    BRANDS.find((b) => b.cat === cat && b.logo) ||
    BRANDS.find((b) => b.cat === cat);
  return brand || null;
}

export function getSubCategories(pOrKey) {
  if (!pOrKey) return [];

  // If an object is passed (e.g. product object p)
  if (typeof pOrKey === "object") {
    if (pOrKey.slug && PRODUCT_SUB_CATEGORIES[pOrKey.slug]) {
      return PRODUCT_SUB_CATEGORIES[pOrKey.slug];
    }
    if (pOrKey.name && PRODUCT_SUB_CATEGORIES[pOrKey.name]) {
      return PRODUCT_SUB_CATEGORIES[pOrKey.name];
    }
    if (pOrKey.split1) {
      const splits = [];
      const pName = pOrKey.name || "Product";
      if (pOrKey.split1)
        splits.push({
          heading: `${pName} Overview & Features`,
          content: pOrKey.split1,
        });
      if (pOrKey.split2)
        splits.push({
          heading: `${pName} Specifications & Standards`,
          content: pOrKey.split2,
        });
      if (pOrKey.split3)
        splits.push({
          heading: `${pName} Applications & Support`,
          content: pOrKey.split3,
        });
      return splits;
    }
    if (pOrKey.cat && PRODUCT_SUB_CATEGORIES[pOrKey.cat]) {
      return PRODUCT_SUB_CATEGORIES[pOrKey.cat];
    }
  }

  // If a string key is passed (slug, name, or category)
  if (typeof pOrKey === "string") {
    if (PRODUCT_SUB_CATEGORIES[pOrKey]) {
      return PRODUCT_SUB_CATEGORIES[pOrKey];
    }
    const prod = PRODUCTS.find((p) => p.slug === pOrKey || p.name === pOrKey);
    if (prod && prod.split1) {
      const splits = [];
      const pName = prod.name || "Product";
      if (prod.split1)
        splits.push({
          heading: `${pName} Overview & Features`,
          content: prod.split1,
        });
      if (prod.split2)
        splits.push({
          heading: `${pName} Specifications & Standards`,
          content: prod.split2,
        });
      if (prod.split3)
        splits.push({
          heading: `${pName} Applications & Support`,
          content: prod.split3,
        });
      return splits;
    }
  }

  return PRODUCT_SUB_CATEGORIES[pOrKey] || [];
}
