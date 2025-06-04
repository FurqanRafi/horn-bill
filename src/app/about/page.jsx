import Image from 'next/image'
import about from '@/assets/about.jpg' 
import Welcome from '@/Components/Welcome'
import Vision from '@/Components/Vision'
import Who from '@/Components/Who'
import Commit from '@/Components/Commit'



const page = () => {
  return (
    <div className="w-full relative">
      
      
      <div className="w-full lg:h-[80vh] relative -mt-20">
        <Image src={about} alt="Aboutbanner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center  text-center px-4 max-w-3xl w-full h-full">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          About Us
        </h1>
      </div>
      </div>
      <Welcome />
      <Vision />
      <Who />
      <Commit />
      
    </div>
  )
}

export default page