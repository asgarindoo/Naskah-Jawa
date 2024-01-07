function showArray() {
  let programmingLanguages = ["JavaScript", "Python", "Java", "C++", "Ruby"];

  let resultMessage = "Programming Languages: ";
  for (let i = 0; i < programmingLanguages.length; i++) {
    resultMessage += programmingLanguages[i] + " ";
  }

  return resultMessage;
}

alert(showArray());
