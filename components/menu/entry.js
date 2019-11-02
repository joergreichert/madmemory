export default ({children}) => (
    <div>
        <div className="row">
            {children}
        </div>
        <style jsx>{`
            .row {
                max-width: 880px;
                margin: 80px auto 40px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
        `}</style>
    </div>
)