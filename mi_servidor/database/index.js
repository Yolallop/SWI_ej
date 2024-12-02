const bcrypt =require('bcrypt'); 
user={}
user.data ={}; 

users.generateHash = function(password, callback){
    bcrypt.hash(password, 10, callback);
} //

users.comparePass = async function(password, hash){
    return await bcrypt.compare(password, hash);
}
