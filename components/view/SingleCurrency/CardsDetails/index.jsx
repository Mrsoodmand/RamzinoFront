// import Image from "next/image";
// import { dataDetail } from "../data";

// function CardsDetails({ currencyDetail, logo, nameEn }) {
//   return (
//     <section className="container mt-7 sm:mt-10 lg:mt-20 fade-in">
//       <div className="sm:bg-white rounded-[4px] lg:h-[116px] lg:px-[15px]">
//         <div className="grid grid-cols-12 sm:bg-[#E6E6E6] dark:bg-[#0A2F3A] gap-x-[11px] sm:gap-x-[1px] gap-y-2.5 sm:gap-y-[1px] h-full">
//           <div className="col-span-4 lg:col-span-2 full-center flex-col h-full bg-white py-4 sm:py-7 lg:py-0 rounded-[5px] sm:rounded-none">
//             <div className="full-center text-[#373A41] dark:text-[#FAFAFA] text-[10px] sm:text-[15px] font-semibold">
//               لوگو
//             </div>
//             <div className="full-center text-[13px] sm:text-xl font-semibold mt-[11px] sm:mt-4 text-[#373A41] dark:text-[#FAFAFA]">
//               <Image
//                 src={logo || "/images/tests/eth 1.png"}
//                 alt={nameEn}
//                 layout="fixed"
//                 width={39}
//                 height={39}
//                 className="max-w-6 sm:max-w-[39px]"
//               />
//             </div>
//           </div>
//           {currencyDetail?.map((e, i) => (
//             <div
//               key={i}
//               className="col-span-4 lg:col-span-2 full-center flex-col h-full bg-white py-4 sm:py-7 lg:py-0 rounded-[5px] sm:rounded-none"
//             >
//               <div className="full-center text-[#373A41] dark:text-[#FAFAFA] text-[10px] sm:text-[15px] font-semibold">
//                 {e?.key}
//               </div>
//               <div className="full-center text-[13px] sm:text-xl font-semibold mt-[11px] sm:mt-4 text-[#373A41] dark:text-[#FAFAFA]">
//                 {e?.value}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default CardsDetails;

import { dataDetail } from "../data";

function CardsDetails({ data }) {
  return (
    <section className="container mt-7 sm:mt-10 lg:mt-20 fade-in">
      <div className="sm:bg-white rounded-[4px] lg:h-[116px] lg:px-[15px]">
        <div className="grid grid-cols-12 sm:bg-[#E6E6E6] dark:bg-[#0A2F3A] gap-x-[11px] sm:gap-x-[1px] gap-y-2.5 sm:gap-y-[1px] h-full">
          {dataDetail(data)?.map((e, i) => (
            <div
              key={i}
              className="col-span-4 lg:col-span-2 full-center flex-col h-full bg-white py-4 sm:py-7 lg:py-0 rounded-[5px] sm:rounded-none"
            >
              <div className="full-center text-[#373A41] dark:text-[#FAFAFA] text-[10px] sm:text-[15px] font-semibold">
                {e?.key}
              </div>
              <div className="full-center text-[13px] sm:text-xl font-semibold mt-[11px] sm:mt-4 text-[#373A41] dark:text-[#FAFAFA]">
                {e?.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardsDetails;
