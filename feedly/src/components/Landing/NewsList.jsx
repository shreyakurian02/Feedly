import React,{useContext} from 'react';
import NewsCard from './NewsCard';
import { NewsContext } from '../../contexts/newsFeeder';

const NewsList = () => {

  const [national,sports,business,world] = useContext(NewsContext)

  return (
  <>
  <NewsCard articleSet={national.data} category="National" filter={false} bulletLength={null}/>
   <NewsCard articleSet={sports.data} category="Sports" filter={false} bulletLength={null}/>
   <NewsCard articleSet={world.data} category="World" filter={false} bulletLength={null}/>
   <NewsCard articleSet={business.data} category="Business" filter={false} bulletLength={null}/>
  </>
  );
}

export default NewsList;
