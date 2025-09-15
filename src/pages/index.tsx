// src/pages/index.tsx
import Header from "@/components/layout/Header/Header";
import Hero from "@/components/sections/Hero/Hero";
import Footer from "@/components/layout/Footer/Footer";
import dynamic from "next/dynamic";
import { bodySections } from "@/data/sections";


const pageConfig = {
  header: "Simple", // pretend this comes from DB
};

export default function Home() {
  return (
    <>
      <Header variant={pageConfig.header}/>
      <Hero />
      
      {/* {bodySections.map((name) => {
        const Section = dynamic(() => import(`@/components/sections/${name}`));
        return <Section key={name} />;
      })} */}

      <Footer />
    </>
  );
}