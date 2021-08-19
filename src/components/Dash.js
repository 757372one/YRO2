import React, { Component } from 'react';
import Web3 from 'web3'
import { Button } from './Button';
import { busdAbi } from "./busdAbi";
import Navbar from './Navbar';
import Footer from './pages/Footer/Footer'

class Dash extends Component {
  YieldRocketContract = "0x59197299e100770b7193c40678b79ba8bfe8b1c4";
  biggerNumber =   "1000000000000000000000000";
  bigNumber =   "1000000000000000000";
  balanceBUSDRewards = 0;
  totalBUSDRewards = 0;
  totalBUSDtokens = 0;
  networkId = 0;
  busdApp = null;
  web3 = null;

  async componentWillMount() {
    await this.loadWeb3()
    if(this.web3 !== null){
      await this.loadNetwork()
      await this.loadContract()
    }
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      this.web3 = window.web3
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
      this.web3 = window.web3
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
    
  }

  

  wait(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
  }

  async loadNetwork() {
   // this.web3 = window.web3
    const networkId = await this.web3.eth.net.getId()
	if(networkId === 56){
		document.getElementById('networkId').innerHTML = "Binance Smart Chain";
	}
	else if(networkId === 137){
		document.getElementById('networkId').innerHTML = "Matic Mainnet";
	}
	else{
    document.getElementById('networkId').innerHTML = (networkId);
    }
  }

  async loadContract() {
    this.busdApp = new this.web3.eth.Contract(busdAbi, this.YieldRocketContract);
    let totalBUSD = await this.busdApp.methods.getTotalDividendsDistributed().call();
    document.getElementById('totalBUSDRewards').innerHTML = (totalBUSD/this.bigNumber).toFixed(2);
  }

  async connect() {
    await window.ethereum.enable()
    const accounts = await this.web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
 /*   document.getElementById('walletAddress').innerHTML = ((await (this.busdApp.methods.balanceOf(this.state.account).call()))/this.biggerNumber).toFixed(2)+"M";
   
   document.getElementById('walletRewards').innerHTML = 
   ((await (this.busdApp.methods.getAccountDividendsInfo(this.state.account).call()))[4]/this.bigNumber).toFixed(2);	
  */
  
  this.setState({
      walletRewards: ((await (this.busdApp.methods.getAccountDividendsInfo(this.state.account).call()))[4]/this.bigNumber).toFixed(2)
	      });
		  
		   this.setState({
     walletAddress: ((await (this.busdApp.methods.balanceOf(this.state.account).call()))/this.biggerNumber).toFixed(2)+"M"
	      });
  
  /*document.getElementById('walletRewards').innerHTML = 
    ((await (this.busdApp.methods.balanceOf(this.state.account).call()))/this.biggerNumber).toFixed(2)+"M";*/
  }
  
   async disconnect() {
    this.setState({
      account: '',
      walletRewards: 0,
	  walletAddress: 0
    });
  }

  async claim(){
    await new Promise((resolve, reject) => {
      this.busdApp.methods.claim()
      .send({from: this.state.account})
        .on('confirmation', (confirmationNumber) => {
            resolve()
        })
        .on('error', (error) => {
          reject(error)
        })
    })
  }

  async readWallet() {
    let wallet = document.getElementById("walletToCheck").value;
    console.log(wallet);
    document.getElementById('balanceBUSDRewards').innerHTML = 
    ((await (this.busdApp.methods.getAccountDividendsInfo(wallet).call()))[4]/this.bigNumber).toFixed(2);
  }
 CheckWalletConnection = () => {
    if(this.state.account.length > 0){
      return <Button buttonSize='btn--medium' buttonColor='red' onClick={() => {this.disconnect() }}>{this.state.account.substr(0,6)}..{this.state.account.substr(38,4)}</Button>;
    }else{
      return <Button buttonSize='btn--medium' buttonColor='red' onClick={() => {this.connect() }}>Connect</Button>;
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      loading: true,
      networkId: 0,
      balanceOf:0,
      walletRewards:0,
      totalBUSDRewards:0,
      balanceBUSDRewards:0
    }
  }
  
  /*<button class="bdr1" onClick={() => this.connect()}>Connect Wallet</button><br />*/
  render() {
    return (
      <div>
        <Navbar />
      <div
        className={false ? 'home__hero-section' : 'home__hero-section darkBg' }
      >
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className='container'>
        <p className="bottom-space"></p>
            <div
              className='row home__hero-row'
              style={{
                display: 'flex',
                flexDirection: true ? 'row-reverse' : 'row',
                marginTop: '-200px'
              }}
            >
              <div className='col'>
                <div className='home__hero-text-wrapper'>
                  <h1 className={true ? 'heading' : 'heading'}>YieldRocket Flight Control</h1>
                  <p className="bottom-space-sm"></p>
                <div className='row'>
                    <div className='col'>
                      <div
                      className='btn-link'>
                      <this.CheckWalletConnection/>
                    </div>
                    </div>
                    <div className='col'>
                    <div
                      className='btn-link'>
                        <Button buttonSize='btn--medium' buttonColor='blue' onClick={() => this.claim()}>
                          Claim
                        </Button>
                    </div>
                    </div>
                  </div>
                  <br />
                  <p className="bottom-space-sm"></p>
                  <div className='top-line' id="networkId"></div>
                  <p className="bottom-space-sm"></p>
                    <p
                      className={
                        true
                          ? 'home__hero-subtitle'
                          : 'home__hero-subtitle'
                      }
                    >
                      $BUSD rewards are sent automatically to your wallet. Gas fees will be incurred if you want to claim manually.
                      <br /> 
                    </p>   
                </div>
              </div>
              <div className='col'>
                <div className='home__hero-img-wrapper'>
                  <img src='images/panel.png' style={{
                    padding: '2px'
                    }} alt='' className='home__hero-img' />
                  <p className="bottom-space-sm"></p>
                  
                </div>
              </div>
            </div>
          <p className="bottom-space-sm"></p>
              <div className='tokenomics__wrapper'>
                <div className='tokenomics__container'>
                  <div to='' className='dash__container-card'>
                    <div className='dash__container-cardInfo'>
                        <h4>Collected Rewards</h4>
                        <p className="bottom-space-sm" />
                        <p id="walletRewards">{this.state.walletRewards}</p><p> $BUSD</p>
                        <p className="bottom-space-sm" />
                    </div>
                  </div>
                  <div to='' className='dash__container-card'>
                    <div className='dash__container-cardInfo'>
                        <h4>Wallet Ballance</h4>
                        <p className="bottom-space-sm" />
                        <p id="walletAddress">{this.state.walletAddress}</p><p> $YRO</p>
                        <p className="bottom-space-sm" />
                      </div>
                  </div>
                  <div to='' className='dash__container-card'>
                    <div className='dash__container-cardInfo'>
                        <h4>Total BUSD paid to All</h4>
                        <p className="bottom-space-sm" />
                        <span id="totalBUSDRewards"></span><span>$BUSD</span>
                        <p className="bottom-space-sm" />
                    </div>
                  </div>
                </div>
              </div>
                        <p className="bottom-space"></p>
            <div className='tokenomics__wrapper'>
                <div className='tokenomics__container'>
                <div className='float-div-2'>
                  <img src='images/iss.png' style={{
                    padding: '10px'
                    }} alt=""/>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Dash;