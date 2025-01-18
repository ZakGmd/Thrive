import './App.css'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


function App() {
  const container = useRef(null) ;

   useGSAP(()=>{
    const tl = gsap.timeline() ;
    tl.fromTo(".lines",{
      opacity: 0 ,
      duration: 2, 
      y:-180 ,
    },{
      opacity: 1 ,
      duration: 2, 
      y:0 ,
      ease: "power2.out"
    },"+=0.4").fromTo(".leftLine",{
      opacity: 0 ,  
      duration: 2 ,
      x:-120 ,
    },{
      x:0 ,
      opacity:1 ,
      duration: 2 ,
      ease: "power2.out"
    },"<").fromTo(".rightLine",{
      opacity: 0 ,  
      duration: 1 ,
      x:120 ,
    },{
      x:0 ,
      opacity:1 ,
      duration: 2 ,
      ease: "power2.out"
  },"<")
   },{scope: container})
  return (
    <>
    <div className='flex flex-col w-full h-[100vh] bg-neutral-950 font-inter' ref={container} >
      <div className=" flex items-center justify-between px-3 pt-4">
        <div className=" font-bold text-2xl px-6 text-neutral-50 bg-clip-text  text-transparent bg-gradient-to-r from-[#F27500] from-[10%] to-neutral-100 to-[45%] contrast-125 w-[200px]  ">Thrive</div>
        <div className='flex items-center gap-10 '>
           <div className='text-[#F27500] cursor-pointer contrast-125'>Features</div>
           <div className='text-white/25 cursor-pointer hover:text-[#F27500]/55 transition-all duration-150 '>How it works</div>
           <div className='text-white/25 cursor-pointer hover:text-[#F27500]/55 transition-all duration-150'>Pricing</div>
           <div className='text-white/25 cursor-pointer hover:text-[#F27500]/55 transition-all duration-150'>About</div>
        </div>
        <div className='flex items-center gap-3 '>
            <div className='px-3 py-1 rounded-2xl  text-neutral-50 tracking-[-0.12px] transition-all duration-150 cursor-pointer hover:bg-white/10'>Blog</div>
            <div className='flex bg-gradient-to-b from-white/20 to-white/30 backdrop-blur-sm  px-3 py-1 rounded-2xl tracking-[-0.12px] text-white cursor-pointer  transition-colors duration-300 '>Download App</div>
        </div>
       </div>
       <div className='relative mt-[240px] max-w-[1400px] w-full mx-auto flex flex-col items-center justify-between h-full    '>
           <div className="lines absolute w-[1px] left-[340px] top-[-110px] h-[182px] bg-gradient-to-b from-transparent  to-[120%]  to-[#F27500]/30 rounded-2xl"></div>
           <div className="lines absolute w-[1px] right-[360px] top-[-110px] h-[182px] bg-gradient-to-b from-transparent to-[120%] to-[#F27500]/30 rounded-2xl"></div>
           <div className="leftLine absolute h-[1px] left-[100px] top-[200px] w-[200px] bg-gradient-to-r from-transparent  to-[120%]  to-[#F27500]/30">
                  <div className=" absolute right-[-0.1px] bottom-[-1.80px] rounded-full w-[4.3px] h-[4.7px] bg-[#F27500]/50"></div>
          </div>
          <div className="rightLine absolute h-[1px] right-[100px] top-[200px] w-[200px] bg-gradient-to-l from-transparent  to-[120%]  to-[#F27500]/30">
                 <div className=" absolute left-[-0.9px] bottom-[-1.85px] rounded-full w-[4.3px] h-[4.7px] bg-[#F27500]/50"></div>
          </div>

          <div className='flex flex-col items-center gap-10'>
            <div className="texts flex flex-col gap-3 py-2 items-center bg-clip-text  text-transparent bg-gradient-to-r from-neutral-100  from-[10%] to-[#F27500] to-[95%] contrast-125 ">
                    <span className=" text-7xl  font-semibold  "  >Eternal Wisdom,</span>
                    <span className="text-neutral-50  contrast-125 font-normal text-lg">for Today's Mind</span>
            </div>
            <div className='flex flex-col items-center gap-10'>
               <div className="text-neutral-50 font-normal contrast-50 brightness-50  text-lg max-w-[480px] text-center">Experience meditation reimagined through AI guidance, making mindfulness a natural part of your day</div>
               <div className='flex items-center '>
                 
                  <div  className="flex px-3 py-2 mt-5 gap-1 items-center border border-[#F27500]/60  rounded-3xl  ">
                    <img src="/apple.svg" alt="Apple Logo" height={24} width={24} />
                    <div className="flex flex-col items-start  text-neutral-50 ">
                        <div className=" font-light text-[10px] leading-3   ">Download on the</div>
                        <div className=" font-semibold leading-5 ">APP STORE</div>
                    </div>
                </div>
               </div>
               
              
            </div>
          </div>
          <svg width="1700" height="380px" className="   " viewBox="0 0 878 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1_2)" className="forSVG" >
                <path d="M3 109C265.304 -36.6171 620.373 -27.9836 875 109"  fill="#0a0a0a"  stroke="url(#paint0_linear_1_2)"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_1_2" x1="439" y1="3" x2="439" y2="109" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f5f5f5"/>
                <stop offset="0.515" stopColor="#F27500" stopOpacity="0.89"/>
                <stop offset="1" stopColor="#f5f5f5" stopOpacity="0"/>
                </linearGradient>
                </defs>
          </svg>
       </div>
    </div>
         
    </>
  )
}

export default App
