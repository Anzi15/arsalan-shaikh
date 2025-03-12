"use client"
import { useState, FormEvent, ChangeEvent } from "react";
import { db } from "../../helper/firebase/config"; // Adjust the path as needed
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    try {
      const q = query(collection(db, "newsletter_subscribers"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        toast.error("This email is already subscribed.");
        return;
      }

      await addDoc(collection(db, "newsletter_subscribers"), {
        email,
        subscribedAt: new Date(),
      });
      toast.success("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Subscribe to Mayor Arsalan Shaikh's Newsletter</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
