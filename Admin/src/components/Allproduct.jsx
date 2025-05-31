import "../CSS/Allproduct.css";
import { useSelector } from "react-redux";

export default function Allproduct() {
  const { data: products } = useSelector((state) => state.cart);
  console.log(products);
  return <>
    <h1>Display all product here </h1>
</>;
}
