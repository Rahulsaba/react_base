import * as React from 'react';
import { Links, Button, Loader } from '@/path';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home() {
  const navigate = useNavigate();
  const { loading, error, success, userToken } = useSelector((state) => state.auth);

  const removeTocken = async () => {
    await localStorage.removeItem('token');
    await navigate('/login');
  };


  useEffect(() => {
    // Automatically navigate to login page after removing the token
  }, [!userToken, navigate]);

  return (
    <div>
      Home {React.version} <button onClick={removeTocken} className="p-16 text-black">remove</button>
      
    </div>
  );
}
