import Masthead from "../components/Masthead"
import Breadcrumbs from "../components/Breadcrumbs"
import Banner from "../components/Banner"

const HumanResources = () => {
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

            <Banner title={'HUMAN RESOURCES'} />
        </main>
    </>
  )
}

export default HumanResources