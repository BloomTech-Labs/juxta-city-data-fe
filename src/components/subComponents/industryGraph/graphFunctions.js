import React from "react";
import * as industryData from "./industries.json";

const convertStringToObject = (arr) => {
  let keyValueArray = [];
  let arrOfKeyValueArrays = [];

  arr.map((element) => {
    element.split("'").map((item) => {
      if (item.length > 3) {
        keyValueArray.push(item);
      }
    });
  });

  keyValueArray.forEach((item) => {
    let newitem = item.split(/[()]/);
    newitem.pop();
    arrOfKeyValueArrays.push(newitem);
  });

  function toObject(pairs) {
    return Array.from(pairs).reduce(
      (acc, [key, value]) => Object.assign(acc, { [key]: value }),
      {}
    );
  }

  let ObjectFromArray = toObject(arrOfKeyValueArrays);

  return ObjectFromArray;
};

function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <h3 className="label">{`${payload[0].value}%`}</h3>
        <p
          className="desc"
          style={{ textalign: "center" }}
        >{`${payload[0].payload.name}`}</p>
      </div>
    );
  }
  return null;
}

const renderCustomBarLabel = ({ x, y, width, value }) => {
  return <text x={x + width / 2} y={y} fill="#000" dy={-6}>{`${value}%`}</text>;
};
// This function transforms a string into a object
const changeKeyNames = (obj) => {
  let arrOfIndustries = [];

  for (let keyName in obj) {
    let xlabel;
    function shortenIndustryName(keyName) {
      let translation = [];

      industryData.default.map((item) => {
        let key = Object.keys(item);
        translation[key] = Object.values(item);
      });

      xlabel = translation[keyName];
    }

    shortenIndustryName(keyName);

    arrOfIndustries.push({
      name: keyName,
      Industry: parseFloat(obj[keyName]),
      xlabel: xlabel,
    });
  }
  return arrOfIndustries;
};

export {
  convertStringToObject,
  renderCustomBarLabel,
  CustomTooltip,
  changeKeyNames,
};
