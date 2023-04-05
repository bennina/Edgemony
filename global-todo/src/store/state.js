export const initialState = {
  tasksListData: [
    {
      id: 1,
      todo: "Lorem psum sit",
      completed: true,
      image: "https://robohash.org/PBZ.png?set=set4&size=150x150",
      username: "Primo",
    },
    {
      id: 2,
      todo: "Lorem psum sit",
      completed: false,
      image: "https://robohash.org/PBZ.png?set=set4&size=150x150",
      username: "SECONDO",
    },
    {
      id: 3,
      todo: "Lorem psum sit",
      completed: true,
      image: "https://robohash.org/PBZ.png?set=set4&size=150x150",
      username: "TRE",
    },
  ],
  isModalVisibile: false,
  tempTodo: {
    username: "",
    todo: "",
    image: "",
    id: null,
  },
};
