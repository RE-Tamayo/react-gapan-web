import Breadcrumbs from "../components/Breadcrumbs"
import Masthead from "../components/Masthead"

const BidsAwards = () => {
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
      </main>
    </>
  )
}

export default BidsAwards