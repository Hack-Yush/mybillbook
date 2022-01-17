// styleSheet

import home from "../styles/homepage/home.module.css";

// icons
const downloading = "/icons/downloading.webp";
const iso = "/icons/iso-black.webp";
const star = "/icons/star.webp";
const MI = "/icons/manage-inventory.svg"
const minus = "/icons/icon-minus.webp"
const plus = "/icons/icon-plus.webp"
const twitter = "/icons/twitter.png"
const youtube = "/icons/youtube.png"
const linkedin = "/icons/linkedin.png"
const instagram = "/icons/instagram.png"
const facebook = "/icons/facebook.png"
const whatsapp = "/icons/whatsapp-1.webp"




// images
const hero = "/images/hero.webp";
const bi = "/images/bills-invoice.webp";
const SC = "/images/stay-connected.svg"
const RE = "/images/retailer-expandable.png";
const pharma = "/images/pharma.webp";
const OS = "/images/online-store.svg";
const SS = "/images/safe-secure.webp";
const ficci = "/images/ficci.svg";
const assocham = "/images/assocham.svg";
const sme_chamber = "/images/sme-chamber.svg";
const SBF = "/images/sme-business-forum.svg";




// logo
const logo = "/logo/mybillbook-logo.svg";



const Home = () => {
  return (
    <div className={home.homeScreen}>
      <div className={home.navBar}>

        <img src={logo} alt="mybillbook-logo" className={home.logo} />

        <div className={home.navbarTitles}>
          <span>We Are Heiring</span>
          <span>Why Use My BillBook?</span>
          <span>Who is it For?</span>
          <span>Pricing</span>
          <button>Login</button>
        </div>




      </div>

      <div className={home.heading}>
        <div className={home.content}>
          <div className={home.title}>
            India’s No.1 <b style={{ color: "#db631a" }}> GST  Billing </b> and <b style={{ color: "#db631a" }}>Accounting</b>
            <div>  Software </div>
          </div>

          <div className={home.subtitle}>
            Impress customers with professional invoices
          </div>


          <div className={home.register}>
            <input type="text" className={home.number} placeholder="Enter Mobile Number" maxLength="10">
            </input>

            <button className={home.trial}>Get Free Trial</button>

          </div>

          <div className={home.app}>
            <button >Download Desktop App <img src={downloading} /></button >
          </div>

          <div className={home.tag}>

            <span>Made with ❤️ in India</span>

            <img src={iso} />

          </div>

        </div>


        <img src={hero} alt="mybillbook" className={home.hero} />
      </div>

      <div className={home.borderL}> </div>

      <div className={home.stats}>
        <div className={home.stat}>
          <div className={home.shead}>60 Lakh+ </div>
          <div className={home.sbottom}>Businesses Trust us</div>
        </div>
        <div className={home.stat}>
          <div className={home.shead}>3 Crore+ </div>
          <div className={home.sbottom}>Invoices Created</div>
        </div>
        <div className={home.stat}>
          <div className={home.shead}>7000+ </div>
          <div className={home.sbottom}>Cities & Towns in India</div>
        </div>
        <div className={home.stat}>
          <div className={home.shead}>4.7<img src={star} /> </div>
          <div className={home.sbottom}>Rating on Google Play</div>
        </div>
      </div>


      <div className={home.borderR}> </div>

      <div className={home.Binvoice}>
        <div className={home.features}>
          <div className={home.fbox}>
            <div className={home.f1}>
              Create and Print
            </div>

            <div className={home.f2}>
              <span>Professional GST</span> or <span>Non-GST Bills</span>

            </div>

            <div className={home.f3}>
              Fully customizable bills as per your business needs

            </div>

            <div className={home.f4}>
              <div className={home.pointer}></div>
              Add Custom fields such as Vehicle No, E-way bill, etc.

            </div>

            <div className={home.f5}>
              <div className={home.pointer}></div>
              Choose your own invoice formats

            </div>

            <div className={home.f6}>
              Print according to your needs

            </div>

            <div className={home.f7}>
              <div className={home.pointer}></div>
              Regular printer supported (A4 & A5)

            </div>


            <div className={home.f8}>
              <div className={home.pointer}></div>
              Thermal Printer supported (2 inch & 3 inch)

            </div>
          </div>

        </div>


        <img src={bi} alt="bills-invoice" className={home.bi} />
      </div>


      <div className={home.advantages}>
        <div className={home.head}>
          <span>Why</span> use My BillBook?
        </div>
        <div className={home.advs}>

          <div className={home.adv}>
            <img src={MI} />
            <div className={home.advtitle}> Manage Your Inventory</div>
            <div className={home.desc}>Track Inventory with features such as low stock reminders, item categories & stock adjustment </div>
          </div>
          <div className={home.adv}>
            <img src={MI} />
            <div className={home.advtitle}> Manage Your Inventory</div>
            <div className={home.desc}>Track Inventory with features such as low stock reminders, item categories & stock adjustment </div>
          </div>
          <div className={home.adv}>
            <img src={MI} />
            <div className={home.advtitle}> Manage Your Inventory</div>
            <div className={home.desc}>Track Inventory with features such as low stock reminders, item categories & stock adjustment </div>
          </div>
          <div className={home.adv}>
            <img src={MI} />
            <div className={home.advtitle}> Manage Your Inventory</div>
            <div className={home.desc}>Track Inventory with features such as low stock reminders, item categories & stock adjustment </div>
          </div>
          <div className={home.adv}>
            <img src={MI} />
            <div className={home.advtitle}> Manage Your Inventory</div>
            <div className={home.desc}>Track Inventory with features such as low stock reminders, item categories & stock adjustment </div>
          </div>
          <div className={home.adv}>
            <img src={MI} />
            <div className={home.advtitle}> Manage Your Inventory</div>
            <div className={home.desc}>Track Inventory with features such as low stock reminders, item categories & stock adjustment </div>
          </div>


        </div>
      </div>

      <div className={home.borderL}> <div></div> </div>

      <div className={home.Sconnected}>
        <div className={home.sc}>
          Stay <b>connected</b>
          <br />
          <span>Sync data seamlessly between Computer & Mobile </span>
        </div>
        <img src={SC} />
      </div>

      <div className={home.border}> </div>

      <div className={home.forWho}>
        <div className={home.LContent}>
          <div className={home.Lhead}> <span> <a>W</a>ho </span>is it for?
          </div>
          <div className={home.retailer}>
            Retailers    <img src={minus} />
          </div>
          <div className={home.retailerC}>
            <ul>
              <li> Make invoices with the counter system on myBillBook app</li>
              <li> Digitise all day-to-day business transactions</li>
              <li>Track & manage business inventory accurately</li>
              <li> Take thermal printouts</li>

            </ul>
          </div>


          <div className={home.Wholesalers}>
            Wholesalers and Distributors   <img src={minus} />
          </div>

          <div className={home.WholesalersC}>
            <ul>
              <li> Make invoices with the counter system on myBillBook app</li>
              <li> Digitise all day-to-day business transactions</li>
              <li>Track & manage business inventory accurately</li>
              <li> Take thermal printouts</li>

            </ul>
          </div>


          <div className={home.ASB}>
            All Small Businesses    <img src={minus} />
          </div>

          <div className={home.ASBC}>
            <ul>
              <li> Make invoices with the counter system on myBillBook app</li>
              <li> Digitise all day-to-day business transactions</li>
              <li>Track & manage business inventory accurately</li>
              <li> Take thermal printouts</li>

            </ul>
          </div>


        </div>


        <img src={RE} />

      </div>

      <div className={home.testimonals}>
        <div className={home.Thead}>What <span> our users </span>say about us</div>
        <div className={home.TSubhead}>Businesses from all industries love using myBillBook</div>
        <div className={home.Tbuttons}>

          <button className={home.Tbuttons1} style={{ backgroundColor: '#bce0f3', color: '#27a0df' }}>FMCG</button>
          <button className={home.Tbuttons2} style={{ backgroundColor: '#fcdfce', color: '#ef7338' }}>Electronics
          </button>
          <button className={home.Tbuttons3} style={{ backgroundColor: '#c0d0f2', color: '#346ada' }}>Hardware
          </button>
          <button className={home.Tbuttons4} style={{ backgroundColor: '#e1ebe5', color: '#a3c346' }}>Kirana</button>
          <button className={home.Tbuttons5} style={{ backgroundColor: '#c9c5f0', color: '#4c3cce' }}>Jewellery
          </button>
          <button className={home.Tbuttons6} style={{ backgroundColor: '#b8edf5', color: '#1cc9e4' }}>Pharma</button>
          <button className={home.Tbuttons7} style={{ backgroundColor: '#fcc6c6', color: '#ff4b4b' }}>Transportation
          </button>
        </div>

        <div className={home.Tcontent}>

          <img src={pharma} />
          <div className={home.about}>
            <div className={home.Ahead}>Pharma Store</div>
            <div className={home.Atext}>"Professional Billing with option to add Batch number, expiry date & drug license number. I have used other software for my Vyapaar but haven’t ever seen inventory management so easy. Nice for medical business.</div>
            <div className={home.by}>- Shree Ji Medicals</div>
          </div>


        </div>


      </div>


      <div className={home.online}>
        <div className={home.onlineStore}>
          <div className={home.onlineS}>
            <div className={home.OShead}> <span>Take your business <a>Online</a></span> </div>
            <div className={home.Shead}> Setup your online store, create digital catalogues and grow your business by selling via WhatsApp and Facebook. </div>
          </div>
          <div className={home.OSimg}> <img src={OS} /> </div>
        </div>
        <div className={home.Oborder}>
          <div></div>
        </div>
      </div>

      <div className={home.benifits}>
        <div className={home.Bhead}><span>Benefits</span> of using My BillBook</div>

        <div className={home.Bcontent}>

          <div className={home.card}>
            <img src={SS} />
            <div className={home.CHead}>Safe & Secure</div>
            <div className={home.Ctext}> Your data is 100% secure with us, always stored in an encrypted and anonymised format</div>
          </div>

          <div className={home.card}>
            <img src={SS} />
            <div className={home.CHead}>Safe & Secure</div>
            <div className={home.Ctext}> Your data is 100% secure with us, always stored in an encrypted and anonymised format</div>
          </div>

          <div className={home.card}>
            <img src={SS} />
            <div className={home.CHead}>Safe & Secure</div>
            <div className={home.Ctext}> Your data is 100% secure with us, always stored in an encrypted and anonymised format</div>
          </div>

          <div className={home.card}>
            <img src={SS} />
            <div className={home.CHead}>Safe & Secure</div>
            <div className={home.Ctext}> Your data is 100% secure with us, always stored in an encrypted and anonymised format</div>
          </div>

          <div className={home.card}>
            <img src={SS} />
            <div className={home.CHead}>Safe & Secure</div>
            <div className={home.Ctext}> Your data is 100% secure with us, always stored in an encrypted and anonymised format</div>
          </div>

          <div className={home.card}>
            <img src={SS} />
            <div className={home.CHead}>Safe & Secure</div>
            <div className={home.Ctext}> Your data is 100% secure with us, always stored in an encrypted and anonymised format</div>
          </div>
        </div>

      </div>

      <div className={home.association}>
        <div className={home.Atitle}> Associations</div>
        <div className={home.Acontent}>
          <img src={SBF} />
          <img src={assocham} />
          <img src={sme_chamber} />
          <img src={ficci} />
        </div>
      </div>

      <div className={home.footer}>
        <div className={home.getinfo}>
          <div className={home.Ghead}>Get in touch</div>
          <div className={home.Gsupport}>support@flobiz.in </div>
          <div className={home.Gphone}>+91 740041 7400</div>
          <div className={home.whatsapp}>
            <img src={whatsapp} />
            <span>WhatsApp us</span>
          </div>
          <div className={home.Gfollow}>Follow us</div>
          <div className={home.Gicon}>
            <img src={youtube} />
            <img src={facebook} />
            <img src={instagram} />
            <img src={twitter} />
            <img src={linkedin} />
          </div>
        </div>





        <div className={home.link}>
          <div className={home.Ltitle}>Information</div>
          <div className={home.l1}>Refund Policy</div>
          <div className={home.l1}>Privacy Policy</div>
          <div className={home.l1}>Terms & Conditions</div>
          <div className={home.l1}>FloBiz Business Groups</div>
          <div className={home.l1}>License keys</div>

        </div>
        <div className={home.link1}>
          <div className={home.l2}>Blog</div>
          <div className={home.l1}>Service Pages</div>
          <div className={home.l1}>myBillBook Coupon Code</div>
          <div className={home.l1}>Service pack</div>
          <div className={home.l1}>Customer Care</div>
        </div>
        
        <div className={home.trending}>
          <div className={home.Ltitle}>Trending Articles</div>
          <div className={home.l1}>SAC Code</div>
          <div className={home.l1}>Delivery Challan</div>
          <div className={home.l1}>Credit Note Format</div>
          <div className={home.l1}>Debit Note Format</div>
          <div className={home.l1}>Proforma Invoice Format</div>
        </div>

        <div className={home.latestA}> 
        <div className={home.Ltitle}>Latest Articles</div>
          <div className={home.l1}>Accounting Voucher</div> 
          <div className={home.l1}>E way bill</div> 
          <div className={home.l1}>GST Return Types</div> 
          <div className={home.l1}>GSTR 1</div> 
          <div className={home.l1}>Invoice Discounting</div> 

        </div>
      </div>
    </div>
  )
}

export default Home;