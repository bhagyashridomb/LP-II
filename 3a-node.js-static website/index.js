const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server on port 4000
app.listen(4000, () => {
    console.log("Server Has Started on PORT: 4000");
});