import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  return (
    <div>
      <h1 className="text-4xl my-5 text-center font-bold">User Details</h1>

      <div className="my-5 ">
        <div className="card w-1/2 mx-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Name: {user.name}</h2>
            <p>UserName: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>
              Address: {user.address.suite}, {user.address.street},{" "}
              {user.address.city}
            </p>
            <p>Zip Code: {user.address.zipcode}</p>
            <p>Phone Number: {user.phone}</p>
            <p>Company: {user.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
