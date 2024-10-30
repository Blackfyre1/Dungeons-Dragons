// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './components/CharacterCard';
import './App.css'; // Create a CSS file for general styles

const App = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('http://localhost:3001/characters');
                setCharacters(response.data);
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };

        fetchCharacters();
    }, []);

    return (
        <div className="container">
            <h1>Character List</h1>
            <div className="cards">
                {characters.map((character) => (
                    <CharacterCard key={character._id} character={character} />
                ))}
            </div>
        </div>
    );
};

export default App;
