import Masthead from "../components/Masthead"
import Breadcrumbs from "../components/Breadcrumbs"
import Banner from "../components/Banner"

const EconomicSector = () => {
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

            <Banner title={'ECONOMIC SECTOR'} />
        </main>
    </>
  )
}

export default EconomicSector