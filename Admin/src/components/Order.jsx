import "../CSS/Order.css";
import { useSelector } from "react-redux";
export default function Order(){
    const { data: Order } = useSelector((state) => state.order);
    console.log(Order);
    return(
        <>
        </>
    )
};