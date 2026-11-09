import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "@/components/legal-document";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("Cookie Policy", "Learn how AiAiAiRouter uses essential, preference, security, and analytics cookies and how to control browser storage.", "/cookies");

const sections: LegalSection[] = [
  {
    title: "What this policy covers",
    paragraphs: [
      "This Cookie Policy explains how GonidonCloud uses cookies and similar technologies on the AiAiAiRouter website, console, and API-related account experiences. AiAiAiRouter is developed by GonidonCloud. Read this policy with our Privacy Policy, which explains broader data handling and your rights.",
      "Cookies are small text files stored by a browser. Similar technologies include local storage, session storage, pixels, software development kits, and device identifiers. Not every technology sends information in the same way, but this policy refers to them together as “cookies” for simplicity.",
    ],
  },
  {
    title: "How we use cookies",
    paragraphs: [
      "The public marketing pages can be read without accepting non-essential cookies. Account authentication, fraud prevention, load balancing, and payment flows may require essential storage. We may also use optional analytics to understand aggregate performance and improve navigation and documentation.",
      "We do not use cookies to store complete API keys, passwords, payment card numbers, or the contents of your prompts. Authentication tokens and session identifiers must still be protected because they can grant access to an active session.",
    ],
  },
  {
    title: "Essential and security cookies",
    paragraphs: [
      "Essential cookies enable features that cannot reasonably be provided without them. They support sign-in sessions, CSRF protection, account security, network routing, consent records, fraud prevention, and remembering whether you have completed a required step. Because these functions are requested by you or necessary to operate and secure the service, these cookies cannot be disabled through an optional-cookie preference control.",
      "Browser-level blocking is possible, but blocking essential cookies may cause sign-in, console, or checkout features to fail. Session cookies generally expire when a session ends; persistent security cookies may last longer where needed for protection and auditing.",
    ],
  },
  {
    title: "Preference cookies",
    paragraphs: [
      "Preference storage remembers choices such as interface settings, selected code examples, documentation state, and region or language preferences where those features are offered. Some preferences can be stored locally without being transmitted to us. These technologies improve convenience but are not required to read core documentation.",
      "You can clear local and session storage through browser settings. Doing so resets remembered choices but does not close your account or revoke API keys.",
    ],
  },
  {
    title: "Analytics cookies",
    paragraphs: [
      "Where analytics are enabled, they may collect page URLs, referring pages, timestamps, approximate region, browser and device information, interaction events, and performance or error measurements. We use this information to measure reliability, understand which documentation is useful, and improve the service. We seek to limit collection and retention to what is proportionate for these purposes.",
      "Where required by law, analytics cookies remain disabled until you consent. You can withdraw consent through available cookie controls or by clearing cookies and changing browser settings. If no analytics consent banner is shown on a page, that page may not be setting non-essential analytics cookies at that time.",
    ],
  },
  {
    title: "Third-party cookies",
    paragraphs: [
      "Stripe may set cookies or use similar technologies during credit purchases for payment processing, fraud prevention, and security. Model providers, code hosts, community services, video platforms, and other external destinations may use their own technologies when you follow a link or interact with embedded functionality. Their policies govern that processing.",
      "We do not control third-party browser settings. Avoid unnecessary embedded content and review third-party privacy information when your use involves sensitive data. Third-party cookies used by a separate website are not consent given to AiAiAiRouter.",
    ],
  },
  {
    title: "Managing your choices",
    paragraphs: [
      "Most browsers let you view, delete, block, or restrict cookies by site. Settings differ by browser and device. You can usually clear existing cookies, prevent third-party cookies, or create exceptions for trusted account and payment pages. Blocking all cookies can break essential features.",
      "If we provide a cookie preference interface, use it to change optional categories without clearing essential security storage. Your choice may itself require a small essential preference record. Global privacy signals are honored where legally required and technically supported.",
    ],
  },
  {
    title: "Retention and policy changes",
    paragraphs: [
      "Session-based storage lasts for the browsing session, while persistent cookies have defined expiration periods that vary by function. We review durations and seek not to retain analytics or preference identifiers longer than necessary for the stated purpose. Security, fraud, and consent records can require longer retention under legal or operational obligations.",
      "We may revise this policy as our technology, vendors, or legal obligations change. Updates will be posted with a new “Last updated” date and additional notice or consent requests where required. Check this page periodically for current information.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions about cookies or similar technologies can be sent to privacy@aiaiairouter.com. For technical problems with sign-in or checkout, contact support@aiaiairouter.com without including passwords, API keys, or payment card details.",
    ],
  },
];

export default function CookiesPage() {
  return <LegalDocument title="Cookie Policy" lastUpdated="November 8, 2026" introduction="We use limited browser storage to operate and secure AiAiAiRouter, remember choices, and—where enabled and permitted—understand product performance." sections={sections} />;
}
