import { useEffect, useState } from "react";

const useWindow = () => {
    const [height, setHeight] = useState('00');
   useEffect(()=>{
    const handlesize = ()=>{
        setHeight(window.innerHeight);
    }
    handlesize()
    window.addEventListener('resize', handlesize);
    return ()=> (window.removeEventListener('resize', useWindow)  )
   },[])

  return height;
}


export default useWindow;