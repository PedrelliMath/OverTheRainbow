import { useEffect, useState } from "react";
import Game from "../core/game/Game";
import WordListMemory from "../core/repository/WordListMemory";

const wordList = ["matheus", "eduardo", "pedrelli", "mauricio", "lucas", "vitoria"];
const wordListRepo = new WordListMemory(wordList);
const game = new Game(wordListRepo);

export default function GameComponent() {
    const [start, setStart] = useState(false);
    const [input, setInput] = useState("");
    const [currentWord, setCurrentWord] = useState(game.getRandomWord());

    function handleClick() {
        if (game.gameIsRunning()) {
            game.stop();
        } else {
            game.start();
        }
        setStart(!start);
    }

    function handleKeyDown(e: { key: string }) {
        if (e.key === "Enter") {
            if (game.gameIsRunning()) {
                const guessedWord = input.trim();
                if (game.getCurrentWord() === guessedWord) {
                    game.attempt(guessedWord);
                    setInput("");
                }
            }
        }
    }

    useEffect(() => {
        if (game.gameIsRunning()) {
            setCurrentWord(game.getRandomWord());
        }
    }, [game.gameIsRunning(), game.getCurrentWord()]);

    return (
        <div className='game-components'>
            <h1 className='random-word'>{game.gameIsRunning() ? currentWord : "Press Start"}</h1>
            {game.gameIsRunning() ? (
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    type="text"
                    id="nome"
                    name="nome"
                />
            ) : (
                <></>
            )}
            <p className='start-button'><a onClick={handleClick}>{game.gameIsRunning() ? "quit" : "start"}</a></p>
            <h4 className='points'>{game.getPlayerPoints()}</h4>
            <iframe id="soundcloud-player" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1072486789&color=%23343c34&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
    );
}
