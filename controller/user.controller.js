const User=require('../model/user.model').usersModel
const bcrypt=require('bcrypt')

const register= async (req,res)=>{
    const { username, password } = req.body;
    try {
        //User Already Exist
        const userExist = await User.findOne({ username })
        console.log(userExist);
        if (userExist)
            throw 'User Already Exist';
        const hashedPassword = await bcrypt.hash(password, 8)
        const user = new User({
            username: username,
            password: hashedPassword
        })
        console.log(user);
        res.status(200).json(await user.save())
    }
    catch (err) {
        return res.status(400).send(err)
    }
}
const login= async (req,res)=>{
    const { username, password } = req.body;
    try {
        console.log(password);
        //User Already Exist
        const userExist = await User.findOne({ username })
        console.log(userExist);
        if (!userExist)
            throw 'User was not found';
            const isMatched = await bcrypt.compare(password,userExist.password)
            console.log(isMatched);
            if (!isMatched)
                throw 'Password Doesn\'t Match'
        res.status(200).json(userExist)
    }
    catch (err) {
        return res.status(400).send(err)
    }
    // const user = await User.findOne({username})
    // console.log(user);
    // if(!user){
    // return res.status(400).send('user found')
    // }
    // const validPassword = await bcrypt.compare(password,user.password)
    // console.log("omri",validPassword);








}

module.exports={register,login}