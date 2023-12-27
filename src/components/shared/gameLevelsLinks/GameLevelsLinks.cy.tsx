import memoTheMeloMockData from '@/mockData/memoTheMelo';
import GameLevelsLinks from './GameLevelsLinks';
describe('<GameLevelsLinks />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GameLevelsLinks levelsData={memoTheMeloMockData} lang='en' game='memo-the-melo' />)
  })
})