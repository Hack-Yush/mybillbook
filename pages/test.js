// components

import ServiceDetails from "../components/ServiceDetails";

const styles= {
  height:"auto",
  width:"100%",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",


}

const Test = () => {
  return (
    <div style={styles}>
           {<ServiceDetails/>}
        </div>
  )
}

export default Test