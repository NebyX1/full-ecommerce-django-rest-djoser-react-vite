import React from "react";
import ActionDiv from "../components/home/ActionDiv";
import HeaderCarousel from "../components/home/HeaderCarousel";
import HomeBanner from "../components/home/HomeBanner";
import NewProducts from "../components/home/NewProducts";
import OffertProducts from "../components/home/OffertProducts";
import Snippet from "../components/shared/Snippet";

const Home = () => {
  return (
    <>
      <Snippet pageName="Home" />

      <HeaderCarousel />

      <HomeBanner />

      <NewProducts />

      <ActionDiv />

      <OffertProducts />
    </>
  );
};

export default Home;
