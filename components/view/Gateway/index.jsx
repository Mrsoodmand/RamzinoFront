import Header from "./Header";
import Services from "./Services";
import FAQs from "./FAQ";
import dynamic from "next/dynamic";
import BlogsSlider from "../Home/Blogs";

function Gateway({ blogs, data }) {
  return (
    <div>
      <Header data={data} />
      <Services />
      <FAQs />
      <BlogsSlider data={blogs?.blogs || []} />
    </div>
  );
}

export default Gateway;
