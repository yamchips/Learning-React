import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGame";

// components should be primarily for returning mark up and handling user interactions at high level
const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
