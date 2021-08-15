import React from 'react';
import { View  } from 'react-native';
import Card from './app/components/Card/Card'

export default function App() {
  
  return <View style={{
   backgroundColor:'#f8f4f4',
   flex: 1,
   padding: 20,
   paddingTop: 100
  }}>
    <Card
    title="Red jacket for sale"
    subtitle="$100"
    image={require('./app/assets/jacket.jpg')} />
  </View>
   
 }

 

