import "../CSS/OrderHistory.css";
import { useSelector } from "react-redux";
export default  function OrderHistory(){
    const { data: orderhistory } = useSelector((state) => state.orderhistory);
    console.log(orderhistory);
    return(
        <>
        </>
    )
;}