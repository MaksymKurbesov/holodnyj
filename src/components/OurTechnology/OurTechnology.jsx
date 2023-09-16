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
    name: "Размер",
    description:
      "Мы уделяем особое внимание оптимальным размерам наших холодильных\n" +
      "витрин, чтобы они соответствовали вашим потребностям и позволяли\n" +
      "наиболее эффективно использовать доступное пространство.",
  },
  {
    icon: <DesignIcon />,
    name: "Дизайн",
    description:
      "Наша команда дизайнеров создает современные и эстетически\n" +
      "привлекательные холодильные витрины, которые впишутся в любой\n" +
      "интерьер и подчеркнут вашу продукцию.",
  },
  {
    icon: <DevelopmentIcon />,
    name: "Разработка",
    description:
      "Мы используем передовые технологии и материалы для разработки\n" +
      "прочных и надежных холодильных витрин, обеспечивая долгий срок\n" +
      "cлужбы и надежную работу.",
  },

  {
    icon: <LightIcon />,
    name: "Освещение",
    description:
      "Наши холодильные витрины оснащены инновационной системой освещения,\n" +
      "которая подчеркивает товары, делает их более привлекательными для\n" +
      "покупателей и экономит энергию.",
  },
  {
    icon: <SecurityIcon />,
    name: "Травмобезопасность",
    description:
      "Мы придаем высокое значение безопасности, поэтому наши холодильные\n" +
      "витрины оборудованы механизмами и конструкцией, минимизирующими\n" +
      "риски травмирования для персонала и клиентов.",
  },
  {
    icon: <PaintIcon />,
    name: "Порошковая краска",
    description:
      "Для покрытия поверхностей наших холодильных витрин мы используем\n" +
      "порошковую краску, которая обладает высокой стойкостью к царапинам,\n" +
      "коррозии и обеспечивает стильный внешний вид продукции.",
  },
];

const OurTechnology = () => {
  return (
    <div className={styles["our-technology"]}>
      <h2>
        Наши <span>преимущества</span>
      </h2>
      <ul className={styles["technologies"]}>
        {TECHNOLOGIES.map((item, index) => {
          return (
            <li key={index}>
              <div className={styles["header"]}>
                <span className={styles["name"]}>{item.name}</span>
                <span className={styles["count"]}>/0{index + 1}/</span>
              </div>
              <p className={styles["description"]}>{item.description}</p>
              <button className={styles["more"]}>Подробнее</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OurTechnology;
