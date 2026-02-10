import { useState } from "react";
import "./App.css";
import Hero from "./components/hero";
import Header from "./components/layouts/header";
import Video from "./components/video";
import Footer from "./components/layouts/footer";
import Testimonials from "./components/testimonials";
import TrustedBy from "./components/trustedby";
function App() {
  return (
    <>
      {/* <div className="bg-gray-100 flex flex-col gap-6 py-6 items-center pb-0 p-5"> */}
      <div className=" bg-gray-100 flex flex-col gap-3 py-6 items-center pb-0 p-5">
        {/* <header className="w-full fixed top-6 z-50 px-19 overflow-hidden">
          <Header />
        </header> */}
        <header className="fixed top-3 left-0 w-full flex justify-center z-50">
          <div className="w-full max-w-7xl md:px-0 px-5">
            <Header />
          </div>
        </header>
        {/* <main className="w-full max-w-7xl bg-white rounded-3xl overflow-hidden mt-28 ">
          <Hero />
        </main> */}
        {/* <main className="w-full max-w-7xl bg-white rounded-3xl overflow-hidden mt-24">
            <Video />
        </main> */}
        <main
          className="app-container-grow bg-white overflow-hidden rounded-3xl mt-24"
          style={{ width: "100%" }}
        >
          <Video />
        </main>
        <section className="w-full max-w-9xl bg-white rounded-3xl overflow-hidden">
          <TrustedBy />
        </section>
        <section className="w-full max-w-9xl bg-white rounded-3xl overflow-hidden ">
          <Testimonials />
        </section>
        <footer className="w-full max-w-9xl overflow-hidden">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
