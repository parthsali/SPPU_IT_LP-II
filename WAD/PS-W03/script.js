
const handleSubmit = () => {

    // get the values of the input fields
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;


    // get the users array from the local storage or an empty array if it is not present
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // create an object with the user data
    let userData = {
        name,
        username,
        email,
        phone
    }

    console.log(userData);


    // push the new user data to the users array on the top
    users.unshift(userData);


    // store the updated users array to the local storage
    localStorage.setItem('users', JSON.stringify(users));

    // redirect to the usersData.html page
    window.location.href = "usersData.html";
}



const handleRedirect = () => {
    window.location.href = "index.html";
}

document.addEventListener('DOMContentLoaded', () => {
    // get the users array from the local storage or an empty array if it is not present
    let users = JSON.parse(localStorage.getItem('users')) || [];


    // get the container element where the table will be appended to display the users data
    let container = document.getElementById('result');

    // if there are no users in the users array, display a message
    if (users.length == 0) {
        container.innerText = "No users found";
    }

    // create the table elements like table, thead, tbody, tr, th, td
    let tableEle = document.createElement('table');
    let theadEle = document.createElement('thead');
    let tbodyEle = document.createElement('tbody');

    let tr = document.createElement('tr');

    let th1 = document.createElement('th');
    th1.innerText = "Name";
    tr.appendChild(th1);

    let th2 = document.createElement('th');
    th2.innerText = "Username";
    tr.appendChild(th2);

    let th3 = document.createElement('th');
    th3.innerText = "Email";
    tr.appendChild(th3);

    let th4 = document.createElement('th');
    th4.innerText = "Phone";
    tr.appendChild(th4);

    theadEle.appendChild(tr);


    // loop through the users array and create a row for each user and append it to the tbody
    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerText = users[i].name;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerText = users[i].username;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerText = users[i].email;
        tr.appendChild(td3);

        let td4 = document.createElement('td');
        td4.innerText = users[i].phone;
        tr.appendChild(td4);

        tbodyEle.appendChild(tr);
    }

    // append the thead and tbody to the table
    tableEle.appendChild(theadEle);
    tableEle.appendChild(tbodyEle);

    // append the table to the container
    container.appendChild(tableEle);
})

