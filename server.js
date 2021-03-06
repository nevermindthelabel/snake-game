const express = require('express')

const app = express();

app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile('/public/index.html')
});

app.listen(PORT, () => console.log(`server running on port http://localhost:${PORT}`));
