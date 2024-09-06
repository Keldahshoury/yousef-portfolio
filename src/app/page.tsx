import Image from "next/image";
import Header from "./general/header"
import Scroll from "./general/scroll"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Scroll />
    </div>
  );
}