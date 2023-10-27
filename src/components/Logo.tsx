import styles from "./Logo.module.scss";

interface LogoProps {
  src: string;
  alt: string;
}

const Logo = ({ src, alt }: LogoProps) => {
  return <img src={src} className={styles.logo} alt={alt} />;
};

export default Logo;
