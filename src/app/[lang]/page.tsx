import HomePage from '@/components/shared/homePage';
import Link from '@/components/core/link';
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';
import PageTitle from '@shared/pageTitle';
import LevelLink from '@/components/core/levelLink/LevelLink';
import NotesCircle from '@/components/core/notesCircle/NotesCircle';
import GameLink from '@/components/shared/gameLink/GameLink';
import CircleGradient from '@/components/core/circleGradient';

const Home = async ({ params: { lang } }: LangParam) => {
  const dict = await getDictionaryServer(lang);
  const { page } = dict.app;

  return (
    <div className="h-5/6 flex flex-col justify-center items-center gap-10 sm:flex-row sm:gap-20">
      <GameLink href="memo-the-melo" colorType="peach" label="Memo the Melo" lang={lang} />
      <GameLink href="pitch-catch" colorType="lambada" label="Pitch Catch" lang={lang} />
    </div>
  );
};

export default Home;
