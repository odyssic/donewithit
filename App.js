import React, { useEffect, useState } from 'react';
import { Image } from "react-native";

import * as ImagePicker from 'expo-image-picker';

import Button from './app/components/Button';
import Screen from './app/components/Screen';
import ImageInput from './app/components/ImageInput';

import * as Permissions from 'expo-permissions';
import { askAsync } from 'expo-permissions';
import ImageInputList from './app/components/ImageInputList';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {

return <ListingEditScreen/>

}