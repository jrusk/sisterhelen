import Head from "next/head";
import {
  Anchor,
  Box,
  Heading,
  Image,
  Main,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Text
} from "grommet";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sister Helen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main pad="large">
        <Image
          fill="horizontal"
          fit="contain"
          src="logo-rect.png"
          a11yTitle="Sister Helen PHX"
        />
        <Box direction="row" wrap={true}>
          <Box pad="small">
            <Heading level="3">Hours</Heading>
            <Table alignSelf="start">
              <TableBody>
                <TableRow>
                  <TableCell scope="row">
                    <strong>Sunday</strong>
                  </TableCell>
                  <TableCell>11:00 AM–8:00 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <strong>Monday</strong>
                  </TableCell>
                  <TableCell>Closed</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <strong>Tuesday</strong>
                  </TableCell>
                  <TableCell>Closed</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <strong>Wednesday</strong>
                  </TableCell>
                  <TableCell>Closed</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <strong>Thursday</strong>
                  </TableCell>
                  <TableCell>4:00 PM–8:00 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <strong>Friday</strong>
                  </TableCell>
                  <TableCell>4:00 PM–8:00 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <strong>Saturday</strong>
                  </TableCell>
                  <TableCell>11:00 AM–8:00 PM</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Text gridArea="main"></Text>
          </Box>
          <Box pad="small">
            <Anchor href="menu" color="neutral-2">
              <Box pad="xsmall" height="small" width="small" border={true}>
                <Heading level="3" alignSelf="center">
                  Menu
                </Heading>
                <Image fit="cover" src="menu.png" />
              </Box>
            </Anchor>
          </Box>
          <Box pad="small">
            <Image fill="horizontal" src="frites.jpg" />
          </Box>
        </Box>
      </Main>
    </div>
  );
}
