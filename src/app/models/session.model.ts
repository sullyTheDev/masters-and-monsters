import { Character } from './character.model';
import { User } from './user.model';

export interface Session {
    sessionId: string;
    sessionCode: string;
    name: string;
    creator: string;
    users: {[key:string] :{characterId: string, userId: string}};
}