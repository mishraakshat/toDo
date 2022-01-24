const Details = require("../models/details");

module.exports.home = function(req,res){
    Details.find({}, function(err, details){
        if(err){
        console.log('Error while fetching the database');
        return;
        }

        return res.render('home', {
        title : 'My Contact List',
        Details: details
        });
   });
}
module.exports.data = function(req,res){
    let newData = req.body;
    Details.create({
        task: newData.task,
        deadline:newData.deadline,
        catogery:newData.catogery
    },function(err, newObject){
        if(err){
            console.log('Error while creating data');
            return;
        }
        // console.log(newObject);
        return res.redirect('back');
    })
    //data.push(req.body);
    //return res.redirect('back');
}

module.exports.delete = function(req, res){
    // object will contain the keys(_id) of all the tasks to be deleted
    let object = Object.keys(req.body);
    for(let id of object){
        // console.log(id);
        Details.findByIdAndDelete(id, function(err){
            // if error occured while deletion of object from db
            if(err){
                console.log('Error While deletion from database');
                // continue;
            } else{
                // continue;
            }
        });
    }
    // else return to back page
    return res.redirect('/');
}