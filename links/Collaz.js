import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from 'next/image'
import { useLinks } from '../context/linkContext'

import image1 from "../public/collaz/1.png";
import image2 from "../public/collaz/2.png";
import image3 from "../public/collaz/3.png";
import image4 from "../public/collaz/4.png";

const Collaz = () => {
    const{openCollaz,setOpenCollaz} = useLinks()
    return (
        <Lightbox
  open={openCollaz}
  close={() => setOpenCollaz(false)}
  slides={[image1, image2, image3, image4]}
  render={{
    slide: (image, offset, rect) => {
      const width = Math.round(Math.min(rect.width, (rect.height / image.height) * image.width));
      const height = Math.round(Math.min(rect.height, (rect.width / image.width) * image.height));

      return (
        <div style={{ position: "relative", width, height }}>
          <Image
            fill
            src={image}
            loading="eager"
            placeholder="blur"
            alt={"alt" in image ? image.alt : ""}
            sizes={
              typeof window !== "undefined"
                ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
                : `${width}px`
            }
          />
        </div>
      );
    }
  }}
/>
        )
    }

export default Collaz