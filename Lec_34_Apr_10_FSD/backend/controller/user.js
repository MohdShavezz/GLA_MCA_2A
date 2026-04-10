import { User } from "../model/User.js"
import bcrypt, { hash } from 'bcrypt'
import jwt from 'jsonwebtoken'
import { transporter } from "../utils/mailer.js";

export async function register(req, res) {
    try {
        const { name, email, password } = req.body;

        //check if already registered 
        const user = await User.findOne({ email })
        if (user) {
            return res.status(200).send('already register please login.')
        }

        const hashedPass = await bcrypt.hash(password, 10)

        //store user in db
        const u = await User.insertOne({ name, email, password: hashedPass })
        res.status(201).json(u)

    } catch (error) {
        console.log('error in register', error)
    }
}
export async function login(req, res) {
    try {
        const { email, password } = req.body;

        // check if already registered 
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(200).send('please register first.')
        }

        // compare password
        const isSame = await bcrypt.compare(password, user.password) //boolean
        if (!isSame) {
            return res.status(200).send('invalid credentials.')
        }

        // token jwt
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({
            token,
            user
        })

    } catch (error) {
        console.log('error in register', error)
    }
}
export async function forgotPassword(req, res) {
    try {
        const { email } = req.body;

        // check if already registered 
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(200).send('please register first.')
        }

        // token jwt
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        const message = `
            <h3>Passwrod Reset: </h3>
            <p>Click below to reset password </p>
            <p>Token: ${token} </p>
        `
        transporter.sendMail({
            to: user.email,
            subject: 'reset password',
            html: message
        })

        return res.status(200).send('reset email sent.')

    } catch (error) {
        console.log('error in forgotPassword', error)
    }
}
export async function resetPassword(req, res) {
    try {
        const { token, password: newPass } = req.body;

        // check token 
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded._id)
        if (!user) {
            return res.status(404).send('user not found')
        }

        const hashedPass = await bcrypt.hash(newPass, 10)
        user.password = hashedPass
        await user.save()

        return res.status(200).send('password reset sucessfuly.')

    } catch (error) {
        console.log('error in resetPassword', error)
    }
}
export async function getAllUsers(req, res) { //restric
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        console.log('error in getAllUsers', error)
    }
}
export async function getUserById(req, res) {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).json(user)

    } catch (error) {
        console.log('error in getUserById', error)
    }
}