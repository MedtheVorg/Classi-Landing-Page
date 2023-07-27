import img4 from '../assets/images/lamps.jpg';
import img2 from '../assets/images/chairs.jpg';
import img3 from '../assets/images/singlechair.jpg';
import img1 from '../assets/images/livingroom.jpg';

const Gallery = () => {
  return (
    <section>
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-custom gap-16  px-8 xlg:px-0">
        <div className="relative group overflow-hidden md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-3 rounded-lg">
          <img
            src={img1}
            alt=""
            className="object-cover w-full h-full aspect-square group-hover:scale-105 transition-all duration-300"
          />
          <div className="absolute bottom-[10%] left-[10%] text-white font-bold uppercase tracking-[0.5rem] text-2xl :">
            <p>living room</p>
          </div>
        </div>
        <div className="relative overflow-hidden group md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-3 rounded-lg">
          <img
            src={img2}
            alt=""
            className="object-cover w-full h-full aspect-square group-hover:scale-105 transition-all duration-300 object-bottom"
          />
          <div className="absolute bottom-[10%] left-[10%] text-white font-bold uppercase tracking-[0.5rem] text-2xl">
            <p>bedroom</p>
          </div>
        </div>
        <div className="relative overflow-hidden group md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-5 rounded-lg">
          <img
            src={img3}
            alt=""
            className="object-cover w-full h-full aspect-square group-hover:scale-105 transition-all duration-300 "
          />
          <div className="absolute bottom-[10%] left-[10%] text-white ">
            <p className="font-bold uppercase tracking-[0.5rem] text-2xl">
              kitchen
            </p>
            <a
              href="#"
              className="font-normal tracking-wide underline underline-offset-2 capitalize mt-2"
            >
              view all products
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden group md:col-start-3 md:col-end-5 md:row-start-3 md:row-end-5 rounded-lg">
          <img
            src={img4}
            alt=""
            className="object-cover w-full h-full aspect-square group-hover:scale-105 transition-all duration-300"
          />
          <div className="absolute bottom-[10%] left-[10%] text-white font-bold uppercase tracking-[0.5rem] text-2xl ">
            <p>offices</p>
          </div>
        </div>
      </div>
      <h2 className="p-12 md:py-28 md:px-36 text-center font-light text-2xl leading-[3rem] max-w-[1000px] mx-auto">
        Our lives happen around our furniture. Every day, our bed frames, dining
        tables, dressers, and coffee tables support us, often without thanks and
        appreciation.
      </h2>
    </section>
  );
};
export default Gallery;
