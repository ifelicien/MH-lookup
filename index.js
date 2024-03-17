fetchMonsterData();

async function fetchMonsterData() {
  try {
    const monsterName = document
      .getElementById("monsterName")
      .value.toLowerCase();
    // const monsterName = "anjanath";
    const mhApi = `https://mhw-db.com/monsters?q={"name": "${monsterName}"}`;
    const response = await fetch(mhApi);

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    console.log(data);

    const monsterDescription = data[0].description;
    const monsterDescript = document.getElementById("description");

    monsterDescript.textContent = monsterDescription;
    monsterDescript.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
