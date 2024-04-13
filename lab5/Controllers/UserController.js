const UserValid = require("../Utils/UserValidation")
const UserModel = require("../Models/UserModel")
let UsrId = 0;

 let GetALlUsers = (req, res) => {
    let AllUsers = UserModel.find()
    return res.json(AllUsers);
}
 let GetUserById =  (req, res) => {
    let UsrId = req.params.id;
    let found_user = AllUsers.find((user) => user.id == UsrId);
    if (found_user) {
       return res.status(200).json({ data: found_user});
    } else {
      return  res.status(404).send("User Not Found");
    }
}
 let AddUsers = (req, res) => {
    let newUser = req.body;
    if(UserValid(newUser)){
    newUser.id = ++UsrId;
    let newUsr = new UserModel(newUser);
    newUsr.save();
  return  res.status(200).json({ message: "User Added Successfully", data: newUsr });
    }
    return res.send(UserValid.errors[0].instancePath.split("/")[1] + ":" +UserValid.errors[0].keyword + "==>" +UserValid.errors[0].message)
}
 let UpdateUsers = (req, res) => {
    if(UserValid(req.body)){
    let UsrId = req.params.id;
    AllUsers.find((user) => {
        if (user.id == UsrId) {
            user.name = req.body.name;
            user.age = req.body.age;
            user.address = req.body.address;
            user.email = req.body.email;
            user.password = req.body.password;
            return user;
        }
    });
    return res.status(200).json({ message: "User Updated Successfully", data: AllUsers });
    }else{
      return res.status(404).send();
    }
}
 let DeleteUsers = (req, res) => {
    let UsrId = req.params.id;
    let newArray = AllUsers.filter((user) => user.id != UsrId);
    AllUsers = newArray;
    return res.status(200).json({ message: "User Deleted Successfully", data: AllUsers });
}

module.exports = {GetALlUsers , GetUserById , AddUsers , UpdateUsers , DeleteUsers};