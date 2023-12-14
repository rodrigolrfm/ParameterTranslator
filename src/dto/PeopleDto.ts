class PeopleDto {

    private _id: string;
    private _birth_year: string;
    private _eye_color: string;
    private _director: string[];
    private _gender: string;
    private _hair_color: string;
    private _height: string;
    private _homeworld: string;
    private _mass: string;
    private _name: string;
    private _skin_color: string;
    private _created: string;
    private _edited: string;
    private _species: string[];
    private _starships: string[];
    private _url: string;
    private _vehicles:string[];



    constructor(
        id: string,
        birth_year: string,
        eye_color: string,
        director: string[],
        gender: string,
        hair_color: string,
        height: string,
        homeworld: string,
        mass: string,
        name: string,
        skin_color: string,
        created: string,
        edited: string,
        species: string[],
        starships: string[],
        url: string,
        vehicles: string[]
    ) {
        this._id = id;
        this._birth_year = birth_year;
        this._eye_color = eye_color;
        this._director = director;
        this._gender = gender;
        this._hair_color = hair_color;
        this._height = height;
        this._homeworld = homeworld;
        this._mass = mass;
        this._name = name;
        this._skin_color = skin_color;
        this._created = created;
        this._edited = edited;
        this._species = species;
        this._starships = starships;
        this._url = url;
        this._vehicles = vehicles;
    }



    get id(): string {
        console.log('this_id_log:',this._id);
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get birth_year(): string {
        return this._birth_year;
    }

    set birth_year(value: string) {
        this._birth_year = value;
    }

    get eye_color(): string {
        return this._eye_color;
    }

    set eye_color(value: string) {
        this._eye_color = value;
    }

    get director(): string[] {
        return this._director;
    }

    set director(value: string[]) {
        this._director = value;
    }

    get gender(): string {
        return this._gender;
    }

    set gender(value: string) {
        this._gender = value;
    }

    get hair_color(): string {
        return this._hair_color;
    }

    set hair_color(value: string) {
        this._hair_color = value;
    }

    get height(): string {
        return this._height;
    }

    set height(value: string) {
        this._height = value;
    }

    get homeworld(): string {
        return this._homeworld;
    }

    set homeworld(value: string) {
        this._homeworld = value;
    }

    get mass(): string {
        return this._mass;
    }

    set mass(value: string) {
        this._mass = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get skin_color(): string {
        return this._skin_color;
    }

    set skin_color(value: string) {
        this._skin_color = value;
    }

    get created(): string {
        return this._created;
    }

    set created(value: string) {
        this._created = value;
    }

    get edited(): string {
        return this._edited;
    }

    set edited(value: string) {
        this._edited = value;
    }

    get species(): string[] {
        return this._species;
    }

    set species(value: string[]) {
        this._species = value;
    }

    get starships(): string[] {
        return this._starships;
    }

    set starships(value: string[]) {
        this._starships = value;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    get vehicles(): string[] {
        return this._vehicles;
    }

    set vehicles(value: string[]) {
        this._vehicles = value;
    }



  }
  
  export default PeopleDto