import Card from "../../assets/desktop/isocard.svg";
const Slogan = () => {
  return (
    <section className="text-36 relative my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center">
      <div className="text-center md:col-span-1 md:col-start-2">
        <p className="">
          Earn <span className="text-purple-300">More</span>
        </p>
        <p className="">Pay Less</p>
        <button className="text-white dark:text-black  text-16 px-6 py-[6px] font-bold mt-[27px] bg-purple-600 rounded-[4px] hover:bg-purple-700 dark:hover:bg-violet-400 transition-all duration-400 md:text-24 md:px-8 md:py-[8px]">
          Start
        </button>
      </div>
      <div className="mt-[16px] md:absolute md:right-[-4rem]">
        <img src={Card} alt="credit card" />
      </div>
    </section>
  );
};

export default Slogan;
