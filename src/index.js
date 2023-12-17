import React, { useState } from 'react';
import Contacts from './components/Contacts';
import ContactForm from './components/ContactForm';
import ReactDOM from 'react-dom/client';
const App = () => {
    const [isFormVisible, setFormVisible] = useState(false);
    const [contacts, setContacts] = useState([]);

    const handleAddContactClick = () => {
        setFormVisible(true);
    };

    const handleSaveContact = (newContact) => {
        setContacts((prevContacts) => [...prevContacts, newContact]);
        setFormVisible(false);
    };

    const handleCancelForm = () => {
        setFormVisible(false);
    };

    return (
        <div>
            {isFormVisible ? (
                <ContactForm onSave={handleSaveContact} onCancel={handleCancelForm} />
            ) : (
                <Contacts contacts={contacts} onAddContactClick={handleAddContactClick} />
            )}
        </div>
    );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
