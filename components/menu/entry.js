import Link from 'next/link'

export default ({label, link}) => (
    <div>
        <p className="row">
            <Link href={link}>
                <a className="card">
                    <h3>{label}</h3>
                </a>
            </Link>
        </p>
        <style jsx>{`
            .row {
                max-width: 880px;
                margin: 80px auto 40px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
            .card {
                padding: 18px 18px 24px;
                width: 220px;
                text-align: center;
                text-decoration: none;
                font-family: Arial, Helvetica, sans-serif;
                color: #434343;
                border: 1px solid #9b9b9b;
            }
            .card:hover {
                border-color: #067df7;
            }
            .card h3 {
                margin: 0;
                color: #067df7;
                font-size: 18px;
            }
            .card p {
                margin: 0;
                padding: 12px 0 0;
                font-size: 13px;
                color: #333;
            }
        `}</style>
    </div>
)