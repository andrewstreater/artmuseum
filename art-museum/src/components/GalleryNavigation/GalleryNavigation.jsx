import { NavLink } from "react-router-dom"

export default function GalleryNavigation({galleries}) {
    console.log(galleries)
  return (
    <div>
        <h2>Galleries</h2>
        <nav>
            {galleries && galleries.map((gallery) => {
                return(
                    <li key={`${gallery.id}`}>
                        <NavLink to={`${gallery.id}`}>
                            {gallery.name}, id: {gallery.id}
                        </NavLink>
                    </li>
                )
            })
            }
        </nav>
    </div>
  )
}
