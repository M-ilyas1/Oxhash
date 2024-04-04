import Header from "../Header/Header"

function HeroSection() {
  return (
    <div className="w-full max-w-[1920px] flex flex-col justify-center items-center py-5" id="HeroSection">
        <Header />

        <div className="w-[80%] text-center flex flex-col justify-center items-center">
        <h1 className="text-[118px] pt-16 leading-none font-normal text-white">Build On The Edge <br /> Of <span className="text-[#1AA9F9]">Gaming</span></h1>
        <p className="w-[50%] text-[20px] py-8 pb-16 leading-none text-[#FFFFFF]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of </p>
        <div className="flex gap-5 pb-16">
        <button className="bg-transparent border-2 border-[#1AA9F9] rounded-2xl text-white py-[12px] px-[32px] hover:bg-[#ffffff2c] text-[18px]">Start Building</button>
        <button className="bg-transparent border-2 border-[#1AA9F9] rounded-2xl text-white py-[12px] px-[32px] hover:bg-[#ffffff2c] text-[18px]">Explore Docs</button>
        </div>
        </div>
    </div>
  )
}

export default HeroSection