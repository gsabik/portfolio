import mailLogo from "../assets/mail.svg";
import linkedinLogo from "../assets/linkedin.svg";
import githubLogo from "../assets/github.svg";

const Contact = () => {
    return (
        <div className="h-screen flex justify-center items-center text-white" id="contact">
            <div className="container">
                <div className="h-full flex flex-col space-y-12">
                    <h2 className="text-center text-4xl font-bold" data-aos="fade">Contacto</h2>
                    <p className="text-center text-lg" data-aos="fade" data-aos-delay="250">Actualmente me encuentro en busca de mi primer empleo IT, y si estas interesad@ en contactarme te dejo los siguiente medios!</p>
                    <div className="w-full flex flex-row justify-center space-x-8" data-aos="fade" data-aos-delay="500">
                        <a className="flex flex-row items-center font-medium space-x-2" href="mailto:guidosabik1@gmail.com" target="_blank">
                            <img
                                className="h-8 w-8"
                                src={mailLogo}
                            />
                            <p>guidosabik1@gmail</p>
                        </a>
                        <a className="flex flex-row items-center font-medium space-x-2" href="https://www.linkedin.com/in/guido-sabik/" target="_blank">
                            <img
                                className="h-8 w-8"
                                src={linkedinLogo}
                            />
                            <p>Guido Sabik</p>
                        </a>
                        <a className="flex flex-row items-center font-medium space-x-2" href="https://github.com/gsabik" target="_blank">
                            <img
                                className="h-8 w-8"
                                src={githubLogo}
                            />
                            <p>gsabik</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact