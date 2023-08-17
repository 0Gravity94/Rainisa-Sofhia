import React from "react";

import { WithRouter } from "../utils/Navigation";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import CursorAnimation from "../components/CursorAnimation";

import "../styles/index.css";

function Home() {
  return (
    <Layout>
      <div id="snaps" className="w-screen h-screen overflow-auto ">
        <CursorAnimation />
        <Carousel />
      </div>
    </Layout>
  );
}

export default WithRouter(Home);
