import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
const PET_DATA = {
  name: 'Gizmo',
  age: '5',
  image: require('./src/img/bird.jpg'),
};
const OWNER_DATA = {
  name: 'Daniyah Bai',
  contact: '97502219',
  membership: 'gold',
};

const Lesson05quiz = () => {
  let petArr = [];
  let ownerArr = [];
  let pet = PET_DATA;
  petArr.push(<Text>Name:</Text>);
  petArr.push(<Text key={pet.name}>-----{pet.name}</Text>);
  petArr.push(<Text>Age:</Text>);
  petArr.push(<Text key={pet.age}>-----{pet.age}</Text>);
  petArr.push(<Image source={pet.image} />);
  console.log(petArr);
  let owner = OWNER_DATA;
  ownerArr.push(<Text>Owner information</Text>);
  ownerArr.push(<Text>--------------</Text>);
  ownerArr.push(<Text>Name:</Text>);
  ownerArr.push(<Text key={owner.name}>-----{owner.name}</Text>);
  ownerArr.push(<Text>Contact:</Text>);
  ownerArr.push(<Text key={owner.contact}>-----{owner.contact}</Text>);
  ownerArr.push(<Text>Membership:</Text>);
  ownerArr.push(<Text key={owner.membership}>-----{owner.membership}</Text>);
  console.log(ownerArr);

  return (
    <ScrollView>
      <View>{petArr}</View>
      <View>{ownerArr}</View>
    </ScrollView>
  );
};
export default Lesson05quiz;
