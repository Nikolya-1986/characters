export interface CharactersDTO {
    results: CharacterDTO[],
    info: {
        next: string
    }
};

export interface CharacterDTO {
    id: number,
    name: string,
    status: Status,
    species: string,
    gender: Gender,
    image: string,
};

export enum Status {
    All = 'All',
    Dead = 'Dead',
    Alive = 'Alive',
    Unknown = 'Unknown',
};

export enum Gender {
    All = 'All',
    Male = 'Male',
    Female = 'Female',
    unknown = "unknown"
};