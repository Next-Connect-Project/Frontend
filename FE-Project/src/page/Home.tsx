import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MainCarousel from "../components/home/MainCarousel";
import MainRecruitmentCardlist from "../components/home/MainRecruitmentCardlist";
import MainPromotionCardlist from "../components/home/MainPromotionCardlist";
export default function Home() {
  return (
    <>
      <Header />
      <MainCarousel />
      <MainRecruitmentCardlist />
      <MainPromotionCardlist />
      <Footer />
    </>
  );
}
