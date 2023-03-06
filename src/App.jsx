import { useState } from "react";
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
        <button onClick={toggleData} className="generate">
          {!visibleData ? "Generate Link" : "Hide Link"}
        </button>
      );
    }
  };

  return (
    <div className="App">
      <h1>No more useless contacts</h1>
      <div className="controls">
        <div className="countries">
          <select onChange={onChangeCountry} name="countries" id="countries">
            {SelectableCountriesList()}
          </select>

          <input onChange={onChangeNumber} type="number" name="cel" id="cel" />
        </div>
      </div>

      {renderButton()}
      <ContactData
        visible={visibleData}
        selectedCountry={selectedCountry}
        phoneNumber={phoneNumber}
      />
    </div>
  );
}

export default App;
