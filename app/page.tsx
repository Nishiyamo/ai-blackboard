import BlackBoard from "./components/atoms/blackboard";

export default function Home() {
  return (
    <div className="flex flex-row content-center items-center justify-center h-screen w-screen bg-black">
      <main className="flex flex-col w-full h-full max-w-[1440px] max-h-[720px] bg-white rounded-md shadow-[0px_4px_40px_rgba(0,0,0,0.1)] ">
        <BlackBoard />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
