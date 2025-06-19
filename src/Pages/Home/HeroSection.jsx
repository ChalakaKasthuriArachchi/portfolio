export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Chalaka Jayaranga</span>{" "}
            <br />
          </h1>
          <h2>I'm a Senior Software Engineer from Sri Lanka</h2>
        </div>
        <button className="btn btn-primary">About Me</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
    );
  }