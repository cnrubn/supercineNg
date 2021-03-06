// Generated by https://quicktype.io

export interface TrendingInterface {
    map(arg0: ({ id, title, poster_path }: Result) => { id: number; title: string; poster_path: string; }): Result[];
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Result {
    adult?:             boolean;
    backdrop_path?:     string;
    genre_ids?:         number[];
    id:                number;
    media_type?:        MediaType;
    title:             string;
    original_language?: string;
    original_title?:    string;
    overview?:          string;
    popularity?:        number;
    poster_path?:       string;
    release_date?:      string;
    video?:             boolean;
    vote_average?:      number;
    vote_count?:        number;
    favCheck?:        boolean;
}

export enum MediaType {
    Movie = "movie",
}
