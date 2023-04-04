import { useParams } from "react-router-dom";

export default function CategoryDetailsPage() {
  const params = useParams();
  console.log(">> PARAMS", params);

  return (
    <>
      <div>Burası category details page</div>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </>
  );
}
