$(function() {
    
    $.getJSON("data/data.json", function (data) {
        
    
    
        $("body").on("click", "#vmanager", function(event) {
        
            console.log("manager has been clicked");
            var employeeName = $(this).children("p").html();
            console.log( employeeName );
//            $("#homewrap").hide();
            
             $("#managerresultstop").html("");
            $("#managerresults").html("");
            
              $.each(data, function() {
                  var output;
                  var managersname;
                  var managersID;
                  
//                  Gives you this employees managers ID
                  for (var i in data.employees) {
                         output+=data.employees[i].id + " " + data.employees[i].name + " " + data.employees[i].reportsto;
                        if (employeeName == data.employees[i].name) {
                            managersID = data.employees[i].reportsto
                            console.log(managersID);
                            }
                                                
                     }
//                  Gives you this employees managers Name                  
                  for (var i in data.employees) {
                         output+=data.employees[i].id + " " + data.employees[i].name + " " + data.employees[i].reportsto;
                        if (managersID == data.employees[i].id) {
                            managersname = data.employees[i].name
                            console.log(managersname);
                            
                        }
                        
                  }

//                  Gives you direct report #                  
                  var nreportsto, nreports1, nreports2, nreports3, nreports4, nreports5, nreports6, nreports7, nreports8, nreports9, nreports10, nreports11, nreports12;
                  nreportsto = nreports1 = nreports2 = nreports3 = nreports4 = nreports5 = nreports6 = nreports7 = nreports8 = nreports9 = nreports10 = nreports11 = nreports12 = 0;
                  for (var i in data.employees) {
                         output+=data.employees[i].id + " " + data.employees[i].name + " " + data.employees[i].reportsto;
                         if (data.employees[i].reportsto == 1) {
                            nreports1 += Number(1);
                         } else if (data.employees[i].reportsto == 2) {
                            nreports2 += Number(1);
                         } else if (data.employees[i].reportsto == 3) {
                            nreports3 += Number(1);
                         } else if (data.employees[i].reportsto == 4) {
                            nreports4 += Number(1);
                         } else if (data.employees[i].reportsto == 5) {
                            nreports5 += Number(1);
                         } else if (data.employees[i].reportsto == 6) {
                            nreports6 += Number(1);
                         } else if (data.employees[i].reportsto == 7) {
                            nreports7 += Number(1);
                         } else if (data.employees[i].reportsto == 8) {
                            nreports8 += Number(1);
                         } else if (data.employees[i].reportsto == 9) {
                            nreports9 += Number(1);
                         } else if (data.employees[i].reportsto == 10) {
                            nreports10 += Number(1);
                         } else if (data.employees[i].reportsto == 11) {
                            nreports11 += Number(1);
                         } else if (data.employees[i].reportsto == 12) {
                            nreports12 += Number(1);
                         } else {
                         
                         }
                        
                            
                        }
                        
                        console.log(nreports1);
                        
//                        console.log(output);
                  
                        $.each(this, function(key, value) {
                            
                            
                            console.log(this.name);
                        if (this.name == employeeName) { 
                            if (value.id == 1) {
                                nreportsto = nreports1;
                            } else if (value.id == 3) {
                                nreportsto = nreports3;
                            } else if (value.id == 4) {
                                nreportsto = nreports4;
                            } else if (value.id == 5) {
                                nreportsto = nreports5;
                            } else {
                                nreportsto = 0;
                            }

                        $("#managerresultstop").append( 
                        "<li id=\"employee\"><a href=\"#\">" + "<img src=\"" + value.imagepath + "\">" +
                        "<h2>" + value.name + "</h2>" + 
                        "<p>" + value.title + "</p></a>" + 
                        "</li><br>"
                         ) // end of append
                        
                        $("#managerresults").append( 
                        "<li><a href=\"#\" id=\"vmanager\"><h3>View Manager</h3>" +
                        "<p>" + managersname + "</p></a>" +                                             "</li>" +

                        "<li><a href=\"#\"><h3>View Direct Reports</h3>" +
                        "<p>" + nreportsto + "</p></a>" +
                        "</li>" +

                        "<li><a href=\"tel:" + value.officenumber + "\" data-rel=\"external\"><h3>Call Office</h3>" +
                        "<p>" + value.officenumber + "</p></a>" +
                        "</li>" +

                        "<li><a href=\"tel:" + value.cellnumber + "\" data-rel=\"external\"><h3>Call Office</h3>" +
                        "<p>" + value.cellnumber + "</p></a>" +
                        "</li>"

                            
                            ) // end of append
                            $("#managerresults").listview( "refresh" );
                            $("#managerresultstop").listview( "refresh" ); 
                            } // end of if statement
                        }); // end of each(this
                    
//                    }); // end of each(response
                });    // end of each loop            

        }); // end of body on click

//        $("#detailsresult").listview( "refresh" );
    }); // end of getJSON
    
}); // end of $function