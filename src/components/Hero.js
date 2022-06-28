import { Link } from "react-scroll";
import profilePhoto from "../assets/me.png";

const Hero = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="container m-4">
                <div className="w-full grid grid-cols-12 space-y-8">
                    <div className="col-span-12 self-center lg:col-span-6 space-y-4" data-aos="fade">
                        <div className="flex flex-col space-y-4">
                            <h1 className="text-white text-5xl font-bold">Hola! Mi nombre <br/> es Guido Sabik</h1>
                            <h2 className="text-gray-400 text-2xl font-semibold">Frontend Developer</h2>
                        </div>
                        <div className="flex">
                            <p className="text-white text-lg leading-loose">Hoy en día estoy buscando obtener mi primer empleo IT, y para eso desarrollé este portfolio donde muestro proyectos realizados en distintas tecnologías.</p>
                        </div>
                        <div className="flex flex-row pt-4 space-x-4">
                            <Link to="contact" smooth={true} className="text-white font-semibold border-2 border-white px-6 py-2 rounded-md hover:cursor-pointer">Contacto</Link>
                            <Link to="projects" smooth={true} className="font-semibold bg-white px-6 py-2 rounded-md hover:cursor-pointer">Proyectos</Link>
                        </div>
                    </div>
                    <div className="hidden lg:block col-start-10 col-end-13" data-aos="fade" data-aos-delay="250">
                        <div className="flex justify-center">
                            <img 
                                alt="Profile Photo" 
                                className="rounded-2xl"
                                src={profilePhoto} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero