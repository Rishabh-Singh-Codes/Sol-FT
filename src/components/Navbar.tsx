import solanaLogo from "/solanaLogoMark.svg";
import talentOlympics from "/talent-olympics.svg";
import { VscGithub } from "react-icons/vsc";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-4 flex justify-between sticky top-4 z-20 items-center bg-black/60 rounded-full px-6">
      <Link to="/">
        <img src={solanaLogo} className="h-6 md:h-10" />
      </Link>
      <Link
        to="/"
        className="ml-12 md:ml-24 font-semibold text-2xl md:text-5xl text-center bg-gradient-to-r from-[#9945FF] to-[#14F195] inline-block text-transparent bg-clip-text"
      >
        Sol-FT
      </Link>
      <div className="flex items-center">
        <a
          href="https://github.com/Rishabh-Singh-Codes/Sol-FT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VscGithub className="text-white h-4 w-4 md:h-8 md:w-8 mr-4" />
        </a>
        <a
          href="https://x.com/Rishabh8Singh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="text-white h-4 w-4 md:h-8 md:w-8 mr-4" />
        </a>
        <a
          href="https://earn.superteam.fun/t/rishabhsingh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={talentOlympics} className="h-6 md:h-12" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
