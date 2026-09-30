import { Block, Section } from "@/components/Section";
import { Img, Button, Rule } from "@/components/blocks";
import { dicts, rich, type Locale } from "@/i18n";

export function Projects({ locale }: { locale: Locale }) {
  const d = dicts[locale];
  const t = d.projects;
  return (
    <>
      <Section first rows={{ m: 52, d: 26 }}>
        <Block m="1/2/3/10" d="1/3/4/25" z={2} jm="flex-start">
          <div className="text">
            <h3>{t.p1Title}</h3>
          </div>
        </Block>
        <Block m="3/2/9/10" d="3/3/12/12">
          <Img src="/images/signal-processing-pipeline.jpg" fit="contain" />
        </Block>
        <Block m="9/2/19/10" d="4/13/8/25" z={3} jm="flex-start" jd="flex-start">
          <div className="text">
            <p>{rich(t.p1Text)}</p>
          </div>
        </Block>
        <Block m="19/2/21/10" d="10/15/12/18" z={4}>
          <Button href="/s/Acoustical-Command-Recognition-for-Directional-Control-V11.pdf" fill newTab>{d.common.projectSlides}</Button>
        </Block>
        <Block m="21/2/23/10" d="10/20/12/23" z={5}>
          <Button href="https://github.com/murtuza-cadcode/Acoustic-Commands-Sensor-Signal-Processing" fill newTab>{t.github}</Button>
        </Block>
        <Block m="23/2/24/10" d="13/3/14/25" z={6}>
          <Rule />
        </Block>
        <Block m="27/2/33/10" d="16/3/22/12" z={7}>
          <Img src="/images/screenshot-2025-10-10-002115.jpg" fit="contain" />
        </Block>
        <Block m="24/2/28/10" d="14/3/16/25" z={3} jm="flex-start">
          <div className="text">
            <h3>{t.p2Title}</h3>
          </div>
        </Block>
        <Block m="32/2/38/10" d="22/3/27/11" z={8}>
          <Img src="/images/screenshot-2025-10-10-002234.jpg" fit="contain" />
        </Block>
        <Block m="38/2/51/10" d="17/13/23/25" z={9} jm="flex-start" jd="flex-start">
          <div className="text">
            <p>{t.p2Text[0]}</p>
            <p>{t.p2Text[1]}</p>
          </div>
        </Block>
        <Block m="51/2/53/10" d="23/17/25/20" z={10}>
          <Button href="/s/Project-work-presentation.pdf" fill newTab>{d.common.projectSlides}</Button>
        </Block>
      </Section>
    </>
  );
}
