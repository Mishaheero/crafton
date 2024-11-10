import React from "react";
import PrimaryTitle from "../components/PrimaryTitle";
import NewsSlider from "../components/NewsSlider";
import NewsFilter from "../components/NewsFilter";

const News = () => {
  return (
    <>
      <section className="overflow-hidden">
        <div className="container px-4 mx-auto max-w-1248">
          <PrimaryTitle text="Featured news" />
          <NewsSlider />
        </div>
      </section>
      <section className="py-12 overflow-hidden lg:pt-48 lg:pb-24">
        <div className="container px-4 mx-auto max-w-1248">
          <PrimaryTitle text="Latest news" />
          <NewsFilter />
        </div>
      </section>
    </>
  );
};

export default News;
