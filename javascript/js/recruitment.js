function outRecruiter(){
    let inName = document.getElementsByClassName("inName");
    let inSurname = document.getElementsByClassName("inSurname");
    let inStudyArea = document.getElementsByClassName("inStudyArea");
// let inYearOfBirth = document.getElementsById("inYearOfBirth");
    // let date = new Date();
    // const actualYear = date.getFullYear();
    let name = inName.value;
    let surname = inSurname.value;
    let studyArea = inStudyArea.value;
    // let yearOfBirth = inYearOfBirth;
    // let age = actualYear - yearOfBirth;
    console.log("Hello World")
    console.log("Nome: " + name + " " + surname)
    console.log("Área de Estudo: " + studyArea)
    // console.log("Idade: " + age);

}
