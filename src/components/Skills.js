
const Skills = () => {
    return (
        <div className="h-screen flex justify-center items-center text-white">
            <div className="container m-4">
                <div className="h-full flex flex-col">
                    <h1 className="text-4xl text-left font-bold" data-aos="fade">Skills</h1>
                    <p className="text-lg pt-10" data-aos="fade" data-aos-delay="250">Este último tiempo me estuve enfocando en la librería de React JS, aunque estoy en aprendizaje constante de nuevas tecnologias. Otros conocimientos que tengo son los siguientes:</p>
                    <div className="w-full grid grid-cols-12 pt-10">
                        <div className="col-span-6">
                            <ul className="list-disc ml-4 space-y-2" data-aos="fade" data-aos-delay="500">
                                <li>CSS/SASS</li>
                                <li>Bootstrap</li>
                                <li>Tailwind CSS</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                            </ul>
                        </div>
                        <div className="col-span-6">
                            <ul className="list-disc ml-4 space-y-2" data-aos="fade" data-aos-delay="750">
                                <li>React JS</li>
                                <li>React Router</li>
                                <li>Chakra UI</li>
                                <li>Firebase</li>
                                <li>GIT & GitHub</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills