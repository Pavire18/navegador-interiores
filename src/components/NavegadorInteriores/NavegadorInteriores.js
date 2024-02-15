import { useParams } from "react-router-dom";
import HouseElements from "../HouseElements/HouseElements";
import './NavegadorInteriores.css';

const NavegadorInteriores = () => {

    const { id , place , floor} = useParams();

    return (
      <div className="page">
        <div>
          <h1>Home</h1>
          <p>id: {id}</p>
          <p>place: {place}</p>
          <p>floor: {floor}</p>
        </div>
          <HouseElements></HouseElements>
      </div>
    );
  }
  
  export default NavegadorInteriores;