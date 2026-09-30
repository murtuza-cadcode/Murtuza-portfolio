import { Block, Section } from "@/components/Section";
import { Img, Video, Button, Rule, Shape } from "@/components/blocks";
import { dicts, localePath, rich, type Locale } from "@/i18n";


export function Work({ locale }: { locale: Locale }) {
  const d = dicts[locale];
  const t = d.work;
  const c = d.common;
  const link = (hash: string) => localePath(locale, "/workexperience") + hash;
  return (
    <>
      <Section theme="white" first divider={{ path: "M-1.006,0 L-1.006,0 l0,0 c0,0 0.251,1 0.502,1 s0.502,-1 0.502,-1 l0,0 l0,0 c0,0 0.251,1 0.502,1 s0.502,-1 0.502,-1 l0,0 l0,0 c0,0 0.251,1 0.502,1 s0.502,-1 0.502,-1 l0,0", height: "2vw", stroke: 6, nextBg: "var(--light)" }} rows={{ m: 91, d: 43 }}>
        <Block m="1/2/7/10" d="1/2/4/26" z={21} jm="flex-start">
          <div className="text">
            <h3>{rich(t.intro)}</h3>
          </div>
        </Block>

        {/* STIHL */}
        <Block m="7/2/8/10" d="4/5/5/12" z={23}>
          <Rule />
        </Block>
        <Block m="8/2/10/3" d="5/5/7/7" z={5}>
          <Img src="/images/stihl-logo.webp" fit="contain" />
        </Block>
        <Block m="8/7/10/10" d="5/9/7/12" z={10}>
          <div className="text">
            <p className="right">{t.stihl.duration}</p>
          </div>
        </Block>
        <Block m="10/2/17/10" d="7/5/15/12" z={2}>
          <Img src="/images/03-08-tonspur-1100x.jpg" fit="cover" radius="10px" />
        </Block>
        <Block m="91/2/92/10" d="15/5/16/12" z={24}>
          <Rule />
        </Block>
        <Block m="17/2/25/10" d="16/5/24/12" z={19} jm="flex-start" jd="flex-start">
          <div className="text">
            {t.stihl.p.map((x) => (
              <p key={x}>{rich(x)}</p>
            ))}
          </div>
        </Block>

        {/* Maruti Suzuki */}
        <Block m="25/2/26/10" d="4/16/5/23" z={22}>
          <Rule />
        </Block>
        <Block m="26/3/28/7" d="5/17/7/20" z={2}>
          <div className="text">
            <h4>{t.maruti.name}</h4>
          </div>
        </Block>
        <Block m="26/2/28/3" d="5/16/7/17" z={4}>
          <Img src="/images/suzuki-logo-2025-svg.png" fit="contain" />
        </Block>
        <Block m="26/7/28/10" d="5/20/7/23" z={9}>
          <div className="text">
            <p className="right">{t.maruti.duration}</p>
          </div>
        </Block>
        <Block m="28/2/35/10" d="7/16/15/23" z={1}>
          <Img src="/images/9mhbt6f0.jpg" fit="cover" radius="10px" />
        </Block>
        <Block m="35/2/36/10" d="15/16/16/23" z={23}>
          <Rule />
        </Block>
        <Block m="36/2/44/10" d="16/16/22/23" z={18} jm="flex-start" jd="flex-start">
          <div className="text">
            <p>{rich(t.maruti.p[0])}</p>
            <p>{rich(t.maruti.p[1])}</p>
          </div>
        </Block>
        <Block m="44/2/46/10" d="22/16/24/23" z={14}>
          <Button href={link("#msil")} variant="secondary">{c.details}</Button>
        </Block>
        <Block m="47/2/48/10" d="21/16/22/23" z={24}>
          <Rule />
        </Block>

        <Block m="46/2/47/10" d="24/4/25/24" z={27}>
          <Rule />
        </Block>

        {/* Emflux Motors */}
        <Block m="48/3/50/7" d="25/6/27/10" z={6}>
          <div className="text">
            <h4>{t.emflux.name}</h4>
          </div>
        </Block>
        <Block m="48/2/50/3" d="25/5/27/6" z={10}>
          <Img src="/images/301914834-452498896902536-3735758290139799481-n.jpg" fit="contain" radius="4px" />
        </Block>
        <Block m="48/7/50/10" d="25/9/27/12" z={12}>
          <div className="text">
            <p className="right">{t.emflux.duration}</p>
          </div>
        </Block>
        <Block m="50/2/56/10" d="27/5/31/12" z={3}>
          <Img src="/images/emflux-2.jpg" fit="cover" position="32.9643% 20.0025%" radius="10px" />
        </Block>
        <Block m="56/2/62/10" d="31/5/36/12" z={5}>
          <Img src="/images/screenshot-2025-08-08-003229.jpg" fit="cover" position="60.02% 0%" radius="10px" />
        </Block>
        <Block m="62/2/63/10" d="36/5/37/12" z={26}>
          <Rule />
        </Block>
        <Block m="63/2/69/10" d="37/5/41/12" z={19} jm="flex-start" jd="flex-start">
          <div className="text">
            <p>{rich(t.emflux.p)}</p>
          </div>
        </Block>
        <Block m="69/2/71/10" d="42/5/44/12" z={16}>
          <Button href={link("#emflux")} variant="secondary">{c.details}</Button>
        </Block>
        <Block m="71/2/72/10" d="41/5/42/12" z={24}>
          <Rule />
        </Block>

        {/* Possibillion */}
        <Block m="72/3/74/6" d="25/17/27/20" z={11}>
          <div className="text">
            <h4>{t.possi.name}</h4>
          </div>
        </Block>
        <Block m="72/2/74/3" d="25/16/27/17" z={13}>
          <Img src="/images/images.jpg" fit="contain" position="29.7816% 43.2043%" radius="4px" />
        </Block>
        <Block m="72/8/74/10" d="25/20/27/23" z={15}>
          <div className="text">
            <p className="right">{t.possi.duration}</p>
          </div>
        </Block>
        <Block m="74/2/80/10" d="27/16/36/23" z={7}>
          <Img src="/images/picture1.jpg" fit="cover" position="68.2283% 53.6067%" radius="10px" />
        </Block>
        <Block m="80/2/81/10" d="36/16/37/23" z={27}>
          <Rule />
        </Block>
        <Block m="81/2/86/10" d="37/16/41/23" z={20} jm="flex-start" jd="flex-start">
          <div className="text">
            <p>{rich(t.possi.p)}</p>
          </div>
        </Block>
        <Block m="86/2/88/10" d="42/16/44/23" z={17}>
          <Button href={link("#possi")} variant="secondary">{c.details}</Button>
        </Block>
        <Block m="88/2/89/10" d="41/16/42/23" z={26}>
          <Rule />
        </Block>
      </Section>
      <Section id="msil" theme="light-bold" top divider={{ path: "M-1.006,0 L-1.006,0 l0,0 c0,0 0.251,1 0.502,1 s0.502,-1 0.502,-1 l0,0 l0,0 c0,0 0.251,1 0.502,1 s0.502,-1 0.502,-1 l0,0 l0,0 c0,0 0.251,1 0.502,1 s0.502,-1 0.502,-1 l0,0", height: "1vw", stroke: 6, nextBg: "var(--white)" }} rows={{ m: 118, d: 47 }}>
        <Block m="2/5/5/7" d="1/3/3/6" z={13}>
          <Img src="/images/suzuki-logo-2025-svg.png" fit="contain" />
        </Block>
        <Block m="5/2/8/10" d="1/6/3/24" z={14} jm="flex-start">
          <div className="text">
            <h2>{t.msil.title}</h2>
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
            <p className="indent large">{t.msil.sections[0].h}</p>
            <ul>{t.msil.sections[0].items.map((x) => <li key={x}><p>{rich(x)}</p></li>)}</ul>
          </div>
        </Block>
        <Block m="31/2/38/10" d="16/4/23/14" z={7}>
          <Img src="/images/1664540901.jpg" fit="cover" />
        </Block>
        <Block m="38/2/50/10" d="23/4/31/14" z={8} jm="flex-start" jd="flex-start">
          <div className="text">
            <p className="indent large">{t.msil.sections[1].h}</p>
            <ul>{t.msil.sections[1].items.map((x) => <li key={x}><p>{rich(x)}</p></li>)}</ul>
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
            <p className="indent large">{t.msil.sections[2].h}</p>
            <ul>{t.msil.sections[2].items.map((x) => <li key={x}><p>{rich(x)}</p></li>)}</ul>
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
            <p className="indent large">{t.msil.sections[3].h}</p>
            <ul>{t.msil.sections[3].items.map((x) => <li key={x}><p>{rich(x)}</p></li>)}</ul>
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
            <p className="indent large">{t.msil.sections[4].h}</p>
            <ul>{t.msil.sections[4].items.map((x) => <li key={x}><p>{rich(x)}</p></li>)}</ul>
          </div>
        </Block>
      </Section>
      <Section id="emflux" divider={{ path: "M-1.006,0 L-1.006,0 l0,0 c0,0 0.251,1 0.502,1 s0.502,-1 0.502,-1 l0,0 l0,0 c0,0 0.251,1 0.502,1 s0.502,-1 0.502,-1 l0,0 l0,0 c0,0 0.251,1 0.502,1 s0.502,-1 0.502,-1 l0,0", height: "2vw", stroke: 6, nextBg: "var(--light)" }} rows={{ m: 141, d: 47 }}>
        <Block m="1/2/8/10" d="1/3/4/25" z={6} jm="flex-start" jd="flex-start">
          <div className="text">
            <h2>{t.emfluxDetail.title}</h2>
          </div>
        </Block>
        <Block m="10/2/18/10" d="5/3/16/14" jm="flex-start">
          <Video src="/videos/workexperience-1.mp4" poster="/videos/workexperience-1.jpg" aspect="16 / 9" />
        </Block>
        <Block m="9/2/11/10" d="5/3/6/12" z={7} jm="flex-start" jd="flex-start">
          <div className="text">
            <h4>{rich(t.emfluxDetail.windingTitle)}</h4>
          </div>
        </Block>
        <Block m="16/2/22/10" d="15/3/22/14" z={8}>
          <Img src="/images/img20210709210621.jpg" fit="cover" />
        </Block>
        <Block m="22/2/24/10" d="4/17/6/22" z={16} jd="flex-end">
          <Button href="https://emfluxenergy.com/halcyon-lite/" newTab>{c.productLink}</Button>
        </Block>
        <Block m="24/2/42/10" d="7/14/15/25" z={6} jm="flex-start" jd="flex-start">
          <div className="text">
            <ul>{t.emfluxDetail.winding.map((x) => <li key={x}><p>{rich(x)}</p></li>)}</ul>
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
            <h4>{rich(t.emfluxDetail.weldTitle)}</h4>
          </div>
        </Block>
        <Block m="51/2/58/10" d="24/3/35/14" z={10} jm="flex-start">
          <Video src="/videos/workexperience-2.mp4" poster="/videos/workexperience-2.jpg" aspect="16 / 9" />
        </Block>
        <Block m="57/2/59/10" d="23/17/25/22" z={15} jd="flex-end">
          <Button href="https://emfluxmotors.com/automatic-spotwelder/" newTab>{c.productLink}</Button>
        </Block>
        <Block m="59/2/68/10" d="35/3/48/11" z={11}>
          <Img src="/images/screenshot-2025-08-08-003229-3a013a.jpg" fit="contain" />
        </Block>
        <Block m="68/2/93/10" d="25/14/36/25" z={7} jm="flex-start" jd="flex-start">
          <div className="text">
            <ul><li><p>{t.emfluxDetail.weldIntro}</p></li></ul>
            <ul>{t.emfluxDetail.weld.map((x) => <li key={x}><p>{rich(x)}</p></li>)}</ul>
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
            <h2>{t.possiDetail.title}</h2>
          </div>
        </Block>
        <Block m="4/1/12/11" d="2/16/9/25" z={14}>
          <Img src="/images/picture9.jpg" fit="contain" />
        </Block>
        <Block m="12/2/27/10" d="3/3/10/16" z={7} jm="flex-start" jd="flex-start">
          <div className="text">
            <p>{rich(t.possiDetail.v1Label)}</p>
            <p>{t.possiDetail.v1[0]}</p>
            <p>{t.possiDetail.v1[1]}</p>
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
            <p>{rich(t.possiDetail.v2Label)}</p>
            <p>{t.possiDetail.v2}</p>
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
