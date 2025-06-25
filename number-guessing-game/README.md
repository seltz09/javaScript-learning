# Number Guesser Game 🎯

A fun interactive web-based guessing game where you compete against the computer to see who can guess closest to a randomly generated target number!

## How to Play

1. **Input your guess**: Enter a number between 0-9 using the input field or +/- buttons
2. **Make your guess**: Click "Make a Guess" to submit and see the results
3. **See who wins**: The player whose guess is closest to the target number wins the round
4. **Next round**: Click "Next Round" to play again

## Game Rules

- Target numbers are randomly generated between 0-9
- Both you and the computer make guesses for each round
- The guess closest to the target number wins the round
- In case of a tie, the human player wins
- Scores are tracked across multiple rounds

## Files Structure

```
number-guesser/
├── index.html      # Main HTML structure
├── style.css       # Game styling and layout
├── script.js       # Core game logic functions
└── game.js         # DOM manipulation and event handlers
```

## Features

- **Interactive UI**: Clean, responsive design with visual feedback
- **Score tracking**: Keeps track of wins for both human and computer
- **Round progression**: Play multiple rounds with advancing round numbers
- **Input validation**: Ensures guesses stay within 0-9 range
- **Visual feedback**: Highlights winners and provides clear game state

## Technical Details

### Core Functions (script.js)
- `generateTarget()`: Creates random target number (0-9)
- `compareGuesses()`: Determines winner by comparing distances to target
- `updateScore()`: Updates win counters for human or computer
- `advanceRound()`: Increments the current round number

### Game Interface (game.js)
- Handles all user interactions and DOM updates
- Manages button states and game flow
- Displays results and updates scores in real-time

## Getting Started

1. Clone or download all files to your local machine
2. Open `index.html` in any modern web browser
3. Start playing immediately - no installation required!

## Browser Compatibility

Works in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Screenshots

The game features a clean, centered layout with:
- Round and target number display at the top
- Side-by-side human vs computer guessing areas
- Interactive number input with +/- controls
- Score tracking for both players
- Clear game instructions at the bottom

## License

This is a learning project - feel free to use and modify as needed!

---

**Have fun and may the best guesser win!** 🏆
