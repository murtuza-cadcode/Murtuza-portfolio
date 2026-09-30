import { Fragment } from "react";
import { Block, Section } from "@/components/Section";
import { Img, Video, Button, Rule } from "@/components/blocks";
import { dicts, rich, type Locale } from "@/i18n";

export function Extra({ locale }: { locale: Locale }) {
  const t = dicts[locale].extra;
  return (
    <>
      <Section first divider={{ path: "M-1.0015,0 L-1.0015,1 l0,0 l1.001,-1 l0,1 l0,0 l1.001,-1 l0,1 l0,0 l1.001,-1 l0,1", height: "6vw", stroke: 2, nextBg: "var(--light)" }} rows={{ m: 123, d: 50 }}>
        <Block m="1/3/3/7" d="1/4/3/8" z={5}>
          <div className="text">
            <h3>{t.fsae.title}</h3>
          </div>
        </Block>
        <Block m="1/2/3/3" d="1/3/3/4" z={9}>
          <Img src="/images/formula-student-germany-logo-svg.png" fit="contain" />
        </Block>
        <Block m="1/7/3/10" d="1/10/3/14" z={6}>
          <div className="text">
            <p className="right">{t.fsae.duration}</p>
          </div>
        </Block>
        <Block m="3/2/9/10" d="3/15/17/25" z={6}>
          <Img src="/images/karat.jpg" fit="cover" radius="10px" />
        </Block>
        <Block m="10/2/33/10" d="3/3/17/14" z={7} jm="flex-start" jd="flex-start">
          <div className="text">
            {t.fsae.sections.map((x) => (
              <Fragment key={x.h}>
                <p className="large">{x.h}</p>
                <p>{rich(x.p)}</p>
              </Fragment>
            ))}
          </div>
        </Block>
        <Block m="9/2/11/10" d="1/15/3/25" z={6} jm="flex-start">
          <div className="text">
            <h4>{t.fsae.team}</h4>
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
            <h3>{t.baja.title}</h3>
          </div>
        </Block>
        <Block m="34/8/36/10" d="18/10/20/14" z={7}>
          <div className="text">
            <p className="right">{t.baja.duration}</p>
          </div>
        </Block>
        <Block m="42/2/44/10" d="18/15/20/22" z={7}>
          <div className="text">
            <h4>{t.baja.team}</h4>
          </div>
        </Block>
        <Block m="44/2/78/10" d="20/3/38/14" z={8} jm="flex-start" jd="flex-start">
          <div className="text">
            {t.baja.sections.map((x) => (
              <Fragment key={x.h}>
                <p className="large">{x.h}</p>
                <p>{rich(x.p)}</p>
              </Fragment>
            ))}
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
          <Button href="/s/Baja-Paper.pdf" fill newTab>{t.baja.report}</Button>
        </Block>
      </Section>
      <Section theme="light" rows={{ m: 84, d: 28 }}>
        <Block m="1/3/3/11" d="1/4/3/12" z={7}>
          <div className="text">
            <h3>{t.sae.title}</h3>
          </div>
        </Block>
        <Block m="1/2/3/3" d="1/3/3/4" z={4}>
          <Img src="/images/images-a2a0a6.jpg" fit="contain" />
        </Block>
        <Block m="4/2/30/10" d="3/3/17/14" z={9} jm="flex-start" jd="flex-start">
          <div className="text">
            <p>{rich(t.sae.intro)}</p>
            {t.sae.sections.map((x) => (
              <Fragment key={x.h}>
                <p className="large">{x.h}</p>
                <p>{rich(x.p)}</p>
              </Fragment>
            ))}
          </div>
        </Block>
        <Block m="3/2/5/10" d="1/10/3/14" z={8} jm="flex-start">
          <div className="text">
            <p className="right">{t.sae.duration}</p>
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
