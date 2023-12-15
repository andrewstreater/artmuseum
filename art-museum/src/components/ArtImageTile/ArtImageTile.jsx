import { useParams } from "react-router-dom"



export default function ArtImageTile({art}) {
const { artId, galleryId} = useParams();
const foundGallery = art.find((record) => {
  record.id === +galleryId
});

const something = foundGallery.objects

const artArr = []

for (let i = 0; i < something.length; i++) {
  let image = something[i].images

}

  return (
    <div>hi</div>
  )
}
