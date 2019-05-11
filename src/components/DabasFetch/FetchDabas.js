const url = 'http://api.dabas.com/DABASService/V2';
const apikey = 'a5644a39-d11a-4984-a6af-ad6da266901f';

/**
 * GET article information
 *
 * @param {string} gtin
 */
export const getGtin = gtin => {
  return fetch(`${url}/article/gtin/${gtin}/json?apikey=${apikey}`)
    .then(response => response.json())
    .then(responseJson => {
      const {
        Allergener,
        Artikelbenamning,
        Bilder,
        Naringsinfo,
        Nettoinnehall,
        Tillverkningslander,
        Varumarke,
        Ingrediensforteckning,
      } = responseJson;
      const info = {
        Allergener,
        Artikelbenamning,
        Bilder,
        Naringsinfo,
        Nettoinnehall,
        Tillverkningslander,
        Varumarke,
        Ingrediensforteckning,
      };

      return info;
    });
};

/**
 * GET article hierarchy
 *
 * @param {string} gtin
 */
export const getGtinHierarchy = gtin => {
  return fetch(`${url}/articlehierarchy/gtin/${gtin}/json?apikey=${apikey}`)
    .then(response => response.json())
    .then(responseJson => {
      const topp = responseJson[0].ChildArtikel[0].GTIN;
      const mellan = responseJson[0].ChildArtikel[0].GTIN;
      const bas = responseJson[0].ChildArtikel[0].ChildArtikel[0].GTIN;

      const gtins = {
        topp,
        mellan,
        bas,
      };
      return gtins;
    });
};

/**
 * GET the BAS article information based on getting the hierarchy
 *
 * ASSUMPTION: A GTIN hierarchy has three levels in article (TOPP, MELLAN, BAS)
 *
 * @param {string} gtin
 */
export const getBasGtin = gtin => {
  return getGtinHierarchy(gtin).then(response => {
    const { bas } = response;

    getGtin(bas).then(response => {
      return response;
    });
  });
};
