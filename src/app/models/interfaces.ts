export interface MovieResults {
    count:    number;
    next:     null;
    previous: null;
    results:  Movie[];
}

export interface PeopleResults {
    count:    number;
    next:     null;
    previous: null;
    results:  People[];
}

export interface Movie {
    title:         string;
    episode_id:    number;
    opening_crawl: string;
    director:      string;
    producer:      string;
    release_date:  string;
    characters:    string[];
    planets:       string[];
    starships:     string[];
    vehicles:      string[];
    species:       string[];
    created:       string;
    edited:        string;
    url:           string;
}

export interface People {
    name:       string;
    height:     string;
    mass:       string;
    hair_color: string;
    skin_color: string;
    eye_color:  string;
    birth_year: string;
    gender:     string;
    homeworld:  string;
    films:      string[];
    species:    any[];
    vehicles:   any[];
    starships:  string[];
    created:    Date;
    edited:     Date;
    url:        string;
}