import { Box, Group, List, ListItem, Stack, Table, Tabs, Text, Title } from "@mantine/core"

const steroids = [
  { player: 'Barry Bonds', battingAvg: 0.298, rbis: 1996, hrs: 762, slugging: 0.607, obs: 1.051, hits: 2935 },
  { player: 'Ivan Rodriguez', battingAvg: 0.297, rbis: 1333, hrs: 311, slugging: 0.323, obs: 0.281, hits: 2845 },
  { player: 'Manny Rameriez', battingAvg: 0.312, rbis: 1831, hrs: 555, slugging: 0.585, obs: 0.411, hits: 2574 },
  { player: 'Jose Cansaco', battingAvg: 0.266, rbis: 1407, hrs: 462, slugging: 0.515, obs: 0.353, hits: 1877 },
  { player: 'Sammy Sosa', battingAvg: 0.273, rbis: 1667, hrs: 609, slugging: 0.534, obs: 0.344, hits: 2408 },
  { player: 'Alex Rodriguez', battingAvg: 0.295, rbis: 2086, hrs: 696, slugging: 0.550, obs: 0.380, hits: 3115 },
]

const clean = [
  { player: 'Barry Bonds', battingAvg: 0.298, rbis: 1996, hrs: 762, slugging: 0.607, obs: 1.051, hits: 2935 },
  { player: 'Jackie Robinson', battingAvg: 0.313, rbis: 763, hrs: 141, slugging: 0.477, obs: 0.410, hits: 1567 },
  { player: 'Hank Aaron', battingAvg: 0.305, rbis: 2297, hrs: 755, slugging: 0.555, obs: 0.374, hits: 3771 },
  { player: 'Babe Ruth', battingAvg: 0.342, rbis: 1983, hrs: 714, slugging: 0.690, obs: 0.789, hits: 2873 },
  { player: 'Micky Mantle', battingAvg: 0.298, rbis: 1509, hrs: 536, slugging: 0.557, obs: 0.977, hits: 2415 },
  { player: 'Willie Mays', battingAvg: 0.302, rbis: 1903, hrs: 660, slugging: 0.557, obs: 0.941, hits: 3283 },
]

export const Home = () => {
  const steroidRows = steroids.map((element) => (
    <Table.Tr key={element.player} fw={element.player === 'Barry Bonds' ? 'bold' : 'normal'}>
      <Table.Td>{element.player}</Table.Td>
      <Table.Td>{element.battingAvg}</Table.Td>
      <Table.Td>{element.rbis}</Table.Td>
      <Table.Td>{element.hrs}</Table.Td>
      <Table.Td>{element.slugging}</Table.Td>
      <Table.Td>{element.obs}</Table.Td>
      <Table.Td>{element.hits}</Table.Td>
    </Table.Tr>
  ));

  const cleanRows = clean.map((element) => (
    <Table.Tr key={element.player} fw={element.player === 'Barry Bonds' ? 'bold' : 'normal'}>
      <Table.Td>{element.player}</Table.Td>
      <Table.Td>{element.battingAvg}</Table.Td>
      <Table.Td>{element.rbis}</Table.Td>
      <Table.Td>{element.hrs}</Table.Td>
      <Table.Td>{element.slugging}</Table.Td>
      <Table.Td>{element.obs}</Table.Td>
      <Table.Td>{element.hits}</Table.Td>
    </Table.Tr>
  ));


  return (
    <Stack p='sm'>
      <Title ta='center' order={2} mt='15'>Statistically should Barry Bonds be in the Hall of Fame?</Title>
      <Tabs defaultValue="steroids">
        <Tabs.List>
          <Tabs.Tab value="steroids">
            Steroid Era
          </Tabs.Tab>
          <Tabs.Tab value="clean">
            Clean
          </Tabs.Tab>
          <Tabs.Tab value="accolades">
            Accolades
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="steroids">
          <Title ta='center' order={3} my={15}>Steroid Era</Title>
          <Text> Barry Bonds played in the so called "steroid era" where many MLB players were using growth hormones and preforming enhancing drugs to improve their play in baseball. </Text>
          <Table my={15}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Players</Table.Th>
                <Table.Th>Batting Avg</Table.Th>
                <Table.Th>RBI</Table.Th>
                <Table.Th>HR</Table.Th>
                <Table.Th>Slugging</Table.Th>
                <Table.Th>OBP</Table.Th>
                <Table.Th>Hits</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{steroidRows}</Table.Tbody>
          </Table>
          <Group wrap='nowrap'>
            <Box>
              <img style={{ height: '300px', width: '450px' }} src="https://cdn.shopify.com/s/files/1/0878/2614/files/barry-bonds-edit-1.jpg?7859236886406504759" />
            </Box>
            <Stack>
              <Text mb={15}>Compared to these other five athletes in the steroid era Barry Bonds leads them in the following stats RBIS, HR, Slugging, and OBP. These five athletes all tested positive for performance enhancing drugs during this era. Barry Bonds had a lot of evidence against him hinting at the fact he used performing enhancing drugs but he never actually tested postitive.</Text>
              <Text mb={15}>None of these five athletes are allowed into the hall of fame due to the fact they used performance enhancing drugs.</Text>
              <Text fw='bold'>Statistically Barry Bonds is the best player in the "steroid era".</Text>
            </Stack>
          </Group>
        </Tabs.Panel>

        <Tabs.Panel value="clean">
          <Title ta='center' order={3} my={15}>Clean</Title>
          <Text>These five athletes all played in times when players were “clean” meaning people were not using preforming enhancing drugs at the time.</Text>
          <Table my={15}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Players</Table.Th>
                <Table.Th>Batting Avg</Table.Th>
                <Table.Th>RBI</Table.Th>
                <Table.Th>HR</Table.Th>
                <Table.Th>Slugging</Table.Th>
                <Table.Th>OBP</Table.Th>
                <Table.Th>Hits</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{cleanRows}</Table.Tbody>
          </Table>
          <Group wrap='nowrap'>
            <Box>
              <Text mb={15}>Compared to these other five athletes Barry Bonds is the leader in the following stats RBIs, HR, Slugging, OBP.</Text>
              <Text>These five other athletes are all in the hall of fame and considered to be the "all times greats" of baseball, but statistically overall Barry Bonds is better than all of them except for potentially Willie Mays and Babe Ruth who are considered to be the GOATs of baseball.</Text>
            </Box>
            <Box>
              <img style={{ height: 250, width: 340, marginRight: 15 }} src="https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2024-06/GettyImages-73796984.jpg?h=0413e414&amp;itok=-S4z8lDj" />

            </Box>
          </Group>
        </Tabs.Panel>

        <Tabs.Panel value='accolades'>
          <Title order={3} ta='center' my={15}>Accolades</Title>
          <Group wrap='nowrap'>
            <List>
              <ListItem mb={15}>Barry Bonds won 7 NL MVPs making him have the most MVPs by 4, second closest being a tie between many people at 3.</ListItem>
              <ListItem mb={15}>He was also a 14 time allstar meaning he was one of the best players in the league in fourteen different years.</ListItem>
              <ListItem mb={15}>He won 12 silver sluggers also being the most ever in the MLB history.</ListItem>
              <ListItem mb={15}>Won the Hank Aaron award three times.</ListItem>
              <ListItem mb={15}>All time home run leader.</ListItem>
              <ListItem mb={15}>All time National league RBI holder.</ListItem>
            </List>
            <Box>
              <img style={{ width: 450, height: 250 }} src="data:image/jpeg;base64,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" />
            </Box>
          </Group>
          <Text mt={15} fw='bold'>Statistically Barry Bonds has proven himself to be top three baseball players of all time and 100% statistically should be in the hall of fame.</Text>
        </Tabs.Panel>

      </Tabs>
    </Stack>
  )
}
