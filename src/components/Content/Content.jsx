import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import CheckIconMobile from "../../assets/mobile/checkpoint.svg";
import { useSpring, animated } from "react-spring";
const Content = () => {
  const customer = useSpring({
    customers: 10245,
    from: { customers: 0 },
  });
  const card = useSpring({
    cards: 19403,
    from: { cards: 0 },
  });
  return (
    <section className="md:flex md:flex-row">
      <div className="ml-[70px] mr-[54px] font-bold bg-purple-700 flex flex-col items-center shadow-md bg-gradient-to-b from-white/40 to-transparent rounded-[12px] md:w-[20%]">
        <div className="mt-16 gap-8 flex items-start">
          <FaUser size={"22px"} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>
              {customer.customers.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold mb-[36px] md:text-13">
              Customers
            </p>
          </div>
        </div>
        <div className="mb-16 gap-8 flex items-start">
          <BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>
              {card.cards.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold md:text-13">Cards</p>
          </div>
        </div>
      </div>
      <div className="text-13 flex flex-col w-[100%] mt-[90px] font-semibold md:mt-0 md:w-[30%] md:ml-[20%] md:text-16">
        <div className="check-content">
          <img src={CheckIconMobile} alt="" />
          <p>Card reports sent to your phone every weeks</p>
        </div>
        <div className="check-content">
          <img src={CheckIconMobile} alt="" />
          <p>No external fees</p>
        </div>
        <div className="check-content">
          <img src={CheckIconMobile} alt="" />
          <p>Set spending limits and restrictions</p>
        </div>
      </div>
    </section>
  );
};

export default Content;
