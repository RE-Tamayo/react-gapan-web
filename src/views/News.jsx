import Banner from "../components/Banner"
import Breadcrumbs from "../components/Breadcrumbs"
import Masthead from "../components/Masthead"

const News = () => {
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

        <Banner title={'NEWS'} />
      </main>
    </>
  )
}

export default News