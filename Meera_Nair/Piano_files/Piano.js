// Created by iWeb 3.0.4 local-build-20121111

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,0,4,265),url:'Piano_files/stroke.png'},{rect:new IWRect(-2,-2,4,2),url:'Piano_files/stroke_1.png'},{rect:new IWRect(2,-2,314,2),url:'Piano_files/stroke_2.png'},{rect:new IWRect(316,-2,5,2),url:'Piano_files/stroke_3.png'},{rect:new IWRect(316,0,5,265),url:'Piano_files/stroke_4.png'},{rect:new IWRect(316,265,5,4),url:'Piano_files/stroke_5.png'},{rect:new IWRect(2,265,314,4),url:'Piano_files/stroke_6.png'},{rect:new IWRect(-2,265,4,4),url:'Piano_files/stroke_7.png'}],new IWSize(319,266))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Piano_files/PianoMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
