import Image from "next/image";
import Main from "../Components/Main";
import Map from "../Components/Map";
import stars from "../../public/images/stars.png";
import calendar from "../../public/images/calendar.png";
import sleep from "../../public/images/bearSleep.png";
import lenta from "../../public/images/lenta.png";
import car from "../../public/images/car.png";
import gis from "../../public/images/2gis.jpeg";
import insta from "../../public/images/insta.webp";
import sleepBear from "../../public/images/sleep.png";
import Attendance from "../Components/Attendance";
import { useState } from "react";
export default function Home() {
  return (
    <main className="flex  flex-col items-center  ">
      <Main />
      <div className="mt-20 ">
        <p className="kurmet ">Құрметті қонақтар!</p>
        <p className="kurmet ">Cіз(дер)ді қызымыз</p>
        <p className="kurmet ">Томирисіміздің</p>
        <p className="kurmet ">тұсау кесер тойына</p>
        <p className="kurmet ">арналған салтанатты</p>
        <p className="kurmet ">ақ дастарханымыздың</p>
        <p className="kurmet ">қадірлі қонағы болуға</p>
        <p className="kurmet ">шақырамыз!!!</p>
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

      <div className="text-center mt-10">
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

      <Image className="" height={155} width={155} src={sleep} alt="sleep" />
      <Image className="" height={364} width={364} src={lenta} alt="lenta" />
      <Image className="" height={364} width={364} src={lenta} alt="lenta" />

      <div className="text-center mt-10">
        <p className="tomi">Мекен жайымыз: </p>
        <p className="tomi"> Талдықорған қаласы</p>
        <p className="tomi">Куренбель 40</p>
        <p className="tomi">"Пиала"</p>
        <p className="tomi"> Мейрамханасы</p>
      </div>

      <Image className="car" height={233} width={233} src={car} alt="car" />

      <div className="text-center">
        <p className="sizder">Cіздерге ыңғайлы болу үщін</p>
        <p className="sizder">төмендегі көрсетілген картаны қолданыңыз</p>
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

      <div className="text-center">
        <p className="toii"> Той иелері:</p>
        <p className="toii">Апасы:</p>
        <p className="toii">Ата-анасы</p>
        <p className="toii">Алибек && Мөлдір</p>
      </div>
      <Image height={200} width={200} src={sleepBear} alt="sleepBear" />

      <div className="text-center">
        <p className="toii"> Құрметті қонақ</p>
        <p className="toii">тойға келетініңізді</p>
        <p className="toii">растаңыз</p>
      </div>

      {/* <Attendance /> */}
    </main>
  );
}
