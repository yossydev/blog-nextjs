import { FC, memo } from "react";
import { Box, List } from "@mantine/core";
import { Headline } from "@/component/Core/Headline";
import { AppLink } from "@/component/Core";
import { Text } from "./Text";
import { useStyles } from "./elements";
import { SnsList } from "./constants";

export const Profile: FC = memo(() => {
  const { classes } = useStyles();

  return (
    <>
      <Headline title={"About Me"} urlTitle={"about-me"} size={30} order={2} />

      <Text text={"21歳のフロントエンドエンジニアとして働いているユウトです。出身は日本です。🇯🇵🏯"} />
      <Text text={"TypeScript, Reactを主に触っており、最近ではWebパフォーマンスに興味があります。"} />

      {/* border */}
      <Box className={classes.line} />

      <Text
        text={
          "2022年からフルタイムでエンジニアとして働き始め、スピード感のある開発をしていく中で、フロントエンドとバックエンド両方の経験をさせていただけたのはとてもいい経験でした。そして2023年、新しい会社にジョインし、SEOやWebパフォーマンス、デザインシステムの構築など、また新しいことに挑戦し、開発者としてレベルアップすることに注力しています。"
        }
      />
      <Text
        text={
          "空いた時間で、技術のキャッチアップをし、それを実際に自分の手で動かしてみたりすること。理解が足りない部分や、新しく学んだことを記事にすることも好きです。あとは勉強会に行って発表したりすることも好きです。"
        }
      />

      {/* border */}
      <Box className={classes.line} />

      <List className={classes.linkContainer}>
        {SnsList.map(({ id, title, href }) => {
          return (
            <List.Item key={id}>
              <AppLink href={href} className={classes.link}>
                {title}
              </AppLink>
            </List.Item>
          );
        })}
      </List>
    </>
  );
});

Profile.displayName = "Memo(Profile)";