import { Block, Section } from "@/components/Section";
import { Img, Rule, Shape, Accordion } from "@/components/blocks";
import { dicts, rich, type Locale } from "@/i18n";

export function Home({ locale }: { locale: Locale }) {
  const t = dicts[locale].home;
  return (
    <>
      <Section minH={14} first rows={{ m: 2, d: 2 }}>
        <Block m="1/2/3/10" d="1/8/3/20" jm="flex-start">
          <div className="text">
            <h1 className="center">{t.name}</h1>
          </div>
        </Block>
      </Section>
      <Section theme="dark" minH={66} bgImage={{ src: "/images/bmw.jpg", position: "86.3023% 50.4063%" }} divider={{ path: "M-1.018,0 L-1.018,0 l0,0 l0.759,1 l0.253,-1 l0,0 l0.759,1 l0.253,-1 l0,0 l0.759,1 l0.253,-1", height: "6vw", stroke: 16, nextBg: "var(--light)" }} rows={{ m: 6, d: 6 }}>
        <Block m="1/2/6/10" d="1/3/7/13" jm="flex-start">
          <div className="text">
            <h2 className="bold">{t.hero1}<br /><br />{t.hero2}</h2>
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
            <h3>{t.aboutTitle}</h3>
          </div>
        </Block>
        <Block m="17/2/32/10" d="3/11/9/25" z={10} jm="flex-start" jd="flex-start">
          <div className="text">
            <p>{t.about[0]}</p>
            <p>{t.about[1]}</p>
          </div>
        </Block>
        <Block m="32/2/34/10" d="10/11/12/16" z={12}>
          <div className="text">
            <h3>{t.eduTitle}</h3>
          </div>
        </Block>
        <Block m="34/2/37/10" d="12/11/13/16" z={4} jm="flex-start">
          <div className="text">
            <p>{t.msc.title}</p>
          </div>
        </Block>
        <Block m="33/2/35/10" d="12/15/13/17" z={6} jm="flex-end">
          <div className="text">
            <p className="right small">{t.msc.date}</p>
          </div>
        </Block>
        <Block m="35/2/37/10" d="13/11/15/17" z={3} jm="flex-start" jd="flex-start">
          <Accordion
            name="_19772"
            items={[
            {
              title: t.msc.school,
              body: <ul>{t.msc.courses.map((c) => <li key={c}><p>{c}</p></li>)}</ul>,
            }
            ]}
          />
        </Block>
        <Block m="38/2/40/10" d="15/11/16/15" z={7} jm="flex-start">
          <div className="text">
            <p>{t.be.title}</p>
          </div>
        </Block>
        <Block m="38/2/40/10" d="15/15/16/17" z={9} jm="flex-start">
          <div className="text">
            <p className="right small">{t.be.date}</p>
          </div>
        </Block>
        <Block m="39/2/41/10" d="16/11/18/17" z={5} jm="flex-start" jd="flex-start">
          <Accordion
            name="093ff1"
            items={[
            {
              title: t.be.school,
              body: <ul>{t.be.courses.map((c) => <li key={c}><p>{c}</p></li>)}</ul>,
            }
            ]}
          />
        </Block>
        <Block m="41/2/43/10" d="10/18/12/24" z={13}>
          <div className="text">
            <h3>{t.toolsTitle}</h3>
          </div>
        </Block>
        <Block m="43/2/51/10" d="12/18/17/25" z={8} jm="flex-start" jd="flex-start">
          <div className="text">
            {t.tools.map((x) => <p key={x}>{rich(x)}</p>)}
          </div>
        </Block>
        <Block m="50/2/51/10" d="9/12/10/24" z={14}>
          <Rule />
        </Block>
      </Section>
    </>
  );
}
