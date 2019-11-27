import Link from 'next/link'
import Entry from './entry'

export default ({ label, link }) => (
  <div>
    <Entry>
      <Link href={link}>
        <a className="card">
          <h3>{label}</h3>
        </a>
      </Link>
    </Entry>
  </div>
)