'use client';

import React,{ useState } from 'react';
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

    const sampler = new Tone.Sampler({
        urls:{
            "C1" :"piano_C3.mp3",
            "C#1":"piano_Cc3.mp3",
            "D1" :"piano_D3.mp3",
            "D#1":"piano_Dc3.mp3",
            "E1" :"piano_E3.mp3",
            "F1" :"piano_F3.mp3",
            "F#1":"piano_Fc3.mp3",
            "G1" :"piano_G3.mp3",
            "G#1":"piano_Gc3.mp3",
            "A1" :"piano_A3.mp3",
            "A#1":"piano_Ac3.mp3",
            "B1"  :"piano_B3.mp3",
            "C2" :"piano_C4.mp3",
        },
        release:1,
        baseUrl:"/sounds/piano/"
    }).toDestination();


    const onClickZ=() => sampler.triggerAttackRelease(["C1"], 1);
    const onClickS=() => sampler.triggerAttackRelease(["C#1"], 1);
    const onClickX=() => sampler.triggerAttackRelease(["D1"], 1);
    const onClickD=() => sampler.triggerAttackRelease(["D#1"], 1);
    const onClickC=() => sampler.triggerAttackRelease(["E1"], 1);
    const onClickV=() => sampler.triggerAttackRelease(["F1"], 1);
    const onClickG=() => sampler.triggerAttackRelease(["F#1"], 1);
    const onClickB=() => sampler.triggerAttackRelease(["G1"], 1);
    const onClickH=() => sampler.triggerAttackRelease(["G#1"], 1);
    const onClickN=() => sampler.triggerAttackRelease(["A1"], 1);
    const onClickJ=() => sampler.triggerAttackRelease(["A#1"], 1);
    const onClickM=() => sampler.triggerAttackRelease(["B1"], 1);
    const onClickComma=() => sampler.triggerAttackRelease(["C2"], 1);
    
    const playKey = (key:string) =>{
        console.log(config.KeyBoard.C);
        console.log(key);
        switch(key){
            case config.KeyBoard.C: document.getElementById('c')?.click(); break;
            case config.KeyBoard.Cd: document.getElementById('cd')?.click(); break;
            case config.KeyBoard.D: document.getElementById('d')?.click(); break;
            case config.KeyBoard.Dd: document.getElementById('dd')?.click(); break;
            case config.KeyBoard.E: document.getElementById('e')?.click(); break;
            case config.KeyBoard.F: document.getElementById('f')?.click(); break;
            case config.KeyBoard.Fd: document.getElementById('fd')?.click(); break;
            case config.KeyBoard.G: document.getElementById('g')?.click(); break;
            case config.KeyBoard.Gd: document.getElementById('gd')?.click(); break;
            case config.KeyBoard.A: document.getElementById('a')?.click(); break;
            case config.KeyBoard.Ad: document.getElementById('ad')?.click(); break;
            case config.KeyBoard.B: document.getElementById('b')?.click(); break;
            case config.KeyBoard.C2: document.getElementById('c2')?.click(); break;
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
            case 1: 
                config.KeyboardDown();
            break;
            case 2: 
                config.KeyboardRight();
            break;
            case 3: 
                config.KeyboardLeft();
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
        <div className='h-full flex-row justify-center items-center column'>   
            <div>
                <button id='y' className='m-5' onClick={()=>{changeKeyboardMap(0);}}>Up</button>
            </div>
            <div className='h-half flex justify-center items-center'>
                
                <button id='cd' className='m-5' onClick={onClickS}>Play C#</button>
                
                <button id='dd' className='m-5' onClick={onClickD}>Play D#</button>
                
                <button id='fd' className='m-5' onClick={onClickG}>Play F#</button>
                
                <button id='gd' className='m-5' onClick={onClickH}>Play G#</button>
                
                <button id='ad' className='m-5' onClick={onClickJ}>Play A#</button>
                
            </div>
            <div className='h-40 w-150 block relative'>
                <div className='flex-row absolute '>
                    <button id='c' className='bg-gray-400 h-40 w-10 m-1' onClick={onClickZ}>Play C</button>
                    <button id='d' className='bg-gray-400 h-40 w-10 m-1' onClick={onClickX}>Play D</button>
                    <button id='e' className='bg-gray-400 h-40 w-10 m-1' onClick={onClickC}>Play E</button>
                    <button id='f' className='bg-gray-400 h-40 w-10 m-1' onClick={onClickV}>Play F</button>
                    <button id='g' className='bg-gray-400 h-40 w-10 m-1' onClick={onClickB}>Play G</button>
                    <button id='a' className='bg-gray-400 h-40 w-10 m-1' onClick={onClickN}>Play A</button>
                    <button id='b' className='bg-gray-400 h-40 w-10 m-1' onClick={onClickM}>Play B</button>
                    <button id='c2' className='bg-gray-400 h-40 w-10 m-1' onClick={onClickComma}>Play C2</button>
                </div>
                <div className=''>
                    <button id='cd' className='bg-black text-white h-25 w-10 m-1' onClick={onClickS}>Play C#</button>

                </div>
            </div>
        </div>
    );
}
export default Comp;