const router = require('express').Router();
const bodyParser = require('body-parser');
const { printLogger } = require('./printLogger');

router.post('/multiply', (request, response) => {
    try {
        let reqBody = request.body;
        printLogger(2, `info message in router with: ${JSON.stringify(reqBody)}`);
        let first = reqBody.first;
        let second = reqBody.second;
        let multi = first * second;
        console.log("Multiply Result: ", multi);
        printLogger(2, `Multiplications is: ${JSON.stringify(multi)}`);
        return response.status(200).json({msg: "Multiplication is: "+multi})
    }
    catch (error) {
        console.log("error in catch: ", error);
        printLogger(0, `Error occurred in router : ${error}`)
        return response.status(500).json({error: error})
    }
})

module.exports = router;