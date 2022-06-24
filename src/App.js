import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000,
        })

    }, []);

    return (
        <div className="bg-neutral-900">
            <div className="max-w-screen-xl mx-auto">
                <Hero/>
                <Skills/>
                <Projects/>
                <Contact/>
            </div>
        </div>
    )
}

export default App