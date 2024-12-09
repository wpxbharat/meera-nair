// Created by iWeb 3.0.4 local-build-20121111

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,0,4,272),url:'Guitar_files/stroke.png'},{rect:new IWRect(-2,-2,4,2),url:'Guitar_files/stroke_1.png'},{rect:new IWRect(2,-2,322,2),url:'Guitar_files/stroke_2.png'},{rect:new IWRect(324,-2,5,2),url:'Guitar_files/stroke_3.png'},{rect:new IWRect(324,0,5,272),url:'Guitar_files/stroke_4.png'},{rect:new IWRect(324,272,5,4),url:'Guitar_files/stroke_5.png'},{rect:new IWRect(2,272,322,4),url:'Guitar_files/stroke_6.png'},{rect:new IWRect(-2,272,4,4),url:'Guitar_files/stroke_7.png'}],new IWSize(327,273))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Guitar_files/GuitarMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
