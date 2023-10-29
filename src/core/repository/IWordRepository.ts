export default interface IWordsRepository{
    getWordList(): string[];
    saveWord(word: string): void;
    deleteWord(word: string): void;
}