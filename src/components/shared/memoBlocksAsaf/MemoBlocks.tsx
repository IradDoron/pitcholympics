"use client";
import Card from "@/components/core/card";
import { Store } from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  DndContext,
  closestCenter,
  useDroppable,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { type } from "os";
import SortableUser from "./SortsbleUser";
import { arrayMove } from "@dnd-kit/sortable";
import { useState } from "react";
import CardModel from "./cardModel";

const cardsArr = [
  { name: "Asaf", id: 1 },
  { name: "Joe", id: 2 },
  { name: "Mic", id: 3 },
];

// type DragEndEventType = {
//   active: {
//     id: number;
//   };
//   over: {
//     id: number;
//   };
// };

//className="w-full h-full flex justify-center bg-indigo-400"
const MemoBlocks = () => {
  const [cards, setCards] = useState(cardsArr);
  const [activeItem, setActiveItem] = useState<CardModel>();

  // const onDragEnd = (e: DragEndEvent) => {
  //   const { active, over } = e;
  //   if (active === over) {
  //     return;
  //   }
  //   setCards((card) => {
  //     const oldIndex = cards.findIndex((card) => card.id === active.id);
  //     const newIndex = cards.findIndex((card) => card.id === over.id);
  //     return arrayMove(cards, oldIndex, newIndex);
  //   });
  // };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeItem = cards.find((item) => item.id === active.id);
    const overItem = cards.find((item) => item.id === over.id);

    if (!activeItem || !overItem) {
      return;
    }

    const activeIndex = cards.findIndex((card) => card.id === active.id);
    const overIndex = cards.findIndex((card) => card.id === over.id);

    if (activeIndex !== overIndex) {
      setCards((prev) => arrayMove<CardModel>(prev, activeIndex, overIndex));
    }
    setActiveItem(undefined);
  };

  // const handleDragCancel = () => {
  //   setActiveItem(undefined);
  // };

  // const handleButtonClick = () => {
  //   const itemIds = cards.map((item) => item.id);
  //   alert(itemIds);
  // };

  return (
    <div className="w-full h-full flex justify-center bg-indigo-400 pt-28">
      <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext items={cards} strategy={horizontalListSortingStrategy}>
          {cards.map((card) => (
            <SortableUser key={card.id} card={card} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default MemoBlocks;
