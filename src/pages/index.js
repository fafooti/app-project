import Layout from "/src/layouts/Layout.jsx";
import DeatilsContainer from "/src/modules/Landing/DeatilsContainer";
import Hero from "/src/modules/Landing/Hero";
import PopularProducts from "/src/modules/Landing/PopularProducts";
import Slider from "/src/modules/Landing/Slider";
import VideoContainer from "/src/modules/Landing/VideoContainer";

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col  items-center justify-between max-w-screen min-h-screen overflow-hidden">
        <div
          style={{ background: "url('/background/hero.svg')" }}
          className="!bg-no-repeat  !bg-cover    "
        >
          <div className="min-w-screen mx-auto pt-16">
            <Hero />
            <DeatilsContainer />
          </div>
        </div>

        <div className=" w-11/12 mx-auto flex flex-col items-center ">
          <PopularProducts />
          <VideoContainer />
          <Slider/>
        </div>
      </main>
    </Layout>
  );
}
