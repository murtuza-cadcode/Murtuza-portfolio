/** English strings. `**bold**` marks <strong>; de.ts must match this shape. */
export const en = {
  meta: {
    description: "Syed Murtuza Quadri — mechanical engineer specializing in automotive and robotics applications.",
    titles: { home: "SYED", work: "Work Experience", extra: "Extracurricular", projects: "Projects", hobbies: "Hobbies" },
  },
  common: {
    nav: { work: "Work Experience", extra: "Extracurricular", projects: "Projects", hobbies: "Hobbies" },
    resume: "RESUME",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    contact: "Contact",
    details: "Details",
    projectSlides: "Project Slides",
    productLink: "Link to product website",
    language: "Language",
  },
  home: {
    name: "Syed Murtuza Quadri",
    hero1: "Mechanical Engineer",
    hero2: "Specializing in Automotive & Robotics Applications",
    aboutTitle: "About Me",
    about: [
      "   I'm an analytical and hands-on engineer who believes the best way to understand a system is to build it from the ground up. Driven by the challenge of creating the next generation of vehicles, my passion lies in turning a digital concept into a physical, functioning reality. This means I'm just as comfortable detailing a complex CAD assembly as I am wiring a control panel or programming the logic to make it move.",
      "   I thrive on solving problems at the intersection of mechanical, electrical, and software systems. My experience has taught me to be resourceful and adaptable, whether that means machining a prototype part myself or writing the code for a sensor-driven process. I approach every challenge with a systems-level perspective, focused on creating robust, elegant solutions that are built to perform in the real world.",
    ],
    eduTitle: "Education",
    msc: { title: "M.Sc. Vehicle Technology", date: "2024- Present", school: "RPTU Kaiserslautern, Germany", courses: [
      "Control Engineering",
      "Sensor Signal Processing",
      "Dynamical Systems and Neural Networks",
      "Autonomous Mobile Robots",
      "Vehicle Vibrations",
      "Drives and Gears",
      "Automotive Production",
      "Safety & Reliability of Embedded Systems",
      "Automotive Software and Systems Engineering",
    ] },
    be: { title: "B.E. Mechanical Engineering", date: "2016-2020", school: "Osmania University, India", courses: [
      "Machine Design",
      "Finite Element Analysis (FEA)",
      "Applied Thermodynamics",
      "Fluid Mechanics",
      "Heat Transfer",
      "CAD/CAM",
      "Manufacturing Processes",
    ] },
    toolsTitle: "Tools",
    tools: [
      "**CAD:** Siemens NX, SolidWorks, CATIA V5, Creo, AutoCAD",
      "**CAE:** ANSYS Workbench, NX Nastran, MATLAB/Simulink",
      "**Manufacturing:** CAM & CNC Machining, FDM/SLA 3D Printing, GD&T, DFA/DFM, Fault Tree Analysis, DFMEA",
      "**Programming:** Python, C++, G-Code.",
    ],
  },
  projects: {
    p1Title: "Sensor Signal Processing: Raw Audio to Machine Learning  for command classification",
    p1Text: "   An end-to-end audio signal processing pipeline for voice-controlled gaming using **Python**. This project captures spoken commands ('up', 'down', 'left', etc.) and processes them through a custom feature engineering workflow based on the Fast Fourier Transform (FFT). Linear Discriminant Analysis (LDA) is used to create a 2D feature space for classification. The performance of k-NN, SVM, and Decision Tree models were compared, with the best model being integrated into a final live demo that controls a Pac-Man game in real-time.",
    github: "GitHub: Code",
    p2Title: "Bachelor's Thesis:  Changes in flexural properties of e-glass laminate composite",
    p2Text: [
      "  This research provides an experimental analysis of delamination, a critical failure mode in fiber-reinforced plastic composites. To investigate its impact on structural integrity, E-glass/epoxy laminates were manufactured with embedded artificial defects of varying shapes, sizes, and interlayer locations. ",
      "  The mechanical properties of these samples were then evaluated using a three-point bending test. The results demonstrate a clear and quantifiable reduction in flexural stiffness, showing that larger defects and those located closer to the composite's center cause the most significant degradation in performance.",
    ],
  },
  hobbies: {
    artTitle: "Art & Sketching",
    art: "I find a different kind of focus and precision in art, primarily through portrait sketching and acrylic painting. For me, creating art is an exercise in intense observation.",
    footballTitle: "Football",
    football: "For several years, I had the privilege of playing for the Hyderabad Sporting Football Club. More than just a game, being part of a club taught me the true meaning of discipline, strategy, and collective effort.",
    musicTitle: "Music",
    music: "  Recently, I've picked up the guitar, and I'm thoroughly enjoying the structured process of being a beginner again. Learning chords, developing muscle memory, and understanding the theory behind the music is a humbling and rewarding challenge",
  },
  work: {
    intro: "A robust **4-year** industry track record in engineering complete electro-mechanical systems for automotive and automation applications.",
    stihl: {
      duration: "6 months (Present)",
      p: [
        "   As an **NVH Engineer Intern** at Andreas STIHL AG & Co. KG, I focused on the acoustic and structural dynamic characterization of professional power tools. ",
        "  My work encompassed the end-to-end testing pipeline: instrumenting prototype chainsaws and motorized tools with advanced dynamic sensors, executing sound and vibration measurements, and performing in-depth EMA and ODS analyses to evaluate and enhance overall structural behavior.",
        "I am presently continuing with my **Master Thesis** on the topic of further optimizing the NVH metrics of chainsaws using MBD simulations.",
      ],
    },
    maruti: {
      name: "Maruti Suzuki",
      duration: "2 Years 4 months",
      p: [
        "   At India’s largest passenger vehicle OEM, I worked as a **Door Systems Design Engineer**, part of the Body Engineering Division with end-to-end responsibility for the front side door system of a new SUV program. ",
        "   My role combined design engineering, regulatory compliance, manufacturability checks, and supplier coordination to deliver a door system that was robust, safe, and production-ready.",
      ],
    },
    emflux: {
      name: "Emflux Motors",
      duration: "1 Years 2 months",
      p: "   As a **Mechanical Design Engineer**, I was responsible for designing and programming automated production machinery at this EV motorcycle start-up, where I developed complete mechatronic systems from concept to production, managing assemblies in SOLIDWORKS with over 1,300 components.",
    },
    possi: {
      name: "Possibillion",
      duration: "3 months",
      p: "As a **Mechanical Design Intern**: Designed a 5-axis SCARA Robot for a robotic kitchen. Designed in SOLIDWORKS, selected stepper motors based on required torque calculations. Built a reliable working model by prototyping parts using FDM 3D printer.",
    },
    msil: {
      title: "Door Systems Design Engineer - OEM Perspective",
      sections: [
        { h: "System-Level Responsibilities", items: [
          "I started with Class-A surfaces provided by the styling team and carried out detailed section studies to freeze door cutlines. ",
          "This required balancing aesthetics, ergonomic reach envelopes, and feasibility for press tooling and hemming operations. ",
          "The design was coordinated across press shop, weld shop, paint shop, and assembly shop to ensure seamless manufacturability.",
        ] },
        { h: "Structural & Safety Engineering", items: [
          "Designed the door inner panel to integrate mechanisms, sealing surfaces, hemming flanges, and trim attachment features. Considerations included DFA/DFM principles, crash load paths, and stiffness optimization.",
          "Worked on reinforcement layouts and tubular elements, where crash simulations provided CAE-driven design modifications for intrusion resistance and energy absorption.",
          "Optimized carryover vs new parts to achieve cost reduction while meeting strength, weight, and safety targets.",
        ] },
        { h: "Subsystem Design & Packaging", items: [
          "**Latch and Mechanisms:** Developed layouts for hinges, door checkers, and latch systems while ensuring compliance with ECE R11 latch/retention regulations. Mechanism kinematics were optimized for durability and ergonomic feel.",
          "**Glass & Regulator System:** Designed the sash and reinforcement structures for smooth glass movement, with proper guidance, anti-rattle measures, and sealing considerations.",
          "**Sealing Surfaces:** Engineered periphery sealing and glass run channels to achieve required NVH performance and water-tightness, balancing sealing efficiency with low effort door closing.",
          "**Electrical Integration:** Coordinated layouts for wiring harness routing, connectors, switches, and sensors within the door, ensuring ease of assembly and serviceability.",
        ] },
        { h: "Collaboration & Cross-Functional Work", items: [
          "Actively collaborated with press shop, weld shop, and paint shop teams to validate manufacturability and incorporate shop-floor feedback into early design stages.",
          "Benchmarked competitor door systems and prepared internal databases of design solutions, enabling quicker design decisions and innovation.",
          "Reviewed Tier-1 and Tier-2 supplier parts for feasibility, fitment, and compliance, while supporting senior engineers with documentation and technical evaluations.",
        ] },
        { h: "Validation & Release", items: [
          "Released CAD models and drawings under strict deadlines, aligning with Suzuki’s design methodology and internal quality standards.",
          "Supported vehicle-level door testing at the company’s proving grounds, gaining exposure to DVP activities such as durability cycling, water leakage checks, and abuse testing.",
          "Conducted weekly door system review meetings, driving issue resolution, sharing knowledge across the department, and presenting learnings from supplier visits and industry expos.",
        ] },
      ],
    },
    emfluxDetail: {
      title: "Driving the EV Revolution: Designing and Programming Automated Production Machinery from Scratch.",
      windingTitle: "**1. Winding Machine for E-Motors **",
      winding: [
        "I began with the design of a 2-station automatic stator winding machine for BLDC smart fans, which went into production. The system could wind two stators in 24 minutes and required a **complete electromechanical design cycle.** ",
        "Mechanically, I selected motors, gearboxes, and a synchronous belt drive system, and produced GD&T-compliant drawings for both fan parts and machine components. To deepen my understanding of tolerances and fits, I also manufactured many parts myself on **manual milling** and **lathe** machines.",
        "On the electrical and controls side, I carried out the full wiring and wrote the G-Code program to run the machine. This project was where connected **mechanical design, manufacturing, and system integration**, learning how theoretical calculations translate into production throughput.",
      ],
      weldTitle: "**2. Automatic Spot Welding Machine**",
      weldIntro: "Building on the experience from the winding machine, I undertook a much larger and more complex project: designing a CNC-controlled spot-welding unit with pneumatic head actuation for EV battery pack assembly.",
      weld: [
        "I created a CAD assembly of ~1300 components, covering welded frames, CNC-machined parts, and sheet-metal enclosures. Detailed speed, load, and accuracy calculations guided the selection of ball screws and linear guides.",
        "I also handled the complete **electrical and controls integration**. This included drafting the full schematic and designing the control panel with CNC controller, limit/home switches, E-Stop, solenoid valves for pneumatics, hall sensors, load cells, and pressure sensors. ",
        "A critical aspect was the routing of shielded signal cables, power cables, and pneumatic hoses using energy chains, while applying proper grounding techniques to minimize EMI.",
        "Compared to the winding machine, this project required a deeper grasp of **design for manufacturability, metrology, and cross-discipline system integration**, effectively bridging CAD, machining, electronics, and automation.",
      ],
    },
    possiDetail: {
      title: "SCARA Robot for a robotic kitchen",
      v1Label: "**Version 1:**",
      v1: [
        "The base used a NEMA 17 stepper with 2:1 pulley and 280 mm belt, but rotation on a PTFE washer was rough, the motor was exposed, mounting points looked bulky, and a custom bolt fit too tight. Linear motion used an 8 mm, 2 mm pitch lead screw with NEMA 17 and initially only 2 rods, which caused binding; later 3 rods with staggered bearings fixed alignment. ",
        "Still, the motor had no cover and the elbow motor sat in front of the screw, creating cantilever load and reducing capacity. The elbow (axis 3) ran on a NEMA 17 with 2:1 pulley but suffered joint bending from clearance between bolt and bearings, lacked a limit switch, and had no wiring provision. The gripper used 2 MG996 servos for wrist and jaws, but assembly was time-consuming and mechanically complex.",
      ],
      v2Label: "**Version 2:**",
      v2: "The base was improved with radial ball bearings for smooth rotation, a rotary encoder and hall sensor for tracking and homing, higher pulley ratio for torque, and an enclosed motor inside the base. Linear motion had a redesigned platform with wiring integration, provision for a cable drag chain, and a covered top motor. The elbow was completely redesigned to include encoder, hall sensor, belt-tensioning mounts, a protective cover, and proper wiring paths. The gripper remained unchanged from Version 1 since performance was adequate.",
    },
  },
  extra: {
    fsae: {
      title: "Formula SAE ",
      duration: "4 months",
      team: "Kaiserslautern Racing Team(KaRaT)",
      sections: [
        { h: "Objective", p: "As a member of a newly formed Formula Student team, my initial objective was to support the core group in overcoming the first major hurdle: passing the highly competitive **technical qualification quizzes** required for participation in European events like Formula Student Germany (FSG)." },
        { h: "My Contribution", p: "Integrating into the team during my first semester, I applied my previous SAE competition experience to accelerate the team's technical preparation. Systematically analyzing the extensive Formula Student rulebook and breaking down complex technical regulations into understandable segments for the team. Collaborating with subsystem leads to develop targeted study materials and conduct mock quiz sessions focusing on vehicle dynamics, powertrain, and electrical systems." },
        { h: "Outcome", p: "This concentrated effort was instrumental in the team's successful qualification for Formula Student Spain. While we missed the cut-off for FSG, securing a spot in the Spanish competition was a significant achievement that validated the team's core engineering knowledge." },
      ],
    },
    baja: {
      title: "BAJA SAE ",
      duration: "1 year ",
      team: "Team Mudbrothers Racing",
      sections: [
        { h: "Chief Engineer: Steering System for the All-Terrain Vehicle", p: "For the SAE Baja 2020 competition, I took on the lead role for one of the vehicle's most critical systems: the steering. My mission was to deliver a robust, reliable, and responsive system that could withstand the punishment of off-road racing." },
        { h: "Design & Simulation ", p: "The foundation of the project was a custom rack-and-pinion assembly. Using vehicle dynamics software, I performed a detailed kinematic analysis to optimize the steering geometry for maximum maneuverability and minimal bump steer. The goal was to give our driver precise control, no matter how rough the track got." },
        { h: "Virtual Testing & Validation", p: "To guarantee the design was tough enough for competition, I conducted extensive Finite Element Analysis (FEA) in ANSYS. By simulating real-world race conditions, I could validate the structural integrity of every component, from the tie-rods to the steering column, ensuring the system was safe and built to last." },
        { h: "From CAD to Competition ", p: "With a proven design, I led the manufacturing phase. Applying Design for Manufacturing (DFM) principles, we used a mix of CNC machining for our core components and 3D printing for complex parts like the ergonomic steering wheel grips. This hands-on approach ensured every piece fit perfectly and performed flawlessly." },
        { h: "The result? ", p: "A steering system that held up beautifully under pressure, helping Team Mudbrothers Racing secure an outstanding **7th place finish in the national endurance race.**" },
      ],
      report: "Link to Design Report",
    },
    sae: {
      title: "SAE India Collegiate Club",
      duration: "1 year ",
      intro: "One of my most fulfilling achievements during my time as Vice President was creating and leading a two-day, hands-on workshop focused on **engine assembly** for 60 students.",
      sections: [
        { h: "The Challenge ", p: "Engineering theory is essential, but practical application is what truly inspires. My goal was to demystify the internal combustion engine and provide students with a memorable, hands-on learning experience." },
        { h: "The Preparation ", p: "The initiative was a solo endeavour from the start. I sourced a 3-cylinder Maruti 800cc engine and personally undertook the process of cleaning, disassembling, and preparing it for the workshop. To ensure a fluid and informative presentation, I practiced the full reassembly twice, perfecting a two-hour demonstration that combined mechanical work with a detailed technical explanation." },
        { h: "The Outcome", p: "The two-day event was a huge success. I guided the students through the entire build process, explaining the function of every subcomponent **live as it was being installed.** This interactive format bridged the gap between diagrams on a page and the reality of a working machine, creating a dynamic and engaging learning environment for everyone involved." },
      ],
    },
  },
};

export type Dict = typeof en;
