
    function edit_row(num){

 document.getElementById("edit_button"+num).style.display="none";
 document.getElementById("save_button"+num).style.display="block";
	
 var occurance=document.getElementById("occurance_row"+num);
 var tinnitus=document.getElementById("tinnitus_row"+num);
 var duration1=document.getElementById("duration1_row"+num);
 var vertigo=document.getElementById("vertigo_row"+num);
 var duration2=document.getElementById("duration2_row"+num);
 var pressure=document.getElementById("pressure_row"+num);
 var duration3=document.getElementById("duration3_row"+num);
 var deafness=document.getElementById("deafness_row"+num);
 var duration4=document.getElementById("duration4_row"+num);
 var migriane=document.getElementById("migriane_row"+num);
 var duration5=document.getElementById("duration5_row"+num);



 var occurance_data=occurance.innerHTML;
 var tinnitus_data=tinnitus.innerHTML;
 var duration1_data=duration1.innerHTML;
 var vertigo_data=vertigo.innerHTML;
 var duration2_data=duration2.innerHTML;
 var pressure_data=pressure.innerHTML;
 var duration3_data=duration3.innerHTML;
 var deafness_data=deafness.innerHTML;
 var duration4_data=duration4.innerHTML;
 var migriane_data=migriane.innerHTML;
 var duration5_data=duration5.innerHTML;
	
 occurance.innerHTML="<input type='text' id='occurance_text"+num+"' value='"+occurance_data+"'>";
 tinnitus.innerHTML="<input type='text' id='tinnitus_text"+num+"' value='"+tinnitus_data+"'>";
 duration1.innerHTML="<input type='text' id='duration1_text"+num+"' value='"+duration1_data+"'>";
 vertigo.innerHTML="<input type='text' id='vertigo_text"+num+"' value='"+vertigo_data+"'>";
 duration2.innerHTML="<input type='text' id='duration2_text"+num+"' value='"+duration2_data+"'>";
 pressure.innerHTML="<input type='text' id='pressure_text"+num+"' value='"+pressure_data+"'>";
 duration3.innerHTML="<input type='text' id='duration3_text"+num+"' value='"+duration3_data+"'>";
 deafness.innerHTML="<input type='text' id='deafness_text"+num+"' value='"+deafness_data+"'>";
 duration4.innerHTML="<input type='text' id='duration4_text"+num+"' value='"+duration4_data+"'>";
 migriane.innerHTML="<input type='text' id='migriane_text"+num+"' value='"+migriane_data+"'>";
 duration5.innerHTML="<input type='text' id='duration5_text"+num+"' value='"+duration5_data+"'>";

 xhr = new XMLHttpRequest();
 xhr.open("PATCH","/");
 xhr.setRequestHeader("Content-Type","application/json");
 
 let data = {
    occurance: occurance_data.value,
    tinnitus: tinnitus_data.value,
    duration1: duration1_data.value,
    vertigo: vertigo_data.value,
    duration2: duration2_data.value,
    pressure: pressure_data.value,
    duration3: duration3_data.value,
    deafness: deafness_data.value,
    duration4: duration4_data.value,
    migriane: migriane_data.value,
    duration5: duration5_data.value
 }
 req.send(JSON.stringify(data));
 num.reset();
}

function save_row(num){
 var occurance_val=document.getElementById("occurance_text"+num).value;
 var tinnitus_val=document.getElementById("tinnitus_text"+num).value;
 var duration1_val=document.getElementById("duration1_text"+num).value;
 var vertigo_val=document.getElementById("vertigo_text"+num).value;
 var duration2_val=document.getElementById("duration2_text"+num).value;
 var pressure_val=document.getElementById("pressure_text"+num).value;
 var duration3_val=document.getElementById("duration3_text"+num).value;
 var deafness_val=document.getElementById("deafness_text"+num).value;
 var duration4_val=document.getElementById("duration4_text"+num).value;
 var migriane_val=document.getElementById("migriane_text"+num).value;
 var duration5_val=document.getElementById("duration5_text"+num).value;



 document.getElementById("occurance_row"+num).innerHTML=occurance_val;
 document.getElementById("tinnitus_row"+num).innerHTML=tinnitus_val;
 document.getElementById("duration1_row"+num).innerHTML=duration1_val;
 document.getElementById("vertigo_row"+num).innerHTML=vertigo_val;
 document.getElementById("duration2_row"+num).innerHTML=duration2_val;
 document.getElementById("pressure_row"+num).innerHTML=pressure_val;
 document.getElementById("duration3_row"+num).innerHTML=duration3_val;
 document.getElementById("deafness_row"+num).innerHTML=deafness_val;
 document.getElementById("duration4_row"+num).innerHTML=duration4_val;
 document.getElementById("migriane_row"+num).innerHTML=migriane_val;
 document.getElementById("duration5_row"+num).innerHTML=duration1_val;

 document.getElementById("edit_button"+num).style.display="block";
 document.getElementById("save_button"+num).style.display="none";

 xhr = new XMLHttpRequest();
 xhr.open("GET","/");
 xhr.setRequestHeader("Content-Type","application/json");
 xhr.addEventListener("load",responseHandler);

 let data = {
    occurance: occurance_val,
    tinnitus: tinnitus_val,
    duration1: duration1_val,
    vertigo: vertigo_val,
    duration2: duration2_val,
    pressure: pressure_val,
    duration3: duration3_val,
    deafness: deafness_val,
    duration4: duration4_val,
    migriane: migriane_val,
    duration5: duration5_val
 };
 console.log("fla");
 xhr.send(JSON.stringify(data));
 console.log("light");
}

function responseHandler() {
    console.log(xhr);

}


function delete_row(num)
{
 document.getElementById("row"+num+"").outerHTML="";
 xhr = new XMLHttpRequest();
 xhr.open("DELETE","/");
 xhr.setRequestHeader("Content-Type","application/json");
 xhr.addEventListener("load",rowDeleted);
 let data = {
    _id: id
 };
req.send(JSON.stringify(data));
}
function rowDeleted() {
    console.log("row is deleted");
    window.location.reload();
}

function add_row()
{
    console.log("blah");
 var new_occurance=document.getElementById("new_occurance").value;
 var new_tinnitus=document.getElementById("new_tinnitus").value;
 var new_duration1=document.getElementById("new_duration1").value;
 var new_vertigo=document.getElementById("new_vertigo").value;
 var new_duration2=document.getElementById("new_duration2").value;
 var new_pressure=document.getElementById("new_pressure").value;
 var new_duration3=document.getElementById("new_duration3").value;
 var new_deafness=document.getElementById("new_deafness").value;
 var new_duration4=document.getElementById("new_duration4").value;
 var new_migriane=document.getElementById("new_migriane").value;
 var new_duration5=document.getElementById("new_duration5").value;
	
 console.log("goo");
 var table=document.getElementById("record");
 var table_len=(table.rows.length)-1;
 console.log("whale");
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'> <td id='occurance_row"+table_len+"'>"+new_occurance+"</td><td id='tinnitus_row"+table_len+"'>"+new_tinnitus+"</td><td id='duration1_row"+table_len+"'>"+new_duration1+"</td><td id='vertigo_row"+table_len+"'>"+new_vertigo+"</td><td id='duration2_row"+table_len+"'>"+new_duration2+"</td><td id='pressure_row"+table_len+"'>"+new_pressure+"</td><td id='duration3_row"+table_len+"'>"+new_duration3+"</td><td id='deafness_row"+table_len+"'>"+new_deafness+"</td><td id='duration4_row"+table_len+"'>"+new_duration4+"</td><td id='migriane_row"+table_len+"'>"+new_migriane+"</td><td id='duration5_row"+table_len+"'>"+new_duration5+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
console.log("bleep");
 document.getElementById("new_occurance").value="";
 document.getElementById("new_tinnitus").value="";
 document.getElementById("new_duration1").value="";
 document.getElementById("new_vertigo").value="";
 document.getElementById("new_duration2").value="";
 document.getElementById("new_pressure").value="";
 document.getElementById("new_duration3").value="";
 document.getElementById("new_deafness").value="";
 document.getElementById("new_duration4").value="";
 document.getElementById("new_migriane").value="";
 document.getElementById("new_duration5").value="";
console.log("blah");

  xhr = new XMLHttpRequest();
 xhr.open("POST","/");
 xhr.setRequestHeader("Content-Type","application/json");
 xhr.addEventListener("load",responseHandler);

 let data = {
    occurance: new_occurance,
    tinnitus: new_tinnitus,
    duration1: new_duration1,
    vertigo: new_vertigo,
    duration2: new_duration2,
    pressure:new_pressure,
    duration3:new_duration3,
    deafness: new_deafness,
    duration4: new_duration4,
    migriane: new_migriane,
    duration5: new_duration5
 };
 console.log("foo");
 xhr.send(JSON.stringify(data));
 console.log("flubber");
}

function responseHandler() {
    console.log(xhr);

}