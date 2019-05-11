const CheckEqAlerenes = (alergenes, alergenesProfileArray) => {
  const alergenesArray = [];
  for (let i = 0; i < alergenes.length; i += 1) {
    const tempAlergeneString = alergenes[i].Allergen;
    for (let j = 0; j < alergenesProfileArray.length; j += 1) {
      if (tempAlergeneString.toLowerCase().includes(alergenesProfileArray[j].toLowerCase())) {
        alergenesArray.push(alergenes[i]);
      }
    }
  }
  return alergenesArray;
};

export default CheckEqAlerenes;
