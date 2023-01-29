class Card {
constructor(suitType,cardValue){
    this.suitType = suitType;
    this.cardValue = cardValue;
    let suits = [clubs,spades,hearts,diamonds]; 
    let cardNames = [two,three,four,five,six,seven,eight,nine,ten,jack,queen,king,ace];
    let two = 2;
    let three= 3;
    let four = 4;
    let five = 5;
    let six = 6;
    let seven = 7;
    let eight = 8;
    let nine = 9;
    let ten = 10;
    let jack = 11;
    let queen = 12;
    let king = 13;
    let ace =14;

    let cardNumber
}


}

class Player {
    constructor(name,score){
        this.name = name;
        this.score = score;
        
    }
}
class Deck {
            constructor(cards){
                this.cards.push(2 + "of" + diamonds);
            this.cards.push(3 + "of" + diamonds);
            this.cards.push(4 + "of" + diamonds);
            this.cards.push(5 + "of" + diamonds);
            this.cards.push(6 + "of" + diamonds);
            this.cards.push(7 + "of" + diamonds);
            this.cards.push(8 + "of" + diamonds);
            this.cards.push(9 + "of" + diamonds);
            this.cards.push(10 + "of" + diamonds);
            this.cards.push(jack + "of" + diamonds);
            this.cards.push(queen + "of" + diamonds);
            this.cards.push(king + "of" + diamonds);
            this.cards.push(ace + "of" + diamonds);
            this.cards.push(2 + "of" + hearts);
            this.cards.push(3 + "of" + hearts);
            this.cards.push(4 + "of" + hearts);
            this.cards.push(5 + "of" + hearts);
            this.cards.push(6 + "of" + hearts);
            this.cards.push(7 + "of" + hearts);
            this.cards.push(8 + "of" + hearts);
            this.cards.push(9 + "of" + hearts);
            this.cards.push(10 + "of" + hearts);
            this.cards.push(jack + "of" + hearts);
            this.cards.push(queen + "of" + hearts);
            this.cards.push(king + "of" + hearts);
            this.cards.push(ace + "of" + hearts);
            this.cards.push(2 + "of" + clubs);
            this.cards.push(3 + "of" + clubs);
            this.cards.push(4 + "of" + clubs);
            this.cards.push(5 + "of" + clubs);
            this.cards.push(6 + "of" + clubs);
            this.cards.push(7 + "of" + clubs);
            this.cards.push(8 + "of" + clubs);
            this.cards.push(9 + "of" + clubs);
            this.cards.push(10 + "of" + clubs);
            this.cards.push(jack + "of" + clubs);
            this.cards.push(queen + "of" + clubs);
            this.cards.push(king + "of" + clubs);
            this.cards.push(ace + "of" + clubs);
            this.cards.push(2 + "of" + spades);
            this.cards.push(3 + "of" + spades);
            this.cards.push(4 + "of" + spades);
            this.cards.push(5 + "of" + spades);
            this.cards.push(6 + "of" + spades);
            this.cards.push(7 + "of" + spades);
            this.cards.push(8 + "of" + spades);
            this.cards.push(9 + "of" + spades);
            this.cards.push(10 + "of" + spades);
            this.cards.push(jack + "of" + spades);
            this.cards.push(queen + "of" + spades);
            this.cards.push(king + "of" + spades);
            this.cards.push(ace + "of" + spades);
           
           
            }
                 shuffle(){
                        let currentIndex=array.length , randomIndex;
            }
                deal(){
                    let player1hand = [];
                    let player2hand = [];
                    for(let i=0; i<this.Deck.length;i++){
                        player1hand.push[i];
                        i++;
                        playerhand2.push[i];
                    }
                }
        
class warGame {
        constructor(){
            this.player1 = player1;
            this.player2 = player2;
            this.scores = [0,0];
            this.cards = [];
          
          
           
           

            //both players score will start at 0, there are always going to be only two players structured into the game,I went ahead and included evry cards specific value with their properties being up above in card.
        }
        play(){
            for(let i = 0; i< this.player1hand.length && i<this.player2hand.length;i++){
                this.player1score = 0;
                this.player2score = 0;
                if(this.player1hand[i] == this.player2hand[i]){
                    console.log("These cards tie.");
                }
                if(this.player1hand[i] > this.player2hand[i]){
                    this.player1score += 0;
                    this.player2hand[i]+= this.player1hand[i];

                }
                    
                    else if( this.player1hand[i] < this.player2hand[i]) 
                    this.player2hand += 0;
                    this.player1hand[i]+= this.player2hand;
                }
               

                }

            }
           
            let winner= player1score == 52 || player2score == 52;
            console.log(winner + "is the winner!");
        
    
        
