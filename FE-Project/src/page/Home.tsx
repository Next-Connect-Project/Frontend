import React from "react";
import Header from "../components/header/Header";
import Cardlist from "../components/home/Cardlist";
import MainCarousel from "../components/home/MainCarousel";
export default function Home() {
  return (
    <>
      <Header />
      <MainCarousel />
      <Cardlist />
    </>
  );
}
