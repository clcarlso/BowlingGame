

export class Game {

    private rolls:number[] = new Array<number>(21); 
    private currentRoll: number = 0;

    constructor(){}

    public roll(pins: number){
        this.rolls[this.currentRoll++] = pins;
    }

    public score():number {
        let score: number = 0;
        let frameIndex = 0;
        for(let frame =0; frame < 10;frame++){

            if(this.isStrike(frameIndex)){
                score = score + 10 + this.strikeBonus(frameIndex);
                frameIndex ++;
            }

            else if(this.isSpare(frameIndex)){
                score = score + 10 + this.spareBonus(frameIndex);
                frameIndex += 2;
            }
            else{
                score = score + this.rolls[frameIndex] + this.rolls[frameIndex+1];
                frameIndex += 2;
            }
            
        }
        return score;
    } 


    private isSpare(frameIndex:number):boolean {
        return this.rolls[frameIndex] + this.rolls[frameIndex+1] === 10;
    }

    private isStrike(frameIndex:number):boolean {
        return this.rolls[frameIndex] === 10;
    }
    private spareBonus(frameIndex:number){
        return this.rolls[frameIndex+2]
    }
    private strikeBonus(frameIndex:number){
        return this.rolls[frameIndex+1] + this.rolls[frameIndex+2]
    }
}