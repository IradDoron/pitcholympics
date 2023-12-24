'use client';
import React,{ useState, useEffect } from 'react';
import * as Tone from 'tone'
import IToneSampler from '@/models/IToneSampler';
import PianoSoundMap from '@/models/SoundsMap/piano-sound-map';
import ChordDetector from './chord-detector';
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
        if(this.startKeyY<3){
            this.startKeyY++;
        }
        else{
            alert("Cant Move The Keyboard MIDI Up");
        }
        return this.Piano;
        
    }
    MapDown(){
        //validation
        if(this.startKeyY>0){
            this.startKeyY--;
        }
        else{
            alert("Cant Move The Keyboard MIDI Down");
        }
        return this.Piano;
    }
    MapRight(){
        //validation
        if(this.startKeyX+7<12){
            this.startKeyX++;
        }
        else{
            alert("Cant Move The Keyboard MIDI Right");
        }
        return this.Piano;
    }
    MapLeft(){
        //validation
        //maybe just try and catch;
        if(this.startKeyX>0){

            this.startKeyX--;
        }
        else{
            alert("Cant Move The Keyboard MIDI Left");
        }
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
    sound : IToneSampler = new PianoSoundMap;
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
    var cd = new ChordDetector();
    const [chord,setChord] = useState("");
    const [dic,setDic] = useState(Object);
    const [config,setConfig] = useState(new SoundConfig);
    const changeKeyValue = (key : string,bool : Boolean) => {
        var temp = dic;
        temp[key] = bool;
        setDic(temp);
    }
    
    var sampler:Tone.Sampler;

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
            // console.log("Key Down:" + event.key);
            // console.log()
            // console.log(event);
            playKey(event.code);
            var chord = cd.detect(dic,config.KeyBoard);
            if(chord.length > 0){
                var fullChordString : string ="";
                for(var i=0;i<chord.length;i++){
                    fullChordString += chord[i];
                    if(i != chord.length -1){
                        fullChordString += " -- "
                    }
                }
                setChord(fullChordString);
            }
        }
    }
    const onKeyUp = (event:KeyboardEvent) =>{
        if(event.repeat) return;
        if(dic[event.code]){
            changeKeyValue(event.code, false);
            // console.log("Key Up:" + event.key);
            
            var chord = cd.detect(dic,config.KeyBoard);
            if(chord.length == 0){
                setChord("");
            }
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

        sampler = new Tone.Sampler({
            urls: config.sound.urls,
            baseUrl: config.sound.baseUrl,
        }).toDestination();

        return () => {
            removeEventListener('keypress', onKeyDown);
            removeEventListener('keyup', onKeyUp);
        };
    });
   
    return(
        <div className='h-full flex-row justify-center items-center column'>   
            <div>
                <button className='m-5' onClick={()=>{changeKeyboardMap(0);}}>Move Mapping Up</button>
                <button className='m-5' onClick={()=>{changeKeyboardMap(1);}}>Move Mapping Down</button>
                <button className='m-5' onClick={()=>{changeKeyboardMap(2);}}>Move Mapping Right</button>
                <button className='m-5' onClick={()=>{changeKeyboardMap(3);}}>Move Mapping Left</button>
            </div>
            <div className='h-half flex justify-center items-center'>
                <div className='flex-row justify-center items-center '>
                    <button id='c' className='bg-gray-400 h-40 w-10 m-1' onClick={onClickZ}>Play C</button>
                    <button id='cd' className='bg-black h-40 w-10 m-1 text-white' onClick={onClickS}>Play C#</button>
                    <button id='d' className='bg-gray-400 h-40 w-10 m-1' onClick={onClickX}>Play D</button>
                    <button id='dd' className='bg-black h-40 w-10 m-1 text-white' onClick={onClickD}>Play D#</button>
                    <button id='e' className='bg-gray-400 h-40 w-10 m-1' onClick={onClickC}>Play E</button>
                    <button id='f' className='bg-gray-400 h-40 w-10 m-1' onClick={onClickV}>Play F</button>
                    <button id='fd' className='bg-black h-40 w-10 m-1 text-white' onClick={onClickG}>Play F#</button>
                    <button id='g' className='bg-gray-400 h-40 w-10 m-1' onClick={onClickB}>Play G</button>
                    <button id='gd' className='bg-black h-40 w-10 m-1 text-white' onClick={onClickH}>Play G#</button>
                    <button id='a' className='bg-gray-400 h-40 w-10 m-1' onClick={onClickN}>Play A</button>
                    <button id='ad' className='bg-black h-40 w-10 m-1 text-white' onClick={onClickJ}>Play A#</button>
                    <button id='b' className='bg-gray-400 h-40 w-10 m-1' onClick={onClickM}>Play B</button>
                    <button id='c2' className='bg-gray-400 h-40 w-10 m-1' onClick={onClickComma}>Play C2</button>
                </div>
            </div>
            <div className='h-100 flex justify-center items-center'>
                <span className='text-xl m-8'>{chord}</span>
            </div>
        </div>
    );
}
export default Comp;