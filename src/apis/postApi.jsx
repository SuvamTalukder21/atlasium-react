// // Example data fetched from an API
// const data = [
// {
//     "_id": 102,
//     "name": {
//         "common": "India",
//         "official": "Republic of India",
//         "nativeName": {
//         "eng": {
//             "official": "Republic of India",
//             "common": "India"
//         },
//         "hin": {
//             "official": "भारत गणराज्य",
//             "common": "भारत"
//         },
//         "tam": {
//             "official": "இந்தியக் குடியரசு",
//             "common": "இந்தியா"
//         }
//         }
//     },
//     "tld": [
//         ".in"
//     ],
//     "cca2": "IN",
//     "ccn3": "356",
//     "cioc": "IND",
//     "independent": true,
//     "status": "officially-assigned",
//     "unMember": true,
//     "currencies": {
//         "INR": {
//         "symbol": "₹",
//         "name": "Indian rupee"
//         }
//     },
//     "idd": {
//         "root": "+9",
//         "suffixes": [
//         "1"
//         ]
//     },
//     "capital": [
//         "New Delhi"
//     ],
//     "altSpellings": [
//         "IN",
//         "Bhārat",
//         "Republic of India",
//         "Bharat Ganrajya",
//         "இந்தியா"
//     ],
//     "region": "Asia",
//     "subregion": "Southern Asia",
//     "languages": {
//         "eng": "English",
//         "hin": "Hindi",
//         "tam": "Tamil"
//     },
//     "latlng": [
//         20,
//         77
//     ],
//     "landlocked": false,
//     "borders": [
//         "BGD",
//         "BTN",
//         "MMR",
//         "CHN",
//         "NPL",
//         "PAK"
//     ],
//     "demonyms": {
//         "eng": {
//         "f": "Indian",
//         "m": "Indian"
//         },
//         "fra": {
//         "f": "Indienne",
//         "m": "Indien"
//         }
//     },
//     "cca3": "IND",
//     "translations": {
//         "ara": {
//         "official": "جمهورية الهند",
//         "common": "الهند"
//         },
//         "bre": {
//         "official": "Republik India",
//         "common": "India"
//         },
//         "ces": {
//         "official": "Indická republika",
//         "common": "Indie"
//         },
//         "cym": {
//         "official": "Republic of India",
//         "common": "India"
//         },
//         "deu": {
//         "official": "Republik Indien",
//         "common": "Indien"
//         },
//         "est": {
//         "official": "India Vabariik",
//         "common": "India"
//         },
//         "fin": {
//         "official": "Intian tasavalta",
//         "common": "Intia"
//         },
//         "fra": {
//         "official": "République de l'Inde",
//         "common": "Inde"
//         },
//         "hrv": {
//         "official": "Republika Indija",
//         "common": "Indija"
//         },
//         "hun": {
//         "official": "Indiai Köztársaság",
//         "common": "India"
//         },
//         "ind": {
//         "official": "Republik India",
//         "common": "India"
//         },
//         "ita": {
//         "official": "Repubblica dell'India",
//         "common": "India"
//         },
//         "jpn": {
//         "official": "インド共和国",
//         "common": "インド"
//         },
//         "kor": {
//         "official": "인도 공화국",
//         "common": "인도"
//         },
//         "nld": {
//         "official": "Republiek India",
//         "common": "India"
//         },
//         "per": {
//         "official": "جمهوری هندوستان",
//         "common": "هند"
//         },
//         "pol": {
//         "official": "Republika Indii",
//         "common": "Indie"
//         },
//         "por": {
//         "official": "República da Índia",
//         "common": "Índia"
//         },
//         "rus": {
//         "official": "Республика Индия",
//         "common": "Индия"
//         },
//         "slk": {
//         "official": "Indická republika",
//         "common": "India"
//         },
//         "spa": {
//         "official": "República de la India",
//         "common": "India"
//         },
//         "srp": {
//         "official": "Република Индија",
//         "common": "Индија"
//         },
//         "swe": {
//         "official": "Republiken Indien",
//         "common": "Indien"
//         },
//         "tur": {
//         "official": "Hindistan Cumhuriyeti",
//         "common": "Hindistan"
//         },
//         "urd": {
//         "official": "جمہوریہ بھارت",
//         "common": "بھارت"
//         },
//         "zho": {
//         "official": "印度共和国",
//         "common": "印度"
//         }
//     },
//     "flag": "🇮🇳",
//     "maps": {
//         "googleMaps": "https://goo.gl/maps/WSk3fLwG4vtPQetp7",
//         "openStreetMaps": "https://www.openstreetmap.org/relation/304716"
//     },
//     "population": 1380004385,
//     "gini": {
//         "2011": 35.7
//     },
//     "fifa": "IND",
//     "car": {
//         "signs": [
//         "IND"
//         ],
//         "side": "left"
//     },
//     "timezones": [
//         "UTC+05:30"
//     ],
//     "continents": [
//         "Asia"
//     ],
//     "flags": {
//         "png": "https://flagcdn.com/w320/in.png",
//         "svg": "https://flagcdn.com/in.svg",
//         "alt": "The flag of India is composed of three equal horizontal bands of saffron, white and green. A navy blue wheel with twenty-four spokes — the Ashoka Chakra — is centered in the white band."
//     },
//     "coatOfArms": {
//         "png": "https://mainfacts.com/media/images/coats_of_arms/in.png",
//         "svg": "https://mainfacts.com/media/images/coats_of_arms/in.svg"
//     },
//     "startOfWeek": "monday",
//     "capitalInfo": {
//         "coord": {
//         "lat": 28.6,
//         "lng": 77.2
//         }
//     },
//     "postalCode": {
//         "format": "######",
//         "regex": "^(\\d{6})$"
//     },
//     "areaKm2": 3287590,
//     "interestingFacts": {
//         "geography": "India is home to the world's highest motorable road, the Khardung La.",
//         "history": "The Indus Valley Civilization, one of the world's oldest, flourished in what is now Pakistan and India.",
//         "culture": "India has the largest number of UNESCO World Heritage sites in South Asia.",
//         "economy": "India is the world's largest producer of milk.",
//         "philosophy": "Four of the world's largest religions – Hinduism, Buddhism, Jainism, and Sikhism – originated in India.",
//         "science": "India has one of the largest space programs in the world, having successfully sent multiple missions to the moon and Mars.",
//         "literature": "India has 22 scheduled languages, reflecting its linguistic diversity.",
//         "entertainment": "Bollywood, the Hindi-language film industry, is one of the largest film producers globally.",
//         "food": "India boasts an incredibly diverse range of culinary traditions, varying significantly by region.",
//         "environment": "India is one of the 17 mega-biodiverse countries globally."
//     },
//     "coord": {
//         "lat": 20,
//         "lng": 77
//     }
//     }
// ];

import axios from "axios";

const api = axios.create({
    baseURL: "https://countries-api-jk2a.onrender.com/v1",
    headers: {
        "Content-Type": "application/json",
    },
});

// console.log("Data );

// Get the list of all country data
export const getAllCountries = (props = {}) => {
    return api.get("/all", {
        params: {
            limit: props.limit || 250, // Default limit to 250 if not provided
            ...props,
        },
    });
};

// Get country data by code
export const getCountryByCode = (code) => {
    return api.get(`/alpha/${code}`);
}

// Get country data by density
export const getCountryByDensity = (sort="asc") => {
    // return api.get(`/density?sort=${sort}`);
    return api.get("/density", {
        params: {
            sort: sort,
        },
    });
}

export const getRegions = () => {
    return api.get("/meta/regions");
}

export const searchCountries = (searchTerm) => {
    return api.get("/search", {
        params: {
            q: searchTerm,
        },
    });
}

export const getCountryByRegion = (region) => {
    return api.get(`/region/${region}`);
}