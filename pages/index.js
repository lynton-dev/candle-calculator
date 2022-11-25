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
    if (isNaN(vesselWeight) || vesselWeight == 0
    || isNaN(vesselPlusWaterWeight) || vesselPlusWaterWeight == 0
    || isNaN(fragrance) || fragrance == 0
    || isNaN(specificGravity) || specificGravity == 0) {
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

      <Header />

      <main>
        <div className="main-container">
          <div className="outer-container">
            <div className="left-container">
                <div className="inline-form">
                  <div>
                    <div className="label-div">
                      <label for="vesselWeight">EMPTY VESSEL WEIGHT</label>
                    </div>
                    <input
                      id="vesselWeight"
                      type="number"
                      min="0"
                      value={vesselWeight}
                      onChange={e => setVesselWeight(e.target.value)}
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
                      min="0"
                      value={vesselPlusWaterWeight}
                      onChange={e => setVesselPlusWaterWeight(e.target.value)}
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
                      min="0"
                      max="100"
                      value={fragrance}
                      onChange={e => setFragrance(e.target.value)}
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
                      min="0"
                      max="1"
                      step="0.01"
                      value={specificGravity}
                      onChange={e => setSpecificGravity(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

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

          <div className="bottom-container">
            <div className="inline-form">
              <button type="button" className="btn btn-primary" title="Calculate" onClick={() => {calculate()}}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 5H7V7H17V5Z" fill="currentColor" />
                  <path d="M7 9H9V11H7V9Z" fill="currentColor" />
                  <path d="M9 13H7V15H9V13Z" fill="currentColor" />
                  <path d="M7 17H9V19H7V17Z" fill="currentColor" />
                  <path d="M13 9H11V11H13V9Z" fill="currentColor" />
                  <path d="M11 13H13V15H11V13Z" fill="currentColor" />
                  <path d="M13 17H11V19H13V17Z" fill="currentColor" />
                  <path d="M15 9H17V11H15V9Z" fill="currentColor" />
                  <path d="M17 13H15V19H17V13Z" fill="currentColor" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 3C3 1.89543 3.89543 1 5 1H19C20.1046 1 21 1.89543 21 3V21C21 22.1046 20.1046 23 19 23H5C3.89543 23 3 22.1046 3 21V3ZM5 3H19V21H5V3Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>

        </div>
        
      </main>

      <Footer />
      
    </div>
  )
}
