import {useState, useEffect, useRef} from 'react';
import NetInfo from '@react-native-community/netinfo';

export default function useConnection() {
  const connRef = useRef({});

  useEffect(() => {
    NetInfo.fetch().then(state => {
      connRef.current = state;
    });

    const unsubscribe = NetInfo.addEventListener(state => {
      connRef.current = state;
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {connRef};
}
