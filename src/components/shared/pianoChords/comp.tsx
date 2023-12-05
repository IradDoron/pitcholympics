'use client';
import React,{ useRef, useState } from 'react';
import useSound from 'use-sound';

const Comp = () => {
    const [dic,setDic] = useState(Object);
    const changeKeyValue=(key : string,bool : Boolean)=>{
        var temp = dic;
        temp[key] = bool;
        setDic(temp);
    }
    const [playC] = useSound('/sounds/hang-drum/C04.wav',{volume:1});
    const [playD] = useSound('/sounds/hang-drum/D04.wav',{volume:1});
    const [playE] = useSound('/sounds/hang-drum/E04.wav',{volume:1});
    const [playF] = useSound('/sounds/hang-drum/F04.wav',{volume:1});
    const [playG] = useSound('/sounds/hang-drum/G04.wav',{volume:1});
    const [playA] = useSound('/sounds/hang-drum/A04.wav',{volume:1});
    const [playB] = useSound('/sounds/hang-drum/B04.wav',{volume:1});
    const [playC2] = useSound('/sounds/hang-drum/C05.wav',{volume:1});

    const onClickZ=()=>playC();
    const onClickX=()=>playD();
    const onClickC=()=>playE();
    const onClickV=()=>playF();
    const onClickB=()=>playG();
    const onClickN=()=>playA();
    const onClickM=()=>playB();
    const onClickComma=()=>playC2();
    
    const playKey = (key:string) =>{
        switch(key){
            case 'z': document.getElementById('z')?.click(); break;
            case 'x': document.getElementById('x')?.click(); break;
            case 'c': document.getElementById('c')?.click(); break;
            case 'v': document.getElementById('v')?.click(); break;
            case 'b': document.getElementById('b')?.click(); break;
            case 'n': document.getElementById('n')?.click(); break;
            case 'm': document.getElementById('m')?.click(); break;
            case ',': document.getElementById(',')?.click(); break;
        }
    }
    React.useEffect(() => {
        addEventListener('keydown', (event) => {
            if(event.repeat) return;
            if(!dic[event.key]){
                changeKeyValue(event.key, true);
                playKey(event.key);
                
            }
        });
        addEventListener('keyup', (event) => {
            if(event.repeat) return;
            if(dic[event.key]){
                changeKeyValue(event.key, false);
            }
        });
    });
   
    return(
        <div className='h-full flex justify-center items-center'>
            <button id='z' className='m-5' onClick={onClickZ}>Play C</button>
            <button id='x' className='m-5' onClick={onClickX}>Play D</button>
            <button id='c' className='m-5' onClick={onClickC}>Play E</button>
            <button id='v' className='m-5' onClick={onClickV}>Play F</button>
            <button id='b' className='m-5' onClick={onClickB}>Play G</button>
            <button id='n' className='m-5' onClick={onClickN}>Play A</button>
            <button id='m' className='m-5' onClick={onClickM}>Play B</button>
            <button id=',' className='m-5' onClick={onClickComma}>Play C2</button>
        </div>
    );
}
export default Comp;