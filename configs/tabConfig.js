//export components
import HomeScreen from '../screens/HomeScreen';
import TodoSearchScreen from '../screens/TodoSearchScreen';
import TodoWriteScreen from '../screens/TodoWriteScreen';
import TodoListScreen from '../screens/TodoListScreen';
import MyPageScreen from '../screens/MyPageScreen';

// icons
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; // materialCommunity Icons 


const tabConfig = [
    {
      name: "Home",
      title: "홈",
      component: HomeScreen,
      focusedIcon: "home-variant",
      unfocusedIcon: "home-variant-outline",
      iconComponent: MaterialCommunityIcons
    },
    {
      name: "TodoSearch",
      title: "검색",
      component: TodoSearchScreen,
      focusedIcon: "text-search",
      unfocusedIcon: "text-search",
      iconComponent: MaterialCommunityIcons

    },
    {
      name: "TodoWrite",
      title: "작성",
      component: TodoWriteScreen,
      focusedIcon: "note-edit",
      unfocusedIcon: "note-edit-outline",
      iconComponent: MaterialCommunityIcons
    },
    {
      name: "TodoList",
      title: "목록",
      component: TodoListScreen,
      focusedIcon: "view-list",
      unfocusedIcon: "view-list-outline",
      iconComponent: MaterialCommunityIcons
    },
    {
      name: "MyPage",
      title: "내 정보",
      component: MyPageScreen,
      focusedIcon: "account-circle",
      unfocusedIcon: "account-circle-outline",
      iconComponent: MaterialCommunityIcons
    },
  ]

  export default tabConfig;