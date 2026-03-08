import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EcommerceHero from "@/components/ecommerce/EcommerceHero";
import EcommerceStats from "@/components/ecommerce/EcommerceStats";
import EcommerceBenefits from "@/components/ecommerce/EcommerceBenefits";
import EcommerceStoreTypes from "@/components/ecommerce/EcommerceStoreTypes";
import EcommerceFeatures from "@/components/ecommerce/EcommerceFeatures";
import EcommercePayments from "@/components/ecommerce/EcommercePayments";
import EcommerceIntegrations from "@/components/ecommerce/EcommerceIntegrations";
import EcommerceProcess from "@/components/ecommerce/EcommerceProcess";
import EcommerceAdvantages from "@/components/ecommerce/EcommerceAdvantages";
import EcommerceAudience from "@/components/ecommerce/EcommerceAudience";
import EcommerceFAQ from "@/components/ecommerce/EcommerceFAQ";
import EcommerceCTA from "@/components/ecommerce/EcommerceCTA";

const Ecommerce = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />
      <EcommerceHero />
      <EcommerceStats />
      <EcommerceBenefits />
      <EcommerceStoreTypes />
      <EcommerceFeatures />
      <EcommercePayments />
      <EcommerceIntegrations />
      <EcommerceProcess />
      <EcommerceAdvantages />
      <EcommerceAudience />
      <EcommerceFAQ />
      <EcommerceCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Ecommerce;
