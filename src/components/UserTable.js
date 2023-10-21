import {useState, useEffect} from 'react';

function UserTable()
{
    var [users, setUsers] = useState([]);

    var fetchData = () =>
    {
        fetch('https://dummyjson.com/users')
        .then((response) => response.json())
        .then((data) => {
            setUsers(data.users);
        })
        .catch((error) => console.error('Error fetching data', error));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="user-table">
            <table id="table">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Profile Pic</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>E-mail</th>
                        <th>Username</th>
                        <th>Domain</th>
                        <th>IP</th>
                        <th>University</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td><img src={user.image} width='50px'></img></td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.gender}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.domain}</td>
                        <td>{user.ip}</td>
                        <td>{user.university}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable;