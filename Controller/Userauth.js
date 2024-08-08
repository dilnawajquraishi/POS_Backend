let userschema=require('../Models/User')
let bcrypt=require('bcryptjs')

// let newuser=async(req,res)=>{
//     let {name,email,password,confirmpassword,status}=req.body
//     try {
//         let  finduser=await  userschema.find({name:name})
//     } catch (error) {
        
//     }
// }



let usersignup=async(req,res)=>{
    let {name,password,email,confirmpassword,status,phone}=req.body;
try {
    let finduser=await userschema.findOne({email})
    if(!finduser){
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        let newuser=await userschema.create({
            name:name,
            email:email,
            password:password,
            confirmpassword:confirmpassword,
            phone:phone,
            status:status
        })
        return res.status(200).json({ success: true, msg: "user created successfully",newuser })

    }

    else{
        return res.status(500).json({ success: false, msg: "user already exist" })

    }
} catch (error) {
    return res.status(500).json({ success: false, msg: "error in creating user", error: error.message })
    
}
}


            //   *********************************************Login*********************************************


            const loginUser = async (req, res) => {
                let { email, password } = req.body;
            
                try {
                    let userDetails = await userschema.findOne({ email })
                    console.log(userDetails)
                    if (userDetails) {
                        let comparePassword = bcrypt.compare(password, userDetails.password);
                        if (comparePassword) {
                            return res.status(200).json({ success: true, msg: "user logged in successfully", userDetails })
                        }
                        else {
                            return res.status(200).json({ success: false, msg: "Wrong password" })
                        }
                    }
                    else {
                        return res.json({ success: false, msg: "user not found" })
                    }
                } catch (error) {
                    return res.status(500).json({ success: false, msg: "error in log in user", error: error.message })
                }
            
            }


            // ****************************************************Find_All_User******************************************************

            let findallproduct=async(req,res)=>{
                // let _id=req.params._id
                let {name}=req.body
                try {
                    let findproductid=await userschema.find({})
                    if(findproductid){
                    return res.status(200).json({ success: true, msg: "all users", findproductid })
            
                    }
                } catch (error) {
                    return res.status(500).json({ success: false, msg: "Get all Product", findproductid })
                    
                }
            }


            module.exports={
                usersignup,
                loginUser,
                findallproduct
            }

            




