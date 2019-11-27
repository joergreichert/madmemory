import Head from '../components/head'
import "../styles.css"

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
  </div>
);