import IWordsRepository from "../repository/IWordRepository";

export default class Game{
    private words: IWordsRepository
    private word: string = "";
    private gamestatus: boolean = false;
    private playerPoints: number = 0;
    private isRunning: boolean = false;
    constructor(words: IWordsRepository){
        this.words = words;
    }

    public start(){
        this.isRunning = true;
        this.setWord();
    }

    public stop(){
        this.isRunning = false;
    }

    public gameIsRunning(): boolean{
        return this.isRunning;
    }

    public getGameStatus(): boolean{
        return this.gamestatus;
    }

    protected setGameStatus(status: boolean){
        this.gamestatus = status;
    }

    public setPlayerPoints(value: number): void{
        this.playerPoints += value;
    }

    public getPlayerPoints(): number{
        return this.playerPoints;
    }

    public getCurrentWord(): string{
        return this.word;
    }

    private shuffleWord(word: string): string {
        const wordArray = word.split(''); 
        for (let i = wordArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; 
        }
        return wordArray.join(''); 
    }

    public getRandomWord(): string{
        return this.shuffleWord(this.word);
    }

    public setWord(): void{
        const randomIndex = Math.floor(Math.random() * this.words.getWordList().length);
        this.word = this.words.getWordList()[randomIndex]
    }

    public attempt(word: string){
        if(this.getCurrentWord() === word){
            console.log("cai no resultado");
            this.setPlayerPoints(1);
            this.setGameStatus(true);
            this.setWord();
            console.log(this.getCurrentWord());
        }
    }
}