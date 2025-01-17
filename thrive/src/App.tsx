import './App.css'

function App() {


  return (
    <>
    <div className='flex flex-col w-full h-[100vh] bg-neutral-950 font-inter'>
      <div className=" flex items-center justify-between px-3 pt-3">
        <div className=" font-bold text-2xl px-6 text-slate-50 ">Thrive</div>
        <div className='flex items-center text-white gap-10'>
           <div>Features</div>
           <div>How it works</div>
           <div>Pricing</div>
           <div>About</div>
        </div>
        <div className='flex items-center gap-2 '>
            <div>Blog</div>
            <div className='flex bg-gradient-to-b from-white/20 to-white/30 backdrop-blur-sm  px-3 py-1 rounded-lg text-white cursor-pointer  transition-colors duration-300 '>Download Soon</div>
        </div>
       </div>
    </div>
         
    </>
  )
}

export default App
