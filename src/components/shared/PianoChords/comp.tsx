'use client';
import React, { useState } from 'react';
import * as Tone from 'tone';
import ChordDetector from './BackEnd/chord-detector';
import { SoundConfig } from './BackEnd/SoundConfig';

const Comp = () => {
    const cd = new ChordDetector();
    const [chord, setChord] = useState('');
    const [dic, setDic] = useState(Object);
    const [config, setConfig] = useState(new SoundConfig());
    const changeKeyValue = (key: string, bool: boolean) => {
        const temp = dic;
        temp[key] = bool;
        setDic(temp);
    };

    let sampler: Tone.Sampler = new Tone.Sampler({
        urls: {},
    }).toDestination();

    const onClickZ = () => sampler.triggerAttackRelease(['C1'], 1);
    const onClickS = () => sampler.triggerAttackRelease(['C#1'], 1);
    const onClickX = () => sampler.triggerAttackRelease(['D1'], 1);
    const onClickD = () => sampler.triggerAttackRelease(['D#1'], 1);
    const onClickC = () => sampler.triggerAttackRelease(['E1'], 1);
    const onClickV = () => sampler.triggerAttackRelease(['F1'], 1);
    const onClickG = () => sampler.triggerAttackRelease(['F#1'], 1);
    const onClickB = () => sampler.triggerAttackRelease(['G1'], 1);
    const onClickH = () => sampler.triggerAttackRelease(['G#1'], 1);
    const onClickN = () => sampler.triggerAttackRelease(['A1'], 1);
    const onClickJ = () => sampler.triggerAttackRelease(['A#1'], 1);
    const onClickM = () => sampler.triggerAttackRelease(['B1'], 1);
    const onClickComma = () => sampler.triggerAttackRelease(['C2'], 1);

    const playKey = (key: string) => {
        switch (key) {
            case config.KeyBoard.C:
                document.getElementById('c')?.click();
                break;
            case config.KeyBoard.Cd:
                document.getElementById('cd')?.click();
                break;
            case config.KeyBoard.D:
                document.getElementById('d')?.click();
                break;
            case config.KeyBoard.Dd:
                document.getElementById('dd')?.click();
                break;
            case config.KeyBoard.E:
                document.getElementById('e')?.click();
                break;
            case config.KeyBoard.F:
                document.getElementById('f')?.click();
                break;
            case config.KeyBoard.Fd:
                document.getElementById('fd')?.click();
                break;
            case config.KeyBoard.G:
                document.getElementById('g')?.click();
                break;
            case config.KeyBoard.Gd:
                document.getElementById('gd')?.click();
                break;
            case config.KeyBoard.A:
                document.getElementById('a')?.click();
                break;
            case config.KeyBoard.Ad:
                document.getElementById('ad')?.click();
                break;
            case config.KeyBoard.B:
                document.getElementById('b')?.click();
                break;
            case config.KeyBoard.C2:
                document.getElementById('c2')?.click();
                break;
        }
    };
    const onKeyDown = (event: KeyboardEvent) => {
        if (event.repeat) return;
        if (!dic[event.code]) {
            changeKeyValue(event.code, true);
            // console.log("Key Down:" + event.key);
            // console.log()
            // console.log(event);
            playKey(event.code);
            const chord = cd.detect(dic, config.KeyBoard);
            if (chord.length > 0) {
                let fullChordString: string = '';
                for (let i = 0; i < chord.length; i++) {
                    fullChordString += chord[i];
                    if (i != chord.length - 1) {
                        fullChordString += ' -- ';
                    }
                }
                setChord(fullChordString);
            }
        }
    };
    const onKeyUp = (event: KeyboardEvent) => {
        if (event.repeat) return;
        if (dic[event.code]) {
            changeKeyValue(event.code, false);
            // console.log("Key Up:" + event.key);

            const chord = cd.detect(dic, config.KeyBoard);
            if (chord.length == 0) {
                setChord('');
            }
        }
    };
    const changeKeyboardMap = (direction: number) => {
        switch (direction) {
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
    };
    React.useEffect(() => {
        addEventListener('keydown', onKeyDown, {
            once: false,
            passive: false,
            capture: false,
        });
        addEventListener('keyup', onKeyUp, true);

        sampler = new Tone.Sampler({
            urls: config.sound.urls,
            baseUrl: config.sound.baseUrl,
        }).toDestination();

        return () => {
            removeEventListener('keypress', onKeyDown);
            removeEventListener('keyup', onKeyUp);
        };
    });

    return (
        <div className='h-full flex-row justify-center items-center column'>
            <div>
                <button
                    className='m-5'
                    onClick={() => {
                        changeKeyboardMap(0);
                    }}>
                    Move Mapping Up
                </button>
                <button
                    className='m-5'
                    onClick={() => {
                        changeKeyboardMap(1);
                    }}>
                    Move Mapping Down
                </button>
                <button
                    className='m-5'
                    onClick={() => {
                        changeKeyboardMap(2);
                    }}>
                    Move Mapping Right
                </button>
                <button
                    className='m-5'
                    onClick={() => {
                        changeKeyboardMap(3);
                    }}>
                    Move Mapping Left
                </button>
            </div>
            <div className='h-half flex justify-center items-center'>
                <div className='flex-row justify-center items-center '>
                    <button
                        id='c'
                        className='bg-gray-400 h-40 w-10 m-1'
                        onClick={onClickZ}>
                        Play C
                    </button>
                    <button
                        id='cd'
                        className='bg-black h-40 w-10 m-1 text-white'
                        onClick={onClickS}>
                        Play C#
                    </button>
                    <button
                        id='d'
                        className='bg-gray-400 h-40 w-10 m-1'
                        onClick={onClickX}>
                        Play D
                    </button>
                    <button
                        id='dd'
                        className='bg-black h-40 w-10 m-1 text-white'
                        onClick={onClickD}>
                        Play D#
                    </button>
                    <button
                        id='e'
                        className='bg-gray-400 h-40 w-10 m-1'
                        onClick={onClickC}>
                        Play E
                    </button>
                    <button
                        id='f'
                        className='bg-gray-400 h-40 w-10 m-1'
                        onClick={onClickV}>
                        Play F
                    </button>
                    <button
                        id='fd'
                        className='bg-black h-40 w-10 m-1 text-white'
                        onClick={onClickG}>
                        Play F#
                    </button>
                    <button
                        id='g'
                        className='bg-gray-400 h-40 w-10 m-1'
                        onClick={onClickB}>
                        Play G
                    </button>
                    <button
                        id='gd'
                        className='bg-black h-40 w-10 m-1 text-white'
                        onClick={onClickH}>
                        Play G#
                    </button>
                    <button
                        id='a'
                        className='bg-gray-400 h-40 w-10 m-1'
                        onClick={onClickN}>
                        Play A
                    </button>
                    <button
                        id='ad'
                        className='bg-black h-40 w-10 m-1 text-white'
                        onClick={onClickJ}>
                        Play A#
                    </button>
                    <button
                        id='b'
                        className='bg-gray-400 h-40 w-10 m-1'
                        onClick={onClickM}>
                        Play B
                    </button>
                    <button
                        id='c2'
                        className='bg-gray-400 h-40 w-10 m-1'
                        onClick={onClickComma}>
                        Play C2
                    </button>
                </div>
            </div>
            <div className='h-100 flex justify-center items-center'>
                <span className='text-xl m-8'>{chord}</span>
            </div>
        </div>
    );
};
export default Comp;
