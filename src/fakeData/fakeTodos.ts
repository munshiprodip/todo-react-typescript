type TodoType = {
  id: number;
  todo: string;
  isCompleted: boolean;
}
const fakeTodos:TodoType[] = [
    {
        id:1,
        todo:"Check email",
        isCompleted:true,
    },
    {
        id:2,
        todo:"Learn basic typescript",
        isCompleted:true,
    },
    {
        id:3,
        todo:"Make todo app with react & typescript",
        isCompleted:true,
    },
    {
        id:4,
        todo:"Submit ACC assignment",
        isCompleted:true,
    },
    {
        id:5,
        todo:"Update bullet journal",
        isCompleted:true,
    },
    {
        id:6,
        todo:"Ride bicycle",
        isCompleted:false,
    },
    {
        id:7,
        todo:"Change aquarium water",
        isCompleted:false,
    }
]
    

export default fakeTodos