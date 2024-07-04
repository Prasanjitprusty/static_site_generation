'use client';

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import getUsers from "../../../../services/getUsers"; // Adjust the path as needed

export default function UserDetailPage() {
    const [userData, setUserData] = useState(null);
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get('id'); // Extract the 'id' parameter from the URL

    useEffect(() => {
        if (id) {
            const fetchUser = async () => {
                const getUsersList = await getUsers();
                const user = getUsersList.find((user) => user.id === parseInt(id));
                setUserData(user);
            };
            fetchUser();
        }
    }, [id]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Detail Page</h1>
            <h4>ID: {userData.id}</h4>
            <h4>Name: {userData.name}</h4>
            <h4>Email: {userData.email}</h4>
            <h4>Phone: {userData.phone}</h4>
        </div>
    );
}
