import React from 'react';
import { GiWallet, GiDroplets, GiSpermWhale } from 'react-icons/gi';
import PieChart from './Donuts';
import { GiReceiveMoney } from 'react-icons/gi';
import { BsCloudDownload } from 'react-icons/bs';
import { FaMoneyBillWaveAlt, FaExchangeAlt } from 'react-icons/fa';



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
                        <h4>5%</h4>
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
                        <h4>4%</h4>
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
                  </div>
                  <h1 style={{
                                display: 'flex',
                                fontSize: '15px',
                                fontWeight: '200',
                                textAlign: 'left',
                                marginTop: '25px',
                                marginLeft: '50px',
                                marginRight: '5px'
                              }}>5%&nbsp;split proportionately between YRO holders in BUSD.
                              <br />4%&ensp;added back to the Liquidity Pool to increase price stability.
                              <br />1%&ensp;added to fund the continiuous development of YieldRocket.
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
          <div className="tokenomics__container">
                    <h1 style={{
                                display: 'flex',
                                fontSize: '18px',
                                fontWeight: '300',
                                textAlign: 'center',
                                padding: '25px'
                              }}>By holding YRO you will automatically receive BUSD (Binance-Pegged USD dollar) directly into your wallet as each BUY and SELL occurs on the network, 
                              a percentage from every transaction is distributed to YRO holders in the form of BUSD.
                              </h1>
                              </div>
                  <div className="tokenomics__container">
                    <h1 style={{
                                display: 'flex',
                                fontSize: '18px',
                                fontWeight: '300',
                                textAlign: 'center',
                              }}>YRO holders are able to Automatically farm without staking coins on any 3rd party platform. 
                              All you need to do to farm BUSD straight to your wallet is HOLD YieldRocket and reap the rewards.
                              </h1>
                              </div>

          <p className="bottom-space-md" />
                              <div className="tokenomics__container">
        <img src='images/web/salut.png' alt='' style={{width:'125px', height:'225px'}} className='home__hero-img' />
        </div>
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
                  
          </div>
  );
}

export default Tokenomics;
