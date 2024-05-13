import Image from "next/image";
import Main from "../Components/Main";
import stars from "../../public/images/stars.png";
import calendar from "../../public/images/calendar.png";
import sleep from "../../public/images/bearSleep.png";
import lenta from "../../public/images/lenta.png";
import car from "../../public/images/car.png";
import gis from "../../public/images/2gis.jpeg";
import insta from "../../public/images/insta.webp";
import sleepBear from "../../public/images/sleep.png";
import Attendance from "../Components/Attendance";
import AnimatedText from "../Components/AnimatedText";

export default function Home() {
  return (
    <main className="flex  flex-col items-center text-[16px] sm:text-[20px] mb-[10px]">
      <Main />
      <div className="mt-10 mb-20 text-[24px] sm:text-[20px] mb-[10px] text-center  ">
        <p>Құрметті қонақтар!</p>
        <p>Cіз(дер)ді қызымыз</p>
        <p>Томирисіміздің</p>
        <p>тұсау кесер тойына</p>
        <p>арналған салтанатты</p>
        <p>ақ дастарханымыздың</p>
        <p>қадірлі қонағы болуға</p>
        <p>шақырамыз!!!</p>
      </div>
      <div className="flex justify-center justify-between">
        <Image
          className="stars"
          height={60}
          width={70}
          src={stars}
          alt="stars"
        />
        <Image
          className="stars"
          height={60}
          width={70}
          src={stars}
          alt="stars"
        />
      </div>

      <div className="text-center mt-10 text-[20px] sm:text-[20px] mb-[10px]">
        <p className="bastau">Той салтанаты:</p>
        <p className="bastau">5 маусым 2024 жыл</p>
        <p className="bastau">сағат 18:00</p>

        <Image
          className="mt-10"
          height={200}
          width={720}
          src={calendar}
          alt="calendar"
        />
      </div>

      <Image className="" height={200} width={200} src={sleep} alt="sleep" />
      <div className="overflow-hidden flex justify-center items-center min-w-[300px] md:block mt-[-85px]">
        <Image
          className="rotate-[-20deg] h-[250px] w-[400px]"
          height={364}
          width={364}
          src={lenta}
          alt="lenta"
        />
        <Image
          className="rotate-[28deg] h-[250px] w-[400px]"
          height={364}
          width={364}
          src={lenta}
          alt="lenta"
        />
      </div>

      <div className="text-center mt-[-60px]  text-[20px] sm:text-[20px] mb-[10px] ">
        <p>Мекен жайымыз: </p>
        <p> Талдықорған қаласы</p>
        <p>Куренбель 40</p>
        <p>"Пиала"</p>
        <p> Мейрамханасы</p>
      </div>

      <Image className="car" height={233} width={233} src={car} alt="car" />
      {/* <div className="text-center mt-[-60px] text-[16px] sm:text-[20px]">
        <p className=""> Той иелері:</p>
        <p className=" ">Апасы:Айгуль</p>
        <p className="">Ата-анасы</p>
        <p className="">Алибек && Мөлдір</p>
      </div> */}

      <div className="text-center mb-10 text-[18px] sm:text-[20px]">
        <p className="">Cіздерге ыңғайлы болу үшін</p>
        <p className="">төмендегі көрсетілген картаны қолданыңыз</p>
      </div>

      {/* <Map /> */}

      <div className="flex justify-center justify-between">
        <Image
          height={50}
          width={50}
          src={gis}
          alt="gis"
          style={{ marginRight: "30px" }}
        />
        <Image height={50} width={50} src={insta} alt="insta" />
      </div>

      <Image height={200} width={200} src={sleepBear} alt="sleepBear" />

      <Attendance />
    </main>
  );
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>;
}
