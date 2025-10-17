import Horses from "../components/horses";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header />
        <main className="flex flex-col items-center">
          <p className="m-2 flex text-center">Meet most the horses who have taught me lessons! Their ages are from the time I met them.</p>
          <Horses />
        </main>
        
        <footer className="text-center pt-2">
          <p>made by Lara</p>
        </footer>
    </>
  );
}
