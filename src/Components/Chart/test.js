var geoCord = require("./geo");
var url =
  "https://gitcdn.xyz/cdn/BlankerL/DXY-COVID-19-Data/cb9e825d0726eb3bc618eb8265d5ad9eeeb2c9fd/json/DXYArea.json";
const area = async setData => {
  const data = await fetch(url);
  const res = await data.json();
  var temp = res.results.filter(item => item.country === "中国");
  var output = temp.map(
    ({
      provinceShortName,
      confirmedCount,
      suspectedCount,
      curedCount,
      deadCount
    }) => ({
      name: provinceShortName,
      longitude: geoCord[provinceShortName][0],
      latitude: geoCord[provinceShortName][1],
      confirmedCount,
      suspectedCount,
      curedCount,
      deadCount
    })
  );
  setData(output);
};

module.exports = area;
