import styled from 'styled-components';

export const TableLine = styled.tr`
    width: 100%;
`;

export const TableColumn = styled.td`
    padding: 10px 0;
`;

export const Category = styled.div<{ color: string }>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    background-color: ${(props) => props.color};
`;

export const Value = styled.div<{ color: string }>`
    color: ${(props) => props.color};
`;

export const ManagerArea = styled.div`
    display: flex;
    justify-content: center;
`;

export const ManagerIcon = styled.div<{ color?: string }>`
    font-size: 18px;
    margin-left: 10px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        color: ${(props) => props.color};
    }
`;

export const Icon = styled.div<{ icon?: string }>`
    color: ${(props) => (props.color ? props.color : 'red')};
    font-size: 120px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin: 20px 10px;
`;

export const Button = styled.button<{
  width?: string;
  margin?: string;
  background?: string;
  backgroundHover?: string;
}>`
    padding: 14px 22px;
    border: none;
    margin: ${(props) => (props.margin ? props.margin : '0')};
    width: ${(props) => (props.width ? props.width : '100%')};
    background: ${(props) => (props.background ? props.background : '#4070f4')};
    color: #fff;
    cursor: pointer;
    font-weight: 400;
    border-radius: 6px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    &:hover {
        background-color: ${(props) =>
          props.backgroundHover ? props.backgroundHover : '#265df2'};
    }
`;

export const IconTitle = styled.span`
    font-weight: bold;
    font-size: 18px;
`;

export const TrashBox = styled.dialog<{ isTrashOpen: boolean }>`
        inset: 0;
        background-color: whitesmoke;
        padding: 50px;
        text-align: center;
        border-radius: 6px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        border: none;
        &::backdrop {
            animation: ${(props) =>
              props.isTrashOpen
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

export const EditBox = styled.dialog<{ isEditOpen: boolean }>`
    inset: 0;
    background-color: whitesmoke;
    padding: 10px;
    text-align: center;
    border-radius: 6px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    border: none;
    &::backdrop {
    animation: ${(props) =>
      props.isEditOpen ? 'fade-in 500ms forwards' : 'fade-out 500ms forwards'};
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
