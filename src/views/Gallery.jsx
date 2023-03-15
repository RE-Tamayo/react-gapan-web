import Banner from "../components/Banner"
import Breadcrumbs from "../components/Breadcrumbs"
import Masthead from "../components/Masthead"

const Gallery = () => {
  return (
    <>
      <header>
        <Masthead />
        <hr />
      </header>

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