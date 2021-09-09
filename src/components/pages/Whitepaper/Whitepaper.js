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
                <p className="bottom-space" />
                <p className="bottom-space" />
                <p className="bottom-space" />
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default Whitepaper;
