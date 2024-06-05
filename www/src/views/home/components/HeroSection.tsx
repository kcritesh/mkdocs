import {
  Excel,
  GoogleAnaltics,
  HerokuPostgres,
  MySql,
  Postgres,
  Arrow,
} from "@/Images";

const HeroSection = () => {
  return (
    // ======== Hero Section Starts ========
    // margin top because of the header being fixed
    <section className="container min-h-[70vh] flex flex-col lg:flex-row items-center lg:mt-24 relative">
      {/* ======== Left Section Starts ======== */}
      <div className=" max-w-[794px]">
        <p className="text-[#918360] font-light text-[17px]">
          Seamlessly integrate, analyze, and act on data with our no-code ETL
          platform — even offline.
        </p>
        <h1 className="font-[900] text-[54px] bg-primary-text-gradient inline-block text-transparent bg-clip-text">
          Get more Insights from your Data Faster, Effortlessly!
        </h1>
        <div className="mt-12">
          <button className="h-[50px] bg-[#918360] text-white font-medium rounded-full w-[187px]">
            Start free trial
          </button>
          <button className="h-[50px]  text-[#918360] font-medium  w-[187px]">
            Book a demo ▶
          </button>
        </div>
      </div>
      {/* ======== Left Section Ends ======== */}

      {/* ======== Right Section Starts ======== */}
      <div className="flex justify-center items-center flex-1">
        <div className="flex flex-wrap justify-center gap-14 max-w-[275px]">
          <img src={GoogleAnaltics} alt="Google Analtics" />
          <img src={Excel} alt="Excel" />
          <img src={HerokuPostgres} alt="Heroku Postgres" />
          <img src={MySql} alt="MySql" />
          <img src={Postgres} alt="Postgres" />
        </div>
      </div>
      {/* ======== Right Section Ends ======== */}

      {/* ======== Learn More Section ========= */}
      <div className="flex bottom-8 absolute cursor-pointer gap-2 items-center">
        <img src={Arrow} alt="Arrow" className="h-6 w-6 " />
        <p className="text-[#FFC93E] font-light text-[17px] leading-5">Learn More</p>
      </div>
      {/* ======== Hero Section Ends ======== */}
    </section>
  );
};

export default HeroSection;
