import Image from "next/image";
import Link from "next/link";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <div className="h-fit w-[100dvw] flex justify-center items-start home">
        <div className="h-screen w-1/2 flex flex-col gap-5 px-6 justify-center items-center">
          <h1 className="w-[75%] title text-7xl">Discover the Power of Code Matrix</h1>
          <p className="w-[75%] subText">Code Matrix Trading & Contracting is a leading provider of comprehensive trading and contracting services. With a team of experienced professionals, we offer tailored solutions to meet the unique needs of our clients</p>
          <div className="w-[75%]">
            <Link href="/">
              <button className="button px-6 py-3">Explore More</button>
            </Link>
          </div>
        </div>

        <div className="h-screen w-1/2 flex justify-center items-center">
          <img src="/images/Hero.png" alt="" className="w-[65%] h-auto" />
        </div>
      </div>

      <Intro />
      <Services/>
      <Benefits/>
      <Testimonials/>
      <CTA/>
    </>
  );
}
