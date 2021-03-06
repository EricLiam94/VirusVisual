import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Rumor from "./Rumor";
import style from "./rumor.module.css";
var res = {
  results: [
    {
      title: "喝茶可以预防新冠病毒？",
      mainSummary: "丁香医生团队辟谣：补水挺好，预防病毒没用",
      body:
        "目前尚无证据证明喝茶可以预防新冠病毒。尽量保持室内空气流通，注意卫生，勤洗手，吃熟食，远离人群就是最好的预防手段了。",
      rumorType: 0,
      sourceUrl: ""
    },
    {
      title: "新冠病毒通过眼神对视传播？",
      mainSummary: "丁香医生团队辟谣：系编造，造谣网民已被依法处罚。",
      body:
        "在国家卫健委印发的《新型冠状病毒感染的肺炎诊疗方案（试行第四版）》中显示，新型冠状病毒经呼吸道飞沫传播是主要的传播途径，亦可通过接触传播。而眼神对视不属于前述任何一种。\n另外，造谣网民已被依法处罚。",
      rumorType: 0,
      sourceUrl: ""
    },
    {
      title: "晒太阳可以杀灭新型冠状病毒？",
      mainSummary:
        "丁香医生团队辟谣：太阳的照射温度达不到 56℃，且日照紫外线也达不到紫外线消毒灯的强度",
      body:
        "太阳的照射温度达不到56℃，且日照紫外线也达不到紫外线消毒灯的强度，不论从哪一个角度都不能达到杀灭病毒的要求。若要外出晒太阳，仍需戴好口罩，做好必要防护。",
      rumorType: 0,
      sourceUrl: ""
    },
    {
      title: "中国被列入「疫区国」？",
      mainSummary: "丁香医生团队辟谣：根本没有「疫区国」的概念",
      body:
        "针对此次新型病毒感染，WHO尚未发表中国为「疫区」的声明。很多人在讨论的PHEIC翻译过来是「国际公共卫生紧急事件」，是世卫组织发出的警示信息。根据《国际卫生条例（2005）》规定，PHEIC只是给各国的建议，不是强制措施。",
      rumorType: 0,
      sourceUrl: ""
    },
    {
      title: "武汉来的快递要拒收？",
      mainSummary:
        "丁香医生团队辟谣：病毒通过快件传播的风险极低，收完快件请及时洗手",
      body:
        "国家邮政局市场监管司副司长侯延波表示：“我们要求邮政和快递企业严格落实对邮件、快件、运输车辆、生产作业场所的消毒、通风等措施，严格落实安全查验的制度，严禁收寄野生动物。因此大家不用担心，正常的快件不用拒收，收完快件请及时洗手。”",
      rumorType: 0,
      sourceUrl: ""
    },
    {
      title: "散步会感染新型冠状病毒肺炎？",
      mainSummary: "武汉市第九医院辟谣：我院没出过这样的通知",
      body:
        '网上出现了武汉市第九医院的一个紧急通知，说是散步会感染新型冠状病毒肺炎。\n\n对此，武汉市第九医院院长刘明瑜表示：“这是谣言，我们根本没出这样的通知，请大家不要相信。"',
      rumorType: 0,
      sourceUrl: ""
    },
    {
      title: "别吃鱼，某地有121个鱼塘感染？",
      mainSummary:
        "丁香医生团队查证：青海、南宁、丽江等各城市版本的均为编造。正规渠道售卖的仍可放心吃。",
      body:
        "青海、南宁、丽江等各城市版本的均为编造。另外，此次新型冠状病毒来源是非法销售的野生动物，目前未明确中间宿主。但正规渠道售卖的各类肉制品仍可彻底煮熟后食用。",
      rumorType: 0,
      sourceUrl: ""
    },
    {
      title: "私人邮寄口罩被海关征用？",
      mainSummary: "上海海关辟谣：海关不会征用你的口罩！",
      body:
        "遇到此类谣言该怎么办？\n请务必记住这个「灵魂三拷问」\n1、有没有单号？\n2、包裹寄到那个地区？\n3、哪家快递公司承运的？\n\n无论对方提供与否，大家都可以第一时间向官方求证，并提供相关情况，切勿在网上进行二次传播。",
      rumorType: 0,
      sourceUrl: ""
    },
    {
      title: "治疗主要靠激素，会成为废人？",
      mainSummary: "李兰娟院士辟谣：现在发生的大量的病人根本就不用激素",
      body:
        "非典时期，激素治疗使部分患者留下股骨头坏死的后遗症，这是药物的一种副作用。现在发生的大量的病人根本就不用激素，所以不会引起股骨头坏死。",
      rumorType: 0,
      sourceUrl: ""
    },
    {
      title: "用了7天的N95口罩消毒可继续用？",
      mainSummary:
        "丁香医生团队辟谣：吹风机吹或者喷洒酒精，都可能破坏口罩的保护作用",
      body:
        "美国疾控中心指出N95口罩在特殊情况下（比如口罩供应不足等），可在严格规范下「延长使用期限」以及「有限重复使用」。前者指一次佩戴不取下来，去接触不同的病人；后者指在满足一定条件下，可重复使用一定次数。若厂家说明了可重复使用次数，那以厂家说的为准；若没说明，那「不超过5次」。7天大大超过了这个次数。吹风机吹或者喷洒酒精，都可能会破坏口罩的保护作用。",
      rumorType: 0,
      sourceUrl: ""
    }
  ],
  success: true
};

const Rumors = () => {
  const [rumorsList, setrumors] = useState([]);

  async function fetchData() {
    setrumors(res.results);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1 id="rumors" className={style.head}>
        Top 10 Rumors{" "}
      </h1>
      <div className={style.container}>
        {rumorsList.map((rumor, idx) => (
          <Rumor item={rumor} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Rumors;
