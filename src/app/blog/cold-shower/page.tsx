
import ColdShower from "../../_components/blogs/ColdShower";
import { Footer } from "../../_components/Footer";
import { Header } from "../../_components/Header";
import { Section } from "../../_components/Section";
import { Spacing } from "../../_components/Spacing";





export default function Home() {



  return (
    <main>

      <Header select={false} />


      <Section>

        <ColdShower />
      </Section>

      <Spacing size="md" />

      <Footer />

    </main>
  );
}
