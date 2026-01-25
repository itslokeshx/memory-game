# 🎮 Memory Game

A simple and fun memory card game built with React and Vite. Test your memory by clicking on Pokémon cards without repeating any! The game fetches real Pokémon data from PokéAPI and shuffles the cards after each click.

> 📚 **Part of [The Odin Project](https://www.theodinproject.com/)** - React Course Challenge

## 🌐 Live Demo

**[Play Now →](https://memory-card-zeta-woad.vercel.app/)**

## ✨ Features

- 🎲 **Dynamic Card Shuffling** - Cards reshuffle after every click
- 🌐 **Real-time API Integration** - Fetches Pokémon data from PokéAPI
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🎨 **Clean UI** - Minimal and responsive design
- 🔄 **React Hooks** - Modern React with useState and useEffect

## 🎯 How to Play

1. Click on any Pokémon card to start
2. The cards will shuffle automatically
3. Click on a different Pokémon card
4. Don't click the same card twice!
5. Try to click all 12 cards without repeating

## 🛠️ Tech Stack

- **React 19** - Modern UI library with hooks
- **Vite 7** - Next-generation frontend tooling
- **PokéAPI** - RESTful Pokémon API
- **ESLint** - Code linting and quality
- **CSS3** - Styling and animations

## 📁 Project Structure

```
Memory-game/
├── src/
│   ├── App.jsx      # Main game component
│   ├── Main.jsx     # React entry point
│   └── style.css    # Styling
├── index.html       # HTML template
├── package.json     # Dependencies
└── vite.config.js   # Vite configuration
```

## 🎮 Game Logic

- Fetches 12 random Pokémon from PokéAPI
- Uses Fisher-Yates shuffle algorithm for randomization
- Tracks clicked cards to prevent duplicates
- Updates score based on correct clicks

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is [MIT](./LICENSE) licensed.

<div align="center">
  <p>Made with ❤️ as part of The Odin Project</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
