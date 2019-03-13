var viz_info = {
    "mapDash" : "ProjectDashboardsNBA/Map",
    "playerDash" : "ProjectDashboardsNBA/Player",
    "leagueLeadersDash" :"ProjectDashboardsNBA/LeagueLeaders",
    "shotConversionDash" :"ProjectDashboardsNBA/ShotConversion"
};

var site_content_url = 'default';
var server = "http://localhost";

function build_viz_ur;(server, site_content_url, view_content_url){
    var full_url;
    if (site_content_url.toLowerCase() == "default"){
        full_url = server + "/views/" + view_content_url;
    }
    else {
        full_url = server + "/t/" + site_content_url + "/views/" + view_content_url;
    }
    return full_url
}

var vizzes = {};

var workbook_name;
var view_name;

var cureent_viz;
var book;

var viz_div_z_index = {
    "cover_div": 2
};

var options = {
    onFirstInteractive: completeLoad,
    toolbarPosition: tableau.ToolbarPosition.TOP
};

var divElement = document.getElementById('viz1552326723993');
var vizElement = divElement.getElementsByTagName('object')[0];
  
vizElement.style.minWidth='420px';
vizElement.style.maxWidth='650px';
vizElement.style.width='100%';
vizElement.style.minHeight='610px';
vizElement.style.maxHeight='910px';
vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
  
var scriptElement = document.createElement('script');

scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);