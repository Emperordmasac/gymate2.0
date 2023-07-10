//--INTERNAL IMPORTS
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full p-5 text-center bg-gray-100">
      {/* page container */}
      <div className="container page_padding p-[10rem]">
        {/* footer  */}
        <div className="flex justify-between !text-left min620:flex-col min620:items-center min620:text-center min620:gap-[5rem]">
          {/* footer-left-side */}
          <div className="flex flex-col w-1/3 gap-8">
            {/* brand logo */}
            <Image
              src="/images/logo/logo-footer.svg"
              alt="brand-logo"
              className="w-[18rem]"
              width="100"
              height="100"
            />
            {/* brand motto */}
            <p className="text-[15px] font-medium text-[#646464]">
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>
            {/* brand socials */}
            <div className="flex gap-7 text-[18px] text-[#646464] min540:justify-center">
              <i
                style={{ transition: 'all 0.3s' }}
                className="fa-brands fa-facebook-f bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
              ></i>
              <i
                style={{ transition: 'all 0.3s' }}
                className="fa-brands fa-twitter bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
              ></i>
              <i
                style={{ transition: 'all 0.3s' }}
                className="fa-brands fa-pinterest-p bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
              ></i>
              <i
                style={{ transition: 'all 0.3s' }}
                className="fa-brands fa-youtube bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
              ></i>
            </div>
            {/* brand privacy policy */}
            <p className="text-[16px] font-medium text-[#646464]">
              Privacy Policy | © {new Date().getFullYear()} Gymate <br />{' '}
              Design by{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Emperordmasac"
              >
                Pavillion Master
              </a>
            </p>
          </div>

          {/* footer middle section */}
          <div className="relative flex flex-col gap-8">
            <p className="text-[22px] font-bold">Our Classes</p>
            <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Fitness Classes
            </p>
            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Aerobics Classes
            </p>
            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Power Yoga
            </p>
            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Learn Machines
            </p>
            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
              Full-body Strength
            </p>
          </div>

          {/* footer-right-section */}
          <div className="relative flex flex-col gap-8">
            <p className="text-[22px] font-bold">Working Hours</p>
            <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

            <p className="text-[16px]  text-[#646464] font-bold">
              Monday - Friday:
            </p>
            <p className="text-[16px] text-[#646464] font-medium">
              7:00am - 21:00pm
            </p>
            <p className="text-[16px] text-[#646464] font-bold">Saturday:</p>
            <p className="text-[16px] text-[#646464] font-medium">
              7:00am - 19:00pm
            </p>
            <p className="text-[16px] text-[#646464] font-bold ">
              Sunday - Closed
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
