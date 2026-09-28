import type { Metadata } from "next";
import { Block, Section } from "@/components/Section";
import { Img, Button, Rule } from "@/components/blocks";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <Section first rows={{ m: 52, d: 26 }}>
        <Block m="1/2/3/10" d="1/3/4/25" z={2} jm="flex-start">
          <div className="text">
            <h3>{"Sensor Signal Processing: Raw Audio to Machine Learning  for command classification"}</h3>
          </div>
        </Block>
        <Block m="3/2/9/10" d="3/3/12/12">
          <Img src="/images/signal-processing-pipeline.jpg" fit="contain" />
        </Block>
        <Block m="9/2/19/10" d="4/13/8/25" z={3} jm="flex-start" jd="flex-start">
          <div className="text">
            <p>{"   An end-to-end audio signal processing pipeline for voice-controlled gaming using "}<strong>Python</strong>. This project captures spoken commands ('up', 'down', 'left', etc.) and processes them through a custom feature engineering workflow based on the Fast Fourier Transform (FFT). Linear Discriminant Analysis (LDA) is used to create a 2D feature space for classification. The performance of k-NN, SVM, and Decision Tree models were compared, with the best model being integrated into a final live demo that controls a Pac-Man game in real-time.</p>
          </div>
        </Block>
        <Block m="19/2/21/10" d="10/15/12/18" z={4}>
          <Button href="/s/Acoustical-Command-Recognition-for-Directional-Control-V11.pdf" fill newTab>Project Slides</Button>
        </Block>
        <Block m="21/2/23/10" d="10/20/12/23" z={5}>
          <Button href="https://github.com/murtuza-cadcode/Acoustic-Commands-Sensor-Signal-Processing" fill newTab>GitHub: Code</Button>
        </Block>
        <Block m="23/2/24/10" d="13/3/14/25" z={6}>
          <Rule />
        </Block>
        <Block m="27/2/33/10" d="16/3/22/12" z={7}>
          <Img src="/images/screenshot-2025-10-10-002115.jpg" fit="contain" />
        </Block>
        <Block m="24/2/28/10" d="14/3/16/25" z={3} jm="flex-start">
          <div className="text">
            <h3>{"Bachelor's Thesis:  Changes in flexural properties of e-glass laminate composite"}</h3>
          </div>
        </Block>
        <Block m="32/2/38/10" d="22/3/27/11" z={8}>
          <Img src="/images/screenshot-2025-10-10-002234.jpg" fit="contain" />
        </Block>
        <Block m="38/2/51/10" d="17/13/23/25" z={9} jm="flex-start" jd="flex-start">
          <div className="text">
            <p>{"  This research provides an experimental analysis of delamination, a critical failure mode in fiber-reinforced plastic composites. To investigate its impact on structural integrity,"}<br />{"E-glass/epoxy laminates were manufactured with embedded artificial defects of varying shapes, sizes, and interlayer locations. "}</p>
            <p>{"  The mechanical properties of these samples were then evaluated using a three-point bending test. The results demonstrate a clear and quantifiable reduction in flexural stiffness, showing that larger defects and those located closer to the composite's center cause the most significant degradation in performance."}</p>
          </div>
        </Block>
        <Block m="51/2/53/10" d="23/17/25/20" z={10}>
          <Button href="/s/Project-work-presentation.pdf" fill newTab>Project Slides</Button>
        </Block>
      </Section>
    </>
  );
}
