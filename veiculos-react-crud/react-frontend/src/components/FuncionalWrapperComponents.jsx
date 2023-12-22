import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListVeiculosComponent from './ListVeiculosComponent';

function ListVeiculosWrapper() {
  let navigate = useNavigate();
  
  return <ListVeiculosComponent navigate={navigate} />;
}
