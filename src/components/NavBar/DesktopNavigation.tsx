import NavLinks from "./NavLinks";
import styles from "./NavBar.module.scss";
import { Logo } from "../../icons/Logo";
import { LogoText } from "../../mock/MainPage";
import { useSelector } from "react-redux";
import { defaultStateType } from "../../types";

const DekstopNavigation = () => {
  const language = useSelector((state: defaultStateType) => state.language);

  return (
    <nav className={styles.DekstopNav}>
      <div className={styles.Logo}>
        <Logo />
        <div className={styles.Title}>{LogoText[language]}</div>
      </div>
      <NavLinks isClicked={false} closeMenu={() => {}} />
    </nav>
  );
};

export default DekstopNavigation;
