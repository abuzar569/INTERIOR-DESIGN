import Image from "next/image";
import AnimatedNavbar from "./Components/AnimatedNavbar";
import AnimatedHero from "./Components/AnimatedHero";
import Services from "./Components/Service";
import ScrollAniamtion from "./Components/ScrollAnimation";
import Project from "./Components/Project";
import Cursor from "./Components/Cursor";
import Testimonial from "./Components/Testimonial";





export default function Home() {
  return (
   <div>
    <Cursor />
    <AnimatedNavbar />
    <AnimatedHero />
    <Services />
    <ScrollAniamtion />
    <Project />
    <Testimonial/>
   </div>
  );
}
