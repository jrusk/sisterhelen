import Head from "next/head";
import {
  Anchor,
  Clock,
  Footer,
  Grommet,
  Heading,
  Image,
  Main,
  Text,
  WorldMap
} from "grommet";

export default function Home() {
  return (
    <Grommet>
      <Head>
        <title>Sister Helen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main pad="large">
        <Heading color="neutral-2">Sister Helen - Coming soon!</Heading>
        <WorldMap
          color="neutral-1"
          fill="horizontal"
          places={[
            {
              name: "Phoenix",
              location: [32.46392431882024, -113.74193548387098],
              color: "accent-2"
            }
          ]}
        />
        <Text color="status-critical">
          <Clock
            type="digital"
            size="xlarge"
            color="neutral-2"
            margin="medium"
          />
        </Text>
        <Image fill="horizontal" fit="contain" src="/frites.jpg" />
      </Main>

      <Footer background="brand" pad="medium" fill="horizontal">
        <Text>&#169; Sister Helen {new Date().getFullYear()}</Text>
        <Anchor label="Coming soon" />
      </Footer>
    </Grommet>
  );
}
