
import bcrypt from 'bcryptjs';

 
const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Mkadem Mariem ',
        email: 'mariem@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Mohamed Sala',
        email: 'mohamed@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users;