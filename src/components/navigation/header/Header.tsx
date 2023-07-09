'use client';

import JOinUsButton from '@/components/utility/button/JoinUsButton';
import useToggle from '@/lib/hooks/useToggle';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { mainNavList } from '../../utility/navigation/constants';

export interface IHeader {}

const goToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

const Header: React.FC<IHeader> = () => {
  const [isSticky, toggleIsSticky] = useToggle(true);
  const [sidebar, toggleSidebar] = useToggle(false);
  const [isOpen, toggleIsOpen] = useToggle(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        toggleIsSticky();
      } else {
        toggleIsSticky();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toggleIsSticky]);

  return (
    <nav
      className={`flex flex-row items-center justify-between py-8 px-12 fixed top-0 left-0 right-0 w-full z-50 bg-transparent ${
        isSticky ? 'shadow-xl !bg-black' : ''
      }`}
    >
      <Link href="/">
        <Image
          priority={true}
          src="/images/logo/logo.svg"
          alt="company logo"
          className="w-full h-auto"
          width="100"
          height="100"
        />
      </Link>
      <div className="md1200:hidden">
        <DesktopNavigation />
      </div>
      <div className="flex items-center gap-8">
        <div className="flex gap-10">
          <div
            className={`bg-white h-screen w-full flex flex-col top-0 fixed z-[999999999] py-[60px] px-[40px] ease-in-out duration-500  ${
              isOpen ? 'left-0' : '-left-[100%]'
            }`}
            role="mobile_nav"
          >
            <i
              onClick={() => toggleIsOpen()}
              className="fa-solid fa-xmark text-[#ff0336] text-[3.3rem] cursor-pointer self-end"
            ></i>
            <MobileNavigation />
          </div>
          <div
            className={`bg-white min450:w-full h-[100vh] p-[45px] w-[40rem] top-0 flex flex-col fixed z-[999999999] gap-24 overflow-x-hidden ease-in-out duration-[0.5s] ${
              sidebar ? 'left-0' : '-left-[100%]'
            }`}
            role="sidebar_nav"
          >
            <Sidebar toggleSidebar={toggleSidebar} />
          </div>
          <i
            onClick={() => toggleIsOpen()}
            className={`fa-bars custom_bar text-white text-4xl cursor-pointer hover:text-[#ff0336] ease-in duration-200 hidden ml-10`}
            role="toggle_moble_nav"
          ></i>
          <i
            onClick={toggleSidebar}
            role="toggle_sidebar_nav"
            className="fa-regular fa-chart-bar text-white text-4xl cursor-pointer hover:text-[#ff0336] ease-in duration-200"
          ></i>
          <Link onClick={goToTop} href="signup" title="signupbutton">
            <i className="fa-regular fa-user text-white text-4xl cursor-pointer hover:text-[#ff0336] ease-in duration-200"></i>
          </Link>
        </div>
        <JOinUsButton />
      </div>
    </nav>
  );
};

export default Header;

const DesktopNavigation = () => {
  return (
    <>
      <ul className="flex gap-9 text-white text-[16px] font-medium xl:none">
        {mainNavList.map((nav) => (
          <li
            key={nav.id}
            style={{ transition: 'all 0.3s' }}
            className="cursor-pointer hover:text-[#ff0336]"
          >
            <Link onClick={goToTop} href={nav.url}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const MobileNavigation = () => {
  return (
    <>
      <ul className="text-center flex flex-col gap-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        {mainNavList.map((nav) => (
          <li
            key={nav.id}
            className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
          >
            <Link onClick={goToTop} href={nav.url}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const Sidebar = ({ toggleSidebar }: any) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Image
          src="/images/logo/logo-footer.svg"
          alt="side company logo"
          className="w-[13rem] h-auto"
          width="100"
          height="100"
        />
        <i
          onClick={toggleSidebar}
          className="fa-solid fa-xmark text-[#ff0336] text-[3.3rem] cursor-pointer"
        ></i>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-[2rem] font-bold">About Us</h3>
        <p className="text-[1.6rem] font-medium text-[#000000b1]">
          Find out who we are and what makes us unique. We are a
          community-driven gym committed to providing personalized fitness
          experiences for all levels of fitness enthusiasts in a welcoming and
          supportive environment.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-[2rem] font-bold">Gallery</h3>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <Image
            src="/images/sidebar/1.jpg"
            alt="sidebar_gallery"
            className="cursor-pointer rounded-xl"
            width="100"
            height="100"
          />
          <Image
            src="/images/sidebar/2.jpg"
            alt="sidebar_gallery"
            className="cursor-pointer rounded-xl"
            width="100"
            height="100"
          />
          <Image
            src="/images/sidebar/3.jpg"
            alt="sidebar_gallery"
            className="cursor-pointer rounded-xl"
            width="100"
            height="100"
          />
          <Image
            src="/images/sidebar/4.jpg"
            alt="sidebar_gallery"
            className="cursor-pointer rounded-xl"
            width="100"
            height="100"
          />
          <Image
            src="/images/sidebar/5.jpg"
            alt="sidebar_gallery"
            className="cursor-pointer rounded-xl"
            width="100"
            height="100"
          />
          <Image
            src="/images/sidebar/6.jpg"
            alt="sidebar_gallery"
            className="cursor-pointer rounded-xl"
            width="100"
            height="100"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-[2rem] font-bold">Contact Info</h3>
        <p className="text-[1.6rem] font-medium text-[#000000b1]">
          <i className="fa-solid fa-location-dot text-[#ff0336]"></i>
          &nbsp; 59 Street, House New york City
        </p>
        <p className="text-[1.6rem] font-medium text-[#000000b1]">
          <i className="fa-solid fa-phone text-[#ff0336]"></i>
          &nbsp; +123-678800090
        </p>
        <p className="text-[1.6rem] font-medium text-[#000000b1]">
          <i className="fa-solid fa-envelope text-[#ff0336]"></i>
          &nbsp; gymate@gymail.com
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-[2rem] font-bold">Follow Us</h3>
        <div className="flex gap-5">
          <span className="bg-[#ff0336] py-[12px] px-[17px] rounded-full cursor-pointer">
            <i className="fa-brands fa-facebook-f text-white text-[2.2rem]"></i>
          </span>
          <span className="bg-[#ff0336] py-[12px] px-[12px] rounded-full cursor-pointer">
            <i className="fa-brands fa-twitter text-white text-[2.2rem]"></i>
          </span>{' '}
          <span className="bg-[#ff0336] py-[12px] px-[12px] rounded-full cursor-pointer">
            <i className="fa-brands fa-instagram text-white text-[2.2rem]"></i>
          </span>
        </div>
      </div>
    </>
  );
};
