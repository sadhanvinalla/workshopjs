var users = [
    {
        name: "John Doe",
        gender: "Male",
        image: "../images/john.png"
    },
    {
        name: "Jane Deo",
        gender: "Female",
        image: "../images/jane.png"
    }
];

let curid = 0;

function toggle() {
    // toggle curid between 0 and 1
    curid = (curid + 1) % users.length;

    // update the rendered user detail
    document.getElementById("user").src = users[curid].image;
    document.getElementById("name").innerText = users[curid].name;
    document.getElementById("gender").innerText = users[curid].gender;
}