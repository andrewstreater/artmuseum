import { NavLink } from "react-router-dom"
import './GalleryNavigation.css'

export default function GalleryNavigation({galleries}) {
  return (
    <div>
        <h2>Galleries</h2>
        <nav>
        <li>
            <NavLink to='/'>Home</NavLink>
            </li>
            {galleries && galleries.map((gallery) => {
                return(
                    <li key={`${gallery.id}`}>
                        <NavLink to={`${gallery.id}`}>
                            {gallery.name}
                        </NavLink>
                    </li>
                )
            })
        }
        </nav>
    </div>
  )
}
