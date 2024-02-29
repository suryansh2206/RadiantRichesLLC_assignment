import styles from "./SignupFrame.module.css";

const SignupFrame = () => {
  return (
    <div className={styles.signupFrame}>
      <div className={styles.rectangle} />
      <h1 className={styles.signUpAnd}>
        Sign up and get exclusive special deals
      </h1>
      <div className={styles.categoryFrameWrapper}>
        <div className={styles.categoryFrame}>
          <div className={styles.rectangleCategories} />
          <div className={styles.rectangleCategories1} />
          <div className={styles.webBuilderLabel}>
            <div className={styles.rectangle1} />
            <div className={styles.signUp}>Sign Up</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupFrame;
