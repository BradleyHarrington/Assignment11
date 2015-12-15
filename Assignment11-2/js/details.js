$(function() {
    
    $("body").on("click", "#result a", function(event) {
        
            console.log("This has been clicked");
            var employeeName = $(this).children("h2").html();
            console.log( employeeName );
//            $("#homewrap").hide();
            
            $.ajax({
                type: "get",
                url: "data/data.json",
                beforeSend: function() {$("#detailsresult").html("Loading...");},
                timeout: 3000,
                error: function(xhr, status, error) {
                    alert("Error: " + xhr.status + " - JSON File " + error);
                },
                dataType: "json",
                success: function(response) {
                    
                    $("#detailsresult").html("");
                    $.each(response, function() {
                        var output = "<ul>";
                        for (var i in this.employees) {
                            output+="<li>" + this.employees[i].id + " " + this.employees[i].name + " " + this.employees[i].reportsto + "</li>";
                            
                        }
                        output += "</ul>";
                        console.log(output);
                        $.each(this, function(key, value) {
                            
                            
//                            console.log(this.name);
                            if (this.name == employeeName) { 
                                
                            $("#detailsresulttop").append( 
                            "<li id=\"employee\"><a href=\"#\">" + "<img src=\"" + value.imagepath + "\">" +
                            "<h2>" + value.name + "</h2>" + 
                            "<p>" + value.title + "</p></a>" + 
                            "</li>" +
                            ) // end of append
                            $("#detailsresult").append( 
                            "<li><a href=\"#\" id=\"vmanager\"><h3>View Manager</h3>" +
                            "<p>" + "Managers name" + "</p></a>" +                                             "</li>" +
                            
                            "<li><a href=\"#\"><h3>View Direct Reports</h3>" +
                            "<p>" + "# that report" + "</p></a>" +
                            "</li>" +
                            
                            "<li><a href=\"tel:" + value.officenumber + "\" data-rel=\"external\"><h3>Call Office</h3>" +
                            "<p>" + value.officenumber + "</p></a>" +
                            "</li>" +
                            
                            "<li><a href=\"tel:" + value.cellnumber + "\" data-rel=\"external\"><h3>Call Office</h3>" +
                            "<p>" + value.cellnumber + "</p></a>" +
                            "</li>"
                            
                            
                            ) // end of append
                            $("#detailsresult").listview( "refresh" );    
                            } // end of if statement
                        }); // end of each(this
                    
                    }); // end of each(response

                } // end of success
            }); // end of ajax call

    
    }); // end of body on click
    
    
}); // end of $function