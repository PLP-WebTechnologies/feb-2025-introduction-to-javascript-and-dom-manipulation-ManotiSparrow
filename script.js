function showSection(sectionId) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(section => {
      section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");
  }
  
  function addItem() {
    const select = document.getElementById("item-select");
    const list = document.getElementById("favorites");
    const newItem = document.createElement("li");
    newItem.textContent = select.value;
    list.appendChild(newItem);
  }
  
  function removeItem() {
    const list = document.getElementById("favorites");
    if (list.lastElementChild) {
      list.removeChild(list.lastElementChild);
    }
  }
  
  function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
  }
  
  