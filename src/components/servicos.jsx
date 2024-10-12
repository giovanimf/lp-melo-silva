import img_terraplenagem from '../assets/terraplenagem.webp';
import img_locacao_de_equipamentos from '../assets/locacao_de_equipamentos.webp';
import img_pavimentacao from '../assets/pavimentacao.webp';
import img_transporte from '../assets/transporte.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';


export default function Servicos(){
    const [sliderPerView,setSliderPerView] = useState(4);
    const services = [
        {name: 'Terraplenagem',img: img_terraplenagem,color: 'bg-colorBrown',},
        {name: 'Locação de Equipamentos',img: img_locacao_de_equipamentos,color: 'bg-colorOrange',},
        {name: 'Pavimentação',img: img_pavimentacao,color: 'bg-colorBrown',},
        {name: 'Transporte',img: img_transporte,color: 'bg-colorOrange',},
    ];

    useEffect(()=>{
        function handleResize(){
            if(window.innerWidth < 720){
                setSliderPerView(1)
            }else{
                setSliderPerView(4)
            }
        }
        handleResize();
        window.addEventListener("resize",handleResize);
        return () => {
            window.removeEventListener("resize",handleResize);
        }
    },[])
    
    return(
        <section className="w-full bg-colorGray py-8 px-4">
            <div className="container mx-auto md:max-w-screen-xl">
                <div>
                    <h2 className='font-tomorrow font-medium text-[45px] mb-[60px] mt-[120px] text-center'>SERVICOS</h2>
                </div>
                <div>
                    <Swiper
                        spaceBetween={17}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        slidesPerView={sliderPerView}
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className="">
                                    <img
                                        src={service.img}
                                        alt={`Imagem sobre ${service.name}`}
                                        className="object-cover"
                                    />
                                    <div className={`${service.color} p-6`}>
                                        <h2 className="text-xl font-normal text-colorWhite">{service.name}</h2>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="container mx-auto px-4 md:max-w-screen-xl flex md:flex-row flex-col mt-[80px] md:mt-[160px] mb-[80px] md:mb-[160px]  md:gap-[120px] gap-[40px]">
                <div className='w-full md:w-1/2'>
                    <h2 className='text-[24px] md:text-[40px] font-inter'><strong>Fundada em 2015,</strong> nossa empresa é especializada em <strong>serviços de terraplenagem</strong> para obras de grande porte.</h2>
                </div>
                <div className='w-full md:w-1/2'>
                    <span className='font-inter text-[13px]'>Atuamos com escavação, nivelamento e compactação de solo, sempre utilizando equipamentos modernos e tecnologia de ponta. Nosso diferencial é o alto nível de qualidade no trabalho e a responsabilidade da equipe, que se dedicam a garantir eficiência e precisão em cada projeto.<br/><br/>
                    Com um compromisso rigoroso com o cumprimento de prazos, atendemos grandes construtoras, assegurando resultados excepcionais em todas as etapas.</span>
                </div>
            </div>
        </section>
    )
}