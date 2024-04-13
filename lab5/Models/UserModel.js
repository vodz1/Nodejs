let AllUsers = [];

class UserModel{
constructor(user){
    this.name = user.name
    this.age = user.age
    this.address = user.address
    this.email = user.email
    this.password = user.password
}

static find(){
    return AllUsers;
}
save(){
    AllUsers.push(this)
}
}

module.exports = UserModel;