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
        <title>Candle Calculator!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Candle Wax Weight Calculator" />
        <br />

        <div className="main-container">
          <div className="left-container">
            <div className="container-form">
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
              <label>FRAGRANCE WEIGHT</label>
              <div>
              <span className="result">{resultFragranceWeight}</span>
              <span className="units"> grams</span>
              </div>
            </div>
          </div>

        </div>

      </main>

      <style jsx>{`
        .App {
          text-align: center;
        }

        .main-container {
          display: flex;
          flex-direction: row;
        }

        .left-container {
          display: flex;
          flex-direction: column;
          align-items: left;
          width: 50%;
          height: 100%;
          padding-right: 100px;
        }

        .right-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 50%;
          height: 100%;
          padding: 10px;
        }
        
        .container-form {
          display: flex;
          flex-direction: column;
          align-items: left;
        }
        
        .inline-form {
          display: flex;
          flex-direction: row;
          padding: 10px;
        }
        
        .inline-form > div > label  {
          margin-left : 15px;
        }
        
        div.form-control-lg  {
          padding : .5rem 0;
          padding-left: 2.25rem;
        }
        
        .inline-form > button  {
          margin : 10px;
        }
        
        .inline-form > button:first-child  {
          margin-left : 0px;
        }
        
        label {
          cursor : pointer;
          font-size: 0.8em;
          color: #111;
        }

        .label-div {
          padding-bottom: 10px;
        }

        input {
          font-size: 1.2em;
        }

        button {
          font-size: 1.2em;
          width: 400px;
          height: 40px;
        }

        .results-container {
          display: flex;
          flex-direction: column;
          align-items: left;
        }

        .result {
          font-weight: bold;
          font-size: 2em;
        }

        .units {
          color: #555;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenier Next, Open Sans,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>

      <Footer />
    </div>
  )
}
