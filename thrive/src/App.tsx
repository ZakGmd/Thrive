import './App.css'

function App() {


  return (
    <>
    <div className='flex flex-col w-full h-[100vh] bg-neutral-950 font-inter'>
      <div className=" flex items-center justify-between px-3 pt-3">
        <div className=" font-bold text-2xl px-6 text-slate-50 bg-clip-text py-2 text-transparent bg-gradient-to-r from-[#F27500] from-[10%] to-neutral-100 to-[45%] contrast-125  ">Thrive</div>
        <div className='flex items-center text-white gap-10'>
           <div className='text-[#F27500] cursor-pointer'>Features</div>
           <div className='text-white/25 cursor-pointer hover:text-[#F27500]/55 transition-all duration-150 '>How it works</div>
           <div className='text-white/25 cursor-pointer hover:text-[#F27500]/55 transition-all duration-150'>Pricing</div>
           <div className='text-white/25 cursor-pointer hover:text-[#F27500]/55 transition-all duration-150'>About</div>
        </div>
        <div className='flex items-center gap-3 '>
            <div className='px-3 py-1 rounded-2xl  text-white tracking-[-0.12px] transition-all duration-150 cursor-pointer hover:bg-white/10'>Blog</div>
            <div className='flex bg-gradient-to-b from-white/20 to-white/30 backdrop-blur-sm  px-3 py-1 rounded-2xl tracking-[-0.12px] text-white cursor-pointer  transition-colors duration-300 '>Download Soon</div>
        </div>
       </div>
       <div className='relative mt-[180px] '>
          
       </div>
    </div>
         
    </>
  )
}

export default App
