import React, { useState, useEffect } from 'react';
import Contacts from './components/Contacts';
import ContactForm from './components/ContactForm';
import ReactDOM from 'react-dom/client';

const App = () => {
    const [isFormVisible, setFormVisible] = useState(true);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setContacts(data))
            .catch(error => console.error('Ошибка при получении контактов:', error));
    }, []);

    const handleAddContactClick = () => {
        setFormVisible(true);
    };

    const handleSaveContact = (newContact) => {
        setContacts((prevContacts) => [...prevContacts, newContact]);
        setFormVisible(true);
    };

    const handleCancelForm = () => {
        setFormVisible(true);
    };

    return (
        <>
            <Contacts contacts={contacts} onAddContactClick={handleAddContactClick} />
            {isFormVisible && (
                <ContactForm onSave={handleSaveContact} onCancel={handleCancelForm} />
            )}
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

export default App;
