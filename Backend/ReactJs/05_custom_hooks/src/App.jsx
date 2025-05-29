import "./App.css";
import useFetch from "../hooks/useFetch";
function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  console.log("Data fetched: ", data);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 text-[#13072E]">
          Unified Mentor
        </h1>
        <h2 className="text-2xl font-bold mb-4 text-[#13072E]">
          Data Fetching App
        </h2>
        {loading && <p className="text-lg text-gray-500">Loading...</p>}
        {error && <p className="text-lg text-red-500">Error: {error}</p>}
        {data && (
          <ul className="bg-white shadow-md rounded p-6 space-y-2 w-72">
            {data.map((item) => (
              <li className="border-b last:border-none py-1 text-gray-700">
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
