import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { Main } from "../../icons/Main";
import { Menu } from "../../icons/Menu";
import { Info } from "../../icons/Info";
import { Settings } from "../../icons/Settings";
import { useSelector } from "react-redux";
import { defaultStateType } from "../../types";
import { MainText, MenuText, SettingsText } from "../../mock/MainPage";

type TNavLinks = {
  isClicked: boolean;
  closeMenu: () => void;
};

const NavLinks = ({ isClicked, closeMenu }: TNavLinks) => {
  const language = useSelector((state: defaultStateType) => state.language);

  return (
    <div className={styles.NavLinks}>
      <Link onClick={() => isClicked && closeMenu()} to="/">
        <Main /> {MainText[language]}
      </Link>
      <Link onClick={() => isClicked && closeMenu()} to="/menu">
        <Menu /> {MenuText[language]}
      </Link>
      {/* <Link onClick={() => isClicked && closeMenu()} to="/info">
        <Info /> Info
      </Link> */}
      <Link onClick={() => isClicked && closeMenu()} to="/settings">
        <Settings /> {SettingsText[language]}
      </Link>
    </div>
  );
};

export default NavLinks;
