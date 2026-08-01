import Breadcrumb from "components/common/Breadcrumb";
import MainLayout from "components/layout/MainLayout";
import FeeDeal from "components/view/Fee";

function FeeDealPage() {
  return (
    <MainLayout>
      <Breadcrumb list={[{ text: "وب سرویس ها", href: "#" }]} />
      <FeeDeal />
    </MainLayout>
  );
}

export default FeeDealPage;
