import React, { useEffect, useState, useRef} from 'react';
import { GiWallet, GiDroplets, GiSpermWhale } from 'react-icons/gi';
import PieChart from './Donuts';



function Tokenomics() {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  const [timerMiliseconds, setTimerMiliseconds] = useState('0');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('September 8, 2021 21:00:00').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(distance % (1000 * 60) / 1000);
      const miliseconds = Math.floor(distance % ((1000 * 60) / 1000)/10)

      if (distance < 0) {
        clearInterval(interval.current);
      }else{
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
        setTimerMiliseconds(miliseconds)
      }

    }, interval);
  }

  //compdidmount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  })



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
                    <p>of total supply*</p>
                  </div>

                  <div className="tokenomics__container">
                  <h1 style={{
                                display: 'flex',
                                fontSize: '10px',
                                fontWeight: '200',
                                textAlign: 'center'
                              }}>*Listed price is an estimation that will be scaled acordingly to accomodate all participating presale investors</h1>
                  
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
                          { key: "Development: 6%", value: 6 },
                          { key: "Marketing: 9%", value: 9 }]}
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
                                fontSize: '30px',
                                fontWeight: '300',
                                textAlign: 'center'
                              }}>PRIVATE PRESALE ENDS</h1>
          </div>
          <div className="tokenomics__container">
                    <h1 style={{
                                display: 'flex',
                                fontSize: '20px',
                                fontWeight: '200',
                                textAlign: 'center'
                              }}>September 8, 2021</h1>
          </div>
          <div
              className='counter-container'
            >
                <div className='count-timer'>
                  <div style={{width:'50px'}}>
                  <section>
                    <h1 className='thin-line'>{timerDays}</h1>
                  </section>
                  </div>
                  <span>.</span>
                  <div style={{width:'50px'}}>
                  <section>
                    <h1 className='thin-line'>{timerHours}</h1>
                  </section>
                  </div>
                  <span>.</span>
                  <div style={{width:'50px'}}>
                  <section>
                    <h1 className='thin-line'>{timerMinutes}</h1>
                  </section>
                  </div>
                  <span>.</span>
                  <div style={{width:'50px'}}>
                  <section>
                    <h1 className='thin-line'>{timerSeconds}</h1>
                  </section>
                  </div>
                  <span>.</span>
                  <div style={{width:'50px'}}>
                  <section>
                    <h1 className='thin-line'>{timerMiliseconds}</h1>
                  </section>
                  </div>
                  
              </div>
            </div>
          <p className="bottom-space-sm"></p>
                  
          </div>
  );
}

export default Tokenomics;
