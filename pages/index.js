import Head from "next/head";
import Image from "next/image";
import Excavator from "../components/threejs/excavator";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Excavator 3D</title>
        <meta name="description" content="3D excavator " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white h-screen">
        <Excavator />
      </main>
    </div>
  );
}
