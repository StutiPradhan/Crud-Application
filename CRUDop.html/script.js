var selectedRow=null;
function onFormSubmit(){
    event.preventDefault();
    var formData=readFormData();
    if(selectedRow===null){
        insertNewRecord(formData);
    }
    else{
updateRecord(formData);
    }
    resetForm();
}
//Retrieve the data
function readFormData(){
    var formData={};
        formData["productCode"]=document.getElementById("productCode").value;
        formData["product"]=document.getElementById("product").value;
        formData["Quantity"]=document.getElementById("Quantity").value;
        formData["perprice"]=document.getElementById("perprice").value;
        return formData;
}
//Insert the data
function insertNewRecord(data){
    var table=document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);

    var cell1=newRow.insertCell(0);
        cell1.innerHTML=data.productCode;
    var cell2=newRow.insertCell(1);
        cell2.innerHTML=data.product;
    var cell3=newRow.insertCell(2);
        cell3.innerHTML=data.Quantity;
    var cell4=newRow.insertCell(3);
        cell4.innerHTML=data.perprice;
    var cell5=newRow.insertCell(4);
        cell5.innerHTML=`<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}
//Edit the data
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("productCode").value=selectedRow.cells[0].innerHTML;
    document.getElementById("product").value=selectedRow.cells[1].innerHTML;
    document.getElementById("Quantity").value=selectedRow.cells[2].innerHTML;
    document.getElementById("perprice").value=selectedRow.cells[3].innerHTML;

}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.productCode;
    selectedRow.cells[1].innerHTML=formData.product;
    selectedRow.cells[2].innerHTML=formData.Quantity;
    selectedRow.cells[3].innerHTML=formData.perprice;

}
//Delete a data
function onDelete(td){
    if(confirm('Do you want to delete this record')){
        row=td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}
//Reset the data
function resetForm(){
   document.getElementById('productCode').value='';
   document.getElementById('product').value='';
   document.getElementById('Quantity').value='';
   document.getElementById('perprice').value='';

}
