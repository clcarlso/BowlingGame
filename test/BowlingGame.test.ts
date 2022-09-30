import { Game } from './../src/Game/Game';

describe("Bowling Game Kata Test Cases", () => {

    let g: Game;


    function rollMany(n:number, pins:number){
        for(let i=0;i<n;i++){
            g.roll(pins);
        }
    }

    function rollSpare(){
        g.roll(5);
        g.roll(5);
    }

    function rollStrike(){
        g.roll(10);
    }

    beforeEach(()=> {
        g = new Game();
    });

    test("example test case", () => {
        let answer = 10 + 5;
      expect(answer).toBe(15);
    });


    test("test 1 - Roll a ball to knock a pin", () => {

        rollMany(20,0);

        let score = g.score();
        expect(score).toBe(0);
    });
    test("test 2 - Score adds up pins to 20", () => {

        rollMany(20,1);

        let score = g.score();
        expect(score).toBe(20);
    });
    test("test 3 - Spare mechanic", () => {

        rollSpare();
        g.roll(3);
        rollMany(17,0);

        let score = g.score();
        expect(score).toBe(16);
    });
    test("test 4 - Strike mechanic", () => {

        rollStrike();
        g.roll(3);
        g.roll(4);
        rollMany(16,0);

        let score = g.score();
        expect(score).toBe(24);
    });
    test("test 5 - Perfect game", () => {

        rollMany(12,10);

        let score = g.score();
        expect(score).toBe(300);
    });
    

});





  export {};