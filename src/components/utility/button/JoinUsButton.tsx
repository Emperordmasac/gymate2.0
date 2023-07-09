import useToggle from '@/lib/hooks/useToggle';
import Link from 'next/link';

const goToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

const JOinUsButton = () => {
  const [spin, toggleSpin] = useToggle(false);
  return (
    <>
      <div className="border-[rgb(255,255,255,0.3)] border-2 border-solid p-2 rounded-md min620:hidden">
        <Link
          onClick={goToTop}
          href="/contact"
          onMouseEnter={() => toggleSpin()}
          onMouseLeave={() => toggleSpin()}
          className="flex items-center"
        >
          <i
            className={`fa-solid fa-plus bg-[#ff0336] text-white text-2xl py-3 px-4 rounded-md ${
              spin ? 'custom_spin_button' : ''
            }`}
            role="button"
          ></i>
          <h3 className="text-white text--[14px] font-bold uppercase ml-4 mr-8 tracking-wider">
            Join class now
          </h3>
        </Link>
      </div>
    </>
  );
};

export default JOinUsButton;
