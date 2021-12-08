import app from './app';

const PORT = app.get('port') || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));