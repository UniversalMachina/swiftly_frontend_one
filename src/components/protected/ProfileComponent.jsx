import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileComponent = ({ username }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [pronouns, setPronouns] = useState('');

  useEffect(() => {
    // Fetch user data from the backend
    axios.get(  `${process.env.REACT_APP_API_BASE_URL}/api/users/${username}`)
      .then(response => {
        const { name, email, bio, pronouns } = response.data;
        setName(name || '');
        setEmail(email || '');
        setBio(bio || '');
        setPronouns(pronouns || '');
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [username]);

  const handleSave = () => {
    // Update user data in the backend
    axios.put( `${process.env.REACT_APP_API_BASE_URL}/api/users/${username}`, {
      name,
      email,
      bio,
      pronouns
    })
      .then(response => {
        console.log('User data updated successfully');
      })
      .catch(error => {
        console.error('Error updating user data:', error);
      });
  };

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-2.5 max-w-full text-left text-sm text-gray-800 font-poppins">
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-3 max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start pt-1 pb-3 max-w-full border-b border-solid border-customGray-200">
          <div
            className="w-48 text-[22px] bg-transparent h-7 leading-9 text-gray-800 flex items-center p-0 mq450:text-2xl mq450:leading-7"
            role="textbox"
            aria-placeholder="Profile"
          >
            Profile
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-start justify-start py-0 pr-5 gap-2 max-w-full">
        <div className="relative leading-6 font-semibold flex items-center min-w-10">
          Name
        </div>
        <div className="self-stretch rounded-md bg-customGray-100 shadow-sm flex flex-row items-start justify-start py-1.5 px-3.5 max-w-full border border-solid border-customGray-200">
          <input
            className="w-full border-none outline-none font-poppins text-sm bg-transparent h-5 leading-5 text-gray-800 flex items-center p-0"
            placeholder="Your name here"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-start justify-start pt-0 pb-3.5 pr-5 gap-2 max-w-full">
        <div className="relative leading-6 font-semibold flex items-center min-w-6">
          Bio
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-1 max-w-full text-xs text-gray-500">
          <div className="self-stretch rounded-md bg-customGray-100 shadow-sm overflow-hidden flex flex-row items-start justify-start pt-2.5 px-3.5 pb-11 max-w-full border border-solid border-customGray-200">
            <textarea
              className="w-full border-none outline-none font-poppins text-sm bg-transparent h-5.25 leading-5.25 text-gray-600 flex items-center p-0"
              placeholder="Tell us a little bit about yourself"
              value={bio}
              onChange={e => setBio(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-start justify-start py-0 pr-5 gap-2 max-w-full">
        <div className="relative leading-6 font-semibold flex items-center min-w-16">
          Pronouns
        </div>
        <div className="self-stretch rounded-md bg-customGray-100 shadow-sm flex flex-row items-start justify-start py-1.5 px-3 gap-1 max-w-full border border-solid border-customGray-200">
          <input
            className="w-full border-none outline-none font-poppins text-sm bg-transparent h-5 leading-5 text-gray-800 flex items-center pl-3"
            placeholder="Don't specify"
            type="text"
            value={pronouns}
            onChange={e => setPronouns(e.target.value)}
          />
        </div>
      </div>

      <button className="mt-5 bg-customColor-300 text-white py-2 px-4 rounded-md" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default ProfileComponent;
