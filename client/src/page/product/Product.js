import React from 'react';

import PageComponent from '../../component/dataComponent/PageComponent.js'
import {MainContext} from '../../context/MainContext';

import StateTemplate from '../../model/StateTemplate'
import FormTemplate from '../../render/renderForm/FormTemplate'
import FilterTemplate from '../../render/renderFilter/FilterTemplate'
import inputState from '../../component/table/inputState'
import ModalComponent from '../../render/ModalComponent'

function Product() {
const {groupForm,productForm,
      }=FormTemplate
const {groupState,productState,
      }=StateTemplate
const {productFilter}=FilterTemplate
const {productInputState}=inputState

const [showGroupModal,setShowGroupModal]=React.useState(false)

const {basicData,widthLeft,setWidthLeft,myheader}=React.useContext(MainContext)

const [selectGroup,setSelectGroup]=React.useState(null)

const [iconActionData,setIconActionData]=React.useState(null)

React.useEffect(()=>{
    if(selectGroup){
    setIconActionData({groupId:selectGroup.id,
                       groupName:selectGroup.groupName})
    }
},[selectGroup])



return(
<div className="bgc-lightGray" style={{height:"100%",width:"100%"}}>
    <PageComponent
        basicData={basicData}
        dataForm={productForm}
        dataGroupForm={groupForm}
        dataState={productState}
        dataGroupState={groupState}
        dataFilter={productFilter}
        dataInputState={productInputState}
        groupTitle={"product type"}
        tableTitle={"product list"}
        addFormTitle={"Add Product"}
        editFormTitle={"Edit Product"}
        tableHeadColor={"#BE4944"}
        detailTableHeadColor={"#EB9FA9"}
        dataUrl={"product"}
        groupDataUrl={"group"}
        canDataChange={true}
        dataTableTemplateName={"productTableTemplate"}
        iconAction={[()=>setShowGroupModal(true),]}
        iconActionData={iconActionData}
        widthLeft={widthLeft}
        setWidthLeft={setWidthLeft}
        myheader={myheader}
        totalSwapPage={1}
        swapPageOption={["group-table"]}
        keyName={["photoUrl1"]}
    />

    {showGroupModal
    ?<ModalComponent className="bd-red"
        funcCancel={()=>{
            setIconActionData({groupId:"",groupName:""})
            setShowGroupModal(false)
        }}
        funcOK={()=>setShowGroupModal(false)}
        children={
            <PageComponent
                dataGroupState={groupState}
                groupDataUrl={"group"}
                groupTitle={"product type"}
                setSelectGroup={setSelectGroup}
                myheader={myheader}
                totalSwapPage={1}
                swapPageOption={["group"]}
                canGroupChange={false}
            />
        }
    />
    :null
    }

</div>
)

}
export default Product;