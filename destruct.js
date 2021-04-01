const player = {
  name: 'lebron james',
  club: 'la lakers',
  address: {
    city: 'los angeles'
  }
};

console.log(player.name);

const { name, club, address: {city} } = player;

console.log(`${name} plays for ${club}`);
console.log(`${name} lives in  ${city}`);
