const a = new Map()
console.log(a);
a.set('Name', 'Siva Naidu')
console.log(a);

const rectangle = {
    width: 30,
    height: 10,
    area: 200,
    perimeter: 80
  }
  let { width, height, area, perimeter = 60 } = rectangle
  console.log(width, height, area, perimeter) //30 10 200 80