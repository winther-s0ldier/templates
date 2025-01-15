import React from 'react';
import ReactDOM from 'react-dom/client';
import { TemplateGenerator, TemplateList } from './client/features/templates/index.js';

function App() {
    return (
        <div>
            <h1>Legal Templates</h1>
            <TemplateList onSelect={(templateType) => console.log("Selected:", templateType)} />
            <TemplateGenerator />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);