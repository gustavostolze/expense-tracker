import styled from 'styled-components';

export const Container = styled.div``;

export const DialogBox = styled.dialog<{ isModalOpen: boolean }>`
    inset: 0;
    background-color: whitesmoke;
    min-width: 450px;
    padding: 10px;
    border-radius: 6px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    border: none;
    &::backdrop {
        animation: ${(props) =>
          props.isModalOpen
            ? 'fade-in 500ms forwards'
            : 'fade-out 500ms forwards'};
        background: rgba(0, 0, 0, 0.4);
    }
    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes fade-out {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;

export const InsertContainer = styled.div`
    background-color: #FFF;
    animation: fade-in 500ms;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    align-items: center;
`;

export const InputLabel = styled.label<{ display?: string }>`
    margin: 10px;
    display: ${(props) => (props.display ? props.display : '')};
`;

export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;

export const RadioSelect = styled.div`
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
`;

export const InputRadio = styled.input`
`;

export const RadioSpan = styled.span`
    font-weight: bold;
`;

export const InputColor = styled.input`
    border: none;
    background-color: #fff;
    cursor: pointer;
    width: 100%;
    height: 40px;
    transition: 0.3s;
    &::-webkit-color-swatch {
        border-radius: 50px;
        border: 1px solid lightblue;
    }
    &:hover {
        opacity: .8;
    }
`;

export const Button = styled.button<{ width?: string }>`
    padding: 14px 22px;
    border: none;
    margin: ${(props) => (props.width ? '20px 25%' : '0')};
    width: ${(props) => (props.width ? props.width : '100%')};
    background: #4070f4;
    color: #fff;
    cursor: pointer;
    font-weight: 400;
    border-radius: 6px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    &:hover {
        background-color: #265df2;
    }
`;
