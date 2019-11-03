import Frame from '../../components/frame';
import { data } from '../../data/woerterbuch.json'
import MenuHeading from '../../components/menu/heading'
import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux'

const GamePage = () => {
    const level = useSelector(state => state.settings ? state.settings.level : 'easy') 
    let wordCount;
    switch(level) {
        case 'medium': wordCount=10; break;
        case 'hard': wordCount=15; break;
        default: wordCount=5
    }
    const roundOne = []
    for (var i=0; i<wordCount; i++) {
        var size = data.length
        var randomIndex = Math.floor((Math.random() * size));
        roundOne.push(data[randomIndex])
        data.splice(randomIndex, 1);    
    }
    var randomExtractIndex = Math.floor((Math.random() * wordCount));
    var randomInsertIndex = Math.floor((Math.random() * wordCount));
    var roundOneElement = roundOne[randomExtractIndex];
    const roundTwo = []
    for (var i=0; i<wordCount; i++) {
        if (randomInsertIndex == i) {
            roundTwo.push(roundOneElement)
        } else {
            var size = data.length
            var randomIndex = Math.floor((Math.random() * size));
            roundTwo.push(data[randomIndex])
            data.splice(randomIndex, 1);        
        }
    }
    console.log(roundOne)
    const delay = 3000; // 3 sec
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((idx) => {
                const newIdx = idx + 1
                if (newIdx == (wordCount*2)-1) {
                    clearInterval(interval)
                }
                return newIdx
            });
        }, delay);
        return () => clearInterval(interval);
      }, []);  
    const handleButton = (event) => {
        const input = document.getElementById("dupWord")
        if (input.value == roundOneElement) {
            document.getElementById("resultCheck").innerHTML = " Korrekt"
        } else {
            document.getElementById("resultCheck").innerHTML = " Falsch, " + roundOneElement + " war doppelt"
        }
    };
    return (
        <Frame>
            <MenuHeading header={"Runde " + (index < wordCount ? 1 : 2)} />
            <div className="card">
                <h3>{index < wordCount ? roundOne[index] : roundTwo[index-wordCount]}</h3>
            </div>
            <div style={{visibility: index >= (wordCount*2)-1 ? 'visible' : 'hidden'}}>
                <form>
                    {"Doppeltes Wort: "}<input id={"dupWord"} type={"text"} name={"dupWord"} />
                    <label id={"resultCheck"}></label>
                    <br/><br/>
                    <button type="button" onClick={(event) => handleButton(event)}>Prüfen</button>
                    
                </form> 
            </div>
            <style jsx>{`
            .card {
                max-width: 880px;
                margin: 80px auto 40px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                padding: 18px 18px 24px;
                text-align: center;
                vertical-align: center;
                text-decoration: none;
                font-family: Arial, Helvetica, sans-serif;
                color: #434343;
            }
            .card h3 {
                margin: 0;
                color: #067df7;
                font-size: 72px;
            }
        `}</style>            
        </Frame>
    );
}
export default connect()(GamePage)