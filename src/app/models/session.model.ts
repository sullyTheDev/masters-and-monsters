import { User } from 'firebase';
import { Character } from './character.model';

export interface Session {
    sessionId: string;
    users: User[];
    characters: Character[]
}