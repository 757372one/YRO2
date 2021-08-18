import Landing from '../Landing/Landing';
import Tokenomics from '../Tokenomics/Tokenomics';
import Roadmap from '../Roadmap/Roadmap';
import Buy from '../Buy/Buy';
import Team from '../Team/Team';
import Footer from '../Footer/Footer';
import Navbar from '../../Navbar';
import PuffLoader from "react-spinners/PuffLoader";
import { useState, useEffect } from 'react';

function Home() {
  const [loading, setLoading] = useState(false);
  let [color] = useState('#73BFFF')

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)

  }, [])

  return (
    <div>
      {loading ? (
  
        <div className={false ? 'home__hero-section' : 'home__hero-section darkBg-load' } >
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
            <div className='container'>
            <div className="tokenomics__container">
                    <div className='top-line'></div>
                    <br />
                    <PuffLoader color={color} loading={loading} size={150} />
                    <p className="bottom-space"></p>
                  </div>
            </div>
        </div>
  
        
  
      ) : (
        <div>
          <Navbar />
            <div className={false ? 'home__hero-section' : 'home__hero-section darkBg' } >
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
              <div className='container'>
                    <Landing />
                    <Tokenomics />
                    <Roadmap />
                    <Buy />
                    <Team />
              </div>
          </div>
          <Footer />
        </div>
        
      )}
      
    </div>
  );
  }
  
  export default Home;



