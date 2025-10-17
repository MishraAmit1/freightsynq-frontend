import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
