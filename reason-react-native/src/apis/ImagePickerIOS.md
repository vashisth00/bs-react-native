---
id: apis/ImagePickerIOS
title: ImagePickerIOS
wip: true
---

```reason
type imageUri = string;

[@bs.module "react-native"] [@bs.scope "ImagePickerIOS"]
external canUseCamera: (bool => unit) => unit = "";

[@bs.module "react-native"] [@bs.scope "ImagePickerIOS"]
external canRecordVideos: (bool => unit) => unit = "";

type cameraDialogConfig;
[@bs.obj]
external cameraDialogConfig: (~videoMode: bool=?, unit) => cameraDialogConfig =
  "";

type selectDialogConfig;
[@bs.obj]
external selectDialogConfig:
  (~showImages: bool=?, ~showVideos: bool=?, unit) => selectDialogConfig =
  "";

[@bs.module "react-native"] [@bs.scope "ImagePickerIOS"]
external openCameraDialog:
  (
    ~config: cameraDialogConfig,
    ~onSuccess: imageUri => unit,
    ~onError: 'error => unit
  ) =>
  unit =
  "";

[@bs.module "react-native"] [@bs.scope "ImagePickerIOS"]
external openSelectDialog:
  (
    ~config: selectDialogConfig,
    ~onSuccess: imageUri => unit,
    ~onError: 'error => unit
  ) =>
  unit =
  "";

```
