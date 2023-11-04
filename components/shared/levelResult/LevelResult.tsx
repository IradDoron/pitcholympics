import Button from '@/components/core/button'
import ResultData from './ResultData'
import ResultTitle from './ResultTitle'
import { Locale } from '@/i18n.config'

type Props = {
    level: number,
    score: number | null,
    actionButtonLabel: string,
    actionButtonOnClick: () => void,
    lang: Locale,
}

const LevelResult = ({ level, score, actionButtonLabel, actionButtonOnClick, lang }: Props) => {
    return (
        <div className="items-center flex flex-col gap-10">
            <ResultTitle level={level} lang={lang} />
            <ResultData score={score} lang={lang} />
            <Button label={actionButtonLabel} onClick={actionButtonOnClick} />

        </div>
    )
}

export default LevelResult