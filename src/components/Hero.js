import profilePhoto from "../assets/me.jpg"

const Hero = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="container">
                <div className="w-full grid grid-cols-12">
                    <div className="col-start-1 col-end-7 space-y-4">
                        <div className="flex flex-col space-y-4">
                            <h1 className="text-white text-6xl font-bold">Hola! Mi nombre <br/> es Guido Sabik</h1>
                            <h2 className="text-gray-400 text-2xl font-semibold">Frontend Developer</h2>
                        </div>
                        <div className="flex">
                            <p className="text-white text-lg leading-loose">Hoy en día estoy buscando obtener mi primer empleo IT, y para eso desarrollé este portfolio donde muestro proyectos realizados en distintas tecnologías.</p>
                        </div>
                        <div className="flex flex-row pt-4 space-x-4">
                            <button className="text-white font-semibold border-2 border-white px-6 py-2 rounded-md">Contacto</button>
                            <button className="font-semibold bg-white px-6 py-2 rounded-md">Proyectos</button>
                        </div>
                    </div>
                    <div className="col-start-9 col-end-12">
                        <img 
                            alt="Profile Photo" 
                            className="rounded-2xl"
                            src={profilePhoto} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero