import Banner from "../components/Banner";
import Breadcrumbs from "../components/Breadcrumbs";

const Directory = () => {
  return (
    <>
      <main>
        <div className="container-fluid">
          <Breadcrumbs />
        </div>

        <Banner title={"DIRECTORY"} />
      </main>
    </>
  );
};

export default Directory;
