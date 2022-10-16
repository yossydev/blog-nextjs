import { Box, createStyles, Paper, Text, Title } from "@mantine/core";
import Image from "next/image";
import { FC } from "react";
import { SnsIcon } from "@/component/Element";

export const ProfileCard: FC = () => {
  const { classes } = useStyles();

  return (
    <Paper className={classes.container} shadow="md" p="xl" radius="md">
      <Box className={classes.wrapper}>
        <Image src={"/profile-image.png"} alt={"プロフィール画像"} width={70} height={70} className={classes.image} />
        <Title order={3} className={classes.name} ml={10}>
          ユウト
        </Title>
      </Box>
      <Text mt={16}>20歳のフロントエンドエンジニア。高校サッカー県大会優勝&優秀選手賞受賞。</Text>
      {/* TODO: アイコンのサイズ調整 */}
      <Box className={classes.icons} mt={24}>
        <SnsIcon />
      </Box>
    </Paper>
  );
};

const useStyles = createStyles(() => ({
  container: {
    height: "100%",
    width: 290,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    backgroundColor: "white",
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    borderRadius: "50%",
  },
  name: {
    fontSize: "1.3rem",
  },
  text: {
    fontSize: "1.3rem",
  },
  textDetails: {
    display: "flex",
    alignItems: "end",
  },
  icons: {
    display: "flex",
  },
}));