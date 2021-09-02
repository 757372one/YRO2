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
        <div className="tokenomics__container">
        <h1 style={{
                    display: 'flex',
                    fontSize: '15px',
                    fontWeight: '200',
                    textAlign: 'center',
                    lineHeight:'10px',
                    color:'red'
                    }}>0x9BB9E3B5061c4AFD04D22A98DCf7B57c877aD6e3</h1>
        </div>
        <div className="tokenomics__container">
        <h1 style={{
                    display: 'flex',
                    fontSize: '12px',
                    fontWeight: '200',
                    textAlign: 'center',
                    lineHeight:'10px'
                    }}>MIN: 0.1 BNB - MAX: 1.5 BNB</h1>
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