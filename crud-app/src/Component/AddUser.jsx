import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const initialValue = {
    name: '',
    lastname: '',
    email: '',
    password:'',
    phone: '',
    role: '',
    address: '',
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, lastname, email, phone, role, address, password } = user;

    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Lastname</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='lastname' value={lastname} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>
            <div>Email Format:Example@mail.com</div>
            <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input type='password' onChange={(e) => onValueChange(e)} name='password' value={password} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input type='number' onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            {/* <FormControl>
                <InputLabel htmlFor="my-input">Role</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='role' value={role} id="my-input" />
            </FormControl> */}
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                    name='role'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="role"
                    onChange={(e) => onValueChange(e)}
                >
                    <MenuItem value={"admin"} name='admin'>admin</MenuItem>
                    <MenuItem value={"manager"} name='manager'>manager</MenuItem>
                    <MenuItem value={"lead"} name='lead'>lead</MenuItem>
                    <MenuItem value={"developer"} name='developer'>developer</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Address</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='address' value={address} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;