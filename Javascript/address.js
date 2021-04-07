function addressmaker(city,state) {
  const newAddress = {city, state};

  console.log(newAddress)
}

addressmaker('Amritsar', 'Punjab');



//also it can be done like this with using the assignment operator


function addressMaker(address) {
  const{city, state} = address;
  
  const newAddress = {
    city, state };
  
  console.log(`${newAddress.city}, ${newAddress.state}`)
}

addressmaker({city: 'Amritsar', state: 'Punjab'});
