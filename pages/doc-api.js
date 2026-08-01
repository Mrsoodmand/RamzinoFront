import Breadcrumb from "components/common/Breadcrumb";
import MainLayout from "components/layout/MainLayout";
import DocApiPage from "components/view/DocApi";

function DocApi() {
  return (
    <MainLayout>
      <Breadcrumb list={[{ text: "وب سرویس ها", href: "#" }]} />
      <DocApiPage />
    </MainLayout>
  );
}

export default DocApi;
