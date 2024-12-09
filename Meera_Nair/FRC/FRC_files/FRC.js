// Created by iWeb 3.0.4 local-build-20121127

function createMediaStream_id1()
{return IWCreateMediaCollection("http://www.meeranair.org/Meera_Nair/FRC/FRC_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.meeranair.org/Meera_Nair/FRC',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget6'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.meeranair.org/Meera_Nair/FRC',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(191,143),new IWSize(191,58),new IWSize(229,216),27,27,0,new IWSize(18,19)),new IWPhotoFrame([IWCreateImage('FRC_files/ul.png'),IWCreateImage('FRC_files/top.png'),IWCreateImage('FRC_files/ur.png'),IWCreateImage('FRC_files/right.png'),IWCreateImage('FRC_files/lr.png'),IWCreateImage('FRC_files/bottom.png'),IWCreateImage('FRC_files/ll.png'),IWCreateImage('FRC_files/left.png')],null,0,0.333333,130.000000,10.000000,118.000000,45.000000,147.000000,30.000000,157.000000,83.000000,251.000000,120.000000,260.000000,120.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget6',null,'widget7',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:2,offset:new IWPoint(1.0000,0.0000),color:'#3a060f',opacity:1.000000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-2,0,4,299),url:'FRC_files/stroke.png'},{rect:new IWRect(-2,-2,4,2),url:'FRC_files/stroke_1.png'},{rect:new IWRect(2,-2,220,2),url:'FRC_files/stroke_2.png'},{rect:new IWRect(222,-2,5,2),url:'FRC_files/stroke_3.png'},{rect:new IWRect(222,0,5,299),url:'FRC_files/stroke_4.png'},{rect:new IWRect(222,299,5,3),url:'FRC_files/stroke_5.png'},{rect:new IWRect(2,299,220,3),url:'FRC_files/stroke_6.png'},{rect:new IWRect(-2,299,4,3),url:'FRC_files/stroke_7.png'}],new IWSize(225,300)),shadow_1:new IWShadow({blurRadius:2,offset:new IWPoint(1.0000,-0.0000),color:'#3a060f',opacity:1.000000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('FRC_files/FRCMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()
initializeMediaStream_id1()}
function onPageUnload()
{Widget.onunload();}
