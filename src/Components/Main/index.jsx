import React from "react";
import Image from "next/image";
import cloud from "../../../public/images/cloud.png";
import bear from "../../../public/images/bear.png";
import stars from "../../../public/images/stars.png";
import styles from "./main.module.scss";
import ui from "../../../public/images/ui.png";

export default function Main() {
  return (
    <div className={styles.Main}>
      <div className={styles.pictures}>
        <Image
          className={`${styles.cloud} ${styles.movingImage}`}
          height={83}
          width={83}
          src={cloud}
          alt="cloud1"
        />
        <Image
          className={`${styles.cloudSecond} ${styles.movingImageSecond}`}
          height={73}
          width={73}
          src={cloud}
          alt="cloud2"
        />
        <Image
          className={styles.bear}
          height={260}
          width={260}
          src={bear}
          alt="bear"
        />
      </div>

      <div className="mt-20 text-center ">
        <p className={styles.Tomiris}>Томирис</p>
        <p className={styles.Tomiris}>1 ЖАС</p>
        <p className={styles.Tomiris}> ТҰСАУ КЕСЕР</p>
      </div>

      <div className="flex justify-center justify-between mt-10">
        <Image
          className={styles.stars}
          height={70}
          width={80}
          src={stars}
          alt="stars"
        />
        <Image
          className={styles.stars}
          height={50}
          width={60}
          src={stars}
          alt="stars"
        />
      </div>

      <Image
        className="mx-auto my-auto"
        height={200}
        width={200}
        src={ui}
        alt="ui"
      />
    </div>
  );
}
