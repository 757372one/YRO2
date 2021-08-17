
function Team() {
  return (
    <div>
        <p className="bottom-space"></p>
            <div
              className='row home__hero-row'
              style={{
                display: 'flex',
                flexDirection: false ? 'row-reverse' : 'row'
              }}
            >
              <div className='col'>
                <div className='home__hero-text-wrapper'>
                  <div className='top-line'>Our amazing team</div>
                </div>
              </div>
              <div className='team__wrapper'>
                <div className='team__container'>
                <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <h1><img src='images/Max.png' alt='' width="100px" className='home__hero-img' /></h1>
                      </div>
                      <h3>Max Baseman</h3>
                      <p>Founder</p>
                    </div>
                  </div>
                  <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <h1><img src='images/team4.png' alt='' width="100px" height="100px" className='home__hero-img' /></h1>
                      </div>
                      <h3>Joe</h3>
                      <p>Marketing Lead</p>
                    </div>
                  </div>
                  <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <h1><img src='images/team3.png' alt='' width="100px" height="100px" className='home__hero-img' /></h1>
                      </div>
                      <h3>Ste</h3>
                      <p>Community Lead</p>
                    </div>
                  </div>
                  <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <h1><img src='images/team2.png' alt='' width="100px" height="100px" className='home__hero-img' /></h1>
                      </div>
                      <h3>Annie</h3>
                      <p>Designer</p>
                    </div>
                  </div>
                  <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <h1><img src='images/team1.png' alt='' width="100px" height="100px" className='home__hero-img' /></h1>
                      </div>
                      <h3>Olav</h3>
                      <p>Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
}

export default Team;
