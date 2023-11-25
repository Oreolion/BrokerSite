import picture from "/src/assets/images/istockphoto-1358049777-170667a.webp";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const AboutSection4 = () => {
  return (
    <>
      <section className="aboutsection4">
        <div className="box1">
          <h1>Trade on our world class platform</h1>
          <ul>
            <li> <span><IoCheckmarkDoneSharp size={20}/></span> Easy to use, fully customisable</li>
            <li> <span><IoCheckmarkDoneSharp size={20}/></span> Superior execution speeds</li>
            <li> <span><IoCheckmarkDoneSharp size={20}/></span> Trader&apos;s calculator, performance statistics, sentiment</li>
            <li> <span><IoCheckmarkDoneSharp size={20}/></span> Charts trading, market order depth</li>
          </ul>
          <button>FIND OUT MORE</button>
        </div>
        <div className="box2">
          <img src={picture} alt="picture" />
        </div>
      </section>
    </>
  );
};

export default AboutSection4;
