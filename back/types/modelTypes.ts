import { MigrationLog } from "./dbtypes";

type Book = {
    title: string,
    userId: number,
    id: number,
    year: number
}
type Chord = {
    note: string;
    aspect: string;
    note_num: number;
    line: number;
    offset: number;
};
type Song = {
    id: number;
    title: string;
    userId: number;
    artist: string;
    text: string;
};
type User = {
    id: number;
    username: string;
    passwordDigest: string;
};

type Resource = User | Song | Book | Chord | MigrationLog;

export {
    Book,
    Chord,
    Song,
    User,
    Resource
}