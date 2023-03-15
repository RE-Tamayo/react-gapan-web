import Breadcrumbs from "../components/Breadcrumbs"
import Banner from "../components/Banner"

const Profile = () => {
  return (
    <>
        <main>
            <div className="container-fluid">
                <Breadcrumbs />
            </div>

            <Banner title={'PROFILE'} />
        </main>
    </>
  )
}

export default Profile