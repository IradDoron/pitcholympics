import { colorsTemplateMatrix } from '@/constants';
import { MatrixWithId, MemoBlocksDataTable, NoteStatus } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function splitCamelCaseToString(s: string): string {
	return s.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, l => l.toUpperCase()); // Convert the game name to a readable format
}

export function parseTable(table: MemoBlocksDataTable) : MatrixWithId {
	return {
		id: crypto.randomUUID(),
		data: (
			table.map((row,rowIndex) => {
				return row.map((cell,colIndex) => {
					return { 
							note: colorsTemplateMatrix[rowIndex][colIndex].note,
							isActive: cell === NoteStatus.ACTIVE || cell === NoteStatus.TIED,
							isTied: cell === NoteStatus.TIED
						}
					});
				}
			)
				)
}}