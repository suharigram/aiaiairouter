import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "@/components/legal-document";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("Privacy Policy", "Learn how AiAiAiRouter and GonidonCloud collect, use, protect, retain, and share account, payment, API usage, and cookie data.", "/privacy");

const sections: LegalSection[] = [
  {
    title: "Scope and controller",
    paragraphs: [
      "This Privacy Policy explains how GonidonCloud handles personal data when you visit the AiAiAiRouter website, create an account, use the console or API, purchase credits, or contact support. AiAiAiRouter is developed by GonidonCloud. In this policy, “we,” “us,” and “our” refer to GonidonCloud.",
      "For account and service-related personal data, GonidonCloud acts as the data controller unless a separate agreement states otherwise. When we process prompts, files, or other content on your documented instructions to provide the API, we act as a processor or service provider for that content where applicable law recognizes that distinction.",
      "This policy does not govern third-party model providers, payment pages, linked websites, or your own applications. Their policies and your agreements with them also apply.",
    ],
  },
  {
    title: "Data we collect",
    paragraphs: ["We collect information you provide, information generated through service use, and limited information from service providers. The exact data depends on how you interact with AiAiAiRouter."],
    bullets: [
      "Account and profile data: name, email address, organization details, account preferences, and support communications.",
      "Authentication data: password hashes or identity-provider identifiers, login timestamps, session records, security events, and account status. We do not store plaintext passwords.",
      "Billing and transaction data: credit purchases, balances, invoices, tax-related details where required, transaction references, and billing country. Complete card numbers and card security codes are handled by Stripe, not stored on our servers.",
      "API usage metadata: API key ID and prefix, model ID, timestamps, request and response status, token counts, latency, error codes, request IDs, cost, IP address, and technical headers needed for security and operations.",
      "User content: prompts, messages, tool definitions, outputs, and any files or multimodal inputs you choose to send are processed to route and complete your requests.",
      "Device and website data: IP address, browser type, operating system, referring page, pages visited, approximate region derived from IP, and cookie or similar identifiers.",
    ],
  },
  {
    title: "Account, authentication, and API keys",
    paragraphs: [
      "We use account and authentication data to verify identity, maintain sessions, prevent unauthorized access, and provide account recovery. AiAiAiRouter API keys are stored using security measures appropriate for bearer credentials, and list endpoints expose only non-secret metadata such as a prefix and status. Complete API keys are not included in ordinary logs or support requests.",
      "If the service allows you to configure your own upstream provider keys, those provider credentials are encrypted at rest and access is restricted to authorized routing and administrative processes. They are decrypted only when needed to establish the requested provider connection. You are responsible for the permissions you grant those keys and for rotating them when necessary.",
      "You must not send us another person's credentials or sensitive data unless you have authority and an appropriate legal basis to do so.",
    ],
  },
  {
    title: "API content and usage metadata",
    paragraphs: [
      "We process prompts and outputs to transmit requests to the selected model provider, return responses, maintain compatibility, detect abuse, and diagnose failures. We do not use your private API content to train a general GonidonCloud model. Model providers may process content under their own terms and retention settings, so choose a model appropriate for the sensitivity of your workload.",
      "Usage metadata is retained separately from prompt content where practical. We may sample or temporarily retain request content when needed for security, abuse investigation, debugging you request, or legal compliance. Support personnel should receive request IDs rather than confidential prompts whenever possible.",
    ],
  },
  {
    title: "Payment data and Stripe",
    paragraphs: [
      "Credit purchases are processed through Stripe. When you enter payment information on a Stripe-hosted or Stripe-powered interface, Stripe collects card details, billing information, device data, and fraud-prevention signals under its own privacy terms. We receive transaction identifiers, payment status, limited payment-method details such as card brand and last four digits where supplied, and billing information needed for receipts and accounting.",
      "We use payment data to complete transactions, maintain credit balances, prevent fraud, handle disputes, meet tax and accounting obligations, and enforce our policies. Do not email complete payment card details to support.",
    ],
  },
  {
    title: "Cookies and analytics",
    paragraphs: [
      "Essential cookies and similar storage may keep you signed in, protect forms and sessions, remember security settings, and route traffic. Preference storage can remember interface choices. We may use privacy-conscious analytics to understand page performance, navigation, errors, and aggregate product usage.",
      "Where required by law, non-essential analytics cookies are used only after consent. You can manage cookies through your browser and any consent controls we provide. Blocking essential storage may prevent the console or payment flow from working. Our Cookie Policy provides more detail.",
    ],
  },
  {
    title: "Why we process data",
    paragraphs: ["We process personal data only for defined purposes and, where applicable, under an appropriate legal basis such as performing a contract, complying with law, pursuing legitimate interests, or obtaining consent."],
    bullets: [
      "To provide model routing, streaming, key management, usage records, billing, and customer support.",
      "To secure accounts and infrastructure, detect fraud and abuse, investigate incidents, and enforce acceptable-use rules.",
      "To maintain and improve reliability, compatibility, performance, accessibility, and documentation.",
      "To communicate service changes, security notices, transaction receipts, and responses to requests. Marketing communications, if offered, include an opt-out.",
      "To comply with tax, accounting, sanctions, law-enforcement, and other lawful obligations, and to establish or defend legal claims.",
    ],
  },
  {
    title: "How we share data",
    paragraphs: [
      "We do not sell personal data for money. We disclose limited data to vendors that help operate the service, only for the purposes described in this policy or a relevant agreement.",
      "Subprocessors may include cloud hosting and storage providers, content delivery and security services, model and inference providers, Stripe for payments, analytics providers, customer-support tools, and professional advisers. The selected model provider receives the content and technical data necessary to process your request. Vendors act under contractual or other applicable data-protection obligations.",
      "We may also disclose information during a merger, financing, reorganization, or asset transfer, subject to confidentiality and applicable law; when required by valid legal process; or when reasonably necessary to protect users, the public, our rights, and service integrity. Where lawful, we seek to notify affected users of compelled disclosure.",
    ],
  },
  {
    title: "International data transfers",
    paragraphs: [
      "AiAiAiRouter routes requests to model providers and uses infrastructure that may process data in countries other than your own, in the regions where our subprocessors operate. Data-protection laws and government-access rules may differ from those in your jurisdiction.",
      "Where required, we use appropriate transfer mechanisms such as contractual safeguards, adequacy arrangements, or other lawful measures. You should consider provider location, regional deployment options, and the sensitivity of your content before sending data. Contact us for information about applicable transfer safeguards.",
    ],
  },
  {
    title: "Data retention",
    paragraphs: [
      "We retain personal data only while needed for the purposes described above, including service delivery, security, disputes, and legal obligations. Account records are generally kept while the account is active and for a reasonable period after closure. API usage and billing metadata may be retained for up to 13 months for analytics and reconciliation, while invoices and transaction records may be kept longer when tax or accounting law requires.",
      "Prompt and output retention varies by operational need and model provider. Temporary operational copies and backups expire according to their backup cycle. Security records, abuse investigations, and data subject to a legal hold may be retained longer. When data is no longer needed, we delete, anonymize, or securely isolate it until deletion is possible.",
    ],
  },
  {
    title: "Your privacy rights",
    paragraphs: [
      "Depending on your location, you may have rights to access, correct, delete, restrict, or object to processing; request portability; withdraw consent; and opt out of certain disclosures or targeted advertising. You may also have the right to lodge a complaint with a data-protection authority. These rights can be subject to legal exceptions and identity verification.",
      "To exercise a right, email privacy@aiaiairouter.com from the relevant account address and describe your request. We may ask for proportionate verification information. Authorized agents may be required to provide proof of authority. We will not discriminate against you for exercising applicable privacy rights.",
    ],
  },
  {
    title: "How we protect data",
    paragraphs: [
      "We use administrative, technical, and physical safeguards designed for the nature of the data, including encryption in transit, encryption at rest for sensitive credentials, access controls, logging, separation of environments, and security review of operational changes. We limit access to personnel and vendors who need it for their work.",
      "No internet service or storage system can be guaranteed completely secure. You are responsible for protecting passwords, API keys, provider credentials, endpoints, and your own application logs. Notify us promptly at privacy@aiaiairouter.com if you suspect unauthorized account access or a data-security incident.",
    ],
  },
  {
    title: "Children",
    paragraphs: [
      "AiAiAiRouter is a developer and business service and is not directed to children under 16. We do not knowingly collect personal data from children under 16. If you believe a child has provided personal data without appropriate authorization, contact privacy@aiaiairouter.com so we can review and delete it where required.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy to reflect changes in the service, vendors, or legal requirements. We will post the revised version with a new “Last updated” date and, where a change is material or law requires, provide additional notice through the console, email, or another appropriate channel. Continued use after the effective date is subject to the revised policy.",
    ],
  },
  {
    title: "Contact us",
    paragraphs: [
      "Questions, privacy requests, and concerns about this policy can be sent to privacy@aiaiairouter.com. For general product or account support, contact support@aiaiairouter.com. Please do not include API keys, passwords, payment card details, or unnecessary sensitive content in your message.",
    ],
  },
];

export default function PrivacyPage() {
  return <LegalDocument title="Privacy Policy" lastUpdated="November 8, 2026" introduction="Your model requests and account data deserve clear handling. This policy describes what AiAiAiRouter collects, why it is used, when it is shared, and the controls available to you." sections={sections} />;
}
