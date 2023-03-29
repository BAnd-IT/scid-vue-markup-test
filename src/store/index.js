import { createStore } from "vuex";

export default createStore({
  state: {
    slides: [
      {
        id: 0,
        title:
          "<p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit 1</span></p>",
        cover: require("../assets/images/slide-01.jpg"),
      },
      {
        id: 2,
        title:
          "<p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit 2</span></p>",
        cover: require("../assets/images/slide-01.jpg"),
      },
      {
        id: 3,
        title:
          "<p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit 3</span></p>",
        cover: require("../assets/images/slide-01.jpg"),
      },
      {
        id: 4,
        title:
          "<p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit 4</span></p>",
        cover: require("../assets/images/slide-01.jpg"),
      },
      {
        id: 5,
        title:
          "<p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit 5</span></p>",
        cover: require("../assets/images/slide-01.jpg"),
      },
    ],
    services: [
      {
        id: 0,
        title: "Кадастровые работы в отношении земельных участков 1",
        cover: require("../assets/images/service-01.jpg"),
      },
      {
        id: 1,
        title: "Кадастровые работы в отношении земельных участков 2",
        cover: require("../assets/images/service-02.jpg"),
      },
      {
        id: 2,
        title: "Кадастровые работы в отношении земельных участков 3",
        cover: require("../assets/images/service-03.jpg"),
      },
      {
        id: 3,
        title: "Кадастровые работы в отношении земельных участков 4",
        cover: require("../assets/images/service-04.jpg"),
      },
      {
        id: 4,
        title: "Кадастровые работы в отношении земельных участков 5",
        cover: require("../assets/images/service-05.jpg"),
      },
      {
        id: 5,
        title: "Кадастровые работы в отношении земельных участков 6",
        cover: require("../assets/images/service-06.jpg"),
      },
      {
        id: 6,
        title: "Кадастровые работы в отношении земельных участков 7",
        cover: require("../assets/images/service-01.jpg"),
      },
      {
        id: 7,
        title: "Кадастровые работы в отношении земельных участков 8",
        cover: require("../assets/images/service-02.jpg"),
      },
      {
        id: 8,
        title: "Кадастровые работы в отношении земельных участков 9",
        cover: require("../assets/images/service-03.jpg"),
      },
      {
        id: 9,
        title: "Кадастровые работы в отношении земельных участков 10",
        cover: require("../assets/images/service-04.jpg"),
      },
    ],
  },
  getters: {
    getAllServices(state) {
      return state.services;
    },

    getPartialServices(state) {
      return state.services.slice(0, 6);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
