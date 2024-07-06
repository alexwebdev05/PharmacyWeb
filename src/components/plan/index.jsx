import './style.scss'

function Plan() {
    return (
        <>
            <section id='plansContainer'>
                <section id='plans'>
                    <section id='bPlan'>
                        <h2 className='pTitles'>Basic</h2>
                        <div>
                            <p>This is the perfect plan if you want good service at a low cost.</p>
                            <h2 className='prices'>15€<span className='monthly'>/Month</span></h2>
                            <button id='bButton'>Get it now</button>
                            <p className='benefits'><img src="tickGreen.svg" className="tick" />Customer service within 5 hours</p>
                            <p className='benefits'><img src="tickGreen.svg" className="tick" />Special offers on many of our products</p>
                            <p className='benefits'><img src="tickGreen.svg" className="tick" />20€ per month to buy our products</p>
                            <p className='benefits'><img src="tickGreen.svg" className="tick" />Urgency assistance</p>
                        </div>
                    </section>

                    <section id='containerMPlan'>
                        <span id='popular'>Most popular</span>
                        <div id='mPlan'>
                            <h2 className='pTitles'>Medium</h2>
                            <div>
                            <p>Are you looking for the best plan at a good price? This is your plan!</p>
                                <h2 className='prices'>20€<span className='monthly'>/Month</span></h2>
                                <button id='mButton'>Get it now</button>
                                <p className='benefits'><img src="tickBlue.svg" className="tick" />Special offers on all of our products</p>
                                <p className='benefits'><img src="tickBlue.svg" className="tick" />30€ per month to buy our products</p>
                                <p className='benefits'><img src="tickBlue.svg" className="tick" />Personal medic assistant</p>
                                <p className='benefits'><img src="tickBlue.svg" className="tick" />One free gift per month</p>
                            </div>
                        </div>
                    </section>

                    <section id='pPlan'>
                        <h2 className='pTitles'>Premium</h2>
                        <div>
                        <p>If you need a full plan with high priority, it is perfect for you.</p>
                            <h2 className='prices'>30€<span className='monthly'>/Month</span></h2>
                            <button id='pButton'>Get it now</button>
                            <p className='benefits'><img src="tickGold.svg" className="tick" />45€ per month to buy our products</p>
                            <p className='benefits'><img src="tickGold.svg" className="tick" />Two free gifts per month</p>
                            <p className='benefits'><img src="tickGold.svg" className="tick" />Free medic analysis</p>
                            <p className='benefits'><img src="tickGold.svg" className="tick" />More priority than other clients</p>
                        </div>
                    </section>
                </section>
                <footer><span>This is a personal project made all by me to demostrate my abilities in web developement, all code is in<a href="https://github.com/alexwebdev05" target="_blank">my github</a></span></footer>
            </section>
        </>
    )
}

export default Plan