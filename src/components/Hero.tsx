"use client"
import { AnimatedGradientTextDemo } from './animatedtext';

export const Hero = () => {
  return (
    <div className="bg-blue-900 text-white bg-[linear-gradient(to_bottom,#1e3a8a,#1e40af_34%,#3b82f6_65%,#60a5fa_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-blue-900 left-1/2 -translate-x-1/2 border border-[#60a5fa] bg-[radial-gradient(closest-side,#1e3a8a_82%,#3b82f6)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
    <div className="container relative">
      <div className="flex items-center justify-center -mt-10">
        <AnimatedGradientTextDemo/>
      </div>
      <div className="flex justify-center mt-8 ">
      <div className="inline-flex relative">
      <h1 className='text-7xl sm:text-9xl font-bold tracking-tightner text-center inline-flex'>Get your IOT <br/>DASHBOARD</h1>      </div>
      </div>
      <div className="flex justify-center">
      <p className='text-xl text-center mt-8 max-w-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit quod dicta, nisi autem dignissimos consequatur? Unde saepe eius nam. Minima at quaerat non quae qui consequatur hic nam neque earum.</p>
      </div>
      <div className="flex justify-center mt-8">
      <button className='bg-white text-black py-3 px-5 rounded-lg font-medium'>Book a Call</button>
      </div>


    </div>
    

    </div>
  )
};
