// Project.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ProjectDetail from "../components/project/ProjectDetail";
import { Detail } from "../components/project/ProjectDetail.interface";
import { getMainCardData } from "../hooks/axios/Cardlist";

export default function Project() {

  return (
    <>
      <Header />
      <ProjectDetail  />
      <Footer />
    </>
  );
}
