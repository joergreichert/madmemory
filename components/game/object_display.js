import MenuHeading from '../menu/heading'

export default ({roundNumber, word}) => {
    return (
        <div>
            <MenuHeading header={"Runde " + roundNumber} />
            <div className="object_display">
                <h3>{word}</h3>
            </div>
            <style jsx>{`
            .object_display {
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
            .object_display h3 {
                margin: 0;
                color: #067df7;
                font-size: 72px;
            }
        `}</style>
        </div>
    );
}