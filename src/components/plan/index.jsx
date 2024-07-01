import './style.scss'

function Plan() {
    return (
        <>
            <section id='presentation'>
                <div id='titleOffers'><p>Offers</p></div>
                <section id='plans'>
                    <section className='options'>
                        <h2>Basic</h2>
                        <div>
                            <p><img src="tickGreen.svg" className="tick" />Customer service in next 5 hours</p>
                            <p><img src="tickGreen.svg" className="tick" />Special offers on many of our products</p>
                            <p><img src="tickGreen.svg" className="tick" />20 € per month to buy our products</p>
                        </div>
                            
                    </section>

                    <section className='options'>
                        <h2>Medium</h2>
                        <div>
                            <p><img src="tickBlue.svg" className="tick" />Customer service in next 5 hours</p>
                            <p><img src="tickBlue.svg" className="tick" />Special offers on many of our products</p>
                            <p><img src="tickBlue.svg" className="tick" />30 € per month to buy our products</p>
                            <p><img src="tickBlue.svg" className="tick" />Personal medic assistant</p>
                            <p><img src="tickBlue.svg" className="tick" />One free gift per month</p>
                        </div>
                            
                    </section>

                    <section className='options'>
                        <h2>Premium</h2>
                        <div>
                            <p><img src="tickGold.svg" className="tick" />Customer service in next 5 hours</p>
                            <p><img src="tickGold.svg" className="tick" />Special offers on many of our products</p>
                            <p><img src="tickGold.svg" className="tick" />45 € per month to buy our products</p>
                            <p><img src="tickGold.svg" className="tick" />Personal medic assistant</p>
                            <p><img src="tickGold.svg" className="tick" />Two free gift per month</p>
                            <p><img src="tickGold.svg" className="tick" />Free medic analytic</p>
                            <p><img src="tickGold.svg" className="tick" />Urgence assistant</p>
                            <p><img src="tickGold.svg" className="tick" />More priority than other clients</p>
                        </div>
                            
                    </section>
                </section>
                <section id='buttons'>
                    <button id='b1'>15€</button>
                    <button id='b2'>20€</button>
                    <button id='b3'>30€</button>
                </section>
            </section>
        </>
    )
}

export default Plan