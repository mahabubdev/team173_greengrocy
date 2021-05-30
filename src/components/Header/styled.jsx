import styled from 'styled-components';

export const HeaderWrap = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 1rem 0 rgba(0,0,0, 0.05);

    .logo_area {
        max-width: 200px;

        span {
            font-size: 2rem;
            font-weight: 600;
            text-transform: capitalize;
            color: #011A3E;

            .logo_dot {
                color: #21C87A;
            }
        }
    }

    .menu_area {
        display: flex;
        align-items: center;
        gap: 1rem;
        list-style: none;

        a {
            text-decoration: none;
            color: #1C1A1F;
        }
    }
`;