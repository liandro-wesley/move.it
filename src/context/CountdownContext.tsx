import {useState, ReactNode, useContext, useEffect} from 'react';
import { createContext } from 'react';
import { ChallengesContext } from './ChallengeContext';

interface CountdownProviderProps {
    children: ReactNode;
}

interface CountDownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountDown: () => void;
    resetCountDown: () => void;

}

export const CountdownContext = createContext({} as CountDownContextData);

export function CountdownProvider({children} : CountdownProviderProps) {
    const { startNewChallenge, resetChallenge } = useContext(ChallengesContext);
    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setisActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)
    const minutes = Math.floor(time) / 60;
    const seconds = time % 60;
    let countDownTimeout:  NodeJS.Timeout;

    function startCountDown() {
        setisActive(true);
    }
    useEffect(() => {
        if(isActive && time > 0) {
            countDownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if(isActive && time === 0) {
            const challengeBox = document.getElementById('challengeBox');
            setHasFinished(true);
            setisActive(false);
            startNewChallenge();
            (window.innerWidth <= 720) ? challengeBox.scrollIntoView() : null;
        }
    }, [isActive, time])

    function resetCountDown() {
        clearTimeout(countDownTimeout);
        setisActive(false);
        setTime(0.05 * 60);
        setHasFinished(false);
        
    }

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountDown,
            resetCountDown,

        }}>
            {children}
        </CountdownContext.Provider>
    );
}