import Breadcrumb from "components/common/Breadcrumb";
import MainLayout from "components/layout/MainLayout";
import BuySellInstantPage from "components/view/BuySellInstant";

function BuySellInstant() {
  return (
    <MainLayout>
      <Breadcrumb list={[{ text: "خرید و فروش آنی", href: "#" }]} />
      <BuySellInstantPage />
    </MainLayout>
  );
}

export default BuySellInstant;
