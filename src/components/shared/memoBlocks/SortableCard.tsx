import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { MatrixWithId } from '@/types';
import MemoBlocksCard from './MemoBlocksCard';

type Props = {
    card: MatrixWithId;
    isActive: boolean;
    onClick: () => void;
};

const SortableCard = ({ card, isActive, onClick }: Props) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: card.id });
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };
    const activeEffect = isActive ? 'border-2 rounded-lg border-blue-500 dark:border-dark-background-onDefault' : 'border-2 rounded-lg dark:border-dark-background-default ';

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
        >
            <div className={'h-full items-center justify-center max-w-[240px]'} onPointerDown={onClick}>
                <div className={activeEffect || ''}>
                    <MemoBlocksCard matrix={card.data} />
                </div>

            </div>
        </div>
    );
};

export default SortableCard;
