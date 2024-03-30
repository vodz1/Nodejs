const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const url = req.url;

    const [_, operation, ...operands] = url.split('/');

    let result;

    switch (operation) {
        case 'add':
            result = operands.reduce((acc, num) => acc + parseFloat(num), 0);
            break;
        case 'minus':
            result = operands.slice(1).reduce((acc, num) => acc - parseFloat(num), parseFloat(operands[0]));
            break;
        case 'divide':
            result = operands.slice(1).reduce((acc, num) => acc / parseFloat(num), parseFloat(operands[0]));
            break;
        case 'multiply':
            result = operands.reduce((acc, num) => acc * parseFloat(num));
            break;
        default:
            res.writeHead(400, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ error: 'Invalid operation' }));
    }

    res.write(`<h1>Result : ${result}</h1>`);
    res.end();

    fs.appendFile('result.txt', `${operation} ${operands.join(' ')} = ${result}\n`, (err) => {
        if (err) {
            console.error('Error saving result to file:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ error: 'Internal server error' }));
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ result }));
    });
})

.listen(7000);
