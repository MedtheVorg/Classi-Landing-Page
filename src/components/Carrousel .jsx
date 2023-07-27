import img1 from '../assets/images/livingroom.jpg';

const Carrousel = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="carrousel flex overflow-x-scroll">
        <div className="card   border-2 border-red-400 h-[300px] w-[50%]">
          <img src="" alt="" />
          <div>
            <p>study table set</p>
            <p>$120.00</p>
          </div>
        </div>
        <div className="card   border-2 border-red-400 h-[300px] w-[50%]">
          <img src="" alt="" />
          <div>
            <p>study table set</p>
            <p>$120.00</p>
          </div>
        </div>
        <div className="card   border-2 border-red-400 h-[300px] w-[50%]">
          <img src="" alt="" />
          <div>
            <p>study table set</p>
            <p>$120.00</p>
          </div>
        </div>
        <div className="card   border-2 border-red-400 h-[300px] w-[50%]">
          <img src="" alt="" />
          <div>
            <p>study table set</p>
            <p>$120.00</p>
          </div>
        </div>
        <div className="card   border-2 border-red-400 h-[300px] w-[50%]">
          <img src="" alt="" />
          <div>
            <p>study table set</p>
            <p>$120.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carrousel;
