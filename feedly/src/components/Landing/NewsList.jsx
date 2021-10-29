import React,{useEffect, useState,useContext} from 'react';
// import '../App.css';
import axios from 'axios';
import NewsCard from './NewsCard';
import { PageLoader } from "@bigbinary/neetoui/v2";
import { NewsFeeder } from '../../contexts/newsFeeder';
import { NewsContext } from '../../contexts/newsFeeder';

const NewsList = () => {

  const [national,sports,business,world] = useContext(NewsContext)

  return (
  <>
  <NewsCard result={national.data} category="National" filter={false}/>
   <NewsCard result={sports.data} category="Sports" filter={false}/>
   <NewsCard result={world.data} category="World" filter={false}/>
   <NewsCard result={business.data} category="Business" filter={false}/>
  </>
  );
}

export default NewsList;
