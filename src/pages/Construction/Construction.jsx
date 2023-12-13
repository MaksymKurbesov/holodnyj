import React, { useState } from "react";
import styles from "./Construction.module.scss";
import { ReactComponent as UnderConstruction } from "../../assets/page under construction.svg";
import axios from "axios";
import { TELEGRAM_URL } from "../Model/Model";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as InstIcon } from "../../assets/icons/instagram.svg";

const BUTTON_STATE_MAP = {
  idle: "Відправити",
  send: "Відправлено",
  loading: "Завантаження",
};

const Construction = () => {
  const [buttonState, setButtonState] = useState("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message === "" || phone === "") return;

    setButtonState("loading");
    await axios.post(TELEGRAM_URL, {
      chat_id: "-1002026451569",
      parse_mode: "html",
      text: `Имя: <b>${name}</b>\nНомер телефона: <b>${phone}</b>\nEmail: <b>${email}</b>\nТекст сообщения: <b>${message}</b>`,
    });

    setButtonState("send");

    setTimeout(() => {
      setButtonState("idle");
    }, 5000);
  };

  return (
    <div className={styles["construction"]}>
      <h2>Ми знаходимось в розробці</h2>
      <UnderConstruction className={styles["image"]} />

      <p>Будь-ласка зв'яжіться з нами в зручний для вас спосіб:</p>
      <div className={styles["links"]}>
        <a href={"https://instagram.com/holodnyj.com.ua"}>
          <InstIcon width={25} /> https://instagram.com/holodnyj.com.ua
        </a>
        <a href={"tel:0977040374"}>
          <PhoneIcon width={25} /> +38 097 704 03 74
        </a>
      </div>
      <p>або заповніть форму нижче</p>
      <form>
        <div className={styles["input"]}>
          <label>Ім'я</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type={"text"}
          />
        </div>
        <div className={styles["input"]}>
          <label>Номер телефону</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type={"text"}
          />
        </div>
        <div className={styles["input"]}>
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type={"text"}
          />
        </div>
        <div className={styles["input"]}>
          <label>Ваше повідомлення</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={7}
          />
        </div>
        <button
          disabled={buttonState !== "idle"}
          onClick={(e) => handleSubmit(e)}
          className={buttonState === "send" ? styles["send"] : ""}
        >
          {BUTTON_STATE_MAP[buttonState]}
        </button>
      </form>
    </div>
  );
};

export default Construction;
