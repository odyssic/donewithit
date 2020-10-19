import React, { useEffect, useState } from 'react';
import { Image } from "react-native";
import ImageInput from "./app/components/ImageInput";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import * as ImagePicker from 'expo-image-picker';

import AppScreen from './app/components/AppScreen';
import Button from './app/components/Button';

import * as Permissions from 'expo-permissions';
import { askAsync } from 'expo-permissions';

export default function App() {
   
  return <ImageInput
      imageUri={imageUri}
      onChangeImage={uri => setImageUri(uri)}/>
  
  
  

}
