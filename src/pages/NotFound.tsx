import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";

const NotFound = () => {
  const location = useLocation();
  usePageMeta("Página não encontrada | IngaCraft", "A página que você procurou não existe ou foi movida.");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <p className="eyebrow mb-6">Erro 404</p>
        <h1 className="font-display text-6xl sm:text-8xl font-black tracking-[-0.05em] leading-[0.9]">
          Página não <span className="mark-lime">encontrada.</span>
        </h1>
        <p className="mt-8 max-w-lg text-lg text-muted-foreground">
          O endereço <code className="font-mono text-sm text-foreground">{location.pathname}</code> não existe ou foi movido.
        </p>
        <Button asChild variant="solid" size="lg" className="mt-10">
          <Link to="/">
            <ArrowLeft />
            Voltar para a página inicial
          </Link>
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
