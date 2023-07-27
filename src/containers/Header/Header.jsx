import { useState } from 'react';
// import icons
import { BsPerson } from 'react-icons/bs';
import { BiShoppingBag } from 'react-icons/bi';
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import framer motion
import { motion } from 'framer-motion';

// scroll hook
import { useScrollPosition } from '../../hooks/useScrollPosition';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const scrollPosition = useScrollPosition();

  function handleMenuToggled() {
    setToggleMenu((prev) => !prev);
  }
  return (
    <header
      className={`fixed top-0 left-0 w-full font-primary  z-10  transition-all duration-300   shadow-md  ${
        scrollPosition > 100
          ? 'h-[60px] bg-white text-black p-4 '
          : 'h-[100px] text-white p-12 '
      }`}
    >
      {/* wrapper */}
      <div className="wrapper  h-full flex flex-row items-center justify-between gap-x-16   ">
        <div className="logo ">
          <a href="/" className="font-secondary text-3xl">
            CLASSI.
          </a>
        </div>
        <div className="hidden lg:flex flex-row items-center justify-between flex-1 px-8 ">
          {/* navigation links */}
          <nav>
            <ul className="flex items-center gap-x-12 uppercase font-semibold text-sm tracking-widest">
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">shop</a>
              </li>
              <li>
                <a href="#">blog</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
              <li>
                <a href="#">offers</a>
              </li>
            </ul>
          </nav>

          {/* utilities links */}
          <ul className="flex gap-x-12 items-center">
            <li>
              <a href="#">
                <BsPerson size={20} />
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineHeart size={20} />
              </a>
            </li>
            <li>
              <a href="#">
                <BiShoppingBag size={20} />
              </a>
            </li>
          </ul>
        </div>

        {/* mobile nav */}
        <nav className="lg:hidden  ">
          <AiOutlineMenu
            size={30}
            role="button"
            className="cursor-pointer hover:scale-105"
            onClick={handleMenuToggled}
          />

          <motion.div
            initial={{ x: '100%', opacity: 1 }}
            animate={toggleMenu ? { x: '0', opacity: 1 } : ''}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 right-0  h-screen w-full  bg-black/90 z-40 text-white  "
          >
            <AiOutlineClose
              size={50}
              role="button"
              className="absolute right-10 top-10"
              onClick={handleMenuToggled}
            />
            <ul className=" flex flex-col justify-center items-center uppercase text-3xl gap-y-8 h-full">
              <li className="w-full text-center hover:scale-95 hover:border-white hover:border-[1px] transition-all py-2">
                <a
                  href="#"
                  className="inline-block w-full transition hover:scale-105"
                >
                  home
                </a>
              </li>
              <li className="w-full text-center hover:scale-95 hover:border-white hover:border-[1px] transition-all py-2">
                <a
                  href="#"
                  className="inline-block w-full transition hover:scale-105"
                >
                  shop
                </a>
              </li>
              <li className="w-full text-center hover:scale-95 hover:border-white hover:border-[1px] transition-all py-2">
                <a
                  href="#"
                  className="inline-block w-full transition hover:scale-105"
                >
                  blog
                </a>
              </li>
              <li className="w-full text-center hover:scale-95 hover:border-white hover:border-[1px] transition-all py-2">
                <a
                  href="#"
                  className="inline-block w-full transition hover:scale-105"
                >
                  contact
                </a>
              </li>
              <li className="w-full text-center hover:scale-95 hover:border-white hover:border-[1px] transition-all py-2">
                <a
                  href="#"
                  className="inline-block w-full transition hover:scale-105"
                >
                  offers
                </a>
              </li>
            </ul>
          </motion.div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
