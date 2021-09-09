import Footer from '../Footer/Footer'
import Navbar from '../../Navbar'
      
function Whitepaper() {
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
                <div className='row'>
                    <div width="100%">
                        <img src='images/web/whitepaper.png' width="100%" alt='' className='home__hero-img' />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default Whitepaper;
