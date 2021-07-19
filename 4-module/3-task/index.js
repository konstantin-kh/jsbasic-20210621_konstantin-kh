function highlight(table) {
  const row = table.querySelectorAll("tr");
  let foundGender = null;
  let foundAge = null;
  let foundStatus = null;

  for (let i = 0; i < row[0].children.length; i++) {
    switch (row[0].children[i].innerText) {
      case "Age":
        foundAge = i;
        break;

      case "Gender":
        foundGender = i;
        break;

      case "Status":
        foundStatus = i;
        break;
    }
  }

  for (let j = 1; j < row.length; j++) {
    const hasData = row[j].children[foundStatus];
    const age = row[j].children[foundAge].innerText;
    const gender = row[j].children[foundGender];

    if (hasData.hasAttribute("data-available")) {
      const checkData = hasData.getAttribute("data-available");

      if (checkData === "true") {
        hasData.parentElement.classList.add("available");
      } else if (checkData === "false") {
        hasData.parentElement.classList.add("unavailable");
      }

    } else {
      hasData.parentElement.hidden = true;
    }

    if (age < 18) {
      gender.parentElement.style = "text-decoration: line-through";
    }

    if (gender.innerText === "m") {
      gender.parentElement.classList.add("male");
    } else if (gender.innerText === "f") {
      gender.parentElement.classList.add("female");
    }
  }
}
