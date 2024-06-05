import React, { Suspense, ComponentType } from "react";

// project imports
import Loader from "./Loader";

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = <P extends object>(Component: ComponentType<P>): React.FC<P> => (props) => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
