<div align="center">
  <h1>Pokémon Memory Game</h1>
  <p>A memory card game built with React and Vite.</p>

[![Play Now](https://img.shields.io/badge/Play_Now-Live_Demo-blue?style=for-the-badge&logo=vercel)](https://memory-card-zeta-woad.vercel.app/)

</div>

<br />

Test your memory by clicking on Pokémon cards without repeating any. The game fetches Pokémon data from the PokéAPI and shuffles the board after each turn.

> **Part of [The Odin Project](https://www.theodinproject.com/)** - React Course Challenge

---

## Features

- **Difficulty Levels** - Choose between Easy (8 cards), Medium (12 cards), or Hard (16 cards).
- **Dark Mode UI** - Includes a dark mode interface.
- **Animations** - Grid resizing, fade-ins, and card entrance animations.
- **Shuffling Algorithm** - Uses the Fisher-Yates algorithm for board shuffling after each click.
- **Responsive Design** - Adapts layout for different screen sizes.
- **API Integration** - Fetches Pokémon sprites from [PokéAPI](https://pokeapi.co/).

## How to Play

1. Choose your difficulty level at the top (Easy, Medium, or Hard).
2. Click on any Pokémon card to earn a point.
3. The board will shuffle automatically.
4. If you click the same card twice, the game is over.
5. Try to reach the maximum score by clicking every unique card on the board.

## Tech Stack

- **React**
- **Vite**
- **PokéAPI**
- **CSS**

## Running Locally

To run this project on your local machine:

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/Memory-game.git

# 2. Navigate into the directory
cd Memory-game

# 3. Install dependencies
npm install

# 4. Start the Vite development server
npm run dev
```

## Project Structure

```text
Memory-game/
├── src/
│   ├── App.jsx      # Main game logic, state, and API fetching
│   ├── Main.jsx     # React entry point
│   └── style.css    # Dark theme and responsive grids
├── index.html       # HTML template
├── package.json     # Dependencies
└── vite.config.js   # Vite configuration
```

## Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is [MIT](./LICENSE) licensed.

<br />

<div align="center">
  <p>Made as part of The Odin Project</p>
</div>
