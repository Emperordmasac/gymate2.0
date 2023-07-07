import Image from 'next/image';
import Link from 'next/link';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <nav
      className={`flex flex-row items-center justify-between py-8 px-12 fixed top-0 left-0 right-0 w-full z-50 bg-black`}
    >
      <Link href="/">
        <Image
          src="/images/logo/logo.svg"
          alt="company logo"
          className="w-full h-auto"
          width="100"
          height="100"
        />
      </Link>
    </nav>
  );
};

export default Header;
