# Etch-a-Sketch

A browser-based sketchpad built with vanilla HTML, CSS, and JavaScript. Part of [The Odin Project](https://www.theodinproject.com/lessons/foundations-etch-a-sketch) Foundations curriculum.

## Demo

Draw on the grid by hovering your mouse over the squares. Each square lights up with a random color as your cursor passes over it.

## Features

- Dynamic grid generation using JavaScript
- Random RGB color on hover via event delegation
- Resizable grid (1x1 up to 100x100) through a prompt dialog
- Grid automatically scales to fit a fixed container size

## How It Works

- The grid is created by looping `size × size` times and appending `div` elements to a container
- Squares resize dynamically — `600px / size` — so the grid always fits the same space
- A single `mouseover` event listener on the container handles all squares via **event bubbling**, rather than attaching individual listeners to each square
- Clicking the resize button clears the existing grid and regenerates it at the new size

## Built With

- HTML
- CSS (Flexbox)
- JavaScript (DOM manipulation, event listeners)

## What I Learned

- Breaking a project into small, solvable steps before writing any code
- DOM manipulation — `createElement`, `appendChild`, `innerHTML`
- Event delegation and how bubbling works
- Dynamic styling with `element.style`
- Why functions are passed by reference (without `()`) to event listeners
- When to set explicit heights in CSS vs letting content define size

## Setup

1. Clone the repository
2. Open `index.html` in your browser
3. No dependencies or build tools required

## Project Status

Core requirements complete. Possible next steps:
- Progressive darkening effect on repeated hover
- Toggle between color modes (random, single color, eraser)
- Mobile touch support