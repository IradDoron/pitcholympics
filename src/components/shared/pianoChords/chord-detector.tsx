import { Chord } from 'tonal';
class ChordDetector{
    detect(dictionary:any,KeyNoteMapping:any) : string[]{
        const AllKeys = Object.keys(dictionary);
        var ActiveKeys = AllKeys.filter(key => dictionary[key]===true);
        const mappingKeys = Object.keys(KeyNoteMapping);
        var result = (mappingKeys as (keyof typeof String)[]).filter((KeyNoteMappingKey) => {
            return ActiveKeys.find(ActiveKey => ActiveKey == KeyNoteMapping[KeyNoteMappingKey])
        });
        var chords = Chord.detect(result);
        return chords;
    }
}
export default ChordDetector;