const TICKET_DATA = [
  {
    "id": "TK-2026-001",
    "title": "客服小二连续错误导致客户投诉",
    "author": "来昕怡",
    "vendor": "河南新阳科技（南宁）",
    "status": "resolved",
    "priority": "P0",
    "sourceGroup": "8522560",
    "createdDate": "2026-06-15",
    "updatedDate": "2026-06-22T17:48:00+08:00",
    "summary": "客服小二在群内回复盛通时，未按标准流程操作——查询时未选行政区选项，导致结果不准确。客户投诉至来昕怡，追问：客服有问题为什么没有同步？培训了吗？责任方梁宁。该小二已做客服一年，基础操作仍出错。",
    "impact": "🔴 客户体验：连续错误操作导致投诉，损害公司服务形象\n🔴 团队信任：一年经验的客服重复低级错误，客户对专业性产生质疑\n🟡 管理漏洞：已知问题未同步未闭环，培训跟进滞后\n🟡 工作流程：行政区选项是基础操作，说明工作标准和核查流程有缺失",
    "rootCause": "直接原因：客服小二查询时遗漏行政区选项，导致结果错误\n深层原因：1) 已做一年但基础操作仍出错——培训或考核标准不足 2) 存在错误但未及时同步给管理方 3) 整改措施滞后——投诉发生后才安排练习",
    "solutions": [
      {
        "step": 1,
        "action": "暂停该小二在线客服权限，完成练习并通过考核后再恢复",
        "owner": "梁宁",
        "deadline": "T+1",
        "status": "done"
      },
      {
        "step": 2,
        "action": "逐一核查团队内所有客服小二是否掌握行政区查询等基础操作",
        "owner": "梁宁",
        "deadline": "T+3",
        "status": "done"
      },
      {
        "step": 3,
        "action": "建立客服小二错误预警机制：单日同一错误≥2次自动同步管理方",
        "owner": "梁宁/来昕怡",
        "deadline": "T+5",
        "status": "done"
      },
      {
        "step": 4,
        "action": "制定客服小二定期考核表（月度），确保基础操作不退化",
        "owner": "梁宁",
        "deadline": "T+10",
        "status": "done"
      },
      {
        "step": 5,
        "action": "将本次案例作为反面教材纳入新小二入职培训",
        "owner": "梁宁",
        "deadline": "持续",
        "status": "done"
      }
    ],
    "timeline": [
      {
        "time": "06/15",
        "event": "客服小二回复盛通时未选行政区选项，查询结果错误"
      },
      {
        "time": "06/15",
        "event": "客户投诉至来昕怡，追问同步和培训问题"
      },
      {
        "time": "06/15",
        "event": "梁宁反馈：已安排该小二练习"
      },
      {
        "time": "06/15",
        "event": "来昕怡发布复盘要求：书面复盘 + 考核标准 + 团队核查"
      },
      {
        "time": "06/15",
        "event": "周丹创建工单并@吴胜海，附改进方向5条"
      },
      {
        "time": "06/15 14:59",
        "event": "吴胜海回复：6/15回查、6/17培训梳理、6/18复培、每日全查至7/1"
      }
    ],
    "tags": [
      "投诉",
      "客服",
      "培训",
      "管理"
    ],
    "progress": "6/22 老板确认工单完结。全部5项方案已完成。",
    "groupId": "8522560",
    "penaltyAmount": 1500,
    "penaltyConfirmed": false,
    "penaltyReason": "P0 监管反馈 10%（¥1000）+ 重大影响×1.5",
    "contactPerson": "钱燕",
    "penaltyConfirmedBy": null,
    "penaltyConfirmedAt": null
  },
  {
    "id": "TK-2026-002",
    "title": "秒级链PIC差异处理",
    "author": "Tom",
    "vendor": "山西易网视界（临汾）",
    "status": "resolved",
    "priority": "P0",
    "sourceGroup": "7107130",
    "createdDate": "2026-06-05",
    "updatedDate": "2026-06-25T07:45:20.331Z",
    "summary": "秒级链（yidun01）给的PIC质检申诉驳回率为68.9%，远高于其他PIC，需要对差异进行处理分析。",
    "impact": "🟡 PIC质检公平性受到质疑，申诉驳回率差异超过40个百分点。",
    "rootCause": "1. 机审/复审标准更宽松 2. 初审/复审的认定标准存在偏差 3. 清晰度阈值不一致 4. 主观判断尺度差异",
    "solutions": [
      {
        "step": 1,
        "action": "统一机审/初审/复审/清晰度判定标准",
        "owner": "张丰平",
        "deadline": "2026-06-12",
        "status": "done"
      },
      {
        "step": 2,
        "action": "对PIC进行交叉复核训练，减少主观偏差",
        "owner": "张丰平",
        "deadline": "2026-06-19",
        "status": "done"
      },
      {
        "step": 3,
        "action": "建立PIC质检申诉率追踪机制",
        "owner": "Tom",
        "deadline": "2026-06-30",
        "status": "in_progress"
      }
    ],
    "timeline": [
      {
        "time": "06/05",
        "event": "朱梦阳发布处理要求"
      },
      {
        "time": "06/05",
        "event": "完成PIC差异分析报告"
      },
      {
        "time": "06/12",
        "event": "秒级链复审报告：申诉驳回率达标记"
      }
    ],
    "tags": [
      "PIC质检",
      "AIGC",
      "申诉"
    ],
    "progress": "秒级链每日质检报表持续至6/12，申诉驳回率25-37.5%已达标。",
    "groupId": "7107130",
    "penaltyAmount": null,
    "penaltyConfirmed": false,
    "penaltyConfirmedBy": null,
    "penaltyConfirmedAt": null,
    "penaltyReason": null,
    "contactPerson": null
  },
  {
    "id": "TK-2026-003",
    "title": "绥阳团队付林组质检管理复盘",
    "author": "Tom",
    "vendor": "贵州硅易（绥阳）",
    "status": "resolved",
    "priority": "P0",
    "sourceGroup": "8210337",
    "createdDate": "2026-06-09",
    "updatedDate": "2026-06-16",
    "summary": "6/1-6/8期间，付林管理的绥阳质检团队出现严重质量管控缺失。6/6王钦鹏次品率0.66%（正常3倍），全组次品从8条暴增362%至37条，管理侧仍正常发日报、无预警无纠偏。6/7日报缺失，次品35条继续高位。直到6/9来昕怡追问后才被动回应。",
    "impact": "🔴 质量失控：次品暴增362%，管理侧无阻断，48条错误数据进入后续链路\n🔴 人员风险：2天高次品后王钦鹏仍正常上线，无纠偏或轮换\n🟡 信息断层：排班表与实际出勤7处不一致\n🟡 制度空转：日报仅做数量汇总，无异常标注和改善措施",
    "rootCause": "1. 管理岗角色定位模糊：日报仅做数据汇总，未下沉到异常→纠偏→改善闭环\n2. 缺乏异常预警阈值：次品率0.18%→0.66%跨越3天，无预警信号\n3. 日报内容缺少管理价值：不区分人员、不标注异常、不追溯类型\n4. 车牌错误系统性存在无人关注：114条占79%，8天未见专项治理",
    "solutions": [
      {
        "step": 1,
        "action": "日度异常预警：单人次品≥5条标注姓名+类型；次品环比>100%追加原因",
        "owner": "付林",
        "deadline": "本周",
        "status": "done"
      },
      {
        "step": 2,
        "action": "王钦鹏专项纠偏：48条逐条回查 + 车牌录入培训 + 3天抽检1.5倍",
        "owner": "付林",
        "deadline": "本周",
        "status": "done"
      },
      {
        "step": 3,
        "action": "补充6/7缺失日报，标注异常人员明细",
        "owner": "付林",
        "deadline": "本周",
        "status": "done"
      },
      {
        "step": 4,
        "action": "建立异常响应SOP：次品率>0.5%暂停审核→回查→培训→重新上线",
        "owner": "付林",
        "deadline": "2周内",
        "status": "done"
      },
      {
        "step": 5,
        "action": "日报模板升级：增加人员排名表、TOP3次品类型、环比变化",
        "owner": "付林",
        "deadline": "2周内",
        "status": "done"
      },
      {
        "step": 6,
        "action": "管理岗KPI明确：异常响应≤4小时，日报覆盖率100%",
        "owner": "付林",
        "deadline": "1个月",
        "status": "done"
      },
      {
        "step": 7,
        "action": "车牌录入系统优化：OCR二次校验或关键字符高亮 + 每周专项回查",
        "owner": "付林",
        "deadline": "1个月",
        "status": "done"
      }
    ],
    "timeline": [
      {
        "time": "06/01-03",
        "event": "王钦鹏次品率从0.18%持续上升至0.34%，日报正常但未标注异常"
      },
      {
        "time": "06/06",
        "event": "王钦鹏次品26条（0.66%），全组暴增至37条，增幅362%"
      },
      {
        "time": "06/07",
        "event": "全组次品35条继续高位，日报缺失"
      },
      {
        "time": "06/09",
        "event": "来昕怡群内追问：6号7号问题已暴露，管理侧无纠偏记录"
      },
      {
        "time": "06/09",
        "event": "来昕怡发布绥阳团队质检管理复盘工单"
      },
      {
        "time": "06/16",
        "event": "来昕怡确认工单完结"
      }
    ],
    "tags": [
      "质检管理",
      "次品",
      "管理失职",
      "日报",
      "培训"
    ],
    "progress": "6/16 老板确认工单完结。",
    "groupId": "8210337",
    "penaltyAmount": 1500,
    "penaltyConfirmed": false,
    "penaltyReason": "P0 监管反馈 10%（¥1000）+ 重大影响×1.5",
    "contactPerson": "张思语",
    "penaltyConfirmedBy": null,
    "penaltyConfirmedAt": null
  },
  {
    "id": "TK-2026-004",
    "title": "巡检车CMA登录态频繁过期导致审核积压",
    "author": "来昕怡",
    "vendor": "河南新阳科技（南宁）",
    "status": "resolved",
    "priority": "P0",
    "sourceGroup": "8485321",
    "createdDate": "2026-06-15",
    "updatedDate": "2026-06-15T17:05:00+08:00",
    "summary": "2026年6月期间，巡检车CMA系统多次出现登录态过期问题。6月4日早高峰，入场审核积压371条、出场169条，累计影响超过90分钟。审核人员反馈CMA总是弹出来识别不了，人工介入率从30%飙升至80%。",
    "impact": "🔴 审核时效：单次积压最高371条，环比增长300%\n🔴 人工成本：人审率从30%升至80%，6台CMA仅4台正常运作\n🟡 准确率风险：人工审核比例激增，次品率存在反弹风险\n🟡 供应商管理：杭州职场日均额外消耗2人处理积压",
    "rootCause": "直接原因：CMA登录态过期后未自动续期，审核人员未及时退出重登\n深层原因：1) CMA无登录态监控告警 2) 审核人员缺乏CMA掉线识别培训 3) 巡检车告警仅提示积压量，未关联登录态异常",
    "solutions": [
      {
        "step": 1,
        "action": "修复CMA登录态自动续期逻辑，增加session过期前主动刷新",
        "owner": "董超",
        "deadline": "T+3",
        "status": "done"
      },
      {
        "step": 2,
        "action": "巡检车告警机器人增加CMA在线数字段，在线数<5自动@管理方",
        "owner": "董超",
        "deadline": "T+5",
        "status": "done"
      },
      {
        "step": 3,
        "action": "制定CMA掉线应急预案：退出→重登→验证三步骤",
        "owner": "来昕怡",
        "deadline": "T+3",
        "status": "done"
      },
      {
        "step": 4,
        "action": "建立CMA健康度dashboard，每小时检测登录态/识别率/人审率",
        "owner": "董超",
        "deadline": "T+10",
        "status": "done"
      },
      {
        "step": 5,
        "action": "审核人员上岗前增加CMA状态自查环节，纳入日常checklist",
        "owner": "来昕怡",
        "deadline": "持续",
        "status": "done"
      }
    ],
    "timeline": [
      {
        "time": "06/04 07:09",
        "event": "巡检车入场审核积压371条，CMA在线数异常"
      },
      {
        "time": "06/04 09:10",
        "event": "发现sh28人审率80%，确认CMA掉线"
      },
      {
        "time": "06/04 09:12",
        "event": "梁宁确认没有爆量，但实际为CMA未分配"
      },
      {
        "time": "06/04 08:55-09:15",
        "event": "连续6条告警，积压峰值371条"
      },
      {
        "time": "06/15",
        "event": "发起工单复盘"
      },
      {
        "time": "06/15 16:19",
        "event": "董超回复：CMA自动续期已修复，告警已加在线数"
      },
      {
        "time": "06/15 17:05",
        "event": "来昕怡：所有方案完结"
      }
    ],
    "tags": [
      "巡检车",
      "CMA",
      "审核积压",
      "系统稳定性"
    ],
    "progress": "6/15 董超：CMA自动续期已修复，告警已加在线数。Dashboard已完成。来昕怡：所有方案完结。",
    "groupId": "8485321",
    "penaltyAmount": 1000,
    "penaltyConfirmed": false,
    "penaltyReason": "P0 监管反馈 10%（¥1000）",
    "contactPerson": "—",
    "penaltyConfirmedBy": null,
    "penaltyConfirmedAt": null
  },
  {
    "id": "TK-2026-009",
    "title": "汽车之家任大炮涉政漏放复盘",
    "author": "朱梦阳",
    "vendor": "河南新阳科技（洛阳）",
    "status": "resolved",
    "priority": "P0",
    "sourceGroup": "6115474",
    "createdDate": "2026-06-24",
    "updatedDate": "2026-06-24",
    "summary": "6月23日汽车之家论坛评论中，审核员韦苏蕾一审不通过(打标谩骂)，李玉盈回扫修正为通过，导致包含涉政敏感人物任大炮(任志强)的评论漏放。漏放原因：审核员不了解任大炮为涉政敏感人物，原贴讲雷军相关内容，评论\"任大炮也说了同样的话\"被误判为普通言论，未识别涉政风险。回扫结果：各模块近一月OCR关键词回扫任大炮、任志强无关联数据。",
    "impact": "🔴 涉政漏放：敏感人物任大炮相关内容未拦截，存在政治风险\n🔴 客户投诉风险：若被外部发现可升级为重大事故\n🟡 流程漏洞：一审不通过→回扫通过的操作不一致，两轮审核结果矛盾\n🟡 人员认知盲区：审核员对任大炮等涉政人物缺乏知识储备",
    "rootCause": "1. 直接原因：审核员韦苏蕾对敏感人物\"任大炮\"（任志强）缺乏认知，仅按谩骂标签处理，未识别涉政风险\n2. 深层原因1：回扫审核李玉盈未充分核查评论内容的政治敏感性，仅按文本字面判断\n3. 深层原因2：涉政敏感人物培训未覆盖任大炮等历史人物，知识库存在盲区\n4. 深层原因3：一审不通过→回扫修正通过的流程缺乏涉政专项复核环节",
    "solutions": [
      {
        "step": 1,
        "action": "全组集中复培涉政敏感人物名单（含任大炮/任志强等），典型一号负面玩梗风险意识",
        "owner": "郭嘉锋",
        "deadline": "T+1（6月25日）",
        "status": "done"
      },
      {
        "step": 2,
        "action": "整合本案+历史案例，以模拟实操形式全组测试验收，准确率100%为目标值",
        "owner": "郭嘉锋",
        "deadline": "T+3（6月26日）",
        "status": "done"
      },
      {
        "step": 3,
        "action": "对漏放人韦苏蕾及汽车组其他同学随机抽问，验收其他风险类型知识储备",
        "owner": "郭嘉锋",
        "deadline": "T+3（6月26日）",
        "status": "done"
      },
      {
        "step": 4,
        "action": "评估DHS删除人审通过涉政数据的兜底保障方案",
        "owner": "钱燕",
        "deadline": "T+5（6月28日）",
        "status": "done"
      },
      {
        "step": 5,
        "action": "优化回扫流程：涉政相关内容的回扫增加专项复核环节",
        "owner": "黎俊",
        "deadline": "T+5（6月28日）",
        "status": "done"
      }
    ],
    "timeline": [
      {
        "time": "2026-06-21 20:04",
        "event": "一审韦苏蕾不通过，打标谩骂"
      },
      {
        "time": "2026-06-22 09:34",
        "event": "李玉盈回扫修正为通过"
      },
      {
        "time": "2026-06-23 16:47",
        "event": "客户朱莹发现涉政漏放，通知黎俊排查"
      },
      {
        "time": "2026-06-23 17:08",
        "event": "黎俊确认漏放原因，回扫近一月数据无关联"
      },
      {
        "time": "2026-06-23 18:27",
        "event": "郭嘉锋输出培训方案（复培+验收）"
      },
      {
        "time": "2026-06-24",
        "event": "工单TK-TK-2026-002创建，全流程跟踪启动"
      },
      {
        "time": "2026-06-24 15:36",
        "event": "定时扫描：所有方案已进入处理中状态"
      },
      {
        "time": "2026-06-24 16:19",
        "event": "全部方案完成，工单完结"
      }
    ],
    "tags": [
      "涉政",
      "任大炮",
      "漏放",
      "汽车之家",
      "洛阳笋尖",
      "培训"
    ],
    "progress": "全部方案已完成：培训复培+验收+抽问+DHS兜底+回扫流程优化均已落地",
    "groupId": "6115474",
    "penaltyAmount": 1000,
    "penaltyConfirmed": false,
    "penaltyReason": "P0 监管反馈 10%（¥1000）",
    "contactPerson": "钱燕",
    "penaltyConfirmedBy": null,
    "penaltyConfirmedAt": null
  },
  {
    "id": "TK-2026-010",
    "title": "6.23汽车之家涉政漏放复盘",
    "author": "刘倩",
    "vendor": "河南徽音网络科技",
    "project": "汽车之家",
    "priority": "P0",
    "status": "resolved",
    "issueType": "涉政漏放（反华人物）",
    "assignee": "胡娜娜",
    "sourceGroup": "8549438",
    "createdDate": "2026-06-24",
    "updatedDate": "2026-06-30",
    "summary": "汽车之家严重涉政漏放案例2条：任大炮相关+政治隐喻未识别",
    "impact": "🔴 重大影响：严重涉政漏放，涉及反华人物识别失效",
    "rootCause": "审核员将'任大炮'误联想为'任正非'，对明确涉政敏感人物未执行删除；同时对'皇帝的新装'政治隐喻敏感度不足。人员层面：政治敏感人物别称/代称知识储备严重不足。管理层面：机审+dhs双命中后人审未跟进拦截。系统层面：缺乏系统命中→人审必查的强制校验机制。规则层面：反华人物清单更新不及时，别称/代称未充分宣导。",
    "solutions": [
      {
        "step": 1,
        "action": "问题定级确认：关键词排查（皇帝的、大炮、吃早餐、吃包子、雷军早餐、雷军女孩、雷军吃饭、任大炮、任志强），排查数据已登记；时间段排查完成3751条",
        "owner": "胡娜娜/许帅领",
        "deadline": "T+1",
        "status": "done"
      },
      {
        "step": 2,
        "action": "初版复盘输出：复盘文档已完成，同步全员进行重点宣导",
        "owner": "胡娜娜",
        "deadline": "T+1",
        "status": "done"
      },
      {
        "step": 3,
        "action": "全员通报：重点宣导涉政人物清单——皇帝的（隐喻）、任大炮/任志强、雷军相关变体，防止联想误审",
        "owner": "许帅领",
        "deadline": "T+1",
        "status": "done"
      },
      {
        "step": 4,
        "action": "反华人物专项培训：舆情专员培训已安排；6.25日进行相关测试；持续收集添加涉政案例",
        "owner": "培训侧",
        "deadline": "T+4",
        "status": "done"
      },
      {
        "step": 5,
        "action": "培训验收：培训完成后进行验收，包括闭卷测试和补训",
        "owner": "培训侧",
        "deadline": "T+7",
        "status": "done"
      },
      {
        "step": 6,
        "action": "定期抽问：组长不定期进行涉政案例抽查，每两周涉政/反华案例抽问",
        "owner": "质量侧",
        "deadline": "持续",
        "status": "done"
      }
    ],
    "timeline": [
      {
        "time": "06/24 02:40",
        "event": "工单创建 | 操作人：刘倩"
      },
      {
        "time": "06/24 03:23",
        "event": "胡娜娜确认初版复盘输出+问题定级确认已完成"
      },
      {
        "time": "06/24 03:28",
        "event": "胡娜娜汇报进展：关键词排查已登记、时间段排查3751条进行中、舆情培训已安排、6.25测试、组长不定期抽查"
      },
      {
        "time": "06/24 05:18",
        "event": "胡娜娜：关键词排查完成（9个关键词），排查数据已登记；时间段排查3751条；舆情专员培训10:00-11:00已安排；6.25日进行测试；后续持续收集涉政案例"
      },
      {
        "time": "06/24 08:28",
        "event": "系统扫描确认：初版复盘输出✅ 问题定级确认✅"
      },
      {
        "time": "06/25 13:36",
        "event": "胡娜娜汇报：反华人物培训第二场10:30-11:30已完成；测试题已出，培训同学参加中，截止6.28；李豪数据排查累计10507条；现场管理持续强调反华人物清单"
      },
      {
        "time": "2026-06-30 07:23",
        "event": "系统标记完结，全部方案完成"
      }
    ],
    "tags": [
      "涉政",
      "反华人物",
      "汽车之家",
      "河南徽音",
      "P0"
    ],
    "progress": "全部6项方案已完成：涉政人物识别宣导、涉政案例排查回查、反华人物专项培训、闭卷测试验收（覆盖率97.3%）、李豪数据排查、质检防线加固",
    "penalty": {
      "amount": 750,
      "basis": "涉政反馈: ¥+500 | 影响加成: ¥+250",
      "status": "calculated",
      "breakdown": [
        {
          "item": "涉政反馈",
          "value": 500,
          "desc": "涉政反馈固定扣罚 -¥500"
        },
        {
          "item": "影响加成",
          "value": 250,
          "desc": "🔴 重大影响 ×1.5"
        }
      ],
      "calculatedAt": "2026-06-24T10:27:47.150Z"
    },
    "groupId": "8549438",
    "penaltyAmount": null,
    "penaltyConfirmed": false,
    "penaltyConfirmedBy": null,
    "penaltyConfirmedAt": null,
    "penaltyReason": null,
    "contactPerson": null
  },
  {
    "id": "TK-2026-011",
    "title": "6.15广告法QC人效未达标整改",
    "author": "易盾工单",
    "vendor": "山西易网视界（临汾）",
    "project": "广告法",
    "priority": "P0",
    "status": "in_progress",
    "issueType": "人效未达标",
    "assignee": "郭舒嫣/王婷",
    "sourceGroup": "8523601",
    "createdDate": "2026-06-15",
    "updatedDate": "2026-06-30",
    "summary": "6月12日截至至21点，QC新品审核量级仅17条，离日标准值35-40条差距近一半。临汾团队月审核目标1100条新品，日均需35-40条。",
    "impact": "🟡 中等影响：人效未达标，影响客户交付预期",
    "rootCause": "直接原因：人审接审人身审核速度加快导致漏放；未识别黑灰产数据。人员层面：黑灰产识别能力不足（测试中）。管理层面：审出后同步质检回查，15:09驳回（质检响应存在延迟）。系统层面：待补充。规则层面：待补充。",
    "solutions": [
      {
        "step": 1,
        "action": "现场管理优化：密切关注审核状态及实时审核量级，异常及时介入上报",
        "owner": "郭舒嫣",
        "deadline": "持续",
        "status": "in_progress"
      },
      {
        "step": 2,
        "action": "审核SOP优化：梳理优化审核流程，联动驻场进行流程检查和技巧经验传授",
        "owner": "郭舒嫣",
        "deadline": "T+10",
        "status": "overdue"
      },
      {
        "step": 3,
        "action": "人效提升达成：核心组员15条/日，尾部人员12条/日（不含补充返修）",
        "owner": "郭舒嫣",
        "deadline": "T+16",
        "status": "in_progress"
      },
      {
        "step": 4,
        "action": "人员审核录屏分析：找到审核效率低的痛点，驻场分享审核流程技巧",
        "owner": "郭舒嫣",
        "deadline": "T+6",
        "status": "done"
      },
      {
        "step": 5,
        "action": "SKU时长测算：根据SKU资质测算单SKU所需审核时长，建立评估标准",
        "owner": "王婷",
        "deadline": "T+13",
        "status": "done"
      },
      {
        "step": 6,
        "action": "QC直播间优先级明确：明确临汾负责审核的QC直播间及审核品类优先级",
        "owner": "克莉森(许怡)",
        "deadline": "T+11",
        "status": "overdue"
      },
      {
        "step": 7,
        "action": "新人培训计划：QC审核流程优化、新人培训计划和效率爬坡",
        "owner": "王婷",
        "deadline": "T+13",
        "status": "overdue"
      }
    ],
    "timeline": [
      {
        "time": "06/15 12:08",
        "event": "易盾工单下发：QC人效指标未达成问题整改（紧急）"
      },
      {
        "time": "06/15 17:03",
        "event": "郭舒嫣回复：效率不符合预期归因分析+提升动作"
      },
      {
        "time": "06/15 17:05",
        "event": "郭舒嫣：正在压测人员审核时长，找审核痛点，评估完成量级"
      },
      {
        "time": "06/15 20:07",
        "event": "郭舒嫣：完成审核操作录屏（按审核板块录的）"
      },
      {
        "time": "06/17 14:50",
        "event": "王婷：16:00对齐工单内容，涉及大促QC、审核流程、直播间优先级"
      },
      {
        "time": "06/17 16:39",
        "event": "王婷输出后续待办和对齐事项（5项）"
      },
      {
        "time": "06/22 11:47",
        "event": "克莉森：审核SOP优化要求在24日前完成"
      },
      {
        "time": "06/23 15:54",
        "event": "王婷：初步已搭建好，本周涉及QC审核流程优化、新人培训计划和QC效率爬坡"
      },
      {
        "time": "06/24 06:31",
        "event": "群8552538收到归因回复 | 系统自动追问规则层面+系统层面"
      }
    ],
    "tags": [
      "人效",
      "广告法",
      "QC",
      "临汾易网",
      "P0"
    ],
    "progress": "方案4(录屏分析)已完成；方案5(SKU时长测算)已完成；其余方案推进中",
    "penalty": {
      "amount": 1200,
      "basis": "监管反馈: ¥+1000 | 影响加成: ¥+200",
      "status": "calculated",
      "breakdown": [
        {
          "item": "监管反馈",
          "value": 1000,
          "desc": "监管反馈 -10%（基数¥10000）"
        },
        {
          "item": "影响加成",
          "value": 200,
          "desc": "🟡 中等影响 ×1.2"
        }
      ],
      "calculatedAt": "2026-06-24T10:27:47.159Z"
    },
    "groupId": "8523601",
    "penaltyAmount": null,
    "penaltyConfirmed": false,
    "penaltyConfirmedBy": null,
    "penaltyConfirmedAt": null,
    "penaltyReason": null,
    "contactPerson": null
  },
  {
    "id": "TK-2026-012",
    "title": "6.6-6.10周期周考漏指派复盘",
    "author": "刘倩",
    "vendor": "河南徽音网络科技",
    "project": "待确认",
    "priority": "P0",
    "status": "in_progress",
    "issueType": "周考漏指派",
    "assignee": "待确认",
    "sourceGroup": "8553918",
    "createdDate": "2026-06-24",
    "updatedDate": "2026-06-25T10:23:00Z",
    "summary": "6月6日至6月10日周期周考存在漏指派问题，群内已开始复盘",
    "impact": "🟡 中等影响：培训考核遗漏，影响团队能力评估",
    "rootCause": "直接原因：培训专员连续两周进行新人通用培训，工作事项较忙导致漏指派。人员层面：亓林未能重点关注舆情群内信息，查看信息后未及时响应。管理层面：各组长及管理未及时发现本周没有舆情周考，未能及时提醒。系统层面：（供应商未提供）。规则层面：（供应商未提供）。",
    "solutions": [
      {
        "step": 1,
        "action": "建立任务清单，关键信息2小时内响应：培训专员亓林建立个人任务清单，群内关键任务信息必须在2小时内响应确认",
        "owner": "亓林",
        "deadline": "T+1",
        "status": "overdue"
      },
      {
        "step": 2,
        "action": "组长每周检查周考执行状态：各组长每周检查本周周考是否已指派，及时发现遗漏",
        "owner": "各组长",
        "deadline": "T+4",
        "status": "overdue"
      }
    ],
    "timeline": [
      {
        "time": "06/24 17:10",
        "event": "工单创建 | 操作人：刘倩"
      },
      {
        "time": "06/24 09:34",
        "event": "供应商回复归因（人员+管理），归因明确，直接保存"
      }
    ],
    "tags": [
      "周考",
      "漏指派",
      "培训",
      "P0"
    ],
    "progress": "0/2 完成：建立任务清单，关键信息2小时内响应🔴(逾期) 组长每周检查周考执行状态⏳",
    "penalty": {
      "amount": 1200,
      "basis": "监管反馈: ¥+1000 | 影响加成: ¥+200",
      "status": "calculated",
      "breakdown": [
        {
          "item": "监管反馈",
          "value": 1000,
          "desc": "监管反馈 -10%（基数¥10000）"
        },
        {
          "item": "影响加成",
          "value": 200,
          "desc": "🟡 中等影响 ×1.2"
        }
      ],
      "calculatedAt": "2026-06-24T10:27:47.160Z"
    },
    "groupId": "8553918",
    "penaltyAmount": null,
    "penaltyConfirmed": false,
    "penaltyConfirmedBy": null,
    "penaltyConfirmedAt": null,
    "penaltyReason": null,
    "contactPerson": null
  },
  {
    "id": "TK-2026-013",
    "title": "市政延庆区客服未及时回复致甲方投诉",
    "author": "来昕怡",
    "vendor": "河南新阳科技（南宁）",
    "contactPerson": "钱燕",
    "status": "resolved",
    "priority": "P0",
    "sourceGroup": "8556155",
    "groupCreated": "",
    "createdDate": "2026-06-25",
    "updatedDate": "2026-06-26",
    "summary": "6月25日上午，来昕怡在群内反馈市政高位延庆区客服小二未及时回复用户核实需求，导致被业务甲方直接投诉。6月16日来昕怡已在群内预警客服实时同步机制重要性（实时同步，有一条发一条，不能打包发送），但延庆区仍有漏回复。",
    "impact": "🔴 客户信任：甲方直接投诉，影响市政停车业务合作信任基础\\n🟡 服务质量：客服响应时效不达标，违反甲方实时回复要求\\n🟡 供应商考核：南宁笋尖客服团队可能涉及KPI扣分",
    "rootCause": "1. 直接原因：客服小二未及时查看并回复用户核实消息\\n2. 深层原因1：客服人力安排或排班覆盖不足，6/16已预警实时同步对客服人力的占用，延庆区未针对性加强\\n3. 深层原因2：缺少客服响应时效监控告警机制，无法在超时未回复时主动预警",
    "solutions": [
      {
        "step": 1,
        "action": "立即排查延庆区客服排班与响应记录，确认漏回复根因",
        "owner": "钱燕/周丹",
        "deadline": "T+0（6月25日）",
        "status": "done"
      },
      {
        "step": 2,
        "action": "建立客服响应时效监控，超时X分钟自动告警",
        "owner": "钱燕",
        "deadline": "T+5（6月30日）",
        "status": "done"
      },
      {
        "step": 3,
        "action": "评估延庆区客服人力是否充足，必要时增配或调整排班",
        "owner": "钱燕/朱梦阳",
        "deadline": "T+7（7月2日）",
        "status": "done"
      },
      {
        "step": 4,
        "action": "向甲方提交事件说明及改进措施，修复客户关系",
        "owner": "来昕怡/钱燕",
        "deadline": "T+2（6月27日）",
        "status": "done"
      }
    ],
    "timeline": [
      {
        "time": "2026-06-16 10:28",
        "event": "来昕怡同步朝阳区切换，强调实时同步要求"
      },
      {
        "time": "2026-06-25 09:42",
        "event": "来昕怡反馈延庆区客服未及时回复，被甲方投诉"
      },
      {
        "time": "2026-06-25 09:59",
        "event": "工单复盘发群8556155，方案全部进入处理中"
      },
      {
        "time": "2026-06-25 10:18",
        "event": "周丹在群内@吴胜海 跟进来回排查项（DDL 6.25/6.26），吴胜海确认收到"
      },
      {
        "time": "2026-06-25 12:41",
        "event": "吴胜海回复：6/19客服电脑死机致回复超时11分钟，6/18未开提醒声音致超时12分钟，均超7分钟时效"
      },
      {
        "time": "2026-06-25 12:59",
        "event": "吴胜海上传统计截图，确认6/18还有一条超时记录"
      },
      {
        "time": "2026-06-25 16:19",
        "event": "吴胜海提交原因定位及改进措施文档"
      },
      {
        "time": "2026-06-26 11:36",
        "event": "来昕怡确认OK，要求长期跟踪避免第三次投诉"
      },
      {
        "time": "2026-06-26 11:43",
        "event": "千玺在群内确认「已完成」，工单完结"
      }
    ],
    "tags": [
      "客服",
      "投诉",
      "响应时效",
      "市政停车",
      "南宁笋尖"
    ],
    "progress": "全部方案已完成。6/25吴胜海完成根因排查、优化措施及提醒设置；6/26来昕怡确认OK，钱燕指示重点关注客服，千玺确认完结。",
    "manualPenalty": null,
    "penaltyConfirmed": false,
    "penaltyConfirmedBy": null,
    "penaltyConfirmedAt": null,
    "penaltyAmount": null,
    "penaltyReason": null
  },
  {
    "id": "TK-2026-014",
    "title": "6.25 审核卡审数据清理及分级升级报备机制建立",
    "author": "刘倩",
    "vendor": "山西易网视界（临汾）",
    "status": "in_progress",
    "priority": "P1",
    "sourceGroup": "8556744",
    "createdDate": "2026-06-25",
    "updatedDate": "2026-06-26T12:12:00",
    "summary": "6月25日，张帅汇报数据清理进展：6/24 0:00-6/25 10:50 数据清理完成，正在清理10:50-11:45数据。清理完毕后将建立分级升级报备机制。李思远确认POPO超时提醒已设置（站内+POPO）。周家阳询问组长和管理能否第一时间收到超时提醒。",
    "impact": "🔴 审核时效：卡审数据持续积压，影响审核效率🟡 管理机制：分级升级报备机制尚未建立，异常响应存在延迟风险🟡 监控盲区：需确认超时提醒是否能触达管理层",
    "rootCause": "1. 数据清理进度未达预期，持续卡审2. 分级升级报备机制缺失，异常处理流程不明确3. 超时提醒触达路径待验证（组长/管理是否能及时收到）",
    "solutions": [
      {
        "step": 1,
        "action": "完成数据清理（6/24 0:00-6/25 11:45时段）",
        "owner": "张帅",
        "deadline": "T+1",
        "status": "overdue"
      },
      {
        "step": 2,
        "action": "建立分级升级报备机制",
        "owner": "张帅",
        "deadline": "T+3",
        "status": "overdue"
      },
      {
        "step": 3,
        "action": "验证POPO超时提醒触达（组长+管理）",
        "owner": "李思远",
        "deadline": "T+1",
        "status": "overdue"
      },
      {
        "step": 4,
        "action": "全员通报新机制",
        "owner": "周家阳",
        "deadline": "T+5",
        "status": "in_progress"
      }
    ],
    "timeline": [
      {
        "time": "06/25 11:46",
        "event": "周家阳询问进展"
      },
      {
        "time": "06/25 11:48",
        "event": "张帅汇报：数据清理完成（6/24 0:00-6/25 10:50），正在清理10:50-11:45数据"
      },
      {
        "time": "06/25 11:50",
        "event": "李思远：POPO超时提醒已设置（站内+POPO均有）"
      },
      {
        "time": "06/25 11:59",
        "event": "李思远：站内和POPO提醒均有设置，截图确认"
      }
    ],
    "tags": [
      "审核积压",
      "数据清理",
      "分级升级",
      "超时提醒"
    ],
    "progress": "0/4 完成：完成数据清理（6/24 0:00-6/2🔴 建立分级升级报备机制⏳ 验证POPO超时提醒触达（组长+管理）🔴 全员通报新机制⏳",
    "penaltyAmount": null,
    "penaltyConfirmed": false,
    "penaltyConfirmedBy": null,
    "penaltyConfirmedAt": null,
    "penaltyReason": null,
    "contactPerson": null
  },
  {
    "id": "TK-2026-015",
    "title": "洛阳新阳-得物用户资料535内容漏放",
    "author": "钱燕",
    "vendor": "河南新阳科技（洛阳）",
    "status": "in_progress",
    "priority": "P2",
    "sourceGroup": "8562099",
    "createdDate": "2026-06-26",
    "updatedDate": "2026-06-30T09:46:00+08:00",
    "summary": "得物用户资料审核中发生535内容漏放，漏放内容未在审核环节被有效拦截。",
    "impact": "🟡 中等 | 个例漏放",
    "rootCause": "风险防范意识不足，专项结束后放松警惕；未严格按照审核操作流程执行。",
    "solutions": [
      {
        "step": 1,
        "action": "知识储备摸底",
        "owner": "牛欢欢",
        "deadline": "T+3",
        "status": "overdue"
      },
      {
        "step": 2,
        "action": "人员评估是否汰换",
        "owner": "杨辉浩",
        "deadline": "T+5",
        "status": "done"
      },
      {
        "step": 3,
        "action": "漏放原因定位",
        "owner": "牛欢欢",
        "deadline": "T+2",
        "status": "done"
      }
    ],
    "timeline": [
      {
        "time": "06/26 11:51",
        "event": "钱燕在群2814288发现漏放，@牛欢欢"
      },
      {
        "time": "06/26 14:04",
        "event": "牛欢欢回复：漏放原因为风险意识不足+未严格按流程，王梦昭已汰换，团队10人当面提问验证"
      },
      {
        "time": "06/26 15:31",
        "event": "潘本龙指派得物用户资料工单测试（6/26-7/1），覆盖率全组"
      },
      {
        "time": "06/30 09:27",
        "event": "系统扫描：漏放原因定位✅ 人员汰换✅ 知识储备摸底🔄（工单测试进行中）"
      }
    ],
    "tags": [
      "得物",
      "漏放",
      "用户资料"
    ],
    "progress": "2/3完成：漏放原因定位✅（风险意识不足+未严格按流程）；人员汰换✅（王梦昭已汰换）；知识储备摸底🔄（团队当面提问已验证，工单测试6/26-7/1进行中）",
    "manualPenalty": null,
    "penaltyConfirmed": false,
    "penaltyConfirmedBy": null,
    "penaltyConfirmedAt": null
  },
  {
    "id": "TK-2026-017",
    "title": "洛阳新阳-得物-用户资料涉政漏放",
    "author": "钱燕",
    "vendor": "河南新阳科技（洛阳）",
    "status": "open",
    "priority": "P1",
    "sourceGroup": "8570126",
    "createdDate": "2026-06-29",
    "updatedDate": "2026-06-29T18:00:00.000Z",
    "summary": "得物用户资料审核，昵称「富平都敏俊」涉1号内容漏放。业务id：2586844374，工单id：193199908。",
    "impact": "🟡 中等 | 个例漏判反馈",
    "rootCause": "待定位",
    "solutions": [
      {
        "step": 1,
        "action": "漏放原因定位",
        "owner": "牛欢欢",
        "deadline": "T+2",
        "status": "in_progress"
      },
      {
        "step": 2,
        "action": "涉一号内容培训",
        "owner": "牛欢欢",
        "deadline": "T+3",
        "status": "in_progress"
      },
      {
        "step": 3,
        "action": "数据回扫",
        "owner": "牛欢欢",
        "deadline": "T+2",
        "status": "in_progress"
      }
    ],
    "timeline": [
      {
        "time": "06/29 18:00",
        "event": "钱燕创建工单，建群8570126"
      }
    ],
    "tags": [
      "得物",
      "涉政",
      "漏放",
      "用户资料"
    ],
    "progress": "",
    "manualPenalty": null,
    "penaltyConfirmed": false,
    "penaltyConfirmedBy": null,
    "penaltyConfirmedAt": null
  },
  {
    "id": "TK-2026-018",
    "title": "洛阳新阳-得物-用户资料横向负反馈",
    "author": "钱燕",
    "vendor": "河南新阳科技（洛阳）",
    "status": "open",
    "priority": "P1",
    "sourceGroup": "8570267",
    "createdDate": "2026-06-29",
    "updatedDate": "2026-06-29T18:00:00.000Z",
    "summary": "审核超时等5条内容误伤/漏放，客户发起横向负反馈。业务id：2729310253、433067030283837984、45953451、2779986678等。",
    "impact": "🟡 中等 | 客户横向负反馈",
    "rootCause": "待定位",
    "solutions": [
      {
        "step": 1,
        "action": "漏放原因定位",
        "owner": "牛欢欢",
        "deadline": "T+2",
        "status": "in_progress"
      },
      {
        "step": 2,
        "action": "提升标签打标准确性",
        "owner": "牛欢欢",
        "deadline": "T+5",
        "status": "in_progress"
      }
    ],
    "timeline": [
      {
        "time": "06/29 18:18",
        "event": "钱燕创建工单，建群8570267"
      }
    ],
    "tags": [
      "得物",
      "漏放",
      "误伤",
      "用户资料"
    ],
    "progress": "",
    "manualPenalty": null,
    "penaltyConfirmed": false,
    "penaltyConfirmedBy": null,
    "penaltyConfirmedAt": null
  }
];