// components/Musik.js
"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./Musik.module.scss";
import proigr from "../../../public/images/proigriv.png";
import muz from "../../assets/muzik.mp3";
import Image from "next/image";

export default function Musik() {
  const [audio] = useState(new Audio(muz));
  const [isPlaying, setIsPlaying] = useState(false);

  function play(event) {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
    event.target.classList.toggle("rotate-image");
  }

  return (
    <button
      className={`${styles.muzik} ${isPlaying ? "animate-spin" : ""}`}
      onClick={play}
    >
      <Image
        className="ml-20"
        height={24}
        width={50}
        src={proigr}
        alt="musik"
      />
    </button>
  );
}
