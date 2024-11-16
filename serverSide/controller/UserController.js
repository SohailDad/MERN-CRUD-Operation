import UserModels from '../models/user.js';


const Createuser = async (req, res) => {

    try {
        const { name, fathername, email, phone } = req.body;

        const NewUser = new UserModels({
            name, fathername, email, phone
        })
        await NewUser.save();
        res.status(200).json({success:true,Message:'User Created Successfully',NewUser});

    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,Message:'internal server error',NewUser});

    }

}


const GetUser = async (req, res) =>{
    try{
        const user  = await UserModels.find();
        if(!user){
            return res.status(404).json({success: false,message: 'user not found'})
            
        }
        res.status(200).json({success: true, user})
    }catch(error){
        console.log(error);
        return res.status(500).json({success: false, message: 'internal server error'})
    }
}


// Update user
const UpdateUser = async (req, res)=>{
    try {
        UserId = req.params.Id
        const updatedUser = await UserModels.findByIdAndUpdate(UserId, req.body, {new:true})

        if(!updatedUser){
            return res.status(404).json({success: false,message: 'user not found'})
        }
        res.status(200).json({success: true, message:'User updated successfully',updatedUser})
    } catch (error) {
        console.log(error);
    }
}

// 26:51

export { Createuser, GetUser, UpdateUser }