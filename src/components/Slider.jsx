import { useState } from 'react';
//  slider images
import img1 from '../assets/images/lamp.jpg';
import img2 from '../assets/images/chair.jpg';
import img3 from '../assets/images/table.jpg';

// import icons
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';

// import motion
import { motion } from 'framer-motion';
// I'm using url links for now, as the local images are too big and slow when loading
const items = [
  {
    img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    mainText: 'comfort',
    secondaryText: 'classi spells class and comfort',
  },
  {
    img: 'https://images.unsplash.com/photo-1554941829-fcef7b298d5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    mainText: 'Quality',
    secondaryText: 'classi spells class and quality',
  },
  {
    img: 'https://images.unsplash.com/photo-1611306133964-f06d181327fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    mainText: 'Affordable',
    secondaryText: 'classi spells class and Affordable',
  },
];

// custom transition
import { transition1 } from '../transitions';

const globalVariants = {
  hidden: {
    opacity: 0,
    y: '-10%',
  },
  visible: { opacity: 1, y: '0px' },
};
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleRightSliderButtonClicked() {
    setCurrentSlide((prev) => {
      if (prev + 1 > 2) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }
  function handleLeftSliderButtonClicked() {
    setCurrentSlide((prev) => {
      if (prev - 1 < 0) {
        return 2;
      } else {
        return prev - 1;
      }
    });
  }
  function handleDotClicked(index) {
    setCurrentSlide(index);
  }
  return (
    <section className=" bg-slate-800 relative  h-screen ">
      {/* image */}
      <motion.div
        key={items[currentSlide].img}
        variants={globalVariants}
        initial={{ opacity: '0.5', y: '0%' }}
        animate={{ opacity: 1, y: '0%' }}
        exit="hidden"
        style={{ backgroundImage: `url('${items[currentSlide].img}')` }}
        transition={{ duration: 1 }}
        className="w-full h-full bg-left bg-cover "
      ></motion.div>

      {/* content */}

      <div className="absolute top-0 left-0 w-full h-full grid  place-items-center  text-white bg-black/40 ">
        <motion.div
          key={items[currentSlide].secondaryText}
          variants={globalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={transition1}
          className="flex flex-col justify-center items-center gap-y-4  justify-self-center  place-self-end "
        >
          <h1 className="font-bold uppercase text-5xl md:text-7xl lg:text-9xl  xl:text-[10rem]">
            {items[currentSlide].mainText}
          </h1>
          <p className="text-white/60 uppercase text-sm lg:tracking-[0.5rem]">
            {items[currentSlide].secondaryText}
          </p>
          <button className="font-medium uppercase px-10 py-2 border-2 border-white rounded-sm mt-20 transition-colors duration-300 hover:bg-white hover:text-black/80">
            shop now
          </button>
        </motion.div>

        {/* slider controllers */}
        <div className="w-[80%] flex flex-row items-center justify-between ">
          {/* dots */}
          <div className="flex gap-x-2">
            <GoDotFill
              onClick={() => handleDotClicked(0)}
              className={`cursor-pointer ${
                currentSlide == 0 ? 'border-2 border-white rounded-full' : ''
              }`}
              size={20}
            />
            <GoDotFill
              onClick={() => handleDotClicked(1)}
              className={`cursor-pointer ${
                currentSlide == 1 ? 'border-2 border-white rounded-full' : ''
              }`}
              size={20}
            />
            <GoDotFill
              onClick={() => handleDotClicked(2)}
              className={`cursor-pointer ${
                currentSlide == 2 ? 'border-2 border-white rounded-full' : ''
              }`}
              size={20}
            />
          </div>
          {/* arrows */}
          <div className="flex items-center justify-between gap-x-8">
            <div
              className="border-[1px] border-white rounded-full   p-3 lg:p-6  cursor-pointer"
              onClick={handleLeftSliderButtonClicked}
            >
              <BsChevronLeft />
            </div>
            <div
              className="border-[1px] border-white rounded-full   p-3 lg:p-6   cursor-pointer  "
              onClick={handleRightSliderButtonClicked}
            >
              <BsChevronRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Slider;
