import Banner from "../../Banner/Banner";
import CustomerSatisfactionSection from "../../HappyCustomer/HappyCustomer";
import Services from "../../Services/Services";
import StoreSection from "../../storeSection/StoreSection";

export default function () {
  return (
    <>
      <div>
        <Banner></Banner>
        <Services></Services>
        <StoreSection></StoreSection>
        <CustomerSatisfactionSection></CustomerSatisfactionSection>
      </div>
    </>
  );
}
