import type { Metadata } from "next";
import { Block, Section } from "@/components/Section";
import { Img, Video, Rule } from "@/components/blocks";

export const metadata: Metadata = { title: "Hobbies" };

export default function HobbiesPage() {
  return (
    <>
      <Section theme="white" first rows={{ m: 96, d: 27 }}>
        <Block m="2/2/6/10" d="3/3/6/13" z={9} jd="flex-start">
          <div className="text">
            <p>I find a different kind of focus and precision in art, primarily through portrait sketching and acrylic painting. For me, creating art is an exercise in intense observation.</p>
          </div>
        </Block>
        <Block m="1/2/3/10" d="1/3/3/9" z={5} jm="flex-start">
          <div className="text">
            <h3>Art & Sketching</h3>
          </div>
        </Block>
        <Block m="6/2/18/10" d="5/3/18/9">
          <Img src="/images/screenshot-20251009-224057-instagram.jpg" fit="contain" radius="10px" />
        </Block>
        <Block m="18/6/27/11" d="16/7/28/14" z={4}>
          <Img src="/images/img20220923132711.jpg" fit="contain" radius="10px" />
        </Block>
        <Block m="18/2/27/6" d="5/9/16/13" z={3} jm="flex-start">
          <Video src="/videos/hobbies-1.mp4" poster="/videos/hobbies-1.jpg" aspect="212 / 342" />
        </Block>
        <Block m="27/2/40/10" d="17/3/28/8" z={2}>
          <Img src="/images/img20220921162140.jpg" fit="contain" radius="10px" />
        </Block>
        <Block m="41/2/43/10" d="1/14/3/22" z={6} jm="flex-start">
          <div className="text">
            <h3>Football</h3>
          </div>
        </Block>
        <Block m="43/2/47/10" d="3/14/5/25" z={8} jm="flex-start" jd="flex-start">
          <div className="text">
            <p>For several years, I had the privilege of playing for the Hyderabad Sporting Football Club. More than just a game, being part of a club taught me the true meaning of discipline, strategy, and collective effort.</p>
          </div>
        </Block>
        <Block m="47/2/61/10" d="5/14/16/19" z={7} jm="flex-start">
          <Video src="/videos/hobbies-2.mp4" poster="/videos/hobbies-2.jpg" aspect="268 / 339" />
        </Block>
        <Block m="61/2/74/10" d="5/20/16/25" z={10}>
          <Img src="/images/img-20220903-wa0000-2.jpg" fit="contain" radius="10px" />
        </Block>
        <Block m="75/2/76/10" d="16/14/17/25" z={12}>
          <Rule />
        </Block>
        <Block m="76/1/90/11" d="17/14/28/20" z={6}>
          <Img src="/images/img-20230120-220150.jpg" fit="contain" radius="10px" />
        </Block>
        <Block m="90/2/92/10" d="17/20/19/23" z={7}>
          <div className="text">
            <h3>Music</h3>
          </div>
        </Block>
        <Block m="92/2/97/10" d="19/20/24/25" z={11} jm="flex-start" jd="flex-start">
          <div className="text">
            <p>{"  Recently, I've picked up the guitar, and I'm thoroughly enjoying the structured process of being a beginner again. Learning chords, developing muscle memory, and understanding the theory behind the music is a humbling and rewarding challenge"}</p>
          </div>
        </Block>
      </Section>
    </>
  );
}
