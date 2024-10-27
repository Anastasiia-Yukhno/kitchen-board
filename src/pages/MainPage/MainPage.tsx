import { useSelector } from "react-redux";
import { defaultStateType } from "../../types";

import { LinkToLanguage, LinkToMenu } from "../../mock/MainPage";
import { Link } from "react-router-dom";

import styles from "./MainPage.module.scss";
import { Right } from "../../icons/Right";
import { Menu } from "../../icons/Menu";
import { Language } from "../../icons/Language";

const MainPage = () => {
  const language = useSelector((state: defaultStateType) => state.language);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Link}>
        <Link to="/menu">
          <Menu />
          {LinkToMenu[language]}
          <Right />
        </Link>
      </div>

      <div className={styles.Link}>
        <Link to="/settings">
          <Language />
          {LinkToLanguage[language]}
          <Right />
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
