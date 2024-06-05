import {
  AmazonRedshift,
  MicrosoftSqlServer,
  Oracle,
  Snowflake,
  PostgresLg,
  MySqlLg,
} from "@/Images";

const PlatformSection = () => {
  return (
    <section className="min-h-96 bg-[#FFC93E] flex items-center justify-center">
      <div className="container">
        <h1 className="text-center text-3xl">
          Platforms DataFuse AI seamlessly works with
        </h1>

        {/* ======= Platforms Logos ============= */}
        <div className="flex justify-between items-center h-24 w-full mt-12">
          {platforms.map((platform) => (
            <img
              src={platform.logo}
              alt={platform.name}
              className="mix-blend-multiply justify-items-center justify-self-center "
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;

const platforms = [
  { name: "Microsoft SQL Server", logo: MicrosoftSqlServer },
  { name: "Oracle", logo: Oracle },
  { name: "Postgres", logo: PostgresLg },
  { name: "MySQL", logo: MySqlLg },
  { name: "Snowflake", logo: Snowflake },
  { name: "Amazon Redshift", logo: AmazonRedshift },
];
