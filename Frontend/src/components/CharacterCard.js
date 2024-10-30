// src/components/CharacterCard.js
import React from 'react';
import './CharacterCard.css'; // Create a CSS file for styling

const CharacterCard = ({ character }) => {
    return (
        <div className="card">
            <h2>{character.name}</h2>
            <p>Level: {character.level}</p>
            <p>Health: {character.health}</p>
        </div>
    );
};

export default CharacterCard;
