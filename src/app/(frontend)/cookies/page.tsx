export default function CookiesPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container max-w-4xl px-4 md:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
            Cookie Policy
          </h1>
          <p className="mt-2 text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground mx-auto">
          <p>
            This Cookie Policy explains how Freight Sync Technologies Pvt. Ltd. ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <h2>1. What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
          
          <h2>2. Why do we use cookies?</h2>
          <p>
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website.
          </p>

          <h2>3. What types of cookies do we use?</h2>
          <ul>
            <li><strong>Essential website cookies:</strong> These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.</li>
            <li><strong>Performance and functionality cookies:</strong> These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.</li>
            <li><strong>Analytics and customization cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.</li>
          </ul>

          <h2>4. How can you control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your browser. Most browsers allow you to control cookies through their 'settings' preferences.
          </p>

          <h2>5. Changes to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:hello@freightsync.in">hello@freightsync.in</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
