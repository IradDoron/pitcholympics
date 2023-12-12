'use client';

import React,{ useState } from 'react';
// import useSound from 'use-sound';
import * as Tone from 'tone'
import ISoundsMap from '@/models/ISoundMap';
import PianoSoundMap from '@/models/SoundsMap/piano-sound-map';
interface IKeyboardPianoMap{
    C:string;
    Cd:string;
    D:string;
    Dd:string;
    E:string;
    F:string;
    Fd:string;
    G:string;
    Gd:string;
    A:string;
    Ad:string;
    B:string;
    C2:string;
}
class keyboardMapper{
    private usableKeys:string[][] =[
        ["KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash"],//Length 10
        ["KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","KeyA","Quote"],//Length 11
        ["KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight"],//Length 12
        ["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal"],////Length 12
    ];
    startKeyX : number = 0;//max = 12(depend on usableKeys.row(startFromY).length)
    startKeyY : number = 0;//max = 4
    MapUp(){
        //validation
        this.startKeyY++;
        return this.Piano;
    }
    MapDown(){
        //validation
        this.startKeyY--;
        return this.Piano;
    }
    MapRight(){
        //validation
        this.startKeyX++;
        return this.Piano;
    }
    MapLeft(){
        //validation
        //maybe just try and catch;
        this.startKeyX--;
        return this.Piano;
    }
    get Piano(): IKeyboardPianoMap{
        return {
            C:this.usableKeys [this.startKeyY]    [this.startKeyX],
            Cd:this.usableKeys[this.startKeyY + 1][this.startKeyX + 1],
            D:this.usableKeys [this.startKeyY]    [this.startKeyX + 1],
            Dd:this.usableKeys[this.startKeyY + 1][this.startKeyX + 2],
            E:this.usableKeys [this.startKeyY]    [this.startKeyX + 2],
            F:this.usableKeys [this.startKeyY]    [this.startKeyX + 3],
            Fd:this.usableKeys[this.startKeyY + 1][this.startKeyX + 4],
            G:this.usableKeys [this.startKeyY]    [this.startKeyX + 4],
            Gd:this.usableKeys[this.startKeyY + 1][this.startKeyX + 5],
            A:this.usableKeys [this.startKeyY]    [this.startKeyX + 5],
            Ad:this.usableKeys[this.startKeyY + 1][this.startKeyX + 6],
            B:this.usableKeys [this.startKeyY]    [this.startKeyX + 6],
            C2:this.usableKeys[this.startKeyY]    [this.startKeyX + 7],
        };
    }
}
class SoundConfig {
    volume : number = 1;
    sound : ISoundsMap = new PianoSoundMap;
    private keyboard : keyboardMapper = new keyboardMapper;
    KeyBoard : IKeyboardPianoMap = this.keyboard.Piano;
    
    KeyboardUp(){
        this.KeyBoard = this.keyboard.MapUp();
    }
    KeyboardDown(){
        this.KeyBoard = this.keyboard.MapDown();
    }
    KeyboardLeft(){
        this.KeyBoard = this.keyboard.MapLeft();
    }
     KeyboardRight(){
        this.KeyBoard = this.keyboard.MapRight();
    }
}
const Comp = () => {
    const [dic,setDic] = useState(Object);
    const [config,setConfig] = useState(new SoundConfig);
    const changeKeyValue=(key : string,bool : Boolean)=>{
        var temp = dic;
        temp[key] = bool;
        setDic(temp);
    }
    // const sampler = new Tone.Sampler({
    //     urls:{
    //         C:""
    //     },
    //     onload: () => {
    //         sampler.triggerAttackRelease(["C"], 0.5);
    //     }
    // }).toDestination();
    const sampler = new Tone.Sampler({
        urls:{
            C1:"piano_C3.mp3",
        },
        baseUrl:"/sounds/piano/"
    }).toDestination();
    //const [playC]  = useSound(config.sound.C, {volume:config.volume});
    // const [playCd] = useSound(config.sound.Cd,{volume:config.volume});
    // const [playD]  = useSound(config.sound.D, {volume:config.volume});
    // const [playDd] = useSound(config.sound.Dd,{volume:config.volume});
    // const [playE]  = useSound(config.sound.E, {volume:config.volume});
    // const [playF]  = useSound(config.sound.F, {volume:config.volume});
    // const [playFd] = useSound(config.sound.Fd,{volume:config.volume});
    // const [playG]  = useSound(config.sound.G, {volume:config.volume});
    // const [playGd] = useSound(config.sound.Gd,{volume:config.volume});
    // const [playA]  = useSound(config.sound.A, {volume:config.volume});
    // const [playAd] = useSound(config.sound.Ad,{volume:config.volume});
    // const [playB]  = useSound(config.sound.B, {volume:config.volume});
    // const [playC2] = useSound(config.sound.C2,{volume:config.volume});


    const onClickZ=() => sampler.triggerAttackRelease(["C1"], 1);

    // const onClickZ=()=>playC();
    // const onClickS=()=>playCd();
    // const onClickX=()=>playD();
    // const onClickD=()=>playDd();
    // const onClickC=()=>playE();
    // const onClickV=()=>playF();
    // const onClickG=()=>playFd();
    // const onClickB=()=>playG();
    // const onClickH=()=>playGd();
    // const onClickN=()=>playA();
    // const onClickJ=()=>playAd();
    // const onClickM=()=>playB();
    // const onClickComma=()=>playC2();
    
    const playKey = (key:string) =>{
        console.log(config.KeyBoard.C);
        console.log(key);
        switch(key){
            case config.KeyBoard.C: document.getElementById('c')?.click(); break;
            // case config.KeyBoard.Cd: document.getElementById('cd')?.click(); break;
            // case config.KeyBoard.D: document.getElementById('d')?.click(); break;
            // case config.KeyBoard.Dd: document.getElementById('dd')?.click(); break;
            // case config.KeyBoard.E: document.getElementById('e')?.click(); break;
            // case config.KeyBoard.F: document.getElementById('f')?.click(); break;
            // case config.KeyBoard.Fd: document.getElementById('fd')?.click(); break;
            // case config.KeyBoard.G: document.getElementById('g')?.click(); break;
            // case config.KeyBoard.Gd: document.getElementById('gd')?.click(); break;
            // case config.KeyBoard.A: document.getElementById('a')?.click(); break;
            // case config.KeyBoard.Ad: document.getElementById('ad')?.click(); break;
            // case config.KeyBoard.B: document.getElementById('b')?.click(); break;
            // case config.KeyBoard.C2: document.getElementById('c2')?.click(); break;
        }
    }
    const onKeyDown = (event:KeyboardEvent) =>{
        if(event.repeat) return;
        if(!dic[event.code]){
            changeKeyValue(event.code, true);
            console.log("Key Down:" + event.key);
            console.log()
            // console.log(event);
            playKey(event.code);
        }
    }
    const onKeyUp = (event:KeyboardEvent) =>{
        if(event.repeat) return;
        if(dic[event.code]){
            changeKeyValue(event.code, false);
            console.log("Key Up:" + event.key);
        }
    }
    const changeKeyboardMap = (direction:number) =>{
        switch(direction){
            case 0: 
                config.KeyboardUp();
                break;
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
            <div>
                {/* <button id='y' className='m-5' onClick={()=>{changeKeyboardMap(0);}}>Up</button> */}
            </div>
            <div className='h-full flex justify-center items-center'>
            <button id='c' className='m-5' onClick={onClickZ}>Play C</button>
                {/* <button id='cd' className='m-5' onClick={onClickS}>Play C#</button>
                <button id='d' className='m-5' onClick={onClickX}>Play D</button>
                <button id='dd' className='m-5' onClick={onClickD}>Play D#</button>
                <button id='e' className='m-5' onClick={onClickC}>Play E</button>
                <button id='f' className='m-5' onClick={onClickV}>Play F</button>
                <button id='fd' className='m-5' onClick={onClickG}>Play F#</button>
                <button id='g' className='m-5' onClick={onClickB}>Play G</button>
                <button id='gd' className='m-5' onClick={onClickH}>Play G#</button>
                <button id='a' className='m-5' onClick={onClickN}>Play A</button>
                <button id='ad' className='m-5' onClick={onClickJ}>Play A#</button>
                <button id='b' className='m-5' onClick={onClickM}>Play B</button>
                <button id='c2' className='m-5' onClick={onClickComma}>Play High C</button> */}
            </div>

        </div>
    );
}
export default Comp;