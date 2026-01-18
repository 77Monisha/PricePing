import { getProducts } from "./actions";
import EmptyState from "./component/empty-state";
import Header from "./component/header";
import HeroSection from "./component/hero-section";
import ProductFeatures from "./component/product-feature";
import ProductForm from "./component/product-form";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const products = user ? await getProducts() : [];

  return (
    <main className="min-h-screen bg-linear-to-br from-lime-50 via-white to-lime-50">
      <Header />
      <HeroSection />
      <ProductForm user={user} />
      <ProductFeatures products={products} user={user} />
      <EmptyState length={products.length} />
    </main>
  );
}
