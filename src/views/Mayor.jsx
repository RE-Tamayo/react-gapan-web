import Breadcrumbs from "../components/Breadcrumbs"
import Banner from "../components/Banner"

const Mayor = () => {
  return (
    <>
        <main>
            <div className="container-fluid">
                <Breadcrumbs />
            </div>

            <Banner title={'MAYOR'} />
        </main>
    </>
  )
}

export default Mayor