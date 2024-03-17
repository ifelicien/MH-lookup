// const monsterName = document.getElementById('textBox');
const monsterName = "great jagras";
const apiUrl = `https://mhw-db.com/monsters?q={"name": ${monsterName}}`;

async function callAPI() {
  const url =
    apiUrl
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e37148a6cfmsh8579160b8236eccp19421ajsn833b493f0a11",
      "X-RapidAPI-Host": "monster-hunter-basic-information.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
callAPI();
