import { Section } from "../../components/Section";
import { siteConfig } from "../../content/site";
import { ContactOptions } from "./components/ContactOptions";

export default function Page() {
  return (
    <Section
      eyebrow="Contact"
      title="Talk with a real human about your workflow"
      body="Based in Central Kentucky and serving clients beyond the region, choose a discovery call or send a short project brief by email."
    >
      <ContactOptions
        embed={{
          url: siteConfig.calendlyEmbedUrl,
          mode: "inline",
          minHeight: 920,
        }}
      />
    </Section>
  );
}
