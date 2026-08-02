import AnnouncementBar from "@/components/home/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";

function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="min-h-screen bg-pink-50">
        <section className="flex h-[80vh] items-center justify-center">
          <h1 className="text-5xl font-bold text-pink-700">
            Welcome to Lunera
          </h1>
        </section>
      </main>
    </>
  );
}

export default Home;