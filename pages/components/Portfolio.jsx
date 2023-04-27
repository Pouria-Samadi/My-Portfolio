import Image from "next/image";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

const Portfolio = () => {
  return (
    <section className="py-10">
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I have done various project using React. 
          
        
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        Feel free to check out my codes in
          <span className="text-teal-500"> github. </span>
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 ">
          <Image
            className="rounded-lg object-cover"
            width={"100%"}
            alt=""
            height={"100%"}
            src={web1}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            alt=""
            width={"100%"}
            height={"100%"}
            src={web2}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            alt=""
            width={"100%"}
            height={"100%"}
            src={web3}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            alt=""
            width={"100%"}
            height={"100%"}
            src={web4}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            alt=""
            width={"100%"}
            height={"100%"}
            src={web5}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            alt=""
            width={"100%"}
            height={"100%"}
            src={web6}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
