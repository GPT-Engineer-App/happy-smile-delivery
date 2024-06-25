import { Container, Text, VStack, Heading, Box, List, ListItem, ListIcon, Image } from "@chakra-ui/react";
import { FaCheckCircle, FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";
import forestBackground from '../images/forest-background.png';
import ushiPhoto from '../images/ushi-photo.png';
import correctPhoto from '../images/correct-photo.png'; // Import the correct photo
import newPhoto from '../images/new-photo.png';

const Index = () => {
  return (
    <Container 
      centerContent 
      maxW="container.md" 
      py={10} 
      backgroundImage={`url(${forestBackground})`}
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      color="white"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex="0"
      />
      <VStack spacing={8} align="start" zIndex="1">
        <Heading as="h1" size="xl">うっしーについて</Heading>

        <Box>
          <Heading as="h2" size="lg" mb={4}>【自己紹介】</Heading>
          <Image src={correctPhoto} alt="うっしー" borderRadius="full" boxSize="150px" objectFit="cover" mb={4} /> {/* Use the correct photo */}
          <Text color="white">兵庫県神崎郡福崎町で生まれ神戸学院大学を卒業。</Text>
          <Text color="white">合同会社陽だまりを設立し、パン屋じゃぱんで活躍。</Text>
          <Text color="white">一時期は1000人規模のコミュニティをまとめ上げ求心力を発揮。</Text>
          <Text color="white">小麦アレルギーが発症、悪化したため止むなくパン屋を閉じる。</Text>
          <Text color="white">現在はえむすびの執行役員として企業理念を日本に広めている。</Text>
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
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaFacebook} color="blue.500" />
              SNS広告：コラボレート南さん
            </ListItem>
            <ListItem>
              <ListIcon as={FaLinkedin} color="blue.700" />
              採用コンサル：山下さん
            </ListItem>
            <ListItem>
              <ListIcon as={FaTiktok} color="black" />
              TikTok：りゅうせいさん
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>【掲げているミッション】</Heading>
          <Text color="white">未来に笑顔を届けるために！！</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;