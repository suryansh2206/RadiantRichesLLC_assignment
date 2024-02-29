import { useMemo } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ propWidth, propPadding, propHeight, propFlex }) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
    };
  }, [propHeight, propFlex]);

  return (
    <div className={styles.frameWrapper} style={frameDivStyle}>
      <div className={styles.frameParent} style={frameDiv1Style}>
        <div className={styles.frame} />
        <img
          className={styles.download1Icon}
          loading="lazy"
          alt=""
          src="/download-2@2x.png"
        />
        <div className={styles.rectangleParent}>
          <div className={styles.rectangle} />
          <div className={styles.dataCenterRoboticAutomationParent}>
            <div className={styles.dataCenterRoboticAutomation} />
            <div className={styles.builder1}>Builder 1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
