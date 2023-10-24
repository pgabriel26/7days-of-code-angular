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

export interface StarshipResults {
    count:    number;
    next:     string;
    previous: null;
    results:  Starship[];
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
    created:    string;
    edited:     string;
    url:        string;
}

export interface Starship  {
    name:                   string;
    model:                  string;
    manufacturer:           string;
    cost_in_credits:        string;
    length:                 string;
    max_atmosphering_speed: string;
    crew:                   string;
    passengers:             string;
    cargo_capacity:         string;
    consumables:            string;
    hyperdrive_rating:      string;
    MGLT:                   string;
    starship_class:         string;
    pilots:                 string[];
    films:                  string[];
    created:                string;
    edited:                 string;
    url:                    string;
}
