import { GiWallet, GiDroplets, GiSpermWhale } from 'react-icons/gi';
import PieChart from './Donuts';
import { Button } from '../../Button';


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
                  <p className="bottom-space"></p>
                  <div className='home__hero-text-wrapper'>
                        <div className='top-line'>Presale</div>
                      </div>
                  <div className="tokenomics__container">
                    <h2 style={{
                display: 'flex',
                fontSize: '30px',
                fontWeight: '900',
                textAlign: 'center'
              }}>ANTI WHALE&emsp;</h2><hr width="3" size="50"/><h2 style={{
                display: 'flex',
                fontSize: '55px',
                fontWeight: '200',
                textAlign: 'center'
              }}>&emsp;PRESALE CAP</h2>
                  </div>
                  <div className="tokenomics__container">
                    <h1 style={{
                display: 'flex',
                fontSize: '100px',
                fontWeight: '200'
              }}>0.75%</h1>
                  </div>
                  <div className="tokenomics__container">
                    <p>of total supply</p>
                  </div>
                  <div
                      className='row home__hero-row'
                      style={{
                        display: 'flex',
                        flexDirection: false ? 'row-reverse' : 'row'
                      }}
                    >
                    <div className='col'>

                  <div className="tokenomics__container">
                      <div className="presale"> 
                        <table>
                          <tr>
                            <th><h4>$YRO</h4></th>
                            <th><h4>$BNB</h4></th>
                          </tr>
                          <tr>
                            <td>750 000 000</td>
                            <td>1.50&emsp;BNB</td>
                          </tr>
                          <tr>
                            <td>675 000 000</td>
                            <td>1.35&emsp;BNB</td>
                          </tr>
                          <tr>
                            <td>600 000 000</td>
                            <td>1.20&emsp;BNB</td>
                          </tr>
                          <tr>
                            <td>525 000 000</td>
                            <td>1.05&emsp;BNB</td>
                          </tr>
                          <tr>
                            <td>450 000 000</td>
                            <td>0.90&emsp;BNB</td>
                          </tr>
                          <tr>
                            <td>375 000 000</td>
                            <td>0.75&emsp;BNB</td>
                          </tr>
                          <tr>
                            <td>300 000 000</td>
                            <td>0.60&emsp;BNB</td>
                          </tr>
                          <tr>
                            <td>225 000 000</td>
                            <td>0.45&emsp;BNB</td>
                          </tr>
                          <tr>
                            <td>150 000 000</td>
                            <td>0.30&emsp;BNB</td>
                          </tr>
                          <tr>
                            <td>75 000 000</td>
                            <td>0.15&emsp;BNB</td>
                          </tr>
                          <tr>
                            <td>50 000 000</td>
                            <td>0.10&emsp;BNB</td>
                          </tr>
                        </table>
                      </div>
                      </div>
                    </div>
                  <div className='col'>
                    <div style={{ width: 500, height: 250 }}>
                        <PieChart
                          data={[{ key: "Presale & Launch: 85%", value: 85 }, 
                          { key: "Marketing: 7.5%", value: 7.5 },
                          { key: "Dev: 7.5%", value: 7.5 }]}
                          label="Token Allocation"
                        />
                    </div>
              </div>
            </div>
                </div>
              </section>
          <p className="bottom-space-sm"></p>

          <div className="tokenomics__container">
                    <h1 style={{
                                display: 'flex',
                                fontSize: '20px',
                                fontWeight: '200',
                                textAlign: 'center'
                              }}>Presale address to be announced. Join our Telegram: </h1>

                  </div>

          <p className="bottom-space-sm"></p>
                  <div className="tokenomics__container">
                      <a href='https://t.me/YieldRocketTG'>
                        <Button buttonSize='btn--wide' buttonColor='blue'>
                          Telegram
                        </Button>
                      </a>
                  </div>
    </div>
  );
}

export default Tokenomics;
