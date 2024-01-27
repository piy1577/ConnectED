const mongoose = require("mongoose");

mongoose.connection.once("open", () => {
    console.log("DB Connected");
});

mongoose.connection.on("error", (err) => {
    console.log(err);
});

const uri = process.env.MONGOURL.replace(
    "<password>",
    process.env.MONGO_PASSWORD
);

const connect = async (app, port) => {
    try {
        await mongoose.connect(uri);
        app.listen(port, () => {
            console.log(`listening on port ${port}`);
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = connect;
