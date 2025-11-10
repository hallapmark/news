import { useState } from "react";

function Meist() {
  const [kontakt, setKontakt] = useState("");
  const tootajad = [
    {nimi: "Arvo Pärt", ala: "Uudisklippide taustamuusika", telefon: "+372 123123"},
    {nimi: "Kelly Sildaru", ala: "Püstolreporter", telefon: "+372 123124"},
    {nimi: "Edward von Lõngus", ala: "Uudiste kujundamine", telefon: "+372 123125"},
    {nimi: "Kerli Kõiv", ala: "Välisturgude spetsialist", telefon: "+372 123126"},
    {nimi: "Vaiko Eplik", ala: "Nooremarendaja", telefon: "+372 123127"},
  ]

  function n2itaKontakt(e, kontakt) {
    e.stopPropagation();
    setKontakt(kontakt);
  }

  return (
    <div onClick={() => setKontakt("")}>
      <div>See on meist leht, nähtav localhost:5173/meist aadressil</div>
      <div>Meie töötajad:</div>
      <br />

      <div>
        {tootajad.map(tootaja =>
          <div key={tootaja.nimi}>
            <div>{tootaja.nimi}</div>
            <div>{tootaja.ala}</div>
            <button onClick={(e) => n2itaKontakt(e, tootaja.telefon)}>Võta ühendust</button>
            <br />
            <br />
          </div>
        )}

      </div>

      <br />
      <br />
      {kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    </div>
  );
}

export default Meist;
