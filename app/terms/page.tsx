import type { Metadata } from "next";
import { LegalDocument, type LegalSection } from "@/components/legal-document";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("Terms of Service", "Read the terms governing AiAiAiRouter accounts, API keys, acceptable use, prepaid credits, content, availability, liability, and termination.", "/terms");

const sections: LegalSection[] = [
  {
    title: "Agreement and service description",
    paragraphs: [
      "These Terms of Service (“Terms”) form an agreement between you and GonidonCloud concerning AiAiAiRouter. AiAiAiRouter is developed by GonidonCloud. By creating an account, purchasing credits, or using the website, console, or API, you accept these Terms. If you use the service for an organization, you represent that you have authority to bind that organization.",
      "AiAiAiRouter provides an OpenAI-compatible gateway to selected third-party AI models, along with API key management, usage information, and prepaid billing. We route requests to the model provider associated with your selection. We are not the developer of every listed model, and provider terms, technical limits, and acceptable-use rules may also apply.",
      "You must be legally capable of entering a contract and meet the minimum age required in your jurisdiction. The service is not directed to children under 16.",
    ],
  },
  {
    title: "Accounts and security",
    paragraphs: [
      "Provide accurate account information and keep it current. You are responsible for activity under your account, actions of users you authorize, and the security of your devices, credentials, and applications. Do not share account access in a way that defeats user-level controls or compromises security.",
      "Notify us promptly at support@aiaiairouter.com if you suspect unauthorized access. We may ask you to reset credentials, rotate keys, or provide information needed to investigate. We are not responsible for losses caused by your failure to protect credentials, subject to liability that cannot be excluded by law.",
    ],
  },
  {
    title: "API keys and provider credentials",
    paragraphs: [
      "API keys are bearer secrets. Keep them server-side, use separate keys for applications and environments, and never embed them in public source code, websites, or client applications. You are responsible for configuring appropriate permissions and for rotating or revoking keys when access changes or exposure is suspected.",
      "If you supply upstream provider credentials, you represent that you are authorized to use them and that their use through the gateway does not violate provider terms. You remain responsible for provider charges, quotas, and restrictions associated with those credentials. Handle key metadata and usage records as confidential where appropriate.",
    ],
  },
  {
    title: "Acceptable use",
    paragraphs: ["You must use the service lawfully, responsibly, and within documented technical limits. You may not, and may not permit others to:"],
    bullets: [
      "Violate applicable law, sanctions, export controls, intellectual-property rights, privacy rights, or third-party provider rules.",
      "Generate or distribute unlawful content, malware, deceptive content, or content that facilitates harm, exploitation, harassment, or abuse.",
      "Attempt unauthorized access, probe or disrupt infrastructure, bypass authentication or rate limits, interfere with other users, or conceal abusive traffic.",
      "Resell or share access contrary to your plan, misrepresent AI output as human where disclosure is legally required, or use output for high-risk decisions without appropriate review and safeguards.",
      "Submit personal data, regulated data, confidential information, or content belonging to others without the necessary rights, notices, and legal basis.",
      "Use the service to develop a competing gateway through abusive scraping or unauthorized bulk extraction; ordinary documented API integration is not restricted by this clause.",
    ],
  },
  {
    title: "Payments, credits, and non-refundable usage",
    paragraphs: [
      "Paid usage requires prepaid credits unless we agree to different written terms. You authorize Stripe and us to process the selected purchase amount and applicable taxes. Credit purchases are denominated as shown at checkout. You are responsible for providing accurate billing and tax information.",
      "Model charges are deducted based on recorded usage and applicable rates. Input, output, model, context tier, reasoning mode, cache status, region, and provider changes can affect charges. Once usage has been consumed, the corresponding charge is non-refundable. Unused credits are subject to our Refund Policy and any non-waivable consumer rights.",
      "If your usable balance is insufficient, requests may fail or access may be suspended. You are responsible for monitoring usage and maintaining enough credits. Disputed or reversed payments can lead to suspension while the issue is investigated.",
    ],
  },
  {
    title: "Prices, model availability, and service changes",
    paragraphs: [
      "Published model prices may be reference provider rates rather than final quotes. Applicable rates and any gateway charges are shown through the purchasing or account experience. We may change prices or credit terms prospectively. Changes do not retroactively reprice correctly recorded past usage. Where required, we provide advance notice of material changes.",
      "Models, features, regions, context limits, rate limits, and provider availability can change. Providers may deprecate or retire models with limited notice. We may add, remove, or route around unavailable models but do not promise that a particular model will remain available. You are responsible for testing replacements and maintaining migration plans.",
    ],
  },
  {
    title: "Your content and generated output",
    paragraphs: [
      "As between you and us, you retain your rights in prompts, files, tool definitions, and other content you submit. You grant us and relevant subprocessors a limited license to host, transmit, process, reproduce, and display that content only as needed to provide, secure, support, and improve the service, comply with law, and enforce these Terms.",
      "Rights in AI-generated output can depend on provider terms and applicable law. Subject to those rights and these Terms, you may use output returned to you. You acknowledge that other users can receive similar output and that output may be inaccurate, incomplete, biased, or infringing. You are responsible for reviewing output and determining whether it is suitable and lawful for your use.",
      "You represent that you have the rights and permissions needed for submitted content. Feedback you voluntarily provide may be used to improve the service without obligation to you, provided it does not include your confidential content or personal data beyond what is necessary.",
    ],
  },
  {
    title: "Third-party services and confidentiality",
    paragraphs: [
      "Stripe, model providers, cloud services, and linked third-party resources have their own terms and policies. We are not responsible for third-party acts or omissions outside our reasonable control. Do not use the service to disclose confidential information to a provider or region unless you have assessed and accepted that disclosure.",
      "Each party must protect non-public credentials, commercial terms, security information, and similar confidential material received from the other using reasonable care. These duties do not restrict disclosure required by law, subject to notice where lawful.",
    ],
  },
  {
    title: "Disclaimers and availability",
    paragraphs: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICE, DOCUMENTATION, MODEL CATALOG, ESTIMATES, AND OUTPUT ARE PROVIDED “AS IS” AND “AS AVAILABLE.” WE DISCLAIM IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, AND UNINTERRUPTED AVAILABILITY.",
      "We do not warrant that output will be correct, unique, safe, lawful for your intended use, or suitable for automated decisions. Model specifications and prices on the website should be checked against official sources. Calculators and examples are estimates or illustrations, not guarantees. Nothing in these Terms excludes a warranty or right that applicable law does not allow us to exclude.",
    ],
  },
  {
    title: "Limitation of liability and indemnity",
    paragraphs: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, GONIDONCLOUD AND ITS AFFILIATES, PERSONNEL, AND SUPPLIERS WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES; LOST PROFITS, REVENUE, GOODWILL, OR DATA; OR COSTS OF SUBSTITUTE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY.",
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THE SERVICE AND THESE TERMS WILL NOT EXCEED THE AMOUNT YOU PAID TO US FOR THE SERVICE IN THE 12 MONTHS BEFORE THE EVENT GIVING RISE TO LIABILITY. THESE LIMITS DO NOT APPLY TO FRAUD, WILLFUL MISCONDUCT, DEATH OR PERSONAL INJURY CAUSED BY NEGLIGENCE, OR OTHER LIABILITY THAT CANNOT LAWFULLY BE LIMITED.",
      "You will defend and indemnify GonidonCloud against third-party claims arising from content you submit, your applications, your unlawful use, or your material breach of these Terms, except to the extent caused by our breach or misconduct. We may assume control of a defense while reasonably cooperating with you.",
    ],
  },
  {
    title: "Suspension and termination",
    paragraphs: [
      "You may stop using the service and request account closure through available controls or support. We may suspend or terminate access if you materially breach these Terms, create security or legal risk, fail to pay, engage in fraud or abuse, or if continued operation would violate law or provider requirements. Where practicable and appropriate, we will provide notice and an opportunity to remedy.",
      "We may also discontinue the service or a feature. On termination, API access stops and unused credits are handled under the Refund Policy and applicable law. Provisions concerning ownership, payment, confidentiality, disclaimers, liability, disputes, and other terms that by nature survive will remain effective.",
    ],
  },
  {
    title: "Governing law and disputes",
    paragraphs: [
      "These Terms are governed by the laws of England and Wales, excluding conflict-of-law rules. Courts of England and Wales have exclusive jurisdiction, except that either party may seek urgent injunctive relief where available and mandatory consumer law may give you additional rights or a different forum.",
      "Before filing a formal claim, contact legal@aiaiairouter.com with a concise description so the parties can attempt an informal resolution. Nothing prevents either party from using an available small-claims process or seeking urgent relief.",
    ],
  },
  {
    title: "General terms and contact",
    paragraphs: [
      "We may update these Terms prospectively by posting a revised date and, for material changes, providing reasonable notice. If you do not agree, stop using the service before the changes take effect. You may not assign these Terms without our consent; we may assign them in connection with a reorganization or transfer, subject to applicable law.",
      "Neither party is liable for delay caused by events beyond reasonable control, except for payment obligations. If a provision is unenforceable, the remainder stays effective. A failure to enforce a provision is not a waiver. These Terms and referenced policies are the entire agreement unless a signed agreement expressly overrides them.",
      "Questions about these Terms may be sent to legal@aiaiairouter.com. General account and technical questions may be sent to support@aiaiairouter.com.",
    ],
  },
];

export default function TermsPage() {
  return <LegalDocument title="Terms of Service" lastUpdated="November 8, 2026" introduction="These Terms define the rules for using AiAiAiRouter. Please read them together with our Privacy, Refund, and Cookie Policies and any commercial terms agreed with your organization." sections={sections} />;
}
