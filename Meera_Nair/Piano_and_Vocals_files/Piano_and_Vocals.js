// Created by iWeb 3.0.4 local-build-20121111

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,0,4,268),url:'Piano_and_Vocals_files/stroke.png'},{rect:new IWRect(-2,-2,4,2),url:'Piano_and_Vocals_files/stroke_1.png'},{rect:new IWRect(2,-2,317,2),url:'Piano_and_Vocals_files/stroke_2.png'},{rect:new IWRect(319,-2,5,2),url:'Piano_and_Vocals_files/stroke_3.png'},{rect:new IWRect(319,0,5,268),url:'Piano_and_Vocals_files/stroke_4.png'},{rect:new IWRect(319,268,5,3),url:'Piano_and_Vocals_files/stroke_5.png'},{rect:new IWRect(2,268,317,3),url:'Piano_and_Vocals_files/stroke_6.png'},{rect:new IWRect(-2,268,4,3),url:'Piano_and_Vocals_files/stroke_7.png'}],new IWSize(322,269))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Piano_and_Vocals_files/Piano_and_VocalsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
