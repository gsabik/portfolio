import lisaShowroom from "../assets/lisa-showroom.png";

const Projects = () => {
    return (
        <div className="flex justify-center items-center text-white" id="projects">
            <div className="container m-4">
                <h1 className="text-4xl text-left font-bold" data-aos="fade">Proyectos</h1>
                <div className="w-full grid grid-cols-12 pt-8 lg:space-x-8">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="h-full flex flex-col justify-center" data-aos="fade" data-aos-delay="250">
                            <h2 className="text-3xl font-medium pb-8">Lisa Showroom</h2>
                            <p className="text-lg leading-loose pb-4">Lisa Showroom es un eCommerce desarrollado con React JS para el curso de Coderhouse. Se implementó Chakra UI para los componentes y React Router para las rutas. Como base de datos, Firestore.</p>
                            <p className="text-lg text-gray-400">Tecnologías: React JS, React Router, Chakra UI y Firebase.</p>
                            <div className="flex flex-row space-x-4 pt-6">
                                <a href="https://github.com/gsabik/lisa-showroom" className="font-semibold border-2 border-white px-4 py-1 rounded-md"  rel="noreferrer" target="_blank">GitHub</a>
                                <a href="https://lisa-showroom.vercel.app/" className="text-black font-semibold bg-white px-4 py-1 rounded-md" rel="noreferrer" target="_blank">Visitar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <div className="h-full flex justify-center items-center" data-aos="fade" data-aos-delay="500">
                            <img
                                alt="Projects"
                                className="grayscale m-8"
                                src={lisaShowroom}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-12">
                    <a href="https://github.com/gsabik" className="font-semibold border-2 border-white px-4 py-1 rounded-md" data-aos="fade-right" data-aos-delay="750" data-aos-duration="1500">Ver más</a>
                </div>
            </div>
        </div>
    )
}

export default Projects