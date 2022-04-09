import { useContext, React } from 'react';
import s from './Toogle.module.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from "../../Context";

const Toogle = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
      theme.dispatch({ type: "toggle" });
    };

    return (
        <div className={s.toogle}>
            <Moon />
            <Sun />
            <div className={s.tButton} onClick={handleClick}
                style={darkMode ? { left: "2px" } : { right: "2px" }}>
            </div>
        </div>
    );
};

export default Toogle;