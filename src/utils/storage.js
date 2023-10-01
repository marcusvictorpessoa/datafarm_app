import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export async function storeString(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    Alert.alert('Datafarm', 'Falha ao armazenar dados', [
      {
        text: 'entendido',
      },
    ]);
  }
}

export async function getString(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    Alert.alert('Datafarm', 'Falha ao ler dados do armazenamento', [
      {
        text: 'entendido',
      },
    ]);
  }
}

export async function clearString(key) {
  try {
    const value = await AsyncStorage.removeItem(key);
    return value;
  } catch (e) {
    Alert.alert('Datafarm', 'Falha ao limpar dados do armazenamento', [
      {
        text: 'entendido',
      },
    ]);
  }
}
