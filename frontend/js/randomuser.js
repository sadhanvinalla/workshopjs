function randomuser() {
    fetch("https://randomuser.me/api/")
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            var user = data.results[0];

            var fullname = user.name.title + " " + user.name.first + " " + user.name.last;

            document.getElementById("user").src = user.picture.large;
            document.getElementById("name").innerText = fullname;
            document.getElementById("gender").innerText = user.gender;

            console.log(data);
        });
}