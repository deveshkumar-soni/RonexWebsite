jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initcarousel-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    if ( typeof html5Lightbox === "undefined" )
    {
        html5Lightbox = jQuery(".html5lightbox").html5lightbox({
            skinsfoldername:"",
            jsfolder:jsFolder,
            barheight:64,
            showtitle:true,
            showdescription:false,
            shownavigation:false,
            thumbwidth:80,
            thumbheight:60,
            thumbtopmargin:12,
            thumbbottommargin:8,
            titlebottomcss:'{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}',
            descriptionbottomcss:'{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}'
        });
    }
    jQuery("#amazingcarousel-1").amazingcarousel({
        jsfolder:jsFolder,
        width:350,
        height:270,
        skinsfoldername:"",
        interval:3000,
        scrollmode:"page",
        itembottomshadowimagetop:100,
        donotcrop:false,
        navheight:16,
        random:false,
        showhoveroverlay:true,
        height:270,
        arrowheight:32,
        lightboxdescriptionbottomcss:"{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",
        itembackgroundimagewidth:100,
        skin:"Classic",
        responsive:true,
        lightboxtitlebottomcss:"{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",
        navstyle:"none",
        enabletouchswipe:true,
        backgroundimagetop:-40,
        navwidth:16,
        arrowstyle:"none",
        navswitchonmouseover:false,
        arrowhideonmouseleave:1000,
        screenquery:{
	mobile: {
		screenwidth: 600,
		visibleitems: 1
	}
},
        hoveroverlayimage:"hoveroverlay-64-64-3.png",
        itembottomshadowimage:"itembottomshadow-100-100-5.png",
        lightboxshowdescription:false,
        width:350,
        watermarklinkcss:"text-decoration:none;font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;",
        showhoveroverlayalways:false,
        transitioneasing:"easeOutExpo",
        lightboxshownavigation:false,
        showitembackgroundimage:false,
        watermarklink:"http://amazingcarousel.com?source=watermark",
        itembottomshadowimagewidth:100,
        playvideoimagepos:"center",
        circular:false,
        arrowimage:"arrows-32-32-2.png",
        showbottomshadow:false,
        watermarkstyle:"text",
        supportiframe:false,
        watermarktext:"amazingcarousel.com",
        itembackgroundimagetop:0,
        navdirection:"horizontal",
        showbackgroundimage:false,
        lightboxbarheight:64,
        showplayvideo:true,
        spacing:3,
        scrollitems:1,
        lightboxthumbwidth:80,
        showwatermark:false,
        navimage:"bullet-16-16-0.png",
        backgroundimage:"",
        watermarktarget:"_blank",
        lightboxthumbbottommargin:8,
        arrowwidth:32,
        transparent:false,
        bottomshadowimagetop:95,
        bottomshadowimage:"bottomshadow-110-95-0.png",
        navmode:"page",
        itembackgroundimage:"",
        watermarkpositioncss:"display:block;position:absolute;bottom:8px;right:8px;",
        previewmode:false,
        lightboxthumbtopmargin:12,
        watermarkimage:"",
        watermarktextcss:"font:12px Arial,Tahoma,Helvetica,sans-serif;color:#666;padding:2px 4px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;background-color:#fff;opacity:0.9;filter:alpha(opacity=90);",
        showitembottomshadow:false,
        lightboxthumbheight:60,
        navspacing:8,
        pauseonmouseover:true,
        imagefillcolor:"FFFFFF",
        playvideoimage:"playvideo-64-64-0.png",
        visibleitems:3,
        lightboxshowtitle:true,
        direction:"horizontal",
        usescreenquery:false,
        bottomshadowimagewidth:110,
        autoplay:false,
        backgroundimagewidth:110,
        loop:0,
        transitionduration:1000
    });
});