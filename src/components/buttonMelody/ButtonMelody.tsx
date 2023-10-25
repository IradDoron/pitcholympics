import { Dispatch, SetStateAction } from "react"

type Props = {
    noteId: number,
    setUserGuess: Dispatch<SetStateAction<number[]>>,
    currentNote: number,
    userGuess: number[]
}
const ButtonMelody = ({ noteId, setUserGuess, currentNote, userGuess }: Props) => {
    const colorArray = ["bg-yellow-300", "bg-red-300", "bg-green-300", "bg-blue-300"]
    const clickHandler = () => {
        if (userGuess.length === currentNote) return
        const newGuess = [...userGuess]
        newGuess.push(noteId)
        setUserGuess(newGuess)
    }

    return (

        (
            noteId && (
                <div onClick={clickHandler} className={`w-24 h-24 rounded-md hover:shadow-2xl flex flex-row items-center justify-center ${colorArray[noteId - 1]} text-white text-center mt-[20px]`}>Number{noteId}</div>
            )
        ))
}



export default ButtonMelody