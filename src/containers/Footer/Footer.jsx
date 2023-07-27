import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
  ImGithub,
} from 'react-icons/im';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1280px] mx-auto">
        {/* register form */}
        <div className="discount flex flex-col md:flex-row items-center  py-24 px-8 gap-36 border-b-[1px] border-b-white">
          {/* content */}
          <div className="info  lg:p-8 lg:p16 flex flex-col gap-4 flex-1 text-center">
            <h2 className="uppercase text-3xl md:text-4xl  font-light  ">
              get 20% discount on your first purchase
            </h2>
            <p className="text-secondary">
              Just Sign Up & Register it now to become member of TemplateJungle.
            </p>
          </div>
          {/* form */}
          <form onSubmit={(e) => e.preventDefault()} className="flex-1">
            <div className="flex flex-col  justify-center p-6 gap-4">
              <input
                type="text"
                placeholder="Your email address"
                className="p-4 rounded-md"
              />
              <button className="p-4 rounded-md bg-[#83A9AC]  uppercase font-semibold text-sm">
                Register it now
              </button>
            </div>
          </form>
        </div>

        {/* links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6    py-16  px-8 xl:px-0">
          <div className=" flex flex-col mr-auto lg:col-span-2">
            <h2 className="font-secondary text-4xl md:text-6xl uppercase">
              classi.
            </h2>
            {/* social links */}
            <ul className="flex flex-row items-center justify-between gap-4 mt-8">
              <li>
                <a target="_blanck" href="https://www.facebook.com">
                  <ImFacebook />
                </a>
              </li>
              <li>
                <a target="_blanck" href="https://www.twitter.com">
                  <ImTwitter />
                </a>
              </li>
              <li>
                <a target="_blanck" href="https://www.pinterest.com">
                  <ImPinterest />
                </a>
              </li>
              <li>
                <a target="_blanck" href="https://www.instagram.com">
                  <ImInstagram />
                </a>
              </li>
              <li>
                <a target="_blanck" href="https://www.youtube.com">
                  <ImYoutube />
                </a>
              </li>
            </ul>
          </div>

          {/* */}
          <div className="text-sm ">
            <h3 className="mb-10">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Offers</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="text-sm ">
            <h3 className="mb-10">About</h3>
            <ul className="flex flex-col gap-2 ">
              <li>
                <a href="#">How it Work</a>
              </li>
              <li>
                <a href="#">Our Packages</a>
              </li>
              <li>
                <a href="#">Promotions</a>
              </li>
              <li>
                <a href="#">Refer A friend</a>
              </li>
            </ul>
          </div>

          <div className="text-sm ">
            <h3 className="mb-10">Help Center</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#">Payments</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Checkout</a>
              </li>
              <li>
                <a href="#">Other issues</a>
              </li>
            </ul>
          </div>

          <div className="text-sm col-span-2  md:col-span-1 ">
            <h3 className="mb-10">Our NewsLetter</h3>
            <div className="flex flex-col gap-2">
              <p>
                Subscribe To Our Newsletter To Get Updates About Our Grand
                Offers.
              </p>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="p-3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="py-16 border-t-2 border-t-secondary/40">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between flex-col gap-4 md:gap-0 md:flex-row text-secondary px-6 xl:px-0">
          <p>
            &copy; {new Date().getFullYear()} Classi Furnitures. All Rights
            Reserved.
          </p>
          <p className="leading-6">
            Designed By TemplatesJungle <br />
            and Coded by{' '}
            <a href="https://github.com/MedtheVorg" target="_blanck">
              <div className="inline-flex items-center gap-2 underline">
                <ImGithub /> Mohamed Lem
              </div>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
