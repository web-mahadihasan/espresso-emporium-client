import { useState } from "react";
import { useLoaderData } from "react-router";

const Users = () => {
    const userData = useLoaderData();
    const [users, setUers] = useState(userData)
    console.log(userData)

    return (
        <div className="max-w-7xl mx-auto px-4 my-10">
            <h3 className="text-5xl font-rancho text-center">
                Our Register user is here
            </h3>

            {/* User table  */}
            <div className="overflow-x-auto my-10">
                <table className="table font-raleway">
                {/* head */}
                <thead>
                    <tr className="text-base">
                        <th>Sl. No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Last Sign in</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row */}
                    {
                        users?.map((user, idx) => 
                            <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.gender}</td>
                                <td>{user?.lastSignInTime}</td>
                                <td>
                                    <button>E</button>
                                    <button>R</button>
                                </td>
                            </tr>)
                    }
                    {/* <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    </tr> */}
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
