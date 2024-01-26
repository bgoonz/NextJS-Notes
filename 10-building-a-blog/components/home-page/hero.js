import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/bryan-profile.png"
          alt="An image of Bryan"
          width={300}
          height={300}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <h1>Hi, I am Bryan</h1>
      <p>I blog about web development especially React</p>
    </section>
  );
}

export default Hero;
