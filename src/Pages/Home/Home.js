import React from 'react'
import Layout from '../../component/Layouts/Layout'
import  "../../styles/HomeStyle.css";
import Section1 from './Section1'
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';

function Home() {
  return (
    <div>
      <Layout>
       {/* section  */}
       <Section1></Section1>
       {/* section2 */}
       <Section2></Section2>
       {/* Section menu */}
       <Section3></Section3>
       {/* section promotion */}
       <Section4></Section4>
       {/* home section shop */}
       <Section5></Section5>
       {/* home section blog */}
       <Section6></Section6>
       {/* contact */}
       <Section7></Section7>
      </Layout>
    </div>
  )
}

export default Home
