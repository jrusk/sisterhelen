import Head from "next/head";
import { Anchor, Box, Heading, Image, Main, Text } from "grommet";

export default function Menu() {
  return (
    <div>
      <Head>
        <title>Sister Helen | Menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main pad="large">
        <Box direction="row" pad="medium">
          <Box pad="small">
            <Anchor href="/" label="Home" color="neutral-2" />
          </Box>
          <Box pad="small">>></Box>
          <Box pad="small">
            <Text size="medium" weight="bold" color="brand">
              Sister Helen Menu
            </Text>
          </Box>
          <Box pad="small">
            <Anchor href="menu.pdf" label="PDF version" color="neutral-2" />
          </Box>
        </Box>
        <Image fill="horizontal" fit="contain" src="/menu.png" />
      </Main>
    </div>
  );
}
