import EmptyState from "./component/empty-state";
import Header from "./component/header";
import HeroSection from "./component/hero-section";
import ProductFeatures from "./component/product-feature";
import ProductForm from "./component/product-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-lime-50 via-white to-lime-50">
      <Header />
      <HeroSection />
      <ProductForm />
      <ProductFeatures />
      <EmptyState />
    </main>
  );
}
