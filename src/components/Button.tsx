import React from 'react';
import Button from '@mui/material/Button';

export default function ButtonComponent({content, icon}:{content?:string, icon?:string}) {
  return <Button variant="contained">{content || 'Button Text'}</Button>;
}

