// styles
import IT from "../styles/components/items.module.css";

import Link from "next/link";

// icons
const search = "/icons/search.png"

const Items = () => {
  return (<div className={IT.screen}>

    <div className={IT.navbar}>
      <div className={IT.navbar_title}>
        Items
      </div>
      <div className={IT.navbar_item}>
        <div className={IT.BIP}>
          <button>Bulk Add Items</button>
        </div>
       <Link href="/create_items">
        <div className={IT.createP}>
          <button>+Create Items</button>
        </div>
        </Link>

      </div>


    </div>

    <div className={IT.filter}>
      <div className={IT.search}>

        <img src={search} alt="search" />
        <input placeholder='search' />

      </div>

      <div className={IT.categories}>
        <select >
          <option value="">Categories</option>
        </select>
      </div>


      <div className={IT.reports}>
        <select >
          <option value="">Reports</option>
        </select>
      </div>


    </div>
    <div className={IT.table}>
      <div className={IT.table_header}>
        <div className={IT.name}>
          <span> <b> Item Name</b></span>
        </div>
        <div className={IT.name}>
          <span> <b>Item Code</b></span>
        </div>
        <div className={IT.name}>
          <span><b>Stock Qty</b></span>
        </div>
        <div className={IT.name}>
          <span><b> Stock value</b></span>
        </div>
        <div className={IT.name}>
          <span> <b>SELLING PRICE</b></span>
        </div>
        <div className={IT.name}>
          <span> <b>Purchase PRICE</b></span>
        </div>
      </div>


      <div className={IT.entries}>
        <div className={IT.name}>
          <span> Cream</span>
        </div>
        <div className={IT.name}>
          <span> -</span>
        </div>
        <div className={IT.name}>
          <span>0</span>
        </div>
        <div className={IT.name}>
          <span> ₹ 0</span>
        </div>
        <div className={IT.name}>
          <span> ₹ 35</span>
        </div>
        <div className={IT.name}>
          <span> -</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Items