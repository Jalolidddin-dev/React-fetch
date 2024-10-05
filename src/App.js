import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading";

let API = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getUserHadler = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(API);
      const data = await response.json();

      setUsers(data);

      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getUserHadler();
  }, []);

  //   const [count, setCount] = useState(0);

  //   const increment = () => {
  //     setCount(count + 1);
  //   };

  return (
    <div className="users_box">
      {!isLoading ? (
        <div>
          {users && users.length > 0 && !isError ? (
            users.map((user) => (
              <div key={user.id} className="user_box">
                <div>
                  <h1>User Name :</h1>
                  <span>{user.name}</span>
                </div>
                <div>
                  <h2>User Email:</h2>
                  <span>{user.email}</span>
                </div>
                <div>
                  <h2>User address:</h2>
                  <span>{user.address.city}</span>
                </div>
              </div>
            ))
          ) : (
            <div>
              <h1>User not Found</h1>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}

      {/* <div>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
      </div> */}
    </div>
  );
}

export default App;
