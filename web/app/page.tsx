import { Block, Section } from "@/components/Section";
import { Img, Rule, Shape, Accordion } from "@/components/blocks";

export default function Home() {
  return (
    <>
      <Section minH={14} first rows={{ m: 2, d: 2 }}>
        <Block m="1/2/3/10" d="1/8/3/20" jm="flex-start">
          <div className="text">
            <h1 className="center">Syed Murtuza Quadri</h1>
          </div>
        </Block>
      </Section>
      <Section theme="dark" minH={66} bgImage={{ src: "/images/bmw.jpg", position: "86.3023% 50.4063%" }} divider={{ path: "M-1.018,0 L-1.018,0 l0,0 l0.759,1 l0.253,-1 l0,0 l0.759,1 l0.253,-1 l0,0 l0.759,1 l0.253,-1", height: "6vw", stroke: 16, nextBg: "var(--light)" }} rows={{ m: 6, d: 6 }}>
        <Block m="1/2/6/10" d="1/3/7/13" jm="flex-start">
          <div className="text">
            <h2>Mechanical Engineer<br /><br />Specializing in Automotive & Robotics Applications</h2>
          </div>
        </Block>
      </Section>
      <Section theme="light" rows={{ m: 50, d: 17 }}>
        <Block m="1/2/15/10" d="1/2/18/26">
          <Shape fill="rgb(255, 255, 255)" />
        </Block>
        <Block m="1/2/15/10" d="1/2/18/10" z={2}>
          <Img src="/images/syed-potrait.jpg" fit="contain" />
        </Block>
        <Block m="15/2/17/10" d="1/11/3/16" z={11} jd="flex-end">
          <div className="text">
            <h3>About Me</h3>
          </div>
        </Block>
        <Block m="17/2/32/10" d="3/11/9/25" z={10} jm="flex-start" jd="flex-start">
          <div className="text">
            <p>{"   I'm an analytical and hands-on engineer who believes the best way to understand a system is to build it from the ground up. Driven by the challenge of creating the next generation of vehicles, my passion lies in turning a digital concept into a physical, functioning reality. This means I'm just as comfortable detailing a complex CAD assembly as I am wiring a control panel or programming the logic to make it move."}</p>
            <p>{"   I thrive on solving problems at the intersection of mechanical, electrical, and software systems. My experience has taught me to be resourceful and adaptable, whether that means machining a prototype part myself or writing the code for a sensor-driven process. I approach every challenge with a systems-level perspective, focused on creating robust, elegant solutions that are built to perform in the real world."}</p>
          </div>
        </Block>
        <Block m="32/2/34/10" d="10/11/12/16" z={12}>
          <div className="text">
            <h3>Education</h3>
          </div>
        </Block>
        <Block m="34/2/37/10" d="12/11/13/16" z={4} jm="flex-start">
          <div className="text">
            <p>M.Sc. Vehicle Technology</p>
          </div>
        </Block>
        <Block m="33/2/35/10" d="12/15/13/17" z={6} jm="flex-end">
          <div className="text">
            <p className="right small">2024- Present</p>
          </div>
        </Block>
        <Block m="35/2/37/10" d="13/11/15/17" z={3} jm="flex-start" jd="flex-start">
          <Accordion
            name="_19772"
            items={[
            {
              title: "RPTU Kaiserslautern, Germany",
              body: (
                <>
                  <ul><li><p>Control Engineering</p>
                  </li>
                  <li><p>Sensor Signal Processing</p>
                  </li>
                  <li><p>Dynamical Systems and Neural Networks</p>
                  </li>
                  <li><p>Autonomous Mobile Robots</p>
                  </li>
                  <li><p>Vehicle Vibrations</p>
                  </li>
                  <li><p>Drives and Gears</p>
                  </li>
                  <li><p>Automotive Production</p>
                  </li>
                  <li><p>Safety & Reliability of Embedded Systems</p>
                  </li>
                  <li><p>Automotive Software and Systems Engineering</p>
                  </li>
                  </ul>
                </>
              ),
            }
            ]}
          />
        </Block>
        <Block m="38/2/40/10" d="15/11/16/15" z={7} jm="flex-start">
          <div className="text">
            <p>B.E. Mechanical Engineering</p>
          </div>
        </Block>
        <Block m="38/2/40/10" d="15/15/16/17" z={9} jm="flex-start">
          <div className="text">
            <p className="right small">2016-2020</p>
          </div>
        </Block>
        <Block m="39/2/41/10" d="16/11/18/17" z={5} jm="flex-start" jd="flex-start">
          <Accordion
            name="093ff1"
            items={[
            {
              title: "Osmania University, India",
              body: (
                <>
                  <ul><li><p>Machine Design</p>
                  </li>
                  <li><p>Finite Element Analysis (FEA)</p>
                  </li>
                  <li><p>Applied Thermodynamics</p>
                  </li>
                  <li><p>Fluid Mechanics</p>
                  </li>
                  <li><p>Heat Transfer</p>
                  </li>
                  <li><p>CAD/CAM</p>
                  </li>
                  <li><p>Manufacturing Processes</p>
                  </li>
                  </ul>
                </>
              ),
            }
            ]}
          />
        </Block>
        <Block m="41/2/43/10" d="10/18/12/24" z={13}>
          <div className="text">
            <h3>Tools</h3>
          </div>
        </Block>
        <Block m="43/2/51/10" d="12/18/17/25" z={8} jm="flex-start" jd="flex-start">
          <div className="text">
            <p><strong>CAD:</strong>{" Siemens NX, SolidWorks, CATIA V5, Creo, AutoCAD"}</p>
            <p><strong>CAE:</strong>{" ANSYS Workbench, NX Nastran, MATLAB/Simulink"}</p>
            <p><strong>Manufacturing:</strong>{" CAM & CNC Machining, FDM/SLA 3D Printing, GD&T, DFA/DFM, Fault Tree Analysis, DFMEA"}</p>
            <p><strong>Programming:</strong>{" Python, C++, G-Code."}</p>
          </div>
        </Block>
        <Block m="50/2/51/10" d="9/12/10/24" z={14}>
          <Rule />
        </Block>
      </Section>
    </>
  );
}
