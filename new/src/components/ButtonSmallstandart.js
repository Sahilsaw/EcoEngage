import { useMemo } from "react";
import styles from "./ButtonSmallstandart.module.css";

const ButtonSmallstandart = ({
  button,
  buttonSmallstandartWidth,
  buttonSmallstandartPosition,
  buttonSmallstandartTop,
  buttonSmallstandartLeft,
  rectangleBackgroundColor,
  rectangleBorderRadius,
  buttonLeft,
  buttonFontFamily,
}) => {
  const buttonSmallstandartStyle = useMemo(() => {
    return {
      width: buttonSmallstandartWidth,
      position: buttonSmallstandartPosition,
      top: buttonSmallstandartTop,
      left: buttonSmallstandartLeft,
    };
  }, [
    buttonSmallstandartWidth,
    buttonSmallstandartPosition,
    buttonSmallstandartTop,
    buttonSmallstandartLeft,
  ]);

  const rectangleStyle = useMemo(() => {
    return {
      backgroundColor: rectangleBackgroundColor,
      borderRadius: rectangleBorderRadius,
    };
  }, [rectangleBackgroundColor, rectangleBorderRadius]);

  const buttonStyle = useMemo(() => {
    return {
      left: buttonLeft,
      fontFamily: buttonFontFamily,
    };
  }, [buttonLeft, buttonFontFamily]);

  return (
    <div
      className={styles.buttonsmallstandart}
      style={buttonSmallstandartStyle}
    >
      <div className={styles.placeholder}>
        <div className={styles.rectangle} style={rectangleStyle} />
      </div>
      <div className={styles.button} style={buttonStyle}>
        {button}
      </div>
    </div>
  );
};

export default ButtonSmallstandart;
