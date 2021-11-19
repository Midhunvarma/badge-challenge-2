
               function ajax() {
                var xhttp = new XMLHttpRequest();
                
                
                    }
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        var response = JSON.parse(this.responseText);
                        var j = response.grocery;
                        var output="";
            
                        for (var i = 0; i < j.length; i++) {
                            
                            var row = table.insertRow(i + 1);
            
                            
            
                            var cell1 = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            var cell3 = row.insertCell(2);
                            var cell4 = row.insertCell(3);
                            var cell5 = row.insertCell(4);
                            var cell6 = row.insertCell(5);
            
            
                            
                            cell1.innerHTML = j[i].SL.NO;
                            cell2.innerHTML = j[i].NAME;
                            cell3.innerHTML = j[i].QUANTITY;
                            cell4.innerHTML = j[i].UNIT;
                            cell5.innerHTML = j[i].DEPARTMENT;
                            cell6.innerHTML = j[i].NOTES;
                        }
             document.getElementById("protb").innerHTML=output;
            
                    }
                
                xhttp.open("GET", "grocery.json", true);
                xhttp.send();
            
            }