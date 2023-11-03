# Spotify Search App

This is a web application that allows users to search for tracks on Spotify and view the results.

## Deployment

The app is deployed and can be accessed online at the following link:

[Spotify Search App](https://spotify-search-8klef9shj-azelouarak.vercel.app/)

## Description

The Spotify Search App provides an intuitive interface for users to search for tracks on Spotify. It displays search results in a visually appealing format, making it easy for users to discover new music. The app leverages the Spotify API to fetch track data, and it allows users to click on track names to listen to a preview of the song on Spotify.

## Features

List of key features:

- **Track Search**: Users can enter a search query to find tracks on Spotify.

## Technologies Used

- React: A JavaScript library for building user interfaces.

- TypeScript: A statically typed superset of JavaScript.

- Material-UI: A popular React UI framework for creating a consistent and attractive user interface.

- @spotify/web-api-ts-sdk: A TypeScript SDK for interacting with the Spotify Web API.

## How to Run Locally

To run the app locally on your machine, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/azizove/spotify-search

2. Navigate to the project directory:

    ```bash
    cd spotify-search-app

3. Install project dependencies:

    ```bash
    yarn install

4. Create a .env file at the project root and add your Spotify access token:

    ```bash
    REACT_APP_SPOTIFY_CLIENT_ID=clientId
    REACT_APP_SPOTIFY_CLIENT_SECRET=clientSecret

5.  Start the development server:

    ```bash
    yarn start

6. Open your browser and access the app at http://localhost:3000.

## Usage

- Enter a search query in the search bar.
- Click the "Search" button to find tracks on Spotify.
- Browse the search results in track cards.
- Click on a track name to listen to a song preview on Spotify.
-vClick on the "Listen on Spotify" link to open the Spotify track page