import styled from "styled-components";

const getButtonColor = (styledProps) => {
    const buttonColors = {
        'Edit': `linear-gradient(120deg, ${styledProps.theme.colors.secondary}, ${styledProps.theme.colors.darkSecondary})`,
        'Delete': `linear-gradient(120deg, ${styledProps.theme.colors.main}, ${styledProps.theme.colors.darkMain})`
    }
    return buttonColors[styledProps.styleType]
}

const getShadowColor = (styledProps) => {
    const buttonColors = {
        'Edit': `${styledProps.theme.colors.secondary}`,
        'Delete': `${styledProps.theme.colors.main}`
    }
    return buttonColors[styledProps.styleType]
}

export const Container = styled.li`
    min-height: 50px;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.colors.default};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    font-size: 0.9em;
    
    &.done {
        text-decoration: line-through;
        color: ${(props) => props.theme.colors.default};
    }
`

export const ButtonsGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
`

export const Button = styled.button`
    border: none;
    background: ${(props) => getButtonColor(props)};
    color: ${(props) => props.theme.colors.background};
    min-width: 30px;
    height: 30px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 0 0px ${(props) => getShadowColor(props)};

    &:hover {
        box-shadow: 0 0 5px ${(props) => getShadowColor(props)};
        transition: 0.3s;
    }

    &.editing {
        padding: 5px 10px;
    }
`

export const LabelItem = styled.div`
    display: flex;
    min-width: 50%;
`