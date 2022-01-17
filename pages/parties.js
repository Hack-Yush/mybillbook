
// style
import PT from "../styles/components/parties.module.css";

// icons
const search = "/icons/search.png"

import Link from "next/link";


const Parties = () => {

  

  return (
    <div className={PT.screen}>
      <div className={PT.navbar}>
        <div className={PT.navbar_title}>
          Parties
        </div>
        <div className={PT.navbar_item}>
          <div className={PT.BIP}>
            <button>Bulk Import Parties</button>
          </div>
          <Link href="/createparties">
            <div className={PT.createP}>
              <button>+Create Party</button>
            </div>
          </Link>
        </div>


      </div>

      <div className={PT.filter}>
        <div className={PT.search}>

          <img src={search} alt="search" />
          <input placeholder='search' />

        </div>

        <div className={PT.categories}>
          <select >
            <option value="">Categories</option>
          </select>
        </div>


        <div className={PT.reports}>
          <select >
            <option value="">Reports</option>
          </select>
        </div>


      </div>



      <div className={PT.table}>
        <div className={PT.topbox}>
          <div className={PT.all}>
            <span> All</span>
          </div>
          <div className={PT.collect}>
            <span> To Collect
              <br />
              ₹ 0
            </span>

          </div>
          <div className={PT.pay}>
            <span> To Pay
              <br />
              ₹ 0
            </span>
          </div>
        </div>
        <div className={PT.table_header}>
          <div className={PT.name}>
            <span> Name</span>
          </div>
          <div className={PT.name}>
            <span> CATEGORY</span>
          </div>
          <div className={PT.name}>
            <span>MOBILE NUMBER</span>
          </div>
          <div className={PT.name}>
            <span> PARTY TYPE</span>
          </div>
          <div className={PT.name}>
            <span> BALANCE</span>
          </div>
        </div>


        <div className={PT.entries}>
          <div className={PT.name}>
            <span> Cash Sale </span>
          </div>
          <div className={PT.name}>
            <span> Shoes</span>
          </div>
          <div className={PT.name}>
            <span>7878425474</span>
          </div>
          <div className={PT.name}>
            <span> Coustomer</span>
          </div>
          <div className={PT.name}>
            <span> ₹ 0</span>
          </div>
        </div>

      </div>
    </div>

  )
}


export default Parties;