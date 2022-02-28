import './Footer.css';

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Nikmati Hidangan Kami Yang Enak</h1>
            </div>
            <div className="gpt3__footer-links">
       
                <div className="gpt3__footer-links_div"><h4>Links</h4><p>Overons</p><p>Social Media</p><p>Counters</p><p>Contact</p></div>
                    <div className="gpt3__footer-links_div">
                        <h4>Company</h4>
                            <p>Terms & Conditions </p>
                            <p>Privacy Policy</p>
                            <p>Contact</p>
                    </div>
                <div className="gpt3__footer-links_div">
                        <h4>Get in touch</h4>
                            <p>Lot 543, Jalan Pegaga 7, Taman Austin, Melaka</p>
                            <p>013-6328253</p>
                            <p>pakAbu@gmail.com</p>
                </div>
            </div>

            <div className="gpt3__footer-copyright">
                <p>@2021 Restaurant Pak Abu. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer