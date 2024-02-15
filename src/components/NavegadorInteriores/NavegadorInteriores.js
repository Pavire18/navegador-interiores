import { useParams } from "react-router-dom";


const NavegadorInteriores = () => {

    const { id , place , floor} = useParams();

    return (
      <div className="page">
        <h1>Home</h1>
        <p>id: {id}</p>
        <p>place: {place}</p>
        <p>floor: {floor}</p>
      </div>
    );
  }
  
  export default NavegadorInteriores;