import Banner from "../components/Banner"
import Breadcrumbs from "../components/Breadcrumbs"

const Gallery = () => {
  return (
    <>
      <main>
        <div className="container-fluid">
          <Breadcrumbs />
        </div>

        <Banner title={'GALLERY'} />
      </main>
    </>
  )
}

export default Gallery