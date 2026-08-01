import dynamic from "next/dynamic";
const Icon = dynamic(() => import("./icon"), { ssr: false });

function AddIcon({ children }) {
  return <Icon>{children}</Icon>;
}

export default AddIcon;
