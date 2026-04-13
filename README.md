# Jur Sital Web Experience

A single-page cultural website that documents and celebrates **Jur Sital**, the Maithili New Year, through history, ecology, rituals, culinary traditions, and interactive storytelling.

## Overview

This project presents Jur Sital as both a cultural festival and an ecological philosophy. The page combines long-form editorial sections with interactive UI elements such as:

- water blessing animation
- dark/light theme toggle
- English/Maithili text toggle for tagged content
- responsive mobile navigation
- interactive checklist with progress tracking
- interactive map (Leaflet + OpenStreetMap)
- gallery and embedded folk music
- community memory wall input

## Tech Stack

- HTML5 (`index.html`)
- CSS3 (`style.css`)
- Vanilla JavaScript (`script.js`)
- Leaflet map library via CDN
- Google Fonts via CDN

No build tools or package manager are required.

## Project Structure

```text
.
|- index.html
|- style.css
|- script.js
|- Jur-Sital.txt
|- README.md
`- assets/
```

## Run Locally

### Option 1: Open directly

1. Open `index.html` in your browser.

### Option 2: Use a local static server (recommended)

Using VS Code Live Server (or any static file server) gives smoother behavior for embedded assets and map integrations.

## Key Sections on the Page

- Hero + festival introduction
- Astronomical and calendrical foundations
- Pan-Asian solar New Year comparison
- Ecology and hydrological practices
- Culinary anthropology (Basiya Pavani)
- Folklore and literature references
- Celebration checklist
- Cultural map
- Visuals and melodies
- Community memory wall

## Notes

- The map requires internet access to load OpenStreetMap tiles.
- External CDNs are used for fonts and Leaflet.
- The year and references are currently aligned with content for 2026.

## Credits

Built to honor Maithili culture and Jur Sital traditions.