import Masthead from "../components/Masthead"
import Breadcrumbs from "../components/Breadcrumbs"
import Banner from "../components/Banner"

const Infrastructure = () => {
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

            <Banner title={'INFRASTRUCTURE'} />
        </main>
    </>
  )
}

export default Infrastructure