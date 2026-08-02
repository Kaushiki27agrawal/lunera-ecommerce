import AnnouncementBar from "@/components/home/AnnouncementBar";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/layout/Navbar";

function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
    </>
  );
}

export default Home;