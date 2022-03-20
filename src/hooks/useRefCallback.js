import {useState, useEffect} from 'react';

export default function useRefCallback(callback = () => {}) {
  const [ref, setRef] = useState(null)

  useEffect(
    () => {
      if(ref) callback(ref)
    },
    [callback, ref],
  )

  return [setRef]
}