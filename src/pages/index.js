import Layout from "@/layouts/Layout";
import DeatilsContainer from "@/modules/Landing/DeatilsContainer";
import Hero from "@/modules/Landing/Hero";
import PopularProducts from "@/modules/Landing/PopularProducts";
// import DeatilsContainer from "@/modules/Landing/DeatilsContainer";
export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-between max-w-screen   min-h-screen">
        <div className="">
          <Hero />
          <DeatilsContainer />
        </div>
        <div className="w-11/12 mx-auto bg-red-300">
          <PopularProducts />
        </div>
      </main>
    </Layout>
  );
}
