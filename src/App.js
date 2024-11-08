import React from "react";
import Header from "./components/Header";
import PrimaryTitle from "./components/PrimaryTitle";
import NewsSlider from "./components/NewsSlider";
import NewsFilter from "./components/NewsFilter";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <section className="pt-12 overflow-hidden lg:pt-24">
          <div className="container px-4 mx-auto max-w-1248">
            <PrimaryTitle text="Featured news" />
          </div>
          <div className="container px-4 mx-auto max-w-1248">
            <NewsSlider />
          </div>
        </section>
        <section className="overflow-hidden lg:py-24">
          <div className="container px-4 mx-auto max-w-1248">
            <PrimaryTitle text="Latest news" />
            <NewsFilter />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
