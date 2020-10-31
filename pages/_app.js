import { Anchor, Box, Grommet, Footer, Text } from "grommet";

import "../styles/globals.css";

const sisterTheme = {
  global: {
    colors: {
      brand: "#393A3A",
      "neutral-2": "#ED4837"
    }
  }
};

function MyApp({ Component, pageProps }) {
  return (
    <Grommet theme={sisterTheme}>
      <Component {...pageProps} />

      <Footer background="brand" pad="medium" fill="horizontal">
        <Text>&#169; Sister Helen {new Date().getFullYear()}</Text>
        <Box>1820 W Northern Ave, Suite 140 Phoenix, AZ 85021</Box>
        <Box>
          (602) 870-0313
          <Anchor
            label="hello@sisterhelenphx.com"
            href="mailto:hello@sisterhelenphx.com"
            color="neutral-2"
          />
        </Box>
      </Footer>
    </Grommet>
  );
}

export default MyApp;
