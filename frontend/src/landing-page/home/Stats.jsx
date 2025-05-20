import './Stats.css';
export default function Stats(){
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-5 p-5 trustBlock">
                    <h1 className="mt-5 mb-2">Trust with confidence</h1>
                    <h4 className="mt-5 mb-2">Customer-first always</h4>
                    <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h4 className="mt-5 mb-2">No spam or gimmicks</h4>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h4 className="mt-5 mb-2">The Zerodha universe</h4>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h4 className="mt-5 mb-2">Do better with money</h4>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-7 p-5 mt-5">
                    <img style={{maxWidth:"100%", height:"auto", marginBottom:"1rem"}} src="media/images/ecosystem.png" alt="zerodha-ecosystem" />
                    <div className="row text-center">
                        <div className="col">
                            <a href="">Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                        <div className="col">
                            <a href="">Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                </div>
                <img style={{paddingLeft:"20%", paddingRight:"20%", paddingTop:"3%", marginBottom:"2rem"}} src="media/images/press-logos.png" alt="press-logos" />
            </div>
        </div>
    )
}