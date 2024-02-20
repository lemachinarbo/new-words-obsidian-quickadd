/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// API endpoints
const DICTIONARY_API_URL = 'https://lexicala1.p.rapidapi.com/search-entries';
const TRANSLATOR_API_URL = 'https://translation.googleapis.com/language/translate/v2';
const SEARCH_URL = 'https://google.com/search?q=DEFINE%3A';

// API Keys

// Get lexicala API Key https://rapidapi.com/kdictionaries/api/lexicala1
const DICTIONARY_API_KEY_OPTION = 'Dictionary API Key';
// How to get your Google Translation API Key https://translatepress.com/docs/automatic-translation/generate-google-api-key/
const TRANSLATOR_API_KEY_OPTION = 'Google Translation API Key';

const TRANSLATOR_LANG_SOURCE = 'Translation: Source language';
const TRANSLATOR_LANG_TARGET = 'Translation: Target language';


const languages = [
    'Afrikaans - af',
    'Albanian - sq',
    'Amharic - am',
    'Arabic - ar',
    'Armenian - hy',
    'Assamese - as',
    'Aymara - ay',
    'Azerbaijani - az',
    'Bambara - bm',
    'Basque - eu',
    'Belarusian - be',
    'Bengali - bn',
    'Bhojpuri - bho',
    'Bosnian - bs',
    'Bulgarian - bg',
    'Catalan - ca',
    'Cebuano - ceb',
    'Chinese (Simplified) - zh-CN',
    'Chinese (Traditional) - zh-TW',
    'Corsican - co',
    'Croatian - hr',
    'Czech - cs',
    'Danish - da',
    'Dhivehi - dv',
    'Dogri - doi',
    'Dutch - nl',
    'English - en',
    'Esperanto - eo',
    'Estonian - et',
    'Ewe - ee',
    'Filipino (Tagalog) - fil',
    'Finnish - fi',
    'French - fr',
    'Frisian - fy',
    'Galician - gl',
    'Georgian - ka',
    'German - de',
    'Greek - el',
    'Guarani - gn',
    'Gujarati - gu',
    'Haitian Creole - ht',
    'Hausa - ha',
    'Hawaiian - haw',
    'Hebrew - he, iw',
    'Hindi - hi',
    'Hmong - hmn',
    'Hungarian - hu',
    'Icelandic - is',
    'Igbo - ig',
    'Ilocano - ilo',
    'Indonesian - id',
    'Irish - ga',
    'Italian - it',
    'Japanese - ja',
    'Javanese - jv, jw',
    'Kannada - kn',
    'Kazakh - kk',
    'Khmer - km',
    'Kinyarwanda - rw',
    'Konkani - gom',
    'Korean - ko',
    'Krio - kri',
    'Kurdish - ku',
    'Kurdish (Sorani) - ckb',
    'Kyrgyz - ky',
    'Lao - lo',
    'Latin - la',
    'Latvian - lv',
    'Lingala - ln',
    'Lithuanian - lt',
    'Luganda - lg',
    'Luxembourgish - lb',
    'Macedonian - mk',
    'Maithili - mai',
    'Malagasy - mg',
    'Malay - ms',
    'Malayalam - ml',
    'Maltese - mt',
    'Maori - mi',
    'Marathi - mr',
    'Meiteilon (Manipuri) - mni-Mtei',
    'Mizo - lus',
    'Mongolian - mn',
    'Myanmar (Burmese) - my',
    'Nepali - ne',
    'Norwegian - no',
    'Nyanja (Chichewa) - ny',
    'Odia (Oriya) - or',
    'Oromo - om',
    'Pashto - ps',
    'Persian - fa',
    'Polish - pl',
    'Portuguese (Portugal, Brazil) - pt',
    'Punjabi - pa',
    'Quechua - qu',
    'Romanian - ro',
    'Russian - ru',
    'Samoan - sm',
    'Sanskrit - sa',
    'Scots Gaelic - gd',
    'Sepedi - nso',
    'Serbian - sr',
    'Sesotho - st',
    'Shona - sn',
    'Sindhi - sd',
    'Sinhala (Sinhalese) - si',
    'Slovak - sk',
    'Slovenian - sl',
    'Somali - so',
    'Spanish - es',
    'Sundanese - su',
    'Swahili - sw',
    'Swedish - sv',
    'Tagalog (Filipino) - tl',
    'Tajik - tg',
    'Tamil - ta',
    'Tatar - tt',
    'Telugu - te',
    'Thai - th',
    'Tigrinya - ti',
    'Tsonga - ts',
    'Turkish - tr',
    'Turkmen - tk',
    'Twi (Akan) - ak',
    'Ukrainian - uk',
    'Urdu - ur',
    'Uyghur - ug',
    'Uzbek - uz',
    'Vietnamese - vi',
    'Welsh - cy',
    'Xhosa - xh',
    'Yiddish - yi',
    'Yoruba - yo',
    'Zulu - zu'
];


const languagesDictionary = {
    // Google Translate API language names and codes -> Lexicon API language codes
    'ar': {
        name: 'Arabic',
        dictionaryCode: 'ar'
    },
    'zh-CN': {
        name: 'Chinese (Simplified)',
        dictionaryCode: 'zh'
    },
    'zh-TW': {
        name: 'Chinese (Traditional)',
        dictionaryCode: 'tw'
    },
    'cs': {
        name: 'Czech',
        dictionaryCode: 'cs'
    },
    'da': {
        name: 'Danish',
        dictionaryCode: 'dk'
    },
    'nl': {
        name: 'Dutch',
        dictionaryCode: 'nl'
    },
    'en': {
        name: 'English',
        dictionaryCode: 'en'
    },
    'fr': {
        name: 'French',
        dictionaryCode: 'fr'
    },
    'de': {
        name: 'German',
        dictionaryCode: 'de'
    },
    'el': {
        name: 'Greek',
        dictionaryCode: 'el'
    },
    'he': {
        name: 'Hebrew',
        dictionaryCode: 'he'
    },
    'hi': {
        name: 'Hindi',
        dictionaryCode: 'hi'
    },
    'it': {
        name: 'Italian',
        dictionaryCode: 'it'
    },
    'iw': {
        name: 'Hebrew',
        dictionaryCode: 'he'
    },
    'ja': {
        name: 'Japanese',
        dictionaryCode: 'ja'
    },
    'ko': {
        name: 'Korean',
        dictionaryCode: 'ko'
    },
    'la': {
        name: 'Latin',
        dictionaryCode: 'la'
    },
    'no': {
        name: 'Norwegian',
        dictionaryCode: 'no'
    },
    'pl': {
        name: 'Polish',
        dictionaryCode: 'pl'
    },
    'pt': {
        name: 'Portuguese (Brazil, Portugal)',
        dictionaryCode: 'br' //For Portugal change it to pt
    },
    'ru': {
        name: 'Russian',
        dictionaryCode: 'ru'
    },
    'es': {
        name: 'Spanish',
        dictionaryCode: 'es'
    },
    'sv': {
        name: 'Swedish',
        dictionaryCode: 'sv'
    },
    'th': {
        name: 'Thai',
        dictionaryCode: 'th'
    },
    'tr': {
        name: 'Turkish',
        dictionaryCode: 'tr'
    }
};


module.exports = {

    entry: start,

    settings: {

        name: 'New Words',
        author: 'Lemachi Barno',
        credits: 'Based on Christian B. B. Houmann Movies script',
        options: {

            [DICTIONARY_API_KEY_OPTION]: {
                type: 'text',
                defaultValue: '',
                placeholder: 'Paste key here.',
            },

            [TRANSLATOR_API_KEY_OPTION]: {
                type: 'text',
                defaultValue: '',
                placeholder: 'Paste key here.',
            },

            [TRANSLATOR_LANG_SOURCE]: {
                type: 'dropdown',
                defaultValue: 'auto',
                description: 'Select a default source language (\'auto\' for automatic detection).',
                options: ['auto', ...languages]
            },

            [TRANSLATOR_LANG_TARGET]: {
                type: 'dropdown',
                defaultValue: 'en',
                description: 'Choose the default language for translations',
                options: languages
            }

        }
        
    },

};

let QuickAdd;
let Settings;

async function start(params, settings) {

    QuickAdd = params;
    Settings = settings;

    const query = await QuickAdd.quickAddApi.inputPrompt('Enter a new word: ');

    if (!query) {

        notice('No word entered.');
        return;

    }

    try {

        const translatedWord = await translateWord(query);
        const wordLanguage = translatedWord?.language || extractLanguageCode(Settings[TRANSLATOR_LANG_SOURCE]);
        const wordInfo = await getWordInfo(query, wordLanguage);


        console.log('wordlanguage:', wordLanguage);

        if (!wordInfo && !translatedWord) {

            notice(`No definitions or translations were found for "${query}"`);
            return;

        }

        if (!wordInfo) {

            notice(`No information found for "${query}".`);

        }

        if (!translatedWord) {

            notice(`No translation found for "${query}".`);

        }

        const definitions = wordInfo
            ? extractWordMeanings(wordInfo).definitions
            : [];
        
        QuickAdd.variables = {

            word: capitalizeFirstLetter(query),
            search: `${SEARCH_URL}${query}`,
            definitions: linkifyList(definitions),
            firstDefinition: definitions[0] || 'n/a', // Placeholder for empty definitions.
            otherDefinitions: linkifyList(definitions.slice(1)),
            translation: translatedWord?.translation || 'n/a'

        };

        notice(`Word "${query}" added.`);

    } catch (error) {

        console.error(error);
        notice(`Error fetching word information: ${error.message}`);

    }

}


async function getWordInfo(word, languageSource) {

    const languageCode = getDictionaryCode(languageSource);

    if(!languageCode) return null;
    
    //Params DOCS https://api.lexicala.com/documentation/

    const params = {
        text: word,
        language: languageCode,
        //number: "singular",
        //monosemous: "false",
        analyzed: 'true',
        //sample: "1",
        //pos: "verb",
        morph: 'true',
        //gender: "femenine",
        //polysemous: "false"
    };



    const queryString = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    const url = `${DICTIONARY_API_URL}?${queryString}`;

    const options = {

        method: 'GET',
        headers: {
            'X-RapidAPI-Key': Settings[DICTIONARY_API_KEY_OPTION],
            'X-RapidAPI-Host': 'lexicala1.p.rapidapi.com'     
        }

    };
    
    try {

        const response = await fetch(url, options);
        
        if (!response.ok) {

            const errorData = await response.json(); 
            console.error(`API error: ${errorData.message}`); 
            return null;
        
        }
        
        const data = await response.json();
        return data || {};
        

    } catch (error) {
        
        console.error(error);
        return null; 
    
    }

}


async function translateWord(text, languageSource = Settings[TRANSLATOR_LANG_SOURCE], languageTarget = Settings[TRANSLATOR_LANG_TARGET]) {

    const apiKey = Settings[TRANSLATOR_API_KEY_OPTION];
    const url = `${TRANSLATOR_API_URL}?key=${apiKey}`;

    let requestBody;

    languageSource = extractLanguageCode(languageSource);
    languageSource = (languageSource === 'auto') ? '' : languageSource;
    languageTarget = extractLanguageCode(languageTarget);

    requestBody = JSON.stringify({

        q: text,
        source: languageSource,
        target: languageTarget,
        format: 'text'

    });

    const response = await fetch(url, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: requestBody

    });


    if (response.ok) {

        const data = await response.json();

        const languageCodeDetected = data.data.translations[0].detectedSourceLanguage;
        const translatedText = data.data.translations[0].translatedText;

        return { 

            translation: translatedText, 
            language: languageCodeDetected 
        
        }; 
        
    } else {

        console.error(`Translation request failed with status ${response.status}`);
        notice('Translation not found.');
        return null;
   
    }

}


function extractWordMeanings(wordInfo) {

    let word = '';
    let definitions = [];

    if (wordInfo && wordInfo.results && wordInfo.results.length > 0) {

        const result = wordInfo.results[0];
        word = result.headword.text;
        definitions = result.senses
            .filter(sense => sense.definition)
            .map(sense => sense.definition);


    } else {

        notice('No word information found.');

    }

    return {

        word: word,
        definitions: definitions,

    };

}


function extractLanguageCode(languageString) {

    const splitString = languageString.split(' - ');
    const languageCode = splitString[splitString.length - 1];
    return languageCode.trim(); 

}


function getDictionaryCode(languageCode) {

    const languageMapping = Object.entries(languagesDictionary).find(([key]) => key.includes(languageCode));

    if (languageMapping) {

        console.log('getDictionaryCode', languageCode, ' => ', languageMapping[1].dictionaryCode);
        // Return dictionary language code
        return languageMapping[1].dictionaryCode; 

    } else {

        return null; 
    }
}


function capitalizeFirstLetter(word) {

    return word.charAt(0).toUpperCase() + word.slice(1);

}


function commaSeparatedList(list) {

    return list.join(', ');

}


function linkifyList(list) {

    // return list.map(item => `\n- "${item.trim()}"`).join("");
    return list.join('\n- ');

}


function notice(msg) {

    return new Notice(msg, 5000);

}