import React from "react";
import Image from "next/image";
import styles from "./attendance.module.scss";
import { useState } from "react";

export default function AttendanceForm() {
  const [attendance, setAttendance] = useState("");

  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    formDatab.append("attendance", attendance);

    console.log("Form Data:", Object.fromEntries(formDatab.entries()));

    fetch(
      "https://script.google.com/macros/s/AKfycbyp-VVf7afBotIsgC1eyVI0W7mRFyMcV9CtAetHuD6tHnOegquXUoCv-Gojfx8eHMo/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className={styles.App}>
      <div className="form center">
        <p className={styles.anketa}>Анкетаны толтыруыңызды сұраймыз</p>
        <p className={styles.anketa2}>Біз үшін өте маңызды!</p>
        <div className="formalar">
          <form className="form" onSubmit={(e) => Submit(e)}>
            <input
              className={styles.atiniz}
              placeholder="Атыңыз"
              name="Name"
              type="text"
            />
            <input
              className={styles.wishes}
              placeholder="Тілектеріңіз"
              name="Message"
              type="text"
            />

            <div className={styles.radio}>
              <div>
                <input
                  type="radio"
                  id="willAttend"
                  value="Приду"
                  checked={attendance === "Приду"}
                  onChange={() => setAttendance("Приду")}
                />
                <label htmlFor="willAttend">Келемін</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="willAttendWithWife"
                  value="Приду с женой"
                  checked={attendance === "Приду с женой"}
                  onChange={() => setAttendance("Приду с женой")}
                />
                <label htmlFor="willAttendWithWife">Жұбайымен</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="cannotAttend"
                  value="Не могу прийти"
                  checked={attendance === "Не могу прийти"}
                  onChange={() => setAttendance("Не могу прийти")}
                />
                <label htmlFor="cannotAttend">Келе алмаймын</label>
              </div>
            </div>
            <button className={styles.button} type="submit">
              Жіберу
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
