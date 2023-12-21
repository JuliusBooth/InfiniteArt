import { useEffect, useState } from 'react';

const PREFIX = 'infiniteartgif-';

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  // key should expire after a day
  const expiry = 24 * 60 * 60 * 1000;

  const [value, _setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) {
      const parsedJson = JSON.parse(jsonValue);
      if (parsedJson.timestamp + expiry > Date.now()) {
        return parsedJson.value;
      }
    }
    if (typeof initialValue === 'function') {
      return initialValue();
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(
      prefixedKey,
      JSON.stringify({ value, timestamp: Date.now() }),
    );
  }, [prefixedKey, value]);

  const setValue = (val) => {
    localStorage.setItem(
      prefixedKey,
      JSON.stringify({ value: val, timestamp: Date.now() }),
    );
    _setValue(val);
  };

  return [value, setValue];
}
