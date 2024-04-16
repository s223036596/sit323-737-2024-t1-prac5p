const express = require("express");
const res = require("express/lib/response");
const app = express();
const add = (nl, n2) => { return nl + n2; }
app.get("/add", (req, res) => {
    try {
        const n1 = parseFloat(req.query.nl);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(nl)) {
            throw new Error("nl incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        const result = add(nl, n2);
        res.status(200).json({ statuscocde: 200, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            statuscocde: 500, msg: error.tostring()
        })
    }
});
const port = 3040;
app.listen(port, () => {
    console.log("hello I'm listening to port" + port);
})

