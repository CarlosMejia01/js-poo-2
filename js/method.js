function showFullName() {
    return "Ryan Ray";
};

const user = {
    name: "ryan", //properties
    lastname: "ray",
    age: 30,
    showFullName: showFullName
}

console.log(user.showFullName());