import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeItem from "./components/HomeItem";
import { Outlet } from "react-router-dom";
import FetchItems from "./components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}

      <Footer />
    </>
  );
};

export default App;
