<div align="center">
  <h1>🎮 Pokémon Memory Game</h1>
  <p>A sleek, premium, and fully responsive memory card game built with React & Vite.</p>

  [![Play Now](https://img.shields.io/badge/Play_Now-Live_Demo-blue?style=for-the-badge&logo=vercel)](https://memory-card-zeta-woad.vercel.app/)
</div>

<br />

Test your memory by clicking on Pokémon cards without repeating any! The game fetches real Pokémon data from the PokéAPI and automatically shuffles the board after every turn. Packed with slick animations and a gorgeous dark-mode UI.

> 📚 **Part of [The Odin Project](https://www.theodinproject.com/)** - React Course Challenge

---

## ✨ Features

- 🎚️ **Dynamic Difficulty Levels** - Choose between Easy (8 cards), Medium (12 cards), or Hard (16 cards).
- 🎨 **Premium UI/UX design** - A gorgeous, native-feeling dark mode interface inspired by macOS and Notion.
- ⚡ **Fluid Animations** - Smooth grid-resizing, fade-ins, and staggered waterfall card entrance animations.
- 🎲 **Advanced Shuffling** - Uses the Fisher-Yates algorithm for perfectly randomized board shuffling after every click.
- 📱 **Fully Responsive** - Flawlessly adapts grids and sizes from large desktop monitors down to mobile screens without breaking.
- 🌐 **Real-time API Integration** - Fetches dynamic high-quality Pokémon sprites on the fly from [PokéAPI](https://pokeapi.co/).

## 🎯 How to Play

1. Choose your difficulty level at the top (Easy, Medium, or Hard).
2. Click on any Pokémon card to earn a point.
3. The board will shuffle automatically.
4. **Don't click the same card twice!** If you do, it's Game Over.
5. Try to reach the maximum score by clicking every unique card on the board!

## 🛠️ Tech Stack

- **React** - Modern UI library utilizing `useState` & `useEffect` hooks.
- **Vite** - Next-generation lightning fast frontend tooling.
- **PokéAPI** - RESTful API for character data and sprites.
- **Vanilla CSS3** - Custom CSS Grid / Flexbox layouts with CSS animations, media queries, and root variables.

## 🚀 Running Locally

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

## 📁 Project Structure

```text
Memory-game/
├── src/
│   ├── App.jsx      # Main game logic, state, and API fetching
│   ├── Main.jsx     # React entry point
│   └── style.css    # Premium dark theme and responsive grids
├── index.html       # HTML template
├── package.json     # Dependencies
└── vite.config.js   # Vite configuration
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is [MIT](./LICENSE) licensed.

<br />

<div align="center">
  <p>Made with ❤️ as part of The Odin Project</p>
  <p>⭐ Star this repo if you found it fun!</p>
</div>
