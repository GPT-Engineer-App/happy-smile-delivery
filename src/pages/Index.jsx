import { Container, Text, VStack, Heading, Box, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="xl">うっしーについて</Heading>

        <Box>
          <Heading as="h2" size="lg" mb={4}>【自己紹介】</Heading>
          <Text>兵庫県神崎郡福崎町で生まれ神戸学院大学を卒業。</Text>
          <Text>合同会社陽だまりを設立し、パン屋じゃぱんで活躍。</Text>
          <Text>一時期は1000人規模のコミュニティをまとめ上げ求心力を発揮。</Text>
          <Text>小麦アレルギーが発症、悪化したため止むなくパン屋を閉じる。</Text>
          <Text>現在はえむすびの執行役員として企業理念を日本に広めている。</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>【やっていること】</Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              スマ森事業
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              リトリートのファシリエーター
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              採用プロジェクト講師
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>【頼りになるパートナー】</Heading>
          <Text>SNS広告：コラボレート南さん</Text>
          <Text>採用コンサル：山下さん</Text>
          <Text>TikTok：りゅうせいさん</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>【掲げているミッション】</Heading>
          <Text>未来に笑顔を届けるために！！</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;