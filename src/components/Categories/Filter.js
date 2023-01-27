import styled from "@emotion/styled";

const Filter = styled.div`
    display: flex;
    justify-content: space-between;

    select {
        background-color: transparent;
        color: white;
        width: 4rem;
        border: none;
    }
    option {
        color: black;
    }
    p {
        font-weight: bold;
    }
`

export default Filter;