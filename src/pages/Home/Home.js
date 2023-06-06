import React, { useEffect} from 'react';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/Main/Main';
import Categories from '../../components/Categories/Categories';
import './Home.css';



function Home() {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

    return (
      <>
        <Navbar /> 
        <Main />
        <div className='sale-banner'>
          <img src="./assets/sale.png" alt='sale-banner'/>
        </div>
        <Categories />
        <Footer />
      </>
    )
  }

export default Home