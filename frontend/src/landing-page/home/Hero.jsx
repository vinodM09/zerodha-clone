import SignupButton from "./SignupButton"

export default function Hero(){
    return (
        <div className="container p-5 mb-5 mt-5">
            <div className="row text-center">
                <img src="media/images/landing.png" alt="landing-image" className="mb-5"/>
                <h1>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <SignupButton/>
            </div>
        </div>
    )
}