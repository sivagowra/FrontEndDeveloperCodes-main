var a={
    firstname: "Siva",
    lastname: "naidu",
    age: 26,
    getFullname: function() {
        return `${this.firstname} ${this.lastname }`
    }
}
console.log(a.getFullname())
console.log(Object.values(a))