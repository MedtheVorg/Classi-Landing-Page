import img1 from '../assets/images/arrivals/img-1.jpg';
import img2 from '../assets/images/arrivals/img-2.jpg';
import img3 from '../assets/images/arrivals/img-3.jpg';

const Arrivals = () => {
  return (
    <section>
      <div className="max-w-[1280px] mx-auto">
        <h2 className="capitalize font-medium text-2xl p-4">new arrivals</h2>
        {/* wrapper */}
        <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-1 gap-6 lg:gap-16 ">
          {/* card */}
          <div className="p-4 flex flex-col">
            <img src={img1} alt="" className="object-cover flex-1" />
            <div className="flex items-center justify-between p-2 py-6 text-sm lg:text-base">
              <p className="capitalize font-normal">study table set</p>
              <p className="text-[#AEACA9]">$120.00</p>
            </div>
          </div>
          {/* card */}
          <div className="p-4 flex flex-col">
            <img src={img2} alt="" className="object-cover flex-1" />
            <div className="flex items-center justify-between p-2 py-6 text-sm lg:text-base">
              <p className="capitalize font-normal">study table set</p>
              <p className="text-[#AEACA9]">$120.00</p>
            </div>
          </div>
          {/* card */}
          <div className="p-4 flex flex-col">
            <img src={img3} alt="" className="object-cover  flex-1" />
            <div className="flex items-center justify-between p-2 py-6 gap text-sm lg:text-base">
              <p className="capitalize font-normal">study table set</p>
              <p className="text-[#AEACA9]">$120.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Arrivals;
