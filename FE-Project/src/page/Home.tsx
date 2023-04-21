import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ProjectCardlist from "../components/home/ProjectCardlist";
import MainCarousel from "../components/home/MainCarousel";
import PromotionCardlist from "../components/home/PromotionCardlist";
export default function Home() {
  return (
    <>
      <Header />
      <MainCarousel />
      <ProjectCardlist />
      <PromotionCardlist />
      <Footer />
    </>
  );
}
