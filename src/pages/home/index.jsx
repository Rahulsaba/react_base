import * as React from 'react';
import { Links, Button, Loader } from '@/path';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DocumentTitle from '@/helpers/DocumentTitle';

export default function Home() {

  DocumentTitle('Home');
  
  const { loading, error, success, userToken } = useSelector((state) => state.auth);

 

  return (
    <div className='h-[calc(100vh-64px)]  dark:bg-black dark:text-white bg-white text-black'>
      Home {React.version}
      
    </div>
  );
}
