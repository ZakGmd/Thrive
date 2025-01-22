import './App.css'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap-trial/SplitText" ;
import Scene from './components/scene';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText) ;


function App() {
  const container = useRef(null) ;

   useGSAP(()=>{
    const tl = gsap.timeline() ;
    var splitSecondText = new SplitText('.secondText',{type: "words"}) ;
    var splitThirdText = new SplitText('.thirdText',{type: "words"}) ;
    tl.from(".nav",{
      opacity: 0 ,
      duration:4 ,
      ease: "power4.out"
    }).fromTo(".lines",{
      opacity: 0 ,
      duration: 2, 
      y:-240 ,
    },{
      opacity: 1 ,
      duration: 2, 
      y:0 ,
      ease: "power2.out"
    },"-=2").fromTo(".leftLine",{
      opacity: 0 ,  
      duration: 2 ,
      x:-220 ,
    },{
      x:0 ,
      opacity:1 ,
      duration: 2 ,
      ease: "power2.out"
    },"<").fromTo(".rightLine",{
      opacity: 0 ,  
      duration: 1 ,
      x:220 ,
    },{
      x:0 ,
      opacity:1 ,
      duration: 2 ,
      ease: "power2.out"
  },"<").fromTo(".text1",{
    opacity: 0 ,
    y:-20 ,
  
  },{
    ease: "power4.out",
    duration:1,
    opacity: 1 ,
    y:0 
  },"-=2").from(splitSecondText.words ,{
    duration: 0.58,    
    autoAlpha: 0 ,
    stagger: 0.099 ,
    ease: 'power2.in'
},'<').from(splitThirdText.words ,{
    duration: 0.58,    
    autoAlpha: 0 ,
    stagger: 0.099 ,
    ease: 'power2.in'
},'-=0.95').from(".button",{
  autoAlpha: 0 ,
  duration: 0.60 ,
  ease: "power4.out",
  scaleX: 0.01 ,
},"<").from(".svg",{
  autoAlpha: 0 ,
 
  duration: 2 ,
  ease: "power4.out",
},"+=0.005").from(".btnText",{
  autoAlpha: 0 ,
  y:30 ,
  duration: 0.6 ,
  ease: "power4.out",
},"-=1.8")
   },{scope: container})
  return (
    <>
    <div className='flex flex-col w-full h-[300vh] bg-neutral-950 font-inter overflow-hidden' ref={container} >
      <div className="nav flex items-center justify-between px-3 pt-6">
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
       <div className='relative mt-[290px] max-w-[1400px] w-full mx-auto flex flex-col items-center  h-full    '>
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
                    <span className="text1  text-neutral-50  contrast-125 font-normal text-lg">for Today's Mind</span>
            </div>
            <div className='flex flex-col items-center gap-10'>
               <div className="secondText   text-neutral-50 font-normal contrast-50 brightness-50  text-lg max-w-[500px] text-center">Experience meditation reimagined through AI guidance, <br /><span className='thirdText  '>making mindfulness a natural part of your day</span> </div>
               <div className='flex items-center '>
                 
                  <div  className="button flex px-3 py-2 mt-5 gap-1 items-center border border-[#F27500]/60  rounded-3xl overflow-hidden ">
                    <img src="/apple.svg" alt="Apple Logo" height={24} width={24} className='svg' />
                    <div className="btnText flex flex-col items-start  text-neutral-50 ">
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
          <div className="grid-cols-10 mt-10 grid items-center  secondSectionAnimate hideSecond">
                <div className="col-span-3 flex flex-col h-[880px] pt-20 items-start  gap-[200px]  ">
                  <div className=" flex items-start max-w-[350px]  firstCard ">
                    <div className="flex px-4 py-5 items-start border-[1.7px] max-w-[350px] w-full  border-neutral-50/50  bg-gradient-to-b from-neutral-950 from-[-17%] via-[#f97316]/70 via-20%  to-black to-[68%] rounded-xl ">
                        <div className="flex flex-col items-start gap-5 w-full   ">
                            <div className="flex flex-col gap-5 w-full">
                                <div className="p-2 items-center justify-center flex border border-neutral-50/50  max-w-[50px] rounded-xl">
                                    <img src="/graph.svg" alt={""} width={28} height={28}/>
                                </div>
                                <div className=" font-medium text-2xl text-neutral-300 leading-[32px] w-full ">Your AI friend on the path <br /> to inner peace</div>
                            </div>
                            <div className="h-[1.5px] bg-gradient-to-l from-transparent to-orange-900/80 rounded-full w-full"></div>
                            <div className=" font-light text-neutral-50 ">Let our AI create the perfect meditation just for you each day. Get personalized sessions based on your mood !</div>
                        </div>
                        <div className="flex flex-col h-[237px] w-[40px] max-w-max justify-between items-end">
                            <div className="w-1 h-1 bg-orange-100 rounded-full"></div>
                            <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                        </div>
                    </div>     
                  </div>
                 <div className="flex items-star max-w-[350px] fourthCard    ">
                    <div className="flex px-4 py-5 items-start border-[1.7px] max-w-[350px] border-neutral-50/50  bg-gradient-to-b from-neutral-950 from-[-17%] via-[#f97316]/70 via-20%  to-black to-[68%] rounded-xl ">
                        <div className="flex flex-col items-start gap-5 ">
                            <div className="flex flex-col gap-5">
                                <div className="p-2 items-center justify-center flex border border-neutral-50/50  max-w-[50px] rounded-xl">
                                    <img src="/wallet.svg" alt={""} width={28} height={28}/>
                                </div>
                                <div className=" font-medium text-2xl text-neutral-300 leading-[28px] ">Rule-based budget and spending management</div>
                            </div>
                            <div className="h-[1.5px] bg-gradient-to-l from-transparent to-orange-900/80 w-full"></div>
                            <div className=" font-light text-neutral-50 ">You can use ZERO to help control your spending and build a realistic budget to stay on track!</div>
                        </div>
                        <div className="flex flex-col h-[237px] w-[40px] justify-between items-end">
                            <div className="w-1 h-1 bg-slate-100 rounded-full"></div>
                            <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                        </div>
                    </div>
                 </div>
                </div>
                <div className="col-span-4  h-[880px] w-full items-start gap-20">
                    
                    <Scene />
                    
                </div>
                <div className="col-span-3 flex flex-col h-[880px] pt-20 items-start w-full  gap-[200px] ml-[70px] ">
                <div className="flex items-star max-w-[350px] fourthCard w-full   ">
                    <div className="flex px-4 py-5 items-start border-[1.7px] w-full max-w-[350px] border-neutral-50/50  bg-gradient-to-b from-neutral-950 from-[-17%] via-[#f97316]/70 via-20%  to-black to-[68%] rounded-xl ">
                        <div className="flex flex-col items-start gap-5 w-full ">
                            <div className="flex flex-col gap-5">
                                <div className="p-2 items-center justify-center flex border border-neutral-50/50  max-w-[50px] rounded-xl">
                                    <img src="/wallet.svg" alt={""} width={28} height={28}/>
                                </div>
                                <div className=" font-medium text-2xl text-neutral-300 leading-[32px] ">Mindful focus, better results </div>
                            </div>
                            <div className="h-[1.5px] bg-gradient-to-l from-transparent to-orange-900/80 w-full"></div>
                            <div className=" font-light text-neutral-50 ">Enhance your daily productivity with focused sessions tailored to your work style. Stay in the zone !</div>
                        </div>
                        <div className="flex flex-col h-[237px] w-[40px] justify-between items-end">
                            <div className="w-1 h-1 bg-slate-100 rounded-full"></div>
                            <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                        </div>
                    </div>
                 </div>
                 <div className="flex items-star max-w-[350px] fourthCard    ">
                    <div className="flex px-4 py-5 items-start border-[1.7px] max-w-[350px] border-neutral-50/50  bg-gradient-to-b from-neutral-950 from-[-17%] via-[#f97316]/70 via-20%  to-black to-[68%] rounded-xl ">
                        <div className="flex flex-col items-start gap-5 ">
                            <div className="flex flex-col gap-5">
                                <div className="p-2 items-center justify-center flex border border-neutral-50/50  max-w-[50px] rounded-xl">
                                    <img src="/wallet.svg" alt={""} width={28} height={28}/>
                                </div>
                                <div className=" font-medium text-2xl text-neutral-300 leading-[28px] ">Rule-based budget and spending management</div>
                            </div>
                            <div className="h-[1.5px] bg-gradient-to-l from-transparent to-orange-900/80 w-full"></div>
                            <div className=" font-light text-neutral-50 ">You can use ZERO to help control your spending and build a realistic budget to stay on track!</div>
                        </div>
                        <div className="flex flex-col h-[237px] w-[40px] justify-between items-end">
                            <div className="w-1 h-1 bg-slate-100 rounded-full"></div>
                            <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                        </div>
                    </div>
                 </div>
                </div>
            </div>
       </div>
    </div>
         
    </>
  )
}

export default App
