import React, { Component } from 'react';
import { Button } from '../../Button';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Presale extends Component {
    state = {
        value: '0xD77f6C488E11A400FaCb22AeCe73AB25F557B8a9',
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
        <div className="tokenomics__container">
        <h1 style={{
                    display: 'flex',
                    fontSize: '15px',
                    fontWeight: '200',
                    textAlign: 'center'
                    }}>0xD77f6C488E11A400FaCb22AeCe73AB25F557B8a9</h1>
        </div>
        <div className="tokenomics__container">

        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <Button buttonStyle='btn--outline'>Copy Address</Button>
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
                    fontSize: '20px',
                    fontWeight: '200',
                    textAlign: 'center'
                    }}>Presale tokens will be sent out within 48h after presale completion.
                    <br /> Pancakeswap launch and contract will be annouced shortly after.</h1>
        </div>
      </div>
    );
  }
}

export default Presale;