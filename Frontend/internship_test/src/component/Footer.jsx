export const Footer = () => {

    return  <footer className="color mt-auto bg-secondary text-white py-4">
                <div className="container d-flex justify-content-between ">
                    <div className="row">
                    <div className="col-md-6 mb-3">
                        <h5>About Us</h5>
                        <p>
                         Online Auction  brings buyers and sellers together in a seamless, secure, and competitive bidding environment. Experience real-time auctions, exclusive deals, and a fair marketplace—all in one place!
                        </p>
                    </div>
                    <div className="col-md-6 mb-3 ">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                        <li>
                            <a href="/home" className="text-decoration-none text-white">
                            Home
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard" className="text-decoration-none text-white">
                            DashBoard
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="text-decoration-none text-white">
                            Contact
                            </a>
                        </li>
                        <li>
                            <a href="/answer" className="text-decoration-none text-white">
                            FAQs
                            </a>
                        </li>
                        </ul>
                    </div>
                    
                    </div>
                    <hr className="mb-4" />
                    <div className="row">
                    <div className="col-md-12 text-center">
                        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                    </div>
                    </div>
                </div>
          </footer>
}