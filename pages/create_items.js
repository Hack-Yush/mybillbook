// styles
import CI from "../styles/components/create_items.module.css";


// icon
const plus = "/icons/plus.png"


const create_items = () => {
  return (
    <div className={CI.screen}>

      <div className={CI.navbar}>
        <div className={CI.navbar_title}>
          Create Items
        </div>
        <div className={CI.navbar_item}>
          <div className={CI.SN}>
            <button>Save & New</button>
          </div>

          <div className={CI.Save}>
            <button>Save</button>
          </div>

        </div>


      </div>

      <div className={CI.body}>
        <div className={CI.leftB}>

          <div className={CI.head}>
            <span> General Details</span>
          </div>

          <div className={CI.imgs}>
            <span> &nbsp;Upload Item Images</span>
            <div className={CI.imgBox}>

              <div className={CI.putimg}>
                <label htmlhtmlhtmlfor="upload">
                  <img src={plus} id="shoutoutCamera" />

                </label>
                <input type="file" id="upload" hidden ></input>


              </div>


              <div className={CI.putimg}>
                <label htmlhtmlhtmlfor="upload">
                  <img src={plus} id="shoutoutCamera" />

                </label>
                <input type="file" id="upload" hidden ></input>


              </div>

              <div className={CI.putimg}>
                <label htmlhtmlhtmlfor="upload">
                  <img src={plus} id="shoutoutCamera" />

                </label>
                <input type="file" id="upload" hidden ></input>


              </div>

              <div className={CI.putimg}>
                <label htmlhtmlhtmlfor="upload">
                  <img src={plus} id="shoutoutCamera" />

                </label>
                <input type="file" id="upload" hidden ></input>


              </div>


              <div className={CI.putimg}>
                <label htmlhtmlhtmlfor="upload">
                  <img src={plus} id="shoutoutCamera" />

                </label>
                <input type="file" id="upload" hidden ></input>


              </div>

            </div>
          </div>

          <div className={CI.itemType}>
            <span>Item Type</span>
            <div className={CI.type}>
              <div className={CI.inpt}>
                <input type="checkbox" id="Product" name="Product" value="Product" />
                <label htmlhtmlhtmlfor="Product"> Product</label>
              </div>

              <div className={CI.inpt}>
                <input type="checkbox" id="service" name="service" value="service" />
                <label htmlhtmlhtmlfor="service"> Service</label>
              </div>
            </div>
          </div>


          <div className={CI.Idetail}>
            <div className={CI.detail}>
              <span>Item Name</span>
              <input type="name" name="itemName" placeholder="Enter Name"></input>
            </div>
            <div className={CI.detail}>
              <span>Category</span>
              <select>
                <option value="collect">To collect</option>
              </select>
            </div>


          </div>

          <div className={CI.code}>

            <div className={CI.detail}>
              <span>Item Code</span>
              <input type="name" name="itemCode" placeholder="Enter Code"></input>
            </div>

            <div className={CI.Bdetail}>

              Genrate Barode
            </div>
          </div>

          <div className={CI.desc}>

            <span>Item Description</span>
            <input type="text" name="itemDescription" placeholder="Enter Description"></input>

          </div>

        </div>


        <div className={CI.rightB}>
          <div className={CI.head}>
            <span> Stock Details </span>
          </div>

          <div className={CI.unit}>

            <div className={CI.Munit}>
              <span>Unit</span>
              <select>
                <option value="" disabled selected>Select/search measuring unit
                </option>
                <option value="collect" >PETI(PET)</option>
              </select>
            </div>

            <div className={CI.Aunit}>
              
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}


export default create_items;