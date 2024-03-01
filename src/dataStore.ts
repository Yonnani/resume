import { JeYeonjuData, MenuKey } from "./type/data";



export const data: JeYeonjuData = {
  title: "제연주 - 백세까지 코딩하고픈, 프론트엔드 개발자",
  description: "백세까지 코딩하고픈, 프론트엔드 개발자 '제연주'의 이력서입니다.",
  menus: [
    {
      name: "제연주", key: MenuKey.SUMMARY
    },
    {
      name: "경력", key: MenuKey.CAREER
    },
    {
      name: "학력", key: MenuKey.EDUCATION
    },
    {
      name: "경력기술서", key: MenuKey.CAREER_DESCRIPTION
    },
    {
      name: "자격증", key: MenuKey.CERTIFICATE
    },
    {
      name: "교육", key: MenuKey.TRAINING
    },
  ]
  // "skillList": {
  //   "title": "보유기술",
  //   "order": 1,
  //   "htmlId": "skill-list",
  //   "list": [
  //     {
  //       "main": "JavaScript",
  //       "sub": ["ES6+", "Vue.js", "Vuex", "Bootstrap Vue", "jQuery"]
  //     },
  //     {
  //       "main": "HTML",
  //       "sub": []
  //     },
  //     {
  //       "main": "CSS",
  //       "sub": ["SCSS"]
  //     },
  //     {
  //       "main": "Java",
  //       "sub": ["Kotlin", "Spring Boot", "Spring WebFlux"]
  //     },
  //     {
  //       "main": "MySQL",
  //       "sub": ["JPA", "MyBatis"]
  //     }
  //   ]
  // },
  // "schoolList": {
  //   "title": "학력",
  //   "order": 2,
  //   "htmlId": "school-list",
  //   "list": [
  //     {
  //       "duration": {
  //         "start": {
  //           "year": 2011,
  //           "month": 3,
  //           "type": "편입"
  //         },
  //         "end": {
  //           "year": 2013,
  //           "month": 2,
  //           "type": "졸업"
  //         }
  //       },
  //       "name": "부산대학교",
  //       "major": "디자인학과 영상정보전공",
  //       "gpa": {
  //         "points": 4.37,
  //         "maxPoints": 4.5
  //       }
  //     },
  //     {
  //       "duration": {
  //         "start": {
  //           "year": 2007,
  //           "month": 3,
  //           "type": "입학"
  //         },
  //         "end": {
  //           "year": 2009,
  //           "month": 9,
  //           "type": "중퇴"
  //         }
  //       },
  //       "name": "성균관대학교",
  //       "major": "건축학과",
  //       "gpa": {
  //         "points": 3.25,
  //         "maxPoints": 4.5
  //       }
  //     }
  //   ]
  // },
  // "careerList": {
  //   "title": "경력",
  //   "order": 3,
  //   "htmlId": "career-list",
  //   "totalTime": {
  //     "year": 4,
  //     "months": 8
  //   },
  //   "list": [
  //     {
  //       "duration": {
  //         "start": {
  //           "year": 2015,
  //           "month": 2
  //         },
  //         "end": {
  //           "year": 2020,
  //           "month": 12
  //         }
  //       },
  //       "name": "이멕스",
  //       "duty": "웹, 서버 개발"
  //     },
  //     {
  //       "duration": {
  //         "start": {
  //           "year": 2013,
  //           "month": 2
  //         },
  //         "end": {
  //           "year": 2013,
  //           "month": 8
  //         }
  //       },
  //       "name": "㈜애드캡슐소프트",
  //       "duty": "웹기획"
  //     }
  //   ]
  // },
  // "careerDesc": {
  //   "title": "경력기술서",
  //   "order": 4,
  //   "htmlId": "career-desc",
  //   "list": [
  //     {
  //       "id": 17,
  //       "name": "Shipment Label Service Back-end",
  //       "githubLink": null,
  //       "duration": {
  //         "start": { "year": 2019, "month": 8 },
  //         "end": { "year": 2019, "month": 9 }
  //       },
  //       "projectDesc": "국가, 무게 등에 따라 배송사를 결정하고 해당하는 배송사의 운송장을 출력하는 서비스",
  //       "devDesc": "Scala 언어의 프로젝트를 Kotlin으로 변경하는 작업 진행",
  //       "devSpec": {
  //         "frontEnd": [],
  //         "backEnd": ["Scala", "Kotlin", "Spring Boot", "Spring WebFlux"]
  //       },
  //       "contribution": "3인 체제에서 팀원으로서 몇 개의 배송사를 맡아서 개발과 코드리뷰 진행"
  //     },
  //     {
  //       "id": 16,
  //       "name": "Order/Return/Product/Setting 하나의 사이트 구축",
  //       "githubLink": null,
  //       "duration": {
  //         "start": { "year": 2018, "month": 12 },
  //         "end": { "year": 2019, "month": 7 }
  //       },
  //       "projectDesc": "판매자가 주문 확인, 반품 요청 및 확인, 상품 조회/수정/삭제, 설정이 가능한 사이트",
  //       "devDesc": "마이크로서비스아키텍처를 이용하여 메뉴별로 Front-end, Back-end를 각각 구성함",
  //       "devSpec": {
  //         "frontEnd": ["JavaScript", "HTML", "CSS", "Vue.js", "Vuex", "Bootstrap Vue"],
  //         "backEnd": ["Kotlin", "Spring Boot", "Spring WebFlux", "JPA", "AWS", "MySQL"]
  //       },
  //       "contribution": "2인 체제에서 팀원으로서 기능 개발"
  //     },
  //     {
  //       "id": 15,
  //       "name": "Return Service Back-end",
  //       "githubLink": null,
  //       "duration": {
  //         "start": { "year": 2018, "month": 8 },
  //         "end": { "year": 2018, "month": 11 }
  //       },
  //       "projectDesc": "판매자 또는 구매자가 주문에 대한 반품을 요청하는 서비스",
  //       "devDesc": "Return 서비스의 Back-end 개발",
  //       "devSpec": {
  //         "frontEnd": [],
  //         "backEnd": ["Java", "Spring Boot", "Spring WebFlux", "JPA", "AWS", "MySQL"]
  //       },
  //       "contribution": "2인 체제에서 팀원으로서 특정 메뉴를 맡아서 기능 개발"
  //     },
  //     {
  //       "id": 14,
  //       "name": "허브동산 산벽 홈페이지 리뉴얼",
  //       "githubLink": "https://github.com/yonnani/herb-renewal",
  //       "duration": {
  //         "start": { "year": 2018, "month": 8 },
  //         "end": { "year": 2018, "month": 8 }
  //       },
  //       "projectDesc": "산벽 소개 홈페이지 구축",
  //       "devDesc": "홈페이지 Front-end 개발, 업체 공지 게시판 개발",
  //       "devSpec": {
  //         "frontEnd": ["JavaScript", "HTML", "CSS", "Vue.js", "Vuex", "Bootstrap Vue", "Firebase"],
  //         "backEnd": []
  //       },
  //       "contribution": "1인 프로젝트로 모두 개발"
  //     },
  //     {
  //       "id": 13,
  //       "name": "Shipping/Return Service Front-end",
  //       "githubLink": null,
  //       "duration": {
  //         "start": { "year": 2018, "month": 7 },
  //         "end": { "year": 2018, "month": 11 }
  //       },
  //       "projectDesc": "주문에 대한 배송 현황 조회 및 반품을 요청하는 서비스",
  //       "devDesc": "Shipping, Return 서비스의 Front-end 개발",
  //       "devSpec": {
  //         "frontEnd": ["JavaScript", "HTML", "CSS", "Vue.js", "Vuex", "Bootstrap Vue"],
  //         "backEnd": []
  //       },
  //       "contribution": "2인 체제에서 팀리더로서 프로젝트 셋팅, 개발 진행"
  //     },
  //     {
  //       "id": 12,
  //       "name": "Billing Fulfillment Invoice",
  //       "githubLink": null,
  //       "duration": {
  //         "start": { "year": 2018, "month": 2 },
  //         "end": { "year": 2018, "month": 6 }
  //       },
  //       "projectDesc": "물류 창고의 풀필먼트 작업의 청구서를 자동으로 생성하는 서비스",
  //       "devDesc": "Front-end, Back-end 개발",
  //       "devSpec": {
  //         "frontEnd": ["JavaScript", "HTML", "CSS", "Vue.js"],
  //         "backEnd": ["Java", "Spring Boot", "MyBatis", "MySQL", "AWS"]
  //       },
  //       "contribution": "4인 체제에서 팀원으로서 특정 메뉴를 맡아서 기능 개발, 이후 유지보수 담당"
  //     },
  //     {
  //       "id": 11,
  //       "name": "Return Service",
  //       "githubLink": null,
  //       "duration": {
  //         "start": { "year": 2017, "month": 11 },
  //         "end": { "year": 2018, "month": 1 }
  //       },
  //       "projectDesc": "주문에 대한 반품을 요청하는 기능",
  //       "devDesc": "Front-end, Back-end 개발",
  //       "devSpec": {
  //         "frontEnd": ["JavaScript", "Vue.js", "jQuery", "Thymeleaf", "HTML", "CSS"],
  //         "backEnd": ["Java", "Spring Boot", "JPA", "MySQL", "AWS"]
  //       },
  //       "contribution": "2인 체제에서 팀원으로서 기능 개발"
  //     },
  //     {
  //       "id": 10,
  //       "name": "ONE Portal 리뉴얼",
  //       "githubLink": null,
  //       "duration": {
  //         "start": { "year": 2017, "month": 7 },
  //         "end": { "year": 2017, "month": 11 }
  //       },
  //       "projectDesc": "기존의 ONE Portal(주문, 상품, 배송 정보의 포탈)의 Front-end 리뉴얼",
  //       "devDesc": "Front-end 개발",
  //       "devSpec": {
  //         "frontEnd": ["JavaScript", "jQuery", "Vue.js", "Thymeleaf", "HTML", "CSS"],
  //         "backEnd": []
  //       },
  //       "contribution": "3인 체제에서 팀원으로서 리뉴얼 개발 진행, Vue.js를 도입하여 특정 기능 개발 기간 단축"
  //     },
  //     {
  //       "id": 9,
  //       "name": "Zungle Tracking Order",
  //       "githubLink": null,
  //       "duration": {
  //         "start": { "year": 2017, "month": 5 },
  //         "end": { "year": 2017, "month": 5 }
  //       },
  //       "projectDesc": "클라이언트 Zungle의 주문 조회 페이지",
  //       "devDesc": "Front-end, Back-end 개발",
  //       "devSpec": {
  //         "frontEnd": ["JavaScript", "jQuery", "Thymeleaf", "HTML", "CSS"],
  //         "backEnd": ["Java", "Spring Boot", "JPA", "MySQL"]
  //       },
  //       "contribution": "1인 프로젝트로 모두 개발"
  //     },
  //     {
  //       "id": 8,
  //       "name": "ONE Portal - Multiple Warehouse Overbatching",
  //       "githubLink": null,
  //       "duration": {
  //         "start": { "year": 2017, "month": 4 },
  //         "end": { "year": 2017, "month": 5 }
  //       },
  //       "projectDesc": "기존의 Overbatching 기능(재고 예약 기능)을 여러 창고에서 출고할 수 있도록 개선",
  //       "devDesc": "Back-end 개발",
  //       "devSpec": {
  //         "frontEnd": [],
  //         "backEnd": ["Java", "MyBatis", "MySQL", "Struts2"]
  //       },
  //       "contribution": "1인 프로젝트로 모두 개발"
  //     },
  //     {
  //       "id": 7,
  //       "name": "ONE Portal - Create Shipping Label",
  //       "githubLink": null,
  //       "duration": {
  //         "start": { "year": 2017, "month": 2 },
  //         "end": { "year": 2017, "month": 3 }
  //       },
  //       "projectDesc": "ONE Portal에서 운송장을 발행하도록 하는 기능",
  //       "devDesc": "Back-end 개발",
  //       "devSpec": {
  //         "frontEnd": [],
  //         "backEnd": ["Java", "MyBatis", "MySQL", "Struts2"]
  //       },
  //       "contribution": "2인 프로젝트로 Back-end를 맡아서 개발"
  //     },
  //     {
  //       "id": 6,
  //       "name": "ONE Portal - Change Address",
  //       "githubLink": null,
  //       "duration": {
  //         "start": { "year": 2016, "month": 11 },
  //         "end": { "year": 2016, "month": 11 }
  //       },
  //       "projectDesc": "구매자가 배송지 주소를 변경할 수 있도록 하는 기능",
  //       "devDesc": "Front-end, Back-end 개발",
  //       "devSpec": {
  //         "frontEnd": ["JavaScript", "JSP", "jQuery", "HTML", "CSS"],
  //         "backEnd": ["Java", "MyBatis", "MySQL", "Struts2"]
  //       },
  //       "contribution": "1인 프로젝트로 모두 개발"
  //     },
  //     {
  //       "id": 5,
  //       "name": "ONE Portal - Overbatching",
  //       "githubLink": null,
  //       "duration": {
  //         "start": { "year": 2016, "month": 10 },
  //         "end": { "year": 2016, "month": 11 }
  //       },
  //       "projectDesc": "재고가 있는 주문만 Batching 가능하게 하는 기능",
  //       "devDesc": "Back-end 개발",
  //       "devSpec": {
  //         "frontEnd": [],
  //         "backEnd": ["Java", "MyBatis", "MySQL", "Struts2"]
  //       },
  //       "contribution": "1인 프로젝트로 모두 개발"
  //     },
  //     {
  //       "id": 4,
  //       "name": "ONE Portal, ONE WMS 유지보수",
  //       "githubLink": null,
  //       "duration": {
  //         "start": { "year": 2015, "month": 12 },
  //         "end": { "year": 2017, "month": 1 }
  //       },
  //       "projectDesc": "주문 포탈, 재고 관리 시스템 유지보수",
  //       "devDesc": "Front-end, Back-end 개발",
  //       "devSpec": {
  //         "frontEnd": ["JavaScript", "jQuery", "JSP", "HTML", "CSS"],
  //         "backEnd": ["Java", "MyBatis", "MySQL", "Struts2"]
  //       },
  //       "contribution": "2인으로 진행하던 중 2016년 10월부터 1인으로 진행"
  //     },
  //     {
  //       "id": 3,
  //       "name": "ONE WMS",
  //       "githubLink": null,
  //       "duration": {
  //         "start": { "year": 2015, "month": 8 },
  //         "end": { "year": 2015, "month": 11 }
  //       },
  //       "projectDesc": "재고 관리 시스템",
  //       "devDesc": "Back-end 개발",
  //       "devSpec": {
  //         "frontEnd": [],
  //         "backEnd": ["Java", "MyBatis", "MySQL", "Struts2"]
  //       },
  //       "contribution": "2인 체제에서 팀원으로서 개발, 런칭 시점에 미국 창고에 직접 가서 서포트 함"
  //     },
  //     {
  //       "id": 2,
  //       "name": "ONE Portal - ASN",
  //       "githubLink": null,
  //       "duration": {
  //         "start": { "year": 2015, "month": 6 },
  //         "end": { "year": 2015, "month": 7 }
  //       },
  //       "projectDesc": "ASN(판매자가 창고에 보내는 사전 배송 알림 기능) 생성 및 관리 기능",
  //       "devDesc": "Front-end, Back-end 개발",
  //       "devSpec": {
  //         "frontEnd": ["JavaScript", "jQuery", "JSP", "HTML", "CSS"],
  //         "backEnd": ["Java", "MyBatis", "MySQL", "Struts2"]
  //       },
  //       "contribution": "1인 프로젝트로 모두 개발"
  //     },
  //     {
  //       "id": 1,
  //       "name": "ONE Portal - ONE Box",
  //       "githubLink": null,
  //       "duration": {
  //         "start": { "year": 2015, "month": 5 },
  //         "end": { "year": 2015, "month": 6 }
  //       },
  //       "projectDesc": "창고 작업의 로그를 남기는 기능 및 창고 관리자와 판매자가 메시지를 주고받을 수 있도록 하는 기능",
  //       "devDesc": "Front-end, Back-end 개발",
  //       "devSpec": {
  //         "frontEnd": ["JavaScript", "jQuery", "JSP", "HTML", "CSS"],
  //         "backEnd": ["Java", "MyBatis", "MySQL", "Struts2"]
  //       },
  //       "contribution": "2인 체제에서 팀원으로서 로그를 남기는 기능 개발"
  //     }
  //   ]
  // },
  // "certificateList": {
  //   "title": "자격증",
  //   "order": 5,
  //   "htmlId": "certificate-list",
  //   "list": [
  //     {
  //       "issueDate": {
  //         "year": 2016,
  //         "month": 8
  //       },
  //       "name": "CSTS Foundation Level",
  //       "issuedBy": "한국정보통신기술협회"
  //     },
  //     {
  //       "issueDate": {
  //         "year": 2014,
  //         "month": 11
  //       },
  //       "name": "정보처리기사",
  //       "issuedBy": "한국산업인력공단"
  //     }
  //   ]
  // },
  // "educationCompletionList": {
  //   "title": "교육이수내역",
  //   "order": 6,
  //   "htmlId": "education-completion-list",
  //   "list": [
  //     {
  //       "duration": {
  //         "start": { "year": 2018, "month": 3, "day": 6 },
  //         "end": { "year": 2018, "month": 3, "day": 7 }
  //       },
  //       "institution": "(재)부산정보산업진흥원",
  //       "title": "리눅스 서버(기초)",
  //       "subjects": null
  //     },
  //     {
  //       "duration": {
  //         "start": { "year": 2017, "month": 1, "day": 18 },
  //         "end": { "year": 2017, "month": 1, "day": 20 }
  //       },
  //       "institution": "(재)부산정보산업진흥원",
  //       "title": "Node.js 활용 웹 어플리케이션 개발",
  //       "subjects": null
  //     },
  //     {
  //       "duration": {
  //         "start": { "year": 2016, "month": 7, "day": 6 },
  //         "end": { "year": 2016, "month": 7, "day": 8 }
  //       },
  //       "institution": "(재)부산정보산업진흥원",
  //       "title": "2016년 제1회 SW테스트 전문가 양성교육",
  //       "subjects": null
  //     },
  //     {
  //       "duration": {
  //         "start": { "year": 2014, "month": 8, "day": null },
  //         "end": { "year": 2015, "month": 1, "day": null }
  //       },
  //       "institution": "동성직업전문학교",
  //       "title": "스마트폰 앱 융합 웹 개발자",
  //       "subjects": ["Java", "데이터베이스", "안드로이드", "JSP/Servlet", "JavaScript & jQuery"]
  //     }
  //   ]
  // },
  // "toyProjects": {
  //   "title": "개인프로젝트",
  //   "order": 7,
  //   "htmlId": "toy-projects",
  //   "list": [
  //     {
  //       "id": 2,
  //       "name": "일정 관리 앱",
  //       "githubLink": "https://github.com/Yonnani/schedule-manager",
  //       "serviceLink": "https://yonnani.github.io/schedule-manager",
  //       "duration": {
  //         "start": { "year": 2021, "month": 9 },
  //         "end": { "year": 2021, "month": 10 }
  //       },
  //       "projectDesc": "날짜별로 일정을 등록, 삭제, 수정하고 완료 처리 가능하도록 한 서비스",
  //       "devDesc": "로컬 스토리지를 이용한 Front-end 개발",
  //       "devSpec": {
  //         "frontEnd": ["JavaScript", "ES6+", "Vue.js", "Vuex", "HTML", "SCSS", "CSS"],
  //         "backEnd": []
  //       }
  //     },
  //     {
  //       "id": 1,
  //       "name": "웹 이력서",
  //       "githubLink": "https://github.com/Yonnani/yonnani.github.io",
  //       "duration": {
  //         "start": { "year": 2021, "month": 8 },
  //         "end": { "year": 2021, "month": 9 }
  //       },
  //       "projectDesc": "웹 페이지에서 이력서를 조회 가능하도록 한 서비스",
  //       "devDesc": "기획, 디자인, 개발 진행",
  //       "devSpec": {
  //         "frontEnd": ["JavaScript", "ES6+", "Vue.js", "HTML", "SCSS", "CSS"],
  //         "backEnd": []
  //       }
  //     }
  //   ]
  // }
}