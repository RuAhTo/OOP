# Poker och Färgkonvertering i JavaScript

Detta projekt fokuserar på att tillämpa objektorienterad programmering i JavaScript, både på det prototypbaserade sättet och det moderna sättet med ES6-klasser. Del 1 handlar om att skapa en klass för färgkonvertering, medan del 2 handlar om att implementera grundlogiken för ett enklare pokerspel med ES6-klasser.

## Del 1 - Color Class

**Användning:**
Prova att använda Color Class genom att fylla i den utkommenterade koden från rad 31 i din källkod. Skriv in en RGB-färg i parantesen `(x, x, x)`, och observera resultatet i konsolen. Du kan även besöka `index.html`-filen i din webbläsare för att se den angivna färgen.

## Del 2 - Poker

**Användning:**
För att använda dessa klasser och genomföra ett exempel på spelet, följ nedanstående steg:

1. Skapa en kortlek och skriv ut den.

    ```javascript
    pile = [];
    const myDeck = new Deck();
    myDeck.printDeck();
    ```

2. Blanda kortleken och skriv ut den igen.

    ```javascript
    myDeck.shuffleDeck();
    myDeck.printDeck();
    ```

3. Skapa spelare och låt dem dra kort.

    ```javascript
    const slim = new Player('Slim');
    const luke = new Player('Luke');
    
    slim.drawCards(myDeck, 5);
    luke.drawCards(myDeck, 5);
    ```

4. Skriv ut kortleken och spelarnas händer.

    ```javascript
    myDeck.printDeck();
    slim.printPlayer();
    luke.printPlayer();
    ```

5. Låt spelarna kasta kort och dra nya.

    ```javascript
    slim.throwCardDrawNew(myDeck);
    luke.throwCardDrawNew(myDeck);
    ```

6. Skriv ut kortleken och spelarnas uppdaterade händer.

    ```javascript
    myDeck.printDeck();
    slim.printPlayer();
    luke.printPlayer();
    ```

7. Låt en spelare göra en fold (slänga alla kort i potten).

    ```javascript
    luke.actionFold(pile);
    ```

8. Spelet är klart, och resultatet kan observeras genom att skriva ut kortleken och spelarnas händer.

    ```javascript
    myDeck.printDeck();
    slim.printPlayer();
    luke.printPlayer();
    ```

9. Prova själv! Använd de olika metoder och utforska spelet med dina egna interaktioner.
