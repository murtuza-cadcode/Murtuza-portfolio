import type { Metadata } from "next";
import { Block, Section } from "@/components/Section";
import { Img, Video, Button, Rule, Shape } from "@/components/blocks";

export const metadata: Metadata = { title: "Work Experience" };

export default function WorkexperiencePage() {
  return (
    <>
      <Section theme="white" first divider={{ path: "M-1.006,0 L-1.006,0 l0,0 c0,0 0.251,1 0.502,1 s0.502,-1 0.502,-1 l0,0 l0,0 c0,0 0.251,1 0.502,1 s0.502,-1 0.502,-1 l0,0 l0,0 c0,0 0.251,1 0.502,1 s0.502,-1 0.502,-1 l0,0", height: "2vw", stroke: 6, nextBg: "var(--light)" }} rows={{ m: 71, d: 23 }}>
        <Block m="1/2/7/10" d="1/2/4/26" z={21} jm="flex-start">
          <div className="text">
            <h3>{"A robust "}<strong>3.5-year</strong>{" industry track record in engineering complete electro-mechanical systems for automotive and automation applications."}</h3>
          </div>
        </Block>
        <Block m="7/2/8/10" d="4/3/5/10" z={22}>
          <Rule />
        </Block>
        <Block m="8/3/10/7" d="5/4/7/7" z={2}>
          <div className="text">
            <h4>Maruti Suzuki</h4>
          </div>
        </Block>
        <Block m="8/2/10/3" d="5/3/7/4" z={4}>
          <Img src="/images/suzuki-logo-2025-svg.png" fit="contain" />
        </Block>
        <Block m="8/7/10/10" d="5/7/7/10" z={9}>
          <div className="text">
            <p className="right">2 Years 4 months</p>
          </div>
        </Block>
        <Block m="10/2/17/10" d="7/3/15/10">
          <Img src="/images/9mhbt6f0.jpg" fit="cover" radius="10px" />
        </Block>
        <Block m="17/2/18/10" d="15/3/16/10" z={23}>
          <Rule />
        </Block>
        <Block m="18/2/26/10" d="16/3/22/10" z={18} jm="flex-start" jd="flex-start">
          <div className="text">
            <p>{"   At India’s largest passenger vehicle OEM, I worked as a "}<strong>Door Systems Design Engineer</strong>{", part of the Body Engineering Division with end-to-end responsibility for the front side door system of a new SUV program. "}</p>
            <p>{"   My role combined design engineering, regulatory compliance, manufacturability checks, and supplier coordination to deliver a door system that was robust, safe, and production-ready."}</p>
          </div>
        </Block>
        <Block m="26/2/28/10" d="22/3/24/10" z={14}>
          <Button href="/workexperience#msil" variant="secondary">Details</Button>
        </Block>
        <Block m="28/2/29/10" d="4/11/5/18" z={26}>
          <Rule />
        </Block>
        <Block m="29/2/30/10" d="21/3/22/10" z={24}>
          <Rule />
        </Block>
        <Block m="30/3/32/7" d="5/12/7/16" z={6}>
          <div className="text">
            <h4>Emflux Motors</h4>
          </div>
        </Block>
        <Block m="30/2/32/3" d="5/11/7/12" z={10}>
          <Img src="/images/301914834-452498896902536-3735758290139799481-n.jpg" fit="contain" radius="4px" />
        </Block>
        <Block m="30/7/32/10" d="5/15/7/18" z={12}>
          <div className="text">
            <p className="right">1 Years 2 months</p>
          </div>
        </Block>
        <Block m="32/2/38/10" d="7/11/11/18" z={3}>
          <Img src="/images/emflux-2.jpg" fit="cover" position="32.9643% 20.0025%" radius="10px" />
        </Block>
        <Block m="38/2/44/10" d="11/11/16/18" z={5}>
          <Img src="/images/screenshot-2025-08-08-003229.jpg" fit="cover" position="60.02% 0%" radius="10px" />
        </Block>
        <Block m="44/2/45/10" d="16/11/17/18" z={26}>
          <Rule />
        </Block>
        <Block m="45/2/51/10" d="17/11/21/18" z={19} jm="flex-start" jd="flex-start">
          <div className="text">
            <p>{"   As a "}<strong>Mechanical Design Engineer</strong>, I was responsible for designing and programming automated production machinery at this EV motorcycle start-up, where I developed complete mechatronic systems from concept to production, managing assemblies in SOLIDWORKS with over 1,300 components.</p>
          </div>
        </Block>
        <Block m="51/2/53/10" d="22/10/24/18" z={16}>
          <Button href="/workexperience#emflux" variant="secondary">Details</Button>
        </Block>
        <Block m="53/2/54/10" d="21/11/22/18" z={24}>
          <Rule />
        </Block>
        <Block m="54/2/55/10" d="4/19/5/25" z={25}>
          <Rule />
        </Block>
        <Block m="55/3/57/6" d="5/20/7/23" z={11}>
          <div className="text">
            <h4>Possibillion</h4>
          </div>
        </Block>
        <Block m="55/2/57/3" d="5/19/7/20" z={13}>
          <Img src="/images/images.jpg" fit="contain" position="29.7816% 43.2043%" radius="4px" />
        </Block>
        <Block m="55/8/57/10" d="5/22/7/25" z={15}>
          <div className="text">
            <p className="right">3 months</p>
          </div>
        </Block>
        <Block m="57/2/63/10" d="7/19/16/25" z={7}>
          <Img src="/images/picture1.jpg" fit="cover" position="68.2283% 53.6067%" radius="10px" />
        </Block>
        <Block m="63/2/64/10" d="16/19/17/25" z={27}>
          <Rule />
        </Block>
        <Block m="64/2/69/10" d="17/19/21/25" z={20} jm="flex-start" jd="flex-start">
          <div className="text">
            <p>{"As a "}<strong>Mechanical Design Intern</strong>: Designed a 5-axis SCARA Robot for a robotic kitchen. Designed in SOLIDWORKS, selected stepper motors based on required torque calculations. Built a reliable working model by prototyping parts using FDM 3D printer.</p>
          </div>
        </Block>
        <Block m="69/2/71/10" d="22/19/24/25" z={17}>
          <Button href="/workexperience#possi" variant="secondary">Details</Button>
        </Block>
        <Block m="71/2/72/10" d="21/19/22/25" z={26}>
          <Rule />
        </Block>
      </Section>
      <Section id="msil" theme="light-bold" top divider={{ path: "M-1.006,0 L-1.006,0 l0,0 c0,0 0.251,1 0.502,1 s0.502,-1 0.502,-1 l0,0 l0,0 c0,0 0.251,1 0.502,1 s0.502,-1 0.502,-1 l0,0 l0,0 c0,0 0.251,1 0.502,1 s0.502,-1 0.502,-1 l0,0", height: "1vw", stroke: 6, nextBg: "var(--white)" }} rows={{ m: 118, d: 47 }}>
        <Block m="2/5/5/7" d="1/3/3/6" z={13}>
          <Img src="/images/suzuki-logo-2025-svg.png" fit="contain" />
        </Block>
        <Block m="5/2/8/10" d="1/6/3/24" z={14} jm="flex-start">
          <div className="text">
            <h2>Door Systems Design Engineer - OEM Perspective</h2>
          </div>
        </Block>
        <Block m="8/2/14/10" d="4/4/16/23">
          <Shape fill="rgb(255, 255, 255)" />
        </Block>
        <Block m="8/2/14/10" d="4/5/11/14" z={5}>
          <Img src="/images/1757789805109.jpg" fit="cover" position="100% 57.1441%" radius="10px" />
        </Block>
        <Block m="14/2/20/10" d="4/14/11/23" z={6}>
          <Img src="/images/r-ov-ochrana-hrany-dve-1-1440x961.jpg" fit="contain" radius="10px" />
        </Block>
        <Block m="20/2/31/10" d="11/5/16/23" z={6} jm="flex-start">
          <div className="text">
            <p className="indent large">System-Level Responsibilities</p>
            <ul><li><p>{"I started with Class-A surfaces provided by the styling team and carried out detailed section studies to freeze door cutlines. "}</p>
            </li>
            <li><p>{"This required balancing aesthetics, ergonomic reach envelopes, and feasibility for press tooling and hemming operations. "}</p>
            </li>
            <li><p>The design was coordinated across press shop, weld shop, paint shop, and assembly shop to ensure seamless manufacturability.</p>
            </li>
            </ul>
          </div>
        </Block>
        <Block m="31/2/38/10" d="16/4/23/14" z={7}>
          <Img src="/images/1664540901.jpg" fit="cover" />
        </Block>
        <Block m="38/2/50/10" d="23/4/31/14" z={8} jm="flex-start" jd="flex-start">
          <div className="text">
            <p className="indent large">Structural & Safety Engineering</p>
            <ul><li><p>Designed the door inner panel to integrate mechanisms, sealing surfaces, hemming flanges, and trim attachment features. Considerations included DFA/DFM principles, crash load paths, and stiffness optimization.</p>
            </li>
            <li><p>Worked on reinforcement layouts and tubular elements, where crash simulations provided CAE-driven design modifications for intrusion resistance and energy absorption.</p>
            </li>
            <li><p>Optimized carryover vs new parts to achieve cost reduction while meeting strength, weight, and safety targets.</p>
            </li>
            </ul>
          </div>
        </Block>
        <Block m="50/2/56/10" d="30/4/46/14" z={4}>
          <Shape fill="rgb(255, 255, 255)" />
        </Block>
        <Block m="56/2/62/10" d="16/4/30/14" z={3}>
          <Shape fill="rgb(255, 255, 255)" />
        </Block>
        <Block m="57/2/63/10" d="16/14/23/23" z={9}>
          <Img src="/images/12239-2024-196-fig11-html.webp" fit="contain" radius="10px" />
        </Block>
        <Block m="63/2/81/10" d="23/14/34/23" z={10} jm="flex-start" jd="flex-start">
          <div className="text">
            <p className="indent large">Subsystem Design & Packaging</p>
            <ul><li><p><strong>Latch and Mechanisms:</strong>{" Developed layouts for hinges, door checkers, and latch systems while ensuring compliance with ECE R11 latch/retention regulations. Mechanism kinematics were optimized for durability and ergonomic feel."}</p>
            </li>
            <li><p><strong>Glass & Regulator System:</strong>{" Designed the sash and reinforcement structures for smooth glass movement, with proper guidance, anti-rattle measures, and sealing considerations."}</p>
            </li>
            <li><p><strong>Sealing Surfaces:</strong>{" Engineered periphery sealing and glass run channels to achieve required NVH performance and water-tightness, balancing sealing efficiency with low effort door closing."}</p>
            </li>
            <li><p><strong>Electrical Integration:</strong>{" Coordinated layouts for wiring harness routing, connectors, switches, and sensors within the door, ensuring ease of assembly and serviceability."}</p>
            </li>
            </ul>
          </div>
        </Block>
        <Block m="81/2/87/10" d="16/14/34/23" z={2}>
          <Shape fill="rgb(255, 255, 255)" />
        </Block>
        <Block m="81/2/87/10" d="30/5/39/13" z={11}>
          <Img src="/images/ani-20260327142648.jpg" fit="contain" position="47.2% 0%" />
        </Block>
        <Block m="87/2/100/10" d="39/4/46/14" z={15} jm="flex-start" jd="flex-start">
          <div className="text">
            <p className="indent large">Collaboration & Cross-Functional Work</p>
            <ul><li><p>Actively collaborated with press shop, weld shop, and paint shop teams to validate manufacturability and incorporate shop-floor feedback into early design stages.</p>
            </li>
            <li><p>Benchmarked competitor door systems and prepared internal databases of design solutions, enabling quicker design decisions and innovation.</p>
            </li>
            <li><p>Reviewed Tier-1 and Tier-2 supplier parts for feasibility, fitment, and compliance, while supporting senior engineers with documentation and technical evaluations.</p>
            </li>
            </ul>
          </div>
        </Block>
        <Block m="101/2/107/10" d="34/14/48/23" z={3}>
          <Shape fill="rgb(255, 255, 255)" />
        </Block>
        <Block m="101/2/107/10" d="34/14/41/23" z={12}>
          <Img src="/images/1664540194.jpg" fit="cover" position="86.6463% 56.0056%" radius="10px" />
        </Block>
        <Block m="107/2/119/10" d="41/14/48/23" z={16} jm="flex-start" jd="flex-start">
          <div className="text">
            <p className="indent large">Validation & Release</p>
            <ul><li><p>Released CAD models and drawings under strict deadlines, aligning with Suzuki’s design methodology and internal quality standards.</p>
            </li>
            <li><p>Supported vehicle-level door testing at the company’s proving grounds, gaining exposure to DVP activities such as durability cycling, water leakage checks, and abuse testing.</p>
            </li>
            <li><p>Conducted weekly door system review meetings, driving issue resolution, sharing knowledge across the department, and presenting learnings from supplier visits and industry expos.</p>
            </li>
            </ul>
          </div>
        </Block>
      </Section>
      <Section id="emflux" divider={{ path: "M-1.006,0 L-1.006,0 l0,0 c0,0 0.251,1 0.502,1 s0.502,-1 0.502,-1 l0,0 l0,0 c0,0 0.251,1 0.502,1 s0.502,-1 0.502,-1 l0,0 l0,0 c0,0 0.251,1 0.502,1 s0.502,-1 0.502,-1 l0,0", height: "2vw", stroke: 6, nextBg: "var(--light)" }} rows={{ m: 141, d: 47 }}>
        <Block m="1/2/8/10" d="1/3/4/25" z={6} jm="flex-start" jd="flex-start">
          <div className="text">
            <h2>Driving the EV Revolution: Designing and Programming Automated Production Machinery from Scratch.</h2>
          </div>
        </Block>
        <Block m="10/2/18/10" d="5/3/16/14" jm="flex-start">
          <Video src="/videos/workexperience-1.mp4" poster="/videos/workexperience-1.jpg" aspect="16 / 9" />
        </Block>
        <Block m="9/2/11/10" d="5/3/6/12" z={7} jm="flex-start" jd="flex-start">
          <div className="text">
            <h4><strong>{"1. Winding Machine for E-Motors "}</strong></h4>
          </div>
        </Block>
        <Block m="16/2/22/10" d="15/3/22/14" z={8}>
          <Img src="/images/img20210709210621.jpg" fit="cover" />
        </Block>
        <Block m="22/2/24/10" d="4/17/6/22" z={16} jd="flex-end">
          <Button href="https://emfluxenergy.com/halcyon-lite/" newTab>Link to product website</Button>
        </Block>
        <Block m="24/2/42/10" d="7/14/15/25" z={6} jm="flex-start" jd="flex-start">
          <div className="text">
            <ul><li><p>{"I began with the design of a 2-station automatic stator winding machine for BLDC smart fans, which went into production. The system could wind two stators in 24 minutes and required a "}<strong>complete electromechanical design cycle.</strong>{" "}</p>
            </li>
            <li><p>{"Mechanically, I selected motors, gearboxes, and a synchronous belt drive system, and produced GD&T-compliant drawings for both fan parts and machine components. To deepen my understanding of tolerances and fits, I also manufactured many parts myself on "}<strong>manual milling</strong>{" and "}<strong>lathe</strong>{" machines."}</p>
            </li>
            <li><p>On the electrical and controls side, I carried out the full wiring and wrote the<br />{"G-Code program to run the machine. This project was where connected "}<strong>mechanical design, manufacturing, and system integration</strong>, learning how theoretical calculations translate into production throughput.</p>
            </li>
            </ul>
          </div>
        </Block>
        <Block m="42/2/48/10" d="15/20/22/25" z={9}>
          <Img src="/images/img20210811175947.jpg" fit="cover" position="39.2094% 0%" />
        </Block>
        <Block m="48/2/49/10" d="22/3/23/25" z={9}>
          <Rule />
        </Block>
        <Block m="49/2/51/10" d="23/3/25/12" z={8} jm="flex-start">
          <div className="text">
            <h4><strong>2. Automatic Spot Welding Machine</strong></h4>
          </div>
        </Block>
        <Block m="51/2/58/10" d="24/3/35/14" z={10} jm="flex-start">
          <Video src="/videos/workexperience-2.mp4" poster="/videos/workexperience-2.jpg" aspect="16 / 9" />
        </Block>
        <Block m="57/2/59/10" d="23/17/25/22" z={15} jd="flex-end">
          <Button href="https://emfluxmotors.com/automatic-spotwelder/" newTab>Link to product website</Button>
        </Block>
        <Block m="59/2/68/10" d="35/3/48/11" z={11}>
          <Img src="/images/screenshot-2025-08-08-003229-3a013a.jpg" fit="contain" />
        </Block>
        <Block m="68/2/93/10" d="25/14/36/25" z={7} jm="flex-start" jd="flex-start">
          <div className="text">
            <ul><li><p>Building on the experience from the winding machine, I undertook a much larger and more complex project: designing a CNC-controlled spot-welding unit with pneumatic head actuation for EV battery pack assembly.</p>
            </li>
            </ul>
            <ul><li><p>I created a CAD assembly of ~1300 components, covering welded frames, CNC-machined parts, and sheet-metal enclosures. Detailed speed, load, and accuracy calculations guided the selection of ball screws and linear guides.</p>
            </li>
            <li><p>{"I also handled the complete "}<strong>electrical and controls integration</strong>{". This included drafting the full schematic and designing the control panel with CNC controller, limit/home switches, E-Stop, solenoid valves for pneumatics, hall sensors, load cells, and pressure sensors. "}</p>
            </li>
            <li><p>A critical aspect was the routing of shielded signal cables, power cables, and pneumatic hoses using energy chains, while applying proper grounding techniques to minimize EMI.</p>
            </li>
            <li><p>{"Compared to the winding machine, this project required a deeper grasp of "}<strong>design for manufacturability, metrology, and cross-discipline system integration</strong>, effectively bridging CAD, machining, electronics, and automation.</p>
            </li>
            </ul>
          </div>
        </Block>
        <Block m="92/2/98/10" d="36/15/42/20" z={12}>
          <Img src="/images/img20220219195924.jpg" fit="contain" />
        </Block>
        <Block m="97/1/103/11" d="36/11/43/15" z={12}>
          <Img src="/images/screenshot-2025-08-08-003319.jpg" fit="cover" circle />
        </Block>
        <Block m="103/2/109/10" d="15/15/22/20" z={10}>
          <Img src="/images/stator.jpg" fit="contain" />
        </Block>
        <Block m="109/2/116/10" d="42/15/47/20" z={13}>
          <Img src="/images/img20220423182319.jpg" fit="contain" />
        </Block>
        <Block m="116/2/123/10" d="42/8/48/15" z={12}>
          <Img src="/images/img20220430163458.jpg" fit="contain" />
        </Block>
        <Block m="123/2/142/10" d="36/20/48/25" z={14} jm="flex-start">
          <Video src="/videos/workexperience-3.mp4" poster="/videos/workexperience-3.jpg" aspect="268 / 473" />
        </Block>
      </Section>
      <Section id="possi" theme="light" rows={{ m: 95, d: 39 }}>
        <Block m="1/2/4/10" d="1/3/3/25" z={7} jm="flex-start" jd="flex-start">
          <div className="text">
            <h2>SCARA Robot for a robotic kitchen</h2>
          </div>
        </Block>
        <Block m="4/1/12/11" d="2/16/9/25" z={14}>
          <Img src="/images/picture9.jpg" fit="contain" />
        </Block>
        <Block m="12/2/27/10" d="3/3/10/16" z={7} jm="flex-start" jd="flex-start">
          <div className="text">
            <p><strong>Version 1:</strong></p>
            <p>{"The base used a NEMA 17 stepper with 2:1 pulley and 280 mm belt, but rotation on a PTFE washer was rough, the motor was exposed, mounting points looked bulky, and a custom bolt fit too tight. Linear motion used an 8 mm, 2 mm pitch lead screw with NEMA 17 and initially only 2 rods, which caused binding; later 3 rods with staggered bearings fixed alignment. "}</p>
            <p>Still, the motor had no cover and the elbow motor sat in front of the screw, creating cantilever load and reducing capacity. The elbow (axis 3) ran on a NEMA 17 with 2:1 pulley but suffered joint bending from clearance between bolt and bearings, lacked a limit switch, and had no wiring provision. The gripper used 2 MG996 servos for wrist and jaws, but assembly was time-consuming and mechanically complex.</p>
          </div>
        </Block>
        <Block m="27/2/33/10" d="10/3/19/16" z={14}>
          <Img src="/images/img20200902152006.jpg" fit="contain" />
        </Block>
        <Block m="34/1/43/10" d="10/17/19/24" z={14}>
          <Img src="/images/picture10.jpg" fit="contain" />
        </Block>
        <Block m="43/2/44/10" d="19/3/20/25" z={15}>
          <Rule />
        </Block>
        <Block m="44/2/55/10" d="20/3/25/17" z={8} jm="flex-start" jd="flex-start">
          <div className="text">
            <p><strong>Version 2:</strong></p>
            <p>The base was improved with radial ball bearings for smooth rotation, a rotary encoder and hall sensor for tracking and homing, higher pulley ratio for torque, and an enclosed motor inside the base. Linear motion had a redesigned platform with wiring integration, provision for a cable drag chain, and a covered top motor. The elbow was completely redesigned to include encoder, hall sensor, belt-tensioning mounts, a protective cover, and proper wiring paths. The gripper remained unchanged from Version 1 since performance was adequate.</p>
          </div>
        </Block>
        <Block m="55/1/65/11" d="20/17/29/25" z={16}>
          <Img src="/images/picture1-718256.jpg" fit="contain" />
        </Block>
        <Block m="65/1/71/6" d="25/3/33/9" z={15}>
          <Img src="/images/picture3.jpg" fit="contain" />
        </Block>
        <Block m="65/6/71/10" d="32/9/40/18" z={16}>
          <Img src="/images/picture7.jpg" fit="contain" />
        </Block>
        <Block m="71/2/77/10" d="33/2/40/10" z={16}>
          <Img src="/images/picture6.jpg" fit="contain" />
        </Block>
        <Block m="77/2/83/10" d="25/9/32/17" z={16}>
          <Img src="/images/picture4.jpg" fit="contain" />
        </Block>
        <Block m="83/2/95/10" d="29/17/40/25" z={15}>
          <Img src="/images/picture2.jpg" fit="contain" />
        </Block>
      </Section>
    </>
  );
}
