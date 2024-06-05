import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

// project imports
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import InfoHeader from "./components/InfoHeader";

const LandingLayout: React.FC = () => {
  return (
    <Fragment>
      <header>
        <InfoHeader message="Learn with us at our bi-weekly demos and see DatafuseAI in action!" />
        <TopBar />
      </header>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default LandingLayout;
