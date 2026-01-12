## Rock, Paper, Scissors

### Description

This function determines the winner of a match between two players. While the logic is traditionally solved with nested `if/else`statements, this version utilises a **Lookup Object** to define the game rules, making the code more readable and easier to maintain.

### Evolution of the Code

1.  The Conditional Approach (initial)
    The first version used multiple logical `Or` (`||`) and `AND` (`&&`) operators. While functional, it becomes harder to read as more rules are added.

2.  The Lookp Approach (Optimized)
    By storing the "win conditions" in a `beats` object, the logic becomes a simple dicitionary check:

        - The Rules: `Rock` beats `Scissors`, `Paper` beats `Rock`, `Scissors` beats `Paper`.

        - The Logic: if `beats[player1]` matches `player2`, then Player 1 is the winner.

### Technical Implementation

```JavaScript

/**
 * Determines the winner of a Rock, Paper, Scissors match.
 * @param {string} player1 - "Rock", "Paper", or "Scissors"
 * @param {string} player2 - "Rock", "Paper", or "Scissors"
 * @returns {string} The result of the match
 */

 function rockPaperScissors(player1, player2) {
    // 1. Check for Tie (Exit early)
    if (player1 === player2) return "Tie"

    // 2. Define Winning Relationships
    const beats = {
    Rock: 'Scissors,
    Paper: 'Rock',
    Scissors: 'Paper',
    };

    // 3. Determine Winner using Object Lookup
    if (beats[player1] === player2) {
    return "Player 1 wins"
    } else {
     return "Player 2 wins"
    }
 }
```

### Key Concepts

    -   Guarding Clauses: Checking for a `Tie` at the very beginning allows the function to exit early, avoiding unnecessary calculations.

    -   Data-Driven Logic: Storing rules in an object (`beats`) seperates the rules of the game from the engine that runs it.

    -   Constant Time Complexity (O(1)): The winner is found instantly regardless of how many rules are added to the object.
