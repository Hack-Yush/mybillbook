// styles

import CP from "../styles/components/createparties.module.css";


// hooks
import { useReducer } from 'react';

// reducer
import { partyReducer } from '../reducerManagers/partiesReducer';


const CreateParties = () => {

  // initial state design 
  const initialState = {


    fields: { partyName: "", mobileNumber: "", email: "", openingBalance: "", partyType: "", category: "", gstIN: "", supply: "", billingAddress: "", shipmentAddress: "", creditPeriod: "", creditLimit: "", },
    collect_pay:"",
    



  };



  const [state, dispatch] = useReducer(partyReducer,initialState);

  const action = { type: "", payLoad: "" };

  const handlefields = (event) => {
    const { fields } = state;
    const { target } = event;
    const { name, value } = target;

    let newFields = { ...fields, [name]: value };
    action.type = "changeField";
    action.payLoad = newFields
    return dispatch(action);

  }

  const handleCollectPay = (event) => {

      const {target} = event;
      const {value} = target;
      action.type = "collect_pay";
      action.payLoad = value;
      return dispatch(action);


  }

 const {partyName, mobileNumber, email, openingBalance, partyType, category, gstIN, supply, billingAddress, shipmentAddress, creditPeriod, creditLimit} = state;
 

  return (
    <div className={CP.screen}>

      <div className={CP.navbar}>
        <div className={CP.navbar_title}>
          Create Party
        </div>
        <div className={CP.navbar_item}>
          <div className={CP.SN}>
            <button>Save & New</button>
          </div>

          <div className={CP.Save}>
            <button>Save</button>
          </div>

        </div>


      </div>



      <div className={CP.Pdetail}>

        <div className={CP.detail}>
          <span>Party Name</span>
          <input type="name" name="partyName" onChange={handlefields} value={partyName} placeholder = "Enter Name"></input>
        </div>
        <div className={CP.detail}>
          <span>Mobile Number</span>
          <input type="Number" name="mobileNumber" placeholder="Enter mobile Number" onChange={handlefields} value={mobileNumber} ></input>
        </div>
        <div className={CP.detail}>
          <span>Email </span>
          <input type="email" name="email" placeholder="Enter email" onChange={handlefields} value={email}></input>
        </div>


      </div>

      <div className={CP.balance}>
        Opening Balance
        <div className={CP.bal}>


          <input placeholder='0' name="openingBalance" onChange={handlefields} value={openingBalance}/>
          <select onChange={handleCollectPay} >
            <option value="collect">To collect</option>
            <option value="pay">To Pay</option>
          </select>
        </div>
      </div>

      <div className={CP.border}> </div>


      <div className={CP.Ptype}>

        <div className={CP.detail}>
          <span>Party Type</span>
          <select> <option>Customer</option>
            <option>Suplier</option>
          </select>
        </div>
        <div className={CP.detail}>
          <span>Party Category</span>
          <select> <option> Select Category</option>

          </select>
        </div>
        <div className={CP.detail}>
          <span>GSTIN </span>
          <input type="GSTIN" name="gstIN" placeholder="ex: 29XXXXX9438X1XX"  onChange={handlefields} value={gstIN}></input>

        </div>

        <div className={CP.detail}>
          <span>Place of Supply </span>
          <select> <option>Jaipur</option>
            <option>DELHI</option>
          </select>
        </div>


      </div>

      <div className={CP.address}>

        <div className={CP.BA}>
          <span>Billing Address</span>
          <input type="name" name="billingAddress" placeholder="Enter Billing Address" onChange={handlefields} value={billingAddress}></input>
        </div>

        <div className={CP.SA}>
          <span>Shipping Address</span>
          <input type="name" name="shipmentAddress" placeholder="Enter Shipping Address" onChange={handlefields} value={shipmentAddress}></input>
        </div>


      </div>
      <div className={CP.border}> </div>
      <div className={CP.credit}>

        <div className={CP.detail}>
          <span>Credit Period</span>
          <input name="Period" placeholder="Enter " name="creditPeriod" onChange={handlefields} value={creditPeriod}></input>
        </div>

        <div className={CP.detail}>
          <span>Credit Limit</span>
          <input name="Limit" placeholder="0" name="creditLimit" onChange={handlefields} value={creditLimit}></input>
        </div>
      </div>

    </div>
  )
}


export default CreateParties;