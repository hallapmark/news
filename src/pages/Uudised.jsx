import { Link } from "react-router-dom";

function Uudised() {
  const uudised = JSON.parse(localStorage.getItem("uudised")) || [];

  return (
    <div style={{ marginTop: "20px" }}>
      <div>See on uudiste leht, nähtav localhost:5173/uudised aadressil</div>
      { uudised.length == 0 && <h5>Ühtegi uudist hetkel pole! Lisame õige pea.</h5> } 
      { uudised.map((uudis, idx) => 
        <Link to={ "/uudis/" + idx } key={idx}><h5>{uudis}</h5></Link>
      )}
    </div>
  )
}

export default Uudised