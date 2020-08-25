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
        <Heading color="neutral-2">Sister Helen</Heading>
        <Heading level="3" margin="none" color="neutral-2">
          Coming soon
        </Heading>
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
            hourLimit={12}
          />
        </Text>
        <Image fill="horizontal" fit="contain" src="/frites.jpg" />
      </Main>

      <Footer background="brand" pad="medium" fill="horizontal">
        <Text>&#169; Sister Helen {new Date().getFullYear()}</Text>
        <Anchor
          label="Contact"
          href="mailto:hello@sisterhelenphx.com"
          color="accent-4"
        />
      </Footer>
    </Grommet>
  );
}
