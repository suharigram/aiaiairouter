import type { Metadata } from "next";
import { CreditCard, LifeBuoy, Mail, Users } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("Contact", "Contact AiAiAiRouter for technical support, billing questions, model availability, and Team or Enterprise requirements.", "/contact");

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us what you are building" description="For product support, billing, or team requirements, use the validated form below or email us directly. Do not send secrets or sensitive request content." />
      <section className="section-padding pt-10 md:pt-12">
        <div className="container-site grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <aside>
            <h2 className="text-xl font-semibold">Support channels</h2>
            <a href="mailto:support@aiaiairouter.com" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"><Mail className="size-4" />support@aiaiairouter.com</a>
            <div className="mt-8 space-y-6">
              <div className="flex gap-3"><LifeBuoy className="mt-0.5 size-4 shrink-0 text-accent" /><div><h3 className="text-sm font-medium">Technical support</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">Include the HTTP status and request ID. Never include a complete API key.</p></div></div>
              <div className="flex gap-3"><CreditCard className="mt-0.5 size-4 shrink-0 text-accent" /><div><h3 className="text-sm font-medium">Billing</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">Include the account email and relevant invoice or transaction reference, not card details.</p></div></div>
              <div className="flex gap-3"><Users className="mt-0.5 size-4 shrink-0 text-accent" /><div><h3 className="text-sm font-medium">Team and Enterprise</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">Describe your administration, security, procurement, and support requirements.</p></div></div>
            </div>
            <p className="mt-8 text-xs leading-5 text-muted-foreground">For privacy requests, email <a href="mailto:privacy@aiaiairouter.com" className="text-accent hover:underline">privacy@aiaiairouter.com</a>.</p>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
