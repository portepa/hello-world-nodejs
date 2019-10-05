const express = require('express');
const app = express();
app.set('port', process.env.PORT || 8080);

app.use(express.static('public'))

app.listen(app.get('port'), err => {
    if (err) throw err;
    console.log(`server listening on port ${app.get('port')}`);
})