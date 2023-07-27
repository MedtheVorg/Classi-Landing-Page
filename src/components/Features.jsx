// import icons
import { BsCart3, BsShieldCheck, BsTag } from 'react-icons/bs';
import { BiDollarCircle } from 'react-icons/bi';
import { SlBadge } from 'react-icons/sl';

const Features = () => {
  return (
    <section className="max-w-[1280px] mx-auto py-16">
      <div className=" mx-auto container grid p-8  xlg:px-0 lg:py-16 gap-10  grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 place-items-center text-[1rem]">
        {/* card */}
        <div className="flex flex-col  hover:scale-105 hover:shadow-xl duration-200 transition-all py-4 rounded-sm">
          <BsCart3 size={30} />
          <h3 className="font-bold mt-8 mb-3">Free Delivery</h3>
          <p className="text-[#AEACA9]">
            Lorem ipsum, dolor sit amet con sectetur adipisicing elit. Tenetur,
            eum!
          </p>
        </div>
        {/* card */}
        <div className="flex flex-col  hover:scale-105 hover:shadow-xl duration-200 transition-all py-4 rounded-sm">
          <BsShieldCheck size={30} />
          <h3 className="font-bold mt-8 mb-3">100% secure payment</h3>
          <p className="text-[#AEACA9]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
            eum!
          </p>
        </div>
        {/* card */}
        <div className="flex flex-col  hover:scale-105 hover:shadow-xl duration-200 transition-all py-4 rounded-sm">
          <SlBadge size={30} />
          <h3 className="font-bold mt-8 mb-3">Quality guarantee</h3>
          <p className="text-[#AEACA9]">
            Lorem ipsum, dolor sit amet con sectetur adipisicing elit. Tenetur,
            eum!
          </p>
        </div>
        {/* card */}
        <div className="flex flex-col  hover:scale-105 hover:shadow-xl duration-200 transition-all py-4 rounded-sm">
          <BiDollarCircle size={30} />
          <h3 className="font-bold mt-8 mb-3">guaranteed savings</h3>
          <p className="text-[#AEACA9]">
            Lorem ipsum, dolor sit amet con sectetur adipisicing elit. Tenetur,
            eum!
          </p>
        </div>
        {/* card */}
        <div className="flex flex-col  hover:scale-105 hover:shadow-xl duration-200 transition-all py-4 rounded-sm">
          <BsTag size={30} />
          <h3 className="font-bold mt-8 mb-3">Daily offers</h3>
          <p className="text-[#AEACA9]">
            Lorem ipsum, dolor sit amet con sectetur adipisicing elit. Tenetur,
            eum!
          </p>
        </div>
      </div>
    </section>
  );
};
export default Features;
