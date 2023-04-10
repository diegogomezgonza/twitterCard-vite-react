import "./App.css";
import { Card } from "./card";

const users = [
  {
    userName: "DayoScript",
    name: "Dayo",
    isFollowing: false,
  },
  {
    userName: "JWulen",
    name: "JWulen",
    isFollowing: false,
  },
  {
    userName: "HIDEO_KOJIMA",
    name: "Hideo Kojima",
    isFollowing: false,
  },
  {
    userName: "IGN",
    name: "IGN",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <Card
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </Card>
      ))}
    </section>
  );
}
