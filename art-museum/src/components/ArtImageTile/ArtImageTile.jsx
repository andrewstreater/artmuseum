import { useParams } from "react-router-dom"



export default function ArtImageTile({art}) {
const artId = useParams();
const foundGallery = art.find((record) => {

});

  return (
    <div>ArtImageTile</div>
  )
}
