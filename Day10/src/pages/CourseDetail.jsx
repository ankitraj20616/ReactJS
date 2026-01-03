import { useParams } from "react-router-dom";

export const CourseDetail = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Course Detail...</h1>
    </div>
  );
};
