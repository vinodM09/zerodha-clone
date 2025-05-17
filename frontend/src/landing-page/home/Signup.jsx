import SignupButton from "./SignupButton"
export default function Signup(){
    return (
        <div className="container text-center mt-5">
            <div className="row">
                <h1>Open a Zerodha account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <SignupButton/>
            </div>
        </div>
    )
}