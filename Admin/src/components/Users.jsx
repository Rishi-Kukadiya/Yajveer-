import { useSelector } from "react-redux";
import "../CSS/Users.css";
export default function Users() {
  const { data: user } = useSelector((state) => state.users);
  return <></>;
}
