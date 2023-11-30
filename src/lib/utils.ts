import { colorsTemplateMatrix } from '@/constants';
import { CellInfo, MatrixWithId, NoteStatus } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function splitCamelCaseToString(s: string): string {
	return s.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, l => l.toUpperCase()); // Convert the game name to a readable format
}


export function parseTable(values: CellInfo[]): MatrixWithId {

	return {
		id: crypto.randomUUID(),
		data:
			Array.from({ length: 8 }, (_, rowIndex) => {
				return Array.from({ length: 4 }, (_, colIndex) => {
					const cell = values.find(cell => cell.row === rowIndex && cell.col === colIndex);
					return {
						note: colorsTemplateMatrix[rowIndex][colIndex].note,
						isActive: cell?.value === NoteStatus.ACTIVE || cell?.value === NoteStatus.TIED,
						isTied: cell?.value === NoteStatus.TIED
					}
				});
			})
	};
}

