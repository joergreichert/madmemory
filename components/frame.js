import Head from '../components/head'

export default ({ children }) => (
  <div>
    <Head title="MadMemory" />

    <div className="hero">
      <h1 className="title">MadMemory</h1>
      <p className="description">
        Can you remember it?
            </p>

      {children}

    </div>

    <style jsx>{`
      .hero {
          width: 100%;
          color: #333;
      }
      .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
      }
      .title,
      .description {
          text-align: center;
      }
      @keyframes Loading {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
      }
    `}</style>
  </div>
);