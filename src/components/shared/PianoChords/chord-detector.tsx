import { Chord } from 'tonal';

class ChordDetector {
    detect(dictionary: any, KeyNoteMapping: any): string[] {
        const AllKeys = Object.keys(dictionary);
        const ActiveKeys = AllKeys.filter(key => dictionary[key] === true);
        const mappingKeys = Object.keys(KeyNoteMapping);
        const result = (mappingKeys as (keyof typeof String)[]).filter(
            KeyNoteMappingKey => {
                return ActiveKeys.find(
                    ActiveKey => ActiveKey == KeyNoteMapping[KeyNoteMappingKey],
                );
            },
        );
        const chords = Chord.detect(result);
        return chords;
    }
}
export default ChordDetector;
