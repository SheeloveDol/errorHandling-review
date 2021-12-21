class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }
 
  status() {
    console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
  }
}

const john = new Player('John', 60);
const matt = new Player('Matt', 73);

console.log(matt.hitsPerMinute, matt.balloonCount)

function winner(p1, p2) {
  if (p1.hitsPerMinute > p2.hitsPerMinute) {
    console.log(`${p1.name} wins`)
  } else if (p1.hitsPerMinute < p2.hitsPerMinute) {
    console.log(`${p2.name} wins`)
  } else if (p1.hitsPerMinute == p2.hitsPerMinute) {
    console.log(`${p1.hitsPerMinute}`);
  }

  // console.log(john.hitsPerMinute, b.hitsPerMinute)
}

winner(john, matt)