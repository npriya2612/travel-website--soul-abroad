const { render } = require('ejs');
const express = require('express');
const { Mongoose } = require('mongoose');
var bcrypt = require('bcrypt'); 
const saltRounds =10;
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

app.set('view engine', 'ejs');

const mongoose = require('mongoose');
app.use(session({
    secret: 'our secret ',
    resave: false,
    saveUninitialized: false
  }));

app.use(passport.initialize());
app.use(passport.session());

const Review = require('./models/reviews');
const User = require('./models/users');
const Hotel = require('./models/hotels');
const Item = require('./models/items');

app.use(express.static('public'));

const dbURL = 'mongodb+srv://arshita_07:test123@cluster0.tqmup.mongodb.net/reviews?retryWrites=true&w=majority';
mongoose.connect(dbURL)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));
app.use(express.urlencoded({ extended: true }));

var profile = { fname: "", lname: "", email: "", pwd: "", cnfpwd: "", no: "" };

app.get('/', (req, resp) => {
    msg = "";
    resp.render('index', { signin_stat: signin_stat, profile: profile });
});
app.get('/download',(req,resp)=>{
    resp.download('report.pdf');
});

app.get("/secrets",(req,res)=>{
    if(req.isAuthenticated()){
      res.render("secrets");
    }else{
      res.redirect("/login");
    }
  });
  var maillink="";
app.get('/booking', (req, resp) => {
    resp.render('booking', { results: results, signin_stat: signin_stat, profile: profile, hotelinfo: hotelinfo });
});
app.get('/forgot',(req,resp)=>{
    resp.render('forgot',{maillink:maillink})
});

app.post("/change", (req, resp) => {   
    User.findOneAndUpdate({ email: req.body.email }, { pwd:req.body.pwd })
    .then(function () {
        resp.redirect('/signin');
        console.log(req.body.otp);
        })
        .catch((err) => { console.log(err) })
}
 )

app.get('/wayanad', (req, resp) => {
    resp.sendFile('./views/wayanad.html', { root: __dirname });
});

app.get('/goa', (req, resp) => {
    resp.sendFile('./views/goa.html', { root: __dirname });
});

app.get('/sundarbans', (req, resp) => {
    resp.sendFile('./views/sundarbans.html', { root: __dirname });
});

app.get('/kashmir', (req, resp) => {
    resp.sendFile('./views/kashmir.html', { root: __dirname });
});

app.get('/new_review', (req, resp) => {
    resp.render('new_review');
});

app.get('/signup', (req, resp) => {
    resp.render('signup');
});

var msg = "";

var signin_stat = 0;

app.get('/signin', (req, resp) => {
    User.find().sort({ createdAt: -1 })
        .then((result) => { resp.render('signin', { users: result, message: msg }) })
        .catch((err) => { console.log(err) })
});

app.get('/logout', (req, resp) => {
    signin_stat = 0;
    resp.redirect('/');
});

app.get('/view_review', (req, resp) => {
    //the -1 here means in descending order 
    Review.find().sort({ createdAt: -1 })
        .then((result) => { resp.render('view_review', { reviews: result }) })
        .catch((err) => { console.log(err) })
});
app.get('/to_do', (req, resp) => {
    //the -1 here means in descending order 
    Item.find({ "username": profile.email }).sort({ createdAt: -1 })
        .then((result) => { resp.render('to_do', { newItems: result, signin_stat: signin_stat }) })
        .catch((err) => { console.log(err) })
});

app.get('/del_review/:id', (req, resp) => {
    const idrem = req.params.id;
    Review.findById(idrem)
        .then((result) => {
            result.remove()
            resp.redirect('/view_review')
        })
        .catch((err) => { console.log(err) })
});
app.post("/calcprice", (req, resp) => {
    console.log("request recieved");
})

app.get('/view_review/:id', (req, resp) => {
    const id = req.params.id;
    Review.findById(id)
        .then((result) => { resp.render('full', { review: result }) })
        .catch((err) => { console.log(err) })
});

app.post('/view_review', (req, resp) => {
    const review = new Review(req.body);
    review.save()
        .then((result) => {
            resp.redirect('/view_review');
        })
        .catch((err) => {
            console.log(err);
        })
})

app.post('/users', (req, resp) => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.pwd, salt, function(err, hash) {
    const user = new User(req.body);
    user.save()
        .then((result) => {
            resp.redirect('/signin');
        })
        .catch((err) => {
            console.log(err);
        })
    });
});
})

var results = { "location": "", "roomtype": "", "roomid": "", "status": "", "basefare": 0 };
var hotelinfo = { "name": "", "email": "", "indate": "", "outdate": "", "loc": "", "type": "" };

app.post('/bookinga', (req, resp) => {
    var hotelinfo = req.body;
    console.log(hotelinfo);
    if (hotelinfo.type == 'Choose a room type') {
        Hotel.find({ "location": hotelinfo.loc })
            .then((result) => {
                results = result
                resp.render('booking', { results: results, signin_stat: signin_stat, profile: profile, hotelinfo: hotelinfo })
            }
            )
            .catch((err) => { console.log(err) })
    }
    else if (hotelinfo.type != 'Choose a room type') {
        Hotel.find({ $and: [{ "roomtype": hotelinfo.type }, { "location": hotelinfo.loc }] })
            .then((result) => {
                results = result
                resp.render('booking', { results: results, signin_stat: signin_stat, profile: profile, hotelinfo: hotelinfo })
            }
            )
            .catch((err) => { console.log(err) })
    }
    else {
        resp.render('booking', { results: results, signin_stat: signin_stat, profile: profile, hotelinfo: hotelinfo })
    }
})




app.post('/bookingb', (req, resp) => {
    room_selection = req.body;
    console.log("the room selection is" + room_selection);
    Hotel.findOneAndUpdate({ roomid: room_selection.room }, { status: "na" }).then(function () {
        resp.redirect('/booking');
        resp.render('booking', { results: results, signin_stat: signin_stat, profile: profile, hotelinfo: hotelinfo })
    })
        .catch((err) => { console.log(err) })

})

app.post('/indexloc', (req, resp) => {
    const loc = req.body.loc;
    if (loc == 'kashmir') {
        resp.redirect('/kashmir');
    }
    else if (loc == 'sundarbans') {
        resp.redirect('/sundarbans');
    }
    else if (loc == 'goa') {
        resp.redirect('/goa');
    }
    else {
        resp.redirect('/wayanad');
    }
})

app.post('/validate', (req, resp) => {
    User.find({ "email": req.body.email })
        .then((result) => {
            if (result[0].pwd != req.body.pwd) {
                resp.redirect('/signin');
                msg = "Incorrect Username or Password!"
            }
            else {
                resp.redirect('/');
                signin_stat = 1;
                profile = result[0];
            }
        })
        .catch((err) => { console.log(err) })

})
app.post("/todoform", (req, resp) => {
    if (signin_stat == 0) {
        resp.redirect('/signin');
    }
    else {
        const task = new Item();
        const item = req.body.newItem;
        task.name = item;
        task.username = profile.email;
        task.save()
        resp.redirect('/to_do');
    }

});
app.post("/delete", (req, resp) => {
    var item = req.body;
    var id = item.deleteitem;
    console.log(id);
    Item.findByIdAndRemove(id, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("successfully deleted");
        }
    });
    resp.redirect("/to_do");
});
app.post('/checkbox', (req, resp) => {
    console.log(req.body);
})