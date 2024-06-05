import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";

import DataFuseLogo from "@/assets/logo/logoDataFuse.svg";
import { useEffect, useState } from "react";

const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 0) {
      console.log("scrolled");
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <nav
      className={`transition-all  duration-300 z-50  bg-white  flex justify-center lg:fixed w-full ${
        isScrolled
          ? "p-[26px] lg:p-4 lg:shadow-md lg:-translate-y-[57px] "
          : "p-[26px]"
      } `}
    >
      <div className="flex justify-between container items-center">
        <div className="flex items-center gap-2">
          <img src={DataFuseLogo} alt="logo" />
          <h1 className="font-normal text-3xl">
            Datafuse<span className="font-bold">AI</span>
          </h1>
        </div>
        <div className="flex gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <p className="text-[1rem] font-normal text-[#003F5C]">
                    Product
                  </p>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <p className="text-[1rem] font-normal text-[#003F5C]">
                    Solutions
                  </p>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <p className="text-[1rem] font-normal text-[#003F5C]">
                    Resources
                  </p>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <p className="text-[1rem] text-[#003F5C] cursor-pointer">
                    Documentation
                  </p>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <a
            href="https://dev.datafuseai.com/auth/register"
            className="no-underline	text-white font-normal text-[1rem]"
            target="_blank"
          >
            <Button className="bg-[#BC5090] hover:bg-[#BC5080] rounded-full">
              {" "}
              Try For Free
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
