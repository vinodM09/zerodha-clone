import SPcard from "./SPcard"
export default function Pricing(){
    return (
        <div className="container p-5 mt-5">
            <div className="row">
                <div className="col p-5">
                    <h1>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="">See pricing</a>
                </div>
                <div className="col p-5">
                    <div className="row">
                        <div className="col-4">
                            <SPcard image="media/images/pricing-eq.svg" altName="Image" para="Free account opening"/>
                        </div>
                        <div className="col-4">
                            <SPcard image="media/images/pricing-eq.svg" altName="Image" para="Free equity delivery and direct mutual funds"/>
                        </div>
                        <div className="col-4">
                            <SPcard image="media/images/other-trades.svg" altName="Image2" para="Intraday and F&O"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}