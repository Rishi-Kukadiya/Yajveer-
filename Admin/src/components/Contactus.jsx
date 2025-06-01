import "../CSS/Contactus.css";
import { useSelector } from "react-redux";
export default function Contactus(){
    const { data: Contacts } = useSelector((state) => state.contactus);
    console.log(Contacts);
    return(
        <>
        </>
    )
};