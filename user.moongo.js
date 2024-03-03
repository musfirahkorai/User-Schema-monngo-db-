const moongose = require("moongose");

moongose.connect(?"moongodb://127.0.0.1:27017/moongo")

const userSchema = moongose.Schema({
    username: String,
    nickname: String,
    description: String,
    password: String,
    categories: {
        type: Array,
        default: []
    };
    datecreated: {
        type: Date,
            default: Date.now();
    }
})

moongose.model("user", userSchema);
