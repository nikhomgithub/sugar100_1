import React from 'react';

const genRef=()=>{
    return [1,2,3].map(i=>React.createRef())
}

const cName="xc12 mb-1"

const subCNameMinMax = ["xc1 h-100",
                        "xc3 h-100",
                        "xc8 h-100"]
  
const subCNameInput= subCNameMinMax

let customerFilter=[
    { 
      templateType:"number",
      lb:"ID",
      cName,  
      subCName:subCNameMinMax,
      keyName:"id",
      refInput:genRef(),
      inputType:"number",
      filterCommand:["id"]
    },
    //==============
    //title
    { 
      templateType:"string",
      lb:"title",
      cName,  
      subCName:subCNameInput,    
      keyName:"title",
      refInput:genRef(),
      inputType:"text",
      filterCommand:["title"]
    },
    //name
    { 
      templateType:"string",
      lb:"name",
      cName,  
      subCName:subCNameInput,    
      keyName:"name",
      refInput:genRef(),
      inputType:"text",
      filterCommand:["name"]
    },
    //surname
    { 
      templateType:"string",
      lb:"surname",
      cName,  
      subCName:subCNameInput,    
      keyName:"surname",
      refInput:genRef(),
      inputType:"text",
      filterCommand:["surname"]
    },
    //phone
    { 
      templateType:"arrayString",
      lb:"โทรศัพท์",
      cName,  
      subCName:subCNameInput,      
      keyName:"phone",
      refInput:genRef(),
      inputType:"text",
      filterCommand:["phone"]
    },
    //remark
    { 
      templateType:"string",
      lb:"หมายเหตุ",
      cName,  
      subCName:subCNameInput,    
      keyName:"remark",
      refInput:genRef(),
      inputType:"text",
      filterCommand:["remark"]
    }
]

let productFilter=[
  //id
  { 
    templateType:"number",
    lb:"ID",
    cName,  
    subCName:subCNameMinMax,
    keyName:"id",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["id"]
  },
  //barcode
  { 
    templateType:"string",
    lb:"barcode",
    cName,  
    subCName:subCNameInput,    
    keyName:"barcode",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["barcode"]
  },
  //name
  { 
    templateType:"string",
    lb:"name",
    cName,  
    subCName:subCNameInput,    
    keyName:"name",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["name"]
  },
  //groupId
  { 
    templateType:"number",
    lb:"group ID",
    cName,  
    subCName:subCNameMinMax,
    keyName:"groupId",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["groupId"]
  },
  //groupName
  { 
    templateType:"string",
    lb:"product type",
    cName,  
    subCName:subCNameMinMax,
    keyName:"groupName",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["groupName"]
  },
  //unit
  { 
    templateType:"string",
    lb:"unit",
    cName,  
    subCName:subCNameInput,    
    keyName:"unit",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["unit"]
  },
  //price
  { 
    templateType:"string",
    lb:"price",
    cName,  
    subCName:subCNameInput,    
    keyName:"price",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["price"]
  },
  //=================
  //remark
    { 
      templateType:"string",
      lb:"หมายเหตุ",
      cName,  
      subCName:subCNameInput,    
      keyName:"remark",
      refInput:genRef(),
      inputType:"text",
      filterCommand:["remark"]
    },

]

let billFilter=[
  //id
  { 
    templateType:"number",
    lb:"ID",
    cName,  
    subCName:subCNameMinMax,
    keyName:"id",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["id"]
  },
  //date
  { 
    templateType:"number",
    lb:"date",
    cName,  
    subCName:subCNameMinMax,
    keyName:"date",
    refInput:genRef(),
    inputType:"date",
    filterCommand:["date"]
  },
  //customerId
  { 
    templateType:"number",
    lb:"customer ID",
    cName,  
    subCName:subCNameMinMax,
    keyName:"customerId",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["partnerId"]
  },
  //title
  { 
    templateType:"string",
    lb:"title",
    cName,  
    subCName:subCNameInput,    
    keyName:"title",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["title"]
  },
  //name
  { 
    templateType:"string",
    lb:"name",
    cName,  
    subCName:subCNameInput,    
    keyName:"name",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["name"]
  },
  { 
    templateType:"string",
    lb:"surname",
    cName,  
    subCName:subCNameInput,    
    keyName:"name",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["name"]
  },
  //phone
  { 
    templateType:"arrayString",
    lb:"phone",
    cName,  
    subCName:subCNameInput,      
    keyName:"phone",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["phone"]
  },
  //address:{number,tambon,district:province,postcode:},
  //address.number
  //remark
  { 
    templateType:"string",
    lb:"remark",
    cName,  
    subCName:subCNameInput,    
    keyName:"remark",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["remark"]
  },
  //total
  { 
    templateType:"number",
    lb:"total",
    cName,  
    subCName:subCNameMinMax,
    keyName:"total",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["total"]
  },
  //reduction
  { 
    templateType:"number",
    lb:"reduction",
    cName,  
    subCName:subCNameMinMax,
    keyName:"reduction",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["reduction"]
  },
  //grandTotal
  { 
    templateType:"number",
    lb:"grandtotal",
    cName,  
    subCName:subCNameMinMax,
    keyName:"grandTotal",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["granTotal"]
  },

  //detail:{id,productId,barcode,name,groupId,groupName,unit,price,quantity,remark,isRawMat},
  //
  {       
    templateType:"arrayObjectString",
    lb:"detail|ID",
    cName,  
    subCName:subCNameInput,
    keyName:"detail_id",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["detail","id"]
  },
  {       
    templateType:"arrayObjectString",
    lb:"detail|barcode",
    cName,  
    subCName:subCNameInput,
    keyName:"detail_barcode",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["detail","barcode"]
  },
  {       
    templateType:"arrayObjectString",
    lb:"detail|name",
    cName,  
    subCName:subCNameInput,
    keyName:"detail_name",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["detail","name"]
  },
  {       
    templateType:"arrayObjectString",
    lb:"detail|group ID",
    cName,  
    subCName:subCNameInput,
    keyName:"detail_groupId",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["detail","groupId"]
  },
  {       
    templateType:"arrayObjectString",
    lb:"detail|product type",
    cName,  
    subCName:subCNameInput,
    keyName:"detail_groupName",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["detail","groupName"]
  },
  {       
    templateType:"arrayObjectString",
    lb:"detail|unit",
    cName,  
    subCName:subCNameInput,
    keyName:"detail_unit",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["detail","unit"]
  },
  {       
    templateType:"arrayObjectString",
    lb:"detail|price",
    cName,  
    subCName:subCNameInput,
    keyName:"detail_price",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["detail","price"]
  },
  {       
    templateType:"arrayObjectString",
    lb:"detail|quantity",
    cName,  
    subCName:subCNameInput,
    keyName:"detail_quantity",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["detail","quantity"]
  },
  {       
    templateType:"arrayObjectString",
    lb:"detail|result",
    cName,  
    subCName:subCNameInput,
    keyName:"detail_result",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["detail","result"]
  },
  {       
    templateType:"arrayObjectString",
    lb:"detail|remark",
    cName,  
    subCName:subCNameInput,
    keyName:"detail_remark",
    refInput:genRef(),
    inputType:"text",
    filterCommand:["detail","remark"]
  }
]


const StateTemplate={
    customerFilter,productFilter,billFilter
}
  
export default StateTemplate
  