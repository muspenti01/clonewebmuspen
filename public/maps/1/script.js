(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Image_E046CCD0_F5C2_AF6F_41CB_813F6D54F6DC",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "layout": "absolute",
 "overflow": "visible",
 "minWidth": 20,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "definitions": [{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.74,
  "pitch": 0
 },
 "id": "camera_F89A35D1_F60E_6C30_41E3_5586BFC3431C",
 "automaticZoomSpeed": 10
},
{
 "label": "27",
 "id": "panorama_FE599068_F16F_E1A3_41ED_724B9521111E",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -163.99,
   "distance": 1,
   "backwardYaw": 128.93,
   "panorama": "this.panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -138.8,
   "distance": 1,
   "backwardYaw": 55.36,
   "panorama": "this.panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D3BCE5D5_F36E_22ED_41EA_8E442CFE5CA5",
  "this.overlay_D070FF5B_F36E_3FE5_41C7_1485D454FD23",
  "this.overlay_D1A974D4_F3A2_E2E3_41D2_D0241F73B17D",
  "this.overlay_CAFA6155_F3BE_E3ED_41E8_D117B3302135",
  "this.panorama_FE599068_F16F_E1A3_41ED_724B9521111E_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -31.8,
  "pitch": -0.05
 },
 "id": "panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 76.25,
  "pitch": 0
 },
 "id": "camera_E640B826_F60E_6413_41DC_790CA542A64D",
 "automaticZoomSpeed": 10
},
{
 "label": "19",
 "id": "panorama_FE580989_F16E_2365_41D8_634BB18DEC92",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D0DBAF25_F2A2_1FAD_41E5_833CF04BED2B",
  "this.panorama_FE580989_F16E_2365_41D8_634BB18DEC92_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -34.24,
  "pitch": 0
 },
 "id": "camera_F8A5D94B_F60E_6410_41D9_46A339C5B7EF",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -71.35,
  "pitch": 0
 },
 "id": "camera_E62FC7F2_F60E_6BF3_41AD_79AB00250F59",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -112.71,
  "pitch": 0
 },
 "id": "camera_F8E299A6_F60E_6413_41B9_2E0FCFFD819E",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.3,
  "pitch": -0.31
 },
 "id": "panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 69.52,
  "pitch": 0
 },
 "id": "camera_E682285E_F60E_6430_41D9_5D1D31930D32",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 121.09,
  "pitch": 0
 },
 "id": "camera_F91839D2_F60E_6433_41E5_E3A2A74DE14F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -77.39,
  "pitch": 0
 },
 "id": "camera_F93DC9EE_F60E_6410_41DF_FB5F356B6A82",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 77.21,
  "pitch": 0
 },
 "id": "camera_F85378BB_F60E_6471_41B7_3371CFBC61D6",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -144.08,
  "pitch": 0
 },
 "id": "camera_E6205804_F60E_6417_41E7_2438A97CA268",
 "automaticZoomSpeed": 10
},
{
 "label": "16",
 "id": "panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -103.75,
   "distance": 1,
   "backwardYaw": -126.31,
   "panorama": "this.panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -37.47,
   "distance": 1,
   "backwardYaw": 9.26,
   "panorama": "this.panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D0DA9210_F2A2_2163_41AD_3A6F666EFD78",
  "this.overlay_D069B06B_F3A2_E1A5_41DF_3CBBB7E773AD",
  "this.overlay_D1F99572_F3A6_63A7_41E7_FB84BB7A248E",
  "this.overlay_D472F5F4_F3E2_22A3_41C4_F911CBBDF905",
  "this.panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "4",
 "id": "panorama_FE58C338_F162_27A3_41CB_C7900E8875A6",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 80.44,
   "distance": 1,
   "backwardYaw": 30.54,
   "panorama": "this.panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -91.48,
   "distance": 1,
   "backwardYaw": 81.36,
   "panorama": "this.panorama_FE3F0086_F161_E16F_41D8_737CAFF81653"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -10,
   "distance": 1,
   "backwardYaw": 51.96,
   "panorama": "this.panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_E9204A8C_F1E1_E163_41C8_2B389D5C0735",
  "this.overlay_ED559380_F1A2_2763_41D2_927DC779D49B",
  "this.panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_tcap0",
  "this.overlay_EA80A251_F642_DB11_41CB_B27167D505B9"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 31.27,
  "pitch": -2.24
 },
 "id": "panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -140.85,
  "pitch": 0
 },
 "id": "camera_F8F4D63D_F60E_6C71_41E7_E7DA0A6D4F23",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -96.13,
  "pitch": 0
 },
 "id": "camera_F9791704_F60E_6C17_41DA_E91C2F1C9512",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.panorama_FE58C338_F162_27A3_41CB_C7900E8875A6",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.panorama_FE3F0086_F161_E16F_41D8_737CAFF81653",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "media": "this.panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "media": "this.panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "media": "this.panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "media": "this.panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE282699_F16E_2165_41D2_F52180B0C487_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "media": "this.panorama_FE282699_F16E_2165_41D2_F52180B0C487",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "media": "this.panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "media": "this.panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "media": "this.panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "media": "this.panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "media": "this.panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE580989_F16E_2365_41D8_634BB18DEC92_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "media": "this.panorama_FE580989_F16E_2365_41D8_634BB18DEC92",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "media": "this.panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "media": "this.panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "media": "this.panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "media": "this.panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "media": "this.panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "media": "this.panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "media": "this.panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE599068_F16F_E1A3_41ED_724B9521111E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "media": "this.panorama_FE599068_F16F_E1A3_41ED_724B9521111E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "media": "this.panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "media": "this.panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "media": "this.panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "media": "this.panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "media": "this.panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "media": "this.panorama_FE59A317_F16E_676D_41DB_CCD9EB095074",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "media": "this.panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 0)",
   "media": "this.panorama_FE598948_F16E_23E3_41CB_E40AD99607B2",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "8",
 "id": "panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 47.04,
   "distance": 1,
   "backwardYaw": 74.92,
   "panorama": "this.panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -42.83,
   "distance": 1,
   "backwardYaw": 145.76,
   "panorama": "this.panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_E864D08B_F1E2_6165_41EC_8F8B925F48D0",
  "this.overlay_E8DE7BB7_F1E2_66AD_4192_2B5CBF9D277F",
  "this.overlay_EBEFBF0D_F1E2_1F7D_41E1_DA3D527D377A",
  "this.panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_tcap0",
  "this.overlay_E9FB778D_F645_B9F1_41D6_BE892D1628EC"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "23",
 "id": "panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE599068_F16F_E1A3_41ED_724B9521111E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 39.15,
   "distance": 1,
   "backwardYaw": 132.86,
   "panorama": "this.panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D3E117A6_F366_2EAF_41DC_4BE5DEAFD1B2",
  "this.overlay_D6159A0B_F362_2165_41E2_63B8828B259C",
  "this.panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.21,
  "pitch": -9.4
 },
 "id": "panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "26",
 "id": "panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -102.79,
   "distance": 1,
   "backwardYaw": -59.83,
   "panorama": "this.panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE599068_F16F_E1A3_41ED_724B9521111E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 86.82,
   "distance": 1,
   "backwardYaw": 154.12,
   "panorama": "this.panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 102.61,
   "distance": 1,
   "backwardYaw": 72.03,
   "panorama": "this.panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D042783A_F362_21A7_41E5_01F437EA3F33",
  "this.overlay_D153E297_F362_216D_41D0_2EAB7EE75535",
  "this.overlay_D03E3A7F_F362_619D_41D2_8E9FA3A5D1E0",
  "this.overlay_D0606C5D_F361_E19D_41D0_A7F906B4CC94",
  "this.panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "label": "28",
 "id": "panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 154.12,
   "distance": 1,
   "backwardYaw": 86.82,
   "panorama": "this.panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 128.93,
   "distance": 1,
   "backwardYaw": -163.99,
   "panorama": "this.panorama_FE599068_F16F_E1A3_41ED_724B9521111E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D0262BC9_F36F_E6E5_41EC_BAB9112E124A",
  "this.overlay_D048809C_F36E_2163_41E4_602F188C598A",
  "this.overlay_D489A5F9_F363_E2A5_41E0_A77ABE7CF732",
  "this.panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -138.42,
  "pitch": 0
 },
 "id": "camera_F92A99E0_F60E_640F_41DA_E92ACD36CFB7",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 164.85,
  "pitch": 0
 },
 "id": "camera_F9ECA7A8_F60E_6C1F_41E2_7F71E8206498",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.27,
  "pitch": 0
 },
 "id": "camera_E60EE7D6_F60E_6C33_41EB_DE377993A6ED",
 "automaticZoomSpeed": 10
},
{
 "label": "29",
 "id": "panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 72.03,
   "distance": 1,
   "backwardYaw": 102.61,
   "panorama": "this.panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 55.36,
   "distance": 1,
   "backwardYaw": -138.8,
   "panorama": "this.panorama_FE599068_F16F_E1A3_41ED_724B9521111E"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D024759D_F36E_229D_41D7_12AB86E109D1",
  "this.overlay_D08A9F5B_F3A3_FFE5_41D5_083D5812B086",
  "this.overlay_D010517C_F3A7_E3A3_41E8_C1FB13A9998A",
  "this.panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -67.4,
  "pitch": 0
 },
 "id": "camera_F904664D_F60E_6C11_41E0_1FF11B09C7E5",
 "automaticZoomSpeed": 10
},
{
 "label": "30",
 "id": "panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -30.51,
   "distance": 1,
   "backwardYaw": -38.86,
   "panorama": "this.panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D02C4C9A_F3A1_E167_41C8_929A288C67C3",
  "this.overlay_D1A4EBF7_F3A6_26AD_41E6_F9A3B8C81586",
  "this.overlay_ED495D61_F5C6_A931_41E0_98C1FCBE21EC",
  "this.overlay_ED97C37E_F5C5_B913_41ED_C0B7587D34E8",
  "this.overlay_ECC40566_F5C5_B932_41A1_82A65D854B28",
  "this.panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "label": "6",
 "id": "panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 83.87,
   "distance": 1,
   "backwardYaw": -10.1,
   "panorama": "this.panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -22.28,
   "distance": 1,
   "backwardYaw": 135.21,
   "panorama": "this.panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_E9CA7501_F1E2_E365_41E4_5F9852C6AD84",
  "this.overlay_EBA4DA9A_F1E2_2167_41D6_BA4013337984",
  "this.panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 157.72,
  "pitch": 0
 },
 "id": "camera_F9981731_F60E_6C70_419C_4F2799D2D986",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -104.76,
  "pitch": 0
 },
 "id": "camera_F8B055FD_F60E_6FF1_41E9_F57EE671F300",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -149.46,
  "pitch": 0
 },
 "id": "camera_F869D594_F60E_6C30_41E4_B3DCB64DD8C0",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -93.18,
  "pitch": 0
 },
 "id": "camera_F8C2760D_F60E_6C11_41A1_AD895125159A",
 "automaticZoomSpeed": 10
},
{
 "label": "35",
 "id": "panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D0C28F76_F36E_7FAF_41CD_620A84BDF3A5",
  "this.overlay_D364EF38_F3A2_7FA3_41D9_BC3CA9EE16C9",
  "this.panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 120.08,
  "pitch": 0
 },
 "id": "camera_F9CC6775_F60E_6CF1_41E3_E0D47F75498E",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -59.61,
  "pitch": 0
 },
 "id": "camera_F85968AA_F60E_6410_41DE_6772D124167F",
 "automaticZoomSpeed": 10
},
{
 "label": "17",
 "id": "panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 41.58,
   "distance": 1,
   "backwardYaw": -92.65,
   "panorama": "this.panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -15.15,
   "distance": 1,
   "backwardYaw": -21.8,
   "panorama": "this.panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -161.73,
   "distance": 1,
   "backwardYaw": -98.93,
   "panorama": "this.panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 108.65,
   "distance": 1,
   "backwardYaw": -111.42,
   "panorama": "this.panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D1FB2C92_F2A6_2167_41D5_7871530A0381",
  "this.overlay_D391D412_F2A6_E167_41E7_D4670DF1256C",
  "this.overlay_D0A5FBCE_F2A6_26FF_41E2_B25EB37994EA",
  "this.overlay_D173520D_F361_E17D_41DD_E974F9FFDFC5",
  "this.panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.11,
  "pitch": -0.05
 },
 "id": "panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.07,
  "pitch": 4.76
 },
 "id": "panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -99.56,
  "pitch": 0
 },
 "id": "camera_F9AA574A_F60E_6C10_41CC_95D356012102",
 "automaticZoomSpeed": 10
},
{
 "label": "14",
 "id": "panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 75.24,
   "distance": 1,
   "backwardYaw": 179,
   "panorama": "this.panorama_FE282699_F16E_2165_41D2_F52180B0C487"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -59.92,
   "distance": 1,
   "backwardYaw": -58.91,
   "panorama": "this.panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -92.65,
   "distance": 1,
   "backwardYaw": 41.58,
   "panorama": "this.panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D37B4E9D_F15E_7E9D_41E6_AFE519A955F7",
  "this.overlay_D0060AA3_F162_26A5_41D1_54C51042E3B2",
  "this.overlay_D1B4C6BE_F2A2_2E9F_41E8_DD69D38944E7",
  "this.panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -124.64,
  "pitch": 0
 },
 "id": "camera_E6722850_F60E_6430_41EB_B60B3B9F71B3",
 "automaticZoomSpeed": 10
},
{
 "label": "25",
 "id": "panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D67ADC3D_F35E_219D_41EC_B42FAC6DF274",
  "this.panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "label": "1",
 "id": "panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 51.96,
   "distance": 1,
   "backwardYaw": -10,
   "panorama": "this.panorama_FE58C338_F162_27A3_41CB_C7900E8875A6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -10.1,
   "distance": 1,
   "backwardYaw": 83.87,
   "panorama": "this.panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -117.86,
   "distance": 1,
   "backwardYaw": -21.03,
   "panorama": "this.panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_E4F5A37D_F162_E79D_41D6_60DB0A8F2E07",
  "this.overlay_E9F34DE0_F1E6_62A3_41DD_C2D3FDA86D13",
  "this.overlay_EA08408D_F1A6_217D_41EB_2C1889258DCC",
  "this.panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0",
  "this.overlay_E8FBABA3_F5BF_A931_41DD_85C7BB20E3C2",
  "this.overlay_EE1B2444_F5BE_FF77_41D7_2EFA696A6C73"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -112.71,
  "pitch": 0
 },
 "id": "camera_F8F4F9B6_F60E_6473_41B8_4C7D3B12ADAE",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -51.07,
  "pitch": 0
 },
 "id": "camera_E6618842_F60E_6410_41DF_41548E982717",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 53.69,
  "pitch": 0
 },
 "id": "camera_F88795C1_F60E_6C10_41D1_76B6F754E316",
 "automaticZoomSpeed": 10
},
{
 "label": "5",
 "id": "panorama_FE3F0086_F161_E16F_41D8_737CAFF81653",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 81.36,
   "distance": 1,
   "backwardYaw": -91.48,
   "panorama": "this.panorama_FE58C338_F162_27A3_41CB_C7900E8875A6"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_E924142C_F1E2_21A3_41B9_AC907A320C65",
  "this.panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -98.64,
  "pitch": 0
 },
 "id": "camera_F87E55A3_F60E_6C10_41E3_0CF8898CE9A6",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FE282699_F16E_2165_41D2_F52180B0C487_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 120.17,
  "pitch": 0
 },
 "id": "camera_F86E28CB_F60E_6411_41E1_6AD4F5FEE5E3",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -132.96,
  "pitch": 0
 },
 "id": "camera_F8B0D969_F60E_6410_41ED_C5E702CD6A1E",
 "automaticZoomSpeed": 10
},
{
 "label": "12",
 "id": "panorama_FE282699_F16E_2165_41D2_F52180B0C487",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -10.84,
   "distance": 1,
   "backwardYaw": 123.73,
   "panorama": "this.panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 179,
   "distance": 1,
   "backwardYaw": 75.24,
   "panorama": "this.panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_EE8D2183_F1AE_2365_41E9_BA786B78E08E",
  "this.overlay_D180C12C_F1AE_23A3_41E3_5171622C295A",
  "this.panorama_FE282699_F16E_2165_41D2_F52180B0C487_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -44.79,
  "pitch": 0
 },
 "id": "camera_F9268682_F60E_6C10_41ED_41A184429D22",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -107.97,
  "pitch": 0
 },
 "id": "camera_F86358E9_F60E_6410_41D9_14372318C5A7",
 "automaticZoomSpeed": 10
},
{
 "label": "2",
 "id": "panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 58.86,
   "distance": 1,
   "backwardYaw": -6.73,
   "panorama": "this.panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -21.03,
   "distance": 1,
   "backwardYaw": -117.86,
   "panorama": "this.panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_E784D69B_F162_6165_4167_56F9B48BF421",
  "this.overlay_E677533F_F1A2_279D_41EB_5B2DE5C0D889",
  "this.panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "label": "32",
 "id": "panorama_FE59A317_F16E_676D_41DB_CCD9EB095074",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D03FC10F_F3E6_637D_41ED_27A44DD7BCBE",
  "this.panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.39,
  "pitch": -8.68
 },
 "id": "panorama_FE580989_F16E_2365_41D8_634BB18DEC92_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "22",
 "id": "panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 132.86,
   "distance": 1,
   "backwardYaw": 39.15,
   "panorama": "this.panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -110.48,
   "distance": 1,
   "backwardYaw": 112.6,
   "panorama": "this.panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D04B904A_F361_E1E7_41D4_7915B7EF6E55",
  "this.overlay_D38DF5D2_F362_22E7_41E0_497326B91C5B",
  "this.overlay_D48E8CAB_F3A2_22A5_41E0_123FA0C925A5",
  "this.panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "label": "10",
 "id": "panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -38.86,
   "distance": 1,
   "backwardYaw": -30.51,
   "panorama": "this.panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 74.92,
   "distance": 1,
   "backwardYaw": 47.04,
   "panorama": "this.panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 74.92,
   "distance": 1,
   "backwardYaw": 47.04,
   "panorama": "this.panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -38.86,
   "distance": 1,
   "backwardYaw": 47.04,
   "panorama": "this.panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -38.86,
   "distance": 1,
   "backwardYaw": 47.04,
   "panorama": "this.panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -163.85,
   "distance": 1,
   "backwardYaw": 67.29,
   "panorama": "this.panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -163.85,
   "distance": 1,
   "backwardYaw": 67.29,
   "panorama": "this.panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_EEAD54F2_F1BE_E2A7_41CC_7D62A9E99484",
  "this.overlay_D17DDA16_F1A2_216F_41ED_23894EA926FF",
  "this.overlay_D032CA5C_F3A1_E1E3_41E3_E8C0EC4CAC16",
  "this.overlay_D1426E33_F3BE_61A5_41E4_DACAAAA921AD",
  "this.overlay_E0AAC1B3_F5C2_7911_41E2_EA045627C861",
  "this.panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 141.14,
  "pitch": 0
 },
 "id": "camera_F9FD37BF_F60E_6C71_41E8_3DBC67607112",
 "automaticZoomSpeed": 10
},
{
 "label": "3",
 "id": "panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 135.21,
   "distance": 1,
   "backwardYaw": -22.28,
   "panorama": "this.panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 30.54,
   "distance": 1,
   "backwardYaw": 80.44,
   "panorama": "this.panorama_FE58C338_F162_27A3_41CB_C7900E8875A6"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_E91B4976_F1E6_23AF_41E2_F7F776E0D85E",
  "this.overlay_EA8EF198_F1A2_2363_41DD_C3BF23461640",
  "this.panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "label": "31",
 "id": "panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE59A317_F16E_676D_41DB_CCD9EB095074"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D09CA2F7_F3E1_E6AD_41E5_FF6A6944C8A4",
  "this.overlay_D0FD87A6_F3E7_EEAF_4199_434F18603996",
  "this.panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 87.35,
  "pitch": 0
 },
 "id": "camera_F87858FC_F60E_65F0_41D2_62161EDE2EA0",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "21",
 "id": "panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 112.6,
   "distance": 1,
   "backwardYaw": -110.48,
   "panorama": "this.panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -98.93,
   "distance": 1,
   "backwardYaw": -161.73,
   "panorama": "this.panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 35.92,
   "distance": 1,
   "backwardYaw": 120.39,
   "panorama": "this.panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D15DE8A5_F35E_62AD_41C6_7F667E2344DC",
  "this.overlay_D3E6E713_F362_2F65_41DA_88DF16D763D8",
  "this.overlay_D066D64D_F362_61FD_41D4_75C769691735",
  "this.panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "label": "9",
 "id": "panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 67.29,
   "distance": 1,
   "backwardYaw": -163.85,
   "panorama": "this.panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -109.82,
   "distance": 1,
   "backwardYaw": -19.88,
   "panorama": "this.panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE598948_F16E_23E3_41CB_E40AD99607B2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 145.76,
   "distance": 1,
   "backwardYaw": -42.83,
   "panorama": "this.panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D1A1F688_F1BF_E163_41C8_61FB3BF1B946",
  "this.overlay_D17E1ADC_F1BF_E6E3_41E0_E40C688C7F6C",
  "this.overlay_D0D6D63B_F1A2_21A5_41C5_30C1B16DA9B6",
  "this.overlay_D784ADF7_F3E3_E2AD_41E8_2A7BC597868F",
  "this.panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "18",
 "id": "panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE580989_F16E_2365_41D8_634BB18DEC92"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -111.42,
   "distance": 1,
   "backwardYaw": 108.65,
   "panorama": "this.panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 120.39,
   "distance": 1,
   "backwardYaw": 35.92,
   "panorama": "this.panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D32F5D7F_F2A2_639D_41E1_07DA8434E9CB",
  "this.overlay_D0667FE1_F2A2_3EA5_41E3_624309ECA52F",
  "this.overlay_D3A42F30_F2A2_7FA3_41D4_79091B48D864",
  "this.overlay_D46AD07E_F35E_619F_41EA_6453349F200F",
  "this.panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -40.55,
  "pitch": -0.53
 },
 "id": "panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 81.07,
  "pitch": 0
 },
 "id": "camera_F884791E_F60E_6430_41B1_0B82E5911110",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 88.52,
  "pitch": 0
 },
 "id": "camera_F9BBF75D_F60E_6C2C_41D1_DDE6AA2E931B",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 41.2,
  "pitch": 0
 },
 "id": "camera_F94E69FC_F60E_67F0_41D9_A69166ED5219",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -132.96,
  "pitch": 0
 },
 "id": "camera_F8C5097A_F60E_64F3_41D4_40540A39A0F9",
 "automaticZoomSpeed": 10
},
{
 "label": "20",
 "id": "panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D6A77347_F2A1_E7ED_41D7_B7D6B69EDF3C",
  "this.panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.01,
  "pitch": 5.93
 },
 "id": "panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 70.18,
  "pitch": 0
 },
 "id": "camera_E6516833_F60E_6470_41E5_3FB5F8A49DB0",
 "automaticZoomSpeed": 10
},
{
 "label": "24",
 "id": "panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -59.83,
   "distance": 1,
   "backwardYaw": -102.79,
   "panorama": "this.panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D04CBCDA_F35E_22E7_41EC_4357C8CBDDB4",
  "this.overlay_D04542C7_F35E_26ED_41EE_036A4B3E66DA",
  "this.overlay_C067D4FF_F3A6_629D_41ED_FCA0C1139E9F",
  "this.panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 18.27,
  "pitch": 0
 },
 "id": "camera_F85F389B_F60E_6430_41EB_816F84EEAB52",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 158.97,
  "pitch": 0
 },
 "id": "camera_F98B8717_F60E_6C30_41B1_7ECE9CA92B40",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -19.96,
  "pitch": -2.27
 },
 "id": "panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "33",
 "id": "panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D35BC340_F3E6_67E3_41EC_8CE1C0E33719",
  "this.panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 9.24,
  "pitch": -1.98
 },
 "id": "panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 149.49,
  "pitch": 0
 },
 "id": "camera_F8BB195A_F60E_6430_41B4_118D430AB739",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -47.14,
  "pitch": 0
 },
 "id": "camera_F8AD15E1_F60E_6C11_41DF_970E426B207C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 137.17,
  "pitch": 0
 },
 "id": "camera_F95AD6CC_F60E_6C17_41EB_DD98F12E26B0",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_FE58C338_F162_27A3_41CB_C7900E8875A6",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_FE3F0086_F161_E16F_41D8_737CAFF81653",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE282699_F16E_2165_41D2_F52180B0C487_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_FE282699_F16E_2165_41D2_F52180B0C487",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE580989_F16E_2365_41D8_634BB18DEC92_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_FE580989_F16E_2365_41D8_634BB18DEC92",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "media": "this.panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "media": "this.panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "media": "this.panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "media": "this.panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE599068_F16F_E1A3_41ED_724B9521111E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "media": "this.panorama_FE599068_F16F_E1A3_41ED_724B9521111E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "media": "this.panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "media": "this.panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "media": "this.panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "media": "this.panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "media": "this.panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "media": "this.panorama_FE59A317_F16E_676D_41DB_CCD9EB095074",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "media": "this.panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 0)",
   "media": "this.panorama_FE598948_F16E_23E3_41CB_E40AD99607B2",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 142.53,
  "pitch": 0
 },
 "id": "camera_F9DC978F_F60E_6C11_41E6_B0544811CD96",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -34.47,
  "pitch": -0.2
 },
 "id": "panorama_FE599068_F16F_E1A3_41ED_724B9521111E_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.01,
  "pitch": 0
 },
 "id": "camera_F8D2861D_F60E_6C31_41C7_894E0F1A20E6",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 62.14,
  "pitch": 0
 },
 "id": "camera_E61FA7E4_F60E_6C17_41DB_5D20565B8C8F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -56.27,
  "pitch": 0
 },
 "id": "camera_F8A095EF_F60E_6C11_41D6_8CA6BC219703",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -25.88,
  "pitch": 0
 },
 "id": "camera_F86858DA_F60E_6430_41C2_9119ED5B30A1",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.16,
  "pitch": 0
 },
 "id": "camera_E6309815_F60E_6431_41C6_422AA5FB4E3A",
 "automaticZoomSpeed": 10
},
{
 "label": "15",
 "id": "panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -58.91,
   "distance": 1,
   "backwardYaw": -59.92,
   "panorama": "this.panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 9.26,
   "distance": 1,
   "backwardYaw": -37.47,
   "panorama": "this.panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -21.8,
   "distance": 1,
   "backwardYaw": -15.15,
   "panorama": "this.panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D041ACE5_F2A2_62AD_41DB_65FE32B9520F",
  "this.overlay_D384DB87_F2A2_E76D_41E5_74DF2BEA672B",
  "this.overlay_DA57F7BB_F3E2_2EA5_41E6_D454A517BAB2",
  "this.overlay_D520B688_F3E2_2163_41E9_D473FD7D2450",
  "this.panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.9,
  "pitch": 0
 },
 "id": "camera_F916E66A_F60E_6C10_41B6_ADB60CA4EACA",
 "automaticZoomSpeed": 10
},
{
 "label": "34",
 "id": "panorama_FE598948_F16E_23E3_41CB_E40AD99607B2",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_D03F5343_F3E2_27E5_41C0_3E6250C64E62",
  "this.panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -20.67,
  "pitch": -5.04
 },
 "id": "panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -121.14,
  "pitch": 0
 },
 "id": "camera_F8E4D62D_F60E_6C11_41D4_C94EECE046A8",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.65,
  "pitch": -13.1
 },
 "id": "panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.15,
  "pitch": 0
 },
 "id": "camera_F93706A3_F60E_6C11_41EB_7BE235D9DE36",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 158.2,
  "pitch": 0
 },
 "id": "camera_F88F790C_F60E_6410_41EB_457B86D09146",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 68.58,
  "pitch": 0
 },
 "id": "camera_F899592E_F60E_6410_41E1_7CD37AB74507",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -128.04,
  "pitch": 0
 },
 "id": "camera_F87285B1_F60E_6C70_41C7_3F3CC7532DC0",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -105.08,
  "pitch": 0
 },
 "id": "camera_F890D93D_F60E_6470_41E1_192E2E8100EF",
 "automaticZoomSpeed": 10
},
{
 "label": "7",
 "id": "panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -6.73,
   "distance": 1,
   "backwardYaw": 58.86,
   "panorama": "this.panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_E812E334_F1EF_E7A3_41E5_817A67061884",
  "this.overlay_E84DC4C9_F1EE_22E5_41E3_7B51199D36A0",
  "this.panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_camera",
 "automaticZoomSpeed": 10
},
{
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "class": "PanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_acceleration",
 "mouseControlMode": "drag_rotation",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1,
  "pitch": 0
 },
 "id": "camera_F907B9C4_F60E_6417_41D0_A068E8A30B52",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 170,
  "pitch": 0
 },
 "id": "camera_F96AD6E5_F60E_6C11_4190_E2E1DBFAAF0F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "11",
 "id": "panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FE598948_F16E_23E3_41CB_E40AD99607B2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 123.73,
   "distance": 1,
   "backwardYaw": -10.84,
   "panorama": "this.panorama_FE282699_F16E_2165_41D2_F52180B0C487"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -126.31,
   "distance": 1,
   "backwardYaw": -103.75,
   "panorama": "this.panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -19.88,
   "distance": 1,
   "backwardYaw": -109.82,
   "panorama": "this.panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB"
  }
 ],
 "hfovMin": "135%",
 "pitch": 0,
 "partial": false,
 "overlays": [
  "this.overlay_EE918B22_F1A2_27A7_41C2_61869B54650B",
  "this.overlay_EE0AB49B_F1A1_E165_41E8_360DDD6DC167",
  "this.overlay_D0915ADC_F3E2_26E3_41E1_8FD58AB89186",
  "this.overlay_D746CD9F_F3E6_629D_41EC_6F90FB6514CB",
  "this.panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_tcap0"
 ],
 "class": "Panorama",
 "hfov": 360,
 "vfov": 180,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_t.jpg",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -132.96,
  "pitch": 0
 },
 "id": "camera_F8EEB997_F60E_6431_41D7_7723CB6C3116",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -132.96,
  "pitch": 0
 },
 "id": "camera_F8DAC989_F60E_6411_41EB_C949277341D6",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 160.12,
  "pitch": 0
 },
 "id": "camera_F94896BD_F60E_6C71_41E8_9CADCA71595D",
 "automaticZoomSpeed": 10
},
{
 "progressBarBorderSize": 6,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "minHeight": 50,
 "shadow": false,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "transitionDuration": 500,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Century Gothic",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "paddingRight": 0,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 55,
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "minWidth": 100,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "12px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "id": "Image_E046CCD0_F5C2_AF6F_41CB_813F6D54F6DC",
 "backgroundOpacity": 0,
 "width": 60,
 "right": "6%",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "url": "skin/Image_E046CCD0_F5C2_AF6F_41CB_813F6D54F6DC.png",
 "minWidth": 1,
 "maxWidth": 1097,
 "propagateClick": false,
 "top": "3%",
 "maxHeight": 1093,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 60,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image8193"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "minWidth": 1,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 641,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--SETTINGS"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 34,
 "width": 684,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "children": [
  "this.Label_0DD14F09_1744_0507_41AA_D8475423214A",
  "this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
  "this.Image_E009FB81_F5C6_A9F1_41ED_6C738EC63476"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "absolute",
 "overflow": "visible",
 "minWidth": 1,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": 23,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 81,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--STICKER"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "backgroundOpacity": 0.64,
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "right": "0%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "absolute",
 "minHeight": 1,
 "minWidth": 1,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "bottom": 0,
 "overflow": "visible",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 118,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--MENU"
 },
 "verticalAlign": "top",
 "visible": false,
 "horizontalAlign": "left",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "right": "0%",
 "layout": "absolute",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--INFO photo"
 },
 "verticalAlign": "top",
 "visible": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "right": "0%",
 "layout": "absolute",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--INFO photoalbum"
 },
 "verticalAlign": "top",
 "visible": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "right": "0%",
 "layout": "absolute",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "verticalAlign": "top",
 "visible": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "right": "0%",
 "layout": "absolute",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "verticalAlign": "top",
 "visible": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "right": "0%",
 "layout": "absolute",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FLOORPLAN"
 },
 "verticalAlign": "top",
 "visible": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "right": "0%",
 "layout": "absolute",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "verticalAlign": "top",
 "visible": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "right": "0%",
 "layout": "absolute",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "verticalAlign": "top",
 "visible": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "scrollBarVisible": "rollOver",
 "left": "0%",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "right": "0%",
 "layout": "absolute",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--REALTOR"
 },
 "verticalAlign": "top",
 "visible": false,
 "horizontalAlign": "left"
},
{
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "maxHeight": 58,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "height": 58,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "data": {
  "name": "IconButton MUTE"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "maxHeight": 58,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "height": 58,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC, this.camera_E6618842_F60E_6410_41DF_41548E982717); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11F49A0_F5C3_A92F_416B_8131C002FF50",
   "yaw": -163.99,
   "pitch": -21.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.06,
   "distance": 100
  }
 ],
 "id": "overlay_D3BCE5D5_F36E_22ED_41EA_8E442CFE5CA5",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.99,
   "hfov": 12.06,
   "pitch": -21.04
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E118F9A1_F5C3_A931_41E6_ED2C9ECEB910",
   "yaw": 60.01,
   "pitch": -15.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.15,
   "distance": 100
  }
 ],
 "id": "overlay_D070FF5B_F36E_3FE5_41C7_1485D454FD23",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 60.01,
   "hfov": 17.15,
   "pitch": -15.08
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03, this.camera_E6722850_F60E_6430_41EB_B60B3B9F71B3); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11869A1_F5C3_A931_41D2_8EAA647E4273",
   "yaw": -138.8,
   "pitch": -25.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.63,
   "distance": 50
  }
 ],
 "id": "overlay_D1A974D4_F3A2_E2E3_41D2_D0241F73B17D",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -138.8,
   "hfov": 13.63,
   "pitch": -25.31
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E119E9A1_F5C3_A931_41EB_C899EF772F35",
   "yaw": 144.25,
   "pitch": -23.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.82,
   "distance": 50
  }
 ],
 "id": "overlay_CAFA6155_F3BE_E3ED_41E8_D117B3302135",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 44,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 144.25,
   "hfov": 11.82,
   "pitch": -23.8
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE599068_F16F_E1A3_41ED_724B9521111E_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E100E999_F5C3_A91E_41B6_36C0AD46A381",
   "yaw": 8.85,
   "pitch": -22.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.95,
   "distance": 100
  }
 ],
 "id": "overlay_D0DBAF25_F2A2_1FAD_41E5_833CF04BED2B",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.85,
   "hfov": 11.95,
   "pitch": -22.3
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE580989_F16E_2365_41D8_634BB18DEC92_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C, this.camera_F89A35D1_F60E_6C30_41E3_5586BFC3431C); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E105D994_F5C3_A916_41EC_757A08955EEC",
   "yaw": -37.47,
   "pitch": -18.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.86,
   "distance": 100
  }
 ],
 "id": "overlay_D0DA9210_F2A2_2163_41AD_3A6F666EFD78",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -37.47,
   "hfov": 16.86,
   "pitch": -18.34
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1057994_F5C3_A916_419C_CE9C05E39F65",
   "yaw": 21.23,
   "pitch": -15.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.51,
   "distance": 50
  }
 ],
 "id": "overlay_D069B06B_F3A2_E1A5_41DF_3CBBB7E773AD",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.23,
   "hfov": 14.51,
   "pitch": -15.76
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Left"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E106B995_F5C3_A916_41DA_01D40522F2E3",
   "yaw": 112.55,
   "pitch": -21.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.09,
   "distance": 50
  }
 ],
 "id": "overlay_D1F99572_F3A6_63A7_41E7_FB84BB7A248E",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 48,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 112.55,
   "hfov": 17.09,
   "pitch": -21.29
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD, this.camera_F88795C1_F60E_6C10_41D1_76B6F754E316); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E106D995_F5C3_A916_41EE_88583C4F61A5",
   "yaw": -103.75,
   "pitch": -21.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.52,
   "distance": 50
  }
 ],
 "id": "overlay_D472F5F4_F3E2_22A3_41C4_F911CBBDF905",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -103.75,
   "hfov": 10.52,
   "pitch": -21.42
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE3F0086_F161_E16F_41D8_737CAFF81653, this.camera_F87E55A3_F60E_6C10_41E3_0CF8898CE9A6); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E173A981_F5C3_A9F1_41E0_C1FEC62D9B41",
   "yaw": -91.48,
   "pitch": -8.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.58,
   "distance": 100
  }
 ],
 "id": "overlay_E9204A8C_F1E1_E163_41C8_2B389D5C0735",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -91.48,
   "hfov": 17.58,
   "pitch": -8.29
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2, this.camera_F869D594_F60E_6C30_41E4_B3DCB64DD8C0); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E173E982_F5C3_A9F3_41A0_51FBD047E23A",
   "yaw": 80.44,
   "pitch": -14.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.49,
   "distance": 100
  }
 ],
 "id": "overlay_ED559380_F1A2_2763_41D2_927DC779D49B",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.44,
   "hfov": 12.49,
   "pitch": -14.76
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE, this.camera_F87285B1_F60E_6C70_41C7_3F3CC7532DC0); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F8287540_F60E_6C10_41DD_FAF1C80DDF37",
   "yaw": -10,
   "pitch": -19.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.2,
   "distance": 100
  }
 ],
 "id": "overlay_EA80A251_F642_DB11_41CB_B27167D505B9",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10,
   "hfov": 12.2,
   "pitch": -19.28
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E10DD985_F5C3_A9F1_4189_5304935FA884",
   "yaw": 120.55,
   "pitch": -27.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.44,
   "distance": 100
  }
 ],
 "id": "overlay_E864D08B_F1E2_6165_41EC_8F8B925F48D0",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 120.55,
   "hfov": 11.44,
   "pitch": -27.71
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E10D1985_F5C3_A9F1_41E1_4D1E40B77332",
   "yaw": -85.54,
   "pitch": -23.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.84,
   "distance": 50
  }
 ],
 "id": "overlay_E8DE7BB7_F1E2_66AD_4192_2B5CBF9D277F",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.54,
   "hfov": 13.84,
   "pitch": -23.3
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB, this.camera_F8A5D94B_F60E_6410_41D9_46A339C5B7EF); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E10ED989_F5C3_A9F1_41EC_F45EC81E003A",
   "yaw": -42.83,
   "pitch": -18.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.33,
   "distance": 50
  }
 ],
 "id": "overlay_EBEFBF0D_F1E2_1F7D_41E1_DA3D527D377A",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -42.83,
   "hfov": 14.33,
   "pitch": -18.03
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34, this.camera_F890D93D_F60E_6470_41E1_192E2E8100EF); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F8279541_F60E_6C10_41EB_08913C05331B",
   "yaw": 47.04,
   "pitch": -18.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.98,
   "distance": 50
  }
 ],
 "id": "overlay_E9FB778D_F645_B9F1_41D6_BE892D1628EC",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.04,
   "hfov": 10.98,
   "pitch": -18.87
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B, this.camera_F8AD15E1_F60E_6C11_41DF_970E426B207C); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E103099D_F5C3_A911_41C1_6820297352CA",
   "yaw": 39.15,
   "pitch": -15.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.15,
   "distance": 100
  }
 ],
 "id": "overlay_D3E117A6_F366_2EAF_41DC_4BE5DEAFD1B2",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 39.15,
   "hfov": 17.15,
   "pitch": -15.08
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11CB99D_F5C3_A911_41E0_208654C70061",
   "yaw": -81.68,
   "pitch": -17.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.91,
   "distance": 100
  }
 ],
 "id": "overlay_D6159A0B_F362_2165_41E2_63B8828B259C",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -81.68,
   "hfov": 16.91,
   "pitch": -17.84
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC, this.camera_F86858DA_F60E_6430_41C2_9119ED5B30A1); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11EF99F_F5C3_A911_41DB_D3AFEFF72BF1",
   "yaw": 86.82,
   "pitch": -15.54,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.38,
   "distance": 100
  }
 ],
 "id": "overlay_D042783A_F362_21A7_41E5_01F437EA3F33",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.82,
   "hfov": 8.38,
   "pitch": -15.54
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11E199F_F5C3_A911_41D1_B046E87E12A1",
   "yaw": 112.92,
   "pitch": -17.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.61,
   "distance": 50
  }
 ],
 "id": "overlay_D153E297_F362_216D_41D0_2EAB7EE75535",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 112.92,
   "hfov": 9.61,
   "pitch": -17.02
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03, this.camera_F86358E9_F60E_6410_41D9_14372318C5A7); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11FB99F_F5C3_A911_41C0_A1AA361ACB99",
   "yaw": 102.61,
   "pitch": -15.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.95,
   "distance": 100
  }
 ],
 "id": "overlay_D03E3A7F_F362_619D_41D2_8E9FA3A5D1E0",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 102.61,
   "hfov": 7.95,
   "pitch": -15.57
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7, this.camera_F86E28CB_F60E_6411_41E1_6AD4F5FEE5E3); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11F29A0_F5C3_A92F_41E3_E2D56345E11A",
   "yaw": -102.79,
   "pitch": -18.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.84,
   "distance": 100
  }
 ],
 "id": "overlay_D0606C5D_F361_E19D_41D0_A7F906B4CC94",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -102.79,
   "hfov": 16.84,
   "pitch": -18.59
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE599068_F16F_E1A3_41ED_724B9521111E, this.camera_F8D2861D_F60E_6C31_41C7_894E0F1A20E6); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11919A2_F5C3_A933_41E0_D0579A660F66",
   "yaw": 128.93,
   "pitch": -19.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.21,
   "distance": 100
  }
 ],
 "id": "overlay_D0262BC9_F36F_E6E5_41EC_BAB9112E124A",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.93,
   "hfov": 12.21,
   "pitch": -19.03
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11AA9A2_F5C3_A933_41E1_E451D90AFB94",
   "yaw": 5.95,
   "pitch": -24.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.68,
   "distance": 50
  }
 ],
 "id": "overlay_D048809C_F36E_2163_41E4_602F188C598A",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.95,
   "hfov": 13.68,
   "pitch": -24.8
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198, this.camera_F8C2760D_F60E_6C11_41A1_AD895125159A); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11A29A3_F5C3_A931_41E4_4A9E3A5C46E7",
   "yaw": 154.12,
   "pitch": -20.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.14,
   "distance": 50
  }
 ],
 "id": "overlay_D489A5F9_F363_E2A5_41E0_A77ABE7CF732",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 154.12,
   "hfov": 14.14,
   "pitch": -20.29
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198, this.camera_F93DC9EE_F60E_6410_41DF_FB5F356B6A82); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11939A4_F5C3_A937_41D9_0A9E071A3476",
   "yaw": 72.03,
   "pitch": -17.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.73,
   "distance": 100
  }
 ],
 "id": "overlay_D024759D_F36E_229D_41D7_12AB86E109D1",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 72.03,
   "hfov": 8.73,
   "pitch": -17.87
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11979A5_F5C3_A931_41C6_909608F2A7DA",
   "yaw": -150.27,
   "pitch": -16.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17,
   "distance": 100
  }
 ],
 "id": "overlay_D08A9F5B_F3A3_FFE5_41D5_083D5812B086",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -150.27,
   "hfov": 17,
   "pitch": -16.84
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE599068_F16F_E1A3_41ED_724B9521111E, this.camera_F94E69FC_F60E_67F0_41D9_A69166ED5219); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11AF9A7_F5C3_A932_41E2_66D844E1B0BD",
   "yaw": 55.36,
   "pitch": -19.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.81,
   "distance": 50
  }
 ],
 "id": "overlay_D010517C_F3A7_E3A3_41E8_C1FB13A9998A",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 55.36,
   "hfov": 7.81,
   "pitch": -19.64
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11B19AA_F5C3_A933_41ED_750D03B7981C",
   "yaw": 90.15,
   "pitch": -16.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17,
   "distance": 100
  }
 ],
 "id": "overlay_D02C4C9A_F3A1_E167_41C8_929A288C67C3",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.15,
   "hfov": 17,
   "pitch": -16.84
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11499AA_F5C3_A933_41E4_8E586940CDD4",
   "yaw": -164.5,
   "pitch": -27.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.48,
   "distance": 100
  }
 ],
 "id": "overlay_D1A4EBF7_F3A6_26AD_41E6_F9A3B8C81586",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -164.5,
   "hfov": 11.48,
   "pitch": -27.32
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05a Right"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EB730236_F5C2_DB13_41E4_DD6C85945F30",
   "yaw": -23.55,
   "pitch": -14.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.55,
   "distance": 50
  }
 ],
 "id": "overlay_ED495D61_F5C6_A931_41E0_98C1FCBE21EC",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.55,
   "hfov": 6.55,
   "pitch": -14.86
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EB73A236_F5C2_DB13_41E3_3F27E5728CB6",
   "yaw": -41.31,
   "pitch": -13.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.12,
   "distance": 50
  }
 ],
 "id": "overlay_ED97C37E_F5C5_B913_41ED_C0B7587D34E8",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -41.31,
   "hfov": 7.12,
   "pitch": -13.36
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34, this.camera_F9FD37BF_F60E_6C71_41E8_3DBC67607112); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EB4C523C_F5C2_DB17_41E6_74A84B1CAD36",
   "yaw": -30.51,
   "pitch": -11.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.83,
   "distance": 50
  }
 ],
 "id": "overlay_ECC40566_F5C5_B932_41A1_82A65D854B28",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 24,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.51,
   "hfov": 5.83,
   "pitch": -11.37
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2, this.camera_F9268682_F60E_6C10_41ED_41A184429D22); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Arrow 04a"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E10CA983_F5C3_A9F1_41B2_8D42A3FDDE1C",
   "yaw": -22.28,
   "pitch": 0.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.83,
   "distance": 100
  }
 ],
 "id": "overlay_E9CA7501_F1E2_E365_41E4_5F9852C6AD84",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -22.28,
   "hfov": 16.83,
   "pitch": 0.24
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE, this.camera_F916E66A_F60E_6C10_41B6_ADB60CA4EACA); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E10CD983_F5C3_A9F1_41E4_E5C71B834B57",
   "yaw": 83.87,
   "pitch": -15.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.15,
   "distance": 50
  }
 ],
 "id": "overlay_EBA4DA9A_F1E2_2167_41D6_BA4013337984",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 24,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.87,
   "hfov": 16.15,
   "pitch": -15.39
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11A79A8_F5C3_A93F_41D9_33BD2D6D6FA0",
   "yaw": -155.7,
   "pitch": -33.85,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.73,
   "distance": 100
  }
 ],
 "id": "overlay_D0C28F76_F36E_7FAF_41CD_620A84BDF3A5",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.7,
   "hfov": 10.73,
   "pitch": -33.85
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11BA9A9_F5C3_A931_41DA_F6AF3A48C8A3",
   "yaw": 137.47,
   "pitch": -26.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.56,
   "distance": 100
  }
 ],
 "id": "overlay_D364EF38_F3A2_7FA3_41D9_BC3CA9EE16C9",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 137.47,
   "hfov": 11.56,
   "pitch": -26.57
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5, this.camera_F87858FC_F60E_65F0_41D2_62161EDE2EA0); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1067995_F5C3_A916_41D1_1EECC6E2BD04",
   "yaw": 41.58,
   "pitch": -20.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.16,
   "distance": 50
  }
 ],
 "id": "overlay_D1FB2C92_F2A6_2167_41D5_7871530A0381",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 41.58,
   "hfov": 14.16,
   "pitch": -20.03
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C, this.camera_F88F790C_F60E_6410_41EB_457B86D09146); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E107A995_F5C3_A916_41E3_88E4AFCEC083",
   "yaw": -15.15,
   "pitch": -19.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.49,
   "distance": 100
  }
 ],
 "id": "overlay_D391D412_F2A6_E167_41E7_D4670DF1256C",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.15,
   "hfov": 10.49,
   "pitch": -19.91
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A, this.camera_F899592E_F60E_6410_41E1_7CD37AB74507); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E107C996_F5C3_A912_41E6_14E169EDA919",
   "yaw": 108.65,
   "pitch": -26.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.48,
   "distance": 50
  }
 ],
 "id": "overlay_D0A5FBCE_F2A6_26FF_41E2_B25EB37994EA",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 108.65,
   "hfov": 13.48,
   "pitch": -26.57
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401, this.camera_F884791E_F60E_6430_41B1_0B82E5911110); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1077996_F5C3_A912_41E1_CA8C201F9C86",
   "yaw": -161.73,
   "pitch": -26.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.31,
   "distance": 100
  }
 ],
 "id": "overlay_D173520D_F361_E17D_41DD_E974F9FFDFC5",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.73,
   "hfov": 14.31,
   "pitch": -26.06
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE282699_F16E_2165_41D2_F52180B0C487, this.camera_F907B9C4_F60E_6417_41D0_A068E8A30B52); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E10A7992_F5C3_A912_41D6_0A7AF74E2914",
   "yaw": 75.24,
   "pitch": -19.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.21,
   "distance": 50
  }
 ],
 "id": "overlay_D37B4E9D_F15E_7E9D_41E6_AFE519A955F7",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 75.24,
   "hfov": 14.21,
   "pitch": -19.53
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B, this.camera_F92A99E0_F60E_640F_41DA_E92ACD36CFB7); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E10B9992_F5C3_A912_41E5_742A0C45BE87",
   "yaw": -92.65,
   "pitch": -16.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.39,
   "distance": 100
  }
 ],
 "id": "overlay_D0060AA3_F162_26A5_41D1_54C51042E3B2",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -92.65,
   "hfov": 12.39,
   "pitch": -16.52
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C, this.camera_F91839D2_F60E_6433_41E5_E3A2A74DE14F); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E10BC992_F5C3_A912_41E4_1D2A79D9353E",
   "yaw": -59.92,
   "pitch": -18.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.29,
   "distance": 50
  }
 ],
 "id": "overlay_D1B4C6BE_F2A2_2E9F_41E8_DD69D38944E7",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.92,
   "hfov": 14.29,
   "pitch": -18.53
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11D799E_F5C3_A913_4190_464320493215",
   "yaw": -91.07,
   "pitch": -33.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.63,
   "distance": 50
  }
 ],
 "id": "overlay_D67ADC3D_F35E_219D_41EC_B42FAC6DF274",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -91.07,
   "hfov": 12.63,
   "pitch": -33.1
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4, this.camera_F98B8717_F60E_6C30_41B1_7ECE9CA92B40); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E170897D_F5C3_A911_41E6_898CF998DC4E",
   "yaw": -117.86,
   "pitch": -7.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.64,
   "distance": 100
  }
 ],
 "id": "overlay_E4F5A37D_F162_E79D_41D6_60DB0A8F2E07",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -117.86,
   "hfov": 14.64,
   "pitch": -7.04
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E171A97E_F5C3_A913_41C0_2E8F429A3CCD",
   "yaw": 172.84,
   "pitch": -18.93,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.69,
   "distance": 100
  }
 ],
 "id": "overlay_E9F34DE0_F1E6_62A3_41DD_C2D3FDA86D13",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.84,
   "hfov": 10.69,
   "pitch": -18.93
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F82AD53E_F60E_6C70_41DA_B40ABBF72CD0",
   "yaw": 42.1,
   "pitch": -8.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.9,
   "distance": 50
  }
 ],
 "id": "overlay_EA08408D_F1A6_217D_41EB_2C1889258DCC",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.1,
   "hfov": 6.9,
   "pitch": -8.2
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36, this.camera_F9791704_F60E_6C17_41DA_E91C2F1C9512); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F829353E_F60E_6C70_41C7_C947C1BC98EA",
   "yaw": -10.1,
   "pitch": -2.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.45,
   "distance": 100
  }
 ],
 "id": "overlay_E8FBABA3_F5BF_A931_41DD_85C7BB20E3C2",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.1,
   "hfov": 11.45,
   "pitch": -2.52
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE58C338_F162_27A3_41CB_C7900E8875A6, this.camera_F96AD6E5_F60E_6C11_4190_E2E1DBFAAF0F); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F829653E_F60E_6C70_41D8_BCFCFADB1B39",
   "yaw": 51.96,
   "pitch": -8.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.99,
   "distance": 50
  }
 ],
 "id": "overlay_EE1B2444_F5BE_FF77_41D7_2EFA696A6C73",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 51.96,
   "hfov": 5.99,
   "pitch": -8.58
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE58C338_F162_27A3_41CB_C7900E8875A6, this.camera_F9BBF75D_F60E_6C2C_41D1_DDE6AA2E931B); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1737982_F5C3_A9F3_41D4_95DDDEF903F3",
   "yaw": 81.36,
   "pitch": -7.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.6,
   "distance": 100
  }
 ],
 "id": "overlay_E924142C_F1E2_21A3_41B9_AC907A320C65",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.36,
   "hfov": 17.6,
   "pitch": -7.79
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD, this.camera_F8A095EF_F60E_6C11_41D6_8CA6BC219703); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E10AA991_F5C3_A9EE_41E4_958B6293DD8D",
   "yaw": -10.84,
   "pitch": -18.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.15,
   "distance": 50
  }
 ],
 "id": "overlay_EE8D2183_F1AE_2365_41E9_BA786B78E08E",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 24,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.84,
   "hfov": 11.15,
   "pitch": -18.03
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5, this.camera_F8B055FD_F60E_6FF1_41E9_F57EE671F300); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E10AE992_F5C3_A912_41E7_BFC44E7D9F73",
   "yaw": 179,
   "pitch": -20.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.16,
   "distance": 50
  }
 ],
 "id": "overlay_D180C12C_F1AE_23A3_41E3_5171622C295A",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179,
   "hfov": 14.16,
   "pitch": -20.03
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE282699_F16E_2165_41D2_F52180B0C487_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE, this.camera_E61FA7E4_F60E_6C17_41DB_5D20565B8C8F); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Arrow 04a"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E171797F_F5C3_A911_41DD_FF540C81B34C",
   "yaw": -21.03,
   "pitch": -1.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.81,
   "distance": 100
  }
 ],
 "id": "overlay_E784D69B_F162_6165_4167_56F9B48BF421",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.03,
   "hfov": 12.81,
   "pitch": -1.51
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7, this.camera_E60EE7D6_F60E_6C33_41EB_DE377993A6ED); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Arrow 04a"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E172A980_F5C3_A9EF_41EA_6812344301E3",
   "yaw": 58.86,
   "pitch": -3.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.79,
   "distance": 100
  }
 ],
 "id": "overlay_E677533F_F1A2_279D_41EB_5B2DE5C0D889",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 58.86,
   "hfov": 12.79,
   "pitch": -3.27
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E115C9AB_F5C3_A931_41C0_51569B35D773",
   "yaw": -80.8,
   "pitch": -8.05,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.59,
   "distance": 100
  }
 ],
 "id": "overlay_D03FC10F_F3E6_637D_41ED_27A44DD7BCBE",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.8,
   "hfov": 17.59,
   "pitch": -8.05
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401, this.camera_F904664D_F60E_6C11_41E0_1FF11B09C7E5); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E102D99D_F5C3_A916_41C9_66A98B424F9E",
   "yaw": -110.48,
   "pitch": -23.05,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.89,
   "distance": 100
  }
 ],
 "id": "overlay_D04B904A_F361_E1E7_41D4_7915B7EF6E55",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -110.48,
   "hfov": 11.89,
   "pitch": -23.05
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3, this.camera_F8F4D63D_F60E_6C71_41E7_E7DA0A6D4F23); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E102699D_F5C3_A911_4178_22C33E2BC6C8",
   "yaw": 132.86,
   "pitch": -15.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.11,
   "distance": 100
  }
 ],
 "id": "overlay_D38DF5D2_F362_22E7_41E0_497326B91C5B",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 132.86,
   "hfov": 17.11,
   "pitch": -15.58
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E103F99D_F5C3_A911_41E1_0AF27205014C",
   "yaw": 51.88,
   "pitch": -24.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.71,
   "distance": 50
  }
 ],
 "id": "overlay_D48E8CAB_F3A2_22A5_41E0_123FA0C925A5",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 51.88,
   "hfov": 13.71,
   "pitch": -24.56
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB, this.camera_F8F4F9B6_F60E_6473_41B8_4C7D3B12ADAE); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E108F98C_F5C3_A9F7_41B8_EF5ED52A6CD4",
   "yaw": -163.85,
   "pitch": -19.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.76,
   "distance": 100
  }
 ],
 "id": "overlay_EEAD54F2_F1BE_E2A7_41CC_7D62A9E99484",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.85,
   "hfov": 16.76,
   "pitch": -19.35
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D, this.camera_F8C5097A_F60E_64F3_41D4_40540A39A0F9); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E108098D_F5C3_A9F1_41DA_3018C0AD771F",
   "yaw": 74.92,
   "pitch": -24.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.75,
   "distance": 100
  }
 ],
 "id": "overlay_D17DDA16_F1A2_216F_41ED_23894EA926FF",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 74.92,
   "hfov": 11.75,
   "pitch": -24.56
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E109A98D_F5C3_A9F1_41D6_EABD6954851D",
   "yaw": -61.27,
   "pitch": -15.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.51,
   "distance": 50
  }
 ],
 "id": "overlay_D032CA5C_F3A1_E1E3_41E3_E8C0EC4CAC16",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -61.27,
   "hfov": 8.51,
   "pitch": -15.83
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Right"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EB66E219_F5C2_DB11_41E1_2C00D3CF146C",
   "yaw": -43.13,
   "pitch": -19.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.04,
   "distance": 50
  }
 ],
 "id": "overlay_D1426E33_F3BE_61A5_41E4_DACAAAA921AD",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 48,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -43.13,
   "hfov": 10.04,
   "pitch": -19.68
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D, this.camera_F8EEB997_F60E_6431_41D7_7723CB6C3116); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EB67621A_F5C2_DB13_41E0_E5CBD23DB5D4",
   "yaw": -38.86,
   "pitch": -13.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.76,
   "distance": 100
  }
 ],
 "id": "overlay_E0AAC1B3_F5C2_7911_41E2_EA045627C861",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -38.86,
   "hfov": 5.76,
   "pitch": -13.34
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36, this.camera_F9981731_F60E_6C70_419C_4F2799D2D986); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1723980_F5C3_A9EF_41EA_561AB0DB6855",
   "yaw": 135.21,
   "pitch": -13.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.56,
   "distance": 100
  }
 ],
 "id": "overlay_E91B4976_F1E6_23AF_41E2_F7F776E0D85E",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 135.21,
   "hfov": 12.56,
   "pitch": -13.5
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE58C338_F162_27A3_41CB_C7900E8875A6, this.camera_F9AA574A_F60E_6C10_41CC_95D356012102); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1720981_F5C3_A9F1_41E0_6C9F192C9983",
   "yaw": 30.54,
   "pitch": -7.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.23,
   "distance": 50
  }
 ],
 "id": "overlay_EA8EF198_F1A2_2363_41DD_C3BF23461640",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.54,
   "hfov": 8.23,
   "pitch": -7.12
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11429AB_F5C3_A931_41D3_E40C020C7A01",
   "yaw": -108.38,
   "pitch": -16.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.46,
   "distance": 100
  }
 ],
 "id": "overlay_D09CA2F7_F3E1_E6AD_41E5_FF6A6944C8A4",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -108.38,
   "hfov": 14.46,
   "pitch": -16.79
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11459AB_F5C3_A931_41D0_DFAC08833405",
   "yaw": 12.78,
   "pitch": -15.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.45,
   "distance": 100
  }
 ],
 "id": "overlay_D0FD87A6_F3E7_EEAF_4199_434F18603996",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.78,
   "hfov": 22.45,
   "pitch": -15.45
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B, this.camera_F85F389B_F60E_6430_41EB_816F84EEAB52); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E101F99B_F5C3_A912_41E4_B97B1D8C7DC1",
   "yaw": -98.93,
   "pitch": -21.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.04,
   "distance": 100
  }
 ],
 "id": "overlay_D15DE8A5_F35E_62AD_41C6_7F667E2344DC",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.93,
   "hfov": 12.04,
   "pitch": -21.29
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B, this.camera_E682285E_F60E_6430_41D9_5D1D31930D32); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E101199C_F5C3_A916_41E5_2C70E40F6B23",
   "yaw": 112.6,
   "pitch": -26.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.56,
   "distance": 100
  }
 ],
 "id": "overlay_D3E6E713_F362_2F65_41DA_88DF16D763D8",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 112.6,
   "hfov": 11.56,
   "pitch": -26.57
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A, this.camera_F85968AA_F60E_6410_41DE_6772D124167F); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Left"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E102B99D_F5C3_A916_41A4_628033823A9B",
   "yaw": 35.92,
   "pitch": -16.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.14,
   "distance": 50
  }
 ],
 "id": "overlay_D066D64D_F362_61FD_41D4_75C769691735",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 48,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 35.92,
   "hfov": 16.14,
   "pitch": -16.52
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34, this.camera_F93706A3_F60E_6C11_41EB_7BE235D9DE36); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E10E798A_F5C3_A9F3_41E1_0EF3B475F700",
   "yaw": 67.29,
   "pitch": -14.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.19,
   "distance": 100
  }
 ],
 "id": "overlay_D1A1F688_F1BF_E163_41C8_61FB3BF1B946",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67.29,
   "hfov": 17.19,
   "pitch": -14.57
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD, this.camera_F94896BD_F60E_6C71_41E8_9CADCA71595D); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E10F998A_F5C3_A9F3_41B3_AEDBF04D4C84",
   "yaw": -109.82,
   "pitch": -16.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.02,
   "distance": 100
  }
 ],
 "id": "overlay_D17E1ADC_F1BF_E6E3_41E0_E40C688C7F6C",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -109.82,
   "hfov": 17.02,
   "pitch": -16.58
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D, this.camera_F95AD6CC_F60E_6C17_41EB_DD98F12E26B0); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E10FC98B_F5C3_A9F1_41D7_94DCD348DFDD",
   "yaw": 145.76,
   "pitch": -24.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.73,
   "distance": 100
  }
 ],
 "id": "overlay_D0D6D63B_F1A2_21A5_41C5_30C1B16DA9B6",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 145.76,
   "hfov": 11.73,
   "pitch": -24.81
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E10F798B_F5C3_A9F1_41D8_65CBCD947818",
   "yaw": -137.96,
   "pitch": -13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.93,
   "distance": 50
  }
 ],
 "id": "overlay_D784ADF7_F3E3_E2AD_41E8_2A7BC597868F",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 24,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.96,
   "hfov": 10.93,
   "pitch": -13
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B, this.camera_E62FC7F2_F60E_6BF3_41AD_79AB00250F59); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E100F996_F5C3_A912_41E7_9907784A5B4A",
   "yaw": -111.42,
   "pitch": -21.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.07,
   "distance": 50
  }
 ],
 "id": "overlay_D32F5D7F_F2A2_639D_41E1_07DA8434E9CB",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -111.42,
   "hfov": 14.07,
   "pitch": -21.04
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1001996_F5C3_A912_41EA_DF6094179335",
   "yaw": -14.01,
   "pitch": -26.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.53,
   "distance": 100
  }
 ],
 "id": "overlay_D0667FE1_F2A2_3EA5_41E3_624309ECA52F",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.01,
   "hfov": 11.53,
   "pitch": -26.82
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E101A997_F5C3_A912_41ED_1A18CC4A3A47",
   "yaw": 23.42,
   "pitch": -26.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.61,
   "distance": 100
  }
 ],
 "id": "overlay_D3A42F30_F2A2_7FA3_41D4_79091B48D864",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.42,
   "hfov": 11.61,
   "pitch": -26.06
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401, this.camera_E6205804_F60E_6417_41E7_2438A97CA268); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E100B998_F5C3_A91E_41DE_FCDE6E7636E3",
   "yaw": 120.39,
   "pitch": -19.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.18,
   "distance": 100
  }
 ],
 "id": "overlay_D46AD07E_F35E_619F_41EA_6453349F200F",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 120.39,
   "hfov": 12.18,
   "pitch": -19.53
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Left"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1005999_F5C3_A91E_41B5_7C6025933B9F",
   "yaw": -73.23,
   "pitch": -25.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.48,
   "distance": 50
  }
 ],
 "id": "overlay_D6A77347_F2A1_E7ED_41D7_B7D6B69EDF3C",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 48,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -73.23,
   "hfov": 20.48,
   "pitch": -25.06
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198, this.camera_F85378BB_F60E_6471_41B7_3371CFBC61D6); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11C299E_F5C3_A913_41CC_8A5C9E2128D5",
   "yaw": -59.83,
   "pitch": -17.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.91,
   "distance": 100
  }
 ],
 "id": "overlay_D04CBCDA_F35E_22E7_41EC_4357C8CBDDB4",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.83,
   "hfov": 16.91,
   "pitch": -17.84
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11C499E_F5C3_A913_41DE_9CAA34E0343C",
   "yaw": 140.06,
   "pitch": -27.32,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.39,
   "distance": 50
  }
 ],
 "id": "overlay_D04542C7_F35E_26ED_41EE_036A4B3E66DA",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 140.06,
   "hfov": 13.39,
   "pitch": -27.32
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11DF99E_F5C3_A913_41CC_1F471CEBFA09",
   "yaw": 52.56,
   "pitch": -18.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.25,
   "distance": 100
  }
 ],
 "id": "overlay_C067D4FF_F3A6_629D_41ED_FCA0C1139E9F",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 52.56,
   "hfov": 12.25,
   "pitch": -18.53
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E116B9AC_F5C3_A931_41D2_9A8C1F46F429",
   "yaw": 104.13,
   "pitch": -14.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.61,
   "distance": 50
  }
 ],
 "id": "overlay_D35BC340_F3E6_67E3_41EC_8CE1C0E33719",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 104.13,
   "hfov": 14.61,
   "pitch": -14.26
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B, this.camera_F9ECA7A8_F60E_6C1F_41E2_7F71E8206498); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E10B6993_F5C3_A912_41E5_AF719CA7F27C",
   "yaw": -21.8,
   "pitch": -17.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.3,
   "distance": 100
  }
 ],
 "id": "overlay_D041ACE5_F2A2_62AD_41DB_65FE32B9520F",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.8,
   "hfov": 12.3,
   "pitch": -17.77
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B, this.camera_F9DC978F_F60E_6C11_41E6_B0544811CD96); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E104F993_F5C3_A912_41AF_64B55BB666DB",
   "yaw": 9.26,
   "pitch": -13.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.3,
   "distance": 100
  }
 ],
 "id": "overlay_D384DB87_F2A2_E76D_41E5_74DF2BEA672B",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.26,
   "hfov": 17.3,
   "pitch": -13.07
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1041993_F5C3_A912_41EB_0E581CE90383",
   "yaw": 76.25,
   "pitch": -18.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.27,
   "distance": 50
  }
 ],
 "id": "overlay_DA57F7BB_F3E2_2EA5_41E6_D454A517BAB2",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.25,
   "hfov": 14.27,
   "pitch": -18.78
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5, this.camera_F9CC6775_F60E_6CF1_41E3_E0D47F75498E); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Left"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E105B994_F5C3_A916_41E2_EC1FCC4B4DBC",
   "yaw": -58.91,
   "pitch": -18.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.65,
   "distance": 50
  }
 ],
 "id": "overlay_D520B688_F3E2_2163_41E9_D473FD7D2450",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 48,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -58.91,
   "hfov": 16.65,
   "pitch": -18.78
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E116E9B1_F5C3_A911_41DD_AC80F4C45A34",
   "yaw": -4.97,
   "pitch": -15.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.77,
   "distance": 100
  }
 ],
 "id": "overlay_D03F5343_F3E2_27E5_41C0_3E6250C64E62",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.97,
   "hfov": 18.77,
   "pitch": -15.26
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4, this.camera_F8E4D62D_F60E_6C11_41D4_C94EECE046A8); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Arrow 04a"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E10C0984_F5C3_A9F7_41B0_B652BD0E982E",
   "yaw": -6.73,
   "pitch": -5.93,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.64,
   "distance": 100
  }
 ],
 "id": "overlay_E812E334_F1EF_E7A3_41E5_817A67061884",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.73,
   "hfov": 12.64,
   "pitch": -5.93
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E10DA984_F5C3_A9F7_41E4_E92542B0DE4B",
   "yaw": 64.53,
   "pitch": -15.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.44,
   "distance": 100
  }
 ],
 "id": "overlay_E84DC4C9_F1EE_22E5_41E3_7B51199D36A0",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 64.53,
   "hfov": 12.44,
   "pitch": -15.66
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "maxHeight": 58,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "height": 58,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "data": {
  "name": "IconButton VR"
 },
 "verticalAlign": "middle",
 "visible": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "backgroundOpacity": 0,
 "width": 100,
 "right": 30,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "minWidth": 1,
 "maxWidth": 49,
 "propagateClick": true,
 "maxHeight": 37,
 "bottom": 8,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "height": 75,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "paddingBottom": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "data": {
  "name": "IconButton VR"
 },
 "verticalAlign": "middle",
 "visible": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "maxHeight": 58,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "height": 58,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "data": {
  "name": "IconButton HS "
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "maxHeight": 58,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "height": 58,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "data": {
  "name": "IconButton GYRO"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE282699_F16E_2165_41D2_F52180B0C487, this.camera_E6309815_F60E_6431_41C6_422AA5FB4E3A); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E10AA98F_F5C3_A9F2_41B9_AC4AB398C544",
   "yaw": 123.73,
   "pitch": -20.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.16,
   "distance": 50
  }
 ],
 "id": "overlay_EE918B22_F1A2_27A7_41C2_61869B54650B",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.73,
   "hfov": 14.16,
   "pitch": -20.03
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB, this.camera_E6516833_F60E_6470_41E5_3FB5F8A49DB0); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Point 02b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1084990_F5C3_A9EE_41ED_8A7C607CC108",
   "yaw": -19.88,
   "pitch": -15.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.09,
   "distance": 100
  }
 ],
 "id": "overlay_EE0AB49B_F1A1_E165_41E8_360DDD6DC167",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.88,
   "hfov": 17.09,
   "pitch": -15.83
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1098990_F5C3_A9EE_41EA_56CDFEC93E35",
   "yaw": 49.95,
   "pitch": -21.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.96,
   "distance": 50
  }
 ],
 "id": "overlay_D0915ADC_F3E2_26E3_41E1_8FD58AB89186",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 24,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.95,
   "hfov": 17.96,
   "pitch": -21.17
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B, this.camera_E640B826_F60E_6413_41DC_790CA542A64D); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E1090991_F5C3_A9EE_41A5_972A2FD860B7",
   "yaw": -126.31,
   "pitch": -23.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.84,
   "distance": 100
  }
 ],
 "id": "overlay_D746CD9F_F3E6_629D_41EC_6F90FB6514CB",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -126.31,
   "hfov": 11.84,
   "pitch": -23.55
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "angle": 180,
 "hfov": 43.5,
 "rotate": false,
 "id": "panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_tcap0",
 "distance": 50,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 700,
    "height": 700
   }
  ],
  "class": "ImageResource"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 81,
 "scrollBarVisible": "rollOver",
 "right": "12.17%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "top": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 98,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "vertical",
 "minHeight": 1,
 "minWidth": 1,
 "propagateClick": true,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "85.959%",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 3,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "verticalAlign": "top",
 "visible": false,
 "horizontalAlign": "center"
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Century Gothic",
 "textShadowColor": "#000000",
 "id": "Label_0DD14F09_1744_0507_41AA_D8475423214A",
 "backgroundOpacity": 0,
 "width": 473,
 "right": 19,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "minWidth": 1,
 "propagateClick": true,
 "top": 9,
 "textShadowOpacity": 1,
 "text": "MUSEUM PENERANGAN",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 50,
 "fontSize": "40px",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "textShadowVerticalLength": 0,
 "class": "Label",
 "textShadowHorizontalLength": 0,
 "data": {
  "name": "text 1"
 },
 "textDecoration": "none",
 "verticalAlign": "middle",
 "fontWeight": "bold",
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF"
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Bebas Neue Book",
 "textShadowColor": "#000000",
 "id": "Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
 "left": 0,
 "width": 487,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "text": "Museum komunikasi dan informatika",
 "minWidth": 1,
 "propagateClick": true,
 "textShadowOpacity": 1,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 46,
 "fontSize": 41,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "textShadowVerticalLength": 0,
 "class": "Label",
 "textShadowHorizontalLength": 0,
 "data": {
  "name": "text 2"
 },
 "textDecoration": "none",
 "verticalAlign": "top",
 "visible": false,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF"
},
{
 "id": "Image_E009FB81_F5C6_A9F1_41ED_6C738EC63476",
 "backgroundOpacity": 0,
 "width": "26.17%",
 "left": "0%",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "url": "skin/Image_E009FB81_F5C6_A9F1_41ED_6C738EC63476.png",
 "minWidth": 1,
 "maxWidth": 1485,
 "propagateClick": false,
 "top": "0%",
 "maxHeight": 446,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "64.198%",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image8016"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center"
},
{
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "backgroundOpacity": 0,
 "left": "0%",
 "right": "0%",
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 1,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "minWidth": 1,
 "maxWidth": 3000,
 "propagateClick": true,
 "maxHeight": 2,
 "bottom": 53,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 2,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "horizontal",
 "overflow": "scroll",
 "minWidth": 1,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 30,
 "height": 51,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 3,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set container"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "backgroundOpacity": 1,
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "shadowColor": "#000000",
 "left": "10%",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": true,
 "right": "10%",
 "layout": "horizontal",
 "borderRadius": 0,
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "5%",
 "bottom": "5%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "scrollBarVisible": "rollOver",
 "left": "10%",
 "right": "10%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "vertical",
 "minHeight": 1,
 "minWidth": 1,
 "propagateClick": false,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "top": "5%",
 "bottom": "80%",
 "paddingRight": 20,
 "paddingLeft": 0,
 "paddingTop": 20,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "verticalAlign": "top",
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "backgroundOpacity": 1,
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "shadowColor": "#000000",
 "left": "10%",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": true,
 "right": "10%",
 "layout": "horizontal",
 "borderRadius": 0,
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "5%",
 "bottom": "5%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "scrollBarVisible": "rollOver",
 "left": "10%",
 "right": "10%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "vertical",
 "minHeight": 1,
 "minWidth": 1,
 "propagateClick": false,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "top": "5%",
 "bottom": "80%",
 "paddingRight": 20,
 "paddingLeft": 0,
 "paddingTop": 20,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "verticalAlign": "top",
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "backgroundOpacity": 1,
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "left": "15%",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": true,
 "right": "15%",
 "layout": "vertical",
 "borderRadius": 0,
 "overflow": "visible",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "7%",
 "bottom": "7%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "backgroundOpacity": 1,
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "shadowColor": "#000000",
 "left": "10%",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": true,
 "right": "10%",
 "layout": "horizontal",
 "borderRadius": 0,
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "5%",
 "bottom": "5%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "scrollBarVisible": "rollOver",
 "left": "10%",
 "right": "10%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "vertical",
 "minHeight": 1,
 "minWidth": 1,
 "propagateClick": false,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "top": "5%",
 "bottom": "80%",
 "paddingRight": 20,
 "paddingLeft": 0,
 "paddingTop": 20,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "verticalAlign": "top",
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "backgroundOpacity": 1,
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "left": "15%",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": true,
 "right": "15%",
 "layout": "vertical",
 "borderRadius": 0,
 "overflow": "visible",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "7%",
 "bottom": "7%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "backgroundOpacity": 1,
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "left": "15%",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": true,
 "right": "15%",
 "layout": "vertical",
 "borderRadius": 0,
 "overflow": "visible",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "7%",
 "bottom": "7%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "backgroundOpacity": 1,
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "left": "15%",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": true,
 "right": "15%",
 "layout": "vertical",
 "borderRadius": 0,
 "overflow": "visible",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "7%",
 "bottom": "7%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "backgroundOpacity": 1,
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "shadowColor": "#000000",
 "left": "10%",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadow": true,
 "right": "10%",
 "layout": "horizontal",
 "borderRadius": 0,
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "5%",
 "bottom": "5%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "data": {
  "name": "Global"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "scrollBarVisible": "rollOver",
 "left": "10%",
 "right": "10%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "vertical",
 "minHeight": 1,
 "minWidth": 1,
 "propagateClick": false,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "top": "5%",
 "bottom": "80%",
 "paddingRight": 20,
 "paddingLeft": 0,
 "paddingTop": 20,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "verticalAlign": "top",
 "horizontalAlign": "right"
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E11F49A0_F5C3_A92F_416B_8131C002FF50",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_E118F9A1_F5C3_A931_41E6_ED2C9ECEB910",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E11869A1_F5C3_A931_41D2_8EAA647E4273",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE599068_F16F_E1A3_41ED_724B9521111E_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_E119E9A1_F5C3_A931_41EB_C899EF772F35",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE580989_F16E_2365_41D8_634BB18DEC92_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E100E999_F5C3_A91E_41B6_36C0AD46A381",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_E105D994_F5C3_A916_41EC_757A08955EEC",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E1057994_F5C3_A916_419C_CE9C05E39F65",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 720,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_E106B995_F5C3_A916_41DA_01D40522F2E3",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2B9757_F16E_EFED_41E0_A1323F1D0B8B_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E106D995_F5C3_A916_41EE_88583C4F61A5",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_E173A981_F5C3_A9F1_41E0_C1FEC62D9B41",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E173E982_F5C3_A9F3_41A0_51FBD047E23A",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE58C338_F162_27A3_41CB_C7900E8875A6_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F8287540_F60E_6C10_41DD_FAF1C80DDF37",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E10DD985_F5C3_A9F1_4189_5304935FA884",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E10D1985_F5C3_A9F1_41E1_4D1E40B77332",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E10ED989_F5C3_A9F1_41EC_F45EC81E003A",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE28C526_F16E_23AF_41C4_EB196FE1F58D_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F8279541_F60E_6C10_41EB_08913C05331B",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_E103099D_F5C3_A911_41C1_6820297352CA",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE58D4C1_F16E_22E5_419B_6530BE72F4F3_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_E11CB99D_F5C3_A911_41E0_208654C70061",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E11EF99F_F5C3_A911_41DB_D3AFEFF72BF1",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E11E199F_F5C3_A911_41D1_B046E87E12A1",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E11FB99F_F5C3_A911_41C0_A1AA361ACB99",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2E455D_F16F_E39D_41C6_25AD05FF6198_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_E11F29A0_F5C3_A92F_41E3_E2D56345E11A",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E11919A2_F5C3_A933_41E0_D0579A660F66",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E11AA9A2_F5C3_A933_41E1_E451D90AFB94",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2BAB5F_F16F_E79D_41E8_C38402541BAC_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E11A29A3_F5C3_A931_41E4_4A9E3A5C46E7",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E11939A4_F5C3_A937_41D9_0A9E071A3476",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_E11979A5_F5C3_A931_41C6_909608F2A7DA",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE599642_F16E_21E7_41AE_D372D6EA4C03_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E11AF9A7_F5C3_A932_41E2_66D844E1B0BD",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_E11B19AA_F5C3_A933_41ED_750D03B7981C",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E11499AA_F5C3_A933_41E4_8E586940CDD4",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 720,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EB730236_F5C2_DB13_41E4_DD6C85945F30",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EB73A236_F5C2_DB13_41E3_3F27E5728CB6",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE599C02_F16E_2167_41DE_9FF4FB0645B7_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_EB4C523C_F5C2_DB17_41E6_74A84B1CAD36",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_E10CA983_F5C3_A9F1_41B2_8D42A3FDDE1C",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE5B4C65_F161_E1AD_41E4_ED7E1AFB2D36_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_E10CD983_F5C3_A9F1_41E4_E5C71B834B57",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E11A79A8_F5C3_A93F_41D9_33BD2D6D6FA0",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE29A11C_F16E_2363_41C9_769E2FB1DF2E_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E11BA9A9_F5C3_A931_41DA_F6AF3A48C8A3",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E1067995_F5C3_A916_41D1_1EECC6E2BD04",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E107A995_F5C3_A916_41E3_88E4AFCEC083",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E107C996_F5C3_A912_41E6_14E169EDA919",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE5B12E6_F16E_26AF_41C5_BF1D978E2E1B_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E1077996_F5C3_A912_41E1_CA8C201F9C86",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E10A7992_F5C3_A912_41D6_0A7AF74E2914",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E10B9992_F5C3_A912_41E5_742A0C45BE87",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2D4E94_F16E_2163_41BB_EB054C0D35A5_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E10BC992_F5C3_A912_41E4_1D2A79D9353E",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE588AAF_F16E_26BD_4191_5B406740A4E5_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E11D799E_F5C3_A913_4190_464320493215",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_E170897D_F5C3_A911_41E6_898CF998DC4E",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E171A97E_F5C3_A913_41C0_2E8F429A3CCD",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F82AD53E_F60E_6C70_41DA_B40ABBF72CD0",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_F829353E_F60E_6C70_41C7_C947C1BC98EA",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FECC1BC2_F162_66E4_41B6_CFA6CA2F37CE_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F829653E_F60E_6C70_41D8_BCFCFADB1B39",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE3F0086_F161_E16F_41D8_737CAFF81653_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_E1737982_F5C3_A9F3_41D4_95DDDEF903F3",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_E10AA991_F5C3_A9EE_41E4_958B6293DD8D",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE282699_F16E_2165_41D2_F52180B0C487_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E10AE992_F5C3_A912_41E7_BFC44E7D9F73",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_E171797F_F5C3_A911_41DD_FF540C81B34C",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE25C958_F162_63E3_41EC_15F8BB81E6F4_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_E172A980_F5C3_A9EF_41EA_6812344301E3",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE59A317_F16E_676D_41DB_CCD9EB095074_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_E115C9AB_F5C3_A931_41C0_51569B35D773",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E102D99D_F5C3_A916_41C9_66A98B424F9E",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_E102699D_F5C3_A911_4178_22C33E2BC6C8",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE28BA08_F16E_6163_41ED_F4C3696AFF4B_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E103F99D_F5C3_A911_41E1_0AF27205014C",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_E108F98C_F5C3_A9F7_41B8_EF5ED52A6CD4",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E108098D_F5C3_A9F1_41DA_3018C0AD771F",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E109A98D_F5C3_A9F1_41D6_EABD6954851D",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 720,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_EB66E219_F5C2_DB11_41E1_2C00D3CF146C",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE280D74_F16E_63A3_41ED_8649B8EDEC34_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_EB67621A_F5C2_DB13_41E0_E5CBD23DB5D4",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E1723980_F5C3_A9EF_41EA_561AB0DB6855",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2A562D_F162_21BD_41E0_9F58B9D5E9D2_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E1720981_F5C3_A9F1_41E0_6C9F192C9983",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E11429AB_F5C3_A931_41D3_E40C020C7A01",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2AD7B7_F16E_6EAD_41D1_70DD620125D9_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_E11459AB_F5C3_A931_41D0_DFAC08833405",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E101F99B_F5C3_A912_41E4_B97B1D8C7DC1",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E101199C_F5C3_A916_41E5_2C70E40F6B23",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE58FF43_F16E_7FE5_41EC_85A17C4EE401_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 720,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_E102B99D_F5C3_A916_41A4_628033823A9B",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_E10E798A_F5C3_A9F3_41E1_0EF3B475F700",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_E10F998A_F5C3_A9F3_41B3_AEDBF04D4C84",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E10FC98B_F5C3_A9F1_41D7_94DCD348DFDD",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE5B20E5_F16E_62AD_41ED_F235753CC5AB_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_E10F798B_F5C3_A9F1_41D8_65CBCD947818",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E100F996_F5C3_A912_41E7_9907784A5B4A",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E1001996_F5C3_A912_41EA_DF6094179335",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E101A997_F5C3_A912_41ED_1A18CC4A3A47",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2B4E21_F16E_21A5_41E8_E716E473453A_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E100B998_F5C3_A91E_41DE_FCDE6E7636E3",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2BD46B_F16E_61A5_41E0_670DC6A33833_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 720,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_E1005999_F5C3_A91E_41B5_7C6025933B9F",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_E11C299E_F5C3_A913_41CC_8A5C9E2128D5",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E11C499E_F5C3_A913_41DE_9CAA34E0343C",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE286F7A_F16E_3FA7_41D5_CE152ECD88F7_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E11DF99E_F5C3_A913_41CC_1F471CEBFA09",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE2A2DE5_F16E_62AD_41AC_430EFBCC036F_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E116B9AC_F5C3_A931_41D2_9A8C1F46F429",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E10B6993_F5C3_A912_41E5_AF719CA7F27C",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_E104F993_F5C3_A912_41AF_64B55BB666DB",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E1041993_F5C3_A912_41EB_0E581CE90383",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE5B2B73_F16E_E7A5_41CE_F853F9E7AE8C_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 720,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_E105B994_F5C3_A916_41E2_EC1FCC4B4DBC",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE598948_F16E_23E3_41CB_E40AD99607B2_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E116E9B1_F5C3_A911_41DD_AC80F4C45A34",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1050
  }
 ],
 "id": "AnimatedImageResource_E10C0984_F5C3_A9F7_41B0_B652BD0E982E",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE5B676B_F16E_2FA5_41E1_8D99F34258D7_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E10DA984_F5C3_A9F7_41E4_E92542B0DE4B",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E10AA98F_F5C3_A9F2_41B9_AC4AB398C544",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_E1084990_F5C3_A9EE_41ED_8A7C607CC108",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 540
  }
 ],
 "id": "AnimatedImageResource_E1098990_F5C3_A9EE_41EA_56CDFEC93E35",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE5B29CD_F16E_62FD_41B3_18EE6CBF07CD_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_E1090991_F5C3_A9EE_41A5_972A2FD860B7",
 "frameDuration": 41,
 "rowCount": 6
},
{
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "minWidth": 1,
 "maxWidth": 60,
 "propagateClick": true,
 "maxHeight": 60,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "height": 60,
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "class": "IconButton",
 "transparencyActive": true,
 "data": {
  "name": "image button menu"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "maxHeight": 58,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "height": 58,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.shareTwitter(window.location.href)",
 "class": "IconButton",
 "transparencyActive": true,
 "data": {
  "name": "IconButton TWITTER"
 },
 "verticalAlign": "middle",
 "visible": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "minWidth": 1,
 "maxWidth": 58,
 "propagateClick": true,
 "maxHeight": 58,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "height": 58,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.shareFacebook(window.location.href)",
 "class": "IconButton",
 "transparencyActive": true,
 "data": {
  "name": "IconButton FB"
 },
 "verticalAlign": "middle",
 "visible": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "gap": 5,
 "fontFamily": "Montserrat",
 "data": {
  "name": "Button house info"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "backgroundOpacity": 0,
 "width": 120,
 "layout": "horizontal",
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "iconHeight": 0,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 40,
 "fontSize": 12,
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "HOUSE INFO",
 "fontStyle": "normal",
 "class": "Button",
 "backgroundColor": [
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "rollOverShadow": false,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "rollOverBackgroundOpacity": 0.8,
 "textDecoration": "none",
 "verticalAlign": "middle",
 "shadowBlurRadius": 15,
 "horizontalAlign": "center",
 "iconWidth": 0,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "gap": 5,
 "fontFamily": "Montserrat",
 "data": {
  "name": "Button panorama list"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "backgroundOpacity": 0,
 "width": 130,
 "layout": "horizontal",
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "iconHeight": 32,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 40,
 "fontSize": 12,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "PANORAMA LIST",
 "fontStyle": "normal",
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "textDecoration": "none",
 "verticalAlign": "middle",
 "shadowBlurRadius": 15,
 "horizontalAlign": "center",
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "gap": 5,
 "fontFamily": "Montserrat",
 "data": {
  "name": "Button location"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "backgroundOpacity": 0,
 "width": 90,
 "layout": "horizontal",
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "iconHeight": 32,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 40,
 "fontSize": 12,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "LOCATION",
 "fontStyle": "normal",
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "textDecoration": "none",
 "verticalAlign": "middle",
 "shadowBlurRadius": 15,
 "horizontalAlign": "center",
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "gap": 5,
 "fontFamily": "Montserrat",
 "data": {
  "name": "Button floorplan"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "backgroundOpacity": 0,
 "width": 103,
 "layout": "horizontal",
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "iconHeight": 32,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 40,
 "fontSize": 12,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "FLOORPLAN",
 "fontStyle": "normal",
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "textDecoration": "none",
 "verticalAlign": "middle",
 "visible": false,
 "shadowBlurRadius": 15,
 "horizontalAlign": "center",
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "gap": 5,
 "fontFamily": "Montserrat",
 "data": {
  "name": "Button photoalbum"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "backgroundOpacity": 0,
 "width": 112,
 "layout": "horizontal",
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "iconHeight": 32,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 40,
 "fontSize": 12,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "PHOTOALBUM",
 "fontStyle": "normal",
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "textDecoration": "none",
 "verticalAlign": "middle",
 "visible": false,
 "shadowBlurRadius": 15,
 "horizontalAlign": "center",
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "gap": 5,
 "fontFamily": "Montserrat",
 "data": {
  "name": "Button realtor"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "backgroundOpacity": 0,
 "width": 90,
 "layout": "horizontal",
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "borderColor": "#000000",
 "iconHeight": 32,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 40,
 "fontSize": 12,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "REALTOR",
 "fontStyle": "normal",
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "textDecoration": "none",
 "verticalAlign": "middle",
 "visible": false,
 "shadowBlurRadius": 15,
 "horizontalAlign": "center",
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "85%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "absolute",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.51,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "50%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "vertical",
 "overflow": "visible",
 "minWidth": 460,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 50,
 "paddingLeft": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "width": "25%",
 "minHeight": 50,
 "shadow": false,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "maxHeight": 60,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "height": "75%",
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "class": "IconButton",
 "transparencyActive": false,
 "data": {
  "name": "X"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "backgroundOpacity": 1,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "85%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "absolute",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.51,
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "50%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "vertical",
 "overflow": "visible",
 "minWidth": 460,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 50,
 "paddingLeft": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "backgroundOpacity": 0,
 "width": "25%",
 "minHeight": 50,
 "shadow": false,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "maxHeight": 60,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "height": "75%",
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "class": "IconButton",
 "transparencyActive": false,
 "data": {
  "name": "X"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "absolute",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "height": 140,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "backgroundOpacity": 0.05,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "minHeight": 1,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "shadow": false,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemVerticalAlign": "top",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemPaddingLeft": 3,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemOpacity": 1,
 "paddingRight": 70,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemMinWidth": 50,
 "backgroundColor": [
  "#000000"
 ],
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "height": "100%",
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "backgroundColorDirection": "vertical",
 "class": "ThumbnailGrid",
 "borderSize": 0,
 "scrollBarColor": "#04A3E1",
 "itemHeight": 156,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 125,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "rollOverItemThumbnailShadow": true,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "borderRadius": 5,
 "itemLabelGap": 5,
 "minWidth": 1,
 "backgroundColorRatios": [
  0
 ],
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "itemThumbnailWidth": 220,
 "selectedItemThumbnailShadow": true,
 "itemLabelFontColor": "#666666",
 "paddingLeft": 70,
 "itemHorizontalAlign": "center",
 "itemPaddingBottom": 3,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "gap": 26,
 "paddingBottom": 70,
 "itemMaxWidth": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemMode": "normal",
 "verticalAlign": "middle",
 "itemWidth": 220,
 "data": {
  "name": "ThumbnailList"
 },
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailBorderRadius": 0,
 "horizontalAlign": "center",
 "itemLabelFontFamily": "Montserrat",
 "rollOverItemThumbnailShadowColor": "#04A3E1"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "backgroundOpacity": 1,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "85%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "absolute",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.51,
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "15%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "vertical",
 "overflow": "visible",
 "minWidth": 400,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 50,
 "paddingLeft": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "width": "25%",
 "minHeight": 50,
 "shadow": false,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "maxHeight": 60,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "height": "75%",
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "class": "IconButton",
 "transparencyActive": false,
 "data": {
  "name": "X"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "absolute",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "height": 140,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "progressBarBorderSize": 6,
 "id": "MapViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "minHeight": 1,
 "shadow": false,
 "transitionDuration": 500,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Century Gothic",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "paddingRight": 0,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "12px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "absolute",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "height": 140,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "absolute",
 "overflow": "visible",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "absolute",
 "overflow": "visible",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "55%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "absolute",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.51,
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "45%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "vertical",
 "overflow": "visible",
 "minWidth": 460,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 60,
 "paddingLeft": 60,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "backgroundOpacity": 0,
 "width": "25%",
 "minHeight": 50,
 "shadow": false,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "maxHeight": 60,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "height": "75%",
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "class": "IconButton",
 "transparencyActive": false,
 "data": {
  "name": "X"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minWidth": 1,
 "maxWidth": 2000,
 "propagateClick": false,
 "top": "0%",
 "maxHeight": 1000,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "horizontal",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "class": "Container",
 "height": 60,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "verticalAlign": "top",
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.79,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "vertical",
 "overflow": "scroll",
 "minWidth": 100,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "horizontal",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "gap": 10,
 "class": "Container",
 "height": 40,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "progressBarBorderSize": 6,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "playbackBarProgressBorderRadius": 0,
 "left": 0,
 "toolTipShadowOpacity": 1,
 "minHeight": 1,
 "shadow": false,
 "progressBarBorderRadius": 0,
 "right": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "transitionDuration": 500,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Century Gothic",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "paddingRight": 0,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "progressRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "bottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "12px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer info 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "horizontal",
 "overflow": "scroll",
 "minWidth": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container arrows"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "horizontal",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "class": "Container",
 "height": 60,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "verticalAlign": "top",
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.79,
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "vertical",
 "overflow": "scroll",
 "minWidth": 100,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "horizontal",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "gap": 10,
 "class": "Container",
 "height": 40,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "minHeight": 100,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "0%",
 "paddingRight": 0,
 "paddingLeft": 80,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.14vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.14vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "width": "100%",
 "right": 20,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "top": 20,
 "maxHeight": 60,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "height": "36.14%",
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "class": "IconButton",
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 },
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "cursor": "hand"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundOpacity": 1,
 "left": "0%",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "right": "0%",
 "insetBorder": false,
 "minWidth": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "top": "0%",
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "class": "WebFrame",
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "horizontal",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "class": "Container",
 "height": 60,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "verticalAlign": "top",
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.79,
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "vertical",
 "overflow": "scroll",
 "minWidth": 100,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "horizontal",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "gap": 10,
 "class": "Container",
 "height": 40,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "minHeight": 100,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "0%",
 "paddingRight": 0,
 "paddingLeft": 80,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.14vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.14vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "width": "100%",
 "right": 20,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "top": 20,
 "maxHeight": 60,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "height": "36.14%",
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "class": "IconButton",
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 },
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "minHeight": 100,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "top": "0%",
 "paddingRight": 0,
 "paddingLeft": 80,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.14vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.14vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "backgroundOpacity": 0,
 "width": "100%",
 "right": 20,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "top": 20,
 "maxHeight": 60,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "height": "36.14%",
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "class": "IconButton",
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 },
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "cursor": "hand"
},
{
 "progressBarBorderSize": 6,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "minHeight": 1,
 "shadow": false,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "transitionDuration": 500,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Century Gothic",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "paddingRight": 0,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "12px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "backgroundOpacity": 0,
 "width": "14.22%",
 "left": 10,
 "minHeight": 50,
 "shadow": false,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "top": "20%",
 "maxHeight": 60,
 "bottom": "20%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "paddingBottom": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "data": {
  "name": "IconButton <"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "backgroundOpacity": 0,
 "width": "14.22%",
 "right": 10,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "top": "20%",
 "maxHeight": 60,
 "bottom": "20%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "paddingBottom": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "data": {
  "name": "IconButton >"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "progressBarBorderSize": 6,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "minHeight": 1,
 "shadow": false,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "transitionDuration": 500,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Century Gothic",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "paddingRight": 0,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "12px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "backgroundOpacity": 0,
 "width": "14.22%",
 "left": 10,
 "minHeight": 50,
 "shadow": false,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "top": "20%",
 "maxHeight": 60,
 "bottom": "20%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingBottom": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "data": {
  "name": "IconButton <"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "width": "14.22%",
 "right": 10,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "top": "20%",
 "maxHeight": 60,
 "bottom": "20%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingBottom": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "data": {
  "name": "IconButton >"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "width": "10%",
 "right": 20,
 "shadow": false,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "top": 20,
 "maxHeight": 60,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "height": "10%",
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "class": "IconButton",
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 },
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "cursor": "hand"
},
{
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "backgroundOpacity": 0,
 "width": "100%",
 "left": "0%",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minWidth": 1,
 "maxWidth": 2000,
 "propagateClick": false,
 "top": "0%",
 "maxHeight": 1000,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "verticalAlign": "bottom",
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "horizontal",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "class": "Container",
 "height": 60,
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "verticalAlign": "top",
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.79,
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "vertical",
 "overflow": "scroll",
 "minWidth": 100,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "class": "Container",
 "height": "100%",
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "horizontal",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "gap": 10,
 "class": "Container",
 "height": 40,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.76vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.39vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.39vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.4vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.4vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.4vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.4vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.61vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Bebas Neue Bold",
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundOpacity": 0.7,
 "width": "46%",
 "layout": "horizontal",
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minHeight": 1,
 "height": "9%",
 "shadow": false,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": "3vh",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "lorem ipsum",
 "fontStyle": "normal",
 "gap": 5,
 "class": "Button",
 "pressedBackgroundOpacity": 1,
 "borderSize": 0,
 "iconHeight": 32,
 "data": {
  "name": "Button"
 },
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "horizontalAlign": "center",
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "backgroundOpacity": 0,
 "width": "12%",
 "minHeight": 70,
 "shadow": false,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "minWidth": 70,
 "maxWidth": 150,
 "propagateClick": false,
 "maxHeight": 150,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "height": "8%",
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "paddingBottom": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "data": {
  "name": "IconButton <"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "backgroundOpacity": 0,
 "width": "80%",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "absolute",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "30%",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container separator"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "backgroundOpacity": 0,
 "width": "12%",
 "minHeight": 70,
 "shadow": false,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "minWidth": 70,
 "maxWidth": 150,
 "propagateClick": false,
 "maxHeight": 150,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "height": "8%",
 "paddingTop": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "paddingBottom": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "data": {
  "name": "IconButton >"
 },
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.76vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.39vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.39vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.4vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.4vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Bebas Neue Bold",
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "backgroundOpacity": 0.7,
 "width": "46%",
 "layout": "horizontal",
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minHeight": 1,
 "height": "9%",
 "shadow": false,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": "3vh",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "lorem ipsum",
 "fontStyle": "normal",
 "gap": 5,
 "class": "Button",
 "pressedBackgroundOpacity": 1,
 "borderSize": 0,
 "iconHeight": 32,
 "data": {
  "name": "Button"
 },
 "verticalAlign": "middle",
 "shadowBlurRadius": 6,
 "horizontalAlign": "center",
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.76vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.39vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.39vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.14vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "data": {
  "name": "Button"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "backgroundOpacity": 0.7,
 "width": 207,
 "layout": "horizontal",
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "borderColor": "#000000",
 "iconHeight": 32,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#04A3E1"
 ],
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "fontSize": 34,
 "pressedBackgroundOpacity": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "lorem ipsum",
 "fontStyle": "normal",
 "borderSize": 0,
 "gap": 5,
 "class": "Button",
 "height": 59,
 "rollOverBackgroundOpacity": 1,
 "textDecoration": "none",
 "verticalAlign": "middle",
 "visible": false,
 "shadowBlurRadius": 6,
 "horizontalAlign": "center",
 "iconWidth": 32,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "45%",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.76vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.79vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "layout": "horizontal",
 "overflow": "scroll",
 "minWidth": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "height": "80%",
 "contentOpaque": false,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "backgroundOpacity": 0,
 "width": "25%",
 "minHeight": 1,
 "shadow": false,
 "borderRadius": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minWidth": 1,
 "maxWidth": 200,
 "propagateClick": false,
 "maxHeight": 200,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "verticalAlign": "top",
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "width": "75%",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarMargin": 2,
 "shadow": false,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.39vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.97vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.87vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText19460"
 }
}],
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Player",
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "registerKey": function(key, value){  window[key] = value; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "existsKey": function(key){  return key in window; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "unregisterKey": function(key){  delete window[key]; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "borderSize": 0,
 "gap": 10,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "verticalAlign": "top",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "horizontalAlign": "left",
 "downloadEnabled": false,
 "defaultVRPointer": "laser"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
