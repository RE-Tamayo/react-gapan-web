import Banner from "../components/Banner"
import Breadcrumbs from "../components/Breadcrumbs"

const News = () => {
  return (
    <>
      <main>
        <div className="container-fluid">
          <Breadcrumbs />
        </div>

        <Banner title={'NEWS'} />
      </main>
    </>
  )
}

export default News