import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const fetchdata = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setUser(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="px-3">
      <h1 className="text-4xl my-5 text-center font-bold">All Users</h1>
      <div className=" mx-auto my-5 grid gap-5 lg:grid-cols-3 ">
        {users.map((user) => (
          <div key={user.id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Hello {user.name}</h2>
                <p>Street: {user.address.street} </p>
                <p>City: {user.address.city} </p>
                <Link to={`/userdetails/${user.id}`}>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary my-2 mx-auto">
                      Details
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
