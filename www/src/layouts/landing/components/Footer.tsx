import DataFuseLogo from "@/assets/logo/logoDataFuse.svg";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#FFC93E] ">
      <div className="container flex flex-col md:flex-row">
        <div className=" mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-2md lg:grid-cols-4 gap-8 text-sm flex-2">
          {/* ========= Mapped Footer Links Starts ======= */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-[#918360]">{section.title}</h4>
                <ul className="space-y-1">
                  {section.links.map(({ name, url }, idx) => (
                    <li key={idx}>
                      <a
                        href={url}
                        className="text-[#918360] hover:text-gray-800"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {/* ========= Mapped Footer Links Ends ======= */}
        </div>

        <div className="border-l-[#FFC93E] border-l py-8 flex-1 pl-9 relative">
          <div>
            <h4 className="text-[#BC5090] font-medium text-[16px]">
              Book a demo
            </h4>
            <input
              type="email"
              placeholder="Enter your email..."
              className="font-light text-[16px] text-[#BC5090] h-[50px] w-full border border-[#BC5090] rounded-full px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-[#BC5090] focus:ring-opacity-50 mb-6"
            />
          </div>
          {footerLinksLegals.map(({ name, url }, idx) => (
            <div key={idx} className="space-y-4">
              <div className="space-y-2">
                <ul className="space-y-1">
                  <li key={idx}>
                    <a
                      href={url}
                      className="text-[#918360] text-sm hover:text-gray-800"
                    >
                      {name}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}

          {/* ========== Logo Footer Starts ======== */}
          <div className="absolute bottom-6">
            <div className="flex items-center gap-2">
              <img src={DataFuseLogo} alt="logo" />
              <h1 className="font-normal text-3xl text-[#003F5C] opacity-40	">
                Datafuse<span className="font-bold">AI</span>
              </h1>
            </div>
            <h4 className="text-[#918360] text-[13px]">
              © 2024 DatafuseAI. All rights reserved.
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const footerLinks = [
  {
    title: "Platforms",
    links: [
      { name: "Services", url: "/services" },
      { name: "Integrations", url: "/integrations" },
      { name: "Solutions", url: "/solutions" },
      { name: "Use Cases", url: "/use-cases" },
      { name: "User Roles", url: "/user-roles" },
      { name: "Industry", url: "/industry" },
    ],
  },
  {
    title: "Customers",
    links: [
      { name: "Testimonials", url: "/testimonials" },
      { name: "Case Studies", url: "/case-studies" },
      { name: "Blogs", url: "/blogs" },
      { name: "Product Guides", url: "/product-guides" },
      { name: "Documentation", url: "/documentation" },
    ],
  },
  {
    title: "Integration",
    links: [
      { name: "Data Modernization", url: "/data-modernization" },
      { name: "Governance", url: "/governance" },
      { name: "Data Vault", url: "/data-vault" },
      { name: "dbt Mesh", url: "/dbt-mesh" },
      { name: "Cost Optimization", url: "/cost-optimization" },
    ],
  },
  {
    title: "Industry",
    links: [
      { name: "Communications", url: "/communications" },
      { name: "Energy", url: "/energy" },
      { name: "Federal Government", url: "/federal-government" },
      { name: "Financial Services", url: "/financial-services" },
      { name: "Gaming", url: "/gaming" },
      {
        name: "Healthcare and Life Sciences",
        url: "/healthcare-and-life-sciences",
      },
      { name: "Higher Education", url: "/higher-education" },
      { name: "Manufacturing", url: "/manufacturing" },
      { name: "Media & Entertainment", url: "/media-and-entertainment" },
      { name: "Public Sector", url: "/public-sector" },
      { name: "Retail and Consumer Goods", url: "/retail-and-consumer-goods" },
      { name: "Technology and Software", url: "/technology-and-software" },
    ],
  },
];

const footerLinksLegals = [
  { name: "Legal Agreements", url: "/legal-agreements" },
  { name: "Product Team", url: "/product-team" },
  { name: "Legal Policies", url: "/security" },
  { name: "Privacy Policy", url: "/privacy-policy" },
  { name: "Terms of Service", url: "/terms-of-service" },
];
