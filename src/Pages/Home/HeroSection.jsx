export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Kurstie</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Aspiring Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Come see what I am all about.
            <br /> Nothing too exciting, I'm still learning!.
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/meandhubby.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
