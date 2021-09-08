import React from 'react';
import { GiWallet, GiDroplets, GiSpermWhale } from 'react-icons/gi';
import PieChart from './Donuts';



function Tokenomics() {
  return (
    <div>
        <section id="tokenomics">
                <div className='tokenomics__wrapper'>
                <div className='top-line'>Tokenomics</div>
                  <div className="tokenomics__container">
                    <div className='top-line'>Total Supply: </div>
                    <br />
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
                        <h4>10%</h4>
                        <p>per transaction</p>
                        <ul className='tokenomics__container-features'>
                          <li>Stable coin reflection</li>
                          <li>Auto-distributed</li>
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
                  <p className="bottom-space"></p>
                  <div className='home__hero-text-wrapper'>
                        <div className='top-line'>Fair Launch</div>
                      </div>

          <div className="tokenomics__container">
                    <h1 style={{
                                display: 'flex',
                                fontSize: '15px',
                                fontWeight: '200',
                                textAlign: 'center',
                                marginTop: '-20px'
                              }}>September 10, 2021</h1>
          </div>
                  <div className="tokenomics__container">
                    <h2 style={{
                display: 'flex',
                fontSize: '30px',
                fontWeight: '900',
                textAlign: 'center'
              }}>ANTI-WHALE&emsp;</h2><hr width="3" size="50"/><h2 style={{
                display: 'flex',
                fontSize: '55px',
                fontWeight: '200',
                textAlign: 'center'
              }}>&emsp;MAX WALLET</h2>
                  </div>
                  <div className="tokenomics__container">
                    <h1 style={{
                display: 'flex',
                fontSize: '100px',
                fontWeight: '200'
              }}>1.5%</h1>
                  </div>
                  <div className="tokenomics__container">
                    <p>of total supply*</p>
                  </div>
                  <div
                      className='row home__hero-row'
                      style={{
                        display: 'flex',
                        flexDirection: false ? 'row-reverse' : 'row'
                      }}
                    >
                    <div className='col'>
                    <div style={{paddingLeft:'60px'}}>
                  <img src='images/web/tax.png'  width="500px" alt='tax' className='home__hero-img' />
                  </div>
                  <h1 style={{
                                display: 'flex',
                                fontSize: '13px',
                                fontWeight: '200',
                                textAlign: 'left',
                                marginTop: '15px',
                                marginLeft: '75px',
                                marginRight: '10px'
                              }}>10%&nbsp;split proportionately between YRO holders in BUSD.
                              <br />8%&ensp;added back to the Liquidity Pool to increase price stability.
                              <br />2%&ensp;added to fund the continiuous development of YieldRocket.
                            </h1>
              </div>
                  <div className='col'>
                    <div style={{ width: 500, height: 250 }}>
                        <PieChart
                          data={[{ key: "Exchange Launch: 82%", value: 82 }, 
                          { key: "Marketing: 9%", value: 9 },
                          { key: "Listing Expansion: 9%", value: 9 }]}
                          label="Token Allocation"
                        />
                    </div>
              </div>
            </div>
                </div>
              </section>
          <p className="bottom-space-md" />
                  
          </div>
  );
}

export default Tokenomics;
