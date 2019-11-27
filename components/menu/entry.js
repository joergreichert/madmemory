export default ({ children }) => (
  <div>
    <div className="entryRow">
      {children}
    </div>
    <style jsx>{`
      .entryRow {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
      }
    `}</style>
  </div>
)