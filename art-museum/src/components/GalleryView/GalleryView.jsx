import { useParams, Navigate } from "react-router-dom"

export default function GalleryView({galleries}) {
    const { galleryId } = useParams()
    const selectedGallery = galleries.find((gallery) => gallery.id === +galleryId)
    if (!selectedGallery) return (<Navigate to='/' />)
  return (
    <div>
        <h1>Hello from GalleryView</h1>
    </div>
  )
}
