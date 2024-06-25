import Three from './three.js/three'
import './style.scss'

function Presentation() {
    return (
        <>

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
                    {/* Prase */}
                    <div id="phrase">
                        <p>At Priority pharmacy we are committed to offering the best products at an 
                            affordable price and with exceptional customer service.
                        </p>
                    </div>

                    {/* Discounts */}
                    <div id="discTitle">
                        <p>Exclusive discounts!</p>
                        <div id="wordLine"></div>
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

                    {/* Extra */}
                    <p className="extra">Best quality medicines<img src="tickBlue.svg" className="tick" /></p>
                    <p className="extra">Faster assistant<img src="tickBlue.svg" className="tick" /></p>
                    <p className="extra">Best prices<img src="tickBlue.svg" className="tick" /></p>
                    
                    {/* Offers */}
                    <div id="seeOffers">
                        <button>See offers</button>
                    </div>
                </div>

                {/* 3D */}
                <Three />


            </section>


        </>
    )
}

export default Presentation