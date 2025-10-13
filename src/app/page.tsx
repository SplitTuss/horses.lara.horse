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
        {/* <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" fill="#800080" />
          <g>
            <path d="M16 6 L18 14 L26 12 L19 17 L22 26 L16 20 L10 26 L13 17 L6 12 L14 14 Z"
              fill="#fff" stroke="#fff" stroke-width="2" />
          </g>
        </svg> */}
        <footer className="row-start-3 items-center justify-center">
          <p> made by me</p>
        </footer>
      </div>
    </>
  );
}
