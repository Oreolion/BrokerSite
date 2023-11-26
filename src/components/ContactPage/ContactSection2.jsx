import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { FaBusinessTime, FaMailBulk } from "react-icons/fa";
import { SiTimescale } from "react-icons/si";

const ContactSection2 = () => {
  return (
    <>
        <section className="contactsection2">
            <h1>CONTACT OPTIONS</h1>
            <div className="innerbox">
                <div className="box">
                    <HiOutlineOfficeBuilding className='icon'   size={60}/>
                    <h4>Office</h4>
                    <p>St. Vincent and the Grenadines</p>
                    <p>Richmond Hill Road, Kingstown, VC0100, St. Vincent and the Grenadines.</p>
                    <p>Email:  supportteam@fpmarkets.com</p>
                </div>
                <div className="box">
                    <RiCustomerService2Fill className='icon' size={60}/>
                    <h4>Phone Numbers</h4>
                    <p>St. Vincent and the Grenadines</p>
                    <p>General: +44 28 2544 7780</p>

                </div>
                <div className="box">
                    <MdSupportAgent className='icon' size={60}/>
                    <h4>Toll Free Numbers</h4>
                    <p>General</p>
                    <p>+44 28 2544 7780</p>
                    <button>All free numbers</button>
                </div>
                <div className="box">
                    <FaBusinessTime className='icon' size={60}/>
                    <h4>Company Registrations</h4>
                    <p>126 LLC 2019</p>
                </div>
                <div className="box">
                    <FaMailBulk className='icon' size={60}/>
                    <h4>Email Enquires</h4>
                    <p>New enquiries:</p>
                    <p>supportteam@fpmarkets.com</p>
                </div>
                <div className="box">
                    <SiTimescale className='icon' size={60}/>
                    <h4>Office Hours</h4>
                    <p>Monday – Saturday (AEDT)</p>
                    <p>07:00 – 07:00</p>
                    <p>Sunday – Friday (GMT)</p>
                    <p>22:00 – 22:00</p>

                </div>
            </div>


        </section>
    </>
  )
}

export default ContactSection2