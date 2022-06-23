import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
    return (
        <div className="h-full bg-neutral-900">
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