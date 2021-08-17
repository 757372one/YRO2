import { GiWallet, GiDroplets, GiSpermWhale } from 'react-icons/gi';

function Tokenomics() {
  return (
    <div>
        <section id="tokenomics">
              <div
                className='row home__hero-row'
                style={{
                  display: 'flex',
                  flexDirection: 'false' === 'start' ? 'row-reverse' : 'row'
                }}
              >
                <div className='col'>
                  <div className='home__hero-text-wrapper'>
                    <div className='top-line'>Tokenomics</div>
                  </div>
                </div>
                <div className='tokenomics__wrapper'>
                  <div className="tokenomics__container">
                  <div className='top-line'>Total Supply: </div><br />
                    <div className='top-line'>100,000,000,000</div>
                    <p className="bottom-space"></p>
                  </div>
                  <div className='tokenomics__container'>
                    <div className='tokenomics__container-card'>
                      <div className='tokenomics__container-cardInfo'>
                        <div className='icon'>
                          <h1><GiWallet /></h1>
                        </div>
                        <h3>$BUSD rewards</h3>
                        <h4>12%</h4>
                        <p>per transaction</p>
                        <ul className='tokenomics__container-features'>
                          <li>Stable coin reflection</li>
                          <li>No mininum hold</li>
                          <li>Auto-claimed</li>
                        </ul>
                      </div>
                    </div>
                    <div to='' className='tokenomics__container-card'>
                      <div className='tokenomics__container-cardInfo'>
                        <div className="tokenomics__container-features">
                          <h1><GiDroplets /></h1>
                        </div>
                        <h3>Liquidity</h3>
                        <h4>8%</h4>
                        <p>per transaction</p>
                        <ul className='tokenomics__container-features'>
                          <li>Automatically generated</li>
                          <li>Pairs and exchanges</li>
                          <li>Liquidity Lock</li>
                        </ul>
                      </div>
                    </div>
                    <div to='' className='tokenomics__container-card'>
                      <div className='tokenomics__container-cardInfo'>
                        <div className='icon'>
                          <h1><GiSpermWhale /></h1>
                        </div>
                        <h3>Anti-Whale</h3>
                        <h4>1.5%</h4>
                        <p>max hold of total supply</p>
                        <ul className='tokenomics__container-features'>
                          <li>Sale tax increase x 1.75</li>
                          <li>Anti-whale structure</li>
                          <li>Anti-dump mechanisms</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </section>
          <p className="bottom-space"></p>
    </div>
  );
}

export default Tokenomics;
