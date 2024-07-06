import Three from './three.js/three'
import './style.scss'

function Presentation() {
    return (
        <>
            <div id='pContainer'>

                {/* Name */}
                <section id="pName">
                    <img src="/logo.svg"/>
                    <span>Priority pharmacy</span>
                </section>

                {/* Priority phrase */}
                <section id="pPhraseContainer">
                    <p id="pPhrase">Your <span>health,</span> our <span>priority</span></p>
                </section>

                {/* Content */}
                <section id="contentContainer">
                    <div id='info'>

                        {/* Discounts */}
                        <div id="discTitle">
                            <p>Exclusive discounts!<div id="wordLine"></div></p>
                            
                        </div>
                        <div id='discountContainer'>
                            <div className="discounts">
                                <div>Up to</div>
                                <span>50<sup>%</sup></span>
                            </div>
                            
                            <div className="discounts">
                                <div>Up to</div>
                                <span>40<sup>%</sup></span>
                            </div>

                            <div className="discounts">
                                <div>Up to</div>
                                <span>30<sup>%</sup></span>
                            </div>

                            <div className="discounts">
                                <div>Up to</div>
                                <span>20<sup>%</sup></span>
                            </div>
                        </div>

                        {/* Prase */}
                        <section id='text'>
                            <div id="phrase">
                                <p>At Priority pharmacy, we are committed to offering the best products at 
                                    affordable price and with exceptional customer service.
                                </p>
                            </div>
                            <hr className="divider" />
                            
                            {/* Extra */}
                            <div id='qualityes'>
                                <p className="extra"><img src="tickBlue.svg" className="tick" />Best quality medicines</p>
                                <p className="extra"><img src="tickBlue.svg" className="tick" />Faster assistant</p>
                                <p className="extra"><img src="tickBlue.svg" className="tick" />Best prices</p>
                            </div>
                            
                        </section>
                    <Three />
                    </div>

                </section>

                {/* Offers */}
                <div id="seeOffers">
                    <button onClick={() => scrollToSection('plansContainer')}>See offers</button>
                </div>

            </div>
        </>
    )
}

// Scroll function
const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

export default Presentation