import React, { useState, useEffect } from 'react';
import SideBar from "../../components/protected/Sidebar/SideBar";

const Chatbot_Testing_Page = ({ username, onSignOut }) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    // Function to fetch data from an API
    async function fetchData() {
      try {
        const baseUrl = process.env.REACT_APP_CHAT_BASE_URL;
        const generatedUrl = `${baseUrl}/?username=${username}`;
        setUrl(generatedUrl);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // Call the fetchData function
    fetchData();
  }, [username]); // Make sure to include username as a dependency

  return (
    <>
      <div className="flex">
        <SideBar onSignOut={onSignOut} fixed={"fixed"} />

        <div className="flex-1">
          <div className="space-y-2 text-center w-full max-w-[1000px] mx-auto px-4 py-12 md:px-6 md:py-16 lg:px-8 lg:py-20 font-poppins">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">Test the Chatbot</h1>

            {url && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
                <p>Generated URL: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>
                <p>Iframe Code:</p>
                <pre>{`<iframe 
  src="${url}" 
  width="480" 
  height="700" 
  style="position: fixed; bottom: 0px; right: 20px;" 
  className='' 
></iframe>`}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
      <iframe 
        src={url} 
        width="480" 
        height="700" 
        style={{ 
          position: 'fixed', 
          bottom: '0px', 
          right: '20px', 
        }}
        className='' 
      />
   
    </>
  );
};

export default Chatbot_Testing_Page;
