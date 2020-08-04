import React, { useContext } from "react";
import CityContext from "../../../contexts/CityContext";
import { convertStringToObject } from "./graphFunctions";
import BarGraph from "./BarGraph";

function EconomyGraph() {
  const { cityData } = useContext(CityContext);
  // console.log(cityData, "city data");

  const economyDataString = cityData.Most_Common_Industries
  // save the data to the local storage and then we get it from there and use
  
  localStorage.setItem("economyDataString", economyDataString)
  const localdata = localStorage.getItem("economyDataString") 
  // console.log(economyDataString, " economyDataString");

  const economyDataStringLocal  = localdata.split("'")
  const economyObject = convertStringToObject(economyDataStringLocal );

  let arrOfIndustries = [];

  const changeKeyNames = (obj) => {
    for (let keyName in obj) {
      let xlabel;
      function shortenIndustryName(keyName) {
        let translation = [];

        translation["Health care "] = "Health";
        translation["Professional, scientific, technical services "] = "Tech";
        translation["Educational services "] = "Education";
        translation["Accommodation & food services "] = "Food";
        translation["Construction "] = "Construction";
        translation["Chemicals "] = "Chemicals";
        translation["Administrative & support & waste management services "] =
          "Maintenance";
        translation["Public administration "] = "Public admin";
        translation["Transportation equipment "] = "Transportation";
        translation[
          "Publishing, motion picture & sound recording industries "
        ] = "Publishing";
        translation["Food & beverage stores "] = "Stores";
        translation["Social assistance "] = "Assistance";
        translation["Finance & insurance "] = "Finance";
        translation["Metal & metal products "] = "Metal";
        translation["Utilities "] = "Utilities";
        translation["Computer & electronic products "] = "Electronics";
        translation["Truck transportation "] = "Transportation";
        translation["Mining, quarrying, oil & gas extraction "] = "Extraction";
        translation["Department & other general merchandise stores "] =
          "Merchandise";
        translation["Air transportation "] = "Transportation";
        translation["Textile mills & textile products "] = "Textile";
        translation["Agriculture, forestry, fishing & hunting "] =
          "Agriculture";
        translation["Apparel "] = "Apparel";
        translation["Repair & maintenance "] = "Maintenance";
        translation["Food "] = "Food";
        translation["Paper "] = "Paper";
        translation["Broadcasting & telecommunications "] = "Broadcasting";
        translation[
          "Used merchandise, gift, novelty, souvenir, other miscellaneous stores "
        ] = "Miscellaneous";
        translation["Data processing, libraries, other information services "] =
          "Information";
          translation["Arts, entertainment, recreation "] = "Art";

        xlabel = translation[keyName];
      }
     
      shortenIndustryName(keyName);

      arrOfIndustries.push({
        name: keyName,
        Industry: parseFloat(obj[keyName]),
        xlabel: xlabel,
      });
    }
  };
  // console.log(arrOfIndustries, "arrOfIndustries");
  changeKeyNames(economyObject);

  return <BarGraph arrOfIndustries={arrOfIndustries} />;
}
export default EconomyGraph;
