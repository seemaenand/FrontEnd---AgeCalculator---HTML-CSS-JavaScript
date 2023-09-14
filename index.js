    // document.addEventListener("DOMContentLoaded", function () {
    const btnElement = document.getElementById("btn");
    // to get the input information
    const birthdayElement = document.getElementById("birthdayInput");
const resultElement = document.getElementById("result");

    function calculateAge() {
    
        const birthDateValue = birthdayElement.value;
        // if nothing is added in the birthdate
        if (birthDateValue === "") {
            alert("Please enter your date of birth");
        } else {
            // calculate age
            const age = getAge(birthDateValue);
            // console.log(age);
            resultElement.innerText = `You are ${age} ${age>1? "years" : "year"} old`;

        }

    }

    function getAge(birthDateValue) {
        // lets get the current date
        const currentDate = new Date();
        const birthDate = new Date(birthDateValue);
        // console.log(birthDate.getFullYear());
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        // console.log(age);
        const month = currentDate.getMonth() - birthDate.getMonth();

        if (month < 0 ||  (month === 0 && currentDate.getDate() < birthDate.getDate()) ){
            age--;
        }
        return age;
        }

    btnElement.addEventListener("click", calculateAge);
// })