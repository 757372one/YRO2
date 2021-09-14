import { Button } from '../../Button';

function Landing() {
  return (
    <div>
        <div
              className='row home__hero-row'
              style={{
                display: 'flex',
                flexDirection: false ? 'row-reverse' : 'row'
              }}
            >
              <div className='col'>
                <div className='home__hero-text-wrapper'>
                  <div className='top-line'>Your Exclusive Access:</div>
                  <h1 className={true ? 'heading' : 'heading'}>YieldRocket - Earn passive income through holding.</h1>
                  <p
                    className={
                      true
                        ? 'home__hero-subtitle'
                        : 'home__hero-subtitle'
                    }
                  >
                    YieldRocket is a revolutionary automatic rewarding token. Hold, sit back, relax and enjoy passive BUSD reflection straight into your wallet
                  </p>
                  <div className='row'>
                    <div className='col'>
                      <div
                      className='btn-link'>
                      <a href='https://t.me/YieldRocketTG'>
                        <Button buttonSize='btn--wide' buttonColor='blue'>
                          Telegram
                        </Button>
                      </a>
                    </div>
                    </div>
                    <div className='col'>
                    <div
                      className='btn-link'>
                        <Button buttonSize='btn--wide' buttonColor='red'>
                          PancakeSwap
                        </Button>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='home__hero-img-wrapper'>
                <div className='float-div-2'>
                  <img src='images/web/rocket1.gif' alt='' width="500px" className='home__hero-img' />
                </div>
                </div>
              </div>
            </div>
            <p className="bottom-space-sm"></p>
            <div to='' className='banner__wrapper'>
            <div to='' className='banner__container'>
            <div className='banner__container-card'>
                  <a href='https://pancakeswap.finance/'>
                  <img src='images/web/pancakeswap.png'  width="150px" alt=''  />
                  </a>
                  </div>
            <div className='banner__container-card'>
                  <a href='https://bscscan.com/address/'>
                  <img src='images/web/bsc.png'  width="150px" alt=''  />
                  </a>
                  </div>
                  <div className='banner__container-card'>
                  <a href='https://bscscan.com/token/'>
                  <img src='images/web/bsc1.png'  width="150px" alt=''  />
                  </a>
                  </div>

                  <div className='banner__container-card'>
                  <a href='https://www.dextools.io/app/bsc/pair-explorer/'>
                  <img src='images/web/dext.png'  width="150px" alt=''  />
                  </a>
                  </div>

                  <div className='banner__container-card'>
                  <a href='https://poocoin.app/tokens/'>
                  <img src='images/web/poocoin.png'  width="150px" alt=''  />
                  </a>
                  </div>
                  </div>
                  </div>
            <p className="bottom-space"></p>
            <div
              className='row home__hero-row'
              style={{
                display: 'flex',
                flexDirection: true ? 'row-reverse' : 'row'
              }}
            >
              <div className='col'>
                <div className='home__hero-text-wrapper'>
                  <br />
                  <h1 className={true ? 'heading' : 'heading'}>Saving money has never been easier</h1>
                    <p
                      className={
                        true
                          ? 'home__hero-subtitle'
                          : 'home__hero-subtitle'
                      }
                    >
                      YieldRocket was created with the sole purpose of enabling millions of people to start saving stable coins whilst holding our token. No other involvement required. Yield Rocket brings actual value by being a utility token, in-fact we indend to enable our holders with more financial tools to help them accumulate crypto assets efficiently and effortlessly 
                      <br /> 
                    </p>                
                </div>
              </div>
              <div className='col'>
                <div className='home__hero-img-wrapper'>
                  <div className='img-zoom'>
                  <img src='images/web/astronaut.png'  width="500px" alt='cryptonauts' className='home__hero-img' />
                  </div>
                </div>
              </div>
            </div>
            <p className="bottom-space"></p>
    </div>
  );
}

export default Landing;
