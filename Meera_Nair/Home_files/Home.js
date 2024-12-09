// Created by iWeb 3.0.4 local-build-20121111

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,0,4,379),url:'Home_files/stroke.png'},{rect:new IWRect(-2,-2,4,2),url:'Home_files/stroke_1.png'},{rect:new IWRect(2,-2,282,2),url:'Home_files/stroke_2.png'},{rect:new IWRect(284,-2,5,2),url:'Home_files/stroke_3.png'},{rect:new IWRect(284,0,5,379),url:'Home_files/stroke_4.png'},{rect:new IWRect(284,379,5,4),url:'Home_files/stroke_5.png'},{rect:new IWRect(2,379,282,4),url:'Home_files/stroke_6.png'},{rect:new IWRect(-2,379,4,4),url:'Home_files/stroke_7.png'}],new IWSize(287,380)),shadow_0:new IWShadow({blurRadius:2,offset:new IWPoint(1.0000,-0.0000),color:'#3a060f',opacity:1.000000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_files/HomeMoz.css')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
