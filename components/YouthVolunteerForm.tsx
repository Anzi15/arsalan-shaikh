'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { db } from '../helper/firebase/config'; // Ensure Firebase is properly initialized
import { collection, addDoc } from 'firebase/firestore';

interface FormData {
    name: string;
    age: string;
    email: string;
    phone: string;
}

const YouthVolunteerForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        age: '',
        email: '',
        phone: '',
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            await addDoc(collection(db, 'youth_volunteers'), formData);
            setMessage('Thank you for signing up!');
            setFormData({ name: '', age: '', email: '', phone: '' });
        } catch (error) {
            setMessage('Error submitting form. Try again.');
            console.error('Error adding document: ', error);
        }

        setLoading(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 flex flex-col md:flex-row items-center md:items-start gap-6 my-6">
            <div className="w-full md:w-1/2">
                <img 
                    src="/volunteers.jpg" 
                    alt="Youth Volunteer" 
                    className="w-full h-auto rounded-lg"
                />
            </div>
            <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Youth Volunteer Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
                {message && <p className="mt-4 text-center text-green-600">{message}</p>}
            </div>
        </div>
    );
};

export default YouthVolunteerForm;
