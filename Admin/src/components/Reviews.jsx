import "../CSS/Reviews.css";
import { useSelector } from "react-redux";
export default function Reviews(){
      const { data: Reviews } = useSelector((state) => state.reviews);
      console.log(Reviews);
    return(
        <>
        </>
    )
};