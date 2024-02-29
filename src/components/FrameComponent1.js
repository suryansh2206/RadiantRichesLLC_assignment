import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <header className={styles.rectangleParent}>
      <div className={styles.rectangle} />
      <div className={styles.frameWrapper}>
        <div className={styles.contactDetailsParent}>
          <div className={styles.contactDetails} />
          <h1 className={styles.bestWebsiteBuilders}>
            Best Website builders in the US
          </h1>
        </div>
      </div>
      <div className={styles.rectangle1} />
      <div className={styles.frameParent}>
        <div className={styles.headerImageFrameParent}>
          <div className={styles.headerImageFrame}>
            <div className={styles.imageContainer} />
            <div className={styles.subFrameDeals}>
              <div className={styles.textBlock} />
              <img className={styles.imageIcon} alt="" src="/image-1.svg" />
              <div className={styles.verticalFrameStack}>
                <div className={styles.webBuilderLabel} />
                <div className={styles.categoryWebBuilder}>
                  <div className={styles.offerData} />
                  <div className={styles.lastUpdated}>Last Updated</div>
                  <div className={styles.downloadIcon}>
                    <div className={styles.contactSection} />
                    <div className={styles.columnLayout}>-</div>
                  </div>
                </div>
                <div className={styles.parentFrameSignUp}>
                  <div className={styles.termsOfServiceLink} />
                  <div className={styles.february222020}>February 22, 2020</div>
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.rectangleGroup}>
                <div className={styles.rectangle2} />
                <div className={styles.rectangle3} />
              </div>
              <img className={styles.imageIcon1} alt="" src="/image-2.svg" />
              <div className={styles.webBuilderFrameParent}>
                <div className={styles.webBuilderFrame} />
                <div className={styles.advertisingDisclosure}>
                  Advertising Disclosure
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.depthFrameParent}>
              <div className={styles.depthFrame} />
              <div className={styles.rectangle4} />
            </div>
            <div className={styles.topRelevant}>Top Relevant</div>
            <img className={styles.imageIcon2} alt="" src="/image-3.svg" />
          </div>
        </div>
        <div className={styles.contactDetails1} />
        <div className={styles.depthFrame1} />
      </div>
    </header>
  );
};

export default FrameComponent1;
