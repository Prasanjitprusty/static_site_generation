import Link from "next/link";
import getUsers from "../../../services/getUsers"

async function Page() {
    const getUsersList = await getUsers();

    console.warn("users");
    return (
        <div>
            <h1>User List</h1>
            {
                getUsersList.map((item)=>(
                    <div key={item.id}>
                    {/* <h3>Name:{item.name}</h3>
                    <h3>Email:{item.email}</h3>
                    <h3>Phone no:{item.phone}</h3> */}

                    {/* make a Link when you click i will that users _id */}
                    <h3>
                        {/*click on item.name and see in concole.log you get the _id*/ }
                        <Link href={`/users/${item.id}`}>{item.name}</Link> 
                    </h3>

                    </div>
                

            ))
            }
        </div>
    )
}

export default Page;