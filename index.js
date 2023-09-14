const btnElement = document.getElementById("btn");
const birthdayElement = document.getElementById("birthday");

function calculateAge() {
    const currentDate = new Date();
    
    const birthDateValue = birthdayElement.Value;
    console.log(birthDateValue);
    
}

btnElement.addEventListener("click", calculateAge);