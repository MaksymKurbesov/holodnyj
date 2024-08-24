import React from "react";
import styles from "./OurTechnology.module.css";
import { ReactComponent as SizeIcon } from "../../assets/icons/size.svg";
import { ReactComponent as DesignIcon } from "../../assets/icons/design.svg";
import { ReactComponent as DevelopmentIcon } from "../../assets/icons/development.svg";
import { ReactComponent as LightIcon } from "../../assets/icons/light.svg";
import { ReactComponent as SecurityIcon } from "../../assets/icons/security.svg";
import { ReactComponent as PaintIcon } from "../../assets/icons/paint.svg";

const TECHNOLOGIES = [
  {
    icon: <SizeIcon />,
    name: "Розмір",
    description: [
      `- Вітрина буде точно відповідати розмірам вашого приміщення, що дозволить ефективно використовувати простір`,
      `- Є можливість врахування особливостей планування та розташування інших об’єктів у закладі`,
      `- Забезпечення максимального використання площі приміщення без зайвих витрат простору`,
    ],
  },
  {
    icon: <DesignIcon />,
    name: "Дизайн",
    description: [
      `- Створення унікального дизайну, що відповідає стилю та інтер’єру вашого закладу.`,
      `- Вибір матеріалів, кольорів та оздоблення відповідно до брендингу`,
      `- Вибір матеріалів, кольорів згідно з таблицею RAL та оздоблення відповідно до брендингу`,
    ],
  },
  {
    icon: <LightIcon />,
    name: "Логістика",
    description: [
      `- Всі моделі вітрин транспортуються по всій Україні`,
      `- Знаходимо оптимальний варіант доставлення`,
      `- Доставляємо Новою Поштою або попутним вантажем`,
    ],
  },
  {
    icon: <DevelopmentIcon />,
    name: "Розробка",
    description: [
      `- Підбір оптимальної кількості полиць та їх розташування для кращої демонстрації продукції`,
      `- Врахування ергономічних аспектів для зручності персоналу під час роботи з вітриною`,
      `- Розробка детальних креслень з урахуванням всіх вимог і побажань замовника та можливість вносити корективи на етапі проєктування, що дозволяє створити ідеальний продукт.`,
      `- Використання сучасного програмного забезпечення для моделювання та візуалізації проєкт.`,
    ],
  },
  {
    icon: <SecurityIcon />,
    name: "Безпечність матеріалів",
    description: [
      `- Використання гартованого скла, яке забезпечує високу міцність та безпеку у разі розбиття.`,
      `- Застосування порошкової фарби з харчовим допуском, що гарантує безпеку при контакті з харчовими продуктами.`,
      `- Використання нержавіючої сталі, яка відповідає вимогам харчової безпеки та є стійкою до корозії`,
    ],
  },
  {
    icon: <PaintIcon />,
    name: "Гарантія і тех підтримка",
    description: [
      `- Наявність гарантії на всі компоненти та матеріали вітрини, що забезпечує впевненість у її якості.`,
      `- Професійне сервісне обслуговування та технічна підтримка від виробника.`,
      `- Можливість отримання консультацій та оперативного розв'язання проблем у разі необхідності.`,
    ],
  },
];

const OurTechnology = () => {
  return (
    <div className={styles["our-technology"]}>
      <h2>
        Наші <span>переваги</span>
      </h2>
      <ul className={styles["technologies"]}>
        {TECHNOLOGIES.map((item, index) => {
          return (
            <li key={index}>
              <div className={styles["header"]}>
                <span className={styles["name"]}>{item.name}</span>
                <span className={styles["count"]}>/0{index + 1}/</span>
              </div>
              <ul className={styles["description"]}>
                {item.description.map((descr, index) => {
                  return (
                    <li key={index} className={styles["description-list-item"]}>
                      {descr}
                    </li>
                  );
                })}
              </ul>
              {/*<button className={styles["more"]}>Подробнее</button>*/}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OurTechnology;
