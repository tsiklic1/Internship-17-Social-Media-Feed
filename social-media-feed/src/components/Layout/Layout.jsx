import { Outlet, useSearchParams } from "react-router-dom";
import { useState } from "react";
import Navigation from "../Navigation";

const Layout = () => {
  const [searchString, setSearchString] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <Navigation />
      <main>
        <Outlet
          searchString={searchString}
          setSearchString={setSearchString}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </main>
    </>
  );
};

export default Layout;
