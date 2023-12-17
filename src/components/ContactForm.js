import React, { useState } from 'react';

const ContactForm = ({ onSave, onCancel }) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');

    const handleSave = () => {
        const newContact = { name, username, phone };
        onSave(newContact);
        setName('');
        setUsername('');
        setPhone('');
    };

    return (
        <div>
            <h2>Форма додавання нового контакту</h2>
            <label>
                Ім'я:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Прізвище:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
                Телефон:
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <br />
            <button onClick={handleSave}>Зберегти</button>
            <button onClick={onCancel}>Скасувати</button>
        </div>
    );
};

export default ContactForm;
