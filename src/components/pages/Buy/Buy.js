import { GiReceiveMoney } from 'react-icons/gi';
import { BsCloudDownload } from 'react-icons/bs';
import { FaMoneyBillWaveAlt, FaExchangeAlt } from 'react-icons/fa';
import Footer from '../Footer/Footer'
import Navbar from '../../Navbar'

function Buy() {
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
        <p className="bottom-space-md" />
        <section id="buy">
          <div
              className='row home__hero-row'
              style={{
                display: 'flex',
                flexDirection: false ? 'row-reverse' : 'row'
              }}
            >
              <div className='col'>
                <div className='home__hero-text-wrapper'>
                <div className='top-line'>How to start earning passive income?</div>
            <p className="bottom-space-md" />
            
                  <p
                    className={
                      true
                        ? 'home__hero-subtitle'
                        : 'home__hero-subtitle dark'
                    }
                  >
                  The $BUSD rewards are proportional to the amount of YieldRocket tokens you hold. 
                  The more YieldRocket tokens you buy the bigger the rewards you will receive. 
                  Add both YieldRocket token and BUSD stable coin to your wallet to view your ballance. 
                  Hold your YieldRocket tokens and simply hodl. Your $BUSD rewards will be sent to you daily or more frequently depending on the trading volume.
                  You can also manually claim the rewards via the dashboard or interacting with the smart contract directly on bscscan, however if the gas fee is higher than the reward it's best to wait for the auto-claim function to handle it.
                  </p>
                  
                </div>
              </div>
                <div className='col'>
                  <div className='img-zoom'>
                      <div className='buy__wrapper'>
                        <img src='images/web/bitcoin.gif' alt='' margin width="200px" className='home__hero-img' />
                      </div>
                    </div>
              </div>
            </div>
            </section>
            <p className="bottom-space-md"></p>

          <div className='buy__wrapper'>
                <div className='buy__container'>
                <div to='' className='buy__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <h1><BsCloudDownload color="white" width="50px"/></h1>
                      </div>
                      <h3>#1</h3>
                      <p>Download Trust Wallet or Metamask</p>
                    </div>
                  </div>
                  <div to='' className='buy__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <h1><FaMoneyBillWaveAlt color="white" width="50px"/></h1>
                      </div>
                      <h3>#2</h3>
                      <p>Fund your wallet with BNB</p>
                    </div>
                  </div>
                  <div to='' className='buy__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <h1><FaExchangeAlt color="white" width="50px"/></h1>
                      </div>
                      <h3>#3</h3>
                      <p>Swap BNB for $YieldRocket on Pancakeswap</p>
                    </div>
                  </div>
                  <div to='' className='buy__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <h1><GiReceiveMoney color="white" width="50px"/></h1>
                      </div>
                      <h3>#4</h3>
                      <p>$BUSD rewards will be automatically sent to your wallet</p>
                    </div>
                  </div>
                </div>

              <p className="bottom-space-xsm" />
              </div>
              <p className="bottom-space" />
              </div>
            <p className="bottom-space" />
            </div>
            <Footer />
      </div>
    );
  }
  
  export default Buy;
  