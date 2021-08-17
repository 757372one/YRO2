import Landing from '../Landing/Landing';
import Tokenomics from '../Tokenomics/Tokenomics';
import Roadmap from '../Roadmap/Roadmap';
import Buy from '../Buy/Buy';
import Team from '../Team/Team';

function Home() {
  return (
    <div>
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
    </div>
  );
}

export default Home;
