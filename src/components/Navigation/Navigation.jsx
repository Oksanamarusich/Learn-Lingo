import { Link, NavLink } from "react-router-dom"

export const Navigation = () => {
    return <>
     <Link>LearnLingo</Link>
      <ul>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>Teachers</NavLink>
        </li>
      </ul></>
}