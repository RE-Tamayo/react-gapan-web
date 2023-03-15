import Banner from "../components/Banner"
import Breadcrumbs from "../components/Breadcrumbs"

const Tourism = () => {
  return (
    <>
      <main>
        <div className="container-fluid">
          <Breadcrumbs />
        </div>

        <Banner title={'TOURISM'} />
      </main>
    </>
  )
}

export default Tourism