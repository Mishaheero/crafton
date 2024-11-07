import React from "react";
import Header from "./components/Header";
import PrimaryTitle from "./components/PrimaryTitle";
import NewsSlider from "./components/NewsSlider";

const App = () => {
  return (
    <>
      <Header />
      <main>
          <section className="overflow-hidden lg:py-24">
            <div className="container px-4 mx-auto max-w-1248">
              <PrimaryTitle text="Featured news" />
            </div>
            <div className="container px-4 mx-auto mt-16 max-w-1248">
              <NewsSlider />
            </div>
          </section>
          <section className="overflow-hidden lg:py-24"></section>
      </main>
    </>
  );
};

export default App;
