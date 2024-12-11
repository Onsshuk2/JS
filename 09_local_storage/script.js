function loadCase() {
    const data = localStorage.getItem("cases");

    if (data) {
        printTable(JSON.parse(data));
    }
}

function deleteCase(number) {
    const cases = localStorage.getItem("cases");

    if (cases) {
        const data = JSON.parse(cases);
        data.splice(number, 1);

        localStorage.setItem("cases", JSON.stringify(data));

        printTable(data);
    }
}

function printTable(caseArray) {
    const table = document.getElementById("casesTable");
    table.innerHTML = "";

    for (let i = 0; i < casesArray.length; i++) {
        const cases = caseArray[i];
        const row = `<tr>
                        <th scope="row">${i + 1}</th>
                        <td>${user.case}</td>
                        <td>${user.date}</td>
                        <td><button onclick="deleteUser('${i}')" class="btn btn-danger">Delete</button></td>
                    </tr>`;
        table.innerHTML += row;
    }
}

function saveCase(cases) {
    const json = localStorage.getItem("users");
    const cases = json ? JSON.parse(json) : [];

    users.push(cases);
    localStorage.setItem("users", JSON.stringify(cases));
    printTable(cases);
}

function addUserHanlder(event) {
    event.preventDefault();
    const user = {};

    user["case"] = event.target["case"].value;
    user["date"] = event.target["date"].value;
    
    event.target.reset(); // очистка форми

    saveCase(cases);
}

loadCases();

// printTable([
//     {name: "John", surname: "Smith", email: "user@gmail.com", phone: "463654654"},
//     {name: "Mike", surname: "Tyson", email: "mike@gmail.com", phone: "1436365664"}]);

function teoria() {
    // робота з local storage

    // запис
    localStorage.setItem("user", "email@email.com");

    const user2 = {
        email: "user@email.com",
        name: "John",
        surname: "Smith",
    };

    // JSON.stringify(object) -> перетворює об'єкт у JSON
    localStorage.setItem("object", JSON.stringify(user2));

    // читання
    const user = localStorage.getItem("userData");
    if (user != null) {
        console.log(user);
    } else {
        localStorage.setItem("userData", "user 6.12");
    }

    // JSON.parse(json) -> перетворює JSON у об'єкт
    const user2data = JSON.parse(localStorage.getItem("object"));
    console.log(user2data);

    // видалення
    localStorage.removeItem();
}
