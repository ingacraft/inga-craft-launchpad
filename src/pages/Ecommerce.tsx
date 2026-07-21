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
import SectionShell from "@/components/SectionShell";
import { useGsapScroll } from "@/hooks/useGsapScroll";

const Ecommerce = () => {
  useGsapScroll();
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navigation />
      <EcommerceHero />
      <SectionShell surface="b"><EcommerceStats /></SectionShell>
      <SectionShell surface="a"><EcommerceBenefits /></SectionShell>
      <SectionShell surface="c"><EcommerceStoreTypes /></SectionShell>
      <SectionShell surface="a"><EcommerceFeatures /></SectionShell>
      <SectionShell surface="d"><EcommercePayments /></SectionShell>
      <SectionShell surface="a"><EcommerceIntegrations /></SectionShell>
      <SectionShell surface="b"><EcommerceProcess /></SectionShell>
      <SectionShell surface="a"><EcommerceAdvantages /></SectionShell>
      <SectionShell surface="c"><EcommerceAudience /></SectionShell>
      <SectionShell surface="a"><EcommerceFAQ /></SectionShell>
      <SectionShell surface="d" flat><EcommerceCTA /></SectionShell>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Ecommerce;
