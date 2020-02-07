import React, { useState, useEffect } from "react";
import Newsblock from "./Newsblock";
import style from "./news.module.css";

var res = {
  results: [
    {
      title: "全国年龄最大治愈患者出院：湖北91岁患者治愈出院",
      summary:
        "7日10时许，91岁高龄的新冠肺炎患者王某从宜昌市第三人民医院出院，这是目前年龄最大的治愈患者。“能够治愈出院，非常开心”，老人表示，自己参加过解放战争，和打仗比起来，这个病没什么可怕的。据了解，老人1月19日出现发热、咳嗽、乏力等症状，23日入院治疗，两天后确诊患病。\n",
      infoSource: "人民日报",
      sourceUrl: "http://m.weibo.cn/2803301701/4469389400757412",
      pubDate: 1581068933000,
      provinceName: "湖北省",
      provinceId: "42"
    },
    {
      title: "宁夏又有两例确诊患者出院",
      summary:
        "2月7日16时30分，经过自治区新型冠状病毒感染的肺炎疫情专家诊疗组和医护人员的精心救治，日前被确诊为新冠肺炎的银川市永宁县患者谢某和兴庆区患者闫某救治情况良好，正式治愈出院。\n",
      infoSource: "人民网",
      sourceUrl: "http://m.weibo.cn/2286908003/4469386960072294",
      pubDate: 1581068351000,
      provinceName: "宁夏回族自治区",
      provinceId: "64"
    },
    {
      title: "南京抗疫女医生突发疾病逝世",
      summary:
        "据健康南京，南京市中医院新型冠状病毒感染肺炎防治工作小组组长、副院长徐辉同志，因突发疾病，抢救无效，于2020年2月7日凌晨不幸逝世，享年51岁。南京卫健委哀悼抗疫女医生徐辉，向徐辉同志家属表示诚挚慰问。南京市卫健委向徐辉同志表示深切哀悼 。\n",
      infoSource: "人民网",
      sourceUrl: "http://m.weibo.cn/2286908003/4469379124938671",
      pubDate: 1581066483000,
      provinceName: "江苏省",
      provinceId: "32"
    },
    {
      title: "北京首次公布疑似病例数量：累计157例",
      summary:
        "截至2月6日24时，本市累计疑似病例157例，确诊病例297例。 目前，本市死亡1例，出院33例，263例在定点医院进行隔离治疗，其中危重型15例。",
      infoSource: "人民网",
      sourceUrl: "http://m.weibo.cn/2286908003/4469371785690519",
      pubDate: 1581064733000,
      provinceName: "北京市",
      provinceId: "11"
    },
    {
      title: "广东新增16例，累计1034例",
      summary:
        "截至2月7日12时，全省累计报告新型冠状病毒感染的肺炎确诊病例1034例。7日当天0-12时全省新增确诊病例16例。截至2月7日12时，在院的959例确诊病例中，轻型51例，普通型787例，重型85例，危重型36例。新增出院6例，累计出院74例。累计死亡1例。",
      infoSource: "人民网",
      sourceUrl: "http://m.weibo.cn/2286908003/4469366274006432",
      pubDate: 1581063419000,
      provinceName: "广东省",
      provinceId: "44"
    },
    {
      title: "重庆新增4例累计415例，新增出院病例1例",
      summary:
        "2月7日0—12时，重庆市报告新型冠状病毒感染的肺炎新增确诊病例4例，新增出院病例1例。截至2月7日12时，重庆市累计报告新型冠状病毒感染的肺炎确诊病例415例；现有重型病例29例，危重型病例16例，死亡病例2例，出院病例25例。累计追踪到密切接触者13222人，已解除医学观察5882人，尚有7340人正在接受医学观察。",
      infoSource: "人民网",
      sourceUrl: "http://m.weibo.cn/2286908003/4469365665918923",
      pubDate: 1581063274000,
      provinceName: "重庆市",
      provinceId: "50"
    },
    {
      title: "人民锐评：全面调查李文亮事件，让正义抵达人心",
      summary:
        "今天，中央纪委国家监委网站发布消息：经中央批准，国家监察委员会决定派出调查组赴湖北省武汉市，就群众反映的涉及李文亮医生的有关问题作全面调查。李文亮医生在抗击疫情中感染新型冠状病毒肺炎，不幸逝世，引发网友刷屏关注。此前，在发布病情的微博里，他表示“等我病好了我就会上一线。”这种事不避难、义不逃责的担当，令人肃然起敬。 如今，国家监察委派出调查组作全面调查，回应了公众关切，也让人对还原事实真相抱有期待。",
      infoSource: "人民日报",
      sourceUrl: "http://m.weibo.cn/2803301701/4469363668716791",
      pubDate: 1581062797000,
      provinceName: "全国",
      provinceId: "100"
    },
    {
      title: "山东新增7例，累计386例",
      summary:
        "2020年2月7日0—12时，山东省报告新型冠状病毒感染肺炎新增确诊病例7例，累计确诊病例386例(含重症病例22例，危重症病例6例，出院36例，无死亡病例);新增疑似病例9例，现有疑似病例87例。截至目前，追踪到密切接触者12120人，已解除医学观察6584人，诊断为疑似或确诊198例，尚有5338人正在接受医学观察。\n",
      infoSource: "人民网",
      sourceUrl: "http://m.weibo.cn/2286908003/4469358627316520",
      pubDate: 1581061596000,
      provinceName: "山东省",
      provinceId: "37"
    },
    {
      title: "云南新增1例，累计136例",
      summary:
        "2月7日0时至12时，云南省报告新型冠状病毒感染肺炎新增病例1例（昆明市）。全省累计报告确诊病例136例，除治愈出院者外，现均在定点医院接受隔离治疗。现有危重3例，重症15例，治愈出院12例，疑似病例122例，密切接触者医学观察3105人。",
      infoSource: "人民网",
      sourceUrl: "http://m.weibo.cn/2286908003/4469350817733246",
      pubDate: 1581059734000,
      provinceName: "云南省",
      provinceId: "53"
    },
    {
      title: "辽宁新增1例，累计95例",
      summary:
        "2020年2月6日18时至2月7日13时，辽宁省沈阳市新增1例输入性新型冠状病毒感染的肺炎确诊病例,为普通型病例。截至2020年2月7日13时，辽宁省累计报告新型冠状病毒感染的肺炎确诊病例95例，治愈出院6例。目前累计追踪到密切接触者1782人，已解除医学观察1015人，现有767人正在接受医学观察。",
      infoSource: "人民网",
      sourceUrl: "http://m.weibo.cn/2286908003/4469350314408565",
      pubDate: 1581059614000,
      provinceName: "辽宁省",
      provinceId: "21"
    }
  ],
  success: true
};

const News = props => {
  const [news, setnews] = useState([]);

  async function fetchData() {
    // const data = await fetch("https://lab.isaaclin.cn/nCoV/api/news");
    // const res = await data.json();
    if (res.success) {
      setnews(res.results);
    }
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div className={style.container}>
      <h1
        id="news"
        name="news"
        style={{ margin: "40px auto", textAlign: "center" }}
      >
        {" "}
        Top 10 News{" "}
      </h1>
      <div className={style.news}>
        {news.map((item, idx) => (
          <Newsblock item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default News;
