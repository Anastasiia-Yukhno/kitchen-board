import { useState } from "react";
import { changeLanguage, changeLanguageMenu } from "../../state/actions";
import { defaultStateType, TLanguage } from "../../types";
import { useDispatch, useSelector } from "react-redux";

import styles from "./SettingsPage.module.scss";
import { LinkToLanguage } from "../../mock/MainPage";

const SettingsPage = () => {
  const [language, setLanguage] = useState<TLanguage>(
    useSelector((state: defaultStateType) => state.language)
  );

  const dispatch = useDispatch();

  console.log("language", language);
  const handleChange = (value: any) => {
    setLanguage(value);
    dispatch(changeLanguage(value));
    dispatch(changeLanguageMenu(value));
  };
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Select}>
        <label>
          <div className={styles.Label}>{LinkToLanguage[language]}</div>
          <select
            value={language}
            onChange={(event) => handleChange(event.target.value)}>
            <option value="en">Angielski</option>
            <option value="pl">Polski</option>
            <option value="ua">Ukrainski</option>
            <option value="ru">Rosyjski</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default SettingsPage;
