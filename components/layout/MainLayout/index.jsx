import dynamic from "next/dynamic";
const Footer = dynamic(() => import("./Footer"), { ssr: false });
import Nav from "./Nav";

function MainLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
