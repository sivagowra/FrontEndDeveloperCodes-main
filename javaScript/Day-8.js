let person={
    name:"Siva",
    age:20
}
console.log(person);
const person1 = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullname: function(){
        return `${this.firstName}`
    }
  }
  console.log(person1.getFullname())