// Data
import homeData from '../../data/home.json';

// ---------------

function Home() {
  return (
    <section id="home" className="section full-width-section">
      <div className="section-wrapper block">
        <div className="home-left-part">
          <p className="site-des">{homeData.welcomeText}</p>
          <h1 className="entry-title">{homeData.name}</h1>
          <p className="site-info">{homeData.text}</p>

          <div className="social-links">
            {homeData.socialLinks.map((link, i) => (
              <a key={'social-link-' + i} href={link.to}>
                {link.text}
              </a>
            ))}
          </div>
        </div>
        <div className="home-right-part"></div>
      </div>
    </section>
  );
}

export default Home;
