import {
  SortableContext,
  horizontalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import CardModel from "./cardModel";

interface CardProps {
  card: CardModel;
}

const SortableUser = ({ card }: CardProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: card.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="card"
    >
      <div
        style={{
          backgroundColor: "lightcoral",
          padding: "10px",
          display: "inline-block",
          border: "1px solid black",
          width: "40px",
          margin: "1px",
        }}
      >
        {card.name}
      </div>
    </div>
  );
};

export default SortableUser;
