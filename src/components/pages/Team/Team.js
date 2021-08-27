
function Team() {
  return (
    <div>
        <p className="bottom-space"></p>
              <div className='team__wrapper'>

              <div className='top-line'>Our amazing team</div>
                <div className='team__container'>
                <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <h1><img src='images/web/Max.png' alt='' width="100px" className='home__hero-img' /></h1>
                      </div>
                      <h3>Max Baseman</h3>
                      <p>Founder</p>
                    </div>
                  </div>
                  <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <h1><img src='images/web/team1.png' alt='' width="100px" height="100px" className='home__hero-img' /></h1>
                      </div>
                      <h3>Ol</h3>
                      <p>Developer</p>
                    </div>
                  </div>
                  
                  <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <h1><a href='/cryptonauts'><img src='images/web/Ag.png' alt='' width="100px" height="100px" className='home__hero-img' /></a></h1>
                      </div>
                      <h3>Ag</h3>
                      <p>Designer</p>
                    </div>
                  </div>
                  
                  <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <h1><img src='images/web/team4.png' alt='' width="100px" height="100px" className='home__hero-img' /></h1>
                      </div>
                      <h3>Joe</h3>
                      <p>Marketing Lead</p>
                    </div>
                  </div>
                  <div to='' className='team__container-card'>
                    <div className='team__container-cardInfo'>
                      <div className="team__container-features">
                      <h1><img src='images/web/team3.png' alt='' width="100px" height="100px" className='home__hero-img' /></h1>
                      </div>
                      <h3>Ste</h3>
                      <p>Community Lead</p>
                    </div>
                  </div>
                  
                </div>
              </div>
    </div>
  );
}

export default Team;
