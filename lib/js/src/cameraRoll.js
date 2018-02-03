// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Block                 = require("bs-platform/lib/js/block.js");
var Js_undefined          = require("bs-platform/lib/js/js_undefined.js");
var ReactNative           = require("react-native");
var UtilsRN$BsReactNative = require("./private/utilsRN.js");

function mapFileType(fileType) {
  if (fileType !== 0) {
    return "photo";
  } else {
    return "video";
  }
}

function mapGroupType(groupType) {
  switch (groupType) {
    case 0 : 
        return "All";
    case 1 : 
        return "Album";
    case 2 : 
        return "Event";
    case 3 : 
        return "Faces";
    case 4 : 
        return "Library";
    case 5 : 
        return "PhotoStream";
    case 6 : 
        return "SavedPhotos";
    
  }
}

function mapAssetType(assetType) {
  switch (assetType) {
    case 0 : 
        return "All";
    case 1 : 
        return "Videos";
    case 2 : 
        return "Photos";
    
  }
}

function saveToCameraRoll(uri, type_, _) {
  var fileType = Js_undefined.from_opt(UtilsRN$BsReactNative.option_map(mapFileType, type_));
  return ReactNative.CameraRoll.saveToCameraRoll(uri, fileType).then((function (uri) {
                  return Promise.resolve(/* Ok */Block.__(0, [uri]));
                })).catch((function (error) {
                return Promise.resolve(/* Error */Block.__(1, [error]));
              }));
}

function getPhotos(first, after, $staropt$star, groupName, $staropt$star$1, mimeTypes, _) {
  var groupTypes = $staropt$star ? $staropt$star[0] : /* SavedPhotos */6;
  var assetType = $staropt$star$1 ? $staropt$star$1[0] : /* Photos */2;
  var groupTypes$1 = mapGroupType(groupTypes);
  var assetType$1 = mapAssetType(assetType);
  var tmp = {
    first: first,
    groupTypes: groupTypes$1,
    assetType: assetType$1
  };
  if (after) {
    tmp.after = after[0];
  }
  if (groupName) {
    tmp.groupName = groupName[0];
  }
  if (mimeTypes) {
    tmp.mimeTypes = mimeTypes[0];
  }
  return ReactNative.CameraRoll.getPhotos(tmp);
}

exports.saveToCameraRoll = saveToCameraRoll;
exports.getPhotos        = getPhotos;
/* react-native Not a pure module */