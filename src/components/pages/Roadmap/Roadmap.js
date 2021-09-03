import Footer from '../Footer/Footer'
import Navbar from '../../Navbar'
      
function Roadmap() {
  return (
    <div>
        <Navbar />
        <div
        className={false ? 'home__hero-section' : 'home__hero-section darkBg' }
      >
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className='container'>
            <section id="roadmap">
            <div className="row">
                <div className="col">
                    <div className='home__hero-text-wrapper'>
                    <div className='top-line'>ROADMAP</div>
                    <h1 className={true ? 'heading' : 'heading'}>You don't want to miss this.</h1>
                    <p
                        className={
                        true
                            ? 'home__hero-subtitle'
                            : 'home__hero-subtitle'
                        }
                    >
                        Top priority are our investors and their voice is the one we always have and will listen to, as this is a community-driven project, 
                        if a requested change gets a majority of the community backing, we will be open to the idea of making amendments to any such feature if it is beneficial to the long-term prospects of the project. 
                    </p>
                    </div>
                </div>
                <div className="col">
                    <div className='home__hero-img-wrapper'>
                    <img src='images/web/upsidedown.gif' width="400px" alt='' className='home__hero-img' />
                    </div>
                </div>
                </div>
                </section>
                <p className="bottom-space">
                </p>
            <div
                className='row'
            >
                <div width="100%">
                <img src='images/web/roadmap.png' width="100%" alt='' className='home__hero-img' />
                </div>
            </div>
            
            <p className="bottom-space"></p>
            </div>
            </div>

            <Footer />
    </div>
  );
}

export default Roadmap;
