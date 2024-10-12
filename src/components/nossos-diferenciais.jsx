import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';


export default function NossosDiferenciais(){
    const [sliderPerView,setSliderPerView] = useState(4);
    const OurDifferences = [
        {name: 'Respeito ao meio ambiente',icon: icon1,text: 'Comprometemo-nos com práticas sustentáveis e com a preservação ambiental em todos os nossos projetos.',},
        {name: 'Excelência comprovada',icon: icon2,text: 'Em 10 anos de atuação, nossa empresa nunca precisou refazer trabalho devido a erros internos, evidenciando nossa precisão e compromisso com a qualidade.',},
        {name: 'Pontualidade',icon: icon3,text: 'Nossa empresa tem um histórico sólido de entrega no prazo em todos os projetos.',},
    ];

    useEffect(()=>{
        function handleResize(){
            if(window.innerWidth < 720){
                setSliderPerView(1)
            }else{
                setSliderPerView(3)
            }
        }
        handleResize();
        window.addEventListener("resize",handleResize);
        return () => {
            window.removeEventListener("resize",handleResize);
        }
    },[])
    
    return(
        <section className="w-full bg-colorWhite py-[108px] md:py-[120px]">
            <div className="container mx-auto px-4 md:max-w-5xl">
                <div>
                    <h2 className='font-tomorrow text-[45px] font-medium leading-[58.5px] text-center md:mb-[80px] mb-[40px]'>NOSSOS DIFERENCIAIS</h2>
                </div>
                <div>
                    <Swiper
                        spaceBetween={17}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        slidesPerView={sliderPerView}
                    >
                        {OurDifferences.map((item, index) => (
                            <SwiperSlide key={index} className='h-auto'>
                                <div className="h-full p-[20px] flex flex-col items-center md:items-start border-colorBorder border gap-[30px]">
                                    <img src={item.icon} alt={item.name} className="w-16 h-16 mb-4" />
                                    <h3 className="font-inter font-semibold text-[18px]">{item.name}</h3>
                                    <p className="font-inter text-[13px] font-normal">{item.text}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}