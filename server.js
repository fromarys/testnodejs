const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's domain
    credentials: true
}));

// Middleware to parse cookies
app.use(cookieParser());


app.get('/', (req, res) => {
    const lang = req.cookies.lang || 'en'; // Default to 'en' if no cookie is set
    let messages;

    switch (lang) {
        case 'en':
            messages = ['Hello', 'How are you?', 'Goodbye'];
            break;
        case 'kk':
            messages = ['Hola', '¿Cómo estás?', 'Adiós'];
            break;
        case 'ru':
            messages = ['Привет', 'Как дела?', 'Пока'];
            break;
        default:
            messages = ['Hello', 'How are you?', 'Goodbye'];
    }

    res.json(messages);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
