import LogoWhite from '../assets/LogoWhite.png';
import { FaWhatsapp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";

export default function Rodape(){
    return(
        <section className="w-full bg-colorBerge py-[165px] md:pt-[69px] pt-[52px] pb-[20px] text-white px-4 md:px-0">
            <div className="container mx-auto md:max-w-screen-xl">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-2/6">
                        <img
                            src={LogoWhite}
                            alt="Logo branca do site"
                            className="md:w-[60%] w-[60%] mb-[40px] md:mb-0"
                        />
                    </div>
                    <div className="w-full md:w-3/6 grid md:grid-cols-3 grid-cols-2 gap-[25px]">
                        <a>Home</a>
                        <a>Projetos</a>
                        <a>Diferenciais</a>
                        <a>serviços</a>
                        <a>Clientes</a>
                        <a>Institucional</a>
                    </div>
                    <ul className="w-full md:w-1/6 flex flex-col gap-[25px] md:my-0 my-[40px]">
                        <li className='flex flex-row items-center gap-2'><FaWhatsapp /><span className='mb-[2px]'>+55 (11) 9 7157-1388</span></li>
                        <li className='flex flex-row items-center gap-2'><FaRegEnvelope /><span className='mb-[4px]'>contato@melosilva.com.br</span></li>
                    </ul>
                </div>
                <div className="border-colorBorderWhite border-[1px] mb-[20px] md:mt-[70px]"></div>
                <div className="flex flex-row justify-between">
                    <span className="font-inter text-[12px] font-normal leading-[14.52px] text-right">Desenvolvido por</span>
                    <span className="font-inter text-[13px] font-normal leading-[24px] text-left">© 2024 MELO SILVA</span>
                </div>
            </div>
        </section>
    )
}