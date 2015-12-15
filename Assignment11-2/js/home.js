$(function() {
//    $("#result").hide();
//    $.ajax({
//                type: "get",
//                url: "data/data.json",
//                beforeSend: function() {$("#result").html("Loading...");},
//                timeout: 10000,
//                error: function(xhr, status, error) {
//                    alert("Error: " + xhr.status + " - JSON File " + error);
//                },
//                dataType: "json",
//                success: function(response) {
//                    
//                    $("#result").html("");
//                    $.each(response, function() {
//                        $.each(this, function(key, value) {
//                            $("#result").append(
//                            value.name + "<br>" +
//                            value.id  + "<br>" +
//                            value.reportsto  + "<br>"
//                            );
//                            
//                            console.log(value.id);
//                        });
//                    
//                    });
//                }
//            });
    
    $("#filterBasic-input").on("keypress", function(event) {
        
            console.log("Search has been clicked");
            
            $("#homewrap").hide();
//            $(":mobile-pagecontainer").pagecontainer("change", "#about");
            $.ajax({
                type: "get",
                url: "data/data.json",
                beforeSend: function() {$("#result").html("Loading...");},
                timeout: 500,
                error: function(xhr, status, error) {
                    alert("Error: " + xhr.status + " - JSON File " + error);
                },
                dataType: "json",
                success: function(response) {
                    
                    $("#result").html("");
                    
                    $.each(response, function() {
                        $.each(this, function(key, value) {
                           
                            
                            $("#result").append( 
                            "<li><a href=\"#details\">" + "<img src=\"" + value.imagepath + "\">" +
                            "<h2>" + value.name + "</h2>" +
                            "<p>" + value.title + "</p>" +
                            "</a>" + 
                            "</li>");
                        
                        });
                        $("#result").listview().listview("refresh"); 
                    
                    });
//                    $("#result").show();
                }
                
//                complete: function() {
                    
//                } 
            });

        
    });
    
    
});
