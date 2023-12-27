import IToneSampler from '../IToneSampler';
class PianoSoundMap implements IToneSampler {
    urls  = {
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
    };
    baseUrl  = "/sounds/piano/";
}

export default PianoSoundMap;