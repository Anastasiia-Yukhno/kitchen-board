import NavLinks from "./NavLinks";
import styles from "./NavBar.module.scss";
import { Burger } from "../../icons/Burger";

import { useState } from "react";
import { Close } from "../../icons/Close";
import { Logo } from "../../icons/Logo";
import { Link } from "react-router-dom";
import { Main } from "../../icons/Main";
import { Info } from "../../icons/Info";
import { Menu } from "../../icons/Menu";
import SettingsPage from "../../pages/SettingsPage";
import { Language } from "../../icons/Language";
import { useSelector } from "react-redux";
import { defaultStateType } from "../../types";
import { LogoText } from "../../mock/MainPage";

const MobileNavigation = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  const language = useSelector((state: defaultStateType) => state.language);

  const MenuButton = () => (
    <>
      <div className={styles.MenuButton} onClick={() => setClick(!click)}>
        {click ? <Close /> : <Burger />}
      </div>
    </>
  );

  return (
    <nav className={styles.MobileNav}>
      <div className={styles.Header}>
        <div className={styles.Logo}>
          <Logo />
          <div className={styles.Title}>{LogoText[language]}</div>
          <MenuButton />
        </div>
        {click || (
          <div className={styles.MenuPanel}>
            <Link to="/" onClick={closeMenu}>
              <Main />
            </Link>
            <Link to="/menu" onClick={closeMenu}>
              <Menu />
            </Link>
            {/* <Link to="/info" onClick={closeMenu}>
              <Info />
            </Link> */}
            <Link to="/settings" onClick={closeMenu}>
              <Language />
            </Link>
          </div>
        )}
      </div>
      {click && <NavLinks isClicked={true} closeMenu={closeMenu} />}
    </nav>
  );
};

export default MobileNavigation;
