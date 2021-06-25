var map = L.map('map').setView([46.8, 8.5], 7);


if (screen.width > 800) {
       map.setView([46.8, 8.5], 7)
	   map.scrollWheelZoom.disable()
} else if (screen.width < 400) {
       map.setView([46.8, 8.5], 5.5)
	   map.scrollWheelZoom.enabled()
} else {
       map.setView([46.8, 8.5], 7)
	   map.scrollWheelZoom.enabled()
}

var watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
});

var toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lines/{z}/{x}/{y}{r}.{ext}', {
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
});

watercolor.addTo(map)
toner.addTo(map)

var xrIcon = L.icon({
  iconUrl:'/images/map/marker.png',
  iconSize: [20,30],
  iconAnchor:[0,30],
  popupAnchor: [10,-30]
})

var xrIcon2 = L.icon({
  iconUrl:'/images/map/marker2.png',
  iconSize: [20,30],
  iconAnchor:[0,30],
  popupAnchor: [10,-30]		
})

var xrIcon3 = L.icon({
  iconUrl:'/images/map/marker3.png',
  iconSize: [20,30],
  iconAnchor:[0,30],
  popupAnchor: [10,-30]	
})

var xrIcon4 = L.icon({
  iconUrl:'/images/map/marker4.png',
  iconSize: [20,30],
  iconAnchor:[0,30],
  popupAnchor: [10,-30]	
})

var xrIcon5 = L.icon({
  iconUrl:'/images/map/marker5.png',
  iconSize: [20,30],
  iconAnchor:[0,30],
  popupAnchor: [10,-30]	
})

var xrIcon6 = L.icon({
  iconUrl:'/images/map/markerdoc.png',
  iconSize: [20,30],
  iconAnchor:[0,30],
  popupAnchor: [10,-30]	
})


var marker2 = L.marker([46.4598, 6.842],{icon:xrIcon}).addTo(map);
marker2.bindPopup("<b> XR Riviera </b>	<br>																												 <a href=https://www.facebook.com/xr.riviera/ target=_blank> <img src=/images/map/fb.svg > </a>																		<a href=https://www.instagram.com/xrriviera target=_blank> <img src=/images/map/insta.svg > </a>																 <a href=mailto:xr-riviera@riseup.net target=_blank> <img src=/images/map/mail.svg > </a> ");

var marker3 = L.marker([46.2004, 6.1406],{icon:xrIcon}).addTo(map);
marker3.bindPopup("<b> XR Genève </b> <br> French-speaking branch <br>																						<a href=https://www.facebook.com/XRgeneve/ target=_blank> <img src=/images/map/fb.svg > </a>																	  <a href=https://www.instagram.com/xrgeneve/ target=_blank> <img src=/images/map/insta.svg > </a>																  <a href=mailto:xr-geneve@riseup.net target=_blank> <img src=/images/map/mail.svg > </a> ");

var marker4 = L.marker([46.806419127034886, 7.161710848256937],{icon:xrIcon}).addTo(map);
marker4.bindPopup("<b> XR Fribourg </b>	<br>																												<a href=https://xr-fribourg.ch target=_blank> <img src=/images/map/xr.svg > </a>																				  <a href=https://www.facebook.com/xrfribourg/ target=_blank> <img src=/images/map/fb.svg > </a>																		<a href=https://www.instagram.com/xrfribourg/ target=_blank> <img src=/images/map/insta.svg > </a>																<a href=mailto:info@xr-fribourg.ch target=_blank> <img src=/images/map/mail.svg > </a> ");

var marker5 = L.marker([46.992748, 6.939965],{icon:xrIcon}).addTo(map);
marker5.bindPopup("<b> XR Neuchâtel </b> <br>																												 <a href=https://www.facebook.com/XRNeuchatel/ target=_blank> <img src=/images/map/fb.svg > </a>																	  <a href=https://www.instagram.com/xrneuchatel/ target=_blank> <img src=/images/map/insta.svg > </a>																  <a href=mailto:xr-neuchatel@protonmail.com target=_blank> <img src=/images/map/mail.svg > </a> ");

var marker6 = L.marker([47.1368, 7.2492],{icon:xrIcon}).addTo(map);
marker6.bindPopup("<b> XR Biel/Bienne </b>	<br>																											 <a href=https://www.facebook.com/XRBielBienne/ target=_blank> <img src=/images/map/fb.svg > </a>																	 <a href=https://www.instagram.com/xrbielbienne/ target=_blank> <img src=/images/map/insta.svg > </a>	  														<a href=mailto:xr-biel-bienne@protonmail.com target=_blank> <img src=/images/map/mail.svg > </a> ");

var marker7 = L.marker([46.94706828186046, 7.444089800473687],{icon:xrIcon}).addTo(map);
marker7.bindPopup("<b> XR Bern </b>	<br>																													<a href=https://www.facebook.com/XRBern/ target=_blank> <img src=/images/map/fb.svg > </a>	 </a>																  <a href=mailto:bern@xrebellion.ch target=_blank> <img src=/images/map/mail.svg > </a> ");

var marker8 = L.marker([47.3715, 7.3606],{icon:xrIcon}).addTo(map);
marker8.bindPopup("<b> XR Jura </b>	<br>																													<a href=https://linktr.ee/XRJURA target=_blank> <img src=/images/map/xr.svg > </a>																		  <a href=https://www.instagram.com/xrjura/ target=_blank> <img src=/images/map/insta.svg > </a>																		  <a href=mailto:xrjura@riseup.net target=_blank> <img src=/images/map/mail.svg > </a> ");

var marker9 = L.marker([47.5634, 7.5871],{icon:xrIcon}).addTo(map);
marker9.bindPopup("<b> XR Basel </b>	<br>																												<a href=https://www.facebook.com/extinctionrebellionbasel/ target=_blank> <img src=/images/map/fb.svg > </a>													  <a href=https://www.instagram.com/xr_basel/ target=_blank> <img src=/images/map/insta.svg > </a>																	 <a href=mailto:basel@xrebellion.ch target=_blank> <img src=/images/map/mail.svg > </a> ");

var marker10 = L.marker([46.8745, 9.5222],{icon:xrIcon}).addTo(map);
marker10.bindPopup("<b> XR Graubünden </b>	<br>																											<a href=https://xrgraubuenden.jimdofree.com/ target=_blank> <img src=/images/map/xr.svg > </a>																		<a href=https://twitter.com/XR_Graubuenden target=_blank> <img src=/images/map/twitter.svg > </a>																	 <a href=https://www.instagram.com/xrgraubuenden/ target=_blank> <img src=/images/map/insta.svg > </a>															<a href=mailto:xrontherocks@protonmail.ch target=_blank> <img src=/images/map/mail.svg > </a> ");

var marker11 = L.marker([47.366893204607294, 8.54311879670668],{icon:xrIcon}).addTo(map);
marker11.bindPopup("<b> XR Zürich </b>	<br>																												<a href=https://xr-zuerich.ch target=_blank> <img src=/images/map/xr.svg > </a>																					  <a href=https://www.facebook.com/xrzurich/ target=_blank> <img src=/images/map/fb.svg > </a>																	  <a href=https://twitter.com/XRZurich target=_blank> <img src=/images/map/twitter.svg > </a>																		  <a href=https://t.me/xrzhinfo target=_blank> <img src=/images/map/telegram.svg ></a>																			  <a href=mailto:contact@xr-zuerich.ch target=_blank> <img src=/images/map/mail.svg > </a> ");

var marker12 = L.marker([46.0243, 8.9499],{icon:xrIcon}).addTo(map);
marker12.bindPopup("<b> XR Ticino </b>	<br>																												<a href=https://www.facebook.com/XRTicino/ target=_blank> <img src=/images/map/fb.svg > </a>																					  <a href=https://www.instagram.com/xr_ticino/ target=_blank> <img src=/images/map/insta.svg > </a>																				      <a href=mailto:ticino@xrebellion.ch target=_blank> <img src=/images/map/mail.svg > </a> ");

var marker13 = L.marker([46.2656, 7.3685],{icon:xrIcon}).addTo(map);
marker13.bindPopup("<b> XR Valais </b>	<br>																												<a href=https://www.facebook.com/xrebvs target=_blank> <img src=/images/map/fb.svg > </a>																			 <a href=https://www.instagram.com/extinctionrebellion_valais/ target=_blank> <img src=/images/map/insta.svg > </a>												 <a href=mailto:xrvc@protonmail.ch target=_blank> <img src=/images/map/mail.svg > </a> ");

var marker14 = L.marker([47.1642, 8.5185],{icon:xrIcon}).addTo(map);
marker14.bindPopup("<b> XR Zug </b>		<br>																												<a href=https://www.facebook.com/xrzug/ target=_blank> <img src=/images/map/fb.svg > </a>");

var marker15 = L.marker([47.423561, 9.377159],{icon:xrIcon}).addTo(map);
marker15.bindPopup("<b> XR St. Gallen </b>		<br>																										<a href=https://www.facebook.com/XRstgallen/ target=_blank> <img src=/images/map/fb.svg > </a>");

var marker16 = L.marker([47.20807443286507, 7.541120909638496],{icon:xrIcon}).addTo(map);
marker16.bindPopup("<b> XR Solothurn </b>	<br>																											<a href=https://www.facebook.com/xrsolothurn/ target=_blank> <img src=/images/map/fb.svg > </a>																			  <a href=https://twitter.com/XRSolothurn target=_blank> <img src=/images/map/twitter.svg > </a>	  														<a href=mailto:solothurn@xrebellion.ch target=_blank> <img src=/images/map/mail.svg > </a> ");

var marker22 = L.marker([47.04603744169243, 8.320729754213843],{icon:xrIcon}).addTo(map);
marker22.bindPopup("<b> XR Lucern </b>		<br>																											 <a href=https://www.xr-luzern.ch/ target=_blank> <img src=/images/map/xr.svg > </a>																					<a href=https://www.facebook.com/XRLuzern/ target=_blank> <img src=/images/map/fb.svg > </a>																	 <a href=https://twitter.com/xrluzern target=_blank> <img src=/images/map/twitter.svg > </a																		 <a href=mailto:xrluzern@protonmail.com target=_blank> <img src=/images/map/mail.svg > </a> ");

var marker17 = L.marker([46.50496426587959, 6.666794671375716],{icon:xrIcon3}).addTo(map);
marker17.bindPopup("<b> XR Youth Lausanne </b>	<br>																										  <a href=https://www.instagram.com/xrlausanne.youth/ target=_blank> <img src=/images/map/insta.svg > </a>															<a href=mailto:xrlausanne-youth@xrebellion.ch target=_blank> <img src=/images/map/mail.svg > </a> ");

var marker18 = L.marker([46.527570367032524, 6.585649795054573],{icon:xrIcon2}).addTo(map);
marker18.bindPopup("<b> Animal Rebellion Lausanne </b>	<br>			    																				 <a href=https://www.facebook.com/AnimalRebellionLausanne/ target=_blank> <img src=/images/map/fb.svg > </a>														  <a href=https://www.instagram.com/animalrebellionlausanne/ target=_blank> <img src=/images/map/insta.svg > </a>													<a href=mailto:animalrebellion-lausanne@riseup.net target=_blank> <img src=/images/map/mail.svg > </a> ");

var marker19 = L.marker([46.8, 7.5],{icon:xrIcon5}).addTo(map);
marker19.bindPopup("<b> Christian Climate Action Switzerland </b>	<br>    																				 <a href=https://christianclimateaction.ch/ target=_blank> <img src=/images/map/xr.svg > </a>																		<a href=https://www.facebook.com/CKKACCACC target=_blank> <img src=/images/map/fb.svg > </a>																		 <a href=mailto:cka-acc@protonmail.ch target=_blank> <img src=/images/map/mail.svg > </a> ");

var marker23 = L.marker([46.8, 7.4],{icon:xrIcon6}).addTo(map);
marker23.bindPopup("<b> Doctors for XR Switzerland </b>	<br>			    																				 <a href=https://www.facebook.com/doctors4xr.ch/ target=_blank> <img src=/images/map/fb.svg > </a>																	<a href=mailto:doctors4xr@protonmail.ch target=_blank> <img src=/images/map/mail.svg > </a> ");

var marker20 = L.marker([46.518741479328874, 6.5683485539101305],{icon:xrIcon4}).addTo(map);
marker20.bindPopup("<b> Student Rebellion </b>	<br>			    																						 <a href=https://www.instagram.com/student.rebellion/ target=_blank> <img src=/images/map/insta.svg > </a>														  <a href=mailto:studentrebellion@riseup.net target=_blank> <img src=/images/map/mail.svg > </a> ");

var marker21 = L.marker([46.2, 6.1],{icon:xrIcon4}).addTo(map);
marker21.bindPopup("<b> XR Geneva </b><br> English-speaking branch 	<br>			    																	 <a href=https://twitter.com/XRGE_Int target=_blank> <img src=/images/map/twitter.svg > </a>																		  <a href=mailto:xr-geneva-international@xrebellion.ch target=_blank> <img src=/images/map/mail.svg > </a> ");

var marker1 = L.marker([46.5182, 6.6296],{icon:xrIcon}).addTo(map);
marker1.bindPopup("<b> XR Lausanne </b>	<br>																												<a href=https://xrlausanne.ch target=_blank> <img src=/images/map/xr.svg > </a>																					  <a href=https://www.facebook.com/xrlausanne/ target=_blank> <img src=/images/map/fb.svg > </a>																	  <a href=https://www.instagram.com/xrlausanne/ target=_blank> <img src=/images/map/fb.svg > </a>																	  <a href=https://twitter.com/xrlausanne target=_blank> <img src=/images/map/twitter.svg > </a>																	  <a href=https://https://t.me/xrlausanne target=_blank> <img src=/images/map/telegram.svg ></a>																	  <a href=mailto:xr-lausanne@riseup.net target=_blank> <img src=/images/map/mail.svg > </a> ");

var marker24 = L.marker([46.7, 7.3],{icon:xrIcon}).addTo(map);
marker24.bindPopup("<b> XR Queer Rebels </b><br>								    																				 <a href=https://www.facebook.com/XRqueerrebels target=_blank> <img src=/images/map/fb.svg > </a>");

var marker25 = L.marker([46.325, 6.947],{icon:xrIcon}).addTo(map);
marker25.bindPopup(
  '<b>XR Chablais</b><br />'
  + '<a href="mailto:xr-chablais@protonmail.com">'
  + '<img src="/images/map/mail.svg" alt="e-mail" />'
  + '</a>'
);

marker1.on('mouseover', function(event){  marker1.openPopup(); });
marker2.on('mouseover', function(event){  marker2.openPopup(); });
marker3.on('mouseover', function(event){ marker3.openPopup(); });
marker4.on('mouseover', function(event){ marker4.openPopup(); });
marker5.on('mouseover', function(event){  marker5.openPopup(); });
marker6.on('mouseover', function(event){ marker6.openPopup(); });
marker7.on('mouseover', function(event){ marker7.openPopup(); });
marker8.on('mouseover', function(event){  marker8.openPopup(); });
marker9.on('mouseover', function(event){ marker9.openPopup(); });
marker10.on('mouseover', function(event){ marker10.openPopup();});
marker11.on('mouseover', function(event){ marker11.openPopup(); });
marker12.on('mouseover', function(event){	  marker12.openPopup();	});
marker13.on('mouseover', function(event){	  marker13.openPopup();	});
marker14.on('mouseover', function(event){  marker14.openPopup();});
marker15.on('mouseover', function(event){	  marker15.openPopup();});
marker16.on('mouseover', function(event){  marker16.openPopup();	});
marker17.on('mouseover', function(event){	  marker17.openPopup();});
marker18.on('mouseover', function(event){  marker18.openPopup();});
marker19.on('mouseover', function(event){marker19.openPopup();});
marker20.on('mouseover', function(event){ marker20.openPopup();});
marker21.on('mouseover', function(event){marker21.openPopup();});
marker22.on('mouseover', function(event){marker22.openPopup();});
marker23.on('mouseover', function(event){marker23.openPopup();});
marker24.on('mouseover', function(event){marker24.openPopup();});
marker25.on('mouseover', function(event){marker25.openPopup();});
