export interface Card {
    name: string;
    type: number;
    image: string;
}

export interface DeckProbabilityContext {
    cardGroupId?: number;
    cardAmount?: number;
    deckCardCount?: number;
    subPopSize?: number;
    sampleSize?: number;
    xValue?: number;
    result?: number[];
}

export interface CardsResponse {
    cards: Card[];
}

export interface CardRequest {
    identifiers: CardName[];
}

export interface CardName {
    name: string;
}

export interface CardItem {
    object: string;
    not_found: any[];
    data: CardObject[];
}

export interface CardObject {
    object: string;
    id: string;
    oracle_id: string;
    multiverse_ids: number[];
    mtgo_id: number;
    mtgo_foil_id: number;
    tcgplayer_id: number;
    name: string;
    lang: string;
    released_at: string;
    uri: string;
    scryfall_uri: string;
    layout: string;
    highres_image: boolean;
    image_uris: ImageUri;
    mana_cost: string;
    cmc: number;
    type_line: string;
    oracle_text: string;
    power: string;
    toughness: string;
    colors: any[];
    color_identity: any[];
    legalities: Legalities;
    games: string[];
    reserved: boolean;
    foil: boolean;
    nonfoil: boolean;
    oversized: boolean;
    promo: boolean;
    reprint: boolean;
    set: string;
    set_name: string;
    set_uri: string;
    set_search_uri: string;
    scryfall_set_uri: string;
    rulings_uri: string;
    prints_search_uri: string;
    collector_number: string;
    digital: boolean;
    rarity: string;
    flavor_text: string;
    illustration_id: string;
    artist: string;
    border_color: string;
    frame: string;
    frame_effect: string;
    full_art: boolean;
    story_spotlight: boolean;
    edhrec_rank: number;
    usd: string;
    eur: string;
    tix: string;
    percentageToDraw?: number;
}

export interface ImageUri {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
}

export interface Legalities {
    standard: string;
    future: string;
    frontier: string;
    modern: string;
    legacy: string;
    pauper: string;
    vintage: string;
    penny: string;
    commander: string;
    c1vc1: string;
    duel: string;
    brawl: string;
}
