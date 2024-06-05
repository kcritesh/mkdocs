import { Button } from "@/components/ui/button";
import { BestSuitedFor } from "@/Images";

const BestSuitedForSection = () => {
  return (
    <section id="best-suited-for" className=" bg-[#E3E3E3]">
      <div className="container py-28 flex flex-col md:flex-row gap-4">
        {/* ======= Left Box Starts ====== */}
        <div className="flex-1 flex relative">
          <div>
            <img src={BestSuitedFor} alt="best-suited-for-hero-img" />
          </div>
          <div className="bg-[#FFC93E] absolute w-[340px] -bottom-8 right-4 h-48 px-10 py-12">
            <h3 className="text-white font-medium text-4xl leading-[45px]">
              Fast <br />
              Processing
            </h3>
          </div>
        </div>
        {/* ======= Left Box Ends ======== */}

        {/* ======= Right Box Starts ====== */}
        <div className="flex-1 flex-shrink-0 flex  flex-col gap-4 justify-center">
          <div className="rounded-full bg-[#F5F5F5] h-12 w-52 flex items-center justify-center">
            <p className="text-[#FF6361]">Who Are We Best For</p>
          </div>
          <h2 className="text-5xl font-medium leading-[60px]">
            For those who want a{" "}
            <span className="text-[#FF6361]">comprehensive ETL platform</span>
          </h2>
          <p className="text-[#003F5C]">
            DataFuse AI’s strengths lie in our ease of use and low code
            environment. It is a one-stop shop for all ingestion,
            transformation, and loading requirements. <br />
            <br /> To be specific, our platform is best for data scientists,
            engineers, and analysts who want to build and orchestrate complex
            data pipelines without dealing with too much code and compromising
            on security and compliance. <br />
            <br /> In general, DataFuse AI is a great fit for any enterprise who
            wants to squeeze the most out of their data, no matter the data
            source or your team’s needs.
          </p>

          <Button variant={"link"} className="text-[#003F5C] w-24 mt-4 ">
            Learn More
          </Button>
        </div>
        {/* ======= Right Box Ends ======== */}
      </div>
    </section>
  );
};

export default BestSuitedForSection;
