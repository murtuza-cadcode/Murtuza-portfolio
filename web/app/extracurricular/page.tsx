import type { Metadata } from "next";
import { Block, Section } from "@/components/Section";
import { Img, Video, Button, Rule } from "@/components/blocks";

export const metadata: Metadata = { title: "Extracurricular" };

export default function ExtracurricularPage() {
  return (
    <>
      <Section first divider={{ path: "M-1.0015,0 L-1.0015,1 l0,0 l1.001,-1 l0,1 l0,0 l1.001,-1 l0,1 l0,0 l1.001,-1 l0,1", height: "6vw", stroke: 2, nextBg: "var(--light)" }} rows={{ m: 123, d: 50 }}>
        <Block m="1/3/3/7" d="1/4/3/8" z={5}>
          <div className="text">
            <h3>{"Formula SAE "}</h3>
          </div>
        </Block>
        <Block m="1/2/3/3" d="1/3/3/4" z={9}>
          <Img src="/images/formula-student-germany-logo-svg.png" fit="contain" />
        </Block>
        <Block m="1/7/3/10" d="1/10/3/14" z={6}>
          <div className="text">
            <p className="right">4 months</p>
          </div>
        </Block>
        <Block m="3/2/9/10" d="3/15/17/25" z={6}>
          <Img src="/images/karat.jpg" fit="cover" radius="10px" />
        </Block>
        <Block m="10/2/33/10" d="3/3/17/14" z={7} jm="flex-start" jd="flex-start">
          <div className="text">
            <p className="large">Objective</p>
            <p>{"As a member of a newly formed Formula Student team, my initial objective was to support the core group in overcoming the first major hurdle: passing the highly competitive "}<strong>technical qualification quizzes</strong>{" required for participation in European events like Formula Student Germany (FSG)."}</p>
            <p className="large">My Contribution</p>
            <p>Integrating into the team during my first semester, I applied my previous SAE competition experience to accelerate the team's technical preparation. Systematically analyzing the extensive Formula Student rulebook and breaking down complex technical regulations into understandable segments for the team. Collaborating with subsystem leads to develop targeted study materials and conduct mock quiz sessions focusing on vehicle dynamics, powertrain, and electrical systems.</p>
            <p className="large">Outcome</p>
            <p>This concentrated effort was instrumental in the team's successful qualification for Formula Student Spain. While we missed the cut-off for FSG, securing a spot in the Spanish competition was a significant achievement that validated the team's core engineering knowledge.</p>
          </div>
        </Block>
        <Block m="9/2/11/10" d="1/15/3/25" z={6} jm="flex-start">
          <div className="text">
            <h4>Kaiserslautern Racing Team(KaRaT)</h4>
          </div>
        </Block>
        <Block m="33/2/34/10" d="17/3/18/25" z={8}>
          <Rule />
        </Block>
        <Block m="35/2/43/10" d="20/15/29/25" z={4} jd="flex-start">
          <Video src="/videos/extracurricular-1.mp4" poster="/videos/extracurricular-1.jpg" aspect="16 / 9" />
        </Block>
        <Block m="34/2/36/3" d="18/3/20/4" z={10}>
          <Img src="/images/baja.jpg" fit="contain" />
        </Block>
        <Block m="34/3/36/7" d="18/4/20/10" z={6}>
          <div className="text">
            <h3>{"BAJA SAE "}</h3>
          </div>
        </Block>
        <Block m="34/8/36/10" d="18/10/20/14" z={7}>
          <div className="text">
            <p className="right">{"1 year "}</p>
          </div>
        </Block>
        <Block m="42/2/44/10" d="18/15/20/22" z={7}>
          <div className="text">
            <h4>Team Mudbrothers Racing</h4>
          </div>
        </Block>
        <Block m="44/2/78/10" d="20/3/38/14" z={8} jm="flex-start" jd="flex-start">
          <div className="text">
            <p className="large">Chief Engineer: Steering System for the All-Terrain Vehicle</p>
            <p>For the SAE Baja 2020 competition, I took on the lead role for one of the vehicle's most critical systems: the steering. My mission was to deliver a robust, reliable, and responsive system that could withstand the punishment of off-road racing.</p>
            <p className="large">{"Design & Simulation "}</p>
            <p>The foundation of the project was a custom rack-and-pinion assembly. Using vehicle dynamics software, I performed a detailed kinematic analysis to optimize the steering geometry for maximum maneuverability and minimal bump steer. The goal was to give our driver precise control, no matter how rough the track got.</p>
            <p className="large">Virtual Testing & Validation</p>
            <p>To guarantee the design was tough enough for competition, I conducted extensive Finite Element Analysis (FEA) in ANSYS. By simulating real-world race conditions, I could validate the structural integrity of every component, from the tie-rods to the steering column, ensuring the system was safe and built to last.</p>
            <p className="large">{"From CAD to Competition "}</p>
            <p>With a proven design, I led the manufacturing phase. Applying Design for Manufacturing (DFM) principles, we used a mix of CNC machining for our core components and 3D printing for complex parts like the ergonomic steering wheel grips. This hands-on approach ensured every piece fit perfectly and performed flawlessly.</p>
            <p className="large">{"The result? "}</p>
            <p>{"A steering system that held up beautifully under pressure, helping Team Mudbrothers Racing secure an outstanding "}<strong>7th place finish in the national endurance race.</strong></p>
          </div>
        </Block>
        <Block m="78/2/84/10" d="38/15/48/25" z={2}>
          <Img src="/images/dsc-0288.jpg" fit="cover" position="50.2664% 22.4028%" radius="10px" />
        </Block>
        <Block m="84/2/90/10" d="29/21/37/25" z={3}>
          <Img src="/images/dsc-0304.jpg" fit="cover" position="40.1432% 24.003%" radius="10px" />
        </Block>
        <Block m="90/2/96/10" d="29/15/37/21">
          <Img src="/images/dsc-0266.jpg" fit="cover" position="24.1592% 52.0065%" radius="10px" />
        </Block>
        <Block m="97/2/103/10" d="38/3/42/6" z={3}>
          <Img src="/images/screenshot-2025-10-09-175031.jpg" fit="contain" position="40.2676% 53.6067%" />
        </Block>
        <Block m="103/2/109/10" d="38/10/48/15" z={2}>
          <Img src="/images/angles.jpg" fit="contain" />
        </Block>
        <Block m="109/2/115/10" d="38/6/42/10" z={4}>
          <Img src="/images/screenshot-2025-10-09-175229.jpg" fit="contain" />
        </Block>
        <Block m="115/2/121/10" d="42/3/48/10" z={4}>
          <Img src="/images/1607762175822.jpg" fit="contain" />
        </Block>
        <Block m="122/2/124/10" d="49/11/51/17" z={11}>
          <Button href="/s/Baja-Paper.pdf" fill newTab>Link to Design Report</Button>
        </Block>
      </Section>
      <Section theme="light" rows={{ m: 84, d: 28 }}>
        <Block m="1/3/3/11" d="1/4/3/12" z={7}>
          <div className="text">
            <h3>SAE India Collegiate Club</h3>
          </div>
        </Block>
        <Block m="1/2/3/3" d="1/3/3/4" z={4}>
          <Img src="/images/images-a2a0a6.jpg" fit="contain" />
        </Block>
        <Block m="4/2/30/10" d="3/3/17/14" z={9} jm="flex-start" jd="flex-start">
          <div className="text">
            <p>{"One of my most fulfilling achievements during my time as Vice President was creating and leading a two-day, hands-on workshop focused on "}<strong>engine assembly</strong>{" for 60 students."}</p>
            <p className="large">{"The Challenge "}</p>
            <p>Engineering theory is essential, but practical application is what truly inspires. My goal was to demystify the internal combustion engine and provide students with a memorable, hands-on learning experience.</p>
            <p className="large">{"The Preparation "}</p>
            <p>The initiative was a solo endeavour from the start. I sourced a 3-cylinder Maruti 800cc engine and personally undertook the process of cleaning, disassembling, and preparing it for the workshop. To ensure a fluid and informative presentation, I practiced the full reassembly twice, perfecting a two-hour demonstration that combined mechanical work with a detailed technical explanation.</p>
            <p className="large">The Outcome</p>
            <p>{"The two-day event was a huge success. I guided the students through the entire build process, explaining the function of every subcomponent "}<strong>live as it was being installed.</strong>{" This interactive format bridged the gap between diagrams on a page and the reality of a working machine, creating a dynamic and engaging learning environment for everyone involved."}</p>
          </div>
        </Block>
        <Block m="3/2/5/10" d="1/10/3/14" z={8} jm="flex-start">
          <div className="text">
            <p className="right">{"1 year "}</p>
          </div>
        </Block>
        <Block m="30/2/36/10" d="9/15/17/25" z={2}>
          <Img src="/images/eaba5fd8-9a10-46e1-9957-7e67aa086373.jpg" fit="contain" radius="10px" />
        </Block>
        <Block m="36/2/42/10" d="22/3/29/10" z={3}>
          <Img src="/images/4a55be28-9f21-47a5-b7d4-032eecb58044.jpg" fit="contain" radius="10px" />
        </Block>
        <Block m="43/2/49/10" d="17/10/29/14" z={3}>
          <Img src="/images/9905a254-9321-4994-b818-37fe03d74868.jpg" fit="cover" radius="10px" />
        </Block>
        <Block m="49/2/55/10" d="17/3/22/10" z={3}>
          <Img src="/images/cce77081-9df5-4be4-86e8-e5ec2dedf6ff.jpg" fit="contain" radius="10px" />
        </Block>
        <Block m="55/2/66/10" d="17/14/29/19" z={3}>
          <Img src="/images/6fb67b30-4b68-4bd0-97af-0996009d063e.jpg" fit="contain" radius="10px" />
        </Block>
        <Block m="66/2/77/10" d="17/19/29/25" z={3}>
          <Img src="/images/3e6caeed-f86d-4521-9fec-92d2e3d28df6.jpg" fit="cover" radius="10px" />
        </Block>
        <Block m="78/2/85/10" d="1/15/9/24" jm="flex-start" jd="flex-start">
          <Video src="/videos/extracurricular-2.mp4" poster="/videos/extracurricular-2.jpg" aspect="16 / 9" />
        </Block>
      </Section>
    </>
  );
}
