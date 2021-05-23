import React from 'react';

import PageComponent from '../../component/dataComponent/PageComponent.js'
import {MainContext} from '../../context/MainContext';

import StateTemplate from '../../model/StateTemplate'
import FormTemplate from '../../render/renderForm/FormTemplate'
import FilterTemplate from '../../render/renderFilter/FilterTemplate'
import inputState from '../../component/table/inputState'
import ModalComponent from '../../render/ModalComponent'
import CardTemplate from '../../component/card/CardTemplate'
//import './App2.css'

function Bill() {
const {groupForm,productForm,
       customerForm,billForm
      }=FormTemplate
const {groupState,productState,
       customerState,billState 
      }=StateTemplate
const {productFilter,customerFilter,billFilter}=FilterTemplate
const {productInputState,customerInputState,billInputState}=inputState
const {billCard}=CardTemplate
//=======================================
const [isSecond,setIsSecond]=React.useState(false)
React.useEffect(()=>{
    if(!isSecond){
        setIsSecond(true)
    }
},[isSecond])    

//=======================================
const [showCustomerModal,setShowCustomerModal]=React.useState(false)

const [showProductModal,setShowProductModal]=React.useState(false)

const {basicData,widthLeft,setWidthLeft,myheader}=React.useContext(MainContext)

const [selectCustomer,setSelectCustomer]=React.useState(null)
const [selectProduct,setSelectProduct]=React.useState(null)

const [iconActionData,setIconActionData]=React.useState(null)
const [iconActionDataDetail,setIconActionDataDetail]=React.useState(null)


React.useEffect(()=>{
    if(selectCustomer){
    setIconActionData({customerId:selectCustomer.id,
                       title:selectCustomer.title,
                       name:selectCustomer.name,
                       surname:selectCustomer.surname,
                       phone:selectCustomer.phone,
                       address:selectCustomer.address
                    })
    }
},[selectCustomer])

React.useEffect(()=>{
    if(selectProduct){
    setIconActionDataDetail(selectProduct)
    }
},[selectProduct])

const billCalculation=(formInputState)=>{
    const {total,reduction,grandTotal,detail}=formInputState
    
    let tempTotal = 0
    let tempDetail=[]
    detail.map(i=>{

        const roundQuantity=parseInt(i.quantity*100)
        const roundPrice=parseInt(i.price*100)
        const tempResult=roundQuantity*roundPrice

        tempTotal=tempTotal+tempResult

        const tempObj={...i,["result"]:tempResult/10000}
        tempDetail=[...tempDetail,tempObj]
    })
    const roundReduction=parseInt(reduction*10000)

    const tempGrandTotal=(tempTotal-roundReduction)/10000
    let tempFormInputState={...formInputState,
                            ["detail"]:tempDetail,
                            ["total"]:tempTotal/10000,
                            ["grandTotal"]:tempGrandTotal}
    return tempFormInputState
}

return(
<div className="bgc-lightGray" style={{height:"100%",width:"100%"}}>
    <PageComponent
        basicData={basicData}
        dataForm={billForm}
        dataState={billState}
        dataFilter={billFilter}
        dataInputState={billInputState}
        tableTitle={"Bill List"}
        detailTableTitle={"Product List In Bill"}
        graphTitle={"Bill Graph"}
        addFormTitle={"Add Bill"}
        editFormTitle={"Edit Bill"}
        tableHeadColor={"#6B5B95"}
        detailTableHeadColor={"#939597"}
        graphColor={"#FF6F61"}
        graphDetailKey={"name"}
        dataUrl={"bill"}
        canDataChange={true}
        dataTableTemplateName={"billTableTemplate"}
        detailTableTemplateName={"productDetailTableTemplate"}
        calculation={billCalculation}
        iconAction={[()=>setShowCustomerModal(true),
                     ()=>setShowProductModal(true),
                    ]}
        iconActionData={iconActionData}
        iconActionDataDetail={iconActionDataDetail}
        widthLeft={widthLeft}
        setWidthLeft={setWidthLeft}
        cardTemplate={billCard}
        cardTitle={"Bill"}
        intervalTime={4000}
        myheader={myheader}
        totalSwapPage={4}
        swapPageOption={["table","table-detailTable","table-graph","card"]}
    />

    {showCustomerModal
    ?<ModalComponent className="bd-red"
        funcCancel={()=>{
            setIconActionData({customerId:"",
                title:"",
                name:"",
                surname:"",
                phone:[],
             })
            setShowCustomerModal(false)
        }}
        funcOK={()=>setShowCustomerModal(false)}

        children={
            <PageComponent
                basicData={basicData}
                dataForm={customerForm}
                dataState={customerState}
                dataFilter={customerFilter}
                dataInputState={customerInputState}
                tableTitle={"Customer List"}
                addFormTitle={"Add Customer"}
                editFormTitle={"Edit Customer"}
                tableHeadColor={"#6B5B95"}
                detailTableHeadColor={"#939597"}
                graphColor={"#FF6F61"}
                dataUrl={"customer"}
                canDataChange={false}
                dataTableTemplateName={"customerTableTemplate"}
                setSelectData={setSelectCustomer}
                widthLeft={widthLeft}
                setWidthLeft={setWidthLeft}
                myheader={myheader}
                totalSwapPage={1}
                swapPageOption={["table"]}
            />
        }
    />
    :null
    }

    {showProductModal
     ?<ModalComponent className="bd-red"
        funcOK={()=>setShowProductModal(false)}
        children={
            <PageComponent
                basicData={basicData}
                dataForm={productForm}
                dataGroupForm={groupForm}
                dataState={productState}
                dataGroupState={groupState}
                dataFilter={productFilter}
                dataInputState={productInputState}
                groupTitle={"Product Type"}
                tableTitle={"Product List"}
                addFormTitle={"Add Product"}
                editFormTitle={"Edit Product"}
                tableHeadColor={"#6B5B95"}
                dataUrl={"product"}
                groupDataUrl={"group"}
                canDataChange={false}
                dataTableTemplateName={"productTableTemplate"}
                detailTableTemplateName={"productDetailTableTemplate"}
                setSelectData={setSelectProduct}
                widthLeft={widthLeft}
                setWidthLeft={setWidthLeft}
                myheader={myheader}
                totalSwapPage={1}
                swapPageOption={["group-table"]}
            />
     }
    />

    :null
    }
</div>
)

}
export default Bill;