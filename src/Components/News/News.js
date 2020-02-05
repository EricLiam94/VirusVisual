import React, { useState, useEffect } from "react";
import Newsblock from "./Newsblock";
import style from "./news.module.css";

var res = {
  results: [
    {
      title: "福建新增11例，累计确诊205例",
      summary:
        "2月4日0—24时，福建省报告新增新型冠状病毒感染的肺炎确诊病例11例。新增治愈出院病例6例。报告新增新型冠状病毒感染的肺炎疑似病例40例。截至2月4日24时，福建省累计报告新型冠状病毒感染的肺炎确诊病例205例。目前，确诊、疑似病例的密切接触者已解除医学观察1077人，尚有4193人正在接受医学观察。",
      infoSource: "人民网",
      sourceUrl: "http://m.weibo.cn/2286908003/4468589068843300",
      pubDate: 1580878119000,
      provinceName: "福建省",
      provinceId: "35"
    },
    {
      title: "好消息！福建已有7例患者治愈出院",
      summary:
        "继2月3日福建首例患者治愈出院后，4日，福建又有6例新型冠状病毒感染的肺炎确诊患者治愈出院，包括福州2例，宁德1例，泉州3例。（刘晓宇）\n",
      infoSource: "人民日报",
      sourceUrl: "http://m.weibo.cn/2803301701/4468574045275911",
      pubDate: 1580874537000,
      provinceName: "福建省",
      provinceId: "35"
    },
    {
      title: "天津现首例死亡病例",
      summary:
        "2月5日凌晨，本市一名新型冠状病毒肺炎确诊病例出现急性左心功能衰竭、急性冠脉综合征，经海河医院奋力抢救无效死亡，为本市首例死亡病例。@天津发布\n",
      infoSource: "人民网",
      sourceUrl: "http://m.weibo.cn/2286908003/4468570790459858",
      pubDate: 1580873760000,
      provinceName: "天津市",
      provinceId: "12"
    },
    {
      title: "西藏连续6天无新增病例",
      summary:
        "2月5日上午，西藏自治区卫健委通报新型冠状病毒感染的肺炎疫情情况：截至2月4日24时，西藏自治区累计报告新型冠状病毒感染的肺炎确诊病例1例，重症病例0例，死亡病例0例，出院病例0例。目前，患者生命体征平稳，追踪到的密切接触者正在接受医学观察。因此，西藏自治区已经连续6天没有新增病例或疑似病例报告。\n",
      infoSource: "人民网",
      sourceUrl: "http://m.weibo.cn/2286908003/4468561298669471",
      pubDate: 1580871498000,
      provinceName: "西藏自治区",
      provinceId: "54"
    },
    {
      title: "好消息！青海3名新冠肺炎患者出院",
      summary:
        "2月5日，3名在青海省第四人民医院救治的新冠肺炎患者，符合出院标准准备出院。3名患者中，年龄最小的7岁，最大的42岁，系一家人。马某某一家系湟中县上新庄镇上峡门村人，一家人长期居住武汉市从事餐饮服务。@人民网青海频道",
      infoSource: "人民网",
      sourceUrl: "http://m.weibo.cn/2286908003/4468559839043628",
      pubDate: 1580871150000,
      provinceName: "青海省",
      provinceId: "63"
    },
    {
      title: "陕西新增23例累计确诊165例",
      summary:
        "截至2月5日10时，陕西新增23例新型冠状病毒感染的肺炎确诊病例（首次在孕妇中发现确诊病例），新增疑似病例41例。新增确诊病例中，西安市10例、咸阳市4例、渭南市3例、汉中市3例、安康市2例、商洛市1例。陕西累计报告新型冠状病毒感染的肺炎确诊病例165例（2例治愈出院），其中输入性病例100例，密切接触者58例，无明确接触史病例7例。（陕西卫健委）\n",
      infoSource: "人民网",
      sourceUrl: "http://m.weibo.cn/2286908003/4468553908450885",
      pubDate: 1580869736000,
      provinceName: "陕西省",
      provinceId: "61"
    },
    {
      title: "山东潍坊患者隐瞒情况致68名医务人员被隔离",
      summary:
        "【山东潍坊#患者隐瞒情况致68名医务人员被隔离#，警方立案】据@潍坊公安 通报：2月3日，潍坊市公安局奎文分局依法对故意隐瞒旅行史和接触史的新型冠状病毒感染的肺炎患者张某芳立案侦查。 \n",
      infoSource: "人民网",
      sourceUrl: "http://m.weibo.cn/2286908003/4468549445817141",
      pubDate: 1580868672000,
      provinceName: "山东省",
      provinceId: "37"
    },
    {
      title: "广东新增73例确诊病例",
      summary:
        "截至2月4日24时，广东全省累计报告新型冠状病毒感染的肺炎确诊病例870例，4日当天全省新增确诊病例73例。累计报告确诊病例中，男性424例，女性446例，年龄介于10月龄-86岁之间。\n",
      infoSource: "央视新闻",
      sourceUrl: "http://m.weibo.cn/2656274875/4468548736794032",
      pubDate: 1580868503000,
      provinceName: "广东省",
      provinceId: "44"
    },
    {
      title: "海南新增11例累计89例",
      summary:
        "2020年2月4日0-24时，海南省报告新型冠状病毒感染的肺炎新增确诊病例11例，新增重症病例1例，新增死亡病例0例，新增解除重症0例，新增出院病例1例，新增订正病例1例。截至2月4日24时，海南省累计报告新型冠状病毒感染的肺炎确诊病例89例，重症病例11例，死亡病例1例，出院病例4例。\n",
      infoSource: "人民网",
      sourceUrl: "http://m.weibo.cn/2286908003/4468547680117886",
      pubDate: 1580868250000,
      provinceName: "海南省",
      provinceId: "46"
    },
    {
      title: "广东新增73例累计870例",
      summary:
        "截至2月4日24时，广东省累计报告新型冠状病毒感染的肺炎确诊病例870例。4日当天全省新增确诊病例73例。在院的838例确诊病例中，危重型29例，重型69例，普通型740例。新增出院12例，累计出院32例。无死亡病例。（广东卫健委）网页链接\n",
      infoSource: "人民网",
      sourceUrl: "http://m.weibo.cn/2286908003/4468542608702553",
      pubDate: 1580867042000,
      provinceName: "广东省",
      provinceId: "44"
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
      <h1 id="news" style={{ margin: "40px auto", textAlign: "center" }}>
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
