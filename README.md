# Trivia App

## Table of Contents

- [Description](#description)
- [Demo](#demo)
- [Features](#features)
- [Design](#design)
- [Build Steps](#build-steps)
- [Usage](#usage)
- [Known Issues](#known-issues)
- [Future Goals](#future-goals)
- [Changelog](#changelog)

## Description

A full-stack application that allows you to play trivia. Backend built with Java & Spring, frontend built with TypeScript & React.

## Demo

- Include hosted link
- Include images of app

## Features

Key features of the project.

## Design

- Design goals
- Figma screenshots
- Why did we implement it the way we did?

## Build Steps

- How to build/run project
- Use proper code snippets if there are commands to run

## Usage

Instructions and examples on how to use the project.

## Known Issues

- Remaining bugs

## Future Goals

Planned future features and improvements:

## Changelog

### 18/09/2024 - Basic Project Setup

- Created basic setup for both frontend and backend
- Created basic design for the app using Figma
- Set up testing suites for frontend and backend
- Set up MySQL database config

### 19/09/2024

- Planned basic db schema
- Created develop branch
- Created game entity
- Created question entity
- Created getter and setter methods for entities
- Created a Controller and Service for Game entity
- Created method to fetch new game from Open Trivia DB
- Created Game DTO and Game Repository
- Updated URL to fetch new game with dynamic category and difficulty parameters

### 20/09/2024

- Created a trivia and game service in the frontend
- Created category dropdown component
- Updates create game method in backend
- Updated the category dropdown component to display the categories from the Open Trivia DB


### 23/09/2024

- Created a component for buttons to select trivia difficulty
- Created page to display components to start new game
- Added basic SASS styling to pages and new folder for global style variables
- Added routing to main app with react-router-dom
- Created landing page with Gif
- Added navigation between landing page and create game page

### 24/09/2024

- Created React hook form with Zod for creation of a new trivia game
- Created context for fetched data across pages
- Updated fetch method to get correct data from the form
- Created new page to display trivia questions
- Created function to send new game data to the backend


### 25/09/2024

- Created method to display randomized answer alternatives to trivia questions
- Created new Questions page to display each question and answers
- Created new React hook form with Zod to grab user answer input
- Implemented functionality for next button to display next question in trivia and added basic styling for question page