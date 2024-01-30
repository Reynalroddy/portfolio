import Image from "next/image";
import Header from "@/components/Header";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <div className="sm:px-16 lg:px-24 px-4">
 <Header />
 <Stats/>
 <About/>
 <Projects/>
 <Contact/>
    </div>
  
  );
}    

