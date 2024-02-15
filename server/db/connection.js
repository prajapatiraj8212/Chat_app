const mongoose = require('mongoose');

const url = `mongodb+srv://<DB ID>:<password>@cluster0.2kbscd0.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))
