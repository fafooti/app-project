import Layout from "@/layouts/Layout";
import DeatilsContainer from "@/modules/Landing/DeatilsContainer";
import Hero from "@/modules/Landing/Hero";
import PopularProducts from "@/modules/Landing/PopularProducts";
import Slider from "@/modules/Landing/Slider";
import VideoContainer from "@/modules/Landing/VideoContainer";

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col  items-center justify-between max-w-screen min-h-screen">
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
