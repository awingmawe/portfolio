"use client"
import React from 'react';

type Skills = {
    icon: string;
    name:string;
}

type CardProfile = {
    name: string;
    summary: string;
    imageUrl: string;
    skills?: Skills[];

}

export const Card: React.FC<CardProfile>=({ name, summary, imageUrl, skills }) => {
    return(
        <div className="bg-white rounded-lg shadow-md p-4">
        <img src={imageUrl} alt={name} className="w-full h-32 object-cover mb-4" />
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-700">{summary}</p>
        </div>
    )
}