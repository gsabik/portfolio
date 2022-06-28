import mailLogo from "../assets/mail.svg";
import linkedinLogo from "../assets/linkedin.svg";
import githubLogo from "../assets/github.svg";

const Contact = () => {
    return (
        <div className="h-screen flex justify-center items-center text-white" id="contact">
            <div className="container m-4">
                <div className="h-full flex flex-col space-y-12">
                    <h2 className="text-center text-4xl font-bold" data-aos="fade" data-aos-once="true">Contacto</h2>
                    <p className="text-center text-lg" data-aos="fade" data-aos-delay="250" data-aos-once="true">Actualmente me encuentro en busca de mi primer empleo IT, y si estas interesad@ en contactarme te dejo los siguientes medios!</p>
                    <div className="w-full flex flex-row justify-center space-x-8" data-aos="fade" data-aos-delay="500" data-aos-once="true">
                        <a className="flex flex-row items-center font-medium space-x-2" href="mailto:guidosabik1@gmail.com" rel="noreferrer" target="_blank">
                            <img
                                alt="Mail Logo"
                                className="h-8 w-8"
                                src={mailLogo}
                            />
                            <p className="hidden sm:block">guidosabik1@gmail</p>
                        </a>
                        <a className="flex flex-row items-center font-medium space-x-2" href="https://www.linkedin.com/in/guido-sabik/" rel="noreferrer" target="_blank">
                            <img
                                alt="LinkedIn Logo"
                                className="h-8 w-8"
                                src={linkedinLogo}
                            />
                            <p className="hidden sm:block">Guido Sabik</p>
                        </a>
                        <a className="flex flex-row items-center font-medium space-x-2" href="https://github.com/gsabik" rel="noreferrer" target="_blank">
                            <img
                                alt="GitHub Logo"
                                className="h-8 w-8"
                                src={githubLogo}
                            />
                            <p className="hidden sm:block">gsabik</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact