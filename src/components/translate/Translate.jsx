import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux"; 

const Translate = () => {
  const [searchValue, setSearchValue] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false); 
  


  const handleSearchTranslate = async (e) => {
    e.preventDefault();
    setLoading(true); 

    const url = 'https://deep-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': '216aaa2687msh91ec62caa74c1a8p1888b2jsnd4414ee7bbf9',
        'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        q: searchValue,
        source: 'uz',
        target: 'en'
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setTranslatedText(result.data.translations.translatedText);
      toast.success('Translation successful!'); 
    } catch (error) {
      console.error(error);
      toast.error('Failed to translate. Please try again.'); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Uzbek to English Translator</h2>
        <form onSubmit={handleSearchTranslate} className="flex flex-col space-y-4">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter text in Uzbek..."
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            type="submit"
            className={`w-full p-3 rounded-lg transition-colors duration-300 ${
              loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            } text-white`}
            disabled={loading} 
          >
            {loading ? 'Translating...' : 'Translate'}
          </button>
        </form>

        {translatedText && (
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Translation:</h3>
            <p className="text-gray-800">{translatedText}</p>
          </div>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} /> 
    </div>
  );
};

export default Translate;
