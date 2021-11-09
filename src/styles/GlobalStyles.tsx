import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

declare module 'styled-components' {
  export interface DefaultTheme {
    pallete: {
      [key: string]: string;
      white: string;
      black: string;
    };
  }
}

const GlobalStyles = createGlobalStyle`
	${reset}
	*{
		box-sizing:border-box;
	}
	a{
		text-decoration : none;
		color:inherit;
		cursor:pointer;
	}
`;

export default GlobalStyles;
