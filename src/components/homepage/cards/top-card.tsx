import { motion } from "framer-motion";
import Image from "next/image";
import PrimaryButton from "../../button/primary-button";


export default function TopCard() {

  const date = new Date();
  const yearsExperience = date.getFullYear() - 2018;  
  
  const textAnimationTop = {
    type: "spring", 
    stiffness: 60, 
    damping: 9
  }

  return (
    <div className="container mx-auto flex w-full lg:flex-row flex-col text-secondary relative">
      <div className="flex flex-col lg:w-4/12 2xl:w-3/12 xl:space-y-3 w-full space-y-2 self-center lg:py-12 order-1 z-20">
        <motion.h3 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={textAnimationTop} className="text-xl xl:text-2xl font-bold">Hello, I&apos;m</motion.h3>
        <h1 className="font-bold"><motion.span initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={textAnimationTop} className="xl:text-5xl text-4xl mb-3 white-block">Bryce Hardie</motion.span> <motion.span initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={textAnimationTop} className="text-xl xl:text-2xl space-y-1 block">a Passionate <br></br>Front-end Developer</motion.span></h1>
        <motion.h2 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={textAnimationTop} className="text-md font-bold hero-paragraph">A dedicated Front-end Developer with a passion for creating pixel perfect fast loading websites.</motion.h2>
        <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={textAnimationTop}>
          <PrimaryButton className="inline-block mt-1" text="View portfolio" url="/portfolio"/>
        </motion.div>
      </div>
      <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{type: "spring", stiffness: 300, damping: 100}} className="flex flex-col w-full lg:w-6/12 2xl:w-8/12 self-end items-center lg:order-2 order-3 lg:relative absolute bottom-0 z-10">
        <Image
            className="relative w-11/12 lg:w-full"
            src="/portrait-photo.png"
            alt="Portrait photo"
            width={0}
            height={0}
            style={{ height: 'auto' }}
            priority
          />
      </motion.div>
      <div className="flex flex-col lg:w-2/12 2xl:w-1/12 w-full space-y-8 self-center lg:items-end lg:py-12 py-8 pb-32 lg:order-3 order-2 z-20">
        <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={textAnimationTop} className="hero-points">
          <h3 className="xl:text-5xl text-4xl font-bold">{yearsExperience}</h3>
          <p className="text-sm font-bold">Years of Experience</p>
        </motion.div>
        <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={textAnimationTop} className="hero-points">
          <h3 className="xl:text-5xl text-4xl font-bold">Tech</h3>
          <ul className="text-sm font-bold">
            <li>Javascript</li>
            <li>React</li>
            <li>PHP</li>
            <li>C#</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}