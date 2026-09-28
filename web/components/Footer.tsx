import { Block, Section } from "@/components/Section";

export function Footer() {
  return (
    <footer>
      <Section theme="dark" minH={13} rows={{ m: 8, d: 4 }}>
        <Block m="2/2/7/10" d="1/2/5/26">
          <div className="text">
            <h4>Contact</h4>
            <p>syed.murtuza97@gmail.com</p>
            <p><a href="https://www.linkedin.com/in/syed-murtuza-quadri/" target="_blank" rel="noopener noreferrer">linkedin.com/in/syed-murtuza-quadri</a></p>
          </div>
        </Block>
      </Section>
    </footer>
  );
}
