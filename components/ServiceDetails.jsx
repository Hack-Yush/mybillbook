// styles

import SD from "../styles/components/ServiceDetails.module.css";


// icon
const plus = "/icons/plus.png"

const ServiceDetails = () => {
  return (



    <div className={SD.screen}>

      <div className={SD.navbar}>
        <div className={SD.navbar_title}>
          Create Items
        </div>
        <div className={SD.navbar_item}>
          <div className={SD.SN}>
            <button>Save & New</button>
          </div>

          <div className={SD.Save}>
            <button>Save</button>
          </div>

        </div>


      </div>

      <div className={SD.body}>
        <div className={SD.leftB}>

          <div className={SD.head}>
            <span> General Details</span>
          </div>

          <div className={SD.imgs}>
            <span> &nbsp;Upload Item Images</span>
            <div className={SD.imgBox}>

              <div className={SD.putimg}>
                <label htmlhtmlhtmlfor="upload">
                  <img src={plus} id="shoutoutCamera" />

                </label>
                <input type="file" id="upload" hidden ></input>


              </div>


              <div className={SD.putimg}>
                <label htmlhtmlhtmlfor="upload">
                  <img src={plus} id="shoutoutCamera" />

                </label>
                <input type="file" id="upload" hidden ></input>


              </div>

              <div className={SD.putimg}>
                <label htmlhtmlhtmlfor="upload">
                  <img src={plus} id="shoutoutCamera" />

                </label>
                <input type="file" id="upload" hidden ></input>


              </div>

              <div className={SD.putimg}>
                <label htmlhtmlhtmlfor="upload">
                  <img src={plus} id="shoutoutCamera" />

                </label>
                <input type="file" id="upload" hidden ></input>


              </div>


              <div className={SD.putimg}>
                <label htmlhtmlhtmlfor="upload">
                  <img src={plus} id="shoutoutCamera" />

                </label>
                <input type="file" id="upload" hidden ></input>


              </div>

            </div>
          </div>

          <div className={SD.itemType}>
            <span>Item Type</span>
            <div className={SD.type}>
              <div className={SD.inpt}>
                <input type="checkbox" id="Product" name="Product" value="Product" />
                <label htmlhtmlhtmlfor="Product"> Product</label>
              </div>

              <div className={SD.inpt}>
                <input type="checkbox" id="service" name="service" value="service" />
                <label htmlhtmlhtmlfor="service"> Service</label>
              </div>
            </div>
          </div>


          <div className={SD.Idetail}>
            <div className={SD.detail}>
              <span>Service Name</span>
              <input type="name" name="itemName" placeholder="Enter Name"></input>
            </div>
            <div className={SD.detail}>
              <span>Category</span>
              <select>
                <option value="collect">To collect</option>
              </select>
            </div>


          </div>

          <div className={SD.code}>

            <div className={SD.detail}>
              <span>Service Code</span>
              <input type="name" name="itemCode" placeholder="Enter Code"></input>
            </div>

           
          </div>

          <div className={SD.desc}>

            <span>Service Description</span>
            <input type="text" name="itemDescription" placeholder="Enter Description"></input>

          </div>

        </div>


        <div className={SD.rightB}>
          <div className={SD.head}>
            <span> Service Details </span>
          </div>

          <div className={SD.unit}>

            <div className={SD.Munit}>
              <span>Unit</span>
              <select>
                <option value="" disabled selected>Select/search measuring unit
                </option>
                <option value="collect" >PETI(PET)</option>
              </select>

            </div>


          </div>

         
          <div className={SD.PD}>
            <span>Prising Details</span>
          </div>

          <div className={SD.SP}>

            <div className={SD.Sbalance}>
              Sales Price
              <div className={SD.Sbal}>


                <input placeholder='₹0' name="openingBalance" />
                <select >
                  <option value="collect">With Tax</option>
                  <option value="pay">Without Tax</option>
                </select>
              </div>
            </div>

            
          </div>

          <div className={SD.tax}>
            <div className={SD.HC}>
              <span>SAC Code</span>
              <input type="number" placeholder="Enter SAC Code"></input>
            </div>
            <div className={SD.Gst}>

              <span>GST Tax Rate(%)</span>
              <select>
                <option value="" disabled selected>GST@0% </option>
                <option value="collect" >GST@0.1%</option>
                <option value="collect" >GST@0.25%</option>
                <option value="collect" >GST@3%</option>
                <option value="collect" >GST@5%</option>
                <option value="collect" >GST@12%</option>
                <option value="collect" >GST@18%</option>
                <option value="collect" >GST @ 14% + cess @ 12%</option>
                <option value="collect" >GST@28%</option>
                <option value="collect" >GST @ 28% + cess @ 12%</option>
              </select>

            </div>

          </div>

        </div>
      </div>

    </div>
  )
}



export default ServiceDetails;