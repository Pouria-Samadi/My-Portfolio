import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
import Image from "next/image";
import pouria from "../../public/pouria.png";

const Description = () => {
  const handleClickGitHub = () => {
    window.location.href = 'https://www.github.com/Pouria-Samadi/';
  };
  const handleClickGmail = () => {
    window.location.href = "mailto:pouria.msd@gmail.com";
  };
  return (
    <div className="text-center p-10 py-10">
      <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
        Pouria Mahinsamadi
      </h2>
      <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
        Front-end Developer.
      </h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
        Freelancer providing services for programming with React. Join me down
        below and let's get cracking!
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <MdEmail onClick={handleClickGmail    } className=" cursor-pointer"/>
        <AiFillLinkedin />
        <GoMarkGithub onClick={handleClickGitHub} className=" cursor-pointer"/>
      </div>
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
        <Image src={pouria} alt="User profile photo" priority />
      </div>
    </div>
  );
};

export default Description;
