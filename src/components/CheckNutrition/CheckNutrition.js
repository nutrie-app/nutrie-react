const CheckLtEqNutrion = (naringsVarden, naringsObject) => {
  const result = [];
  for (let i = 0; i < naringsObject.length; i += 1) {
    for (let j = 0; j < naringsVarden.length; j += 1) {
      if (
        naringsObject[i].Benamning.toLowerCase().includes(naringsVarden[j].Benamning.toLowerCase())
      ) {
        if (naringsObject[i].Query <= naringsVarden[j].Mangd) {
          result.push(naringsVarden[j]);
        }
      }
    }
  }
  return result;
};

export default CheckLtEqNutrion;
