import Layout from "/src/layouts/Layout.jsx";
import DeatilsContainer from "/src/modules/Landing/DeatilsContainer";
import Hero from "/src/modules/Landing/Hero";
import PopularProducts from "/src/modules/Landing/PopularProducts";
import Slider from "/src/modules/Landing/Slider";
import VideoContainer from "/src/modules/Landing/VideoContainer";

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col  items-center justify-between max-w-screen min-h-screen overflow-hidden pb-9">
        <div
          style={{ background: "url('/background/hero.svg')" }}
          className="!bg-no-repeat w-full pb-[160px] !bg-cover   "
        >
          <div className="min-w-screen  pt-16">
            <Hero />
            <DeatilsContainer />
          </div>
        </div>

        <div className=" w-11/12 mx-auto flex flex-col 1440:w-[1281px] items-center ">
          <PopularProducts />
          <VideoContainer />
          <Slider />
        </div>
      </main>
    </Layout>
  );
}
