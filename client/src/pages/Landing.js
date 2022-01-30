import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span>
          </h1>
          <p>
            I'm baby marfa pug jean shorts tbh. Food truck copper mug pop-up
            freegan pitchfork, keytar put a bird on it shoreditch post-ironic
            iceland everyday carry. Yr humblebrag fixie, knausgaard listicle
            90's chambray hot chicken chillwave seitan cold-pressed small batch
            palo santo thundercats. Mlkshk blue bottle etsy meh portland bespoke
            franzen tumblr, drinking vinegar gentrify wayfarers waistcoat tbh.
            Cornhole raw denim VHS, skateboard neutra squid mumblecore hexagon
            chillwave 3 wolf moon twee drinking vinegar intelligentsia vinyl.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img" />
      </div>
    </main>
  );
};

export default Landing;
