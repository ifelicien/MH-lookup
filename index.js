fetchMonsterData();

async function fetchMonsterData() {
  try {
    const monsterName = document
      .getElementById("monsterName")
      .value.toLowerCase();
    // const monsterName = "rathalos";
    const mhApi = `https://mhw-db.com/monsters?q={"name": "${monsterName}"}`;
    const response = await fetch(mhApi);

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    console.log(data);

    // Monster description
    const monsterDescription = data[0].description;
    const monsterDescript = document.getElementById("description");

    monsterDescript.textContent = monsterDescription;
    monsterDescript.style.display = "block";

    // Monster Species
    const monsterSpecies = data[0].species;
    const species = document.getElementById("species");

    species.textContent = monsterSpecies;
    species.style.display = "block";


    // Monster Element
    const elementType = data[0].elements;
    const monsterElement = document.getElementById("elemental");

    monsterElement.textContent = elementType;
    monsterElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
