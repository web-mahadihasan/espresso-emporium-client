import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoCallSharp, IoLocationSharp, IoLogoLinkedin } from "react-icons/io5";
import logo from '../assets/images/logo.png'
import copyBg from '../assets/images/more/1.png'

const Footer = () => {
  return (
    <>
    <div className="w-full bg-footer-Bg bg-no-repeat bg-cover bg-center pt-20 pb-12">
        <div data-aos="fade-right" className="max-w-7xl mx-auto px-4 mb-3">
            <img src={logo} alt="" />
        </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 gap-6 space-y-6 md:space-y-0">
        <div data-aos="fade-right" className="space-y-4 lg:col-span-2">
          <h3 className="font-rancho text-3xl lg:text-4xl text-primary text-shadow tracking-wide">Espresso Emporium</h3>
          <p className="font-raleway text-xl text-[#1B1A1A]">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          {/* Social  */}
          <div className="my-6">
            <ul className="flex items-center gap-6 text-primary">
                <li><a href="www.facebook.com"><FaFacebook size={24}/></a></li>
                <li><a href="www.x.com"><FaTwitter size={24}/></a></li>
                <li><a href="www.instagram.com"><FaInstagram size={24}/></a></li>
                <li><a href="www.linkdln.com"><IoLogoLinkedin size={24}/></a></li>
            </ul>
          </div>

          {/* Get in touch  */}
          <div className="font-raleway space-y-4">
            <h3 className="font-rancho text-3xl lg:text-4xl text-primary text-shadow tracking-wide">Get in Touch</h3>
            <p className="flex items-center gap-2 text-lg">
                <span><IoCallSharp /></span><span>+88 01533 333 333</span>
            </p>
            <p className="flex items-center gap-2 text-lg">
                <span><FaEnvelope /></span><span>info@gmail.com</span>
            </p>
            <p className="flex items-center gap-2 text-lg">
                <span><IoLocationSharp /></span><span>72, Wall street, King Road, Dhaka</span>
            </p>
          </div>
        </div>
        <div data-aos="fade-left">
            <h3 className="font-rancho text-3xl lg:text-4xl text-primary text-shadow tracking-wide">Contact With Us</h3>
            <div className="mt-8">
                <form className="space-y-3 font-raleway">
                    <div>
                        <input type="text" name="name" id="Contact-name" placeholder="Name" className="w-full px-4 py-2 rounded-md text-lg font-raleway border-none outline-none focus:ring-2 focus:ring-[#E3B577] shadow focus:shadow-lg duration-300" />
                    </div>
                    <div>
                        <input type="email" name="name" id="Contact-email" placeholder="Email" className="w-full px-4 py-2 rounded-lg text-lg font-raleway border-none outline-none focus:ring-2 focus:ring-[#E3B577] shadow focus:shadow-lg duration-300" />
                    </div>
                    <div>
                        <textarea name="message" id="message" placeholder="Message" rows={3} className="w-full px-4 py-2 rounded-lg text-lg font-raleway border-none outline-none focus:ring-2 focus:ring-[#E3B577] shadow focus:shadow-lg duration-300"></textarea>
                    </div>
                    <button className="text-xl px-6 py-2 border-2 border-primary rounded-full font-rancho">
                        <input type="submit" value="Send Message" />
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
    <div className="h-16 bg-copy-bg bg-no-repeat bg-cover bg-center bg-opacity-60 text-white flex items-center justify-center">
        <h3 className="text-xl font-rancho tracking-wide">Copyright Espresso Emporium ! All Rights Reserved</h3>
    </div>
  </>
  );
};

export default Footer;
