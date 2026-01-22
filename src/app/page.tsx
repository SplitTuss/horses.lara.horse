import { Horses } from "../components/horses";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header />
        <main className="flex flex-col items-center">
          <div className="m-2 flex text-center">Meet my favourite horses who each have taught me some lesson! Posted ages are from the time I met them.</div>
          <Horses />
        </main>
        
        <footer className="text-center pt-2">
          <p>made by Lara</p>
        </footer>
    </>
  );
}
