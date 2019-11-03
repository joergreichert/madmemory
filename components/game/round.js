import MenuHeading from '../../components/menu/heading'

export default ({roundOne, roundOneElement, roundTwo, index}) => {
    const wordCount = roundOne.length
    const handleButton = () => {
        const input = document.getElementById("dupWord")
        if (input.value == roundOneElement) {
            document.getElementById("resultCheck").innerHTML = " Korrekt"
        } else {
            document.getElementById("resultCheck").innerHTML = " Falsch, " + roundOneElement + " war doppelt"
        }
    };
    return (
        <div>
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
        </div>
    );    
}