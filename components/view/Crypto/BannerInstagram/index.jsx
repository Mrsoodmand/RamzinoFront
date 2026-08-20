import AddIcon from "components/common/addIcon";
import IconInstagram from "icons/Home/IconInstagram.svg";
import Image from "next/image";

function BannerInstagram() {
  // The decorative star cluster below is parked with percentage translates and
  // scatters its stars at hand-picked offsets, so on narrow screens it reaches
  // past the left edge. Clipping the band on x only keeps the cluster's
  // deliberate vertical bleed while stopping it from widening the page.
  return (
    <section className="fade-in flex items-end lg:items-center pb-8 lg:pb-0 bg-primary min-h-[593px] 2md:min-h-[293px] w-full my-44 overflow-x-clip">
      <div className="container relative">
        <div className="sm:px-8 max-w-full 2md:max-w-[50%]  fade-in">
          <h4 className="text-[#1D1D1D] font-semibold text-[22px] sm:text-[30px] mb-5">
            دریافت ارز دیجتال رایگان
          </h4>
          <p className="text-[#383838] max-w-[625px] text-base font-normal text-justify">
            میدونستی هر ماه میتونی چند میلیون درامد داشته باشی ؟ پیج های مارو
            دنبال کن تا بدون هیچ هزینه ای ارز دیجیتال رایگان دریافت کنی .
          </p>
          <button
            title="عضویت در اینستاگرام"
            className="btn btn-primary mt-8 text-[#FAFAFA]"
          >
            <AddIcon>
              <IconInstagram />
            </AddIcon>
            عضویت در اینستاگرام
          </button>
        </div>
        {/* stars and shapes  */}
        <div className="w-[300px] h-[250px] absolute top-0 left-2/4 2md:left-0 translate-x-[-70%] 2md:translate-x-0 translate-y-[-135%] scale-75 2md:scale-100 2md:translate-y-0">
          <Image
            src="/images/star-primary.webp"
            alt="Star"
            width={33}
            height={33}
            layout="fixed"
            className="absolute -top-28 left-28 animate-spin"
          />
          <Image
            src="/images/star-primary-dark-outline.webp"
            alt="Star"
            width={33}
            height={33}
            layout="fixed"
            className="absolute top-0 left-[100px] animate-spin"
          />
          <Image
            src="/images/star-primary.webp"
            alt="Star"
            width={33}
            height={33}
            layout="fixed"
            className="absolute -top-16 left-[350px] animate-spin"
          />
          <Image
            src="/images/star-primary.webp"
            alt="Star"
            width={33}
            height={33}
            layout="fixed"
            className="absolute -bottom-4 left-[90px] animate-spin"
          />
          <Image
            src="/images/star-primary.webp"
            alt="Star"
            width={33}
            height={33}
            layout="fixed"
            className="absolute top-[75px] left-[290px] animate-spin"
          />
          <Image
            src="/images/star-primary.webp"
            alt="Star"
            width={33}
            height={33}
            layout="fixed"
            className="absolute -bottom-4 left-[380px] animate-spin"
          />
          {/* drops images  */}
          <Image
            src="/images/tests/usdt.webp"
            alt="Star"
            width={117}
            height={155}
            layout="fixed"
            className="absolute -top-24 left-[190px] fade-in animation-scale"
            style={{}}
          />
          <Image
            src="/images/tests/matic.webp"
            alt="Star"
            width={92}
            height={124}
            layout="fixed"
            className="absolute top-10 left-[25px] fade-in animation-scale-delay-05"
          />
          <Image
            src="/images/tests/eth.webp"
            alt="Star"
            width={162}
            height={217}
            layout="fixed"
            className="absolute bottom-[-115px] left-[170px] fade-in animation-scale-delay-07"
          />
          <Image
            src="/images/tests/sol.webp"
            alt="Star"
            width={100}
            height={134}
            layout="fixed"
            className="absolute top-[30px] left-[360px] fade-in animation-scale-delay-1"
          />
        </div>
      </div>
    </section>
  );
}

export default BannerInstagram;
