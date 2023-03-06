import { useState } from "react";
import "bulma/css/bulma.min.css";

import "./App.css";
import countries from "./data/countries";
import ContactData from "./ContactData/ContactData";

const SelectableCountriesList = () => {
  const countriesArray = countries.map((country) => {
    return (
      <option key={country.code} value={country.dial_code}>
        {country.name}
      </option>
    );
  });
  return countriesArray;
};

function App() {
  const [selectedCountry, setSelectedCountry] = useState("93");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [visibleData, setVisibleData] = useState(false);

  const onChangeCountry = (event) => {
    const value = event.target.value;
    setSelectedCountry(value);
  };

  const onChangeNumber = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
  };

  const toggleData = () => {
    setVisibleData(!visibleData);
  };

  const renderButton = () => {
    if (phoneNumber != "") {
      return (
        <button type="submit" className="button block " onClick={toggleData}>
          {!visibleData ? "Generate Link" : "Hide Link"}
        </button>
      );
    }
  };

  return (
    <div className="App">
      <div className="column">
        <h1 className="title">No more useless contacts</h1>
      </div>

      <div className="columns">
        <div className="column">
          <div className="column">
            <div className="field">
              <div className="countries select control is-fullwidth ">
                <select
                  onChange={onChangeCountry}
                  name="countries"
                  id="countries"
                >
                  {SelectableCountriesList()}
                </select>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <input
                  className="input "
                  placeholder="00000"
                  onChange={onChangeNumber}
                  type="number"
                  name="cel"
                  id="cel"
                />
              </div>
            </div>
            <div className="control">{renderButton()}</div>
          </div>
        </div>
        <div className="column">
          <div className="column">
            <ContactData
              visible={visibleData}
              selectedCountry={selectedCountry}
              phoneNumber={phoneNumber}
            />
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Sendy</strong> by{" "}
            <a href="https://github.com/jhonsnake/sendy">John Prada</a>. The
            source code is free and licenced under
            <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
