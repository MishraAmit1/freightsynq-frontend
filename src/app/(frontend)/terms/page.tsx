export default function TermsPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-4xl px-4 md:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-2 text-muted-foreground">Last updated: {new Date().toLocaleDate-string('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground mx-auto">
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Freight Sync website and mobile application (the "Service") operated by Freight Sync Technologies Pvt. Ltd. ("us", "we", or "our").
          </p>

          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
          </p>
          
          <h2>2. Accounts</h2>
          <p>
            When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of Freight Sync Technologies Pvt. Ltd. and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.
          </p>

          <h2>4. Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall Freight Sync Technologies Pvt. Ltd., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          </p>
          
          <h2>7. Changes to These Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us by email at: <a href="mailto:hello@freightsync.in">hello@freightsync.in</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
