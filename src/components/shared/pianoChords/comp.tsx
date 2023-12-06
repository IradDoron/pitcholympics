'use client';
import React,{ useRef, useState } from 'react';
import useSound from 'use-sound';
import ISoundsMap from '@/models/ISoundMap';
import PianoSoundMap from '@/models/SoundsMap/piano-sound-map';

class SoundConfig {
    volume : number = 1;
    sound : ISoundsMap = new PianoSoundMap;
}
const Comp = () => {
    const [dic,setDic] = useState(Object);
    const [config,setConfig] = useState(new SoundConfig);
    
    const changeKeyValue=(key : string,bool : Boolean)=>{
        var temp = dic;
        temp[key] = bool;
        setDic(temp);
    }
    const [playC] = useSound(config.sound.C,{volume:1});
    const [playCd] = useSound(config.sound.Cd,{volume:1});
    const [playD] = useSound(config.sound.D,{volume:1});
    const [playDd] = useSound(config.sound.Dd,{volume:1});
    const [playE] = useSound(config.sound.E,{volume:1});
    const [playF] = useSound(config.sound.F,{volume:1});
    const [playFd] = useSound(config.sound.Fd,{volume:1});
    const [playG] = useSound(config.sound.G,{volume:1});
    const [playGd] = useSound(config.sound.Gd,{volume:1});
    const [playA] = useSound(config.sound.A,{volume:1});
    const [playAd] = useSound(config.sound.Ad,{volume:1});
    const [playB] = useSound(config.sound.B,{volume:1});
    const [playC2] = useSound(config.sound.C2,{volume:1});

    const onClickZ=()=>playC();
    const onClickS=()=>playCd();
    const onClickX=()=>playD();
    const onClickD=()=>playDd();
    const onClickC=()=>playE();
    const onClickV=()=>playF();
    const onClickG=()=>playFd();
    const onClickB=()=>playG();
    const onClickH=()=>playGd();
    const onClickN=()=>playA();
    const onClickJ=()=>playAd();
    const onClickM=()=>playB();
    const onClickComma=()=>playC2();
    
    const playKey = (key:string) =>{
        switch(key){
            case 'z': document.getElementById('z')?.click(); break;
            case 's': document.getElementById('s')?.click(); break;
            case 'x': document.getElementById('x')?.click(); break;
            case 'd': document.getElementById('d')?.click(); break;
            case 'c': document.getElementById('c')?.click(); break;
            case 'v': document.getElementById('v')?.click(); break;
            case 'g': document.getElementById('g')?.click(); break;
            case 'b': document.getElementById('b')?.click(); break;
            case 'h': document.getElementById('h')?.click(); break;
            case 'n': document.getElementById('n')?.click(); break;
            case 'j': document.getElementById('j')?.click(); break;
            case 'm': document.getElementById('m')?.click(); break;
            case ',': document.getElementById(',')?.click(); break;
        }
    }
    const onKeyDown = (event:KeyboardEvent) =>{
        if(event.repeat) return;
        if(!dic[event.key]){
            changeKeyValue(event.key, true);
            console.log("Key Down:" + event.key);
            // playKey(event.key);
        }
    }
    const onKeyUp = (event:KeyboardEvent) =>{
        if(event.repeat) return;
        if(dic[event.key]){
            changeKeyValue(event.key, false);
            console.log("Key Up:" + event.key);
        }
    }
    React.useEffect(() => {
        addEventListener('keydown', onKeyDown,{once:false,passive:false,capture:false,});
        addEventListener('keyup', onKeyUp,true);
        return () => {
            removeEventListener('keypress', onKeyDown);
            removeEventListener('keyup', onKeyUp);
        };
    });
   
    return(
        <div className='h-full flex justify-center items-center'>
            <button id='z' className='m-5' onClick={onClickZ}>Play C</button>
            <button id='s' className='m-5' onClick={onClickS}>Play C#</button>
            <button id='x' className='m-5' onClick={onClickX}>Play D</button>
            <button id='d' className='m-5' onClick={onClickD}>Play D#</button>
            <button id='c' className='m-5' onClick={onClickC}>Play E</button>
            <button id='v' className='m-5' onClick={onClickV}>Play F</button>
            <button id='g' className='m-5' onClick={onClickG}>Play F#</button>
            <button id='b' className='m-5' onClick={onClickB}>Play G</button>
            <button id='h' className='m-5' onClick={onClickH}>Play G#</button>
            <button id='n' className='m-5' onClick={onClickN}>Play A</button>
            <button id='j' className='m-5' onClick={onClickJ}>Play A#</button>
            <button id='m' className='m-5' onClick={onClickM}>Play B</button>
            <button id=',' className='m-5' onClick={onClickComma}>Play High C</button>
        </div>
    );
}
export default Comp;