import Masthead from "../components/Masthead"
import Breadcrumbs from "../components/Breadcrumbs"
import Banner from "../components/Banner"

const SocialServices = () => {
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

            <Banner title={'SOCIAL SERVICES'} />
        </main>
    </>
  )
}

export default SocialServices