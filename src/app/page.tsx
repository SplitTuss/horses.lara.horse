import Horses from "../components/horses";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header />
        <main className="flex flex-col gap-[32px] items-center">
          <p className="mt-2 ml-2">Meet all the horses who have taught me lessons! Ages are from the time I met them.</p>
          <Horses />
        </main>
        
        <footer className="text-center pt-2">
          <p>made by Lara</p>
        </footer>
    </>
  );
}
