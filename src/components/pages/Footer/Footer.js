import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Button } from '../../Button';
import logo_white from '../../logo_white.png';
import {
  FaTwitter,
  FaTelegram,
  FaRedditSquare
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive community to receive the latest info on passive income streams in crypto.
        </p>
        <div className='row'>
          <div className='col'>
            <div className='social-media-wrap'>
              <a href='https://t.me/YieldRocketTG'>
                <Button buttonStyle='btn--outline'>
                  Join our Telegram
                </Button>
              </a>
            </div>
          </div>
          <div className='col'>
          <div className='social-media-wrap'>
          <a href='hello@yieldrocket.io'>
              <Button buttonStyle='btn--outline'>
                hello@yieldrocket.io
              </Button>
            </a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
          <img src='./upsidedown.gif' width="400px" alt='' className='home__hero-img' />
          </div>
        </div>
      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
          <Link to='/' className='social-logo'>
            <img  alt='footer-logo' src={logo_white} width="50" height="50" />              ieldRocket
            </Link>
          </div>
          <small className='website-rights'>YieldRocket © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={
                '//t.me/YieldRocketTG'
              }
              target='_blank'
              aria-label='Telegram'
            >
              <FaTelegram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//twitter.com/yieldrocket'
              }
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.reddit.com/r/CryptoCurrencyTrading/comments/oyflrc/yieldrocket_yro_earn_auto_passive_income_in_busd/'
              }
              target='_blank'
              aria-label='Reddit'
            >
              <FaRedditSquare />
            </Link>
          </div>
        </div>
      </section>
      <br/>
      <br/>
      <section className='footer-subscription'>
        <p style={{fontSize: 10}}>Trading cryptocurrencies carries a high level of risk, and may not be suitable for all investors. 
          Before deciding to trade cryptocurrency you should carefully consider your investment objectives, level of experience, and risk appetite. 
          <br/>The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. 
          <br/>Any opinions, news, research, analyses, prices, or other information contained on this website is provided as general market commentary, and does not constitute investment advice. 
          <br/>The YieldRocket team and its affiliates will not accept liability for any loss or damage, including without limitation to, any loss of profit, which may arise directly or indirectly from use of or reliance on such information. 
          <br/>All opinions expressed on this site are owned by the respective writer and should never be considered as advice in any form.
          <br/>
          <br/>The YieldRocket team and its affiliates makes no representation or warranties as to the accuracy and or timelines of the information contained herein. 
          <br/> A qualified professional should be consulted before making any financial decisions.
        </p>
      </section>
    </div>
  );
}

export default Footer;
