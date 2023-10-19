import CourseStatus from "../CourseStatus";
import ModuleList from "../Modules/ModuleList";

function Home() {
  return (
    <div className="row">
      <div className="col-9">
        <ModuleList />
      </div>
      <div className="col-3">
        <CourseStatus/>
      </div>
    </div>
  );
}
export default Home;
