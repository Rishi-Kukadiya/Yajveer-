import "../CSS/Contactus.css";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Contactus() {
    const { data: Contacts } = useSelector((state) => state.contactus);
    const [messages, setMessages] = useState(Contacts || []);

    const handleResolve = (id) => {
        alert(`Marked as resolved: ${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this message?")) {
            const updated = messages.filter((msg, index) => (msg._id || index) !== id);
            setMessages(updated);
        }
    };

    return (
        <div className="contactus-container">
            <h2 className="contactus-title">User Messages</h2>
            <div className="table-wrapper">
                <table className="contactus-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages?.map((contact, index) => (
                            <tr key={contact._id || index}>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.subject}</td>
                                <td>{contact.message}</td>
                                <td className="button-cell">
                                    <button className="resolve-btn" onClick={() => handleResolve(contact._id || index)}>Resolve</button>
                                    <button className="deletee-btn" onClick={() => handleResolve(contact._id || index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        {messages.length === 0 && (
                            <tr>
                                <td colSpan="6" className="no-data">No messages yet.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div></div>
    );
}
