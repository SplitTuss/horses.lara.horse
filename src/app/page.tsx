import Horses from "../components/horses";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <p>Meet all the horses who have taught me lessons! Ages are from the time I met them.</p>
          <Horses />
        </main>
        <footer className="row-start-3 items-center justify-center">
          <p> made by me</p>
        </footer>
      </div>
    </>
  );
}
