import IWordsRepository from "./IWordRepository";

export default class WordListMemory implements IWordsRepository{
    private wordlist: string[];
    constructor(wordlist: string[]){
        this.wordlist = wordlist;
    }

    public getWordList(): string[] {
        return this.wordlist;
    }

    public saveWord(word: string): void {
        this.wordlist.push(word);
    }

    public deleteWord(word: string): void {
        this.wordlist.filter((element: string) => {element != word})
    }
}