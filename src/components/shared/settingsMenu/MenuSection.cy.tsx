import { MenuSection } from './MenuSection';

describe('<MenuSection />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(
            <MenuSection
                isLast={true}
                className='jj'
                onClick={() => {
                    console.log('hey');
                }}>
                {' '}
            </MenuSection>,
        );
    });
});
