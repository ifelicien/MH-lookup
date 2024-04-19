fetchMonsterData();
const title = "Monster Hunter Data Tool";
document.querySelector("#title").innerHTML = title;

async function fetchMonsterData() {
  try {
    // const search = document
    //   .getElementById("search")
    //   .value.toLowerCase();
    const search = "rathalos";
    const mhApi = `https://mhw-db.com/monsters?q={"name": "${search}"}`;
    const response = await fetch(mhApi);

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    console.log(data);

    // Monster description
    const descriptionText = "Description";
    document.querySelector("#descript").innerHTML = descriptionText;

    const monsterDescription = data[0].description;
    const monsterDescript = document.getElementById("descript");

    monsterDescript.textContent = monsterDescription;
    monsterDescript.style.display = "block";

    // Monster Species
    const speciesText = "Species";
    document.querySelector("#species").innerHTML = speciesText;

    const monsterSpecies = data[0].species;
    const species = document.getElementById("species");

    species.textContent = monsterSpecies;
    species.style.display = "block";

    // Monster Element
    const elementText = "Element";
    document.querySelector("#element").innerHTML = elementText;

    const elementType = data[0].elements;
    const monsterElement = document.getElementById("element");

    monsterElement.textContent = elementType;
    monsterElement.style.display = "block";

    //Monster Weakness
    const weaknessText = "Weakness";
    document.querySelector("#weakness").innerHTML = weaknessText;

    const weaknessType = data[0].weaknesses;
    const monsterWeakness = document.getElementById("weakness");

    monsterWeakness.textContent = weaknessType;
    monsterWeakness.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
