import Slider from "@src/widgets/Slider/Slider";
import React from "react";
import AboutUsPanel from "@src/widgets/AboutUsPanel/AboutUsPanel";
import News from "@src/widgets/News/News";
import InsurancePanel from "@src/widgets/InsurancePanel/InsurancePanel";

function Home() {
  return (
    <section>
      <Slider />
      <InsurancePanel />
      <AboutUsPanel />
      <News />
    </section>
  );
}

export default Home;
