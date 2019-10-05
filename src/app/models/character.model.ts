import { CharacterAttribute } from './character-attribute.model';

export interface Character {
    characterId: string
    name: string;
    race: string;
    attributes: {[key: string]: number}
}