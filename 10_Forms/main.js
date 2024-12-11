//1
// function formHandler(event) {
//     event.preventDefault(); 
    
//     const login = document.getElementById('login').value;
//     const rememberMe = document.getElementById('rememberMe').checked;

//     const message = `Привіт, ${login}! Я тебе ${rememberMe ? 'запам’ятав' : 'не запам’ятав'}.`;

//     localStorage.setItem('login', login);
//     localStorage.setItem('rememberMe', rememberMe);

//     const outputDiv = document.getElementById('TextHello');
//     outputDiv.textContent = message;

    
//     event.target.reset();
// }

//2
// function formHandler2(event) {
//         event.preventDefault(); 
        
//         const login = document.getElementById('login').value;
//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;
//         const passwordR = document.getElementById('passwordR').value;
        
//        let message; 
//    if(password===passwordR){
//      message = `На ${email} пошту
// надіслано лист із підтвердженням`;
//    }
//    else{
//     message = "Enter correct pasword";
//    }
   
        
    
//         localStorage.setItem('login', login);
//         localStorage.setItem('email', email);
//         localStorage.setItem('password', password);
        
    
//         const outputDiv = document.getElementById('TextHello');
//         outputDiv.textContent = message;
    
        
//         event.target.reset();
//     }

//3
// const infoForm = document.getElementById('info');
// const informationTable = document.getElementById('information-table');

// infoForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const firstname = document.getElementById('firstname').value.trim(); 
//     const lastname = document.getElementById('lastname').value.trim();
//     const dateInput = document.getElementById('date').value;
//     const country = document.getElementById('country').value;
//     const genderMale = document.getElementById('male');
//     const genderFemale = document.getElementById('female');
//     let gender = "";
//     const skillsCheckboxes = [
//         document.getElementById('html'),
//         document.getElementById('css'),
//         document.getElementById('js'),
//         document.getElementById('php'),
//         document.getElementById('c++'),
//         document.getElementById('java'),
//         document.getElementById('c#')
//     ];

    
    
//     if (firstname === "") {
//         alert('Enter First name');
//         return;
//     }
//     if (lastname === "") {
//         alert('Enter Last name');
//         return;
//     }
//     const selectedDate = new Date(dateInput);
//     const today = new Date();

//     if (selectedDate > today) {
//         alert('The birthday cannot be in the future.');
//         return;
//     }
//     if (genderMale.checked) {
//         gender = genderMale.value;
//     } else if (genderFemale.checked) {
//         gender = genderFemale.value;
//     } else {
//         alert("Please select your gender.");
//         return;
//     }
//     const isAnySkillChecked = skillsCheckboxes.some(checkbox => checkbox.checked);

//     if (!isAnySkillChecked) {
//         alert('Please select at least one skill.');
//         return;
//     }
//     const selectedSkills = skillsCheckboxes
//         .filter(checkbox => checkbox.checked)
//         .map(checkbox => checkbox.id.toUpperCase());
   
//     const table = document.createElement('div');
//     table.classList.add('table', 'border', 'mt-3', 'p-3');

//     table.innerHTML = `
//         <p><strong>Firstname:</strong> ${firstname}</p>
//         <p><strong>Lastname:</strong> ${lastname}</p>
//         <p><strong>Birthday date:</strong> ${dateInput}</p>
//         <p><strong>Gender:</strong> ${gender}</p>
//         <p><strong>Country:</strong> ${country}</p>
//         <p><strong>City:</strong> ${city}</p>
//         <p><strong>Skills:</strong> ${selectedSkills.join(', ')}
//     `;

//     informationTable.appendChild(table);

   
//     infoForm.reset();
// });

//4
// const colorForm = document.getElementById('colorForm');
// const colorPalette = document.getElementById('colorPalette');

// colorForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const red = document.getElementById('red').value;
//     const green = document.getElementById('green').value;
//     const blue = document.getElementById('blue').value;

//     if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
//         alert('Будь ласка, введіть значення між 0 та 255 для кожного кольору.');
//         return;
//     }

//     const colorBox = document.createElement('div');
//     colorBox.classList.add('colorBox');
//     colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//     const colorText = document.createElement('p');
//     colorText.textContent = `RGB(${red}, ${green}, ${blue})`;

    
//     colorBox.appendChild(colorText);
//     colorPalette.appendChild(colorBox);

//     colorForm.reset();
// });

//5
const questionForm = document.getElementById('questionForm');
        const questionList = document.getElementById('questionList');

        questionForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const questionText = document.getElementById('questionText').value.trim();
            const correctAnswer = document.getElementById('correctAnswer').value.trim();
            const wrongAnswer = document.getElementById('wrongAnswer').value.trim();

            if (!questionText || !correctAnswer || !wrongAnswer) {
                alert('Please fill out all fields.');
                return;
            }

            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            listItem.innerHTML = `
                <strong>Question:</strong> ${questionText}<br>
                <strong>Correct Answer:</strong> ${correctAnswer}<br>
                <strong>Wrong Answer:</strong> ${wrongAnswer}
            `;

            questionList.appendChild(listItem);

            questionForm.reset();
        });