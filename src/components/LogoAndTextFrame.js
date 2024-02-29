import styles from "./LogoAndTextFrame.module.css";

const LogoAndTextFrame = () => {
  return (
    <div className={styles.logoAndTextFrame}>
      <div className={styles.rectangle} />
      <div className={styles.navigationBar}>
        <div className={styles.frameWithLinkAndImage}>
          <div className={styles.imageInsideFrame} />
          <div className={styles.imageInsideFrame1} />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.depthFrameParent}>
            <div className={styles.depthFrame} />
            <div className={styles.depthFrame1} />
            <div className={styles.irrigationManagement} />
          </div>
          <div className={styles.image} />
        </div>
        <div className={styles.off}>
          <div className={styles.offLimitedTimeText} />
          <div className={styles.computerModernText}>
            <div className={styles.rectangle1} />
            <img className={styles.imageIcon} alt="" src="/image.svg" />
          </div>
        </div>
        <div className={styles.privacyPolicyText}>
          <div className={styles.termsOfServiceText}>
            <div className={styles.categoriesFrame} />
            <div className={styles.signUpText}>
              <div className={styles.depthFrame2} />
              <div className={styles.manageYourNutrientApplicatiParent}>
                <div className={styles.manageYourNutrientApplicati} />
                <div className={styles.depthFrame3} />
                <div className={styles.categories}>Categories</div>
              </div>
              <div className={styles.depthFrameGroup}>
                <div className={styles.depthFrame4} />
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangle2} />
                  <div className={styles.websiteBuilders}>Website Builders</div>
                </div>
              </div>
              <div className={styles.depthFrameContainer}>
                <div className={styles.depthFrame5} />
                <div className={styles.frameDiv}>
                  <div className={styles.depthFrame6} />
                  <div className={styles.todaysDeals}>Today's deals</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.depthFrameParent1}>
              <div className={styles.depthFrame7} />
              <div className={styles.depthFrame8} />
              <div className={styles.depthFrame9} />
              <div className={styles.depthFrame10} />
            </div>
            <div className={styles.image1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoAndTextFrame;
