import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div>Image</div>
      <h1>Hi, I am Bryan</h1>
      <p>I blog about web development especially React</p>
    </section>
  );
}

export default Hero;
