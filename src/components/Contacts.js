import React, { useState, useEffect } from 'react';

const Contacts = ({ onAddContactClick }) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setContacts(data))
            .catch(error => console.error('Error fetching contacts:', error));
    }, []);

    const handleDeleteContact = (id) => {
        setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
    };

    return (
        <div>
            <h2>Список контактів</h2>
            <table>
                <thead>
                <tr>
                    <th>Ім'я</th>
                    <th>Прізвище</th>
                    <th>Телефон</th>
                    <th>Дії</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map(contact => (
                    <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.username}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <button onClick={() => handleDeleteContact(contact.id)}>Видалити</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={onAddContactClick}>Додати контакт</button>
        </div>
    );
};

export default Contacts;
