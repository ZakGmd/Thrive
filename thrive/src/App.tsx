import './App.css'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap-trial/SplitText" ;
import Scene from './components/scene';
import { ParticleImage } from './components/Particles';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText) ;
const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
    }> = []

    for (let i = 0; i < 500; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random()* canvas.height,
        size: Math.random() * 2/1.3,
        speedX: 0,
        speedY: -0.2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        if (particle.y < 0) particle.y = canvas.height

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(242,117,0,0.14)"
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

function App() {
  const container = useRef(null) ;

  return (
    <>
    <div className='flex flex-col relative w-full items-center h-[300vh] bg-neutral-950 font-inter overflow-hidden  "' ref={container} >
      <div className="nav px-5 flex items-center w-full justify-between  pt-6">
        <div className="  font-bold text-2xl px-6 text-neutral-50 bg-clip-text  text-transparent bg-gradient-to-r from-[#F27500] from-[10%] to-neutral-100 to-[45%] contrast-125 w-[230px]   ">Thrive</div>
        <div className='flex items-center gap-[10px]  px-2 py-1   border border-white/10 rounded-3xl backdrop-blur-xl z-20 bg-black/10 '>
           <div className='text-[#F27500] cursor-pointer bg-[#F27500]/10 py-1 px-3 rounded-3xl contrast-125'>Features</div>
           <div className='text-white/25 cursor-pointer py-1 px-3 hover:text-[#F27500]/55 rounded-3xl  transition-all duration-150 '>How it works</div>
           <div className='text-white/25 cursor-pointer py-1 px-3 hover:text-[#F27500]/55 rounded-3xl  transition-all duration-150'>Pricing</div>
           <div className='text-white/25 cursor-pointer py-1 px-3 hover:text-[#F27500]/55 rounded-3xl  transition-all duration-150'>About</div>
        </div>
        <div className='flex items-center gap-3  '>
            <div className='px-3 py-1 rounded-2xl  text-neutral-50 tracking-[-0.12px] transition-all duration-150 cursor-pointer hover:bg-white/10'>Blog</div>
            <div className='flex bg-gradient-to-b from-white/20 to-white/30 backdrop-blur-sm  px-3 py-1 rounded-2xl tracking-[-0.12px] text-white cursor-pointer  transition-colors duration-300 '>Download App</div>
        </div>
       </div>
       <div className='absolute  top-[0px]  w-[1400px] h-[1300px] 
        bg-[conic-gradient(from_0deg_at_50%_-2%,#0a0a0a_40%,rgb(242,117,0,0.18)_49%,rgb(242,117,0,0.18)_50%,rgb(242,117,0,0.18)_52%,#0a0a0a_60%)]
        opacity-30  backdrop-contrast-200  rounded-[9999px] pointer-events-none origin-[50%_0%] animate-spotlight'></div>
        <Particles />
       
       <div className='relative mt-[280px] max-w-[1400px] w-full mx-auto flex flex-col items-center  h-full    '>
        
              <div className="lines absolute  w-[1px] left-[240px] top-[-200px] h-[100vh] bg-gradient-to-b from-transparent from-[-10%]  to-[70%] via-[#F27500]/10 via-[28%]  to-transparent rounded-2xl"></div>
              <div className="lines absolute w-[1px] right-[240px] top-[-200px] h-[100vh] bg-gradient-to-b from-transparent from-[-10%]  to-[70%] via-[#F27500]/10 via-[28%]  to-transparent rounded-2xl"></div>
              <div className="lines absolute w-[1px] left-[360px] top-[-200px] h-[100vh] bg-gradient-to-b from-transparent from-[-10%]  to-[70%] via-[#F27500]/10 via-[28%]   to-transparent rounded-2xl"></div>
              <div className="lines absolute w-[1px] right-[360px] top-[-200px] h-[100vh] bg-gradient-to-b from-transparent from-[-10%]  to-[70%] via-[#F27500]/10 via-[28%]   to-transparent rounded-2xl"></div>
              <div className="leftLine absolute h-[1px]  top-[-48px] w-[100vw] bg-gradient-to-r from-transparent from-[9%] via-[#F27500]/10  to-[89%]  to-transparent"></div>
              <div className="leftLine absolute h-[1px]  top-[140px] w-[100vw] bg-gradient-to-r from-transparent from-[9%] via-[#F27500]/10  to-[89%]  to-transparent"></div>


          <div className='flex flex-col items-center gap-10'>
            <div className="texts flex flex-col gap-3 pb-4 items-center bg-clip-text  text-transparent bg-gradient-to-r from-neutral-100  from-[10%] to-[#F27500] to-[95%] contrast-125 ">
                    <span className=" text-7xl  font-semibold  "  >Eternal Wisdom,</span>
                    <span className="text1  text-neutral-50  contrast-125 font-normal text-lg">for Today's Mind</span>
            </div>
            <div className='flex flex-col items-center gap-10'>
               <div className="secondText   text-neutral-50 font-normal contrast-50 brightness-50  text-lg max-w-[500px] text-center">Experience meditation reimagined through AI guidance, <br /><span className='thirdText  '>making mindfulness a natural part of your day</span> </div>
               
                 
                  <div  className=" flex px-3 py-2 mt-5 gap-1 items-center border border-[#F27500]/35  bg-black/5 rounded-3xl overflow-hidden ">
                    <img src="/apple.svg" alt="Apple Logo" height={24} width={24} className='svg' />
                    <div className="btnText flex flex-col items-start  text-neutral-50  ">
                        <div className=" font-light text-[10px] leading-3   ">Download on the</div>
                        <div className=" font-semibold leading-5 ">APP STORE</div>
                    </div>
                </div>
               
               
              
            </div>
          </div>
          <svg width="1300" height="380px" className="mt-2   " viewBox="0 0 878 10" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <div className="grid-cols-10  grid items-center  secondSectionAnimate hideSecond">
                <div className="col-span-3 flex flex-col h-[880px] pt-20 items-start  gap-[200px]  ">
                  <div className=" flex items-start max-w-[350px]  firstCard ">
                    <div className="flex px-4 py-5 items-start border-[1.7px] max-w-[350px] w-full group relative border-neutral-50/50  bg-gradient-to-b from-neutral-950 from-[-17%] via-[#f97316]/25 via-20% cursor-pointer  to-black to-[68%]  transition-all duration-500  rounded-xl ">
                    <div className="absolute inset-0  opacity-0 bg-gradient-to-b from-transparent from-[45%] to-[#f97316]/10 to-[75%] group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="flex flex-col items-start gap-5 w-full   ">
                            <div className="flex flex-col gap-5 w-full">
                                <div className="p-2 items-center justify-center flex border border-neutral-50/50  max-w-[50px] rounded-xl">
                                  <svg width="32px" height="32px" viewBox="0 0 24 24" stroke-width="1" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M7 14C5.34315 14 4 15.3431 4 17C4 18.6569 5.34315 20 7 20C7.35064 20 7.68722 19.9398 8 19.8293" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.26392 15.6046C2.9243 14.9582 2.00004 13.587 2.00004 12C2.00004 10.7883 2.53877 9.70251 3.38978 8.96898" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.42053 8.8882C3.1549 8.49109 3 8.01363 3 7.5C3 6.11929 4.11929 5 5.5 5C6.06291 5 6.58237 5.18604 7.00024 5.5" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.23769 5.56533C7.08524 5.24215 7 4.88103 7 4.5C7 3.11929 8.11929 2 9.5 2C10.8807 2 12 3.11929 12 4.5V20" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 20C8 21.1046 8.89543 22 10 22C11.1046 22 12 21.1046 12 20" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 7C12 8.65685 13.3431 10 15 10" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.6102 8.96898C21.4612 9.70251 22 10.7883 22 12C22 12.7031 21.8186 13.3638 21.5 13.9379" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5795 8.8882C20.8451 8.49109 21 8.01363 21 7.5C21 6.11929 19.8807 5 18.5 5C17.9371 5 17.4176 5.18604 16.9998 5.5" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 4.5C12 3.11929 13.1193 2 14.5 2C15.8807 2 17 3.11929 17 4.5C17 4.88103 16.9148 5.24215 16.7623 5.56533" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 22C12.8954 22 12 21.1046 12 20" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5 20.5L22 22" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 18.5C16 19.8807 17.1193 21 18.5 21C19.1916 21 19.8175 20.7192 20.2701 20.2654C20.7211 19.8132 21 19.1892 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5Z" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <div className=" font-medium text-2xl text-neutral-300 leading-[32px] w-full ">Your AI friend on the path <br /> to inner peace</div>
                            </div>
                            <div className="h-[1.5px] bg-gradient-to-l from-transparent to-orange-900/80 rounded-full w-full"></div>
                            <div className=" font-light text-neutral-50 ">Let our AI create the perfect meditation just for you each day. Get personalized sessions based on your mood.</div>
                        </div>
                        <div className="flex flex-col h-[237px] w-[40px] max-w-max justify-between items-end">
                            <div className="w-1 h-1 bg-orange-100 rounded-full"></div>
                            <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                        </div>
                    </div>     
                  </div>
                 <div className="flex items-star max-w-[350px] fourthCard w-full    ">
                    <div className="flex px-4 py-5 items-start border-[1.7px] w-full group relative max-w-[350px] border-neutral-50/50  bg-gradient-to-b from-neutral-950 from-[-17%] via-[#f97316]/25 cursor-pointer via-20%  to-black to-[68%] rounded-xl ">
                    <div className="absolute inset-0  opacity-0 bg-gradient-to-b from-transparent from-[45%] to-[#f97316]/10 to-[75%] group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex flex-col items-start gap-5 w-full ">
                            <div className="flex flex-col gap-5 w-full">
                                <div className="p-2 items-center justify-center flex border border-neutral-50/50  max-w-[50px] rounded-xl">
                                  <svg fill="#ffffff" height="32px" width="32px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 501.368 501.368" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M120.995,255.996h248.853c54.933,0,99.52-43.093,99.52-96s-44.693-96-99.52-96H127.075 c-6.08-35.84-40.853-59.627-76.693-51.84C18.275,19.089-3.485,49.809,0.462,82.343c4.48,36.48,38.4,61.44,74.24,55.467 c26.88-4.587,47.893-25.6,52.48-52.48h242.773c43.093,0,78.187,33.493,78.187,74.667c0,41.173-35.093,74.667-78.187,74.667 h-248.96c-54.933,0-99.627,43.093-99.627,96s44.693,96,99.52,96h173.333l-45.653,45.76c-4.267,4.053-4.373,10.88-0.213,15.04 c4.16,4.16,10.88,4.373,15.04,0.213c0.107-0.107,0.213-0.213,0.213-0.213l63.893-63.893c4.16-4.16,4.16-10.88,0-15.04l-63.893-64 c-4.267-4.053-10.987-3.947-15.04,0.213c-3.947,4.16-3.947,10.667,0,14.827l45.76,45.76H120.995 c-43.2,0-78.293-33.493-78.293-74.667S77.795,255.996,120.995,255.996z M64.035,117.223c-23.573,0-42.667-19.093-42.667-42.667 c0-23.573,19.093-42.667,42.667-42.667c23.573,0,42.667,19.093,42.667,42.667C106.702,98.129,87.608,117.223,64.035,117.223z"></path> <path d="M437.368,351.889c-35.307,0-64,28.693-64,64s28.693,64,64,64s64-28.693,64-64S472.782,351.996,437.368,351.889z M437.368,458.556c-23.573,0-42.667-19.093-42.667-42.667s19.093-42.667,42.667-42.667s42.667,19.093,42.667,42.667 S460.942,458.556,437.368,458.556z"></path> </g> </g> </g> </g></svg>
                                 </div>
                                <div className=" font-medium text-2xl text-neutral-300 leading-[32px] ">Track your happiness journey</div>
                            </div>
                            <div className="h-[1.5px] bg-gradient-to-l from-transparent to-orange-900/80 w-full"></div>
                            <div className=" font-light text-neutral-50 ">Understand your emotions with colorful mood tracking and daily reflections. Watch your well-being. </div>
                        </div>
                        <div className="flex flex-col h-[237px] w-[40px] justify-between max-w-max items-end">
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
                    <div className="flex px-4 py-5 items-start border-[1.7px] group relative w-full max-w-[350px] border-neutral-50/50  bg-gradient-to-b from-neutral-950 from-[-17%] via-[#f97316]/25 cursor-pointer via-20%  to-black to-[68%]  rounded-xl ">
                      <div className="absolute inset-0  opacity-0 bg-gradient-to-b from-transparent from-[45%] to-[#f97316]/10 to-[75%] group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="flex flex-col items-start gap-5 w-full ">
                            <div className="flex flex-col gap-5">
                                <div className="p-2 items-center justify-center flex border border-neutral-50/50  max-w-[50px] rounded-xl">
                                  <svg fill="#ffffff" height="30px" width="32px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 60 60" ><g id="SVGRepo_bgCarrier" stroke-width="1"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M51.676,21.931C45.917,16.171,38.26,13,30.115,13s-15.802,3.171-21.561,8.931l-7.941,7.941l7.711,7.711 c5.759,5.759,13.416,8.931,21.561,8.931s15.802-3.171,21.561-8.931l7.941-7.941L51.676,21.931z M50.031,36.168 c-5.381,5.381-12.536,8.345-20.146,8.345S15.12,41.55,9.738,36.168l-6.297-6.297l6.527-6.527C15.35,17.963,22.505,15,30.115,15 s14.765,2.963,20.146,8.345l6.297,6.297L50.031,36.168z"></path> <path d="M29.671,16.97c-7.065,0-12.813,5.748-12.813,12.813s5.748,12.813,12.813,12.813c7.064,0,12.813-5.748,12.813-12.813 S36.735,16.97,29.671,16.97z M29.671,40.596c-5.963,0-10.813-4.851-10.813-10.813c0-5.962,4.851-10.813,10.813-10.813 c5.962,0,10.813,4.851,10.813,10.813C40.483,35.745,35.633,40.596,29.671,40.596z"></path> <path d="M29.265,11.706c0.092,0.093,0.203,0.166,0.326,0.217C29.713,11.973,29.842,12,29.973,12s0.26-0.027,0.382-0.077 c0.123-0.051,0.233-0.124,0.326-0.217l3.999-3.999c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-2.293,2.293V1 c0-0.552-0.447-1-1-1s-1,0.448-1,1v7.586L26.68,6.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L29.265,11.706z"></path> <path d="M30.681,48.294c-0.092-0.093-0.203-0.166-0.326-0.217c-0.244-0.101-0.52-0.101-0.764,0 c-0.123,0.051-0.233,0.124-0.326,0.217l-3.999,3.999c-0.391,0.391-0.391,1.023,0,1.414C25.461,53.902,25.717,54,25.973,54 s0.512-0.098,0.707-0.293l2.293-2.293V59c0,0.552,0.447,1,1,1s1-0.448,1-1v-7.586l2.293,2.293C33.461,53.902,33.717,54,33.973,54 s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L30.681,48.294z"></path> </g> </g></svg>

                                </div>
                                <div className=" font-medium text-2xl text-neutral-300 leading-[32px] ">Mindful focus, better results </div>
                            </div>
                            <div className="h-[1.5px] bg-gradient-to-l from-transparent to-orange-900/80 w-full"></div>
                            <div className=" font-light text-neutral-50 ">Enhance your daily productivity with focused sessions tailored to your work style. Stay in the zone.</div>
                        </div>
                        <div className="flex flex-col h-[237px] w-[40px] justify-between  items-end">
                            <div className="w-1 h-1 bg-slate-100 rounded-full"></div>
                            <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                        </div>
                    </div>
                 </div>
                 <div className="flex items-star max-w-[350px] w-full fourthCard    ">
                    <div className="flex px-4 py-5 items-start group relative border-[1.7px] max-w-[350px] w-full border-neutral-50/50  bg-gradient-to-b from-neutral-950 from-[-17%] via-[#f97316]/25 cursor-pointer via-20%  to-black to-[68%] rounded-xl ">
                    <div className="absolute inset-0  opacity-0 bg-gradient-to-b from-transparent from-[45%] to-[#f97316]/10 to-[75%] group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="flex flex-col items-start gap-5 w-full">
                            <div className="flex flex-col gap-5">
                                <div className="p-2 items-center justify-center flex border border-neutral-50/50  max-w-[50px] rounded-xl">
                                    <svg fill="#ffffff" height="32px" width="32px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M503.284,241.523c-30.681-1.073-60.701,3.437-88.907,13.074c-0.561-30.125-6.613-59.657-18.053-87.969 c-1.869-4.623-7.125-6.857-11.757-4.99c-17.868,7.219-34.602,16.337-50.073,27.239c-18.572-36.63-42.787-70.01-72.119-99.331 c-3.528-3.526-9.244-3.526-12.769,0.001c-29.345,29.345-53.558,62.72-72.116,99.316c-15.462-10.895-32.189-20.009-50.052-27.225 c-4.627-1.868-9.887,0.366-11.756,4.99c-11.459,28.358-17.514,57.939-18.059,88.115c-27.821-9.561-57.802-14.304-88.907-13.22 c-4.985,0.175-8.884,4.356-8.71,9.34c4.667,133.635,114.858,239.166,247.549,239.166c2.801,0,5.626-0.051,8.446-0.144 c2.827,0.095,5.639,0.144,8.447,0.144c132.679,0,242.882-105.538,247.548-239.166 C512.168,245.879,508.269,241.697,503.284,241.523z M129.143,182.001c25.446,11.455,48.25,27.185,67.891,46.848 c21.086,21.074,37.623,45.703,49.224,73.233c-7.739,19.991-12.816,40.654-15.183,61.733 c-26.621-45.203-67.137-81.123-115.419-102.079C115.36,234.51,119.886,207.755,129.143,182.001z M18.56,259.432 c57.953,0.248,112.867,21.972,155.494,61.724c42.63,39.753,68.133,93.01,72.42,150.81 C127.006,471.404,27.453,378.57,18.56,259.432z M209.806,216.079c-5.663-5.669-11.575-11.027-17.714-16.083 c16.541-33.356,37.993-63.953,63.901-91.137c25.894,27.165,47.344,57.764,63.898,91.151c-6.133,5.051-12.04,10.402-17.699,16.065 c-18.833,18.823-34.31,40.292-46.193,63.998C244.126,256.379,228.65,234.911,209.806,216.079z M255.964,422.209 c-2.348-8.364-5.12-16.544-8.296-24.517c-0.059-1.929-0.089-3.968-0.089-6.204c0-29.597,5.65-58.577,16.791-86.138 c11.67-28.877,28.691-54.616,50.594-76.505c19.65-19.662,42.457-35.391,67.901-46.844c9.235,25.698,13.759,52.392,13.485,79.556 c-25.721,11.127-49.616,26.708-70.719,46.388C291.849,339.446,268.054,378.817,255.964,422.209z M265.527,471.965 c4.288-57.799,29.788-111.056,72.419-150.81c42.631-39.755,97.536-61.479,155.495-61.724 C484.546,378.577,385.005,471.415,265.527,471.965z"></path> </g> </g> <g> <g> <circle cx="14.088" cy="206.106" r="9.031"></circle> </g> </g> <g> <g> <circle cx="124.058" cy="105.841" r="9.031"></circle> </g> </g> <g> <g> <circle cx="255.992" cy="31.002" r="9.031"></circle> </g> </g> <g> <g> <circle cx="387.949" cy="105.841" r="9.031"></circle> </g> </g> <g> <g> <circle cx="497.896" cy="206.106" r="9.031"></circle> </g> </g> </g></svg>
                                </div>
                                <div className=" font-medium text-2xl text-neutral-300 leading-[32px] ">Stress-free moments ahead</div>
                            </div>
                            <div className="h-[1.5px] bg-gradient-to-l from-transparent to-orange-900/80 w-full"></div>
                            <div className=" font-light text-neutral-50 ">Find your calm in minutes with gentle breathing exercises and peaceful breaks.</div>
                        </div>
                        <div className="flex flex-col h-[237px] w-[40px] justify-between  items-end">
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
