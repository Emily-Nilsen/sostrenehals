import { useRef } from 'react'
import { Video, CloudinaryContext } from 'cloudinary-react'

export function VideoPlayer({ publicId }) {
  const videoRef = useRef()

  return (
    <CloudinaryContext cloud_name="dt3k2apqd">
      <div className="">
        <Video
          playsinline
          muted
          autoPlay
          publicId={publicId}
          width="100%"
          // controls
          innerRef={videoRef}
          fluid
          posterOptions={{
            publicId:
              'Emily%20Nilsen/videos/S%C3%B8strene_Hals_mobile_hero_oygcoz',
          }}
          // videoJS={{}}
        />
      </div>
    </CloudinaryContext>
  )
}
