import Hello from "./components/Hello";

export default function Home() {
  console.log("Hey Bable - Is it a SSR or CSR?");
  return (
    <>
      <Hello />
      <h1 className="text-3xl text-cyan-600">
        Learn Next.js as an dedicated learner
      </h1>
    </>
  );
}
