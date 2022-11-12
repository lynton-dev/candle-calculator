import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React, { useState } from 'react';

export default function Home() {
  const [vesselWeight, setVesselWeight] = useState();
  const [vesselPlusWaterWeight, setVesselPlusWaterWeight] = useState();
  const [fragrance, setFragrance] = useState(8);
  const [specificGravity, setSpecificGravity] = useState(0.9);
  const [resultWaxWeight, setResultWaxWeight] = useState("0");
  const [resultFragranceWeight, setResultFragranceWeight] = useState("0");

  function calculate() {
    if (isNaN(vesselWeight) || isNaN(vesselPlusWaterWeight)) {
      return;
    }
    const waterWeight = vesselPlusWaterWeight - vesselWeight
    const totalWaxWeight = waterWeight * specificGravity
    var waxWeight = totalWaxWeight / (1 + fragrance/100)
    const fragranceWeight = Math.round(totalWaxWeight - waxWeight)
    waxWeight = Math.round(waxWeight)

    setResultWaxWeight(waxWeight)
    setResultFragranceWeight(fragranceWeight)
  }

  return (
    <div className="container">
      <Head>
        <title>Candle Wax Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Candle Wax Calculator</h1>
        <br />

        <div className="main-container">
          <div className="left-container">
              <div className="inline-form">
                <div>
                  <div className="label-div">
                    <label for="vesselWeight">EMPTY VESSEL WEIGHT</label>
                  </div>
                  <input
                    id="vesselWeight"
                    type="number"
                    value={vesselWeight}
                    onChange={e => setVesselWeight(+e.target.value)}
                    className="form-control"
                    placeholder="in grams"
                  />
                </div>
              </div>

              <div className="inline-form">
                <div>
                  <div className="label-div">
                    <label for="vesselPlusWaterWeight">WEIGHT OF VESSEL PLUS WATER</label>
                  </div>
                  <input
                    type="number"
                    value={vesselPlusWaterWeight}
                    onChange={e => setVesselPlusWaterWeight(+e.target.value)}
                    className="form-control"
                    placeholder="in grams"
                  />
                </div>
              </div>

              <div className="inline-form">
              <div>
                <div className="label-div">
                  <label for="fragrance">FRAGRANCE %</label>
                </div>
                  <input
                    type="number"
                    value={fragrance}
                    onChange={e => setFragrance(+e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="inline-form">
              <div>
                <div className="label-div">
                  <label for="specificGravity">WAX SPECIFIC GRAVITY</label>
                </div>
                  <input
                    type="number"
                    value={specificGravity}
                    onChange={e => setSpecificGravity(+e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="inline-form">
                <button type="button" className="btn btn-primary" onClick={() => {calculate()}}> Calculate </button>
              </div>
              
              <hr className="h-border" style={{ width:"50%", borderTop: "1px solid #b5b5b5", marginTop: "50px" }} />

          </div>
        

          <div className="right-container">
            <div className="results-container">
              <div className="label-div"><label>WAX WEIGHT</label></div>
              <div>
                <span className="result">{resultWaxWeight}</span>
                <span className="units"> grams</span>
              </div>
              <br /><br />
              <div className="label-div"><label>FRAGRANCE WEIGHT</label></div>
              <div>
                <span className="result">{resultFragranceWeight}</span>
                <span className="units"> grams</span>
              </div>
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  )
}
