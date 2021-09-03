import React, { Component } from 'react';
import { Button } from '../../Button';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Presale extends Component {
    state = {
        value: '0x9BB9E3B5061c4AFD04D22A98DCf7B57c877aD6e3',
        copied: false,
      };
  render() {
    return (
      <div>
        <p className="bottom-space-sm" />
        
        <div className='tokenomics__wrapper'>
        <div className="tokenomics__container">
        <h1 style={{
                    display: 'flex',
                    fontSize: '20px',
                    fontWeight: '200',
                    textAlign: 'center'
                    }}>Presale Address (BEP20):</h1>
        </div>
        <p className="bottom-space-xsm" />
        <div className="tokenomics__container">
        <img src='images/web/presale.png' alt='' style={{width:'150px', height:'150px'}} className='home__hero-img' />
        </div>
        <p className="bottom-space-xsm" />
        <div className="tokenomics__container">
        <h1 style={{
                    display: 'flex',
                    fontSize: '17px',
                    fontWeight: '200',
                    textAlign: 'center',
                    lineHeight:'12px',
                    color:'green'
                    }}>0x9BB9E3B5061c4AFD04D22A98DCf7B57c877aD6e3</h1>
        </div>
        <div className="tokenomics__container">
        <h1 style={{
                    display: 'flex',
                    fontSize: '15px',
                    fontWeight: '200',
                    textAlign: 'center',
                    lineHeight:'10px'
                    }}>MIN: 0.1 BNB - MAX: 1.5 BNB</h1>
        </div>
        <p className="bottom-space-xsm" />
        <div className="tokenomics__container">

        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <Button buttonStyle='btn--outline'>Copy Presale Address</Button>
        </CopyToClipboard>
        </div>
        <div className="tokenomics__container">

        {this.state.copied ? <span style={{color: 'green'}}>Copied✓</span> : null}
      </div>
      </div>
       <p className="bottom-space-sm" />

       <div className="tokenomics__container">
        <h1 style={{
                    display: 'flex',
                    fontSize: '17px',
                    fontWeight: '100',
                    textAlign: 'center'
                    }}>95% of the presale funds go into Pancakeswap Liquidity, remaining 5% into paid promotion of the token launch.
                    <br />Public DxSale presale is planned after the private presale only IF the private presale does not reach it's soft cap goals.
                    <br />Public DxSale presale token price will increase by a factor of 1.75 (175%) </h1>
        </div>
        <div className="tokenomics__container">
        <h1 style={{
                    display: 'flex',
                    fontSize: '17px',
                    fontWeight: '100',
                    textAlign: 'center'
                    }}>Presale tokens will be sent out within 48h after the presale ends.
                    <br /> Pancakeswap launch and contract will be annouced shortly after. 
                    <br /> (Sept 10th 2021)</h1>
        </div>
        <p className="bottom-space-xsm" />
        <div className="tokenomics__container">
        <h1 style={{
                    display: 'flex',
                    fontSize: '17px',
                    fontWeight: '100',
                    textAlign: 'center'
                    }}>Thank you for your participation.
                    <br /> Salut!</h1>
        </div>
        <div className="tokenomics__container">
        <img src='images/web/salut.png' alt='' style={{width:'125px', height:'225px'}} className='home__hero-img' />
        </div>
      </div>
    );
  }
}

export default Presale;

