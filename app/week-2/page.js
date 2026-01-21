import StudentInfo from './studentinfo.js'; // <--- This matches "Import the StudentInfo component"

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <StudentInfo /> {/* <--- This matches "Render the StudentInfo component below the heading" */}
    </main>
  );
}