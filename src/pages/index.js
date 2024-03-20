import Layout from "@/layouts/Layout";
import Hero from "@/modules/Landing/Hero";


export default function Home() {

  return (
    <Layout>
       <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <Hero/>

    </main>
    </Layout>
   
  );
}

