export const vereskSuitVR = () => {
  return useState("vereskSuitVR", () => {
    return {
      default: {
        firstScene: "room",
        author: "Veresk.club",
        sceneFadeDuration: 1000,
        autoRotate: 1,
        autoRotateInactivityDelay: 10000,
        autoLoad: true,
        compass: false,
        basePath: "/panoramas/halflux/",
        hotSpotDebug: false,
      },
      scenes: {
        room: {
          title: "Номер",
          hfov: 150,
          pitch: 3.349,
          yaw: -213.32,
          type: "equirectangular",
          panorama: "room.jpg",
          hotSpots: [
            {
              pitch: 1.975,
              yaw: -271.68,
              type: "scene",
              text: "Вход",
              sceneId: "door",
            },
            {
              pitch: -2.329,
              yaw: -253.016,
              type: "scene",
              text: "Спальная комната",
              sceneId: "bedroom",
            },
            {
              pitch: -3.539,
              yaw: -128.458,
              type: "scene",
              text: "Балкон",
              sceneId: "balcony",
            },
          ],
        },
        bedroom: {
          title: "Номер",
          hfov: 150,
          pitch: -14.234,
          yaw: -96.39,
          type: "equirectangular",
          panorama: "bedroom.jpg",
          hotSpots: [
            {
              pitch: -3.597,
              yaw: -69.347,
              type: "scene",
              text: "Вход",
              sceneId: "door",
            },
            {
              pitch: -6.1248,
              yaw: -90.603,
              type: "scene",
              text: "Номер",
              sceneId: "room",
            },
            {
              pitch: -2.51,
              yaw: -118.46,
              type: "scene",
              text: "Балкон",
              sceneId: "balcony",
            },
          ],
        },
        door: {
          title: "Вход в номер",
          hfov: 150,
          pitch: 0.029,
          yaw: -165.499,
          type: "equirectangular",
          panorama: "door.jpg",
          hotSpots: [
            {
              pitch: 7.009,
              yaw: -137.003,
              type: "scene",
              text: "Ванная комната",
              sceneId: "bath",
            },
            {
              pitch: 5.34,
              yaw: -174.76,
              type: "scene",
              text: "Номер",
              sceneId: "room",
            },
          ],
        },
        balcony: {
          title: "Балкон",
          hfov: 150,
          pitch: -1.09,
          yaw: -33.463,
          type: "equirectangular",
          panorama: "balcony.jpg",
          hotSpots: [
            {
              pitch: -1.7905,
              yaw: -181.889,
              type: "scene",
              text: "Номер",
              sceneId: "room",
            },
          ],
        },
        bath: {
          title: "Ванная комната",
          hfov: 150,
          pitch: 0.029,
          yaw: -165.499,
          type: "equirectangular",
          panorama: "bath.jpg",
          hotSpots: [
            {
              pitch: 0.1832,
              yaw: -205.26,
              type: "scene",
              text: "Прихожая",
              sceneId: "door",
            },
          ],
        },
      },
    };
  });
};
