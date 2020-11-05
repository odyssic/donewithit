import React, { useEffect, useState } from 'react';
import { Image } from "react-native";

import * as ImagePicker from 'expo-image-picker';

import Button from './app/components/Button';
import Screen from './app/components/Screen';
import ImageInput from './app/components/ImageInput';

import * as Permissions from 'expo-permissions';
import { askAsync } from 'expo-permissions';
import ImageInputList from './app/components/ImageInputList';

export default function App() {

    const [imageUris, setImageUris] = useState([]);

    const handleAdd = uri => {
        setImageUris([...imageUris, uri]);
    }

    const handleRemove = uri => {
        setImageUris(imageUris.filter(imageUri => imageUri !== uri))

    }

return <Screen>
    <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}

    />
    </Screen>

}