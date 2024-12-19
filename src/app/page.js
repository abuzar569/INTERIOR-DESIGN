import Image from "next/image";
import AnimatedNavbar from "./Components/AnimatedNavbar";
import AnimatedHero from "./Components/AnimatedHero";
import Services from "./Components/Service";
import ScrollAniamtion from "./Components/ScrollAnimation";
import Project from "./Components/Project";




export default function Home() {
  return (
   <div>
    <AnimatedNavbar />
    <AnimatedHero />
    <Services />
    <ScrollAniamtion />
    <Project />
   </div>
  );
}
