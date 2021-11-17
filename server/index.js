const express = require('express');

const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, '../public')))








const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})