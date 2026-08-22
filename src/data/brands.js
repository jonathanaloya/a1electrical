import { PRODUCTS } from "./products.js";

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
  "wiring-accessories": [
    {
      heading: "Specialized Wiring Accessories & Dimmers",
      image: "/images/products/wiring_accessories.jpeg",
      content:
        "Consumer-facing electrical accessories must combine internal electrical safety with clean visual design. Our specialized wiring accessory range includes electronic LED dimmers, 45A double-pole cooker control units, dual USB-A/C charging modules, shaver supply units, shaver sockets, and multi-gang grid switch assemblies.",
    },
    {
      heading: "Modular Grid Systems & Decorative Finishes",
      image: "/images/products/modular_grid.jpeg",
      content:
        "Built on flexible modular grid systems, our accessories enable custom plate configurations combining power, data, audio-visual, and switching points on a single faceplate. We supply durable white moulded polycarbonate ranges alongside high-end brushed steel, polished chrome, and heavy-duty metal-clad fittings for industrial workshops.",
    },
    {
      heading: "Wiring Accessory Standards & Contractor Packs",
      image: "/images/products.jpeg",
      content:
        "Compliant with BS EN standards and tested for high switching endurance, our wiring accessories are ideal for hotel fit-outs, commercial office blocks, and residential housing projects. We offer bulk contractor packs and matching accessories across complete interior ranges for aesthetic consistency.",
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
