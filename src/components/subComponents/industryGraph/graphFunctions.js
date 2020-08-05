import React from 'react';

const convertStringToObject = arr => {
  let keyValueArray = [];
  let arrOfKeyValueArrays = [];


  arr.map(element => {
    element.split("'").map(item => {
      if (item.length > 3) {
        keyValueArray.push(item);
      }
    });
  });

  keyValueArray.forEach(item => {
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
      <div className='custom-tooltip'>
        <h3 className='label'>{`${payload[0].value}%`}</h3>
        <p
          className='desc'
          style={{ textalign: 'center' }}
        >{`${payload[0].payload.name}`}</p>
      </div>
    );
  }
  return null;
}

const renderCustomBarLabel = ({ x, y, width, value }) => {
  return <text x={x + width / 2} y={y} fill='#000' dy={-6}>{`${value}%`}</text>;
};

const changeKeyNames = obj => {
  let arrOfIndustries = [];

  for (let keyName in obj) {
    let xlabel;
    function shortenIndustryName(keyName) {
      let translation = [];

      translation['Health care '] = 'Health';
      translation['Professional, scientific, technical services '] = 'Tech';
      translation['Educational services '] = 'Education';
      translation['Accommodation & food services '] = 'Food';
      translation['Construction '] = 'Construction';
      translation['Chemicals '] = 'Chemicals';
      translation['Administrative & support & waste management services '] =
        'Maintenance';
      translation['Public administration '] = 'Public admin';
      translation['Transportation equipment '] = 'Transportation';
      translation['Publishing, motion picture & sound recording industries '] =
        'Publishing';
      translation['Food & beverage stores '] = 'Stores';
      translation['Social assistance '] = 'Assistance';
      translation['Finance & insurance '] = 'Finance';
      translation['Metal & metal products '] = 'Metal';
      translation['Utilities '] = 'Utilities';
      translation['Computer & electronic products '] = 'Electronics';
      translation['Truck transportation '] = 'Transportation';
      translation['Mining, quarrying, oil & gas extraction '] = 'Extraction';
      translation['Department & other general merchandise stores '] =
        'Merchandise';
      translation['Air transportation '] = 'Transportation';
      translation['Textile mills & textile products '] = 'Textile';
      translation['Agriculture, forestry, fishing & hunting '] = 'Agriculture';
      translation['Apparel '] = 'Apparel';
      translation['Repair & maintenance '] = 'Maintenance';
      translation['Food '] = 'Food';
      translation['Paper '] = 'Paper';
      translation['Broadcasting & telecommunications '] = 'Broadcasting';
      translation[
        'Used merchandise, gift, novelty, souvenir, other miscellaneous stores '
      ] = 'Miscellaneous';
      translation['Data processing, libraries, other information services '] =
        'Information';
      translation['Arts, entertainment, recreation '] = 'Art';
      translation['Real estate & rental & leasing '] = 'Estate';

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
