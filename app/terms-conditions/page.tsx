import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Hanif Studio",
  description:
    "Terms and Conditions for Hanif Studio services. Understand your rights, responsibilities, and our policies for product development projects.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen relative bg-gray-100">
      {/* Hero Background */}
      <div className="absolute top-0 w-full z-0 h-[300px] blur-3xl overflow-hidden">
        <Image
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/55089b0e-fd30-4b07-881c-69dd9c26979b_3840w.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-10">
        <Header />
        <main className="max-w-4xl mx-auto px-5 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-medium mb-4 tracking-tighter">
            Terms & Conditions
          </h1>
          <p className="text-black/60 font-geist mb-8">
            Last updated: January 24, 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <p className="text-black/70 font-geist leading-relaxed mb-4">
                This Terms of Use Agreement (the "Agreement") constitutes a
                legally binding agreement between Hanif Studio ("Hanif Studio",
                "we", "us", or "our") and you, the client, whether personally or
                on behalf of an entity ("Client", "you"), with regard to access
                and use of Hanif Studio's website: https://hanif.studio (the
                "Website") and any services provided through it.
              </p>
              <p className="text-black/70 font-geist leading-relaxed mb-4">
                By using the Website or engaging our services, you agree to be
                bound by these Terms. If you do not agree with these Terms, you
                must discontinue use of the Website immediately.
              </p>
              <p className="text-black/70 font-geist leading-relaxed">
                For projects conducted through third-party platforms (such as
                Upwork), the terms and conditions of those platforms shall apply
                in addition to these Terms, and in case of conflict, the
                third-party platform's terms shall take precedence for matters
                related to payment and dispute resolution.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                1. Intellectual Property Rights
              </h2>
              <p className="text-black/70 font-geist leading-relaxed mb-4">
                Unless otherwise indicated, the Website and its content,
                including all source code, databases, functionality, software,
                website designs, audio, video, text, photographs, and graphics
                (collectively, the "Content") and the trademarks, service marks,
                and logos contained therein (the "Marks") are owned or
                controlled by Hanif Studio and are protected by copyright and
                trademark laws.
              </p>
              <p className="text-black/70 font-geist leading-relaxed">
                The Content and Marks are provided "As-Is" for your information
                and personal use only. Except as expressly provided herein, no
                part of the Website and no Content may be copied, reproduced,
                republished, uploaded, posted, displayed, transmitted,
                distributed, sold, licensed, or otherwise exploited for any
                commercial purpose without our express prior written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                2. Ownership of Work Product
              </h2>
              <p className="text-black/70 font-geist leading-relaxed mb-4">
                All development work, code, designs, and deliverables created
                specifically for Client ("Projects") shall belong to Client upon
                full payment of all fees owed. Client shall be the sole owner of
                the copyright for all completed and paid Projects.
              </p>
              <p className="text-black/70 font-geist leading-relaxed mb-4">
                Client warrants that any materials provided to Hanif Studio
                during the development process are owned by Client or Client has
                the right to use them, and do not infringe on any third party's
                rights, including intellectual property rights.
              </p>
              <p className="text-black/70 font-geist leading-relaxed">
                Hanif Studio reserves the right to showcase Client's work
                publicly (on portfolio, social media, website, etc.) unless
                otherwise agreed upon in writing or covered by a non-disclosure
                agreement as stated in Section 14 of this document.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                3. User Representations
              </h2>
              <p className="text-black/70 font-geist leading-relaxed mb-4">
                By using the Website, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black/70 font-geist">
                <li>
                  You have the legal capacity and agree to comply with these
                  Terms of Use
                </li>
                <li>
                  You are not a minor in the jurisdiction of your residence
                </li>
                <li>
                  You will not access the Website through automated or non-human
                  means
                </li>
                <li>
                  You will not use the Website for any illegal or unauthorized
                  purpose
                </li>
                <li>
                  Your use of the Website will not violate any applicable law or
                  regulation
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                4. Prohibited Activities
              </h2>
              <p className="text-black/70 font-geist leading-relaxed mb-4">
                You may not access or use the Website for any purpose other than
                that for which we make it available. As a user of the Website,
                you agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black/70 font-geist">
                <li>Make any unauthorized use of the Website</li>
                <li>
                  Retrieve data or content for purposes of creating a database
                  or directory
                </li>
                <li>
                  Circumvent, disable, or interfere with security-related
                  features
                </li>
                <li>Engage in unauthorized framing or linking</li>
                <li>Trick, defraud, or mislead us or other users</li>
                <li>
                  Interfere with, disrupt, or create undue burden on the Website
                </li>
                <li>Use the Website to compete with Hanif Studio</li>
                <li>
                  Decipher, decompile, disassemble, or reverse engineer any
                  software
                </li>
                <li>Harass, intimidate, or threaten our team members</li>
                <li>Delete copyright or other proprietary rights notices</li>
                <li>
                  Upload or transmit viruses, malware, or other malicious code
                </li>
                <li>Use the Website in any unlawful manner</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                5. Client Feedback
              </h2>
              <p className="text-black/70 font-geist leading-relaxed">
                Any questions, comments, suggestions, or other feedback provided
                by you regarding the Website or our services may be used by
                Hanif Studio for any purpose without obligation to you. However,
                this does not apply to work product created specifically for you
                as part of a paid project, which is covered under Section 2
                (Ownership of Work Product).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                6. Privacy Policy
              </h2>
              <p className="text-black/70 font-geist leading-relaxed">
                By using the Website, you agree to be bound by our Privacy
                Policy. Please review our{" "}
                <a
                  href="/privacy-policy"
                  className="text-blue-600 hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                to understand our practices regarding the collection and use of
                your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                7. Returns and Refunds
              </h2>
              <p className="text-black/70 font-geist leading-relaxed mb-4">
                We stand behind the quality of our work. If you are not
                satisfied with our services within the first 7 days of
                engagement, you may request a full refund.
              </p>
              <p className="text-black/70 font-geist leading-relaxed mb-4">
                <strong className="text-black">
                  7-Day Satisfaction Guarantee:
                </strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black/70 font-geist mb-4">
                <li>
                  Refund requests must be made within 7 days of the initial
                  payment
                </li>
                <li>
                  You will receive a 100% refund of the amount paid, minus
                  payment processing fees (Stripe or other payment processor
                  fees)
                </li>
                <li>
                  All materials and work product created during this period
                  remain the property of Hanif Studio and may not be used by
                  Client
                </li>
                <li>
                  Refunds will be processed within 5-10 business days of
                  approval
                </li>
              </ul>
              <p className="text-black/70 font-geist leading-relaxed">
                After the 7-day period, refund requests will be evaluated on a
                case-by-case basis at our sole discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                8. Modifications to Website
              </h2>
              <p className="text-black/70 font-geist leading-relaxed">
                We reserve the right to change, modify, or remove any content on
                the Website at any time without prior notice. We may also modify
                or discontinue all or part of the Website without notice and
                without liability to you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                9. Service Interruptions
              </h2>
              <p className="text-black/70 font-geist leading-relaxed">
                We do not guarantee that the Website will be available at all
                times. Hardware, software, or other issues may result in
                interruptions or errors. You agree that we shall not be liable
                for any loss, damage, or inconvenience caused by your inability
                to access or use the Website during any downtime or
                discontinuance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                10. Governing Law
              </h2>
              <p className="text-black/70 font-geist leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance
                with the laws of Indonesia. Any disputes arising from these
                Terms or your use of the Website shall be subject to the
                exclusive jurisdiction of the courts of Jakarta, Indonesia.
              </p>
              <p className="text-black/70 font-geist leading-relaxed">
                For projects conducted through third-party platforms (such as
                Upwork), disputes related to payment and project delivery shall
                be resolved according to that platform's dispute resolution
                process.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                11. Disclaimer
              </h2>
              <p className="text-black/70 font-geist leading-relaxed mb-4">
                The Website is provided on an "as-is" and "as-available" basis.
                You agree that your use of the Website is at your sole risk. We
                disclaim all warranties, express or implied, including the
                implied warranties of merchantability, fitness for a particular
                purpose, and non-infringement.
              </p>
              <p className="text-black/70 font-geist leading-relaxed">
                We make no warranties about the accuracy or completeness of the
                Website's content or the content of any websites linked to the
                Website. We assume no liability for any errors, mistakes, or
                inaccuracies of content, personal injury or property damage,
                unauthorized access to our servers, interruption or cessation of
                transmission, bugs, viruses, or any errors or omissions in
                content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                12. Limitations of Liability
              </h2>
              <p className="text-black/70 font-geist leading-relaxed mb-4">
                To the fullest extent permitted by law, Hanif Studio shall not
                be liable for any indirect, incidental, special, consequential,
                or punitive damages, including lost profits, lost revenue, lost
                data, or other damages arising from your use of the Website or
                services.
              </p>
              <p className="text-black/70 font-geist leading-relaxed">
                You agree to defend, indemnify, and hold harmless Hanif Studio
                from any claims, damages, obligations, losses, liabilities,
                costs, or expenses arising from: (1) your use of the Website;
                (2) breach of these Terms; (3) violation of any third party
                rights, including intellectual property rights; or (4) any
                harmful act toward any other user.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                13. User Data
              </h2>
              <p className="text-black/70 font-geist leading-relaxed">
                You are solely responsible for all data transmitted through the
                Website. We shall have no liability for any loss or corruption
                of such data, and you waive any right of action against us
                arising from any such loss or corruption.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                14. Non-Disclosure Agreements
              </h2>
              <p className="text-black/70 font-geist leading-relaxed mb-4">
                By default, Hanif Studio reserves the right to showcase
                completed work on digital channels including portfolio, social
                media, and website.
              </p>
              <p className="text-black/70 font-geist leading-relaxed">
                If you require confidentiality, you may request a Non-Disclosure
                Agreement (NDA) before the project begins. Once an NDA is
                signed, Hanif Studio will not share or discuss your work
                publicly without your express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                15. Third-Party Content and Licensing
              </h2>
              <p className="text-black/70 font-geist leading-relaxed">
                You agree to assume full responsibility for any unauthorized use
                of images, libraries, APIs, or other third-party content used in
                your project. It is your sole responsibility to ensure that all
                content and services utilized are properly licensed for your
                intended use. While we may use certain licensed tools or
                services during development, those licenses are not transferable
                to you unless explicitly stated in writing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                16. Electronic Communications
              </h2>
              <p className="text-black/70 font-geist leading-relaxed">
                You consent to receive electronic communications from us, and
                you agree that all agreements, notices, disclosures, and other
                communications sent via email or through the Website satisfy any
                legal requirement that such communications be in writing. You
                agree to the use of electronic signatures, contracts, and
                records.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                17. Entire Agreement
              </h2>
              <p className="text-black/70 font-geist leading-relaxed mb-4">
                These Terms and any policies posted on the Website constitute
                the entire agreement between you and Hanif Studio. Our failure
                to enforce any right or provision of these Terms shall not be
                considered a waiver of those rights.
              </p>
              <p className="text-black/70 font-geist leading-relaxed">
                If any provision of these Terms is held to be invalid or
                unenforceable, the remaining provisions shall continue in full
                force and effect. Nothing in these Terms shall be construed to
                create a joint venture, partnership, employment, or agency
                relationship between you and Hanif Studio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                18. Changes to Terms
              </h2>
              <p className="text-black/70 font-geist leading-relaxed">
                We reserve the right to modify these Terms at any time. We will
                notify you of any changes by posting the new Terms on this page
                and updating the "Last updated" date. Your continued use of the
                Website after any changes constitutes acceptance of the new
                Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 tracking-tight">
                19. Contact Information
              </h2>
              <p className="text-black/70 font-geist leading-relaxed">
                For any questions or concerns regarding these Terms, please
                contact us at:{" "}
                <a
                  href="mailto:hanifyaskur@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  hanifyaskur@gmail.com
                </a>
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
