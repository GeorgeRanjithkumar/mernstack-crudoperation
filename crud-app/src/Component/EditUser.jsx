import { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';

const initialValue = {
    name: '',
    lastname: '',
    email: '',
    phone: '',
    role: '',
    address: '',
    admin: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, lastname, email, phone, role, address, admin } = user;
    const { id } = useParams();

    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async () => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async () => {
        const response = await editUser(id, user);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Lastname</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='lastname' value={lastname} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            {/* <FormControl>
                <InputLabel htmlFor="my-input">Role</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='role' value={role} id="my-input" aria-describedby="my-helper-text" />
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
                <Input onChange={(e) => onValueChange(e)} name='address' value={address} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;