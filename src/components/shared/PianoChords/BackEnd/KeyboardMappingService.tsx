
import { IKeyboardPianoMap } from './IKeyboardPianoMap';

export class KeyboardMappingService {
    private usableKeys: string[][] = [
        [
            'KeyZ',
            'KeyX',
            'KeyC',
            'KeyV',
            'KeyB',
            'KeyN',
            'KeyM',
            'Comma',
            'Period',
            'Slash',
        ], //Length 10
        [
            'KeyA',
            'KeyS',
            'KeyD',
            'KeyF',
            'KeyG',
            'KeyH',
            'KeyJ',
            'KeyK',
            'KeyL',
            'Semicolon',
            'KeyA',
            'Quote',
        ], //Length 11
        [
            'KeyQ',
            'KeyW',
            'KeyE',
            'KeyR',
            'KeyT',
            'KeyY',
            'KeyU',
            'KeyI',
            'KeyO',
            'KeyP',
            'BracketLeft',
            'BracketRight',
        ], //Length 12
        [
            'Digit1',
            'Digit2',
            'Digit3',
            'Digit4',
            'Digit5',
            'Digit6',
            'Digit7',
            'Digit8',
            'Digit9',
            'Digit0',
            'Minus',
            'Equal',
        ], ////Length 12
    ];
    startKeyX: number = 0; //max = 12(depend on usableKeys.row(startFromY).length)
    startKeyY: number = 0; //max = 4
    MapUp() {
        //validation
        if (this.startKeyY < 3) {
            this.startKeyY++;
        } else {
            alert('Cant Move The Keyboard MIDI Up');
        }
        return this.Piano;
    }
    MapDown() {
        //validation
        if (this.startKeyY > 0) {
            this.startKeyY--;
        } else {
            alert('Cant Move The Keyboard MIDI Down');
        }
        return this.Piano;
    }
    MapRight() {
        //validation
        if (this.startKeyX + 7 < 12) {
            this.startKeyX++;
        } else {
            alert('Cant Move The Keyboard MIDI Right');
        }
        return this.Piano;
    }
    MapLeft() {
        //validation
        //maybe just try and catch;
        if (this.startKeyX > 0) {
            this.startKeyX--;
        } else {
            alert('Cant Move The Keyboard MIDI Left');
        }
        return this.Piano;
    }
    get Piano(): IKeyboardPianoMap {
        return {
            C: this.usableKeys[this.startKeyY][this.startKeyX],
            Cd: this.usableKeys[this.startKeyY + 1][this.startKeyX + 1],
            D: this.usableKeys[this.startKeyY][this.startKeyX + 1],
            Dd: this.usableKeys[this.startKeyY + 1][this.startKeyX + 2],
            E: this.usableKeys[this.startKeyY][this.startKeyX + 2],
            F: this.usableKeys[this.startKeyY][this.startKeyX + 3],
            Fd: this.usableKeys[this.startKeyY + 1][this.startKeyX + 4],
            G: this.usableKeys[this.startKeyY][this.startKeyX + 4],
            Gd: this.usableKeys[this.startKeyY + 1][this.startKeyX + 5],
            A: this.usableKeys[this.startKeyY][this.startKeyX + 5],
            Ad: this.usableKeys[this.startKeyY + 1][this.startKeyX + 6],
            B: this.usableKeys[this.startKeyY][this.startKeyX + 6],
            C2: this.usableKeys[this.startKeyY][this.startKeyX + 7],
        };
    }
}
