// Created by iWeb 3.0.4 local-build-20121127

function createMediaStream_id1()
{return IWCreatePhotocast("http://www.meeranair.org/Meera_Nair/FRC/Pages/2011_files/rss.xml",true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.meeranair.org/Meera_Nair/FRC/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.meeranair.org/Meera_Nair/FRC/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(221,221),new IWSize(221,119),new IWSize(221,355),27,27,0,new IWSize(0,0)),new IWStrokeParts([{rect:new IWRect(-3,3,8,212),url:'2011_files/stroke.png'},{rect:new IWRect(-4,-6,9,9),url:'2011_files/stroke_1.png'},{rect:new IWRect(5,-3,212,6),url:'2011_files/stroke_2.png'},{rect:new IWRect(217,-6,11,9),url:'2011_files/stroke_3.png'},{rect:new IWRect(217,3,11,212),url:'2011_files/stroke_4.png'},{rect:new IWRect(217,215,6,11),url:'2011_files/stroke_5.png'},{rect:new IWRect(5,215,212,7),url:'2011_files/stroke_6.png'},{rect:new IWRect(-6,215,11,11),url:'2011_files/stroke_7.png'}],new IWSize(221,221)),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,0,4,215),url:'2011_files/stroke_8.png'},{rect:new IWRect(-2,-2,4,2),url:'2011_files/stroke_9.png'},{rect:new IWRect(2,-2,254,2),url:'2011_files/stroke_10.png'},{rect:new IWRect(256,-2,5,2),url:'2011_files/stroke_11.png'},{rect:new IWRect(256,0,5,215),url:'2011_files/stroke_12.png'},{rect:new IWRect(256,215,5,4),url:'2011_files/stroke_13.png'},{rect:new IWRect(2,215,254,4),url:'2011_files/stroke_14.png'},{rect:new IWRect(-2,215,4,4),url:'2011_files/stroke_15.png'}],new IWSize(259,216))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('2011_files/2011Moz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();applyEffects()
initializeMediaStream_id1()}
function onPageUnload()
{Widget.onunload();}
