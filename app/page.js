import Hero from "./components/Hero";
import ServicesDentalClinic from "./components/ServicesDentalClinic";
import InsuranceAssociated from "./components/InsuranceAssociated";
import ClinicRatings from "./components/ClinicRatings";
import AssociatedDentist from "./components/AssociatedDentist";
import FAQ from "./components/FAQ";
import RegisterNowBanner from "./components/RegisterNowBanner";
import Footer from "./components/Footer";
import ClinicOverview from "./components/ClinicOverview";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClinicOverview />
      <ServicesDentalClinic />
      <InsuranceAssociated />
      <ClinicRatings />
      <AssociatedDentist />
      <FAQ />
      <RegisterNowBanner />
    </main>
  );
}
