'use client';
import { IToneSampler } from '@types';
import { IKeyboardPianoMap } from './IKeyboardPianoMap';
import { KeyboardMappingService } from './KeyboardMappingService';
import { PianoSoundMap } from './PianoSoundMap';



export class SoundConfig {
    volume: number = 1;
    sound: IToneSampler = new PianoSoundMap();
    private keyboard: KeyboardMappingService = new KeyboardMappingService();
    KeyBoard: IKeyboardPianoMap = this.keyboard.Piano;
    KeyboardUp() {
        this.KeyBoard = this.keyboard.MapUp();
    }
    KeyboardDown() {
        this.KeyBoard = this.keyboard.MapDown();
    }
    KeyboardLeft() {
        this.KeyBoard = this.keyboard.MapLeft();
    }
    KeyboardRight() {
        this.KeyBoard = this.keyboard.MapRight();
    }
}
