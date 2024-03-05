class Card{
    constructor(color, value){
        this.color = color;
        this.value = value;
        this.points = this.calculatePoints();
    }
    calculatePoints() {
        if (this.value === 'Jack' || this.value === 'Queen' || this.value === 'King') {
            return 10;
        } else if (this.value === 'Ace'){
            return 11;
        } else {
            return parseInt(this.value, 10);
        }
    }
}

class Deck {
    constructor() {
        this.cards = this.createDeck();
        this.shuffleDeck();
        this.numberOfCards = this.cards.length;
    }

    createDeck() {
        const colors = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        const deck = [];

        for (const color of colors) {
            for (const value of values) {
                const card = new Card(color, value);
                deck.push(card);
            }
        }
        return deck;
    }

    resetDeck() {
        this.cards = this.createDeck();
        this.numberOfCards = this.cards.length;
        this.shuffleDeck();
    }

    shuffleDeck() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    drawCard() {
        if (this.numberOfCards > 0) {
            const card = this.cards.pop();
            this.numberOfCards--;
            return card;
        } else {
            console.log("Kortleken är tom.");
            return null;
        }
    }

    printDeck() {
        console.log("Kortlek:");
        console.log(this.cards);
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = [];
    }

    drawCard(deck) {
        const card = deck.drawCard(); // Använd drawCard-metoden från Deck
        if (card) {
            this.hand.push(card);
            this.score += card.points;
            console.log(`Antal kort kvar i kortleken: ${deck.numberOfCards}`);
        } else {
            console.log("Inga kort kvar att dra.");
        }
    }

    drawCards(deck, numCards) {
        for (let i = 0; i < numCards; i++) {
            this.drawCard(deck);
        }
    }

    printPlayer() {
        console.log(`${this.name}'s hand:`);
        console.log(this.hand);
        console.log(`${this.name}'s totala poäng: ${this.score}`);
        console.log('\n');
    }

    throwCardDrawNew(Deck){
            if (this.hand.length >= 2) {
                const thrownCards = this.hand.splice(0, 2);
                console.log(`${this.name} kastar ${thrownCards.length} kort:`, thrownCards);
                this.drawCards(Deck, 2);
    
                console.log(`${this.name} har nu ${this.hand.length} kort kvar i handen.`);
            } else {
                console.log(`${this.name} har inte tillräckligt med kort i handen för att slänga.`);
            }
        }
    actionFold (pile) {
        if (this.hand.length > 0) {
            pile.push(...this.hand);
            console.log(`${this.name} folds.`);

            this.hand = [];
            this.score = 0;
        } else {
            console.log(`${this.name} already has an empty hand.`);
        }
    }
    }


    pile = [];
    const myDeck = new Deck();
    myDeck.printDeck();
    
    myDeck.shuffleDeck();
    myDeck.printDeck();
    
    const slim = new Player('Slim');
    const luke = new Player('Luke');
    
    slim.drawCards(myDeck, 5);
    luke.drawCards(myDeck, 5);
    
    myDeck.printDeck();
    slim.printPlayer();
    luke.printPlayer();
    
    slim.throwCardDrawNew(myDeck);
    luke.throwCardDrawNew(myDeck);
    
    myDeck.printDeck();
    slim.printPlayer();
    luke.printPlayer();

    luke.actionFold(pile);