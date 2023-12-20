'use client';
import styled from 'styled-components';

type Props = {
    children: React.ReactNode;
    title: string;
    content: string;
};

const SuggestionPageModal = styled.div`
    background-color: ${({ theme }) => theme.colors.colorName1};
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid red;
    position: fixed;
    top: 0;
    right: 0;
`;

function SuggestionPageModalComponent({ children, title, content }: Props) {
    return (
        <SuggestionPageModal>
            <h1>{title}</h1>
            <h3>{content}</h3>
            {children}
        </SuggestionPageModal>
    );
}

export default SuggestionPageModalComponent;
