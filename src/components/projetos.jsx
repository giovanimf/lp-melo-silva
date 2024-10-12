import CardsAni from "./cardsanime";

export default function Projetos(){
    return(
        <section className="w-full bg-colorGray py-[108px] md:py-[120px]">
            <div className="w-full">
                <div className="text-center md:max-w-lg w-full mx-auto md:mb-[80px] mb-[40px]">
                    <h2 className='font-tomorrow text-[45px] font-medium leading-[58.5px] text-center md:mb-[30px] mb-[40px]'>PROJETOS</h2>
                    <span className="font-inter text-[12px] leading-[19.2px] mb-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                </div>
                <div>
                    <CardsAni/>
                </div>
            </div>
        </section>
    )
}