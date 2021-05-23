import React from 'react';

import {Route,Switch,Redirect} from 'react-router-dom';

import Navbar from './component/navbar/Navbar'

import Home from './page/home/Home'
import ShopWelcome from './page/shop/ShopWelcome'
import UserWelcome from './page/user/UserWelcome'
import BasicData from './page/basicdata/BasicData'
import Customer from './page/customer/Customer'
import Product from './page/product/Product'
import Bill from './page/bill/Bill'
import Contact from './page/contact/Contact'
import {MainContext} from './context/MainContext';

import './App2.css'

function App() {

const {username,setUsername,
   reloadCheckToken,setReloadCheckToken,
   haveShopToken,setHaveShopToken,
   haveUserToken,setHaveUserToken,
   userName,setUserName,
   basicData,myheader
}=React.useContext(MainContext)

return(
<div className="bgc-lightGray" style={{height:"100vh",width:"100vw"}}>
   <div className="h-5">
         <Navbar/>   
   </div>
   
   <div className="h-95 w-100">     
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/shop" component={haveShopToken?UserWelcome:ShopWelcome}/>
         <Route exact path="/user" component={haveShopToken?UserWelcome:ShopWelcome}/> 
         <Route exact path="/basicdata" 
            component={haveShopToken?(haveUserToken?BasicData:UserWelcome):ShopWelcome} /> 
         <Route exact path="/customer" 
            component={haveShopToken?(haveUserToken?Customer:UserWelcome):ShopWelcome}/> 
         <Route exact path="/product" 
            component={haveShopToken?(haveUserToken?Product:UserWelcome):ShopWelcome}/> 
         <Route exact path="/bill" 
            component={haveShopToken?(haveUserToken?Bill:UserWelcome):ShopWelcome}/> 
         <Route exact path="/contact" component={Contact}/>
         <Route render={() => <Redirect to="/" />} />   
      </Switch>
   </div>

   {basicData
   ?<div style={{position:"fixed", borderRadius: "0.3rem",
                display:"flex",alignItems:"center",justifyContent:"center",
                maxWidth:basicData.maxWidth?basicData.maxWidth:"50%",
                fontSize:basicData.fontSize?basicData.fontSize:"1rem",
                bottom:  basicData.bottom?basicData.bottom:"0px",
                right:   basicData.right?basicData.right:"20px",
                backgroundColor:basicData.bgColor?basicData.bgColor:"#EFC050",
                color:   basicData.color?basicData.color:"black",
                }}>
      <h2>{`${basicData.footer}`}</h2>
   </div>
   :null
   }
</div>
)

}
export default App;





/*


//=================================

import React from 'react';

import {Route,Switch,Redirect} from 'react-router-dom';

import Navbar from './component/navbar/Navbar'

import Home from './page/home/Home'
import ShopWelcome from './page/shop/ShopWelcome'
import UserWelcome from './page/user/UserWelcome'
import BasicData from './page/basicdata/BasicData'
import Customer from './page/customer/Customer'
import Product from './page/product/Product'
import Bill from './page/bill/Bill'


import {MainContext} from './context/MainContext';

import './App2.css'

function App() {

const {username,setUsername,
   reloadCheckToken,setReloadCheckToken,
   haveShopToken,setHaveShopToken,
   haveUserToken,setHaveUserToken,
   userName,setUserName,
   basicData,myheader
}=React.useContext(MainContext)


return(
<div className="bgc-lightGray" style={{height:"100vh",width:"100vw"}}>
   <div className="h-5">
         <Navbar/>   
   </div>

   
   <div className="h-95">
   
      <switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/shop" component={haveShopToken?UserWelcome:ShopWelcome}/>
         <Route exact path="/user" component={haveShopToken?UserWelcome:ShopWelcome}/> 
         <Route exact path="/basicdata" 
            component={haveShopToken?(haveUserToken?BasicData:UserWelcome):ShopWelcome} /> 
         <Route exact path="/customer" 
            component={haveShopToken?(haveUserToken?Customer:UserWelcome):ShopWelcome}/> 
         <Route exact path="/product" 
            component={haveShopToken?(haveUserToken?Product:UserWelcome):ShopWelcome}/> 
         <Route exact path="/bill" 
            component={haveShopToken?(haveUserToken?Bill:UserWelcome):ShopWelcome}/> 
         <Route render={() => <Redirect to="/" />} />   
      </switch>
   </div>

   {basicData
   ?<div style={{position:"fixed",maxWidth:"50%",
                bottom:basicData.bottom?basicData.bottom:"0px",
                right:basicData.right?basicData.right:"20px",
                backgroundColor:basicData.bgColor?basicData.bgColor:"#EFC050",
                color:basicData.color?basicData.color:"black",
                display:"flex",alignItems:"center",justifyContent:"center",
                borderRadius: "0.3rem",
                }}>
      <h2>{`${basicData.contact}`}</h2>
   </div>
   :null
   }
</div>
)

}
export default App;





*/