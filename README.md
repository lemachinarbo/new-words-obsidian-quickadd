# Obsidian (QuickAdd) - New words script
Script for [QuickAdd](https://github.com/chhoumann/quickadd/) to create a list of *newly learned words* with their meanings and translations.

# What is this script for?
As a non-native English speaker, when I'm reading English literature and find an unknown word, I attempt to understand it by looking up its definition in English. However, sometimes, even after understanding the meaning, I find myself thinking of the equivalent word in my native language.

Therefore, I thought it will be great to compile a list of new words with their definitions and translations, so I can revisit it later for learning purposes.

## Demo
[new words.webm](https://github.com/lemachinarbo/new-words-obsidian-quickadd/assets/153532864/7441e710-938d-46a2-bfb1-fc702851f794)


# How to create your own list
## Requirements

- Install and activate [Quickadd](https://obsidian.md/plugins?id=quickadd) for Obsidian.
- Get a Google Translate [API key](https://cloud.google.com/translate/docs/setup) (Here's a step by step [tutorial](https://translatepress.com/docs/automatic-translation/generate-google-api-key/)).
- Get a Lexicala [API key](https://rapidapi.com/kdictionaries/api/lexicala1) (Free 50 request per day)

## Step 1: Setup the files

The first step is to copy this script to your vault and create a note for storing new words:

- Download the [words.js](https://github.com/lemachinarbo/new-words-obsidian-quickadd/blob/main/words.js) and copy it into your vault (e.g. create a  `/scripts` folder and paste it there).
- Create a new note in your Vault to store the movies (e.g: `New words`)

## Step 2: Create a macro in QuickAdd

Now, let's set up an action to pull word information and add it to our note using QuickAdd's Macros feature.

- Open the QuickAdd plugin settings (Click on the settings icon or `Ctrl` + `,` and then scroll to QuickAdd under Communnity Plugins on the left).
- Click on `Manage Macros` button.
- In the _Macro Manager_ window choose a name for you macro (e.g. `Add word`) and click `Add Macro`.
- Click on `configure` to setup the Macro .
- Under the `User Scripts` option choose the `words` script and click `add`.
- Click on the settings icon `⚙️` to the right of the `word` script and paste the `API Keys` (If you don't have them, refer to the requirements section above). Also, select your preferred language for translations.


## Step 3: Capturing words data

- Click the `Capture` button to add a `Capture` choice and then click the settings icon `⚙️` besides the new `Untitled Capture Choice`.
- Double click the title to rename the choice and add a name (e.g. `Capture word`).
- Under `File Name` choose the note you created  before to store the movies (e.g. `New words.md`).
- Toggle on the `Write to bottom of file` option.
- Toggle on the `Capture format` option.
- Copy and paste this format:
    ```
    - [{{VALUE:word}}]({{VALUE:search}}):  ({{VALUE:translation}}) {{VALUE:firstDefinition}}
    ```
    This will generate a list element with the word, a link to define using google, the tranlation and the meaning: 

    ```
    - [Hello](https://google.com/search?q=DEFINE%3AHello):  (Hola) used to greet somebody in person, on the telephone, and sometimes in writing
    ```

## Step 4: Creating a choice.

Now we need to create a choice to activate the macro:

- Return to the `QuickAdd Settings` menu. 
- Add a name for the macro (e.g: `Words`. This will be the word you use to capture new words), select `Macro` from the dropdown and click `Add choice`.
- Click on the settings icon `⚙️` next to the new macro, and select the  `Add word` (or the name you choosed) macro we created earlier. 

That's it! Close all menus and start adding words.

## Step 5: Adding a word

- Open the `command palette` (`Ctrl` + `p`).
- Type QuickAdd and select `QuickAdd: Run QuickAdd ` and press `Enter`.
- Select `Words` and press `Enter`.
- Type a word `Hello` and press `Enter`.

# Languages supported

## Translation
For translation, it supports all languages [included by google](https://cloud.google.com/translate/docs/languages)

## Definitions
For definitions [Lexicala languages and data](https://api.lexicala.com/documentation/).

```
Arabic (ar)
simplified Chinese (zh)
traditional Chinese (tw)
Czech (cs)
Danish (dk)
Dutch (nl)
English (en)
French (fr)
German (de)
Greek (el)
Hebrew (he)
Hindi (hi)
Italian (it)
Japanese (ja)
Korean (ko)
Latin (la)
Norwegian (no)
Polish (pl)
Portuguese (pt)
Brazilian Portuguese (br)
Russian (ru)
Spanish (es)
Swedish (sv)
Thai (th)
Turkish (tr)
```

# Variables

Custom variables available for use:

- `word`: The word being processed.
- `search`: A link to search the definition in Google.
- `definitions`: A list of word meanings.
- `firstDefinition`: The first meaning of the word.
- `otherDefinitions`: All meanings except the first one.
- `translation`: The translation of the word.
