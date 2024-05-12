"use client";
import { useState } from "react";
import styles from "./musik.module.scss";
import proigr from "../../../public/images/proigriv.png";
import Image from "next/image";

export default function Musik() {
  const [audio] = useState(new Audio("../../assets/muzik.mp3")); 
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
      className={`${styles.muzik} ${isPlaying ? "rotate-image" : ""}`}
      onClick={play}
    >
      <Image height={24} width={50} src={proigr} alt="musik" />
    </button>
  );
}
