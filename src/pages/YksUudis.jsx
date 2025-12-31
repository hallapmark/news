import { useParams } from "react-router-dom"

function YksUudis() {
  const { index } = useParams();
  const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
  const uudis = uudised[index];

  return (
    <div>
      <h2>{uudis}</h2>
    </div>
  )
}
export default YksUudis