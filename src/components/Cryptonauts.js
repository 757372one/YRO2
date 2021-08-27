import Web3 from 'web3'
import CryptonautToken from '../abis/CryptonautToken.json'
import Navbar from './Navbar';
import Footer from './pages/Footer/Footer'
import React, { Component } from 'react';
import { Button } from './Button';

const CARD_ARRAY = [
  {name: 'Fundamental_1',img: '/images/cryptonauts/fundamental/Fundamental_1.png'},
  {name: 'Fundamental_2',img: '/images/cryptonauts/fundamental/Fundamental_2.png'},
  {name: 'Fundamental_3',img: '/images/cryptonauts/fundamental/Fundamental_3.png'},
  {name: 'Fundamental_4',img: '/images/cryptonauts/fundamental/Fundamental_4.png'},
  {name: 'Fundamental_5',img: '/images/cryptonauts/fundamental/Fundamental_5.png'},
  {name: 'Fundamental_6',img: '/images/cryptonauts/fundamental/Fundamental_6.png'},
  {name: 'Fundamental_7',img: '/images/cryptonauts/fundamental/Fundamental_7.png'},
  {name: 'Fundamental_8',img: '/images/cryptonauts/fundamental/Fundamental_8.png'},
  {name: 'Fundamental_9',img: '/images/cryptonauts/fundamental/Fundamental_9.png'},
  {name: 'Fundamental_10',img: '/images/cryptonauts/fundamental/Fundamental_10.png'},
  {name: 'Fundamental_11',img: '/images/cryptonauts/fundamental/Fundamental_11.png'},
  {name: 'Fundamental_12',img: '/images/cryptonauts/fundamental/Fundamental_12.png'},
  {name: 'Fundamental_13',img: '/images/cryptonauts/fundamental/Fundamental_13.png'},
  {name: 'Fundamental_14',img: '/images/cryptonauts/fundamental/Fundamental_14.png'},
  {name: 'Fundamental_15',img: '/images/cryptonauts/fundamental/Fundamental_15.png'},
  {name: 'Fundamental_16',img: '/images/cryptonauts/fundamental/Fundamental_16.png'},
  {name: 'Fundamental_17',img: '/images/cryptonauts/fundamental/Fundamental_17.png'},
  {name: 'Fundamental_18',img: '/images/cryptonauts/fundamental/Fundamental_18.png'},
  {name: 'Fundamental_19',img: '/images/cryptonauts/fundamental/Fundamental_19.png'},
  {name: 'Fundamental_20',img: '/images/cryptonauts/fundamental/Fundamental_20.png'},
  {name: 'Fundamental_1',img: '/images/cryptonauts/fundamental/Fundamental_1.png'},
  {name: 'Fundamental_2',img: '/images/cryptonauts/fundamental/Fundamental_2.png'},
  {name: 'Fundamental_3',img: '/images/cryptonauts/fundamental/Fundamental_3.png'},
  {name: 'Fundamental_4',img: '/images/cryptonauts/fundamental/Fundamental_4.png'},
  {name: 'Fundamental_5',img: '/images/cryptonauts/fundamental/Fundamental_5.png'},
  {name: 'Fundamental_6',img: '/images/cryptonauts/fundamental/Fundamental_6.png'},
  {name: 'Fundamental_7',img: '/images/cryptonauts/fundamental/Fundamental_7.png'},
  {name: 'Fundamental_8',img: '/images/cryptonauts/fundamental/Fundamental_8.png'},
  {name: 'Fundamental_9',img: '/images/cryptonauts/fundamental/Fundamental_9.png'},
  {name: 'Fundamental_10',img: '/images/cryptonauts/fundamental/Fundamental_10.png'},
  {name: 'Fundamental_11',img: '/images/cryptonauts/fundamental/Fundamental_11.png'},
  {name: 'Fundamental_12',img: '/images/cryptonauts/fundamental/Fundamental_12.png'},
  {name: 'Fundamental_13',img: '/images/cryptonauts/fundamental/Fundamental_13.png'},
  {name: 'Fundamental_14',img: '/images/cryptonauts/fundamental/Fundamental_14.png'},
  {name: 'Fundamental_15',img: '/images/cryptonauts/fundamental/Fundamental_15.png'},
  {name: 'Fundamental_16',img: '/images/cryptonauts/fundamental/Fundamental_16.png'},
  {name: 'Fundamental_17',img: '/images/cryptonauts/fundamental/Fundamental_17.png'},
  {name: 'Fundamental_18',img: '/images/cryptonauts/fundamental/Fundamental_18.png'},
  {name: 'Fundamental_19',img: '/images/cryptonauts/fundamental/Fundamental_19.png'},
  {name: 'Fundamental_20',img: '/images/cryptonauts/fundamental/Fundamental_20.png'}
]

  // _____________ TIMER ______________



class Cryptonauts extends Component {




  //_____________________________ GAME __________________

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
    this.setState({ cardArray: CARD_ARRAY.sort(() => 0.5 - Math.random()) })
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    // Load smart contract
    const networkId = await web3.eth.net.getId()
    const networkData = CryptonautToken.networks[networkId]
    if(networkData) {
      const abi = CryptonautToken.abi
      const address = networkData.address
      const token = new web3.eth.Contract(abi, address)
      this.setState({ token })
      const totalSupply = await token.methods.totalSupply().call()
      this.setState({ totalSupply })
      // Load Tokens
      let balanceOf = await token.methods.balanceOf(accounts[0]).call()
      for (let i = 0; i < balanceOf; i++) {
        let id = await token.methods.tokenOfOwnerByIndex(accounts[0], i).call()
        let tokenURI = await token.methods.tokenURI(id).call()
        this.setState({
          tokenURIs: [...this.state.tokenURIs, tokenURI]
        })
      }
    } else {
      alert('Smart contract not deployed to detected network. Please change wallet network to Binance Smart Chain')
    }
  }

  chooseImage = (cardId) => {
    cardId = cardId.toString()
    if(this.state.cardsWon.includes(cardId)) {
      return window.location.origin + '/images/cryptonauts/fundamental/blank.gif'
    }
    else if(this.state.cardsChosenId.includes(cardId)) {
      return CARD_ARRAY[cardId].img
    } else {
      return window.location.origin + '/images/cryptonauts/fundamental/blank.gif'
    }
  }

  flipCard = async (cardId) => {
    let alreadyChosen = this.state.cardsChosen.length

    this.setState({
      cardsChosen: [...this.state.cardsChosen, this.state.cardArray[cardId].name],
      cardsChosenId: [...this.state.cardsChosenId, cardId]
    })

    if (alreadyChosen === 1) {
      setTimeout(this.checkForMatch, 100)
    }
  }

  tipAuthor(tipAmount) {
    this.setState({ loading: true })
    this.state.token.methods.tipAuthor().send({ from: this.state.account, value: tipAmount }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    })
  }


  checkForMatch = async () => {
    const optionOneId = this.state.cardsChosenId[0]
    const optionTwoId = this.state.cardsChosenId[1]

    if(optionOneId === optionTwoId) {
      console.log('Clicked the same image')
    } else if (this.state.cardsChosen[0] === this.state.cardsChosen[1]) {
      alert('You found a match')
      this.state.token.methods.mint(
        this.state.account,
        window.location.origin + CARD_ARRAY[optionOneId].img.toString()
      )
      .send({ from: this.state.account })
      .on('transactionHash', (hash) => {
        this.setState({
          cardsWon: [...this.state.cardsWon, optionOneId, optionTwoId],
          tokenURIs: [...this.state.tokenURIs, CARD_ARRAY[optionOneId].img]
        })
      })
    } else {
      await new Promise(r => setTimeout(r, 700));
      console.log('Did not find a match')
    }
    this.setState({
      cardsChosen: [],
      cardsChosenId: []
    })
    if (this.state.cardsWon.length === CARD_ARRAY.length) {
      alert('Congratulations! You found them all!')
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      token: null,
      totalSupply: 0,
      tokenURIs: [],
      cardArray: [],
      cardsChosen: [],
      cardsChosenId: [],
      cardsWon: []
    }

    this.tipAuthor = this.tipAuthor.bind(this)
  }

  

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

          <div className="tokenomics__wrapper'">

          <div className='top-line'>Time-limited Access</div>


              <h1 style={{
                              display: 'block',
                              fontSize: '20px',
                              fontWeight: '200',
                              textAlign: 'center'
                            }}>Welcome brave explorers, 
                            here is your change to find a pair of our first Cryptonaut NFT collection.
                            <br />Find a matching portrait and save it to your wallet.
                            <br />Limited time offer. Gas fees will apply.</h1>


          </div>
          <p className="bottom-space-sm"></p>
          <div className="tokenomics__container">
            <main role="main" >
              <div>
                <div className='cryptonaut-cards'>

                  { this.state.cardArray.map((card, key) => {
                    return(
                      <img alt=''
                        key={key}
                        src={this.chooseImage(key)}
                        data-id={key}
                        onClick={(event) => {
                          let cardId = event.target.getAttribute('data-id')
                          if(!this.state.cardsWon.includes(cardId.toString())) {
                            this.flipCard(cardId)
                          }
                        }}
                      />
                    )
                  })}
                </div>
                <p className="bottom-space-sm"></p>
                <div className='tokenomics__wrapper'>
                  <h5>Tokens Collected:<span id="result">&nbsp;{this.state.tokenURIs.length}</span></h5>
                   <div>
                    { this.state.tokenURIs.map((tokenURI, key) => {
                      return(<a href={tokenURI} download={key}>

                        <img
                            alt=''
                          key={key}
                          src={tokenURI}
                        /></a>
                      )
                    })}

                  </div>

                <p className="bottom-space-sm"></p>
                  <div className='row'>
                  <h1 style={{
                                display: 'flex',
                                fontSize: '17px',
                                fontWeight: '300',
                                textAlign: 'center'
                              }}>Once you find the brave explorer, keep them in your wallet, send them to your friends, sell them on a marketplace.
                              <br />or click to download a png copy and set it as your social avatar.</h1>
                  </div>
                  <p className="bottom-space-md"></p>
                  <div className='row'>
                  <h1 style={{
                                display: 'flex',
                                fontSize: '13px',
                                fontWeight: '200',
                                textAlign: 'center'
                              }}>It is my pleasure to deliver these crypto collectible assets to you on behalf of YieldRocket.
                              <br />Thanks for participating. - Ag 
                              <br /></h1>
                  </div>
                  <p className="bottom-space-sm" />
                  <h1><a href='/cryptonauts'><img src='images/web/Ag.png' alt='' width="50px" height="50px" className='home__hero-img' /></a></h1>
                  <p className="bottom-space-sm" />
                  <Button buttonStyle='btn--outline'
                          onClick={(event) => {
                            let tipAmount = window.web3.utils.toWei('0.05', 'Ether')
                            console.log(tipAmount)
                            this.tipAuthor(tipAmount)
                          }}
                        >
                          Tip the Creator - 0.05 BNB
                        </Button>
                </div>

              </div>

            </main>
          </div>
      </div>
      </div>
      <Footer />
      </div>
    );
  }
}

export default Cryptonauts;

